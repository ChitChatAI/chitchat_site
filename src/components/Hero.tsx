'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC<{ id?: string }> = ({ id }) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id={id}
      className="relative min-h-screen bg-black text-white font-sans overflow-hidden flex items-center justify-center px-4 sm:px-8"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/homePage/chitchat_bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-10"></div>

      <motion.div
        className="relative z-20 container mx-auto text-center px-4"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Human Augmented AI in Customer Service
        </h1>        <p className="text-lg md:text-2xl mb-8">
          Custom-built AI personas that think, feel, and respond like real people – tailored for your business.
        </p>        <a
          href="/contactus"
          className="mt-6 inline-block px-6 py-3 bg-white text-theme-main font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Get a demo
        </a>
        
        {/* Animated dots for life */}
        <div className="flex space-x-3 mt-10 animate-fade-in-up delay-700 justify-center">
          <span className="w-4 h-4 rounded-full bg-theme-main animate-pulse"></span>
          <span className="w-4 h-4 rounded-full bg-purple-400 animate-pulse delay-150"></span>
          <span className="w-4 h-4 rounded-full bg-pink-400 animate-pulse delay-300"></span>
        </div>
      </motion.div>      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
