'use client';

import React, { useState } from 'react';

const apiKey = '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';

const assistantIds = {
  samantha: 'asst_KQe0roMKz1eswZJEwfJxs6Kp',
  arin: 'asst_WzNS3JoJOlTp5O5VNAUAHbby',
};

const Hero: React.FC = () => {
  const [activePersona, setActivePersona] = useState<'samantha' | 'arin'>('samantha');
  const [input, setInput] = useState('');
  const [showReplies, setShowReplies] = useState(false);
  const [samanthaHistory, setSamanthaHistory] = useState<string[]>([]);
  const [arinHistory, setArinHistory] = useState<string[]>([]);
  const [gptReply, setGptReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(Number(localStorage.getItem('msg_count') || 0));

  const suggestions = [
    "How can I improve my 5G speed?",
    "What are the benefits of AI in customer service?",
    "Explain the difference between GPT-4 and GPT-4o.",
  ];

  const handleSend = async () => {
    if (messageCount >= 5) return;
    setLoading(true);
    try {
      const assistant_id = assistantIds[activePersona];

      // Create thread and run in v2
      const runRes = await fetch('https://api.openai.com/v1/threads/runs', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'OpenAI-Beta': 'assistants=v2',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          assistant_id,
          thread: {
            messages: [
              {
                role: 'user',
                content: input,
              },
            ],
          },
        }),
      });

      const runData = await runRes.json();
      const runId = runData?.id;
      const threadId = runData?.thread_id;
      if (!runId || !threadId) throw new Error("Failed to create thread/run.");

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

      const messagesRes = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'OpenAI-Beta': 'assistants=v2',
        },
      });
      const messagesData = await messagesRes.json();
      const lastReply = messagesData?.data?.find(m => m.role === 'assistant')?.content?.[0]?.text?.value;

      if (activePersona === 'samantha') {
        setSamanthaHistory((prev) => [...prev, lastReply || 'No response from Samantha.']);
      } else {
        setArinHistory((prev) => [...prev, lastReply || 'No response from Arin.']);
      }

      // Get GPT-4o reply
      const gptRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: input },
          ],
          temperature: 0.7,
        }),
      });
      const gptData = await gptRes.json();
      const gptReplyText = gptData?.choices?.[0]?.message?.content;
      setGptReply(gptReplyText || 'No response from GPT.');

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
    <section className="pt-32 pb-20 md:pb-28 bg-white font-[Satoshi]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Human Augmented AI <span className="text-[#260a40]">in Action</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Experience how Samantha, Arin, and ChatGPT compare in real conversations — right here in your browser.
        </p>

        <div className="mb-6 flex justify-center space-x-2">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              activePersona === 'samantha'
                ? 'bg-[#260a40] text-white'
                : 'border-gray-300 text-gray-700 hover:border-[#260a40]'
            }`}
            onClick={() => setActivePersona('samantha')}
          >
            Samantha
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              activePersona === 'arin'
                ? 'bg-[#260a40] text-white'
                : 'border-gray-300 text-gray-700 hover:border-[#260a40]'
            }`}
            onClick={() => setActivePersona('arin')}
          >
            Arin
          </button>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 transition-all">
          {/* Samantha/Arin Panel */}
          <div className="bg-gray-50 p-4 rounded-lg shadow border border-gray-200 text-left h-64 overflow-y-auto">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              {activePersona === 'samantha' ? 'Samantha' : 'Arin'} responds:
            </h3>
            <div className="space-y-2">
              {(activePersona === 'samantha' ? samanthaHistory : arinHistory).map((message, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? 'bg-[#260a40] text-white'
                      : 'bg-theme-light text-gray-800'
                  } px-4 py-3 rounded-lg shadow-md border text-sm animate-fade-in`}
                >
                  {message}
                </div>
              ))}
              {loading && (
                <div className="text-gray-500 text-sm flex items-center">
                  Typing<span className="animate-typing-dots ml-1">...</span>
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
          <div className="bg-gray-50 p-4 rounded-lg shadow border border-gray-200 text-left h-64 overflow-y-auto">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">ChatGPT responds:</h3>
            <div className="space-y-2">
              {gptReply ? (
                <div className="bg-theme-light px-4 py-3 rounded-lg shadow-md border text-sm text-gray-800 animate-fade-in">
                  {gptReply}
                </div>
              ) : (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-500">Suggestions:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {suggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              )}
              {loading && (
                <div className="text-gray-500 text-sm flex items-center">
                  Typing<span className="animate-typing-dots ml-1">...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm"
            placeholder="Type your message here..."
            disabled={messageCount >= 5}
          />
          <button
            onClick={handleSend}
            disabled={loading || messageCount >= 5}
            className="mt-4 w-full bg-[#260a40] hover:bg-[#3c1668] text-white py-3 rounded-lg text-sm font-medium transition"
          >
            {messageCount >= 5 ? 'Limit Reached (5 Messages)' : loading ? 'Sending...' : 'Send to AI'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
