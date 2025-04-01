import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role }) => {
  return (
    <div className="p-6 border-l-4 border-theme-main bg-gray-50 rounded-md shadow-sm">
      <p className="italic text-gray-700 text-lg">{quote}</p>
      <div className="mt-4">
        <p className="text-gray-800 font-semibold">{name}</p>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
