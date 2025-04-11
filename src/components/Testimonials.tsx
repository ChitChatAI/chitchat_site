import React from 'react';
import TestimonialCard from './TestimonialCard';
import MetricCard from './MetricCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "ChitChat's emotionally fluent AI has transformed how we interact with customers. It's a game-changer.",
      name: "Conrad Leigh",
      role: "CEO, RAIN"
    },
    {
      quote: "We've reduced our development time by 50% since integrating ChitChat into our tech stack. Highly recommended.",
      name: "Michael Chen",
      role: "Lead Developer, DataSphere"
    }
  ];

  const metrics = [
    { value: "99.9%", label: "Uptime" },
    { value: "2.5x", label: "Faster Development" },
    { value: "10M+", label: "API Calls Daily" },
    { value: "3,000+", label: "Active Users" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
        
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Impact by the Numbers</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard 
              key={index}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;