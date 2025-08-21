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
    video.src = '/homePage/chitchat_bg.mp4';
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
          <source src="/homePage/chitchat_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>


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
         Built for Every Business to Feel <span className="text-gray-100 text-4xl md:text-5xl lg:text-6xl">Human</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-white text-lg md:text-xl text-white max-w-3xl mx-auto mb-10"
        >
         Experience cutting-edge AI that streamlines operations and enhances customer interactions, delivering a truly humanized digital experience.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;