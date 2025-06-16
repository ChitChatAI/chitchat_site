import React, { useEffect, useState } from 'react';

const Businesses: React.FC = () => {
  // Typing animation for AI intro text (used in first section)
  const [headerText, setHeaderText] = useState('');
  const fullText = "AI That Fits Seamlessly\nInto Your Operations";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setHeaderText(fullText.substring(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 50);
    return () => clearInterval(typingInterval);
  }, [fullText]);

  const includedFeatures = [
    {
      title: 'Custom Persona Design',
      description: 'Psychology-driven personas that understand emotional nuance.',
      icon: 'psychology'
    },
    {
      title: 'Tone & Personality Development',
      description: 'Carefully crafted voices that match your brand identity.',
      icon: 'record_voice_over'
    },
    {
      title: 'Industry-Specific Adaptation',
      description: 'Tailored knowledge base for your business vertical.',
      icon: 'business_center'
    },
    {
      title: 'Integration Support',
      description: 'Works with your existing tech stack (chat, WhatsApp, voice, etc.).',
      icon: 'integration_instructions'
    },
    {
      title: 'Developer Collaboration',
      description: 'We work with your team or provide our own technical experts.',
      icon: 'code'
    },
    {
      title: 'Continuous Improvements',
      description: 'Regular updates based on conversation data and feedback.',
      icon: 'update'
    },
    {
      title: 'Human Testing & QA',
      description: 'Rigorous quality assurance by our psychology specialists.',
      icon: 'bug_report'
    },
    {
      title: 'End-to-End Setup & Training',
      description: 'We configure, train, and refine each persona for your environment — no heavy lifting needed.',
      icon: 'construction',
    },
    {
      title: 'Advanced Reporting & Insights',
      description: 'Access real-time analytics on conversations, sentiment, and engagement trends.',
      icon: 'analytics',
    }
  ];

  const businessValues = [
    {
      title: 'Reduce Support Costs',
      description: 'Replace call center agents or scale your operations without new hires.',
      icon: 'savings',
      metric: 'Up to 40% cost reduction',
    },
    {
      title: 'Boost Retention & Upsells',
      description: 'Drive revenue through nuanced conversations, not generic sales scripts.',
      icon: 'trending_up',
      metric: '20% increase in customer retention',
    },
    {
      title: 'Save Valuable Time',
      description: 'No writing prompts or managing AI yourself - we handle everything.',
      icon: 'schedule',
      metric: '30% faster response times',
    },
    {
      title: 'Gain Competitive Edge',
      description: 'Stand out by offering truly believable AI support before your competitors.',
      icon: 'workspace_premium',
      metric: '15% higher customer satisfaction',
    },
    {
      title: 'Improve Customer Experience',
      description: 'Create human-like interactions that feel personal and emotionally intelligent.',
      icon: 'sentiment_satisfied',
      metric: '95% positive feedback from users',
    },
    {
      title: 'Unlock 24/7 Availability',
      description: 'Offer round-the-clock support without burnout, delays, or staffing overhead.',
      icon: 'schedule_send',
      metric: '100% uptime across all channels',
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Value Section */}
      <section id="value" className="py-20 px-4 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-8">
            How ChitChat Adds Value to Your Business
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessValues.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <span className="material-symbols-outlined text-4xl text-theme-main mb-4">
                  {item.icon}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-theme-main mb-2">
                  {item.metric}
                </p>
                <p className="text-base text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Features Section */}
      <section id="whats-included" className="py-20 px-4 sm:px-8 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-8">
            What's Included in Every ChitChat Package
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedFeatures.map((item, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-theme-main/10 text-theme-main">
                    <span className="material-symbols-outlined text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <div className="h-1 w-10 bg-theme-main/50 rounded-full mb-2"></div>
                    <p className="text-base text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Businesses;