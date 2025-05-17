import React from 'react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  className?: string;
  bgImage?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ className = '', bgImage }) => (
  <section
    id="cta"
    className={`relative py-20 md:py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 font-[Satoshi] overflow-hidden px-4 sm:px-8 ${className}`}
  >
    {/* Glowy background elements */}
    <div className="absolute top-0 left-0 w-[24rem] h-[24rem] bg-theme-main/10 rounded-full blur-[100px] -z-10"></div>
    <div className="absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-pink-400/10 rounded-full blur-[80px] -z-10"></div>
    <div className="pointer-events-none">
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-theme-main/20 via-purple-400/10 to-pink-400/10 rounded-full blur-[80px] opacity-40 z-0"></div>
      <div className="absolute bottom-10 left-1/4 w-44 h-44 bg-gradient-to-tr from-pink-400/20 via-theme-main/10 to-white/0 rounded-full blur-[70px] opacity-30 z-0"></div>
      <div className="absolute top-10 right-1/4 w-60 h-60 bg-gradient-to-bl from-purple-400/20 via-theme-main/10 to-white/0 rounded-full blur-[90px] opacity-30 z-0"></div>
    </div>
    <div className="relative z-20 max-w-3xl mx-auto text-center">
      <div className="inline-block mb-8 px-4 py-1 bg-theme-main/10 text-theme-main backdrop-blur-sm rounded-full text-sm font-medium animate-fade-in">
        Get Started
      </div>
      <h2 className="scroll-review opacity-0 transform translate-y-6 text-4xl md:text-5xl font-extrabold text-gray-900 whitespace-pre-line leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent transition-all duration-700">
        Ready to Elevate Your Business?
      </h2>
      <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed font-medium drop-shadow mt-6">
        Discover how ChitChat can transform your customer experience with tailored AI solutions.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <Link
          to="/contactus"
          className="px-10 py-4 rounded-full bg-theme-main text-white font-bold shadow-2xl hover:bg-theme-dark transition-all duration-300 text-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-theme-main/40"
        >
          Contact Us
        </Link>
        <Link
          to="/book-call"
          className="px-10 py-4 rounded-full bg-white border-2 border-theme-main text-theme-main font-bold shadow hover:bg-theme-main hover:text-white transition-all duration-300 text-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-theme-main/20"
        >
          Book a Call
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
