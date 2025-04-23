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

const Hero: React.FC = () => {
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.scroll-review');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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
    <section className="pt-20 pb-16 md:pb-28 bg-gradient-to-b from-white via-gray-50 to-gray-100 font-[Satoshi]">
      <div className="container mx-auto px-6 sm:px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Human Augmented AI <span className="text-[#260a40]">in Action</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Experience how our personas compare to standard AI in real conversations — right here in your browser.
        </p>

        <div className="scroll-review mb-6 flex flex-wrap justify-center gap-4 sm:gap-6 opacity-0 transform translate-y-10">
          <button
            className={`px-6 py-3 rounded-full text-sm sm:text-base font-medium border transition-all duration-300 ${activePersona === 'samantha'
              ? 'bg-theme-main text-white shadow-md shadow-theme-main/20'
              : 'border-gray-300 text-gray-700 hover:bg-theme-dark hover:text-white'
              }`}
            onClick={() => setActivePersona('samantha')}
          >
            Samantha
          </button>
          <button
            className={`px-6 py-3 rounded-full text-sm sm:text-base font-medium border transition-all duration-300 ${activePersona === 'arin'
              ? 'bg-theme-main text-white shadow-md shadow-theme-main/20'
              : 'border-gray-300 text-gray-700 hover:bg-theme-dark hover:text-white'
              }`}
            onClick={() => setActivePersona('arin')}
          >
            Arin
          </button>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 transition-all">
          {/* Samantha/Arin Panel - Without Top Border */}
          <div className="scroll-review opacity-0 transform translate-y-10 group">
            <div className="bg-white p-6 rounded-2xl border border-gray-300 text-left h-[320px] sm:h-[360px] overflow-y-auto backdrop-blur-sm transition-all duration-500 relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm sm:text-base font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  {activePersona === 'samantha' ? 'Samantha' : 'Arin'} responds:
                </h3>
                <span className="text-xs text-gray-400 italic">ChitChat AI</span>
              </div>
              
              <div className="space-y-3 pb-2">
                {(activePersona === 'samantha' ? samanthaHistory : arinHistory).map((message, index) => (
                  <div
                    key={index}
                    className="transform transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5"
                  >
                    <div
                      className={`px-4 py-3 rounded-xl border border-gray-300 text-sm transition-all ${
                        index % 2 === 0
                          ? 'bg-gradient-to-br from-theme-main to-theme-main/90 text-white'
                          : 'bg-gradient-to-br from-theme-light to-theme-light/90 text-gray-800'
                      }`}
                    >
                      {message}
                    </div>
                  </div>
                ))}

                {/* Enhanced typing indicator */}
                {typingIndicator && (
                  <div className="flex items-center gap-2 text-gray-500 text-sm px-2 animate-fade-in">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-theme-main rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-theme-main rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-theme-main rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span>{typingIndicator}</span>
                  </div>
                )}
                
                {/* Improved suggestions */}
                {!input && (
                  <div className="mt-5 bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <p className="text-sm font-medium text-gray-600 mb-2">Try asking about:</p>
                    <ul className="space-y-1.5">
                      {suggestions.map((suggestion, index) => (
                        <li 
                          key={index} 
                          className="text-sm text-gray-600 hover:text-theme-main cursor-pointer transition-colors pl-3 border-l-2 border-gray-200 hover:border-theme-main"
                          onClick={() => setInput(suggestion)}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ChatGPT Panel - Without Top Border */}
          <div className="scroll-review opacity-0 transform translate-y-10 group">
            <div className="bg-white p-6 rounded-2xl border border-gray-300 text-left h-[320px] sm:h-[360px] overflow-y-auto backdrop-blur-sm transition-all duration-500 relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm sm:text-base font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  ChatGPT responds:
                </h3>
                <span className="text-xs text-gray-400 italic">Standard AI</span>
              </div>
              
              <div className="space-y-3 pb-2">
                {gptReply ? (
                  <div className="bg-gradient-to-br from-gray-100 to-gray-50 px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-800">
                    {gptReply}
                  </div>
                ) : (
                  !input && (
                    <div className="mt-5 bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <p className="text-sm font-medium text-gray-600 mb-2">Try asking about:</p>
                      <ul className="space-y-1.5">
                        {suggestions.map((suggestion, index) => (
                          <li 
                            key={index} 
                            className="text-sm text-gray-600 hover:text-blue-500 cursor-pointer transition-colors pl-3 border-l-2 border-gray-200 hover:border-blue-500"
                            onClick={() => setInput(suggestion)}
                          >
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
                
                {/* Enhanced typing indicator */}
                {typingIndicator && (
                  <div className="flex items-center gap-2 text-gray-500 text-sm px-2 animate-fade-in">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span>{loading ? 'ChatGPT typing...' : typingIndicator}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>  

        {/* Beautified Input Area */}
        <div className="scroll-review mt-10 max-w-xl mx-auto opacity-0 transform translate-y-10">
          <div className="relative group">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-5 py-4 border border-gray-200 rounded-xl shadow-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-theme-main/50 focus:border-theme-main transition-all duration-300 bg-white/80 backdrop-blur-sm"
              placeholder="Type your message here..."
              disabled={messageCount >= 5}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-theme-main/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
          </div>

          <button
            onClick={handleSend}
            disabled={loading || messageCount >= 5 || !input.trim()}
            className={`mt-4 w-full bg-gradient-to-r from-theme-main to-purple-600 text-white py-3.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 relative overflow-hidden ${
              loading || messageCount >= 5 || !input.trim() ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-theme-main/20 hover:-translate-y-0.5'
            }`}
          >
            <span className="relative z-10">
              {messageCount >= 5 ? 'Limit Reached (5 Messages)' : loading ? 'Sending...' : 'Send to AI'}
            </span>
            {!(loading || messageCount >= 5 || !input.trim()) && (
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-theme-main opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            )}
          </button>
          
          {messageCount > 0 && (
            <p className="mt-2 text-xs text-gray-500 text-center">
              {5 - messageCount} message{5 - messageCount !== 1 ? 's' : ''} remaining
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
