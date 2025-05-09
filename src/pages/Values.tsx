import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ChevronDown, X, Menu, Cookie } from 'lucide-react'; 
import NavBar from '../components/NavBar';

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
            
            <NavBar />

            {/* Cookie Policy Floating Button */}
            {/* Hero Section */}
            <section
                id="climbers"
                className="relative bg-cover bg-center animate-fade-in transform perspective-1000 font-sans"
                style={{
                    backgroundImage: "url('/valuesPage/valuesBg.png')",
                    backgroundAttachment: "fixed",
                    minHeight: 'calc(100vh + 300px)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="relative z-30 max-w-6xl mx-auto text-center text-white px-6 pt-[40%] pb-[10%]">
                    <h1 className="text-5xl sm:text-6xl font-header font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg leading-[150%]">
                        We're climbers
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-16 text-white/90 leading-[150%] drop-shadow-sm">
                        At ChitChat, our values define who we are and guide us in everything we do.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section
                id="climber-values"
                className="py-16 px-6 bg-gray-50"
                
            >
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
                        <h3 className="text-4xl font-bold text-center text-gray-900 mb-20">
                            Our Core Values
                        </h3>
                        <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20 ml-6 md:ml-10">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <span className="absolute -left-[42px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md"></span>
                                    <h3 className="text-2xl font-semibold text-theme-main mb-2">{value.title}</h3>
                                    <p className="text-base text-gray-600 max-w-3xl leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Additional Section with Scientists Image */}
            <section
                id="scientists"
                className="relative bg-cover bg-center animate-fade-in overflow-hidden transform perspective-1000"
                style={{
                    backgroundImage: "url('/valuesPage/scientists.png')",
                    backgroundAttachment: "fixed",
                    minHeight: 'calc(100vh + 300px)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)", // Added clip-path
                    border: "2px solid transparent", // Transparent border for futuristic effect
                    borderRadius: "30px", // Smooth futuristic border radius
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)", // Futuristic glow effect
                    backgroundClip: "padding-box, border-box",
                    backgroundOrigin: "border-box",
                    transform: "translateZ(50px) scale(1.05)", // 3D jumping effect
                }}
            >
                <div className="absolute inset-0 bg-black/40 z-0 rounded-[30px]" /> {/* Match border radius */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-purple-400/20 to-transparent z-10 pointer-events-none rounded-[30px]" /> {/* Match border radius */}
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
                className="relative bg-cover bg-center animate-fade-in overflow-hidden transform perspective-1000"
                style={{
                    backgroundImage: "url('/valuesPage/silhoutte.png')",
                    backgroundAttachment: "fixed",
                    minHeight: 'calc(100vh + 300px)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)", // Added clip-path
                    border: "2px solid transparent", // Transparent border for futuristic effect
                    borderRadius: "30px", // Smooth futuristic border radius
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)", // Futuristic glow effect
                    backgroundClip: "padding-box, border-box",
                    backgroundOrigin: "border-box",
                    transform: "translateZ(50px) scale(1.05)", // 3D jumping effect
                }}
            >
                <div className="absolute inset-0 bg-black/40 z-0 rounded-[30px]" /> {/* Match border radius */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-purple-400/20 to-transparent z-10 pointer-events-none rounded-[30px]" /> {/* Match border radius */}
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
                        <h3 className="text-4xl font-bold text-center text-gray-900 mb-20">
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
                                    description: 'Soliciting and receiving feedback with a grateful attitude.',
                                },
                                {
                                    title: 'Tolerance',
                                    description: 'Respecting others and their opinions, particularly when you don\'t see eye to eye with them.',
                                },
                                {
                                    title: 'Transparency',
                                    description: 'Making relevant information as accessible as possible—even when it feels uncomfortable to do so.',
                                },
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <span className="absolute -left-[42px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md"></span>
                                    <h3 className="text-2xl font-semibold text-theme-main mb-2">{value.title}</h3>
                                    <p className="text-base text-gray-600 max-w-3xl leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
            {/* Tribe Section with Image */}
            <section
                id="tribe"
                className="relative bg-cover bg-center animate-fade-in overflow-hidden transform perspective-1000"
                style={{
                    backgroundImage: "url('/valuesPage/tribe.png')",
                    backgroundAttachment: "fixed",
                    minHeight: 'calc(100vh + 300px)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)", // Added clip-path
                    border: "2px solid transparent", // Transparent border for futuristic effect
                    borderRadius: "30px", // Smooth futuristic border radius
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)", // Futuristic glow effect
                    backgroundClip: "padding-box, border-box",
                    backgroundOrigin: "border-box",
                    transform: "translateZ(50px) scale(1.05)", // 3D jumping effect
                }}
            >
                <div className="absolute inset-0 bg-black/40 z-0 rounded-[30px]" /> {/* Match border radius */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-purple-400/20 to-transparent z-10 pointer-events-none rounded-[30px]" /> {/* Match border radius */}
                <div className="relative z-30 max-w-6xl mx-auto text-center text-white px-6 pt-[40%] pb-[10%]">
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text scroll-review">
                        We're a tribe
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-mono scroll-review">
                        {`At ChitChat, our community values strengthen the bonds that help us grow together.`}
                    </p>
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
                                    className="relative bg-white border border-theme-main p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    style={{
                                        clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)", // Added clip-path
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <h3 className="text-2xl font-semibold text-theme-main mb-3 drop-shadow-md">{value.title}</h3> {/* Added drop shadow */}
                                    <p className="text-base text-gray-600 drop-shadow-sm">{value.description}</p> {/* Added drop shadow */}
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
            

            {/* Cookie Policy Floating Button - moved to left side */}
            <div className="fixed bottom-6 left-6 z-50">
                <button
                    onClick={() => setCookiePolicyOpen(!cookiePolicyOpen)}
                    className="bg-theme-main text-white p-4 rounded-full shadow-lg hover:bg-theme-dark transition-all flex items-center justify-center"
                    aria-label="Cookie Policy"
                >
                    <div className="transform transition-transform duration-300 hover:rotate-12">
                        <Cookie size={24} strokeWidth={1.5} />
                    </div>
                </button>

                {/* Modal positioned on the bottom with improved enter/exit animations */}
                {cookiePolicyOpen && (
                    <div 
                        className={`fixed inset-x-0 mx-auto bottom-0 bg-white shadow-lg rounded-t-lg p-6 w-full sm:w-[500px] max-h-[90vh] overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out`}
                        style={{ 
                            transform: isModalExiting ? 'translateY(100%)' : 'translateY(0)',
                            animation: isModalExiting ? 'slideDown 0.3s ease-out forwards' : 'slideUp 0.3s ease-out forwards'
                        }}
                    >
                        {/* Added ChitChat logo at the top of the modal */}
                        <div className="flex justify-center mb-4">
                            <img 
                                src="/branding/chitchatAI.png"
                                alt="ChitChat AI Logo"
                                className="w-12 h-auto"
                            />
                        </div>
                        
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Your cookie preferences</h3>
                            <button 
                                onClick={handleCloseModal}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-5">
                            We use cookies to keep our site secure and user-friendly, and to carry out the activities stated below.
                        </p>
                        
                        <p className="text-sm text-gray-600 mb-5">
                            You can customize your cookie preferences at any time by toggling the options on or off.
                        </p>
                        
                        <p className="text-sm text-gray-600 mb-6">
                            For more information, have a look at our <a href="#" className="text-theme-main underline hover:text-theme-dark">Privacy and Cookie Policy</a>
                        </p>
                        
                        <div className="border-t border-gray-200 pt-4 mb-5">
                            <h4 className="text-sm font-semibold mb-4">Manage consent preferences</h4>
                            
                            {/* Technical cookies toggle - always active */}
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Technical cookies</p>
                                    <p className="text-xs text-gray-500">Always active</p>
                                </div>
                                <div className="bg-theme-main rounded-full w-10 h-5 flex items-center px-0.5">
                                    <div className="bg-white rounded-full w-4 h-4 ml-auto shadow-sm"></div>
                                </div>
                            </div>
                            
                            {/* Analytics cookies toggle */}
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Analytics cookies</p>
                                </div>
                                <button className="bg-gray-200 rounded-full w-10 h-5 flex items-center px-0.5 hover:bg-gray-300 transition-colors">
                                    <div className="bg-white rounded-full w-4 h-4 shadow-sm"></div>
                                </button>
                            </div>
                        </div>
                        
                        <div className="flex justify-between space-x-3 pt-3 border-t border-gray-200">
                            <button 
                                onClick={handleCloseModal}
                                className="flex-1 py-2 border border-gray-300 text-gray-700 rounded font-medium hover:bg-gray-50 transition-colors"
                            >
                                Reject all
                            </button>
                            <button 
                                onClick={handleCloseModal}
                                className="flex-1 bg-theme-main text-white py-2 rounded font-medium hover:bg-theme-dark transition-colors"
                            >
                                Confirm my choices
                            </button>
                        </div>
                    </div>
                )}
            </div>

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
