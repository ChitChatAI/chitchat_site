import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isForBusinessesPage = location.pathname === '/partnerships';

    const getNavLinkClass = (path: string) => {
        return `${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm lg:text-base ${location.pathname === path ? 'text-theme-main font-semibold' : ''}`;
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isForBusinessesPage ? (isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6') : (isScrolled ? 'bg-white shadow-md py-4' : 'bg-theme-main/95 py-6')}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center relative">
                        <Link to="/" className={`text-2xl sm:text-3xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'} drop-shadow-sm transition-colors duration-300`}>
                            ChitChat
                        </Link>
                        <div className={`w-2.5 h-2.5 rounded-full absolute bottom-0.5 -right-3 animated-dot transition-colors duration-300 ${isScrolled ? 'bg-theme-main' : 'bg-white'}`}></div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-center space-x-6 lg:space-x-10">
                        <Link to="/solutions" className={getNavLinkClass("/solutions")}>Solutions</Link>
                        <Link to="#" className={getNavLinkClass("#")}>Use Cases</Link>
                        <Link to="/partnerships" className={`flex items-center ${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm lg:text-base ${location.pathname === '/partnerships' ? 'text-theme-main font-semibold' : ''}`}>
                            <span>For Businesses</span>
                            <span className="ml-1 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
                        </Link>
                        <Link to="#" className={getNavLinkClass("/pricing")}>Pricing</Link>
                        <Link to="/contact-us" className={getNavLinkClass("/contact-us")}>Contact Us</Link>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link to="#" className={`${isScrolled ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white'} px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-200 font-medium text-sm lg:text-base`}>Sign In</Link>
                        <Link to="#" className="bg-theme-main hover:bg-theme-dark text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-200 font-medium text-sm lg:text-base shadow-sm hover:shadow-md">Get Started</Link>
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
                        <Link to="/contact-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Contact Us</Link>
                        <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Use Cases</Link>
                        <Link to="/partnerships" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">
                            <div className="flex items-center">
                                <span>For Businesses</span>
                                <span className="ml-2 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
                            </div>
                        </Link>
                        <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Pricing</Link>
                        <div className="px-4 py-2 flex flex-col space-y-2 border-t border-gray-100 mt-2 pt-2">
                            <Link to="#" className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-full text-center">Sign In</Link>
                            <Link to="#" className="w-full bg-theme-main hover:bg-theme-dark text-white px-4 py-2 rounded-full text-center">Get Started</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
