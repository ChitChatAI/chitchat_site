import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Add responsive scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerWidth < 640 ? 5 : 10;
            setIsScrolled(window.scrollY > scrollThreshold);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize state on component mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isForBusinessesPage = location.pathname === '/partnerships';

    // Reduced font size to match header component
    const getNavLinkClass = (path: string) => {
        const isActive = location.pathname === path;
        return `
            ${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-gray-300'} 
            transition-colors duration-200 
            text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base
            ${isActive ? 'text-theme-main font-medium' : ''}
            tracking-normal
        `.trim();
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isForBusinessesPage 
            ? (isScrolled ? 'bg-white shadow-md py-4 xs:py-5 sm:py-6 md:py-7' : 'bg-transparent py-4 xs:py-5 sm:py-6 md:py-6') 
            : (isScrolled ? 'bg-white shadow-md py-4 xs:py-5 sm:py-6 md:py-7' : 'bg-theme-main/95 py-4 xs:py-5 sm:py-6 md:py-6')
        }`}>
            <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <div className="flex items-center justify-between">
                    {/* Logo - smaller sizes */}
                    <div className="flex items-center relative py-0.5 xs:py-1 sm:py-1.5">
                        <img
                            src={isScrolled ? "/branding/chitchatAI.png" : "/branding/chitchatAILite.png"}
                            alt="ChitChat AI Logo"
                            className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 object-contain transition-all duration-300"
                        />
                        <Link 
                            to="/" 
                            className={`text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold ${
                                isScrolled ? 'text-gray-800' : 'text-white'
                            } transition-all duration-300 ml-1 xs:ml-1.5 sm:ml-2 md:ml-2.5 lg:ml-3`}
                        >
                            ChitChat
                        </Link>
                    </div>

                    {/* Desktop Navigation - standardized spacing between items */}
                    <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4 lg:space-x-5 xl:space-x-6 2xl:space-x-8">
                        <Link to="/" className={`${getNavLinkClass("/")} px-2 py-1 hover:opacity-90`}>About Us</Link>
                        <Link to="/values" className={`${getNavLinkClass("/values")} px-2 py-1 hover:opacity-90`}>Values</Link>
                        <Link to="/solutions" className={`${getNavLinkClass("/solutions")} px-2 py-1 hover:opacity-90`}>Solutions</Link>
                        <Link to="/partnerships" className={`flex items-center ${getNavLinkClass("/partnerships")} px-2 py-1 hover:opacity-90`}>
                            <span>Businesses</span>
                        </Link>
                        <Link to="/Vision Board" className={`flex items-center ${getNavLinkClass("/Vision Board")} px-2 py-1 hover:opacity-90`}>
                            <span>Vision Board</span>
                            <span className="ml-1 px-1.5 py-0.5 text-[10px] lg:text-xs bg-theme-light text-theme-main rounded-full">New</span>
                        </Link>
                        <Link to="/pricing" className={`${getNavLinkClass("/pricing")} px-2 py-1 hover:opacity-90`}>Pricing</Link>
                        <Link to="/contact-us" className={`${getNavLinkClass("/contact-us")} px-2 py-1 hover:opacity-90`}>Contact Us</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'} p-2 rounded-md hover:bg-white/10 transition-colors`} 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xs:h-6 xs:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-3 py-3 bg-white rounded-md shadow-lg animate-fade-in">
                        <Link to="/" className="block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">About Us</Link>
                        <Link to="/values" className="block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Values</Link>
                        <Link to="/solutions" className="block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Solutions</Link>
                        <Link to="/partnerships" className="block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Businesses</Link>
                        <Link to="/Vision Board" className="block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">
                            <div className="flex items-center justify-between">
                                <span>Vision Board</span>
                                <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-theme-light text-theme-main rounded-full">New</span>
                            </div>
                        </Link>
                        <Link to="/pricing" className="block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Pricing</Link>
                        <Link to="/contact-us" className="block px-4 py-2.5 my-1 text-xs xs:text-sm text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Contact Us</Link>
                        <div className="px-4 py-2.5 flex flex-col space-y-2 border-t border-gray-100 mt-2 pt-2">
                            <Link to="#" className="w-full bg-theme-main hover:bg-theme-dark text-white px-4 py-2.5 rounded-full text-center text-xs xs:text-sm transition-colors">Sign In</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
