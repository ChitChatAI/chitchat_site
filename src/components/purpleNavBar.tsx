import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "About Us" },
    { path: "/values", label: "Values" },
    { path: "/solutions", label: "Solutions" },
    { path: "/partnerships", label: "Businesses" },
    { path: "/Vision Board", label: "Vision Board", badge: true },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact us", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-theme-main'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img
              src={isScrolled ? "/branding/chitchatAI.png" : "/branding/chitchatAILite.png"}
              alt="ChitChat AI Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-all duration-300"
            />
            <Link
              to="/"
              className={`ml-3 text-lg sm:text-xl font-satoshi-rounded font-bold tracking-wide relative ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } transition-all duration-300`}
            >
              <span
                className="relative z-10"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                  WebkitClipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                }}
              >
                Chit
              </span>
              <span
                className={`${
                  isScrolled ? 'text-theme-main' : 'text-theme-white'
                } relative z-10 transition-colors duration-300`}
                style={{
                  clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)',
                  WebkitClipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)',
                  textShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                }}
              >
                Chat
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map(({ path, label, badge }) => (
              <Link
                key={path}
                to={path}
                className={`font-satoshi text-sm font-medium tracking-tight ${
                  location.pathname === path
                    ? 'text-theme-main font-bold'
                    : isScrolled
                    ? 'text-gray-700 hover:text-theme-main'
                    : 'text-white hover:text-theme-main'
                } transition-colors duration-200 px-3 py-2 active:opacity-80`}
              >
                {label}
                {badge && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">
                    New
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-md shadow-lg animate-slide-up">
            {navLinks.map(({ path, label, badge }) => (
              <Link
                key={path}
                to={path}
                className={`block px-4 py-2 font-satoshi text-sm font-medium ${
                  location.pathname === path
                    ? 'text-theme-main font-bold'
                    : 'text-gray-700 hover:text-theme-main'
                } transition-colors duration-200 active:opacity-80`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>{label}</span>
                  {badge && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">
                      New
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
