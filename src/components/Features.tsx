import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

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

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
    <> {/* Use Cases Section */}
      <section
        id="use-cases"
        className="relative py-20 md:py-32 bg-black text-white overflow-hidden px-4 sm:px-8 lg:px-20"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-5xl sm:text-6xl font-extrabold text-center text-white leading-tight tracking-tight mb-10">
            How Businesses Use ChitChat AI
          </h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-20 font-medium text-center max-w-3xl mx-auto"
            style={{ lineHeight: '1.7' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideUpVariants}
          >
            Our platform transforms powerful LLMs into emotionally intelligent AI agents, helping businesses deliver personalized, human-like customer interactions at scale.
          </motion.p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {useCases.slice(0, 4).map((item, index) => (
              <div className="relative group" key={index}>
                {/* Card */}
                <div
                  className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 
              rounded-2xl p-8 h-full shadow-[0_8px_24px_rgba(0,0,0,0.2)] 
              transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] 
              hover:bg-white/10"
                >
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white/90 tracking-tight leading-snug font-satoshi">
                    {item.title}
                  </h3>
                  <div className="h-1 w-10 bg-theme-main rounded-full my-4"></div>
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Centered Final Card */}
            <div className="sm:col-span-2 flex justify-center">
              <div className="relative group w-full sm:w-3/4">
                {/* Card */}
                <div
                  className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 
              rounded-2xl p-8 h-full shadow-[0_8px_24px_rgba(0,0,0,0.2)] 
              transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] 
              hover:bg-white/10"
                >
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white/90 tracking-tight leading-snug font-satoshi">
                    {useCases[4].title}
                  </h3>
                  <div className="h-1 w-10 bg-theme-main rounded-full my-4"></div>
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
                    {useCases[4].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        id={id}
        className="relative pb-16 md:py-0 bg-black text-white overflow-hidden px-4 sm:px-8"
      >
        <div className="container mx-auto px-6 sm:px-12">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              What Sets Us Apart
            </motion.h2>

          </div>
          <div className="space-y-10 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center md:items-start gap-6 dark:bg-black/50 backdrop-blur-md rounded-2xl p-6 
             shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] 
             transition-all duration-300 "
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-xl backdrop-blur-md 
  text-white/90 shadow-inner">
                  <span
                    className="material-symbols-outlined text-5xl"
                    style={{ fontVariationSettings: '"wght" 700' }}
                  >
                    {feature.icon}
                  </span>
                </div>




                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-4xl font-bold text-white/90 tracking-tight leading-snug font-satoshi">
                    {feature.title}
                  </h3>
                  <div className="h-1 w-10 bg-theme-main rounded-full mb-4"></div>
                  <p className="text-md sm:text-2xl text-gray-300 mt-3 font-light leading-relaxed tracking-wide">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>

  );
};

export default Features;