import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
    const desktopMenuRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    const getCurrentPageName = () => {
        const currentPath = location.pathname;
        const currentLink = null; // No longer using navLinks
        return currentLink?.label || 'Home';
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (desktopMenuRef.current && !desktopMenuRef.current.contains(event.target as Node)) {
                setIsDesktopMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="relative overflow-hidden min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#0f0b1e] via-[#260a40] to-[#1f0033] text-white">
            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo and Brand */}
                        <div className="flex items-center">
                            <img
                                src="/branding/chitchatAI.png"
                                alt="ChitChat AI Logo"
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-all duration-300"
                            />
                            <NavLink
                                to="/"
                                className="ml-3 text-lg sm:text-xl font-satoshi-rounded font-bold tracking-wide text-white transition-all duration-300"
                            >
                                <span className="relative z-10 font-satoshi">Chit</span>
                                <span className="text-theme-main relative z-10 transition-colors duration-300 font-satoshi">Chat</span>
                            </NavLink>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:block relative" ref={desktopMenuRef}>
                            <button
                                className="flex items-center space-x-2 font-medium transition-colors duration-200 px-4 py-2 rounded-md text-white hover:text-theme-main"
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
                                    {/* navLinks removed */}
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 rounded-md text-white hover:text-theme-main"
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
                        <div className="lg:hidden mt-2 bg-gradient-to-br from-[#0f0b1e] via-[#260a40] to-[#1f0033] rounded-md shadow-lg animate-slide-up">
                            {/* navLinks removed */}
                        </div>
                    )}
                </div>
            </nav>

            {/* Decorative Glow Elements */}
            <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-purple-500 opacity-30 blur-[200px] z-0 rounded-full animate-pulse-slow" />
            <div className="absolute bottom-[-120px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-[150px] z-0 rounded-full animate-pulse-slow" />
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#1c1033]/50 to-[#0f0b1e] opacity-80 z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl text-center px-6 flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-fade-in">
                    The Future of AI Conversations.<br />So Real, You'll Forget It's Not.
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 animate-fade-in delay-200">
                    Custom-built AI personas that think, feel, and respond like real people – tailored for your business.
                </p>
                <div className="mt-10 flex items-center justify-center animate-fade-in delay-500">
                    <Link
                        to="/contact-sales"
                        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Request a Demo
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
