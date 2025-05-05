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
        return `${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-gray-300'} transition-colors duration-200 text-sm md:text-base ${location.pathname === path ? 'text-theme-main font-semibold' : ''}`;
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isForBusinessesPage ? (isScrolled ? 'bg-white shadow-md py-7' : 'bg-transparent py-6') : (isScrolled ? 'bg-white shadow-md py-7' : 'bg-theme-main/95 py-6')}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center relative">
                        <img
                            src={isScrolled ? "/branding/chitchatAI.png" : "/branding/chitchatAILite.png"}
                            alt="ChitChat AI Logo"
                            className="w-8 sm:w-10 h-auto"
                        />
                        <Link to="/" className={`text-xl sm:text-2xl font-semibold ${isScrolled ? 'text-gray-800' : 'text-white'} transition duration-300 ml-2`}>ChitChat</Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-10">
                        <Link to="/" className={getNavLinkClass("/")}>About Us</Link>
                        <Link to="/values" className={getNavLinkClass("/values")}>Values</Link> {/* Added Values link */}
                        <Link to="/solutions" className={getNavLinkClass("/solutions")}>Solutions</Link>
                        <Link to="/partnerships" className={`flex items-center ${getNavLinkClass("/partnerships")}`}>
                            <span>Businesses</span>
                        </Link>
                        <Link to="/Vision Board" className={`flex items-center ${getNavLinkClass("/Vision Board")}`}>
                            <span>Vision Board</span>
                            <span className="ml-1 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
                        </Link>
                        <Link to="/pricing" className={getNavLinkClass("/pricing")}>Pricing</Link>
                        <Link to="/contact-us" className={getNavLinkClass("/contact-us")}>Contact Us</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-2 bg-white rounded-md shadow-lg animate-fade-in">
                        <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">About Us</Link>
                        <Link to="/values" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Values</Link> {/* Added Values link */}
                        <Link to="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Solutions</Link>
                        <Link to="/partnerships" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Businesses</Link>
                        <Link to="/Vision Board" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">
                            <div className="flex items-center">
                                <span>Vision Board</span>
                                <span className="ml-2 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
                            </div>
                        </Link>
                        <Link to="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Pricing</Link>
                        <Link to="/contact-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Contact Us</Link>
                        <div className="px-4 py-2 flex flex-col space-y-2 border-t border-gray-100 mt-2 pt-2">
                            <Link to="#" className="w-full bg-theme-main hover:bg-theme-dark text-white px-4 py-2 rounded-full text-center">Sign In</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
