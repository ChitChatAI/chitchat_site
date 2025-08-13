import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView, useTransform, useScroll } from 'framer-motion';
import {
  PiggyBank,
  TrendingUp,
  Clock,
  Award,
  Smile,
  Hourglass,
} from 'lucide-react';

const Businesses: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  const fullText = "AI That Fits Seamlessly\nInto Your Operations";

  // Animation controls
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Background blob animations
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bgX1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const bgX2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setHeaderText(fullText.substring(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const businessValues = [
    {
      title: 'Reduce Support Costs',
      description: 'Replace call center agents or scale your operations without new hires.',
      icon: PiggyBank,
      metric: 'Up to 40% cost reduction',
      color: 'bg-black'
    },
    {
      title: 'Boost Retention & Upsells',
      description: 'Drive revenue through nuanced conversations, not generic sales scripts.',
      icon: TrendingUp,
      metric: '20% increase in customer retention',
      color: 'bg-black'
    },
    {
      title: 'Save Valuable Time',
      description: 'No writing prompts or managing AI yourself - we handle everything.',
      icon: Clock,
      metric: '30% faster response times',
      color: 'bg-black'
    },
    {
      title: 'Gain Competitive Edge',
      description: 'Stand out by offering truly believable AI support before your competitors.',
      icon: Award,
      metric: '15% higher customer satisfaction',
      color: 'bg-black'
    },
    {
      title: 'Improve Customer Experience',
      description: 'Create human-like interactions that feel personal and emotionally intelligent.',
      icon: Smile,
      metric: '95% positive feedback from users',
      color: 'bg-black'
    },
    {
      title: 'Unlock 24/7 Availability',
      description: 'Offer round-the-clock support without burnout, delays, or staffing overhead.',
      icon: Hourglass,
      metric: '100% uptime across all channels',
      color: 'bg-black'
    },
  ];

  return (
    <div className="overflow-hidden relative" ref={containerRef}>
      {/* Value Proposition Section */}
      <motion.section
        id="value"
        initial={{ opacity: 0 }}
        animate={controls}
        className="py-20 px-4 sm:px-8 lg:px-12 xl:px-20 relative"
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-20 w-60 h-60 rounded-full bg-purple-500/20 blur-[100px] -z-10"
          style={{ y: bgY1, x: bgX1 }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-500/20 blur-[100px] -z-10"
          style={{ y: bgY2, x: bgX2 }}
        />

        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-snug text-white mb-6"
            >
              How ChitChat Adds Value
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[1.125rem] sm:text-[1.25rem] text-white/90 mx-auto max-w-3xl leading-8"
            >
              {headerText}
              <span className="animate-pulse"></span>
            </motion.p>
          </div>

          {/* Value cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessValues.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl p-8 ${item.color} backdrop-blur-sm border border-white/10 hover:border-theme-main/50 transition-all flex flex-col h-full shadow-sm hover:shadow-lg`}
                >
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-theme-main/10 flex items-center justify-center">
                      {IconComponent && (
                        <IconComponent className="text-white w-6 h-6" />
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight leading-snug text-white mt-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="text-white/90 mb-6 text-base sm:text-lg leading-7 flex-grow min-h-[120px]">
                    <p>{item.description}</p>
                  </div>

                  {/* Metric (if present) */}
                  {item.metric && (
                    <div className="flex justify-center mt-auto">
                      <div className="text-white/90 text-xs font-medium tracking-wide px-4 py-2 rounded-full bg-white/10 inline-block whitespace-nowrap leading-none">
                        {item.metric}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>


          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-24 bg-black rounded-2xl p-8 md:p-12 "
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {[
                { value: "24/7", label: "Availability" },
                { value: "90%+", label: "Satisfaction" },
                { value: "10x", label: "Faster Response" },
                { value: "5M+", label: "Daily Interactions" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm uppercase tracking-wider opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Businesses;