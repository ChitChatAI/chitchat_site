import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0f0b1e] via-[#260a40] to-[#1f0033] text-white overflow-hidden px-6 py-12">
      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <p className="text-sm text-white/70 tracking-wide">
          &copy; {new Date().getFullYear()} ChitChat AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
