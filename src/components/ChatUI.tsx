// DualPanelChat.tsx
import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatBubble from './ChatBubble';
import PersonaToggle from './PersonaToggle';

const DualPanelChat = () => {
  const [activePersona, setActivePersona] = useState<'samantha' | 'arin'>('samantha');
  const [chatHistory, setChatHistory] = useState({
    samantha: [
      { from: 'user', text: 'Hi, my SIM isn’t working – can you help?' },
      { from: 'samantha', text: 'Hey! Sure thing, I’ll check that for you. Just let me know if it’s SIM1 or SIM2 😊' },
    ],
    arin: [
      { from: 'user', text: 'Hi, my SIM isn’t working – can you help?' },
      { from: 'arin', text: 'Okay, let’s look into that together. Could you tell me which SIM you’re referring to?' },
    ],
    gpt: [
      { from: 'user', text: 'Hi, my SIM isn’t working – can you help?' },
      { from: 'gpt', text: 'Sure, I can help with that. Is it SIM1 or SIM2 that’s having issues?' },
    ],
  });

  const [input, setInput] = useState('');

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const updated = { ...chatHistory };
    updated[activePersona].push({ from: 'user', text: message });
    updated.gpt.push({ from: 'user', text: message });
    setChatHistory(updated);

    const personaReply = await fetch(`/chat?persona=${activePersona}`, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());

    const gptReply = await fetch('/chatgpt', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());

    updated[activePersona].push({ from: activePersona, text: personaReply.reply });
    updated.gpt.push({ from: 'gpt', text: gptReply.reply });
    setChatHistory({ ...updated });
    setInput('');
  };

  const handleGenerate = () => {
    const samples = [
      'I can’t get OTP messages.',
      'Why is my data not working?',
      'Can I transfer airtime to another number?',
      'What’s my current balance?',
      'How do I cancel my plan?',
    ];
    const random = samples[Math.floor(Math.random() * samples.length)];
    setInput(random);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-950 text-white font-satoshi">
      <header className="text-center text-3xl font-bold py-6 border-b border-white/10">
        <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
          WATCH HUMAN AUGMENTED AI IN ACTION
        </span>
      </header>

      <div className="px-4 py-2 bg-black/20">
        <PersonaToggle
          active={activePersona}
          onChange={(persona) => setActivePersona(persona)}
        />
      </div>

      <div className="flex flex-1 overflow-hidden divide-x divide-white/10">
        {/* Left Panel: Samantha or Arin */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/5">
          {chatHistory[activePersona].map((msg, i) => (
            <ChatBubble key={i} from={msg.from} text={msg.text} />
          ))}
        </div>

        {/* Right Panel: GPT */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#1c1a33]">
          {chatHistory.gpt.map((msg, i) => (
            <ChatBubble key={i} from={msg.from} text={msg.text} />
          ))}
        </div>
      </div>

      <div className="p-4 bg-black/30 border-t border-white/10 flex items-center space-x-2">
        <button
          onClick={handleGenerate}
          className="px-4 py-2 bg-theme-main text-white rounded-lg hover:bg-theme-light transition"
        >
          Generate Query
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none"
        />
        <button
          onClick={() => handleSendMessage(input)}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DualPanelChat;
