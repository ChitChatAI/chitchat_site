import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'About' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/development-workflow', label: 'Workflow' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center gap-2 z-10 focus:outline-none"
            aria-label="Home"
          >
            <img
              src={isScrolled ? '/branding/chitchatAI.png' : '/branding/chitchatAILite.png'}
              alt="ChitChat AI Logo"
              className="w-8 h-8 transition-all"
            />
            <span className={`text-xl font-semibold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              ChitChat<span className="text-theme-main">AI</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${isActive ? 'text-theme-main/90' : isScrolled ? 'text-gray-600 hover:text-theme-main/90' : 'text-white hover:text-theme-main/90'}`
                }
              >
                {label}
              </NavLink>
            ))}
            
            <NavLink
              to="/contactus"
              className={`ml-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isScrolled 
                  ? 'bg-theme-main text-white hover:bg-theme-main/60' 
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md focus:outline-none ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `py-3 px-4 rounded-lg text-base font-medium ${isActive ? 'bg-purple-50 text-theme-main/90' : 'text-gray-700 hover:bg-gray-50'}`
                  }
                >
                  {label}
                </NavLink>
              ))}
              
              <NavLink
                to="/contactus"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 py-3 px-4 bg-theme-main text-white rounded-lg text-base font-medium text-center hover:bg-theme-main/60"
              >
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;