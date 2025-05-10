import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Get current page name from path
  const getCurrentPageName = () => {
    const currentPath = location.pathname;
    const currentLink = navLinks.find(
      (link) =>
        link.path === currentPath ||
        (currentPath !== '/' && link.path !== '/' && currentPath.startsWith(link.path))
    );
    return currentLink?.label || 'Home';
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(event.target as Node)) {
        setIsDesktopMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { path: '/', label: 'About Us' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/blog', label: 'Blog' },
    { path: '/values', label: 'Values' },
    { path: '/partnerships', label: 'Businesses' },
    { path: '/contactus', label: 'Contact Us' },
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
              src={isScrolled ? '/branding/chitchatAI.png' : '/branding/chitchatAILite.png'}
              alt="ChitChat AI Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-all duration-300"
            />
            <NavLink
              to="/"
              className={`ml-3 text-lg sm:text-xl font-satoshi-rounded font-bold tracking-wide relative ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } transition-all duration-300`}
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
                className={`${
                  isScrolled ? 'text-theme-main' : 'text-theme-white'
                } relative z-10 transition-colors duration-300 font-satoshi`}
                style={{
                  clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)',
                  WebkitClipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)',
                  textShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                }}
              >
                Chat
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block relative" ref={desktopMenuRef}>
            <button
              className={`flex items-center space-x-2 font-['Clash_Display'] font-medium transition-colors duration-200 px-4 py-2 rounded-md ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
            >
              <span>{getCurrentPageName()}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  isDesktopMenuOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Desktop dropdown menu */}
            {isDesktopMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 animate-fade-in-down">
                {navLinks.map(({ path, label, badge }) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setIsDesktopMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between block px-4 py-2 font-poppins text-sm font-bold transition-colors duration-200 hover:bg-gray-100 ${
                        isActive ? 'text-theme-main' : 'text-gray-700'
                      }`
                    }
                  >
                    <span>{label}</span>
                    {badge && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">
                        New
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}
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
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 font-poppins text-sm font-medium transition-colors duration-300 active:opacity-90 border-l-2 ${
                    isActive
                      ? 'text-theme-main font-bold border-theme-main' 
                      : 'text-gray-700 hover:text-theme-main border-transparent hover:border-theme-main/30'
                  }`
                }
              >
                <div className="flex items-center justify-between">
                  <span>{label}</span>
                  {badge && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-theme-main/10 text-theme-main rounded-full font-medium">
                      New
                    </span>
                  )}
                </div>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
