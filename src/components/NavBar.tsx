import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'About us' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/development-workflow', label: 'Development Phases' },
    { path: '/contactus', label: 'Contact Us' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-300 ${isScrolled && !isMenuOpen ? 'backdrop-blur-md dark:bg-black/50 shadow-md' : ''
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center px-4 py-2">
              <img
                src={
                  isScrolled && !isMenuOpen
                    ? '/branding/chitchatAI.png'
                    : '/branding/chitchatAILite.png'
                }
                alt="ChitChat AI Logo"
                className={`object-contain transition-all duration-300 ${isScrolled && !isMenuOpen ? 'w-8 h-8' : 'w-7 h-7'
                  } rounded-full`}
              />
              <span
                className={`ml-2 font-satoshi-rounded font-extrabold tracking-wide ${isScrolled && !isMenuOpen ? 'text-xl text-theme-main' : 'text-lg text-white'
                  }`}
              >
                <span className="font-satoshi">ChitChat AI</span>
                </span>
            </div>
          </NavLink>

          {/* Hamburger Button */}
          <button
            className="p-2 rounded-full text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16m-7 6h7'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal & Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[9998]"
            />

            {/* Menu Modal */}
            <div className="fixed top-20 w-full flex justify-center z-[9999]">
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-[90vw] sm:w-2/3 md:w-1/2 max-w-md
               rounded-2xl bg-white/20 dark:bg-black/30
               backdrop-blur-xl shadow-2xl border border-white/30 px-4"
              >

                <ul className="flex flex-col px-6 py-8 space-y-6 max-sm:items-center max-sm:text-center">
                  {navLinks.map(({ path, label }) => (
                    <li key={path}>
                      <NavLink
                        to={path}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          `block text-lg font-semibold text-white transition duration-200 ${isActive ? 'text-theme-main' : 'hover:text-theme-main'
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
