import React, { useState, useEffect } from 'react';
import { MessageCircle, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Type Definitions ────────────────────────────────────────────────────────
type Message = {
  from: 'user' | 'bot';
  text: string;
};

// ─── Component ────────────────────────────────────────────────────────────────
const ChatModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage: Message = { from: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);
    setInput('');

    try {
      const res = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage: Message = { from: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
      if (!open) setUnreadCount((count) => count + 1);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: '⚠️ Something went.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      setUnreadCount(0);
    }
  }, [open]);

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          {/* Tooltip */}
          <motion.div
            className="absolute bottom-14 right-0 text-xs text-center px-2 py-1 rounded w-max"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            <motion.div
              className="flex flex-col items-center font-medium"
              animate={{
                color: ["#D1D5DB", "#ffffff", "#D1D5DB"]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                
              </motion.span>
              <span>Reach</span>
              <span>the</span>
              <span>support</span>
              <span>team👋</span>
            </motion.div>
          </motion.div>



          {/* Button */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="bg-black p-3 rounded-full shadow-lg border border-gray-700 hover:scale-110 transition relative"
            aria-label="Toggle Chat"
          >
            <MessageCircle size={22} className="text-gray-300" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gradient-to-r from-theme-main to-theme-light rounded-full border-2 border-black animate-ping" />
            {unreadCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gradient-to-r from-theme-main to-theme-light rounded-full border-2 border-black flex items-center justify-center text-[10px] text-black font-bold">
                {unreadCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Chat Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 left-4 sm:right-6 sm:left-auto z-50 w-auto sm:w-80 max-h-[80vh] bg-black shadow-xl rounded-lg flex flex-col overflow-hidden border border-gray-700"
          >
            {/* Header */}
            <div className="bg-black text-white p-3 font-semibold flex justify-between items-center">
              <span>Contact Us</span>
              <button
                onClick={() => setOpen(false)}
                className="text-sm hover:text-gray-400 transition"
              >
                ✕
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm text-gray-200 bg-black">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-start gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                >
                  {msg.from === 'bot' && (
                    <Bot size={18} className="mt-1 text-theme-main" />
                  )}

                  <div
                    className={`p-2 rounded-lg max-w-[70%] leading-relaxed ${msg.from === 'user'
                      ? 'bg-gray-800 text-white'
                      : 'bg-theme-light text-black'
                      }`}
                  >
                    {msg.text}
                  </div>

                  {msg.from === 'user' && (
                    <User size={18} className="mt-1 text-white" />
                  )}
                </motion.div>
              ))}

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-theme-light animate-pulse"
                >
                  Typing...
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-700 p-2 bg-black flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1 px-3 py-1 bg-black border border-gray-700 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-theme-main transition"
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="bg-theme-main text-white px-3 py-1 rounded text-sm hover:opacity-90 disabled:opacity-50 transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatModal;
