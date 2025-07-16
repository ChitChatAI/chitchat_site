import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import { createNovaAgent } from "./supportAgent"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/branding', express.static(path.join(__dirname, 'public/branding')));

console.log("✅ Server starting...");
console.log(process.env.OPENAI_API_KEY ? "🔐 OpenAI key loaded." : "❌ No OpenAI key.");

// Load context.txt (optional for frontend or fallback use)
const contextPath = path.join(__dirname, "context.txt");
const contextText = fs.existsSync(contextPath) ? fs.readFileSync(contextPath, "utf-8") : "";

let novaAgent: any = null;

// ─── POST /api/agent ────────────────────────────────────────────────────────
app.post("/api/agent", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    if (!novaAgent) novaAgent = await createNovaAgent();
    const result = await novaAgent.invoke({ input: message });
    const reply = result?.output || "Sorry, I didn’t catch that.";
    res.json({ reply });
  } catch (err) {
    console.error("❌ Nova Agent Error:", err);
    res.status(500).json({ error: "Agent failed to respond." });
  }
});

// ─── POST /api/send-email ────────────────────────────────────────────────────
app.post("/api/send-email", async (req, res) => {
  const { name, email, subject = "No subject", message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 🔹 Email to internal team
    await transporter.sendMail({
      from: `"ChitChat AI Contact" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      subject: `📨 New Contact Message from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // 🔹 Auto-reply to user
    await transporter.sendMail({
      from: `"ChitChat AI" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: `We've received your message ✔`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #fff; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto;">
          <div style="text-align: center; margin-bottom: 24px;">
            <img src="https://chitchatai.co.za/branding/Logo.png" alt="ChitChat AI Logo" style="max-height: 60px;">
          </div>
          <h2 style="color: #260a40;">Hi ${name},</h2>
          <p>Thanks for reaching out to <strong>ChitChat AI</strong>! We’ve received your message and will be in touch soon.</p>
          <p style="margin-top: 24px; font-size: 14px; color: #777;">This is an automated message. Please do not reply.</p>
          <p style="margin-top: 32px; font-size: 13px; color: #aaa;">— The ChitChat AI Support Team</p>
        </div>
      `,
    });

    res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("❌ Email sending error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// ─── Serve Frontend ─────────────────────────────────────────────────────────
const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));
app.get("*", (_, res) => res.sendFile(path.join(distPath, "index.html")));

// ─── Start Server ───────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
