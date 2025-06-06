import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string; // Now a string, e.g., "psychology_alt"
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div
      className="scroll-review rounded-xl p-6 border border-gray-300 opacity-0 transform translate-y-10 hover:bg-gray-100 transition-all duration-300 flex flex-col justify-between h-full min-h-[340px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div>
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
      </div>
      <a
        href="#"
        className="mt-6 inline-block text-theme-main hover:text-theme-dark font-medium flex items-center gap-1"
      >
        Learn More
        <IoArrowForward className="text-lg" />
      </a>
    </div>
  );
};

export default FeatureCard;
