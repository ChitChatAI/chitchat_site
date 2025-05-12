import React from 'react';
import { Link } from 'react-router-dom';

const ForBusinesses: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-[#0f0b1e] via-[#260a40] to-[#1f0033] text-white font-satoshi overflow-x-hidden">
      {/* Header Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 relative z-10 border-b border-gray-700">
        {/* Decorative Glow Elements */}
        <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-purple-500 opacity-30 blur-[200px] z-0 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-120px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-[150px] z-0 rounded-full animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#1c1033]/50 to-[#0f0b1e] opacity-80 z-0 pointer-events-none" />

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          AI That Fits Seamlessly<br />Into Your Operations
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl">
          We provide AI solutions that seamlessly integrate into your business operations, enhancing customer engagement and driving results.
        </p>
      </section>

      {/* Storytelling Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto border-b border-gray-700 relative">
        {/* Decorative Glow Elements */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-[150px] z-0 rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-[150px] z-0 rounded-full" />

        <h2 className="text-3xl font-bold text-white mb-6 text-center relative z-10">
          Instant Support That Feels Personal
        </h2>
        <p className="text-white/80 text-lg leading-relaxed relative z-10">
          No more long wait times or robotic replies. Our AI personas handle customer queries immediately, 24/7, while sounding human, warm, and helpful. 
          Imagine a world where your customers feel heard and valued, no matter the time of day.
        </p>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto border-b border-gray-700 relative">
        {/* Decorative Glow Elements */}
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-[150px] z-0 rounded-full" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-[150px] z-0 rounded-full" />

        <h2 className="text-3xl font-bold text-white mb-6 text-center relative z-10">
          Customer Retention, Reinvented
        </h2>
        <p className="text-white/80 text-lg leading-relaxed relative z-10">
          Catch cancellations before they happen. Our AI personas are trained in subtle psychological techniques to calm, connect, and convince. 
          Retain your customers by offering them a personalized experience that feels genuine.
        </p>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto border-b border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Humanised Automation for Every Department
        </h2>
        <p className="text-white/80 text-lg leading-relaxed">
          From tech support to billing, we tailor the tone. Each persona is custom-built to match your brand and department needs. 
          Let your customers feel the human touch in every interaction, no matter the department.
        </p>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto border-b border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Never Sound Generic Again
        </h2>
        <p className="text-white/80 text-lg leading-relaxed">
          Say goodbye to copy-paste chatbot templates. ChitChat personas are deeply humanised, each with unique quirks, tone, and emotional intelligence. 
          Stand out by offering a conversational experience that feels authentic and memorable.
        </p>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto border-b border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Custom Chatbots for Any Industry
        </h2>
        <p className="text-white/80 text-lg leading-relaxed">
          Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance. 
          Let us help you redefine customer interactions in your industry.
        </p>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center py-24 px-6 max-w-4xl mx-auto relative">
        {/* Decorative Glow Elements */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-[150px] z-0 rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-[150px] z-0 rounded-full" />

        <h2 className="text-3xl font-bold mb-4 text-white relative z-10">Ready to Elevate Your Business?</h2>
        <p className="text-white/80 mb-8 text-lg relative z-10">
          Discover how ChitChat can transform your customer experience with tailored AI solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <Link
            to="/contactus"
            className="bg-theme-main hover:bg-theme-dark text-white px-6 py-3 rounded-md text-lg font-medium shadow-lg transition-all duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/book"
            className="border border-theme-main text-theme-main hover:bg-theme-main hover:text-white px-6 py-3 rounded-md text-lg font-medium transition-all duration-300"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ForBusinesses;
