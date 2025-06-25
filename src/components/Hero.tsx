"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero: React.FC<{ id?: string }> = ({ id }) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id={id}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/homePage/chitchat_bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Human Augmented AI For Real Connection
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 opacity-90"
          transition={{ delay: 0.2 }}
        >
          Custom-built AI personas that think, feel, and respond like real people
          – tailored for your business.
        </motion.p>

        {/* Request Demo Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/contactus"
            className="inline-block px-8 py-3 rounded-full bg-white text-gray-900 font-medium text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Request Demo
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;