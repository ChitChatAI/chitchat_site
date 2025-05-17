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
      className="relative py-20 md:py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 font-[Satoshi] overflow-hidden px-4 sm:px-8"
    >
      {/* Glowy background elements */}
      <div className="absolute top-0 left-0 w-[24rem] h-[24rem] bg-theme-main/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-pink-400/10 rounded-full blur-[80px] -z-10"></div>
      <div className="pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-theme-main/20 via-purple-400/10 to-pink-400/10 rounded-full blur-[80px] opacity-40 z-0"></div>
        <div className="absolute bottom-10 left-1/4 w-44 h-44 bg-gradient-to-tr from-pink-400/20 via-theme-main/10 to-white/0 rounded-full blur-[70px] opacity-30 z-0"></div>
        <div className="absolute top-10 right-1/4 w-60 h-60 bg-gradient-to-bl from-purple-400/20 via-theme-main/10 to-white/0 rounded-full blur-[90px] opacity-30 z-0"></div>
      </div>
      <div className="container mx-auto px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center scroll-review opacity-0 transform translate-y-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-4 leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
            Be Part of Our AI Revolution
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium drop-shadow">
            Join a thriving community of innovators shaping the future of AI. Collaborate, share insights, and build cutting-edge solutions together.
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