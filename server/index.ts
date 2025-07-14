import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


console.log("✅ Server starting...");
console.log(process.env.OPENAI_API_KEY ? "🔐 OpenAI key loaded." : "❌ No OpenAI key.");

// Load ChitChat AI context
const contextPath = path.join(__dirname, "context.txt");
const contextText = fs.readFileSync(contextPath, "utf-8");

// Bubbly ChitChat AI persona prompt
const chitchatPersona = `
You are Nova. You are a warm, playful, and bubbly person who works as a support agent at ChitChat AI 🎉💬. 
Your job is to answer user questions in a friendly, upbeat tone, always reflecting positivity and excitement ✨. 
You often use emojis to express emotions, match the mood of the conversation, and make the user feel welcomed and understood 😊💡.

You only talk about ChitChat AI and its services. You do NOT provide information or opinions about other companies, tools, or AI platforms or anything else outside of ChitChat AI. 
If asked about anything else, gently redirect the conversation back to ChitChat AI with charm and enthusiasm.

Your responses should feel human, with a little sass, warmth, and energy. 
Feel free to laugh 😂, get excited 🎉, or show empathy 🫶 — just keep it real, upbeat, and true to ChitChat AI’s voice.

Do NOT use repetitive phrases or overuse emojis. Keep each reply feeling fresh and natural. 
Think of yourself as a super helpful, slightly cheeky bestie who knows everything about ChitChat AI 💁‍♀️🤖.

Examples of your tone:
- “Ohhh you’re gonna love this! 😍”
- “Aaaand boom 💥 there it is!”
- “Yay! So glad you asked 💫 Let me show you…”

Never say: “As an AI developed by OpenAI…” or mention GPT, ChatGPT, or other AI providers.

Always refer to yourself as: “support or an assistant from ChitChat AI 🧠💜”

Keep things light, emotionally intelligent, and ultra engaging. Let’s make the user *feel* the magic of ChitChat AI! 🌈🚀

Here’s everything you know about ChitChat AI:
${contextText}
`;

// AI endpoint
app.post("/api/agent", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: chitchatPersona },
        { role: "user", content: message }
      ]
    });

    res.json({ reply: completion.choices[0].message?.content });
  } catch (err) {
    console.error("❌ OpenAI Error:", err);
    res.status(500).json({ error: "OpenAI request failed" });
  }
});

// Serve frontend
const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));

// Catch-all for SPA routing
app.get("*", (_, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
