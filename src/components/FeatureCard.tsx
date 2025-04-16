import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string; // Now a string, e.g., "psychology_alt"
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="scroll-review bg-white rounded-xl p-6 border border-gray-100 opacity-0 transform translate-y-10 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-md flex items-center justify-center text-theme-main mr-4">
          <span
            className="material-symbols-outlined text-4xl icon-pulse"
            style={{ fontVariationSettings: "'wght' 100, 'opsz' 24" }}
          >
            {icon}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-5">{description}</p>
      <a
        href="#"
        className="mt-6 inline-block text-theme-main hover:text-theme-dark font-medium"
      >
        Learn More →
      </a>
    </div>
  );
};

export default FeatureCard;
