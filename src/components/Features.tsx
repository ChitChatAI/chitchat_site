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
      title: "Psychologically Engineered Personas",
      description: "Our personas are crafted with deep emotional intelligence and personality theory. They are built to sound, feel, and think like real people.",
      icon: "psychology_alt",
    },
    {
      title: "Multi-Persona Support",
      description: "Tailored personas for different business roles. Whether it’s a kind billing assistant or a confident troubleshooter, each one feels uniquely human.",
      icon: "switch_account",
    },
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
  ];

  return (
    <section id={id} className="relative py-16 bg-gray-50">
      {/* Background and Overlay */}
      <div 
        className="absolute inset-0 z-0 -top-24 bg-fixed animate-fade-in" 
        style={{
          backgroundImage: 'url("/solutionsPage/solutions.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-white/80 -top-24"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-header font-bold text-center text-langchain-dark mb-4 leading-[150%] font-sans">
            What Sets Us Apart
          </h2>
          <p
            className="text-center font-sans text-langchain-gray mb-12 max-w-2xl mx-auto"
            style={{ lineHeight: '1.5', maxWidth: '100ch' }}
          >
            Our platform transforms powerful LLMs into emotionally intelligent AI agents, helping businesses deliver personalised, human-like customer interactions at scale.
          </p>
        </div>

        {/* Feature Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => {
            const slug = feature.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return (
              <motion.div
                key={index}
                id={`features-${slug}`}
                className="scroll-review opacity-0 transform translate-y-10 transition-all duration-500 ease-in-out h-full flex"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ scale: 1.025, boxShadow: "0 8px 32px 0 rgba(80, 36, 255, 0.10)" }}
                whileTap={{ scale: 0.97, opacity: 0.85 }}
              >
                <div
                  className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-theme transition-shadow duration-200 flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-theme-main/60 group w-full"
                  tabIndex={0}
                >
                  <div className="flex items-center mb-4">
                    <span className="material-symbols-outlined text-theme-main text-4xl mr-4 transition-colors duration-200 group-hover:text-theme-main group-focus-visible:text-theme-main">
                      {feature.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 leading-[150%] font-sans" style={{ maxWidth: '100ch' }}>
                      {feature.title}
                    </h3>
                  </div>
                  <p
                    className="text-gray-600 font-sans mb-4"
                    style={{ lineHeight: '1.5', maxWidth: '100ch' }}
                  >
                    {feature.description}
                  </p>
                  <Link
                    to={`/features/${feature.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                    className="text-theme-main font-medium flex items-center font-sans transition-colors duration-200 group-hover:text-theme-main group-focus-visible:text-theme-main"
                    tabIndex={0}
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
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

      {/* Curved Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
          <path d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Features;