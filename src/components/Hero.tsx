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
            className={`px-6 py-3 rounded-full text-sm sm:text-base font-medium border transition ${activePersona === 'samantha'
              ? 'bg-theme-main text-white'
              : 'border-gray-300 text-gray-700 hover:bg-theme-dark hover:text-white'
              }`}
            onClick={() => setActivePersona('samantha')}
          >
            Samantha
          </button>
          <button
            className={`px-6 py-3 rounded-full text-sm sm:text-base font-medium border transition ${activePersona === 'arin'
              ? 'bg-theme-main text-white'
              : 'border-gray-300 text-gray-700 hover:bg-theme-dark hover:text-white'
              }`}
            onClick={() => setActivePersona('arin')}
          >
            Arin
          </button>

        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all">
          {/* Samantha/Arin Panel */}
          <div className="scroll-review bg-gray-50 p-4 sm:p-6 rounded-lg shadow border border-gray-200 text-left h-64 sm:h-72 overflow-y-auto opacity-0 transform translate-y-10">
            <h3 className="text-sm sm:text-base font-semibold text-gray-500 mb-2">
              {activePersona === 'samantha' ? 'Samantha' : 'Arin'} responds:
            </h3>
            <div className="space-y-2">
              {(activePersona === 'samantha' ? samanthaHistory : arinHistory).map((message, index) => (
                <div
                  key={index}
                  className={`${index % 2 === 0
                    ? 'bg-theme-main text-white'
                    : 'bg-theme-light text-gray-800'
                    } px-4 py-3 rounded-lg shadow-md border text-sm`}
                >
                  {message}
                </div>
              ))}
              {/* Show typing indicator */}
              {typingIndicator && (
                <div className="text-gray-500 text-sm flex items-center">
                  {typingIndicator}
                </div>
              )}
              {!input && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-500">Suggestions:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {suggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* ChatGPT Panel */}
          <div className="scroll-review bg-gray-50 p-4 sm:p-6 rounded-lg shadow border border-gray-200 text-left h-64 sm:h-72 overflow-y-auto opacity-0 transform translate-y-10">
            <h3 className="text-sm sm:text-base font-semibold text-gray-500 mb-2">ChatGPT responds:</h3>
            <div className="space-y-2">
              {gptReply ? (
                <div className="scroll-review bg-theme-light px-4 py-3 rounded-lg shadow-md border text-sm text-gray-800 animate-fade-in">
                  {gptReply}
                </div>
              ) : (
                !input && ( // Hide suggestions when the user is typing
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-500">Suggestions:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
              {/* Show typing indicator */}
              {typingIndicator && (
                <div className="text-gray-500 text-sm flex items-center animate-fade-in">
                  {loading ? 'ChatGPT typing...' : typingIndicator}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="scroll-review mt-10 max-w-xl mx-auto opacity-0 transform translate-y-10">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-theme-main focus:border-theme-main transition-all duration-200"
            placeholder="Type your message here..."
            disabled={messageCount >= 5}
          />

          <button
            onClick={handleSend}
            disabled={loading || messageCount >= 5}
            className="mt-4 w-full bg-theme-main hover:bg-[#3c1668] text-white py-3 rounded-lg text-sm sm:text-base font-medium transition"
          >
            {messageCount >= 5 ? 'Limit Reached (5 Messages)' : loading ? 'Sending...' : 'Send to AI'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
