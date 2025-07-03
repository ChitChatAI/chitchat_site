"use client";

import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
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

    setIsMounted(true);

    const handleScroll = () => {
      const atTop = window.scrollY <= 80;
      const transparentRoutes = ["/", "/solutions", "/development-workflow", "/contactus"];
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "text-gray-300 bg-transparent" : "text-white bg-transparent"
        }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            ref={logoRef}
           className={`flex items-center space-x-2 group transition-all duration-700 ease-out ${
              isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            onClick = {
              (e) => {
                if (location.pathname === "/"){
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  })
                }
              }
            }
          >
            <div className="relative w-8 h-8">
              {/* Default Logo (shown when not scrolled) */}
              <img
                src="/branding/chitchatAILite.png"
                alt="ChitChat AI Logo"
                className={`w-full h-full rounded-full transition-all duration-300 ease-[cubic-bezier(0.2,0,0.1,1)] ${isScrolled
                    ? "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                    : "opacity-100 scale-100 group-hover:scale-105"
                  }`}
                style={{
                  transformOrigin: 'center center',
                  willChange: 'transform, opacity' // Optimizes animation performance
                }}
              />

              {/* Scrolled Logo (shown when scrolled) */}
              <img
                src="/branding/chitchatAILite.png"
                alt="ChitChat AI Logo"
                className={`absolute top-0 left-0 w-full h-full rounded-full transition-all duration-300 ease-[cubic-bezier(0.2,0,0.1,1)] ${isScrolled
                    ? "opacity-100 scale-90 group-hover:scale-105"
                    : "opacity-0 scale-90 group-hover:scale-105"
                  }`}
                style={{
                  transformOrigin: 'center center',
                  willChange: 'transform, opacity'
                }}
              />
            </div>

            <span className={`ml-2 text-lg font-medium transition-all duration-300 ease-[cubic-bezier(0.2,0,0.1,1)] ${isScrolled
                ? "text-transparent scale-90"
                : "text-white scale-100 group-hover:scale-105"
              }`}>
              ChitChat <span className="font-bold">AI</span>
            </span>
          </NavLink>

          {/* Desktop Dropdown - Fixed animation */}
          <div
            ref={dropdownRef}
            className={`hidden md:block relative transition-all duration-700 ease-out ${
              isMounted ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{
              zIndex: isDropdownOpen ? 50 : 10,
            }}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center px-4 py-2 text-base font-medium transition-all duration-300 ${
                isScrolled
                  ? "text-white hover:text-white/80"
                  : "text-white hover:text-white/80"
              } ${isDropdownOpen ? 'rounded-t-lg' : 'rounded-lg'}`}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              <span className={`transition-opacity duration-300 ${
                isScrolled && !isDropdownOpen ? 'opacity-0' : 'opacity-100'
              }`}>
                {getCurrentPageName()}
              </span>
              <svg
                className={`ml-2 w-4 h-4 transition-all duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                } ${isScrolled ? 'opacity-90' : 'opacity-100'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className={`absolute right-0 mt-0 w-56 origin-top-right rounded-br-lg rounded-tl-lg shadow-lg bg-black/80 backdrop-blur-md ring-1 ring-white/10 transition-all duration-300 ${
                  isScrolled ? 'border-t border-white/5' : ''
                }`}
                style={{
                  animation: 'fadeIn 0.2s ease-out'
                }}
              >
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
                            : "text-gray-200 hover:bg-theme-main/45"
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
         <div
            ref={mobileMenuRef}
            className={`md:hidden relative transition-all duration-700 ease-out  ${
              isMounted ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${isScrolled ? "text-gray-100 hover:text-gray-200" : "text-white hover:text-white/80"
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
              <div className="absolute right-0 mt-2 w-56 border border-gray-700 rounded-lg shadow-sm transition-all duration-300 flex flex-col bg-gray-950 z-500 py-10 px-10 z-50">
                <div className="py-1">
                  {navLinks.map(({ path, label }) => (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${isActive
                          ? "bg-theme-main/90 text-white"
                          : "text-gray-200 hover:bg-theme-main/45"
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