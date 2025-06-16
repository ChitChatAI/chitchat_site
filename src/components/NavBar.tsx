"use client";

import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
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
      const transparentRoutes = ["/", "/development-workflow", "/contactus"];
      const isTransparentRoute = transparentRoutes.includes(location.pathname);
      setIsScrolled(!isTransparentRoute || !atTop);
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // 768px is typically the breakpoint for md in Tailwind
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false); // Close mobile menu when resizing to desktop
      }
    };

    // Initialize mobile view state
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll(); // run immediately on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "text-gray-900 bg-white shadow-sm" : "text-white bg-transparent"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="relative w-8 h-8">
              <img
                src="/branding/chitchatAILite.png"
                alt="ChitChat AI Logo"
                className={`w-full h-full rounded-full transition-opacity duration-300 ${
                  isScrolled ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src="/branding/chitchatAI.png"
                alt="ChitChat AI Logo"
                className={`absolute top-0 left-0 w-full h-full rounded-full transition-opacity duration-300 ${
                  isScrolled ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <span className={`ml-2 text-lg font-medium transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              ChitChat <span className="font-bold">AI</span>
            </span>
          </NavLink>

          {/* Desktop Dropdown - Hidden on mobile */}
          <div className="hidden md:block relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center px-4 py-2 text-base font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-white/80"
              }`}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              {getCurrentPageName()}
              <svg
                className={`ml-2 w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-1">
                  {navLinks.map(({ path, label }) => (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={() => setIsDropdownOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? "bg-theme-main/90 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Menu - Only shown on mobile */}
          <div className="md:hidden relative" ref={mobileMenuRef}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-white/80"
              }`}
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {isMobileMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-1">
                  {navLinks.map(({ path, label }) => (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? "bg-theme-main/90 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;