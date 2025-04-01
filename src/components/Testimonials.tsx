import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This AI framework has transformed how we build and deploy our applications. The results have been nothing short of extraordinary.",
      name: "Sarah Chen",
      role: "CTO, TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
    },
    {
      quote: "The ease of implementation and powerful features have made this our go-to platform for all AI development needs.",
      name: "Michael Rodriguez",
      role: "Lead Developer, InnovateLabs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
    }
  ];

  const metrics = [
    { value: "20M+", label: "Monthly Downloads" },
    { value: "100K+", label: "Apps Powered" },
    { value: "100K+", label: "GitHub Stars" },
    { value: "4K+", label: "Contributors" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <p className="text-lg text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</h3>
              <p className="text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;