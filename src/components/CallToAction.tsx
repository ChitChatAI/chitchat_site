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
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get Started
      </motion.div>

      <motion.h2
        className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Ready to Elevate Your <span className="text-gray-200">Business</span>?
      </motion.h2>

      <motion.p
        className="mt-4 text-white/80 leading-relaxed"
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
          href="mailto:info@chitchatai.co.za"
          className="mr-2 sm:mr-4 bg-white text-[#260a40] text-[0.9rem] sm:text-sm font-semibold px-4 sm:px-4 py-2.5 rounded hover:bg-gray-200 transition whitespace-nowrap z-10"
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