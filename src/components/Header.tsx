import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Fixed the unterminated string
    }, []);

    return (
        <>
            {/* Navigation Bar */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md py-4 xs:py-5 sm:py-6 md:py-7' : 'bg-transparent py-4 xs:py-5 sm:py-6'
            }`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center relative py-1 xs:py-1.5 sm:py-2">
                            <img
                                src={isScrolled ? "/branding/chitchatAI.png" : "/branding/chitchatAILite.png"}
                                alt="ChitChat AI Logo"
                                className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 object-contain transition-all duration-300"
                            />
                            <Link 
                                to="/" 
                                className={`text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold ${
                                    isScrolled ? 'text-gray-800' : 'text-white'
                                } transition-all duration-300 ml-1.5 xs:ml-2 sm:ml-2.5 md:ml-3 lg:ml-3.5 xl:ml-4`}
                            >
                                ChitChat
                            </Link>
                        </div>

                        {/* Desktop Navigation - Hidden on screens below 992px (lg) */}
                        <div className="hidden lg:flex items-center justify-center space-x-4 lg:space-x-5 xl:space-x-8 2xl:space-x-12">
                            <Link to="/" className={`${
                                isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'
                            } transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90 ${
                                isHomePage ? 'font-bold' : ''
                            }`}>
                                About Us
                            </Link>
                            
                            <Link to="/values" className={`${
                                isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'
                            } transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90`}>
                                Values
                            </Link>
                            <Link to="/solutions" className={`${
                                isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'
                            } transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90`}>
                                Solutions
                            </Link>
                            <Link to="/partnerships" className={`${
                                isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'
                            } transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90 flex items-center`}>
                                <span>Businesses</span>
                            </Link>
                            <Link to="/Vision Board" className={`${
                                isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'
                            } transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90 flex items-center`}>
                                <span>Vision Board</span>
                                <span className="ml-1 px-1.5 py-0.5 text-[10px] lg:text-xs bg-theme-light text-theme-main rounded-full">New</span>
                            </Link>
                            <Link to="/pricing" className={`${
                                isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'
                            } transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90`}>
                                Pricing
                            </Link>
                            <Link to="/contact us" className={`${
                                isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'
                            } transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90`}>
                                Contact Us
                            </Link>
                        </div>

                        {/* Mobile Menu Button - Visible only on screens below 992px (lg) */}
                        <button 
                            className={`lg:hidden ${
                                isScrolled ? 'text-gray-800' : 'text-white'
                            } p-2 rounded-md hover:bg-white/10 transition-colors`} 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xs:h-6 xs:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation - Optimized for all smaller screens */}
                    {isMenuOpen && (
                        <div className="lg:hidden mt-3 py-3 bg-white rounded-md shadow-lg animate-fade-in">
                            <Link to="/" className={`block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors ${
                                isHomePage ? 'font-bold' : ''
                            }`}>
                                About Us
                            </Link>
                            <Link to="/values" className="block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">
                                Values
                            </Link>
                            <Link to="/solutions" className="block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">
                                Solutions
                            </Link>
                            <Link to="/partnerships" className="block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">
                                <div className="flex items-center">
                                    <span>Businesses</span>
                                </div>
                            </Link>
                            <Link to="/Vision Board" className="block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">
                                <div className="flex items-center justify-between">
                                    <span>Vision Board</span>
                                    <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-theme-light text-theme-main rounded-full">New</span>
                                </div>
                            </Link>
                            <Link to="/pricing" className="block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">
                                Pricing
                            </Link>
                            <Link to="/contact us" className="block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">
                                Contact Us
                            </Link>
                            <div className="px-3 xs:px-4 py-2 flex flex-col space-y-2 border-t border-gray-100 mt-2 pt-2">
                                {/* You can add additional menu items for small screens here if needed */}
                            </div>
                        </div>
                    )}
                </div>
            </nav>

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

                                    {/* Modernized Futuristic Button with Purple Theme */}
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
                        disablePictureInPicture={true}
                        disableRemotePlayback={true}
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
