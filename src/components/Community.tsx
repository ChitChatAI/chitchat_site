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
    <section
      id={id}
      className="relative py-20 md:py-32 bg-black text-white font-[Satoshi] overflow-hidden px-4 sm:px-8"
    >
  
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10"></div>
      <div className="container mx-auto px-6 sm:px-12 relative z-20">
        <div className="max-w-4xl mx-auto text-center scroll-review opacity-0 transform translate-y-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4 leading-tight tracking-tight drop-shadow-xl">
            Be Part of Our AI Revolution
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-medium drop-shadow">
            Join a thriving community of innovators shaping the future of AI.
            Collaborate, share insights, and build cutting-edge solutions together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="px-10 py-4 rounded-full bg-theme-main text-white font-bold shadow-2xl hover:bg-theme-dark transition-all duration-300 text-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-theme-main/40"
            >
              LinkedIn Community
            </a>
            <a
              href="#"
              className="px-10 py-4 rounded-full bg-white border-2 border-theme-main text-theme-main font-bold shadow hover:bg-theme-main hover:text-white transition-all duration-300 text-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-theme-main/20"
            >
              Contact Us
            </a>
          </div>
          {/* Animated dots for life */}
          <div className="flex space-x-3 mt-10 animate-fade-in-up delay-700 justify-center">
            <span className="w-4 h-4 rounded-full bg-theme-main animate-pulse"></span>
            <span className="w-4 h-4 rounded-full bg-purple-400 animate-pulse delay-150"></span>
            <span className="w-4 h-4 rounded-full bg-pink-400 animate-pulse delay-300"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;