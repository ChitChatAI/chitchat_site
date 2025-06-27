import React from 'react';
import { motion } from 'framer-motion';

interface CallToActionProps {
  className?: string;
  bgImage?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  className = '', 
  bgImage }) => (
  <section
    id="cta"
    className={`relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white px-4 sm:px-6 ${className}`}
    style={bgImage ? { 
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    } : {}}
  >
    {/* Subtle grid pattern overlay */}
    <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMCAzMEg2ME0zMCAwVjYwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgLz48L3N2Zz4=')]" />
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.div
        className="inline-block mb-6 px-5 py-1.5 bg-theme-main/60 text-white rounded-full text-sm font-medium tracking-wide shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get Started
      </motion.div>

      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Ready to Elevate Your <span className="text-gray-200">Business</span>?
      </motion.h2>

      <motion.p
        className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Discover how ChitChat can transform your customer experience with <span className="text-white font-medium">tailored AI solutions</span>.
      </motion.p>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="mailto:jessica@chitchatai.co.za"
          className="px-10 py-4 rounded-xl bg-gradient-to-r from-theme-main to-theme-main text-white font-semibold hover:from-theme-main/90 hover:to-theme-main/90 transition-all duration-300 shadow-lg hover:shadow-theme-main/20 hover:scale-[1.02] active:scale-95"
        >
          Get In Touch
        </a>
      </motion.div>
    </div>

    {/* Floating decorative elements */}
    <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-theme-main/10 blur-3xl opacity-30" />
    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl opacity-30" />
  </section>
);

export default CallToAction;