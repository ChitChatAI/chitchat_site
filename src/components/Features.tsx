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
    <section id={id} className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background and Overlay */}
      <div
        className="absolute inset-0 z-0 -top-24 bg-fixed animate-fade-in"
        style={{
          backgroundImage: 'url("/solutionsPage/solutions.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-white/80 -top-24"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our platform transforms powerful LLMs into emotionally intelligent AI agents, helping businesses deliver personalised, human-like customer interactions at scale.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="scroll-review relative bg-gradient-to-br from-theme-light via-theme-main to-theme-dark shadow-2xl rounded-3xl p-8 hover:shadow-[0_0_30px_10px_rgba(0,255,255,0.5)] transition-shadow duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, threshold: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              style={{
          clipPath: "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
              }}
            >
              {/* Parallax Background */}
              <div
          className="absolute inset-0 z-0 bg-gradient-to-r from-theme-accent to-theme-main opacity-20 blur-2xl transform scale-150"
          style={{ animation: `parallax-bg-${index} 10s infinite alternate` }}
              ></div>

              {/* Icon Container */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-theme-accent to-theme-main text-white rounded-full mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
          <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-semibold text-white mb-4">
          {feature.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-300">{feature.description}</p>

              {/* Animated Glow Effect */}
              <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -inset-1 bg-gradient-to-r from-theme-accent to-theme-main opacity-30 blur-lg"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Parallax Background Animations */}
        <style jsx>{`
          @keyframes parallax-bg-0 {
            0% {
              transform: translateY(-10%) scale(1.5);
            }
            100% {
              transform: translateY(10%) scale(1.5);
            }
          }
          @keyframes parallax-bg-1 {
            0% {
              transform: translateX(-10%) scale(1.5);
            }
            100% {
              transform: translateX(10%) scale(1.5);
            }
          }
          @keyframes parallax-bg-2 {
            0% {
              transform: translateY(10%) scale(1.5);
            }
            100% {
              transform: translateY(-10%) scale(1.5);
            }
          }
        `}</style>
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