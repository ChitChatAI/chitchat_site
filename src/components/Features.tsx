"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useInView } from 'framer-motion';
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
      icon: 'message-circle',
    },
    {
      title: 'Customer Retention, Reinvented',
      description: 'Catch cancellations before they happen. Our AI personas are trained in subtle psychological techniques to calm, connect, and convince.',
      icon: 'heart-handshake',
    },
    {
      title: 'Humanised Automation for Every Department',
      description: 'From tech support to billing, we tailor the tone. Each persona is custom-built to match your brand and department needs.',
      icon: 'settings',
    },
    {
      title: 'Never Sound Generic Again',
      description: 'Say goodbye to copy-paste chatbot templates. ChitChat personas are deeply humanised, each with unique quirks, tone, and emotional intelligence.',
      icon: 'sparkles',
    },
    {
      title: 'Your Brand Voice, Automated',
      description: 'Our personas learn your voice and values, so every automated conversation still feels on-brand and authentic.',
      icon: 'mic',
    },
  ];

  const features: FeatureItem[] = [
    {
      title: 'Ongoing Optimisation',
      description: 'We continuously fine-tune personas using real customer conversations, improving tone, empathy, and clarity over time.',
      icon: 'trending-up',
    },
    {
      title: 'Seamless Integration',
      description: 'Plug ChitChat into your existing platforms - web chat, or WhatsApp - for smooth, end-to-end automation.',
      icon: 'plug',
    },
    {
      title: 'Custom Conversations at Scale',
      description: 'Automate high-quality, emotionally aware conversations without sacrificing nuance or accuracy. No scripts, no awkward pauses.',
      icon: 'message-square-dashed',
    },
    {
      title: 'Built to Replace, Not Just Assist',
      description: "ChitChat doesn't just support your team - it becomes it. Replace entire call centers with AI that feels personal, not robotic.",
      icon: 'bot',
    },
    {
      title: 'Psychologically Engineered Personas',
      description: 'Our personas are crafted with deep emotional intelligence and personality theory. They are built to sound, feel, and think like real people.',
      icon: 'brain',
    },
    {
      title: 'Multi-Persona Support',
      description: "Tailored personas for different business roles. Whether it's a kind billing assistant or a confident troubleshooter, each one feels uniquely human.",
      icon: 'users',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Animation variants
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHover = {
    rest: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={containerRef}>
      {/* WHY CHITCHAT */}
      <section
        id="why-chitchat"
        className="bg-gradient-to-br from-gray-950 to-gray-950 text-white px-6 sm:px-10 lg:px-24 py-16 relative overflow-hidden"
      >
          {/* soft gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,var(--brand)/18%,transparent_60%)]"
      />
        <div className="max-w-6xl mx-auto relative">
          <ScrollAnimation>
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              <div className="w-2 h-2 bg-theme-main rounded-sm" />
              Our Edge
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight"
            >
              Forget robotic, lifeless AI agents, we're here to{" "}
              <span className="font-semibold text-white">revolutionise</span> customer
              service with{" "}
              <span className="italic font-medium text-white">AI that feels real</span>.
            </motion.h2>
          </ScrollAnimation>

          <ScrollAnimation>
            <motion.div
              variants={fadeInUp}
              className="mt-8 space-y-6 max-w-3xl"
            >
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Our intelligent, <span className="font-bold">human-like agents</span>{" "}
                handle customer inquiries effortlessly, keeping conversations engaging,
                natural, and persuasive.
              </p>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                <span className="text-white font-medium">Faster</span> than human
                support, <span className="text-white font-bold">smarter</span> than
                traditional AI,{" "}
                <span className="font-semibold">ChitChat AI builds relationships</span>,
                not just answers.
              </p>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>

      {/* WHY US */}
      <section
        id="why-us"
        className="relative bg-gradient-to-br from-gray-950 to-gray-950 px-6 sm:px-10 lg:px-24 py-16 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.8fr_4.2fr] gap-16">
          <ScrollAnimation>
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <div className="w-2 h-2 bg-theme-main rounded-sm" />
                Our Edge
              </div>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation>
            <motion.div
              variants={fadeInUp}
              className="space-y-8"
            >
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                No more shallow AI. Just real{" "}
                <span className="font-semibold">emotional</span> intelligence.
              </h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                We have an <span className="font-bold">extensive background in psychology</span>,
                with training in behavioural science, emotional theory, and cognitive
                development. We've{" "}
                <span className="font-bold">studied real human conversations</span> —
                what makes people feel heard, connected, and understood.
              </p>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                We've used our training to{" "}
                <span className="font-bold">design agents</span> that replicate
                personality layers, emotional triggers, and conversational flow.{" "}
                <span className="italic font-medium">We build the person first, then the logic.</span>
              </p>
              <ScrollAnimation>
                <motion.div
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20% 0% -10% 0%" }}
                  className="flex flex-wrap gap-3 pt-4"
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
                    <motion.span
                      key={idx}
                      variants={fadeInUp}
                      className="bg-black text-white/90 px-4 py-2 rounded-md text-xs sm:text-sm font-medium border border-white/10"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </ScrollAnimation>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>

      {/* USE CASES */}
      <section
        id="use-cases"
        className="relative z-20 bg-gradient-to-br from-gray-950 to-gray-950 text-white px-6 sm:px-10 lg:px-24 py-16"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <ScrollAnimation>
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <div className="w-2 h-2 bg-theme-main rounded-sm"></div>
                Why ChitChat AI?
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                How Businesses Use ChitChat AI
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mx-auto max-w-3xl leading-relaxed">
                Our platform transforms powerful LLMs into{" "}
                <span className="font-bold">emotionally intelligent AI agents</span>,
                helping businesses deliver personalized, human-like customer interactions at scale.
              </p>
            </motion.div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {useCases.map((item, index) => {
              const IconComponent = {
                "message-circle": MessageCircle,
                "heart-handshake": HeartHandshake,
                settings: Settings,
                sparkles: Sparkles,
                mic: Mic,
              }[item.icon || ""];

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
                  whileHover="hover"
                  animate="rest"
                  variants={cardHover}
                  className="border border-white/10 rounded-md bg-black shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {IconComponent && (
                      <motion.div 
                        className="p-3 rounded-md bg-theme-main/10 text-white"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                    )}
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/90 text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </ScrollAnimation>
      </section>

      {/* WHAT SETS US APART */}
      <section
        id={id}
        className="relative z-10 bg-gradient-to-br from-gray-950 to-gray-950 px-6 sm:px-10 lg:px-24 py-16"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <ScrollAnimation>
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <div className="w-2 h-2 bg-theme-main rounded-sm"></div>
                Why ChitChat AI?
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                What Sets Us Apart
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mx-auto max-w-3xl leading-relaxed">
                These features make ChitChat not just functional, but transformational —
                delivering <span className="font-bold">emotionally intelligent automation</span> at scale.
              </p>
            </motion.div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const IconComponent = {
                "trending-up": TrendingUp,
                plug: Plug,
                "message-square-dashed": MessageSquareDashed,
                bot: Bot,
                brain: Brain,
                users: Users,
              }[feature.icon || ""];

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
                  whileHover="hover"
                  animate="rest"
                  variants={cardHover}
                  className="border border-white/10 rounded-md bg-black shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    {IconComponent && (
                      <motion.div 
                        className="p-3 rounded-md bg-theme-main/10 text-white"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                    )}
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-white/90 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </ScrollAnimation>
      </section>
    </div>
  );
};

// ScrollAnimation wrapper component
const ScrollAnimation: React.FC<{ children: React.ReactNode; threshold?: number }> = ({ 
  children, 
  threshold = 0.15 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0% -10% 0%", amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default Features;