import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 5);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseLink = "relative px-3 py-1 text-sm font-medium tracking-normal transition-all duration-300";

  const renderLink = (path: string, label: string, closeMenu?: () => void) => (
    <NavLink
      to={path}
      onClick={() => closeMenu?.()}
      className={({ isActive }) =>
        `${baseLink} ${isActive ? "text-white" : "text-white/70 hover:text-white"}`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <nav
      ref={navRef}
      className={`fixed top-12 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 text-white font-semibold text-xl"
            aria-label="ChitChat AI Home"
          >
            <img src="/branding/chitchatAILite.png" alt="ChitChat Logo" className="w-8 h-8 rounded-full" />
            <span className="hidden sm:inline relative">
              ChitChat
              <span
                className="absolute -right-5 top-1 text-xs text-white font-bold"
                style={{ fontSize: '0.7em', lineHeight: 1 }}
              >
                AI
              </span>
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {renderLink("/", "About Us")}
            {renderLink("/solutions", "Solutions")}
            {renderLink("/development-workflow", "Development Phases")}
            {renderLink("/contactus", "Contact Us")}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              className="text-white p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full z-60 backdrop-blur-xl bg-black/80 px-4 py-6 space-y-4 text-white text-sm shadow-lg transition-all duration-300">
            {renderLink("/", "About Us", () => setIsMobileMenuOpen(false))}
            {renderLink("/solutions", "Solutions", () => setIsMobileMenuOpen(false))}
            {renderLink("/development-workflow", "Development Phases", () => setIsMobileMenuOpen(false))}
            {renderLink("/contactus", "Contact Us", () => setIsMobileMenuOpen(false))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
