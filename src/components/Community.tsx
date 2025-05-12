import React, { useEffect } from 'react';

const Community: React.FC<{ id?: string }> = ({ id }) => {
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

  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center scroll-review opacity-0 transform translate-y-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Be Part of Our AI Revolution</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join a thriving community of innovators shaping the future of AI. Collaborate, share insights, and build cutting-edge solutions together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#" 
              className="bg-theme-main hover:bg-theme-dark text-white px-6 py-3 rounded-md transition-colors duration-200 font-medium"
            >
              LinkedIn Community
            </a>
            <a 
              href="#" 
              className="border border-gray-300 hover:border-theme-main hover:text-theme-main text-gray-600 px-6 py-3 rounded-md transition-colors duration-200 font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;