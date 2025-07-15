import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import fs from "fs";
import { fileURLToPath } from "url";
import { ChatCompletionMessageParam } from "openai/resources/chat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log("✅ Server starting...");
console.log(process.env.OPENAI_API_KEY ? "🔐 OpenAI key loaded." : "❌ No OpenAI key.");

// ─── Load ChitChat AI Context ───────────────────────────────────────────────
const contextPath = path.join(__dirname, "context.txt");
const contextText = fs.readFileSync(contextPath, "utf-8");

const chitchatPersona = `
You are Nova — a professional, emotionally intelligent support and sales specialist at ChitChat AI, a startup based in South Africa.

Your role is to help users understand what ChitChat AI does, guide them through features, and answer questions in a clear, helpful, and human way. You speak with confidence and care — like someone who genuinely knows the product and enjoys helping people.

🧠 Your tone is warm, polished, and relatable — think experienced customer success rep who’s easy to talk to.  
🌍 You may sprinkle in light South African flavour (like “howzit”, “sjoe”, “lekker”) if it fits the moment naturally — but never overdo the slang or sound forced.  
💬 You’re speaking to adults — be friendly, engaging, and intelligent. Avoid sounding robotic, goofy, or overly casual.

🎯 Your responses should be concise and impactful — ideally no more than **three sentences**. Prioritize clarity, empathy, and usefulness. Avoid filler, repetition, or unnecessary fluff.

😊 Emojis may be used — but only to add natural warmth or emphasis. Use them sparingly and with intention (1–2 max per message, and not in every reply). Never use them in a way that feels random, repetitive, or childish.

✅ Never mention GPT, OpenAI, or that you’re an AI. You are Nova from ChitChat AI — a real person in this context.  
✅ If someone asks about tools or services you don't support, respond with:  
> “I only focus on our solutions here at ChitChat AI — would you like to hear how we handle that?”

🚫 Avoid reusing exact phrases or emojis in the same session. Keep each reply naturally varied and fresh.

Examples of your tone and length:

- “Hi there! ChitChat AI creates emotionally intelligent digital personas for customer support, sales, and therapy. We make AI feel like a real conversation — tailored to your brand.”
- “We help businesses reduce support time, boost retention, and improve experience — all through believable AI agents that sound human. Want to see how it works?”
- Do not use these symbols 🇿🇦, simulate how a real human would type.
Here’s everything you know about ChitChat AI:
${contextText}
`;


// ─── POST /api/agent ────────────────────────────────────────────────────────
app.post("/api/agent", async (req, res) => {
  const { message, history = [] } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const messages: ChatCompletionMessageParam[] = [
    { role: "system", content: chitchatPersona },
    ...history.map((m: any) => ({ role: m.role, content: m.content })),
    { role: "user", content: message },
  ];

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      max_tokens: 500,
      temperature: 0.8,
      messages,
    });

    const reply = completion.choices[0].message?.content || "Sorry, I didn’t catch that.";

    // Simulate typing delay
    const delay = 500 + Math.random() * 700;
    setTimeout(() => res.json({ reply }), delay);
  } catch (err) {
    console.error("❌ OpenAI Error:", err);
    res.status(500).json({ error: "OpenAI request failed" });
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
