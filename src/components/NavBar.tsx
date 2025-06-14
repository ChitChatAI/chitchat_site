import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar: React.FC = () => {
  // State for scroll effect and dropdown toggle
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Navigation links configuration
  const navLinks = [
    { path: '/', label: 'About us' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/development-workflow', label: 'Development Phases' },
    { path: '/contactus', label: 'Contact Us', isButton: true },
  ];

  // Gets the current page name for the dropdown button text
  const getCurrentPageName = () => {
    const currentLink = navLinks.find(link => link.path === location.pathname);
    return currentLink ? currentLink.label : 'Menu';
  };

  // Handles scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Closes dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-300 ${isScrolled ? 'backdrop-blur-md dark:bg-black/50 shadow-md' : ''
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo section with responsive sizing */}
          <NavLink to="/" className="flex items-center space-x-2 group z-[10001]">
            <div className="flex items-center justify-center px-4 py-2">
              <img
                src={isScrolled ? '/branding/chitchatAILite.png' : '/branding/chitchatAILite.png'}
                alt="ChitChat AI Logo"
                className={`object-contain transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-9 h-9'
                  } rounded-full`}
              />
              <span className={`ml-2 font-satoshi tracking-wide ${isScrolled ? 'text-xl text-white' : 'text-lg text-white'
                }`}>
                ChitChat <span className="font-extrabold">AI</span>
              </span>
            </div>
          </NavLink>

          {/* Dropdown navigation menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center px-4 py-2 text-base font-medium text-white hover:text-opacity-80 transition duration-200 group"
            >
              {getCurrentPageName()}
              <svg
                className={`ml-2 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Enhanced glassmorphism dropdown menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-64 rounded-xl z-50 overflow-hidden"
                >
                  <div className="relative">
                    {/* Frosted glass effect */}
                    <div className="backdrop-blur-2xl bg-black/20 border border-white/20 rounded-xl shadow-2xl">
                      {/* Inner glow */}
                      <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none" />

                      {/* Menu items */}
                      <div className="relative z-10 p-1.5">
                        {navLinks.map(({ path, label, isButton }) => (
                          <NavLink
                            key={path}
                            to={path}
                            onClick={() => setIsDropdownOpen(false)}
                            className={({ isActive }) =>
                              `block px-5 py-3 transition duration-200 rounded-lg relative overflow-hidden ${isButton
                                ? `mt-2 mx-1.5 text-center rounded-full font-medium ${isActive
                                  ? 'bg-theme-main text-white shadow-lg'
                                  : 'bg-white/10 text-white hover:bg-theme-main hover:shadow-lg'
                                }`
                                : isActive
                                  ? 'text-white font-bold bg-white/10 backdrop-blur-sm'
                                  : 'text-white/90 hover:text-white hover:bg-white/10 font-medium'
                              }`
                            }
                          >
                            {label}
                            {/* Hover effect */}
                            <span className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-all duration-300 rounded-lg" />
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;