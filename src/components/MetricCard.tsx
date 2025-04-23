import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
      <span className="text-5xl font-extrabold text-theme-main mb-3">{value}</span>
      <span className="text-sm sm:text-base text-gray-500 text-center">{label}</span>
      <div className="mt-4 w-12 h-1 bg-theme-main rounded-full"></div>
    </div>
  );
};

export default MetricCard;
