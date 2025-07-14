import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView, useTransform, useScroll } from 'framer-motion';

const Businesses: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  const [valueTransform, setValueTransform] = useState(0);
  const [featuresTransform, setFeaturesTransform] = useState(0);

  const fullText = "AI That Fits Seamlessly\nInto Your Operations";

  const valueSectionRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const isInView1 = useInView(valueSectionRef, { once: false, margin: "-100px" });
  const isInView2 = useInView(featuresSectionRef, { once: false, margin: "-100px" });
  useEffect(() => {
    const typingEffect = () => {
      let i = 0;
      const typingInterval = setInterval(() => {
        setHeaderText(fullText.substring(0, i + 1));
        i++;
        if (i > fullText.length) clearInterval(typingInterval);
      }, 50);
      return typingInterval;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = typingEffect();
            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );

    if (valueSectionRef.current) {
      observer.observe(valueSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [fullText]);

  useEffect(() => {
    let animationFrame: number;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      if (!isMobile) {
        setValueTransform(scrollY * 0.05);
        setFeaturesTransform(scrollY * 0.1);
      } else {
        setValueTransform(0);
        setFeaturesTransform(0);
      }

      animationFrame = requestAnimationFrame(handleScroll);
    };

    animationFrame = requestAnimationFrame(handleScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    if (isInView1) controls1.start({ opacity: 1, y: 0 });
    if (isInView2) controls2.start({ opacity: 1, y: 0 });
  }, [isInView1, isInView2]);
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
      description: 'Works with your existing tech stack such as chat, WhatsApp, voice and more.',
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


  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Background blobs
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bgX1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const bgX2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Typing Animation */}
      <motion.section
        id="value"
        ref={valueSectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controls1}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ transform: `translateY(${valueTransform}px)` }}
        className="py-32 px-4 sm:px-8 lg:px-20 bg-gradient-to-br from-gray-950 to-gray-950 z-10">
        {/* Background orb 1 */}
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 rounded-full bg-theme-main/40 blur-xl -z-10"
          style={{ y: bgY1, x: bgX1 }}
        />
        {/* Background orb 2 */}
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-black/90 blur-xl -z-10"
          style={{ y: bgY2, x: bgX2 }}
        />
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-white text-5xl sm:text-6xl md:text-7xl font-light leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="font-extrabold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              EVERYONE
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {' '}is trying to make AI agents{' '}
            </motion.span>
            <motion.span
              className="italic font-semibold text-gray-200"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              sound
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {' '}like humans.
            </motion.span>
            <br className="hidden sm:block" />

            <motion.span
              className="font-bold text-gray-200 block mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              We are building ones that{' '}
              <motion.span
                className="italic font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.1,
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1
                }}
              >
                think
              </motion.span>{' '}
              like humans.
            </motion.span>
          </motion.h1>
          <div className="text-2xl sm:text-3xl font-mono text-gray-300 h-20 whitespace-pre-wrap">
            {headerText}
          </div>
        </div>
      </motion.section>

      {/* Value Proposition Section */}
      <motion.section
        id="value"
        ref={valueSectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controls1}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ transform: `translateY(${valueTransform}px)` }}
        className="py-28 px-4 sm:px-8 lg:px-20 will-change-transform bg-gradient-to-br from-gray-950 to-gray-950
"
      >
        {/* Background orb 1 */}
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 rounded-full bg-theme-main/40 blur-xl -z-10"
          style={{ y: bgY1, x: bgX1 }}
        />
        {/* Background orb 2 */}
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-black blur-xl -z-10"
          style={{ y: bgY2, x: bgX2 }}
        />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-gray-200 mb-6 leading-tight"
            >
              How ChitChat Adds Value to Your Business
            </motion.h2>

          </div>

          <div className="space-y-24">
            {businessValues.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col items-center text-center gap-8 pb-20 ${index !== businessValues.length - 1 ? "border-b border-gray-900" : ""
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-theme-main rounded-sm transform rotate-45 animate-ping" />
                  <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-200">
                    {item.title}
                  </h3>
                </div>
                <div className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                  <p>{item.description}</p>
                  {item.metric && (
                    <div className="mt-4 text-white font-bold tracking-wide">
                      {item.metric}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="whats-included"
        ref={featuresSectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controls2}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ transform: `translateY(${featuresTransform}px)` }}
        className="py-28 px-4 sm:px-8 lg:px-20 bg-gray-950 will-change-transform"
        
      >

         {/* Background orb 1 */}
                <motion.div
                  className="absolute top-20 left-20 w-40 h-40 rounded-full bg-theme-main/40 blur-xl -z-10"
                  style={{ y: bgY1, x: bgX1 }}
                />
                {/* Background orb 2 */}
                <motion.div
                  className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-theme-main blur-xl -z-10"
                  style={{ y: bgY2, x: bgX2 }}
                />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-gray-200 mb-6 leading-tight"
            >
              Comprehensive ChitChat Package Features
            </motion.h2>

          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {includedFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-10 border border-gray-700 rounded-lg overflow-hidden shadow-sm transition-all duration-300 flex flex-col hover:shadow-md bg-black z-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-theme-main rounded-full flex-shrink-0" />
                  <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-300">
                    {item.title}
                  </h3>
                </div>
                <div className="text-lg text-gray-300 leading-relaxed">
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


    </div>
  );
};

export default Businesses;