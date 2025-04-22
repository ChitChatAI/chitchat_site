import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Navigation Bar */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center relative">
                            <Link to="/" className={`text-2xl sm:text-3xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'} drop-shadow-sm transition-colors duration-300`}>
                                ChitChat
                            </Link>
                            <div className="w-2.5 h-2.5 rounded-full bg-theme-main absolute bottom-0.5 -right-3 animated-dot"></div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center justify-center space-x-6 lg:space-x-10">
                            <Link to="/solutions" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm lg:text-base`}>Solutions</Link>
                            <Link to="/use-cases" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm lg:text-base`}>Use Cases</Link>
                            <Link to="/partnerships" className={`flex items-center ${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm lg:text-base`}>
                                <span>For Businesses</span>
                                <span className="ml-1 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
                            </Link>
                            <Link to="#" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm lg:text-base`}>Pricing</Link>
                            <Link to="/contact-us" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm lg:text-base`}>Contact Us</Link>
                        </div>

                        {/* Desktop Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button
                                onClick={() => setIsSignInOpen(true)}
                                className={`${isScrolled ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white'} px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-200 font-medium text-sm lg:text-base`}
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => setIsGetStartedOpen(true)}
                                className="bg-theme-main hover:bg-theme-dark text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-200 font-medium text-sm lg:text-base shadow-sm hover:shadow-md"
                            >
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className={`lg:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="lg:hidden mt-4 py-2 bg-white rounded-md shadow-lg animate-fade-in">
                            <Link to="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Solutions</Link>
                            <Link to="/use-cases" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Use Cases</Link>
                            <Link to="/contact-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Contact Us</Link>
                            <Link to="/partnerships" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">
                                <div className="flex items-center">
                                    <span>For Businesses</span>
                                    <span className="ml-2 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
                                </div>
                            </Link>
                            <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Pricing</Link>
                            <div className="px-4 py-2 flex flex-col space-y-2 border-t border-gray-100 mt-2 pt-2">
                                <button
                                    onClick={() => setIsSignInOpen(true)}
                                    className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-full text-center"
                                >
                                    Sign In
                                </button>
                                <button
                                    onClick={() => setIsGetStartedOpen(true)}
                                    className="w-full bg-theme-main hover:bg-theme-dark text-white px-4 py-2 rounded-full text-center"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Sign In Modal */}
            {isSignInOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">Sign In</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-theme-main focus:border-theme-main"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-theme-main focus:border-theme-main"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-theme-main hover:bg-theme-dark text-white py-2 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                Sign In
                            </button>
                        </form>
                        <button
                            onClick={() => setIsSignInOpen(false)}
                            className="mt-4 w-full text-sm text-gray-500 hover:text-gray-700 text-center"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Get Started Modal */}
            {isGetStartedOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">Get Started</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-theme-main focus:border-theme-main"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-theme-main focus:border-theme-main"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-theme-main focus:border-theme-main"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-theme-main hover:bg-theme-dark text-white py-2 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                Get Started
                            </button>
                        </form>
                        <button
                            onClick={() => setIsGetStartedOpen(false)}
                            className="mt-4 w-full text-sm text-gray-500 hover:text-gray-700 text-center"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <header className="section_header relative overflow-hidden min-h-screen flex items-center justify-center font-sans">
                <div className="padding-global py-24 w-full">
                    <div className="container-large mx-auto px-6 py-10 text-left relative z-10">
                        <div className="header_content flex flex-col items-center sm:items-start justify-center w-full text-center sm:text-left animate-fade-in">
                            <div className="header_title-wrap is-home max-w-4xl">
                                <h1 className="text-white font-extrabold text-[clamp(2rem,6vw,3.25rem)] leading-snug tracking-tight sm:leading-[1.4] animate-fade-in delay-100">
                                    <span className="block mb-4">The Future of AI Conversations,</span>
                                    <span className="block mb-4">So Real, You'll Forget It's Not.</span>
                                    <span className="hero-gradient-text block text-[clamp(1.25rem,4vw,2.25rem)] mt-6">Human Augmented AI by ChitChat</span>
                                </h1>
                                <p className="text-white/80 text-base sm:text-lg mt-4 max-w-3xl">
                                    Custom-built AI personas that think, feel, and respond like real people – tailored for your business.
                                </p>
                                <div className="join-us_buttons-wrapper flex flex-col sm:flex-row justify-center sm:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full mt-10 animate-fade-in delay-500">
                                    <Link to="/contact-sales" className="bg-theme-main hover:bg-theme-dark text-white px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out font-sans">Get a demo</Link>
                                    <Link to="/use-cases" className="bg-white hover:bg-gray-100 text-theme-main border border-theme-main px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out font-sans">Explore Use Cases</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header_background-video-wrapper absolute top-0 left-0 w-full h-full z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        id="myVideo"
                        className="w-full h-full object-cover object-center brightness-75 will-change-transform"
                    >
                        <source src="/homePage/chitchat_bg.mp4" type="video/mp4" />
                    </video>

                    {/* PURPLISH GLASS OVERLAY */}
                    <div className="absolute inset-0 border border-white/10 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.1)] z-10" />
                    <div className="absolute inset-0 z-20 bg-[#260a40]/30 backdrop-blur-[6px]" />
                </div>
            </header>
        </>
    );
};

export default Header;
