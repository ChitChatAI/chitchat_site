"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero: React.FC<{ id?: string }> = ({ id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  // Preload the video when component mounts
  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/homePage/hero-video.mp4';
    video.preload = 'auto';
  }, []);

  return (
    <section
      id={id}
      className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 text-white"
      aria-label="ChitChat AI Hero Section"
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-70"
          preload="auto"
          aria-label="Background video showing AI technology in action"
        >
          <source src="/homePage/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Glassmorphic overlay */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
      >
        <div className="w-full h-full backdrop-blur-[5px] bg-[hsla(270,80%,30%,0.25)] shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)]" />
      </motion.div>

      {/* Content Layer */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative z-10 max-w-5xl w-full px-6 text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
        >
          Human Augmented AI For Real Connection
        </motion.h1>
    
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          Custom-built AI personas that think, feel, and respond like real people
          – tailored for your business.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;