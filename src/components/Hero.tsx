"use client";

import React from "react";

const Hero: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section
      id={id}
      className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 text-white"
      aria-label="ChitChat AI Hero Section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/homePage/hero-banner.png"
          alt="Human Augmented AI Background"
          className="w-full h-full object-cover object-center opacity-70"
        />
      </div>

      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full backdrop-blur-[4px] rounded-none shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2)] border-t border-white/10" />
      </div>


      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl w-full px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          Human Augmented AI For Real Connection
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Custom-built AI personas that think, feel, and respond like real people
          – tailored for your business.
        </p>

        {/* Branded Dots */}
        <div className="flex justify-center gap-3 mt-6 md:mt-10">
          <span className="w-3 h-3 rounded-full bg-theme-main/30" />
          <span className="w-3 h-3 rounded-full bg-theme-main/50" />
          <span className="w-3 h-3 rounded-full bg-theme-main/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;