"use client";

import React from "react";
import { motion } from "framer-motion";

const ExploreButton: React.FC = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={handleScroll}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative overflow-hidden px-7 py-3 rounded-xl mx-auto text-white font-semibold border border-white/30 backdrop-blur-md bg-white/5 transition-all duration-300 shadow-sm hover:shadow-xl group"
    >
      <span className="relative z-10 flex items-center">
        Explore
        <motion.span
          initial={{ y: 0 }}
          whileHover={{ y: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="ml-2 text-lg"
        >
          ↓
        </motion.span>
      </span>

      {/* Pulse Glow */}
      <span className="absolute inset-0 bg-white/10 opacity-20 blur-2xl group-hover:opacity-30 transition duration-500 animate-pulse"></span>
    </motion.button>
  );
};

export default ExploreButton;
