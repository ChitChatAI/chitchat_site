import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ChevronDown, X, Menu, Cookie } from 'lucide-react';
import NavBar from '../components/NavBar';
import CookieConsent from '../components/CookieConsent';
import { initCustomCursor } from '../utils/cursorEffects';

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
            <div className="mouse-reactive-bg">
                <div className="bg-element"></div>
                <div className="bg-element"></div>
                <div className="bg-element"></div>
            </div>

            <NavBar />

            {/* Side Navigation Dots for sections */}
            <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
                <div className="flex flex-col items-center space-y-4">
                    {['climbers', 'climber-values', 'scientists', 'scientist-values', 'open', 'open-values', 'tribe', 'tribe-values', 'globe'].map((section) => (
                        <button
                            key={section}
                            onClick={() => handleScrollToSection(section)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                activeSection === section 
                                    ? 'bg-theme-main scale-125 shadow-lg shadow-theme-main/30' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Scroll to ${section} section`}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Cookie Policy Floating Button */}
            {/* Hero Section */}
            <section
                id="climbers"
                className="relative bg-cover bg-center font-sans"
                style={{
                    backgroundImage: "url('/valuesPage/valuesBg.png')",
                    backgroundAttachment: "fixed",
                    minHeight: 'calc(100vh + 300px)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-purple-400/20 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="relative z-30 max-w-6xl mx-auto text-center text-white px-6 pt-[40%] pb-[10%]">
                    <h1 className="scroll-review opacity-0 transform translate-y-6 text-5xl sm:text-6xl font-header font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-md leading-[150%] transition-all duration-700">
                        We're climbers
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-mono drop-shadow-sm">
                        At ChitChat, our values define who we are and guide us in everything we do.
                    </p>
                </div>
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                    <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
                </div>
            </section>

            {/* Values Section */}
            <section
                id="climber-values"
                className="py-16 px-6 bg-gray-50"
            >
                <div
                    className="relative z-20 max-w-7xl mx-auto"
                >
                    <div className="max-w-6xl mx-auto">
                        <h3 className="scroll-review opacity-0 transform translate-y-6 text-4xl font-bold text-center text-gray-900 mb-20 transition-all duration-700">
                            Our Core Values
                        </h3>
                        <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20 ml-6 md:ml-10">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                >
                                    <span className="absolute -left-[42px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md"></span>
                                    <h3 className="text-2xl font-semibold text-theme-main mb-2">{value.title}</h3>
                                    <p className="text-base text-gray-600 max-w-3xl leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Section with Scientists Image */}
            <section
                id="scientists"
                className="relative bg-cover bg-center overflow-hidden group"
                style={{
                    backgroundImage: "url('/valuesPage/scientists.png')",
                    backgroundAttachment: "fixed",
                    minHeight: 'calc(100vh + 300px)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                    border: "2px solid transparent",
                    borderRadius: "30px",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                    backgroundClip: "padding-box, border-box",
                    backgroundOrigin: "border-box",
                }}
            >
                <div className="absolute inset-0 bg-black/40 z-0 rounded-[30px]" /> {/* Match border radius */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-purple-400/20 to-transparent z-10 pointer-events-none rounded-[30px]" /> {/* Match border radius */}
                <div className="relative z-40 max-w-6xl mx-auto text-center text-white px-6 pt-[40%] pb-[10%]">
                    <h1 className="scroll-review opacity-0 transform translate-y-6 text-5xl sm:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-md transition-all duration-700">
                        We're scientists
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-mono drop-shadow-sm">
                        {`At ChitChat, we embrace the scientific mindset to explore, discover, and innovate.`}
                    </p>
                </div>
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                    <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
                </div>
            </section>

            {/* Scientists Values Section */}
            <section id="scientist-values" className="py-16 px-6 bg-gray-50">
                <div
                    className="relative z-20 max-w-7xl mx-auto"
                >
                    <div className="max-w-6xl mx-auto">
                        <h3 className="scroll-review opacity-0 transform translate-y-6 text-4xl font-bold text-center text-gray-900 mb-20 transition-all duration-700">
                            Our Scientific Values
                        </h3>

                        {/* Neural Dot Timeline Style Format */}
                        <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20 ml-6 md:ml-10">
                            {[

                                { title: 'Accuracy', description: 'Telling the truth, and being explicit about what\'s a fact and what\'s a hypothesis.' },
                                { title: 'Curiosity', description: 'Seeking an understanding of the whats, hows, and whys of the world.' },
                                { title: 'Imagination', description: 'Envisioning how things could be, unencumbered by how they currently are.' },
                                { title: 'Logic', description: 'Reasoning from first principles, and structuring ideas sharply.' },
                                { title: 'Meritocracy', description: 'Assigning responsibilities solely based on people\'s ability to carry them out, and evaluating ideas regardless of where or whom they came from.' },
                                { title: 'Pragmatism', description: 'Optimizing for impact, finding the right scope—and the ideal balance between speed and sophistication—at all times.' },
                                { title: 'Precision', description: 'Identifying and taking care of the details that matter.' },
                                { title: 'Rationality', description: 'Resisting the influence of biases.' },
                                { title: 'Research', description: 'Gathering all relevant information, and rigorously testing hypotheses.' }
                            ].map((value, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                >
                                    <span className="absolute -left-[42px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md"></span>
                                    <h3 className="text-2xl font-semibold text-theme-main mb-2">{value.title}</h3>
                                    <p className="text-base text-gray-600 max-w-3xl leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Open Section with Silhouette Image */}
            <section
                id="open"
                className="relative bg-cover bg-center overflow-hidden group"
                style={{
                    backgroundImage: "url('/valuesPage/silhoutte.png')",
                    backgroundAttachment: "fixed",
                    minHeight: 'calc(100vh + 300px)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                    border: "2px solid transparent",
                    borderRadius: "30px",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                    backgroundClip: "padding-box, border-box",
                    backgroundOrigin: "border-box",
                }}
            >
                <div className="absolute inset-0 bg-black/40 z-0 rounded-[30px]" /> {/* Match border radius */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-purple-400/20 to-transparent z-10 pointer-events-none rounded-[30px]" /> {/* Match border radius */}
                <div className="relative z-40 max-w-6xl mx-auto text-center text-white px-6 pt-[40%] pb-[10%]">
                    <h1 className="scroll-review opacity-0 transform translate-y-6 text-5xl sm:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-md transition-all duration-700">
                        We're open
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-mono drop-shadow-sm">
                        {`At ChitChat, we believe in openness and transparency in everything we do.`}
                    </p>
                </div>
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                    <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
                </div>
            </section>


            {/* Open Values Section */}
            <section id="open-values" className="py-16 px-10 sm:px-14 md:px-20 bg-gray-50">
                <div
                    className="relative z-20 max-w-7xl mx-auto"
                >
                    <div className="max-w-6xl mx-auto">
                        <h3 className="scroll-review opacity-0 transform translate-y-6 text-4xl font-bold text-center text-gray-900 mb-20 transition-all duration-700">
                            Our Open Values
                        </h3>
                        <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20 ml-6 md:ml-10">
                            {[
                                {
                                    title: 'Diversity',
                                    description: 'Seeking to be exposed to a variety of people, perspectives, and experiences, and assessing them with an open mind.',
                                },
                                {
                                    title: 'Freedom',
                                    description: 'Affording others considerable latitude of action, and providing them with ample opportunity to prove themselves.',
                                },
                                {
                                    title: 'Inclusivity',
                                    description: 'Treating all others in the same respectful and caring way, no matter their individual characteristics and preferences.',
                                },
                                {
                                    title: 'Self-criticism',
                                    description: 'Soliciting and receiving feedback with a grateful attitude.'
                                },
                                {
                                    title: 'Tolerance',
                                    description: 'Respecting others and their opinions, particularly when you don\'t see eye to eye with them.'
                                },
                                {
                                    title: 'Transparency',
                                    description: 'Making relevant information as accessible as possible—even when it feels uncomfortable to do so.'
                                },
                            ].map((value, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                >
                                    <span className="absolute -left-[42px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md"></span>
                                    <h3 className="text-2xl font-semibold text-theme-main mb-2">{value.title}</h3>
                                    <p className="text-base text-gray-600 max-w-3xl leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Tribe Section with Image */}
            <section
                id="tribe"
                className="relative bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage: "url('/valuesPage/tribe.png')",
                    backgroundAttachment: "fixed",
                    minHeight: 'calc(100vh + 300px)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                    border: "2px solid transparent",
                    borderRadius: "30px",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                    backgroundClip: "padding-box, border-box",
                    backgroundOrigin: "border-box",
                }}
            >
                <div className="absolute inset-0 bg-black/40 z-0 rounded-[30px]" /> {/* Match border radius */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-purple-400/20 to-transparent z-10 pointer-events-none rounded-[30px]" /> {/* Match border radius */}
                <div className="relative z-30 max-w-6xl mx-auto text-center text-white px-6 pt-[40%] pb-[10%]">
                    <h1 className="scroll-review opacity-0 transform translate-y-6 text-5xl sm:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-md transition-all duration-700">
                        We're a tribe
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-mono drop-shadow-sm">
                        {`At ChitChat, our community values strengthen the bonds that help us grow together.`}
                    </p>
                </div>
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                    <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
                </div>
            </section>

            {/* Tribe Values Section */}
            <section id="tribe-values" className="py-16 px-10 sm:px-14 md:px-20 bg-gray-50">
                <div className="relative z-20 max-w-7xl mx-auto">
                    <div className="max-w-6xl mx-auto">
                        <h3 className="scroll-review opacity-0 transform translate-y-6 text-4xl font-bold text-center text-gray-900 mb-20 transition-all duration-700">
                            Our Tribe Values
                        </h3>
                        {/* Neural Dot Timeline Style Format */}
                        <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20 ml-6 md:ml-10">
                            {[
                                { title: 'Altruism', description: 'Giving generously and without the expectation of receiving in return.' },
                                { title: 'Authenticity', description: 'Interacting informally and bringing your true self wherever you go.' },
                                { title: 'Bonding', description: 'Investing in creating rich, lasting relationships.' },
                                { title: 'Collaboration', description: 'Taking steps to help the group work together seamlessly.' },
                                { title: 'Empathy', description: 'Stepping outside of yourself to stand in the shoes of others.' },
                                { title: 'Humility', description: 'Behaving without arrogance or entitlement, regardless of position or past achievements.' },
                                { title: 'Positivity', description: 'Uplifting others by having fun and highlighting the bright side of challenges.' },
                                { title: 'Trust', description: 'Meaning well in all you do, and assuming others mean well unless proven otherwise.' }
                            ].map((value, index, arr) => (
                                <div key={index} className="relative">
                                    {/* Main neural dot */}
                                    <span className="absolute -left-[42px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md z-10"></span>
                                    <h3 className="text-2xl font-semibold text-theme-main mb-3 drop-shadow-md">{value.title}</h3>
                                    <p className="text-base text-gray-600 drop-shadow-sm">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Globe Section with Image */}
            <section
                id="globe"
                className="relative bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage: "url('/valuesPage/globe.png')",
                    backgroundAttachment: "fixed",
                    minHeight: 'calc(100vh + 300px)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark semi-transparent black overlay for contrast */}
                <div className="absolute inset-0 bg-black/40 z-0" />

                {/* Purple fog overlay from bottom to top - matching the climbers section */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-purple-400/20 to-transparent z-10 pointer-events-none" />

                {/* Content */}
                <div className="relative z-30 max-w-6xl mx-auto text-center text-white px-6 pt-[40%] pb-[10%]">
                    <h1
                        className="scroll-review opacity-0 transform translate-y-6 text-7xl sm:text-8xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-md transition-all duration-700"
                    >
                        It’s not all<br />
                        about us
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-mono drop-shadow-sm">
                        {`We’re thankful for the opportunities the world 
affords us, and strive to improve things for others.`}
                    </p>
                </div>
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                </div>
            </section>


            {/* Cookie Policy Floating Button - moved to left side */}
            <CookieConsent position="left" modalPosition="bottom" />

            {/* Replace jsx style tag with regular style tag */}
            <style>
                {`
                @keyframes slideLeft {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                
                @keyframes slideRight {
                    from { transform: translateX(0); }
                    to { transform: translateX(100%); }
                }
                `}
            </style>

            <Footer />
        </>
    );
};

export default Values;
