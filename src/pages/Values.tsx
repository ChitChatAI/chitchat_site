import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion} from 'framer-motion';

const values = [
    {
        title: 'Ambition',
        description:
            'Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.',
    },
    {
        title: 'Courage',
        description: 'Overcoming fear when it stands in the way of doing the right thing.',
    },
    {
        title: 'Dedication',
        description: 'Always giving your best as you diligently progress toward the goal.',
    },
    {
        title: 'Long-term orientation',
        description: 'Seeking to optimize with a long-term view, even at the expense of short-term victories.',
    },
    {
        title: 'Optimism',
        description: 'Believing that, through smart and hard work, you can make the future better than the present.',
    },
    {
        title: 'Ownership',
        description: 'Feeling deeply responsible for your work, and continually taking the initiative.',
    },
    {
        title: 'Passion',
        description: 'Finding pleasure and purpose in doing the work in pursuit of the goal.',
    },
    {
        title: 'Tenacity',
        description: 'Not giving up in front of an obstacle, treating failure as valuable feedback, and picking yourself up swiftly after every fall.',
    },
];

const Values: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getNavLinkClass = (path: string) =>
        `${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-gray-300'} transition-colors duration-200 text-sm md:text-base ${location.pathname === path ? 'text-theme-main font-semibold' : ''}`;

    return (
        <>
            {/* Embedded Responsive NavBar */}
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-7' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center relative">
                            <img
                                src={isScrolled ? "/branding/chitchatAI.png" : "/branding/chitchatAILite.png"}
                                alt="ChitChat AI Logo"
                                className="w-8 sm:w-10 h-auto"
                            />
                            <Link to="/" className={`text-xl sm:text-2xl font-semibold ${isScrolled ? 'text-gray-800' : 'text-white'} transition duration-300 ml-2`}>
                                ChitChat
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-10">
                            <Link to="/" className={getNavLinkClass("/")}>About Us</Link>
                            <Link to="/values" className={getNavLinkClass("/values")}>Values</Link>
                            <Link to="/solutions" className={getNavLinkClass("/solutions")}>Solutions</Link>
                            <Link to="/partnerships" className={`flex items-center ${getNavLinkClass("/partnerships")}`}>
                                <span>Businesses</span>
                            </Link>
                            <Link to="/blog" className={`flex items-center ${getNavLinkClass("/blog")}`}>
                                <span>Blog</span>
                                <span className="ml-1 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
                            </Link>
                            <Link to="#" className={getNavLinkClass("/pricing")}>Pricing</Link>
                            <Link to="/contact-us" className={getNavLinkClass("/contact-us")}>Contact Us</Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 py-2 bg-white rounded-md shadow-lg animate-fade-in">
                            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">About Us</Link>
                            <Link to="/values" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Values</Link>
                            <Link to="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Solutions</Link>
                            <Link to="/partnerships" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Businesses</Link>
                            <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors flex items-center justify-between">
                                <span>Blog</span>
                                <span className="ml-2 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
                            </Link>
                            <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Pricing</Link>
                            <Link to="/contact-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Contact Us</Link>
                            <div className="px-4 py-2 flex flex-col space-y-2 border-t border-gray-100 mt-2 pt-2">
                                <Link to="#" className="w-full bg-theme-main hover:bg-theme-dark text-white px-4 py-2 rounded-full text-center">Sign In</Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center bg-fixed animate-fade-in"
                style={{
                    backgroundImage: "url('/valuesPage/valuesBg.png')",
                    minHeight: 'calc(100vh + 300px)',
                }}
            >
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="relative z-10 max-w-6xl mx-auto text-center text-white px-6 pt-[40%] pb-[10%]">
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text scroll-review">
                        We're climbers
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-mono scroll-review">
                        {`At ChitChat, our values define who we are and guide us in everything we do.`}
                    </p>
                    <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                        <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-6 bg-gray-50">
                <motion.div
                    className="relative z-20 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
                            
                            {values.slice(0, 2).map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-4 sm:p-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <h2 className="text-2xl font-semibold text-theme-main mb-4">{value.title}</h2>
                                    <p className="text-gray-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-12">
                            {values.slice(2, 3).map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-4 sm:p-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <h2 className="text-2xl font-semibold text-theme-main mb-4">{value.title}</h2>
                                    <p className="text-gray-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
                            {values.slice(3, 5).map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-4 sm:p-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <h2 className="text-2xl font-semibold text-theme-main mb-4">{value.title}</h2>
                                    <p className="text-gray-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-12">
                            {values.slice(5, 6).map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-4 sm:p-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <h2 className="text-2xl font-semibold text-theme-main mb-4">{value.title}</h2>
                                    <p className="text-gray-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
                            {values.slice(6).map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-4 sm:p-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <h2 className="text-2xl font-semibold text-theme-main mb-4">{value.title}</h2>
                                    <p className="text-gray-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </>
    );
};

export default Values;
