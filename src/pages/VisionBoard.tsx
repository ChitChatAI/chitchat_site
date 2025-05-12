import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion, useScroll } from 'framer-motion';
import { ChevronDown, X, Menu, Cookie } from 'lucide-react';
import NavBar from '../components/NavBar';
import CallToAction from '../components/CallToAction';
import CookieConsent from '../components/CookieConsent';
import { initCustomCursor } from '../utils/cursorEffects';

const VisionBoard: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
    const [isModalExiting, setIsModalExiting] = useState(false);
    const [navbarSpaceState, setNavbarSpaceState] = useState<'normal' | 'tight' | 'very-tight' | 'collapse'>('normal');
    const location = useLocation();
    const { scrollYProgress } = useScroll();



    // Refs for measuring navbar elements
    const navContainerRef = useRef<HTMLDivElement>(null);
    const navLinksRef = useRef<HTMLDivElement>(null);

    // Function to check navbar space and determine text size or collapse
    const checkNavbarOverflow = () => {
        if (navContainerRef.current && navLinksRef.current) {
            const containerWidth = navContainerRef.current.offsetWidth;
            const logoWidth = navContainerRef.current.querySelector('.logo-container')?.clientWidth || 0;
            const linksWidth = navLinksRef.current.scrollWidth;
            const availableSpace = containerWidth - logoWidth - 40; // 40px buffer

            // Calculate ratio of needed space vs available space
            const spaceRatio = linksWidth / availableSpace;

            if (spaceRatio > 1.1) {
                // When severely constrained, collapse to hamburger
                setNavbarSpaceState('collapse');
            } else if (spaceRatio > 0.95) {
                // When very tight, use smallest font
                setNavbarSpaceState('very-tight');
            } else if (spaceRatio > 0.85) {
                // When somewhat tight, use smaller font
                setNavbarSpaceState('tight');
            } else {
                // When plenty of space, use normal font
                setNavbarSpaceState('normal');
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check navbar overflow on mount and window resize
    useEffect(() => {
        checkNavbarOverflow();

        const handleResize = () => {
            checkNavbarOverflow();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Fixed function to correctly detect blog page
    const getNavLinkClass = (path: string) => {
        // Special case for blog - directly check current component
        if (path === "/blog") {
            return `${isScrolled ? 'text-gray-700' : 'text-white'} font-semibold text-theme-main transition-colors duration-200 text-sm md:text-base`;
        }

        // Regular path handling for other links
        return `${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-gray-300'} transition-colors duration-200 text-sm md:text-base ${location.pathname === path ? 'text-theme-main font-semibold' : ''}`;
    };

    // Handle modal closing with animation
    const handleCloseModal = () => {
        setIsModalExiting(true);
        setTimeout(() => {
            setCookiePolicyOpen(false);
            setIsModalExiting(false);
        }, 300); // Match this with the animation duration
    };

    // Add CSS variable for navbar height
    useEffect(() => {
        // Set the navbar height CSS variable
        const updateNavbarHeight = () => {
            const navbar = document.querySelector('nav');
            if (navbar) {
                const navbarHeight = navbar.offsetHeight;
                document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
            }
        };

        // Initial setup and listen for resize events
        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);

        return () => window.removeEventListener('resize', updateNavbarHeight);
    }, [isScrolled]); // Re-run when scroll state changes

    // Helper function to get font size class based on space state
    const getNavFontSize = () => {
        switch (navbarSpaceState) {
            case 'tight': return 'text-[11px]';
            case 'very-tight': return 'text-[10px]';
            default: return 'text-xs sm:text-sm lg:text-base';
        }
    };

    // Get badge size class based on space state
    const getBadgeSize = () => {
        switch (navbarSpaceState) {
            case 'tight': return 'ml-0.5 px-1 py-0 text-[8px]';
            case 'very-tight': return 'ml-0.5 px-0.5 py-0 text-[8px]';
            default: return 'ml-0.5 md:ml-1 px-1 md:px-2 py-0.5 text-[10px] md:text-xs';
        }
    };

    // Smooth scrolling function
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

    useEffect(() => {
        const cleanupCursor = initCustomCursor();
        return () => cleanupCursor();
    }, []);

    return (
        <>
            <div className="bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] min-h-screen text-gray-300">
                {/* Navbar */}
                <NavBar />

                {/* Vision Board Content */}
                <main className="relative px-6 py-12">
                    <section className="max-w-6xl mx-auto">
                        <h1 className="text-4xl font-bold text-white mb-6">Our Vision</h1>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            At ChitChat, we envision a future where AI seamlessly integrates into our daily lives, enhancing human interactions and creating meaningful connections.
                        </p>
                    </section>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default VisionBoard;
