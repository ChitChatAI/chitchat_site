"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

interface FeaturesProps {
  id?: string;
}

const Features: React.FC<FeaturesProps> = ({ id }) => {
  const useCases: FeatureItem[] = [
    {
      title: 'Instant Support That Feels Personal',
      description: 'No more long wait times or robotic replies. Our AI personas handle customer queries immediately, 24/7, while sounding human, warm, and helpful.',
    },
    {
      title: 'Customer Retention, Reinvented',
      description: 'Catch cancellations before they happen. Our AI personas are trained in subtle psychological techniques to calm, connect, and convince.',
    },
    {
      title: 'Humanised Automation for Every Department',
      description: 'From tech support to billing, we tailor the tone. Each persona is custom-built to match your brand and department needs.',
    },
    {
      title: 'Never Sound Generic Again',
      description: 'Say goodbye to copy-paste chatbot templates. ChitChat personas are deeply humanised, each with unique quirks, tone, and emotional intelligence.',
    },
    {
      title: 'Your Brand Voice, Automated',
      description: 'Our personas learn your voice and values, so every automated conversation still feels on-brand and authentic.',
    },
  ];

  const features: FeatureItem[] = [
    {
      title: 'Ongoing Optimisation',
      description: 'We continuously fine-tune personas using real customer conversations, improving tone, empathy, and clarity over time.'
    },
    {
      title: 'Seamless Integration',
      description: 'Plug ChitChat into your existing platforms - web chat, or WhatsApp - for smooth, end-to-end automation.'
    },
    {
      title: 'Custom Conversations at Scale',
      description: 'Automate high-quality, emotionally aware conversations without sacrificing nuance or accuracy. No scripts, no awkward pauses.'
    },
    {
      title: 'Built to Replace, Not Just Assist',
      description: "ChitChat doesn't just support your team - it becomes it. Replace entire call centers with AI that feels personal, not robotic."
    },
    {
      title: 'Psychologically Engineered Personas',
      description: 'Our personas are crafted with deep emotional intelligence and personality theory. They are built to sound, feel, and think like real people.'
    },
    {
      title: 'Multi-Persona Support',
      description: "Tailored personas for different business roles. Whether it's a kind billing assistant or a confident troubleshooter, each one feels uniquely human."
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [featuresExpandedIndex, setFeaturesExpandedIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Enhanced parallax animation values
  const topSectionY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const bottomSectionY = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const topSectionOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  const bottomSectionOpacity = useTransform(scrollYProgress, [0.2, 1], [0.8, 1]);
  const topImageY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bottomImageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgLayerY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const toggleCard = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  const toggleFeatureCard = (index: number) => {
    setFeaturesExpandedIndex(prev => (prev === index ? null : index));
  };

  // Background blobs
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bgX1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const bgX2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <>


      {/* WHY CHITCHAT */}
      <section id="why-chitchat" className="bg-gradient-to-br from-gray-950 to-gray-950
 text-white px-4 sm:px-10 lg:px-24 py-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-theme-main/5 to-transparent -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Background orb 1 */}
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 rounded-full bg-theme-main/20 blur-xl"
          style={{ y: bgY1, x: bgX1 }}
        />
        {/* Background orb 2 */}
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-theme-main blur-xl"
          style={{ y: bgY2, x: bgX2 }}
        />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-theme-main font-medium mb-6">
              <div className="w-2 h-2 bg-theme-main rounded-sm"></div>
              WHY US?
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Forget robotic, lifeless AI agents — we're here to <span className="font-medium">revolutionise</span> customer service with <span className="italic font-medium">AI that feels real</span>.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[1.25rem] sm:text-[1.3125rem] font-normal mt-8 max-w-3xl text-gray-200 leading-relaxed">
              Our intelligent, <span className="text-white font-semibold text-white">human-like agents</span> handle customer inquiries effortlessly, keeping conversations engaging, natural, and persuasive.
            </p>

            <p className="text-[1.25rem] sm:text-[1.3125rem] font-normal mt-6 max-w-3xl text-gray-200 leading-relaxed">
              <span className="text-white font-medium">Faster</span> than human support, <span className="text-white font-medium">smarter</span> than traditional AI — <span className="text-white font-semibold text-white">ChitChat AI builds relationships</span>, not just answers.
            </p>

            <div className="mt-10">
              <Link
                to="/contactus"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-md text-white hover:bg-gradient-to-br from-gray-950 to-gray-950
/10 transition-all duration-300 hover:gap-3"
              >
                Request Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section
        id="why-us"
        className="relative bg-gradient-to-br from-gray-950 to-gray-950
 py-24 px-4 sm:px-10 lg:px-24 text-white overflow-hidden"
      >
        {/* Background orb 1 */}
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 rounded-full bg-black blur-xl"
          style={{ y: bgY1, x: bgX1 }}
        />
        {/* Background orb 2 */}
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-theme-main/20 blur-xl"
          style={{ y: bgY2, x: bgX2 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-theme-main/5 to-transparent -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_4.2fr] gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-theme-main font-medium mb-6">
                <div className="w-2 h-2 bg-theme-main rounded-sm"></div>
                WHY US?
              </div>
            </motion.div>

            <motion.div
              className="space-y-10 text-[1.25rem] sm:text-[1.3125rem] leading-relaxed font-normal"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                No more shallow AI. Just real <span className="font-medium">emotional</span> intelligence.
              </motion.h2>

              <motion.p
                className="text-[1.25rem] sm:text-[1.3125rem] text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We have an <span className="font-semibold text-white">extensive background in psychology</span>, with training in behavioural science, emotional theory, and cognitive development.
                We have <span className="font-semibold text-white">studied real human conversations</span> – what makes people feel heard, connected, safe, and understood.
              </motion.p>

              <motion.p
                className="text-[1.25rem] sm:text-[1.3125rem] text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We have used our training to <span className="font-semibold text-white">design agents</span> that replicate personality layers, emotional triggers, and conversational flow.
                Most dev teams try to humanise AI through surface-level engineering.<br />
                <span className="italic font-medium">We build the person first – then the logic.</span>
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 pt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  'PERSONALITY',
                  'DECISION-MAKING',
                  'EMOTIONAL INTELLIGENCE',
                  'TEXT FLOW',
                  'CONTEXT AWARENESS',
                  'MORAL COMPASS',
                  'HABITS & QUIRKS',
                  'ADAPTING TO SITUATIONS'
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-800 text-gray-100 px-5 py-3 rounded-md text-sm font-medium shadow-sm hover:bg-theme-main/20 hover:text-gray-400 transition-colors duration-300 border border-gray-700"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#1e293b", // slate-800
                      borderColor: "#3b82f6" // theme-main blue-500
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <div ref={containerRef} className="relative overflow-x-hidden">
        <motion.section
          id="use-cases"
          className="relative z-20 bg-gradient-to-br from-gray-950 to-gray-950
 text-white px-4 sm:px-8 lg:px-20 py-24"
          style={{
            y: topSectionY,
            opacity: topSectionOpacity
          }}
        >
          {/* Background orb 1 */}
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 rounded-full bg-theme-main/20 blur-xl -z-10"
            style={{ y: bgY1, x: bgX1 }}
          />
          {/* Background orb 2 */}
          <motion.div
            className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-theme-main/90 blur-xl -z-10"
            style={{ y: bgY2, x: bgX2 }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            {/* Accordion Column */}
            <div className="flex flex-col h-full justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 flex items-center gap-2 text-sm tracking-widest uppercase text-theme-main font-medium">
                  <div className="w-2 h-2 bg-theme-main rounded-sm"></div>
                  Why ChitChat AI?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-snug text-white mb-6">
                  How Businesses Use ChitChat AI
                </h2>
                <p className="text-[1.25rem] sm:text-[1.3125rem] text-gray-200 mb-8 max-w-xl leading-relaxed">
                  Our platform transforms powerful LLMs into emotionally intelligent AI agents, helping businesses deliver personalized, human-like customer interactions at scale.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-4 pr-2 max-h-[400px]">
                {useCases.map((item, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-700 rounded-lg overflow-hidden shadow-sm transition-all duration-300 flex flex-col hover:shadow-md bg-black"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <button
                      onClick={() => toggleCard(index)}
                      className="w-full flex justify-between items-center px-6 py-4 bg-gray-900 hover:bg-gray-800 text-left transition-colors duration-200"
                    >
                      <span className="text-lg font-medium text-gray-100">{item.title}</span>
                      <span className="material-symbols-outlined text-xl transition-transform duration-200 text-gray-400">
                        {expandedIndex === index ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                    <div
                      className={`px-6 overflow-hidden transition-all duration-300 text-base ${expandedIndex === index ? 'max-h-40 py-4' : 'max-h-0 py-0'}`}
                    >
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Column */}
            <div className="relative w-full h-full min-h-[500px] flex items-center">
              <motion.div
                className="rounded-xl overflow-hidden h-full w-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ y: topImageY }}
              >
                <img
                  src="/homePage/Arin.png"
                  alt="Humanoid Robot Typing"
                  className="w-full h-full object-contain lg:object-scale-down hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* WHAT SETS US APART */}
        <motion.section
          id={id}
          className="relative z-10 bg-gradient-to-br from-gray-950 to-gray-950
 px-4 sm:px-8 lg:px-20 py-24"
          style={{
            y: bottomSectionY,
            opacity: bottomSectionOpacity
          }}
        >  {/* Background orb 1 */}
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 rounded-full bg-theme-main/90 blur-xl"
            style={{ y: bgY1, x: bgX1 }}
          />
          {/* Background orb 2 */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
            {/* Image Column */}
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
              <motion.div
                className="rounded-xl overflow-hidden h-full w-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ y: bottomImageY }}
              >
                <img
                  src="/homePage/feature_sam.png"
                  alt="Humanoid Robot Typing"
                  className="w-full h-full object-contain lg:object-scale-down hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                />
              </motion.div>
            </div>

            {/* Accordion Column */}
            <div className="flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 flex items-center gap-2 text-sm tracking-widest uppercase text-theme-main font-medium">
                  <div className="w-2 h-2 bg-theme-main rounded-sm"></div>
                  Why ChitChat AI?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-snug text-white mb-6">
                  What Sets Us Apart
                </h2>
                <p className="text-[1.25rem] sm:text-[1.3125rem] text-gray-200 mb-8 max-w-xl leading-relaxed">
                  These features make ChitChat not just functional, but transformational — delivering emotionally intelligent automation at scale.
                </p>
                <motion.div
                  className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-theme-main blur-xl"
                  style={{ y: bgY2, x: bgX2 }}
                />

                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="border border-gray-700 rounded-lg overflow-hidden shadow-sm transition-all duration-300 flex flex-col bg-black"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => toggleFeatureCard(index)}
                        className="w-full flex justify-between items-center px-6 py-4 bg-gray-900 hover:bg-gray-800 text-left transition-colors duration-200"
                      >
                        <div className="flex items-center gap-4">
                          {feature.icon && (
                            <motion.div
                              className="w-10 h-10 flex items-center justify-center rounded-lg bg-theme-main/20 text-theme-main"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              <span className="material-symbols-outlined text-2xl">
                                {feature.icon}
                              </span>
                            </motion.div>
                          )}
                          <span className="text-lg font-medium text-gray-100">
                            {feature.title}
                          </span>
                        </div>
                        <span className="material-symbols-outlined text-xl transition-transform duration-200 text-gray-400">
                          {featuresExpandedIndex === index ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>
                      <div
                        className={`px-6 overflow-hidden transition-all duration-300 text-base ${featuresExpandedIndex === index ? 'max-h-[500px] py-4' : 'max-h-0 py-0'}`}
                      >
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </>


  );
};

export default Features;