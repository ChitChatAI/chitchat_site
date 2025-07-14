"use client";

import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "About us" },
    { path: "/solutions", label: "Solutions" },
    { path: "/development-workflow", label: "Development Phases" },
    { path: "/contactus", label: "Contact Us" },
  ];

  const getCurrentPageName = () => {
    const currentLink = navLinks.find(link => link.path === location.pathname);
    return currentLink ? currentLink.label : "Menu";
  };

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= 80;
      const transparentRoutes = ["/", "/solutions", "/development-workflow", "/contactus"];
      const isTransparentRoute = transparentRoutes.includes(location.pathname);
      setIsScrolled(!isTransparentRoute || !atTop);
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [location.pathname]);

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const calculateGlowEffect = () => {
    if (!navRef.current) return {};
    const navRect = navRef.current.getBoundingClientRect();
    const x = cursorPosition.x - navRect.left;
    const y = cursorPosition.y - navRect.top;
    return { "--x": `${x}px`, "--y": `${y}px` } as React.CSSProperties;
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${isScrolled ? "text-gray-300 bg-gray-900/80 backdrop-blur-sm" : "text-white bg-transparent"
        }`}
      style={calculateGlowEffect()}
    >
      {/* Holographic grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_0)_var(--y,_0),rgba(100,200,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 border-t border-b border-white/10" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(100,220,255,0.05)_50%,transparent_100%)] opacity-20" />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group overflow-hidden relative">
            <div className="relative w-8 h-8">
              <img
                src="/branding/chitchatAILite.png"
                alt="Logo"
                className={`w-full h-full rounded-full transition-all duration-700 ease-in-out ${isScrolled ? "opacity-0 scale-90" : "opacity-100 scale-100"
                  }`}
              />
              <img
                src="/branding/chitchatAILite.png"
                alt="Logo"
                className={`absolute top-0 left-0 w-full h-full rounded-full transition-all duration-700 ease-in-out ${isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
              />
              <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-[6px] scale-110 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            <span
              className={`ml-2 text-lg font-medium transition-all duration-700 ease-in-out whitespace-nowrap overflow-hidden ${isScrolled ? "opacity-0 w-0 scale-90" : "opacity-100 w-auto scale-100"
                }`}
            >
              <span className="relative">
                ChitChat <span className="font-bold text-transparent bg-clip-text bg-theme-main text-xs">
                  AI
                </span>

              </span>
            </span>
          </NavLink>

          {/* Desktop Dropdown */}
          <div className="hidden md:block relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center px-4 py-2 font-medium transition-all duration-300 group ${isScrolled ? "text-gray-300 hover:text-white" : "text-white hover:text-white/90"
                }`}
            >
              <span className={`transition-all duration-700 ease-in-out whitespace-nowrap overflow-hidden ${isScrolled ? "opacity-0 w-0 scale-90" : "opacity-100 w-auto scale-100"
                }`}>
                {getCurrentPageName()}
              </span>
              <svg className={`ml-2 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-lg bg-gray-900/95 border border-white/10 py-2 z-50 backdrop-blur-lg shadow-sm">
                {navLinks.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setIsDropdownOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm relative transition-all duration-300 ${isActive
                        ? "bg-[linear-gradient(90deg,rgba(38,10,64,0.2),rgba(91,42,157,0.2))] text-white pl-6"
                        : "text-gray-300 hover:text-white hover:bg-white/5 hover:pl-6"
                      }`
                    }
                  >
                    {({ isActive }) =>
                      <>
                        {isActive && <span className="absolute left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_6px_2px_rgba(0,210,255,0.5)]" />}
                        {label}
                      </>
                    }
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden relative" ref={mobileMenuRef}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? "text-gray-300 hover:text-white" : "text-white hover:text-white/90"}`}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {isMobileMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-lg bg-gray-900/95 border border-white/10 py-2 z-50 backdrop-blur-lg shadow-sm">
                {navLinks.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm relative transition-all duration-300 ${isActive
                        ? "bg-[linear-gradient(90deg,rgba(0,210,255,0.2),rgba(58,123,213,0.2))] text-white pl-6"
                        : "text-gray-300 hover:text-white hover:bg-white/5 hover:pl-6"
                      }`
                    }
                  >
                    {({ isActive }) =>
                      <>
                        {isActive && <span className="absolute left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_6px_2px_rgba(0,210,255,0.5)]" />}
                        {label}
                      </>
                    }
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
