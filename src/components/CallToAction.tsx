import React from 'react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  className?: string;
  bgImage?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ className = '', bgImage }) => (
  <section
    id="cta"
    className={`py-16 bg-gray-900 text-white px-4 sm:px-6 ${className}`}
  >
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-block mb-6 px-4 py-1 bg-theme-main/45 text-white/90 rounded-full text-sm font-medium">
        Get Started
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Ready to Elevate Your Business?
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
        Discover how ChitChat can transform your customer experience with tailored AI solutions.
      </p>
      <div className="flex justify-center">
        <a
          href="mailto:jessicaclaireleighza@gmail.com"
          className="px-8 py-3 rounded-lg bg-theme-main/50 text-white font-medium hover:bg-theme-main/30 transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </section>
);

export default CallToAction;