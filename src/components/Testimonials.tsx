import React, { useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import MetricCard from './MetricCard';

const Testimonials: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.scroll-review');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "ChitChat's emotionally fluent AI has transformed how we interact with customers. It's a game-changer.",
      name: "Conrad Leigh",
      role: "CEO, RAIN"
    },
    {
      quote: "ChitChat's AI personas have redefined how we deliver personalized customer experiences, enabling us to scale with confidence and precision.",
      name: "Michael Chen",
      role: "Lead Developer, DataSphere"
    }
  ];

  const metrics = [
    { value: "99.9%", label: "System Reliability" },
    { value: "2.5x", label: "Accelerated Development" },
    { value: "10M+", label: "Daily API Interactions" },
    { value: "3,000+", label: "Engaged Users" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="scroll-review opacity-0 transform translate-y-10">
              <TestimonialCard 
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
              />
            </div>
          ))}
        </div>
        
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Impact by the Numbers</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="scroll-review opacity-0 transform translate-y-10">
              <MetricCard 
                value={metric.value}
                label={metric.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;