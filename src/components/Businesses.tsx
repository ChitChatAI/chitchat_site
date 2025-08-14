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
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* Value Proposition Section */}
      <motion.section
        id="value"
        initial={{ opacity: 0 }}
        animate={controls}
        className="relative px-4 py-16 sm:px-6 md:px-8 lg:px-12 xl:px-20"
        aria-labelledby="value-heading"
      >
        {/* Decorative elements (kept subtle for contrast/AA) */}
        <motion.div
          className="absolute -z-10 top-20 left-10 h-56 w-56 rounded-full bg-purple-500/15 blur-[100px]"
          style={{ y: bgY1, x: bgX1 }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute -z-10 bottom-20 right-10 h-72 w-72 rounded-full bg-blue-500/15 blur-[110px]"
          style={{ y: bgY2, x: bgX2 }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mb-12 text-center sm:mb-14 md:mb-16">
            <motion.h2
              id="value-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
            >
              How ChitChat Adds Value
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mx-auto max-w-3xl text-base leading-7 text-white/90 sm:text-[1.0625rem] md:text-[1.125rem]"
            >
              {headerText}
              <span className="animate-pulse" />
            </motion.p>
          </div>

          {/* Value cards grid (mobile-first) */}
          <div
            role="list"
            className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          >
            {businessValues.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.article
                  role="listitem"
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={[
                    // Container
                    "group relative flex h-full flex-col justify-start rounded-2xl",
                    "border border-white/10 bg-black/30 backdrop-blur-sm",
                    "p-6 sm:p-7 md:p-8",
                    "shadow-sm transition-all hover:shadow-lg",
                    "focus-within:ring-1 focus-within:ring-theme-main/60",
                    item.color, // preserve incoming themed background
                  ].join(" ")}
                >
                  {/* Icon + Title */}
                  <div className="mb-3 flex items-start gap-3 sm:gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-theme-main/10"
                      aria-hidden="true"
                    >
                      {IconComponent && (
                        <IconComponent className="h-6 w-6 text-white/95" />
                      )}
                    </div>
                    <h3 className="mt-1 text-[1.0625rem] font-semibold leading-snug tracking-tight text-white sm:text-[1.125rem] md:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description (equalized height for tidy rows) */}
                  <div className="mb-5 min-h-[96px] flex-grow text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                    <p>{item.description}</p>
                  </div>

                  {/* Metric / CTA-like pill */}
                  {item.metric && (
                    <div className="mt-auto">
                      <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-2 text-xs font-semibold leading-none tracking-wide text-white/95 sm:text-sm">
                        {item.metric}
                      </div>
                    </div>
                  )}

                  {/* Hover micro-interaction accent */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 ring-1 ring-theme-main/30 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </motion.article>
              );
            })}
          </div>

          {/* Stats section */}
          <motion.section
            aria-label="Key performance stats"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-16 rounded-2xl bg-black/50 p-6 shadow-sm sm:p-8 md:mt-20 md:p-12"
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
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.2, duration: 0.45 }}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-5"
                >
                  <div className="mb-1 text-3xl font-bold sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-[0.75rem] uppercase tracking-wider text-white/80 sm:text-sm">
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