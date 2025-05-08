import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

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
      title: "Human Augmented Intelligence",
      description: "Enhance human decision-making with emotionally aware AI agents that work alongside people, not just replace them.",
      icon: "psychology_alt"
    },
    {
      title: "Multi-Persona Support",
      description: "Seamlessly switch between our tailored AI personalities, each designed for specific business needs and customer experiences.",
      icon: "switch_account"
    },
    {
      title: "Real-Time Comparisons",
      description: "Benchmark humanized AI outputs against raw models like GPT-4 to measure tone, empathy, and accuracy in real time.",
      icon: "insights"
    },
    {
      title: "Effortless Growth",
      description: "As your business grows, our AI personas grow with you — maintaining quality and consistency across every customer interaction.",
      icon: "trending_up"
    },
    {
      title: "Ongoing Optimisation",
      description: "We actively update your AI personas' prompts based on real conversations — improving tone, accuracy, and helpfulness over time.",
      icon: "auto_fix_high"
    },
    {
      title: "Seamless Integration",
      description: "Easily integrate our AI personas into your existing tools and workflows, ensuring a smooth and efficient adoption process.",
      icon: "integration_instructions"
    }
  ];

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-langchain-dark mb-4">Key Capabilities</h2>
          <p className="text-center text-langchain-gray mb-12 max-w-2xl mx-auto">
            Our platform transforms powerful LLMs into emotionally intelligent AI agents, helping businesses deliver personalised, human-like customer interactions at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="scroll-review opacity-0 transform translate-y-10 transition-all duration-500 ease-in-out h-full flex"
              style={{
                clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              <div className="bg-white border border-theme-main p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="material-symbols-outlined text-theme-main text-4xl mr-4">{feature.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800 drop-shadow-lg">{feature.title}</h3> {/* Added drop shadow */}
                </div>
                <p className="text-gray-600 mb-4 drop-shadow-sm">{feature.description}</p> {/* Added drop shadow */}
                <a 
                  href="#"
                  className="text-theme-main font-medium hover:underline transition-colors duration-200 flex items-center"
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
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;