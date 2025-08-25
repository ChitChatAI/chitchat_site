"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import {
  PiggyBank,
  TrendingUp,
  Clock,
  Award,
  Smile,
  Hourglass,
} from "lucide-react";

/* ================================
   Motion presets (sleek + smooth)
================================== */

// Page-level fade + slight lift
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier
    },
  },
};

// Container stagger (cards/stat tiles)
const stagger = {
  hidden: {},
  show: (delay = 0) => ({
    transition: {
      delay,
      staggerChildren: 0.08,
      delayChildren: delay,
    },
  }),
};

// Card reveal (slightly slower, tiny scale for polish)
const cardReveal = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Stat tile reveal
const tileReveal = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Businesses: React.FC = () => {
  const [headerText, setHeaderText] = useState("");
  const fullText = "AI That Fits Seamlessly\nInto Your Operations";

  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll/parallax for background accents
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle background blob motion
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -16]);
  const bgX1 = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const bgX2 = useTransform(scrollYProgress, [0, 1], [0, -8]);

  // Gentle opacity fade on scroll for the whole section background
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.7]);

  // Typing effect (kept calm + fast enough)
  useEffect(() => {
    if (prefersReduced) {
      setHeaderText(fullText);
      return;
    }
    let i = 0;
    const typing = setInterval(() => {
      setHeaderText(fullText.substring(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 28);
    return () => clearInterval(typing);
  }, [fullText, prefersReduced]);

  const businessValues = [
    {
      title: "Reduce Support Costs",
      description:
        "Replace call center agents or scale your operations without new hires.",
      icon: PiggyBank,
      metric: "Up to 40% cost reduction",
    },
    {
      title: "Boost Retention & Upsells",
      description:
        "Drive revenue through nuanced conversations, not generic sales scripts.",
      icon: TrendingUp,
      metric: "20% increase in customer retention",
    },
    {
      title: "Save Valuable Time",
      description:
        "No writing prompts or managing AI yourself — we handle everything.",
      icon: Clock,
      metric: "30% faster response times",
    },
    {
      title: "Gain Competitive Edge",
      description:
        "Stand out by offering truly believable AI support before your competitors.",
      icon: Award,
      metric: "15% higher customer satisfaction",
    },
    {
      title: "Improve Customer Experience",
      description:
        "Create human-like interactions that feel personal and emotionally intelligent.",
      icon: Smile,
      metric: "95% positive feedback from users",
    },
    {
      title: "Unlock 24/7 Availability",
      description:
        "Offer round-the-clock support without burnout, delays, or staffing overhead.",
      icon: Hourglass,
      metric: "100% uptime across all channels",
    },
  ];

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* Value Proposition Section */}
      <motion.section
        id="value"
        className="relative bg-gradient-to-br from-gray-950 to-gray-950 text-white px-6 sm:px-10 lg:px-24 py-16"
        aria-labelledby="value-heading"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        style={{
          willChange: "opacity, transform",
        }}
      >
        {/* Subtle decorative elements */}
        <motion.div
          className="absolute -z-10 top-24 left-12 h-56 w-56 rounded-full bg-theme-main/20 blur-[90px]"
          style={{ y: bgY1, x: bgX1, opacity: bgOpacity, willChange: "transform, opacity" }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute -z-10 bottom-24 right-12 h-72 w-72 rounded-full bg-[#260a40]/35 blur-[100px]"
          style={{ y: bgY2, x: bgX2, opacity: bgOpacity, willChange: "transform, opacity" }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-14 text-center">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              <div className="text-center w-2 h-2 bg-theme-main rounded-sm" />
              Our Edge
            </motion.div>

            <motion.h2
              id="value-heading"
              variants={fadeUp}
              className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
            >
              How ChitChat Adds Value
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="inline-block mx-auto max-w-3xl  text-base sm:text-[1.0625rem] md:text-[1.125rem] leading-7 sm:leading-8 text-white/90">
              AI That Fits Seamlessly Into Your Operations
            </motion.p>
          </div>

          {/* Value cards grid with stagger */}
          <motion.div
            role="list"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            variants={stagger}
          >
            {businessValues.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group h-full rounded-md border border-white/10 bg-black p-6 shadow-sm transition hover:shadow-lg flex flex-col"
                >
                  {/* Icon + Title */}
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex p-3 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                      {Icon && <Icon className="h-5 w-5" />}
                    </span>
                    <h4 className="text-base font-semibold text-white leading-tight">
                      {item.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* Metric pill */}
                  {item.metric && (
                    <div className="mt-4">
                      <span className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold text-indigo-70">
                        {item.metric}
                      </span>
                    </div>
                  )}
                </motion.div>


              );
            })}
          </motion.div>

          {/* Stats (staggered tiles) */}
          <motion.section
            aria-label="Key performance stats"
            className="mt-20 rounded-xl border border-white/10 bg-black/80 p-6 sm:p-8 md:p-10 shadow-[0_6px_30px_rgba(0,0,0,0.35)] backdrop-blur"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            custom={0.2}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="grid grid-cols-2 gap-6 text-center text-white sm:gap-8 md:grid-cols-4">
              {[
                { value: "24/7", label: "Availability" },
                { value: "90%+", label: "Satisfaction" },
                { value: "10×", label: "Faster Response" },
                { value: "5M+", label: "Daily Interactions" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={tileReveal}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-5"
                >
                  <div className="mb-1 text-3xl sm:text-4xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-[0.75rem] sm:text-sm uppercase tracking-wider text-white/80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.section>
    </div>
  );
};

export default Businesses;
