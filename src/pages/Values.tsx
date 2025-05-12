import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ChevronDown, X, Menu, Cookie } from 'lucide-react';
import NavBar from '../components/NavBar';
import CookieConsent from '../components/CookieConsent';
import { initCustomCursor } from '../utils/cursorEffects';
import SideNavigationDots from '../components/SideNavigationDots';
import CallToAction from '../components/CallToAction'; // Added import for CallToAction

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
    const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
    const [isModalExiting, setIsModalExiting] = useState(false); // New state for animation
    const [activeSection, setActiveSection] = useState('climbers'); // Track the active section
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            // Update active section based on scroll position
            const sections = ['climbers', 'climber-values', 'scientists', 'scientist-values', 'open', 'open-values', 'tribe', 'tribe-values', 'globe'];
            let currentSection = 'climbers';
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentSection = sections[i];
                        break;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Add smooth scrolling effect
    useEffect(() => {
        // Apply smooth scroll behavior to the document
        document.documentElement.style.scrollBehavior = 'smooth';

        // Clean up function
        return () => {
            document.documentElement.style.scrollBehavior = '';
        };
    }, []);

    useEffect(() => {
        const cleanupCursor = initCustomCursor();
        return () => cleanupCursor();
    }, []);

    const getNavLinkClass = (path: string) =>
        `relative inline-block px-3 py-2 text-sm font-medium transition-all duration-200
        ${isScrolled ? 'text-gray-700' : 'text-white'}
        hover:text-theme-main hover:scale-105 active:scale-95 active:opacity-80
        focus-visible:ring-2 focus-visible:ring-theme-main focus:outline-none rounded
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
        after:w-0 after:bg-theme-main after:transition-all after:duration-300 hover:after:w-full
        ${location.pathname === path ? 'text-theme-main font-semibold' : ''}`;

    // Function to handle scrolling to sections
    const handleScrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = section.getBoundingClientRect().top + window.scrollY - 70; // Adjust for navbar height
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
            setCookiePolicyOpen(false); // Close the floating menu after clicking
        }
    };

    // Handle modal closing with animation
    const handleCloseModal = () => {
        setIsModalExiting(true);
        setTimeout(() => {
            setCookiePolicyOpen(false);
            setIsModalExiting(false);
        }, 300); // Match this with the animation duration
    };

    return (
        <>
            <div className="bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-gray-300">
                <NavBar />
                <SideNavigationDots sections={['climbers', 'scientists', 'open', 'tribe', 'globe']} />

                {/* Hero Section */}
                <section id="climbers" className="relative bg-cover bg-center text-white">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <div className="relative z-20 max-w-6xl mx-auto text-center py-20">
                        <h1 className="text-5xl font-bold mb-6">We're Climbers</h1>
                        <p className="text-lg text-gray-400">At ChitChat, our values define who we are and guide us in everything we do.</p>
                    </div>
                </section>

                {/* Values Section */}
                <section id="climber-values" className="py-16 px-6 bg-[#121212]">
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-4xl font-bold text-white text-center mb-20">Our Core Values</h3>
                        <div className="space-y-10">
                            {values.map((value, index) => (
                                <div key={index} className="text-gray-400">
                                    <h4 className="text-2xl font-semibold text-white mb-2">{value.title}</h4>
                                    <p>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Values;
