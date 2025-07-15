import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, User, Bot, Maximize2, Minimize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = { from: 'user' | 'bot'; text: string; timestamp: string };
const formatTime = (date: Date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const ChatModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const now = formatTime(new Date());
    const newMessage: Message = { from: 'user', text: input.trim(), timestamp: now };
    const updated = [...messages, newMessage];
    setMessages(updated);
    setLoading(true);
    setInput('');

    try {
      const res = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input.trim(),
          history: updated.map((m) => ({ role: m.from === 'user' ? 'user' : 'assistant', content: m.text }))
        })
      });

      const data = await res.json();
      const reply = data?.reply || '⚠️ Something went wrong. Please try again later.';
      setMessages((prev) => [...prev, { from: 'bot', text: reply, timestamp: formatTime(new Date()) }]);
      if (!open) setUnreadCount((c) => c + 1);
    } catch {
      setMessages((prev) => [...prev, { from: 'bot', text: '⚠️ Something went wrong. Please try again later.', timestamp: now }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => { if (open) setUnreadCount(0); }, [open]);
  useEffect(() => {
    if (open && messages.length === 0) {
      const now = formatTime(new Date());
      setMessages([{ from: 'bot', text: "Hi there! I'm Nova 👋 your personal assistant from ChitChat AI, here to help you.", timestamp: now }]);
    }
  }, [open, messages.length]);

  useEffect(scrollToBottom, [messages]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-transparent p-3 rounded-full shadow-lg border border-gray-700 hover:scale-110 transition relative"
          aria-label="Toggle Chat"
        >
          <MessageCircle size={22} className="text-gray-300" />
          {unreadCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gradient-to-r from-theme-main to-theme-light rounded-full border-2 border-black flex items-center justify-center text-[10px] text-black font-bold">
              {unreadCount}
            </span>
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-modal"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`fixed z-[9999] flex flex-col border border-gray-700 shadow-xl bg-black rounded-lg overflow-hidden
              ${fullscreen ? 'inset-4 h-[calc(100dvh-2rem)]' : 'bottom-20 right-4 w-[95vw] sm:w-[440px] max-h-[100dvh] sm:max-h-[85vh] sm:h-auto'}`}
          >
            <div className="bg-black text-white p-3 font-semibold flex justify-between items-center">
              <span>Nova | Live Support</span>
              <div className="flex gap-2 items-center">
                <button onClick={() => setFullscreen(!fullscreen)}>
                  {fullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
                <button onClick={() => setOpen(false)}><X size={18} /></button>
              </div>
            </div>

            <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm text-gray-200 bg-black">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className={`flex items-start gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.from === 'bot' && <Bot size={18} className="mt-1 text-white" />}
                  <div className={`relative p-2 rounded-lg max-w-[70%] leading-relaxed ${msg.from === 'user' ? 'bg-gray-800 text-white' : 'bg-theme-light text-black'}`}>
                    {msg.text}
                    <div className="text-[10px] text-gray-400 mt-1 text-right">{msg.timestamp}</div>
                  </div>
                  {msg.from === 'user' && <User size={18} className="mt-1 text-white" />}
                </motion.div>
              ))}
              {loading && (
                <motion.div key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-xs text-theme-light animate-pulse">
                  Typing...
                </motion.div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="border-t border-gray-700 p-2 bg-black flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                disabled={loading}
                className="flex-1 px-3 py-1 bg-black border border-gray-700 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-theme-main transition"
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="bg-theme-main text-white px-3 py-1 rounded text-sm hover:opacity-90 disabled:opacity-50 transition"
              >
                Send
              </button>
            </div>

            <div className="text-center text-xs text-gray-500 bg-black py-2 border-t border-gray-800">
              Powered by <span className="text-theme-light font-semibold">ChitChat AI</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatModal;
