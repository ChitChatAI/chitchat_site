import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isPurpleNavPage = location.pathname === '/solutions' || location.pathname === '/contact us';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Fixed the unterminated string
    }, []);

    const handleScrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = section.getBoundingClientRect().top + window.scrollY - 70; // Adjust for navbar height
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4 xs:py-5 sm:py-6 md:py-7' : 'bg-theme-main py-4 xs:py-5 sm:py-6'}`}>
            {/* Navigation Bar */}
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
                            className={`text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold ${isScrolled ? 'text-gray-800' : 'text-white'
                                } transition-all duration-300 ml-1.5 xs:ml-2 sm:ml-2.5 md:ml-3 lg:ml-3.5 xl:ml-4`}
                        >
                            ChitChat
                        </Link>
                    </div>

                    {/* Desktop Navigation - Hidden on screens below 992px (lg) */}
                    <div className="hidden lg:flex items-center justify-center space-x-4 lg:space-x-5 xl:space-x-8 2xl:space-x-12">
                        <Link to="/" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light drop-shadow-lg'
                            } transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90${location.pathname === '/' ? ' font-bold' : ''}`}>
                            About Us
                        </Link>
                        <Link to="/values" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light drop-shadow-lg'
                            } transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90${location.pathname === '/values' ? ' font-bold' : ''}`}>
                            Values
                        </Link>
                        <Link
                            to="/solutions"
                            className={`transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90 drop-shadow-lg
                                ${location.pathname === '/solutions'
                                    ? isScrolled
                                        ? 'text-theme-main font-bold'
                                        : 'text-white font-bold'
                                    : isScrolled
                                        ? 'text-gray-700 hover:text-theme-main'
                                        : 'text-white hover:text-theme-light'
                                }`
                            }
                        >
                            Solutions
                        </Link>
                        <Link to="/partnerships" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light drop-shadow-lg'
                            } transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90 flex items-center${location.pathname === '/partnerships' ? ' font-bold' : ''}`}>
                            <span>Businesses</span>
                        </Link>
                        <Link to="/Vision Board" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light drop-shadow-lg'
                            } transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90 flex items-center${location.pathname === '/Vision Board' ? ' font-bold' : ''}`}>
                            <span>Vision Board</span>
                            <span className="ml-1 px-1.5 py-0.5 text-[10px] lg:text-xs bg-theme-light text-theme-main rounded-full">New</span>
                        </Link>
                        <Link to="/pricing" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light drop-shadow-lg'
                            } transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90${location.pathname === '/pricing' ? ' font-bold' : ''}`}>
                            Pricing
                        </Link>
                        <Link
                            to="/contact us"
                            className={`transition-colors duration-200 text-xs lg:text-sm xl:text-base px-1 py-1.5 hover:opacity-90 drop-shadow-lg
                                ${location.pathname.toLowerCase() === '/contact us'
                                    ? 'text-white font-bold'
                                    : isScrolled
                                        ? 'text-gray-700 hover:text-theme-main'
                                        : 'text-white hover:text-theme-light'
                                }`
                            }
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Visible only on screens below 992px (lg) */}
                    <button
                        className={`lg:hidden ${isScrolled ? 'text-gray-800' : 'text-white'
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
                        <Link to="/" className={`block px-4 py-2.5 my-1 text-base text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors${location.pathname === '/' ? ' font-bold' : ''}`}>
                            About Us
                        </Link>
                        <Link to="/values" className={`block px-4 py-2.5 my-1 text-base text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors${location.pathname === '/values' ? ' font-bold' : ''}`}>
                            Values
                        </Link>
                        <Link
                            to="/solutions"
                            className={`block px-4 py-2.5 my-1 text-base transition-colors ${
                                location.pathname === '/solutions'
                                    ? 'text-theme-main font-bold'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-theme-main'
                            }`}
                        >
                            Solutions
                        </Link>
                        <Link to="/partnerships" className={`block px-4 py-2.5 my-1 text-base text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors${location.pathname === '/partnerships' ? ' font-bold' : ''}`}>
                            <div className="flex items-center">
                                <span>Businesses</span>
                            </div>
                        </Link>
                        <Link to="/Vision Board" className={`block px-4 py-2.5 my-1 text-base text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors${location.pathname === '/Vision Board' ? ' font-bold' : ''}`}>
                            <div className="flex items-center justify-between">
                                <span>Vision Board</span>
                                <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-theme-light text-theme-main rounded-full">New</span>
                            </div>
                        </Link>
                        <Link to="/pricing" className={`block px-4 py-2.5 my-1 text-base text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors${location.pathname === '/pricing' ? ' font-bold' : ''}`}>
                            Pricing
                        </Link>
                        <Link
                            to="/contact us"
                            className={`block px-4 py-2.5 my-1 text-base transition-colors
                                ${['/contact-us', '/contactus'].includes(location.pathname.toLowerCase())
                                    ? 'text-white font-bold'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-theme-main'
                                }`
                            }
                        >
                            Contact Us
                        </Link>
                        <div className="px-3 xs:px-4 py-2 flex flex-col space-y-2 border-t border-gray-100 mt-2 pt-2">
                            {/* You can add additional menu items for small screens here if needed */}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
