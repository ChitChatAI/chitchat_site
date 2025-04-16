import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-theme-main/10 to-white rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
      <span className="text-4xl font-extrabold text-theme-main mb-2">{value}</span>
      <span className="text-base text-gray-600 text-center">{label}</span>
    </div>
  );
};

export default MetricCard;
