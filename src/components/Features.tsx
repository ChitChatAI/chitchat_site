"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  HeartHandshake,
  Settings,
  Sparkles,
  Mic,
  TrendingUp,
  Plug,
  MessageSquareDashed,
  Bot,
  Brain,
  Users,
} from 'lucide-react';

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
      icon: 'message-circle', // 🗨️
    },
    {
      title: 'Customer Retention, Reinvented',
      description: 'Catch cancellations before they happen. Our AI personas are trained in subtle psychological techniques to calm, connect, and convince.',
      icon: 'heart-handshake', // 🤝
    },
    {
      title: 'Humanised Automation for Every Department',
      description: 'From tech support to billing, we tailor the tone. Each persona is custom-built to match your brand and department needs.',
      icon: 'settings', // ⚙️
    },
    {
      title: 'Never Sound Generic Again',
      description: 'Say goodbye to copy-paste chatbot templates. ChitChat personas are deeply humanised, each with unique quirks, tone, and emotional intelligence.',
      icon: 'sparkles', // ✨
    },
    {
      title: 'Your Brand Voice, Automated',
      description: 'Our personas learn your voice and values, so every automated conversation still feels on-brand and authentic.',
      icon: 'mic', // 🎤
    },
  ];


  const features: FeatureItem[] = [
    {
      title: 'Ongoing Optimisation',
      description: 'We continuously fine-tune personas using real customer conversations, improving tone, empathy, and clarity over time.',
      icon: 'trending-up', // 📈
    },
    {
      title: 'Seamless Integration',
      description: 'Plug ChitChat into your existing platforms - web chat, or WhatsApp - for smooth, end-to-end automation.',
      icon: 'plug', // 🔌
    },
    {
      title: 'Custom Conversations at Scale',
      description: 'Automate high-quality, emotionally aware conversations without sacrificing nuance or accuracy. No scripts, no awkward pauses.',
      icon: 'message-square-dashed', // 🗨️⚡
    },
    {
      title: 'Built to Replace, Not Just Assist',
      description: "ChitChat doesn't just support your team - it becomes it. Replace entire call centers with AI that feels personal, not robotic.",
      icon: 'bot', // 🤖
    },
    {
      title: 'Psychologically Engineered Personas',
      description: 'Our personas are crafted with deep emotional intelligence and personality theory. They are built to sound, feel, and think like real people.',
      icon: 'brain', // 🧠
    },
    {
      title: 'Multi-Persona Support',
      description: "Tailored personas for different business roles. Whether it's a kind billing assistant or a confident troubleshooter, each one feels uniquely human.",
      icon: 'users', // 👥
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
      <section
        id="why-chitchat"
        className="bg-gradient-to-br from-gray-950 to-gray-950 text-white px-4 sm:px-10 lg:px-24 pt-24 relative overflow-hidden"
      >
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
          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.18em] text-theme-main/90 font-medium mb-5">
              <div className="w-2 h-2 bg-theme-main rounded-sm" />
              Why us?
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-[2.25rem] sm:text-5xl font-bold leading-[1.25] tracking-tight max-w-5xl"
            /* use 700-ish weight feel; keep bold but not shouty */
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Forget robotic, lifeless AI agents, we’re here to{" "}
            <span className="font-semibold text-white">revolutionise</span> customer
            service with{" "}
            <span className="italic font-medium text-white">AI that feels real</span>.
          </motion.h2>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[1.125rem] sm:text-[1.25rem] mt-8 max-w-3xl text-white/90 leading-8">
              Our intelligent,{" "}
              <span className="font-bold">human-like agents</span>{" "}
              handle customer inquiries effortlessly, keeping conversations engaging,
              natural, and persuasive.
            </p>

            <p className="text-[1.125rem] sm:text-[1.25rem] mt-6 max-w-3xl text-white/90 leading-8">
              <span className="text-white font-medium">Faster</span> than human
              support, <span className="text-white font-bold">smarter</span> than
              traditional AI, {" "}
              <span className="font-semibold">
                ChitChat AI builds relationships
              </span>
              , not just answers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section
        id="why-us"
        className="relative bg-gradient-to-br from-gray-950 to-gray-950 py-24 px-4 sm:px-10 lg:px-24 text-white overflow-hidden"
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
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.18em] text-theme-main/90 font-medium mb-5">
                <div className="w-2 h-2 bg-theme-main rounded-sm" />
                Why us?
              </div>
            </motion.div>

            {/* Copy block */}
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Headline */}
              <motion.h2
                className="text-[2.25rem] md:text-5xl font-bold leading-[1.25] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                No more shallow AI. Just real{" "}
                <span className="font-semibold ">emotional</span> intelligence.
              </motion.h2>

              {/* Para 1 */}
              <motion.p
                className="text-[1.125rem] sm:text-[1.25rem] text-white/90 leading-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We have an{" "}
                <span className="font-bold">extensive background in psychology</span>,
                with training in behavioural science, emotional theory, and cognitive development. We have{" "}
                <span className="font-bold">studied real human conversations</span> — what
                makes people feel heard, connected, safe, and understood.
              </motion.p>

              {/* Para 2 */}
              <motion.p
                className="text-[1.125rem] sm:text-[1.25rem] text-white/90 leading-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We’ve used our training to{" "}
                <span className="font-bold">design agents</span> that replicate
                personality layers, emotional triggers, and conversational flow. Most dev teams try to
                humanise AI through surface-level engineering.
                <br />
                <span className="italic font-medium">We build the person first, then the logic.</span>
              </motion.p>

              {/* Tags */}
              <motion.div
                className="flex flex-wrap gap-3 pt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  "PERSONALITY",
                  "DECISION-MAKING",
                  "EMOTIONAL INTELLIGENCE",
                  "TEXT FLOW",
                  "CONTEXT AWARENESS",
                  "MORAL COMPASS",
                  "HABITS & QUIRKS",
                  "ADAPTING TO SITUATIONS",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-900/70 text-white/90 px-4 py-2.5 rounded-md text-xs sm:text-sm font-medium border border-white/10 hover:border-theme-main/60 transition-colors duration-300"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
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
        {/* USE CASES SECTION */}
        <motion.section
          id="use-cases"
          className="relative z-20 bg-gradient-to-br from-gray-950 to-gray-950 text-white px-4 sm:px-8 lg:px-20 py-24"
          style={{ y: topSectionY, opacity: topSectionOpacity }}
        >
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 rounded-full bg-theme-main/20 blur-xl -z-10"
            style={{ y: bgY1, x: bgX1 }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-theme-main/90 blur-xl -z-10"
            style={{ y: bgY2, x: bgX2 }}
          />

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="mb-6 flex items-center justify-center gap-2 text-sm tracking-widest uppercase text-theme-main font-medium">
                <div className="w-2 h-2 bg-theme-main rounded-sm"></div>
                Why ChitChat AI?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-snug text-white mb-6">
                How Businesses Use ChitChat AI
              </h2>
              <p className="text-[1.125rem] sm:text-[1.25rem] text-white/90 mx-auto max-w-3xl leading-8">
                Our platform transforms powerful LLMs into <span className="font-bold">emotionally intelligent AI agents</span>, helping businesses deliver personalized, human-like customer interactions at scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((item, index) => {
                const IconComponent = {
                  'message-circle': MessageCircle,
                  'heart-handshake': HeartHandshake,
                  'settings': Settings,
                  'sparkles': Sparkles,
                  'mic': Mic,
                }[item.icon || ''];

                return (
                  <motion.div
                    key={index}
                    className="border border-gray-700 rounded-xl overflow-hidden shadow-sm transition-all duration-300 flex flex-col hover:shadow-lg bg-black z-100 h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        {IconComponent && (
                          <div className="p-3 rounded-lg bg-theme-main/10 ">
                            <IconComponent className="w-6 h-6" />
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-white">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* WHAT SETS US APART SECTION */}
        <motion.section
          id={id}
          className="relative z-10 bg-gradient-to-br from-gray-950 to-gray-950 px-4 sm:px-8 lg:px-20 py-24"
          style={{ y: bottomSectionY, opacity: bottomSectionOpacity }}
        >
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 rounded-full bg-theme-main/90 blur-xl -z-10"
            style={{ y: bgY1, x: bgX1 }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-theme-main blur-xl -z-10"
            style={{ y: bgY2, x: bgX2 }}
          />

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              {/* Kicker */}
              <div className="mb-5 flex items-center justify-center gap-2 text-xs sm:text-sm tracking-[0.18em] uppercase text-theme-main/90 font-medium">
                <div className="w-2 h-2 bg-theme-main rounded-sm"></div>
                Why ChitChat AI?
              </div>

              {/* Headline */}
              <h2 className="text-[2.25rem] md:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-6">
                What Sets Us Apart
              </h2>

              {/* Subheadline */}
              <p className="text-[1.125rem] sm:text-[1.25rem] text-white/90 mx-auto max-w-3xl leading-8">
                These features make ChitChat not just functional, but transformational —
                delivering <span className="font-bold">emotionally intelligent automation</span> at scale.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = {
                  'trending-up': TrendingUp,
                  'plug': Plug,
                  'message-square-dashed': MessageSquareDashed,
                  'bot': Bot,
                  'brain': Brain,
                  'users': Users,
                }[feature.icon || ''];

                return (
                  <motion.div
                    key={index}
                    className="border border-white/10 rounded-xl overflow-hidden shadow-sm transition-all duration-300 flex flex-col bg-black/90 z-100 h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-3">
                        {IconComponent && (
                          <div className="p-3 rounded-lg bg-theme-main/10 text-white">
                            <IconComponent className="w-6 h-6" />
                          </div>
                        )}
                        <h3 className="text-lg sm:text-xl font-semibold tracking-tight leading-snug text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-white/90 leading-7">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

      </div>

    </>


  );
};

export default Features;