import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setIsScrolled(window.scrollY > 100);
      } else {
        setIsScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'About us' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/development-workflow', label: 'Development Phases' },
    { path: '/contactus', label: 'Contact Us' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-0 transition-all duration-300 ${
        isScrolled ? 'bg-white border-b border-gray-200 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Brand Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div
              className={`flex items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ease-out ${
                isScrolled ? 'bg-white' : 'bg-transparent'
              }`}
            >
              <img
                src={isScrolled ? '/branding/chitchatAI.png' : '/branding/chitchatAILite.png'}
                alt="ChitChat AI Logo"
                className={`object-contain drop-shadow-md transition-all duration-300 ease-out ${
                  isScrolled
                    ? 'w-8 h-8 sm:w-10 sm:h-10'
                    : 'w-7 h-7 sm:w-9 sm:h-9 rounded-full'
                }`}
              />
              <span
                className={`ml-2 font-satoshi-rounded font-extrabold tracking-wide transition-all duration-300 ease-out ${
                  isScrolled
                    ? 'text-xl sm:text-2xl text-gray-900 group-hover:text-theme-main'
                    : 'text-lg sm:text-xl text-white group-hover:text-theme-light'
                }`}
              >
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
                  className={`text-gray-700 font-satoshi font-extrabold relative z-10 transition-all duration-300 ease-out ${
                    isScrolled ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
                    WebkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
                    textShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                  }}
                >
                  AI
                </span>
              </span>
            </div>
          </NavLink>

          {/* Hamburger Toggle */}
          <button
            className={`p-2 rounded-full transition-all duration-300 ease-out ${
              isScrolled ? 'text-theme-main hover:bg-theme-main/10' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-300 ease-out ${
                isScrolled ? 'h-6 w-6' : 'h-5 w-5'
              }`}
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
      </div>

      {/* Right Slide Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-lg p-6 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col space-y-6 mt-14">
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
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
