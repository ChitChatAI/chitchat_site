import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role }) => {
  const getProfileImage = (name: string) => {
    switch (name) {
      case "Conrad Leigh":
        return "/profiles/conrad.jpg";
      case "Michael Chen":
        return "/profiles/Michael.png";
      default:
        return "/profiles/default.png"; // Fallback image
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-md flex items-start">
      <img
        src={getProfileImage(name)}
        alt={name}
        className="w-12 h-12 rounded-full mr-4 object-cover shadow-md"
      />
      <div>
        <p className="italic text-gray-700 text-lg">{quote}</p>
        <div className="mt-4">
          <p className="text-gray-800 font-semibold">{name}</p>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
