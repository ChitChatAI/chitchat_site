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
      className="relative py-20 md:py-32 bg-black text-white font-sans overflow-hidden px-4 sm:px-8"
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
        className="relative z-20 container mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Human Augmented AI in Customer Service
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Custom-built AI personas that think, feel, and respond like real people – tailored for your business.
        </p>
        <a
          href="/contactus"
          className="mt-6 px-6 py-3 bg-white text-theme-main font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Get a demo
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
