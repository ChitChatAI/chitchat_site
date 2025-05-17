'use client';

import React, { useEffect, useState } from 'react';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

console.log('[DEBUG] API key at module load:', apiKey);

const assistantIds = {
  samantha: import.meta.env.VITE_ASSISTANT_ID_SAMANTHA,
  arin: import.meta.env.VITE_ASSISTANT_ID_ARIN,
};

if (!apiKey) {
  console.error('[ERROR] API key is missing or undefined!');
}

const Hero: React.FC<{ id?: string }> = ({ id }) => {
  const [activePersona, setActivePersona] = useState<'samantha' | 'arin'>('samantha');
  const [input, setInput] = useState('');
  const [showReplies, setShowReplies] = useState(false);
  const [samanthaHistory, setSamanthaHistory] = useState<string[]>([]);
  const [arinHistory, setArinHistory] = useState<string[]>([]);
  const [gptReply, setGptReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(Number(localStorage.getItem('msg_count') || 0));
  const [typingIndicator, setTypingIndicator] = useState('');

  const suggestions = [
    "How can I improve my 5G speed?",
    "What are the benefits of AI in customer service?",
    "Explain the difference between GPT-4 and GPT-4o.",
  ];

  useEffect(() => {
    console.log('[DEBUG] Hero component mounted. API key:', apiKey);
    // Remove scroll animation observer
    return () => { };
  }, []);

  useEffect(() => {
    // Update typing indicator based on input and active persona
    if (input.length > 0 && !loading) {
      setTypingIndicator('User typing...');
    } else if (loading) {
      setTypingIndicator(`${activePersona === 'samantha' ? 'Samantha' : 'Arin'} typing...`);
    } else {
      setTypingIndicator('');
    }
  }, [input, activePersona, loading]);

  const handleSend = async () => {
    console.log('[DEBUG] API key before sending request:', apiKey);
    if (messageCount >= 5) return;
    setLoading(true);
    try {
      console.log('[DEBUG] Using API key:', apiKey);
      // Step 1: Create thread with the user's message
      const threadRes = await fetch('https://api.openai.com/v1/threads', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'OpenAI-Beta': 'assistants=v2',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: input }],
        }),
      });
      const threadData = await threadRes.json();
      const threadId = threadData?.id;
      if (!threadId) throw new Error("Thread creation failed.");

      // Step 2: Start the run using the thread ID and assistant id
      const assistant_id = assistantIds[activePersona];
      const runRes = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'OpenAI-Beta': 'assistants=v2',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ assistant_id }),
      });
      const runData = await runRes.json();
      const runId = runData?.id;
      if (!runId) throw new Error("Run creation failed.");

      // Step 3: Poll until the run is completed
      let runStatus = runData.status;
      while (runStatus !== 'completed') {
        await new Promise(res => setTimeout(res, 1000));
        const pollRes = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'OpenAI-Beta': 'assistants=v2',
          },
        });
        const pollData = await pollRes.json();
        runStatus = pollData.status;
      }

      // Step 4: Retrieve the thread's messages
      const messagesRes = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'OpenAI-Beta': 'assistants=v2',
        },
      });
      const messagesData = await messagesRes.json();
      const lastReply = messagesData?.data?.find(m => m.role === 'assistant')?.content?.[0]?.text?.value;

      if (activePersona === 'samantha') {
        setSamanthaHistory(prev => [...prev, lastReply || 'No response from Samantha.']);
      } else {
        setArinHistory(prev => [...prev, lastReply || 'No response from Arin.']);
      }

      const newCount = messageCount + 1;
      setMessageCount(newCount);
      localStorage.setItem('msg_count', String(newCount));
      setShowReplies(true);

      // Clear input after sending
      setInput('');
    } catch (err) {
      console.error('[AI ERROR]', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id={id}
      className="relative py-20 md:py-44 bg-gradient-to-br from-white via-gray-50 to-gray-100 font-[Satoshi] overflow-hidden px-4 sm:px-8"
    >
      {/* Modern blurred background shapes */}
      <div className="absolute top-0 left-0 w-[32rem] h-[32rem] bg-theme-main/10 rounded-full blur-[120px] -z-10 animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-pink-400/10 rounded-full blur-[100px] -z-10 animate-float"></div>
      {/* Glowy elements */}
      <div className="pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-theme-main/20 via-purple-400/10 to-pink-400/10 rounded-full blur-[140px] opacity-40 z-0"></div>
        <div className="absolute bottom-10 left-1/4 w-60 h-60 bg-gradient-to-tr from-pink-400/20 via-theme-main/10 to-white/0 rounded-full blur-[110px] opacity-30 z-0"></div>
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-gradient-to-bl from-purple-400/20 via-theme-main/10 to-white/0 rounded-full blur-[120px] opacity-30 z-0"></div>
      </div>
      <div className="container mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-20 md:gap-40 min-h-[700px]">
          {/* Left: Header and Paragraph */}
          <div className="flex-1 flex flex-col items-start justify-center text-center md:text-left h-full min-h-[400px] py-0">
            <div className="inline-block mb-8 px-4 py-1 bg-theme-main/10 text-theme-main backdrop-blur-sm rounded-full text-sm font-medium animate-fade-in">
              Customer Support AI
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight drop-shadow-xl animate-fade-in-up">

              <span className="block bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent animate-gradient-x pb-4">
                Human Augmented AI
              </span>
              <span className="block text-[#260a40] mt-2 animate-fade-in-up delay-150">in Action</span>
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
              Experience how our <span className="text-theme-main font-semibold">personas</span> transform customer support by delivering personalized interactions and effective solutions.
            </p>
            <div className="flex flex-wrap gap-6 mt-4 animate-fade-in-up delay-500">
              <button className="px-10 py-4 rounded-full bg-theme-main text-white font-bold shadow-2xl hover:bg-theme-dark transition-all duration-300 text-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-theme-main/40">
                Request a Demo
              </button>
             
            </div>
            {/* Animated dots for life */}
            <div className="flex space-x-3 mt-10 animate-fade-in-up delay-700">
              <span className="w-4 h-4 rounded-full bg-theme-main animate-pulse"></span>
              <span className="w-4 h-4 rounded-full bg-purple-400 animate-pulse delay-150"></span>
              <span className="w-4 h-4 rounded-full bg-pink-400 animate-pulse delay-300"></span>
            </div>
          </div>
          {/* Right: Banner Image */}
          <div className="flex-1 flex justify-center md:justify-end items-start">
            <div className="relative group">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-theme-main/10 rounded-full blur-2xl z-0 animate-float"></div>
              <img
                src="/images/hero.png"
                alt="Stats Banner"
                className="relative max-w-sm md:max-w-lg lg:max-w-2xl w-full h-auto rounded-[2.5rem] z-10 group-hover:scale-105 transition-transform duration-500"
              />
              {/* Elegant floating card */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl px-12 py-8 flex flex-col items-center border border-gray-100 min-w-[260px] animate-fade-in-up delay-500">
                <span className="text-theme-main font-bold text-2xl mb-2 tracking-wide flex items-center gap-2">
                  <svg className="w-6 h-6 text-theme-main animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Live AI Demo
                </span>
                <span className="text-gray-500 text-lg">Let's talk</span>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-400/10 rounded-full blur-2xl z-0 animate-float-slow"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Subtle bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
      {/* Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 18s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .animate-fade-in-up.delay-150 { animation-delay: 0.15s; }
        .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
        .animate-fade-in-up.delay-500 { animation-delay: 0.5s; }
        .animate-fade-in-up.delay-700 { animation-delay: 0.7s; }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-pulse {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
