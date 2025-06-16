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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-70"
        >
          <source src="/homePage/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>

      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full backdrop-blur-[5px] bg-[hsla(270,80%,30%,0.25)] shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)]" />
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
      </div>
    </section>
  );
};

export default Hero;