import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const navLinks = [
    { path: '/', label: 'About us' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/development-workflow', label: 'Workflow' }, // Moved up for higher priority
    { path: '/blog', label: 'Personas' },
    {path: '/whychitchatai', label: 'Why?'},
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-50/100 px-0 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo and Brand */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <img
              src="/branding/chitchatAI.png"
              alt="ChitChat AI Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-md"
            />
            <span className="ml-2 text-2xl sm:text-3xl font-satoshi-rounded font-extrabold tracking-wide text-gray-900 group-hover:text-theme-main transition-colors duration-300">
              <span
                className="relative z-10 font-satoshi"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                  WebkitClipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                }}
              >
                Chit
              </span>
              <span
                className="text-theme-main relative z-10 transition-colors duration-300 font-satoshi"
                style={{
                  clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)',
                  WebkitClipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)',
                  textShadow: '0px 4px 12px rgba(80,36,255,0.15)',
                }}
              >
                Chat
              </span>
                <span
                  className="text-gray-700 font-satoshi font-extrabold text-2xl sm:text-3xl relative z-10 transition-colors duration-300 pl-2"
                  style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
                  WebkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
                  textShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                  }}
                >
                  AI
                </span>
            </span>
          </NavLink>
          {/* Hamburger Menu Toggle */}
          <button
            className="p-2 rounded-full text-theme-main bg-white/90 shadow border border-theme-main/10 hover:bg-theme-main/10 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 w-80"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ul className="flex flex-col space-y-4">
                {navLinks.map(({ path, label }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block text-lg font-medium text-gray-700 hover:text-theme-main ${
                          isActive ? 'text-theme-main' : ''
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
