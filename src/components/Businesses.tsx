import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import CookieConsent from './CookieConsent';
import CallToAction from './CallToAction';
import Footer from './Footer';

const Businesses: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  const fullText = "AI That Fits Seamlessly\nInto Your Operations";
  const headerRef = useRef<HTMLHeadingElement>(null);

    const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

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
      { title: 'Custom Persona Design', description: 'Psychology-driven personas that understand emotional nuance.' },
      { title: 'Tone & Personality Development', description: 'Carefully crafted voices that match your brand identity.' },
      { title: 'Industry-Specific Adaptation', description: 'Tailored knowledge base for your business vertical.' },
      { title: 'Integration Support', description: 'Works with your existing tech stack (chat, WhatsApp, voice, etc.).' },
      { title: 'Developer Collaboration', description: 'We work with your team or provide our own technical experts.' },
      { title: 'Continuous Improvements', description: 'Regular updates based on conversation data and feedback.' },
      { title: 'Human Testing & QA', description: 'Rigorous quality assurance by our psychology specialists.' }
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
      <section id="value" className="relative py-32 px-6 sm:px-10 lg:px-20 border-t border-gray-100">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4 pb-6 text-center">
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
                {/* Modernized neural dot with uniform padding */}
                <span className="absolute -left-[14px] top-1 p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                </span>
                <div className="ml-4">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-theme-main font-bold uppercase tracking-wider mb-2">{item.metric}</p>
                  <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What's Included Section */}
      <section id="whats-included" className="relative bg-white py-32 px-6 sm:px-10 lg:px-20 border-t border-gray-100">
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
          <h3 className="text-3xl font-bold text-gray-800 mb-4 pb-6 text-center">
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
                {/* Modernized neural dot with uniform padding */}
                <span className="absolute -left-[14px] top-1 p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                </span>
                <h4 className="text-2xl font-semibold text-gray-800 mb-2 ml-4">{item.title}</h4>
                <p className="text-base text-gray-600 max-w-2xl leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      

    </div>
  );
};

export default Businesses;
