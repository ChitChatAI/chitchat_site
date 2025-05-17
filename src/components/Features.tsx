import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Features: React.FC<{ id?: string }> = ({ id }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.scroll-review');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Ongoing Optimisation",
      description: "We continuously fine-tune personas using real customer conversations, improving tone, empathy, and clarity over time.",
      icon: "auto_fix_high",
    },
    {
      title: "Seamless Integration",
      description: "Plug ChitChat into your existing platforms - web chat, or WhatsApp - for smooth, end-to-end automation.",
      icon: "integration_instructions",
    },
    {
      title: "Custom Conversations at Scale",
      description: "Automate high-quality, emotionally aware conversations without sacrificing nuance or accuracy. No scripts, no awkward pauses.",
      icon: "chat",
    },
    {
      title: "Built to Replace, Not Just Assist",
      description: "ChitChat doesn’t just support your team - it becomes it. Replace entire call centers with AI that feels personal, not robotic.",
      icon: "support_agent",
    },
    {
      title: "Psychologically Engineered Personas",
      description: "Our personas are crafted with deep emotional intelligence and personality theory. They are built to sound, feel, and think like real people.",
      icon: "psychology_alt",
    },
    {
      title: "Multi-Persona Support",
      description: "Tailored personas for different business roles. Whether it’s a kind billing assistant or a confident troubleshooter, each one feels uniquely human.",
      icon: "switch_account",
    },
  ];

  return (
    <section
      id={id}
      className="relative py-20 md:py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 font-[Satoshi] overflow-hidden px-4 sm:px-8"
    >
      <div className="container mx-auto px-6 sm:px-12">
        {/* Main header above cards */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
            What Sets Us Apart
          </h2>
          <p
            className="text-xl sm:text-2xl text-gray-700 mb-12 font-medium drop-shadow"
            style={{ lineHeight: '1.5' }}
          >
            Our platform transforms powerful LLMs into emotionally intelligent AI agents, helping businesses deliver personalised, human-like customer interactions at scale.
          </p>
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => {
            const slug = feature.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return (
              <motion.div
                key={index}
                id={`features-${slug}`}
                className="scroll-review opacity-0 transform translate-y-10 transition-all duration-500 ease-in-out h-full flex"
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(80, 36, 255, 0.10)" }}
                whileTap={{ scale: 0.97, opacity: 0.85 }}
              >
                <div
                  className="bg-white/90 border border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-theme transition-shadow duration-200 flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-theme-main/60 group w-full backdrop-blur-lg"
                  tabIndex={0}
                >
                  <div className="flex items-center mb-5">
                    <span className="material-symbols-outlined text-theme-main text-5xl mr-5 transition-colors duration-200 group-hover:text-theme-main group-focus-visible:text-theme-main drop-shadow-lg">
                      {feature.icon}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 leading-[150%] font-sans bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 font-sans mb-4 text-lg" style={{ lineHeight: '1.5' }}>
                    {feature.description}
                  </p>
                  <Link
                    to={`/features/${slug}`}
                    className="text-theme-main font-semibold flex items-center font-sans transition-colors duration-200 group-hover:text-theme-main group-focus-visible:text-theme-main"
                    tabIndex={0}
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Subtle bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Features;