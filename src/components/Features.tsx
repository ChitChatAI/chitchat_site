import React, { useEffect } from 'react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-langchain-dark mb-4">Key Capabilities</h2>
          <p className="text-center text-langchain-gray mb-12 max-w-2xl mx-auto">
            Our platform transforms powerful LLMs into emotionally intelligent AI agents, helping businesses deliver personalised, human-like customer interactions at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="scroll-review opacity-0 transform translate-y-10 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;