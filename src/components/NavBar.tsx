import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { path: '/', label: 'About us' },
    { path: '/solutions', label: 'Solutions' },
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
          <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/60 backdrop-blur-sm transition-all duration-300">
            <div className="mt-24 mr-4 sm:mr-8 bg-gradient-to-br from-[#18132a] via-black/95 to-[#2a1a4d] rounded-3xl shadow-2xl py-10 px-10 min-w-[260px] max-w-xs border border-white/10 relative animate-fade-in-up">
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-theme-main/20 text-theme-main transition-all duration-200 shadow"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ul className="flex flex-col space-y-8 mt-2">
                {navLinks.map(({ path, label }) => (
                  <li key={path} className="flex items-center space-x-4 group">
                    <NavLink
                      to={path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `font-poppins text-xl font-semibold transition-colors duration-200 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-main/40 focus:bg-theme-main/10 ${
                          isActive
                            ? 'text-theme-main bg-theme-main/10 shadow-md'
                            : 'text-gray-200 hover:text-theme-main hover:bg-theme-main/10'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
