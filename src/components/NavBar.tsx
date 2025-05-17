import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { path: '/', label: 'About us' },
    {path: '/solutions', label: 'Solutions' },
    { path: '/blog', label: 'Blog' },
    { path: '/contactus', label: "Let's talk" },
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
            </span>
          </NavLink>
          {/* Desktop NavLinks */}
          <ul className="hidden lg:flex items-center space-x-10 ml-8">
            {navLinks.map(({ path, label }) => (
              <li key={path} className="flex flex-col items-center group">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `font-poppins text-lg font-semibold transition-colors duration-200 pb-1 ${
                      isActive
                        ? 'text-theme-main'
                        : 'text-gray-700 hover:text-theme-main'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-2xl py-6 px-8 z-50 border border-gray-100">
            <ul className="flex flex-col space-y-6">
              {navLinks.map(({ path, label }) => (
                <li key={path} className="flex items-center space-x-4 group">
                  <NavLink
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-poppins text-lg font-semibold transition-colors duration-200 ${
                        isActive
                          ? 'text-theme-main'
                          : 'text-gray-700 hover:text-theme-main'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
