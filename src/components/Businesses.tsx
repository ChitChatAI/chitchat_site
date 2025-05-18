import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

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
  ];

  const useCases = [
    {
      title: 'Instant Support That Feels Personal',
      description:
        'No more long wait times or robotic replies. Our AI personas handle customer queries immediately, 24/7, while sounding human, warm, and helpful.',
    },
    {
      title: 'Customer Retention, Reinvented',
      description:
        'Catch cancellations before they happen. Our AI personas are trained in subtle psychological techniques to calm, connect, and convince.',
    },
    {
      title: 'Humanised Automation for Every Department',
      description:
        'From tech support to billing, we tailor the tone. Each persona is custom-built to match your brand and department needs.',
    },
    {
      title: 'Never Sound Generic Again',
      description:
        'Say goodbye to copy-paste chatbot templates. ChitChat personas are deeply humanised, each with unique quirks, tone, and emotional intelligence.',
    },
    {
      title: 'Custom Chatbots for Any Industry',
      description:
        'Whether you\'re in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.',
    },
  ];

  return (
    <div className="font-satoshi">
      {/* Business Values Section */}
      <section id="value" className="relative py-20 md:py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 border-t border-gray-100 overflow-hidden px-4 sm:px-8 lg:px-20">
        {/* Subtle glowy background elements */}
        <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-theme-main/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-pink-400/10 rounded-full blur-[100px] -z-10"></div>
        <div className="pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-theme-main/20 via-purple-400/10 to-pink-400/10 rounded-full blur-[100px] opacity-40 z-0"></div>
          <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-gradient-to-tr from-pink-400/20 via-theme-main/10 to-white/0 rounded-full blur-[80px] opacity-30 z-0"></div>
          <div className="absolute top-10 right-1/4 w-64 h-64 bg-gradient-to-bl from-purple-400/20 via-theme-main/10 to-white/0 rounded-full blur-[90px] opacity-30 z-0"></div>
        </div>
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
          }}
        >
          <h3 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-4 pb-16 leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
            How ChitChat Adds Value to Your Business
          </h3>
          <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20">
            {businessValues.map((item, index) => (
              <motion.div
                key={index}
                className="relative scroll-review opacity-0 transform translate-y-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemAnimation}
              >
                {/* Neural dot style */}
                <span className="absolute -left-14 top-3 w-3 h-3 bg-theme-main rounded-full"></span>
                <div className="ml-4">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
                    {item.title}
                  </h4>
                  <p className="text-sm text-theme-main font-bold uppercase tracking-wider mb-2">{item.metric}</p>
                  <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* What's Included Section */}
      <section id="whats-included" className="relative bg-white py-20 md:py-32 border-t border-gray-100 overflow-hidden px-4 sm:px-8 lg:px-20">
        {/* Subtle glowy background elements */}
        <div className="absolute top-0 left-0 w-[20rem] h-[20rem] bg-theme-main/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[18rem] h-[18rem] bg-pink-400/10 rounded-full blur-[80px] -z-10"></div>
        <div className="pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-60 h-60 bg-gradient-to-br from-theme-main/20 via-purple-400/10 to-pink-400/10 rounded-full blur-[80px] opacity-40 z-0"></div>
          <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-gradient-to-tr from-pink-400/20 via-theme-main/10 to-white/0 rounded-full blur-[60px] opacity-30 z-0"></div>
          <div className="absolute top-10 right-1/4 w-48 h-48 bg-gradient-to-bl from-purple-400/20 via-theme-main/10 to-white/0 rounded-full blur-[70px] opacity-30 z-0"></div>
        </div>
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
        >
          <h3 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-4 pb-6 leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
            What’s Included in Every ChitChat Package
          </h3>
          <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20">
            {[
              {
                title: "Tailored Persona Design",
                text: "We craft unique AI personas that reflect your brand’s tone, language, and culture — from casual to corporate.",
              },
              {
                title: "LLM Integration & API Setup",
                text: "Your assistant plugs directly into your systems with full OpenAI integration, API keys, and SDKs if needed.",
              },
              {
                title: "Admin Dashboard Access",
                text: "Monitor interactions, gather insights, and refine responses with our analytics-ready backend.",
              },
              {
                title: "Ongoing Fine-Tuning",
                text: "We continually refine your AI based on live feedback, user behavior, and your evolving business needs.",
              },
              {
                title: "Multichannel Support",
                text: "Deploy on web, WhatsApp, or your mobile app. Seamless UX across platforms.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative scroll-review opacity-0 transform translate-y-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemAnimation}
              >
                {/* Neural dot style */}
                <span className="absolute -left-14 top-3 w-3 h-3 bg-theme-main rounded-full"></span>
                <h4 className="text-2xl font-bold text-gray-800 mb-2 ml-4 bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
                  {item.title}
                </h4>
                <p className="text-base text-gray-600 max-w-2xl leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Use Cases Section */}
      <section id="use-cases" className="relative py-20 md:py-32 bg-black text-white overflow-hidden px-4 sm:px-8 lg:px-20">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16 leading-tight tracking-tight">
            How Businesses Use ChitChat
          </h2>
          
          <div className="space-y-8">
            {useCases.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Businesses;