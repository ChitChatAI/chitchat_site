import React from 'react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  className?: string;
  bgImage?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ className = '', bgImage }) => (
  <section
    id="cta"
    className={`relative py-16 px-6 sm:px-10 text-white bg-cover bg-center scroll-review ${className}`}
    style={bgImage ? { backgroundImage: `url('${bgImage}')` } : undefined}
  >
    {/* Overlay for readability */}
    <div className="absolute inset-0 z-0 bg-white/90 -top-24" />
    <div className="relative z-20 max-w-3xl mx-auto text-center">
      <h2 className="scroll-review opacity-0 transform translate-y-6 text-4xl md:text-5xl font-bold text-gray-900 whitespace-pre-line transition-all duration-700">
        Ready to Elevate Your Business?
      </h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed p-6">
        Discover how ChitChat can transform your customer experience with tailored AI solutions.
      </p>
      <div className="flex justify-center gap-6 mt-8">
        <Link
          to="/contact us"
          className="px-6 py-3.5 rounded-lg bg-white/90 backdrop-blur text-theme-main border border-purple-200 
            font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/30
            hover:transform hover:bg-white/100 flex items-center gap-2 group"
        >
          <span className="opacity-80 group-hover:opacity-100">Contact Us</span>
        </Link>
        <Link
          to="/book-call"
          className="px-6 py-3.5 rounded-lg bg-theme-main text-white 
            font-medium text-base shadow-md shadow-theme-main transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/40
            hover:transform flex items-center gap-2 group"
        >
          <span>Book a Call</span>
        </Link>
      </div>
    </div>
  </section>
);

export default CallToAction;
