import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string; // Now a string, e.g., "psychology_alt"
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md">
      <div className="mb-4">
        <div className="w-12 h-12 rounded-md bg-theme-light flex items-center justify-center text-theme-main">
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <a
        href="#"
        className="text-sm text-theme-main hover:text-theme-dark font-medium flex items-center"
      >
        Learn More
        <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
      </a>
    </div>
  );
};

export default FeatureCard;
