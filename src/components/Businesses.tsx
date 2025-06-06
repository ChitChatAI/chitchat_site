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
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const rotateInVariants = {
    hidden: { opacity: 0, rotate: -30 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

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
    <div className="relative">
      <div className="relative z-10">
        {/* Business Values Section */}
        <section id="value" className="relative bg-black text-white overflow-hidden px-4 sm:px-8 lg:px-20">
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

          <div
            className="relative z-20 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16 leading-tight tracking-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
            >
              How ChitChat Adds Value to Your Business
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {businessValues.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-8 hover:bg-white/15 transition-all duration-300"
                  style={{
                    clipPath:
                      'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                  }}
                >
                  {/* Icon with glassy feel */}
                  <span className="material-symbols-outlined text-white/90 drop-shadow-sm text-5xl mb-4">
                    {item.icon}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white/90 tracking-tight mb-2">
                    {item.title}
                  </h3>

                  {/* Metric (meta-style) */}
                  <p className="text-xs sm:text-sm font-semibold text-theme-main/80 uppercase tracking-tight mb-2">
                    {item.metric}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section
          id="whats-included"
          className="relative py-20 md:py-32 bg-black text-white overflow-hidden sm:px-8 lg:px-20"
        >
          <div
            className="relative z-10 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16 leading-tight tracking-tight">
              What’s Included in Every ChitChat Package
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {includedFeatures.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col gap-6 bg-white/5 backdrop-blur-xl 
                     border border-white/10 rounded-2xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.3)] 
                     transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.4)]"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl 
                        bg-white/10 backdrop-blur-lg border border-white/20 
                        text-white/90 shadow-inner shadow-white/10">
                    <span
                      className="material-symbols-outlined text-4xl"
                      style={{ fontVariationSettings: '"wght" 700' }}
                    >
                      {item.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug font-satoshi">
                    {item.title}
                  </h3>

                  {/* Accent Line */}
                  <div className="h-1 w-10 bg-theme-main rounded-full"></div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed tracking-wide">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default Businesses;