import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.09,
      },
    },
  };

  const rotateInVariants = {
    hidden: { opacity: 0, rotate: -30 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Mobile-specific animation variants
  const mobileFadeInVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, type: 'spring', bounce: 0.18 } },
  };
  const mobileStaggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.08,
      },
    },
  };
  // Detect if device is mobile
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches;

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
    <div className="font-sans relative">
      <div className="relative z-10">
        {/* Business Values Section */}
        <section id="value" className="relative py-20 md:py-32 bg-black text-white overflow-hidden px-4 sm:px-8 lg:px-20">
          {/* Video Background for Business Values Section */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/businessesPage/businessVideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>
          
          <motion.div
            className="relative z-20 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={isMobile ? mobileStaggerContainer : staggerContainer}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16 leading-tight tracking-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={isMobile ? mobileFadeInVariants : fadeInVariants}
            >
              How ChitChat Adds Value to Your Business
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {businessValues.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 hover:bg-white/15 transition-all duration-300"
                  style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)' }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={isMobile ? mobileFadeInVariants : fadeInVariants}
                >
                  <motion.span
                    className="material-symbols-outlined text-theme-main text-5xl mb-4"
                    variants={rotateInVariants}
                  >
                    {item.icon}
                  </motion.span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-blue-300 font-bold uppercase tracking-wider mb-3">{item.metric}</p>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* What's Included Section */}
        <section id="whats-included" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden px-4 sm:px-8 lg:px-20">
          <motion.div
            className="relative z-10 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={isMobile ? mobileStaggerContainer : staggerContainer}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16 leading-tight tracking-tight"
              variants={isMobile ? mobileFadeInVariants : scaleUpVariants}
            >
              What's Included in Every ChitChat Package
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {includedFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 flex gap-6 items-start hover:bg-white/15 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={isMobile ? mobileFadeInVariants : scaleUpVariants}
                >
                  <motion.span
                    className="material-symbols-outlined text-theme-main text-4xl"
                    variants={scaleUpVariants}
                  >
                    {item.icon}
                  </motion.span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="relative py-20 md:py-32 bg-black text-white overflow-hidden px-4 sm:px-8 lg:px-20">
          <motion.div
            className="relative z-10 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={isMobile ? mobileStaggerContainer : staggerContainer}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16 leading-tight tracking-tight"
              variants={isMobile ? mobileFadeInVariants : slideInVariants}
            >
              How Businesses Use ChitChat
            </motion.h2>
            <div className="space-y-8">
              {useCases.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={isMobile ? mobileFadeInVariants : slideInVariants}
                >
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-lg">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Businesses;