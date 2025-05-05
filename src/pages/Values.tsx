import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ChevronDown, X, Menu } from 'lucide-react';

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
    const [floatingMenuOpen, setFloatingMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
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

    const getNavLinkClass = (path: string) =>
        `${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-gray-300'} transition-colors duration-200 text-sm md:text-base ${location.pathname === path ? 'text-theme-main font-semibold' : ''}`;

    // Function to handle scrolling to sections
    const handleScrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setFloatingMenuOpen(false); // Close the floating menu after clicking
        }
    };

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
                            <Link to="/Vision Board" className={`flex items-center ${getNavLinkClass("/Vision Board")}`}>
                                <span>Vision Board</span>
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
                            <Link to="/Vision Board" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors flex items-center justify-between">
                                <span>Vision Board</span>
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
                id="climbers"
                className="relative bg-cover bg-center animate-fade-in"
                style={{
                    backgroundImage: "url('/valuesPage/valuesBg.png')",
                    backgroundAttachment: "fixed",
                    minHeight: 'calc(100vh + 300px)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark semi-transparent black overlay for contrast */}
                <div className="absolute inset-0 bg-black/40 z-0" />

                {/* Purple fog overlay from bottom to top */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-purple-400/20 to-transparent z-10 pointer-events-none" />

                {/* Removing blending gradient at the bottom */}

                {/* Content */}
                <div className="relative z-30 max-w-6xl mx-auto text-center text-white px-6 pt-[40%] pb-[10%]">
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text scroll-review">
                        We're climbers
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-mono scroll-review">
                        {`At ChitChat, our values define who we are and guide us in everything we do.`}
                    </p>
                    <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section id="climber-values" className="py-16 px-6 bg-gray-50">
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
                                    <h2 className="text-2xl font-semibold text-theme-main mb-4 relative z-30">{value.title}</h2>
                                    <p className="text-gray-600 relative z-30">{value.description}</p>
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

            {/* Additional Section with Scientists Image */}
            <section
                id="scientists"
                className="relative bg-cover bg-center animate-fade-in overflow-hidden"
                style={{
                    backgroundImage: "url('/valuesPage/scientists.png')",
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
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text scroll-review">
                        We're scientists
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-mono scroll-review">
                        {`At ChitChat, we embrace the scientific mindset to explore, discover, and innovate.`}
                    </p>
                </div>
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                    <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
                </div>
            </section>

            {/* Scientists Values Section */}
            <section id="scientist-values" className="py-16 px-6 bg-gray-50">
                <motion.div
                    className="relative z-20 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-4xl font-bold text-center text-gray-900 mb-20 scroll-review opacity-0 transform translate-y-10">
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
                                <motion.div
                                    key={index}
                                    className="relative scroll-review opacity-0 transform translate-y-10"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <span className="absolute -left-[42px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md"></span>
                                    <h3 className="text-2xl font-semibold text-theme-main mb-2">{value.title}</h3>
                                    <p className="text-base text-gray-600 max-w-3xl leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>{/* Open Section with Silhouette Image */}
            <section
                id="open"
                className="relative bg-cover bg-center animate-fade-in overflow-hidden"
                style={{
                    backgroundImage: "url('/valuesPage/silhoutte.png')",
                    backgroundAttachment: "fixed",
                    minHeight: 'calc(100vh + 300px)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark semi-transparent black overlay for contrast */}
                <div className="absolute inset-0 bg-black/40 z-0" />

                {/* Purple fog overlay from bottom to top */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-purple-400/20 to-transparent z-10 pointer-events-none" />

                {/* Content */}
                <div className="relative z-30 max-w-6xl mx-auto text-center text-white px-6 pt-[40%] pb-[10%]">
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text scroll-review">
                        We're open
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-mono scroll-review">
                        {`At ChitChat, we believe in openness and transparency in everything we do.`}
                    </p>
                </div>
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                    <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
                </div>
            </section>


            {/* Open Values Section */}
            <section id="open-values" className="py-16 px-10 sm:px-14 md:px-20 bg-gray-50">
                <motion.div
                    className="relative z-20 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 mb-12">
                            {[
                                {
                                    title: 'Diversity',
                                    description: 'Seeking to be exposed to a variety of people, perspectives, and experiences, and assessing them with an open mind.'
                                },
                                {
                                    title: 'Freedom',
                                    description: 'Affording others considerable latitude of action, and providing them with ample opportunity to prove themselves.'
                                },
                                {
                                    title: 'Inclusivity',
                                    description: 'Treating all others in the same respectful and caring way, no matter their individual characteristics and preferences.'
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
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <h3 className="text-2xl font-semibold text-theme-main mb-3">{value.title}</h3>
                                    <p className="text-base text-gray-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
            {/* Tribe Section with Image */}
            <section
                id="tribe"
                className="relative bg-cover bg-center animate-fade-in overflow-hidden"
                style={{
                    backgroundImage: "url('/valuesPage/tribe.png')",
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
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text scroll-review">
                        We're a tribe
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-mono scroll-review">
                        {`At ChitChat, our community values strengthen the bonds that help us grow together.`}
                    </p>
                </div>
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                    <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
                </div>
            </section>

            {/* Tribe Values Section */}
            <section id="tribe-values" className="py-16 px-10 sm:px-14 md:px-20 bg-gray-50">
                <motion.div
                    className="relative z-20 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 mb-12">
                            {[

                                { title: 'Altruism', description: 'Giving generously and without the expectation of receiving in return.' },
                                { title: 'Authenticity', description: 'Interacting informally and bringing your true self wherever you go.' },
                                { title: 'Bonding', description: 'Investing in creating rich, lasting relationships.' },
                                { title: 'Collaboration', description: 'Taking steps to help the group work together seamlessly.' },
                                { title: 'Empathy', description: 'Stepping outside of yourself to stand in the shoes of others.' },
                                { title: 'Humility', description: 'Behaving without arrogance or entitlement, regardless of position or past achievements.' },
                                { title: 'Positivity', description: 'Uplifting others by having fun and highlighting the bright side of challenges.' },
                                { title: 'Trust', description: 'Meaning well in all you do, and assuming others mean well unless proven otherwise.' }
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <h3 className="text-2xl font-semibold text-theme-main mb-3">{value.title}</h3>
                                    <p className="text-base text-gray-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Globe Section with Image */}
            <section
                id="globe"
                className="relative bg-cover bg-center animate-fade-in overflow-hidden"
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
                    <motion.h1
                        className="text-7xl sm:text-8xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text scroll-review"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        It’s not all<br />
                        about us
                    </motion.h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-mono scroll-review">
                        {`We’re thankful for the opportunities the world 
affords us, and strive to improve things for others.`}
                    </p>
                </div>
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                </div>
            </section>
            

            {/* Floating Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setFloatingMenuOpen(!floatingMenuOpen)}
                    className="bg-theme-main text-white p-4 rounded-full shadow-lg hover:bg-theme-dark transition-all flex items-center justify-center"
                    aria-label="Toggle page navigation"
                >
                    <div
                        className={`transform transition-transform duration-300 ${floatingMenuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}`}
                    >
                        {floatingMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </button>

                {/* Mini Menu Modal */}
                {floatingMenuOpen && (
                    <div className="absolute right-0 bottom-16 bg-white shadow-lg rounded-lg p-4 w-56 animate-slide-up">
                        <ul className="space-y-4">
                            <li>
                                <button
                                    onClick={() => handleScrollToSection('climbers')}
                                    className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all w-full text-left"
                                >
                                    <ChevronDown size={16} />
                                    We're Climbers
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScrollToSection('climber-values')}
                                    className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all w-full text-left"
                                >
                                    <ChevronDown size={16} />
                                    Climber Values
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScrollToSection('scientists')}
                                    className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all w-full text-left"
                                >
                                    <ChevronDown size={16} />
                                    We're Scientists
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScrollToSection('scientist-values')}
                                    className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all w-full text-left"
                                >
                                    <ChevronDown size={16} />
                                    Scientific Values
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScrollToSection('tribe')}
                                    className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all w-full text-left"
                                >
                                    <ChevronDown size={16} />
                                    We're a Tribe
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScrollToSection('tribe-values')}
                                    className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all w-full text-left"
                                >
                                    <ChevronDown size={16} />
                                    Tribe Values
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScrollToSection('globe')}
                                    className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all w-full text-left"
                                >
                                    <ChevronDown size={16} />
                                    It's Not All About Us
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScrollToSection('open')}
                                    className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all w-full text-left"
                                >
                                    <ChevronDown size={16} />
                                    We're Open
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScrollToSection('open-values')}
                                    className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all w-full text-left"
                                >
                                    <ChevronDown size={16} />
                                    Open Values
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Values;
