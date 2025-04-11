import React from 'react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      title: "Contextual Reasoning",
      description: "Build applications that reason with context from various sources including documents, APIs, and databases.",
      iconPath: "/build-icon.svg" // Will use a fallback in FeatureCard if not found
    },
    {
      title: "Composable Chains",
      description: "Create complex chains that combine multiple models and tools for sophisticated reasoning capabilities.",
      iconPath: "/run-icon.svg"
    },
    {
      title: "Observability",
      description: "Full visibility into your application chains with logging, tracing, and evaluation capabilities.",
      iconPath: "/manage-icon.svg"
    },
    {
      title: "Human Augmented Intelligence",
      description: "Enhance human decision-making with emotionally aware AI agents that collaborate, not just automate.",
      iconPath: "/icons/brain-heart.svg" // 🧠❤️ – Symbol of empathy + intelligence
    },
    {
      title: "Multi-Persona Support",
      description: "Seamlessly switch between AI personalities like Samantha and Arin, each with unique tone and expertise.",
      iconPath: "/icons/multiple-users.svg" // 👥 – Represents multiple personas
    },
    {
      title: "Real-Time Comparisons",
      description: "Compare outputs from humanized agents vs raw models like GPT-4o to benchmark effectiveness.",
      iconPath: "/icons/comparison-split.svg" // ↔️ – Split/comparison icon
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-langchain-dark mb-4">Key Capabilities</h2>
          <p className="text-center text-langchain-gray mb-12 max-w-2xl mx-auto">
            Our framework provides everything you need to build sophisticated AI applications that can understand context and reason effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              iconPath={feature.iconPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;