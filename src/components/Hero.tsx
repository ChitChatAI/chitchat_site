import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0b1e] via-[#260a40] to-[#1f0033] text-white overflow-hidden px-6 py-32 snap-start"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-purple-500 opacity-30 blur-[200px] z-0 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-120px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-[150px] z-0 rounded-full animate-pulse-slow" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#1c1033]/50 to-[#0f0b1e] opacity-80 z-0 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl text-center md:text-left">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-fade-in">
          Welcome to the Future of Conversations
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-10 animate-fade-in delay-200">
          At ChitChat, we redefine customer interactions with AI personas that are as unique and dynamic as real people.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-14 animate-fade-in delay-700 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
            Talk to Us — Let’s Build Yours
          </button>
          <button className="border-2 border-theme-main text-theme-main hover:bg-theme-main hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
            View Use Cases
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
