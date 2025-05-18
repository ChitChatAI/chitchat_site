'use client';

import React from 'react';

const Hero: React.FC<{ id?: string }> = ({ id }) => {
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
      <div className="relative z-20 container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
          Human Augmented AI in Customer Service
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate-fade-in">
          Beyond traditional AI, we empower agents with unique personas that deliver personalized, engaging customer experiences.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-theme-main font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
