import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  iconPath: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, iconPath }) => {
  // Purple theme icon as fallback if image not found
  const IconFallback = () => (
    <div className="w-12 h-12 rounded-md bg-theme-light flex items-center justify-center text-theme-main">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md">
      <div className="mb-4">
        {IconFallback()}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>
      <a
        href="#"
        className="text-sm text-theme-main hover:text-theme-dark font-medium flex items-center"
      >
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

export default FeatureCard;
