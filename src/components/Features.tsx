import React, { useEffect } from 'react';

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
      className="relative py-20 md:py-32 bg-black text-white font-sans overflow-hidden px-4 sm:px-8"
    >
      <div className="container mx-auto px-6 sm:px-12">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            What Sets Us Apart
          </h2>
          <p
            className="text-xl sm:text-2xl text-gray-200 mb-12 font-medium"
            style={{ lineHeight: '1.5' }}
          >
            Our platform transforms powerful LLMs into emotionally intelligent AI agents, helping businesses deliver personalized, human-like customer interactions at scale.
          </p>
        </div>
        <div className="space-y-10 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center md:items-start gap-8 border border-white/20 bg-white/5 backdrop-blur-md p-8 rounded-lg hover:bg-white/10 transition-all duration-300"
              style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)' }}
            >
              <div className="flex-shrink-0 text-center md:text-left">
                <span className="material-symbols-outlined text-theme-main text-6xl">
                  {feature.icon}
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-200 mt-4" style={{ lineHeight: '1.75' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;