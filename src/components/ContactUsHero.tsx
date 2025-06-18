import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ContactHeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yHeading = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yParagraph = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yDots = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-white text-gray-900 px-6 md:px-12 overflow-hidden"
      aria-label="Get in Touch Hero Section"
    >
      {/* Background Image with subtle parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="./homePage/contactUS.png"
          alt="Contact Us Background"
          className="w-full h-full object-cover object-center scale-105"
          style={{ transform: 'translateZ(0)' }}
        />
      </div>

      {/* Enhanced Glassmorphic Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full backdrop-blur-[10px] border-t border-white/10"
          style={{
            background:
              'linear-gradient(135deg, rgba(120,80,200,0.15) 0%, rgba(60,30,120,0.1) 100%)',
            boxShadow: 'inset 0 0 1px rgba(255, 255, 255, 0.3)',
          }}
        />
      </div>

      {/* Content Layer with refined spacing */}
      <div className="relative z-10 max-w-7xl w-full px-4 flex flex-col items-center justify-center py-24">
        {/* Text Content with scroll animation */}
        <div className="text-center max-w-3xl space-y-8 px-4">
          <motion.h1
            style={{ y: yHeading }}
            className="text-5xl text-white md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Get in Touch With Us
          </motion.h1>

          {/* Animated Branded Dots */}
          <motion.div style={{ y: yDots }} className="flex justify-center gap-4">
            <span
              className="w-4 h-4 rounded-full bg-theme-main/30 animate-pulse"
              style={{ animationDuration: '2s' }}
            />
            <span
              className="w-4 h-4 rounded-full bg-theme-main/50 animate-pulse delay-75"
              style={{ animationDuration: '2.2s' }}
            />
            <span
              className="w-4 h-4 rounded-full bg-theme-main/80 animate-pulse delay-150"
              style={{ animationDuration: '2.4s' }}
            />
          </motion.div>

          <motion.p
            style={{ y: yParagraph }}
            className="text-xl md:text-2xl text-theme-main leading-relaxed max-w-2xl mx-auto"
          >
            We typically respond within <span className="font-semibold text-gray-900">48 hours</span>. Our team is ready to assist you with any inquiries.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
