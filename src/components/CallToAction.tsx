import React from 'react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  className?: string;
  bgImage?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ className = '', bgImage }) => (
  <section
    id="cta"
    className={`relative py-20 md:py-32 bg-black text-white font-[Satoshi] overflow-hidden px-4 sm:px-8 ${className}`}
  >
    {/* Optional video or dark overlay background can be added here if desired */}
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0"></div>
    <div className="relative z-20 max-w-3xl mx-auto text-center">
      <div className="inline-block mb-8 px-4 py-1 bg-theme-main/10 text-theme-main backdrop-blur-sm rounded-full text-sm font-medium animate-fade-in">
        Get Started
      </div>
      <h2 className="scroll-review opacity-0 transform translate-y-6 text-4xl md:text-5xl font-extrabold text-white whitespace-pre-line leading-tight tracking-tight drop-shadow-xl">
        Ready to Elevate Your Business?
      </h2>
      <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed font-medium drop-shadow mt-6">
        Discover how ChitChat can transform your customer experience with tailored AI solutions.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <Link
          to="/contactus"
          className="px-10 py-4 rounded-full bg-theme-main text-white font-bold shadow-2xl hover:bg-theme-dark transition-all duration-300 text-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-theme-main/40"
        >
          Contact Us
        </Link>
      </div>
      {/* Animated dots for life */}
      <div className="flex space-x-3 mt-10 animate-fade-in-up delay-700 justify-center">
        <span className="w-4 h-4 rounded-full bg-theme-main animate-pulse"></span>
        <span className="w-4 h-4 rounded-full bg-purple-400 animate-pulse delay-150"></span>
        <span className="w-4 h-4 rounded-full bg-pink-400 animate-pulse delay-300"></span>
      </div>
    </div>
  </section>
);

export default CallToAction;
