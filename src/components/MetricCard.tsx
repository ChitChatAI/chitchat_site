import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-md shadow p-4">
      <span className="text-3xl font-extrabold text-gray-900">{value}</span>
      <span className="text-sm text-gray-500 mt-1">{label}</span>
    </div>
  );
};

export default MetricCard;
