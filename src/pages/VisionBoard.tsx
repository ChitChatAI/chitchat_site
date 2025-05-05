import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion, useScroll } from 'framer-motion'; // Add useScroll import
import { ChevronDown, X, Menu } from 'lucide-react';

const VisionBoard: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    // Add useScroll hook for the reading progress
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fixed function to correctly detect Vision Board page
    const getNavLinkClass = (path: string) => {
        // Special case for Vision Board - directly check current component
        if (path === "/Vision Board") {
            return `${isScrolled ? 'text-gray-700' : 'text-white'} font-semibold text-theme-main transition-colors duration-200 text-sm md:text-base`;
        }
        
        // Regular path handling for other links
        return `${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-gray-300'} transition-colors duration-200 text-sm md:text-base ${location.pathname === path ? 'text-theme-main font-semibold' : ''}`;
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
                            <Link to="/Vision Board" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors flex items-center">
                                <span className="text-theme-main font-semibold">Vision Board</span>
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

            {/* Vision Board Header Hero Section with Parallax Effect */}
            <motion.section
                className="relative flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-theme-dark aspect-[16/9] min-h-[400px] md:min-h-[500px] bg-cover bg-center bg-no-repeat overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Background image with parallax effect */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/blog/blog.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed"
                    }}
                    initial={{ scale: 1.2, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Dark Overlay */}
                <motion.div
                    className="absolute inset-0 bg-black/40 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />

                {/* Glass + Grid Overlay */}
                <motion.div
                    className="absolute inset-0 bg-white/5 backdrop-blur-sm bg-grid-white/10 bg-fixed opacity-10 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />

                {/* Content */}
                <motion.div
                    className="relative z-10 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            Our Prebuilt Personas (And Why They're Just the Start)
                        </motion.h1>
                    </div>
                </motion.div>

                {/* Fade-out to white at bottom */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                />
            </motion.section>


            {/* Vision Board Content - Enhanced Typography and Readability */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        {/* Reading Progress Bar - Fixed implementation */}
                        <motion.div
                            className="fixed top-0 left-0 right-0 h-1 bg-theme-main z-50"
                            style={{
                                transformOrigin: "0%",
                                scaleX: scrollYProgress
                            }}
                        />

                        {/* Enhanced Article Styling */}
                        <article className="prose prose-lg md:prose-xl prose-slate mx-auto">
                            {/* Lead Paragraph with enhanced styling */}
                            <motion.p
                                className="lead text-xl md:text-2xl text-gray-700 mb-10 font-light leading-relaxed tracking-wide"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                When people think of chatbots, they usually imagine something robotic and clunky - a tool that gives half-answers and frustrates them more than it helps. That's exactly what we wanted to avoid.
                            </motion.p>

                            <div className="space-y-8"> {/* Added container with improved spacing */}
                                <p className="text-gray-700 leading-relaxed">At ChitChat, we create AI personas that actually sound human. They don't just answer questions, they communicate like someone who understands what you're saying and why you're saying it.</p>

                                {/* Section with styled heading */}
                                <div className="mt-14 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 relative">
                                        <span className="absolute -left-4 top-0 bottom-0 w-1 bg-theme-main rounded-full"></span>
                                        What Is a Persona?
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">We don't build the LLM itself, we work with existing ones. A persona is what you input into that model. It's the personality, tone, and communication style that shapes how the AI responds.</p>

                                    <p className="text-gray-700 leading-relaxed mt-4">Think of it like this: the LLM is the engine, but the persona is the driver. Businesses bring their own model and we help give it a voice that actually fits their brand and knows how to talk to their customers.</p>
                                </div>

                                {/* Pull Quote */}
                                <div className="my-12 border-l-4 border-theme-main pl-6 py-2 italic text-xl text-gray-600">
                                    "The LLM is the engine, but the persona is the driver."
                                </div>

                                <div className="mt-14 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 relative">
                                        <span className="absolute -left-4 top-0 bottom-0 w-1 bg-theme-main rounded-full"></span>
                                        Our Prebuilt Set
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">Right now, we've developed a small set of ready-to-use personas designed for key business functions:</p>
                                    <ul className="space-y-2 ml-6">
                                        <li className="flex items-start">
                                            <span className="text-theme-main mr-2">•</span>
                                            <span>One handles retention conversations clearly and confidently</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-theme-main mr-2">•</span>
                                            <span>One helps with support in a calm, structured way</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-theme-main mr-2">•</span>
                                            <span>One is soft-spoken, friendly, and great with billing questions</span>
                                        </li>
                                    </ul>
                                    <p className="text-gray-700 leading-relaxed mt-4">They're all different, but the goal is the same: to make conversations smoother, quicker, and more human.</p>
                                </div>

                                {/* Continue with more styled sections */}
                                <div className="mt-14 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 relative">
                                        <span className="absolute -left-4 top-0 bottom-0 w-1 bg-theme-main rounded-full"></span>
                                        Why Prebuilt?
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">These personas are ready to go. They've been tested in real scenarios and are built to handle the kinds of customer interactions most businesses deal with daily. They're efficient and easy to plug in without needing to start from scratch.</p>
                                    <p className="text-gray-700 leading-relaxed mt-4">But they're not where it ends…</p>
                                </div>

                                {/* Enhanced callout boxes */}
                                <div className="my-16 p-8 bg-purple-50 ">
                                    <h2 className="text-2xl font-semibold text-purple-700 mb-4">What Makes AI Feel Human?</h2>
                                    <p className="text-gray-700 leading-relaxed">Most chatbots feel robotic because they are. They follow basic scripts, offer shallow replies, and don't respond in a way that reflects what the customer is actually feeling.</p>
                                    <p className="text-gray-700 leading-relaxed mt-4">At ChitChat, we do things differently.</p>
                                    <p className="text-gray-700 leading-relaxed mt-4">Our focus isn't just on whether the AI works, it's on whether it connects. Whether it knows when to slow down. When to soften. When to keep things direct and efficient. That's where humanising AI makes the biggest difference.</p>
                                </div>

                                {/* Continue with existing content but with enhanced formatting */}
                                <div className="mt-14 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 relative">
                                        <span className="absolute -left-4 top-0 bottom-0 w-1 bg-theme-main rounded-full"></span>
                                        Custom Personas for Any Industry
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">We also create custom personas based on a business's tone, needs, and goals. Whether you need someone calm for the medical field, upbeat for hospitality, or no-nonsense for logistics - we can build a voice that fits.</p>
                                    <p className="text-gray-700 leading-relaxed mt-4">The prebuilt ones are there if you need something fast. But long-term, we believe every business should have a voice that feels like its own.</p>
                                </div>

                                <div className="mt-14 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 relative">
                                        <span className="absolute -left-4 top-0 bottom-0 w-1 bg-theme-main rounded-full"></span>
                                        Tone Changes Outcomes
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">The way an AI responds can completely change the outcome of a conversation. A frustrated customer might cancel their service if the chatbot sounds flat or unhelpful, but that same person might stay if the AI handles the situation with the right mix of empathy, clarity, and confidence.</p>
                                    <p className="text-gray-700 leading-relaxed mt-4">Tone isn't just a decoration, it's a strategy.</p>
                                </div>

                                <div className="mt-14 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 relative">
                                        <span className="absolute -left-4 top-0 bottom-0 w-1 bg-theme-main rounded-full"></span>
                                        Designed for Real Conversations
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">Every persona we build is designed to handle human situations, not just transactional ones. While we don't share our full process publicly, everything we do is backed by deep psychological theories, careful testing, and a clear understanding of how people actually communicate.</p>
                                    <p className="text-gray-700 leading-relaxed mt-4">That's what makes our AI feel not just functional, but personal.</p>
                                </div>

                                <div className="mt-14 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 relative">
                                        <span className="absolute -left-4 top-0 bottom-0 w-1 bg-theme-main rounded-full"></span>
                                        Simulated Results: What Happens When AI Talks Like a Human?
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">When a customer reaches out with a complaint, a cancellation, or a moment of confusion, that interaction can go one of two ways.</p>
                                    <p className="text-gray-700 leading-relaxed mt-4">With most standard chatbots, the path is usually rigid and frustrating. The customer gets a scripted response, limited options, and no real engagement. The result? Escalation, abandonment, or churn.</p>
                                    <p className="text-gray-700 leading-relaxed mt-4">We wanted to see what would happen if that moment was handled differently.</p>
                                </div>

                                {/* Scenario Section */}
                                <div className="mt-14 mb-8">
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">The Scenario</h3>
                                    <p className="text-gray-700 leading-relaxed">A customer contacts support. They're upset. They've had an issue and they're either looking to cancel, file a complaint, or just vent.</p>
                                    <p className="text-gray-700 leading-relaxed mt-4">Here's how most systems respond:</p>

                                    <blockquote className="italic bg-gray-100 px-6 py-3 border-l-4 border-gray-300 text-center">
                                        "Please confirm your ID and I'll process your request."
                                    </blockquote>

                                    <p className="text-gray-700 leading-relaxed mt-4">That response is technically correct, but it doesn't move the conversation forward in any meaningful way.</p>
                                </div>

                                {/* With a ChitChat Persona Section */}
                                <div className="my-10">
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">With a ChitChat Persona</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">In the same situation, one of our AI personas might respond with something more human:</p>

                                    <blockquote className="italic bg-gradient-to-r from-purple-50 to-purple-100 px-8 py-6 text-gray-700 leading-relaxed shadow-sm my-6">
                                        "I'm really sorry you've had a frustrating experience. Before we go ahead with anything, I want to make sure I understand what's happened and what we can do to make it right."
                                    </blockquote>

                                    <p className="text-gray-700 leading-relaxed mt-4">It's simple. It doesn't try to fake empathy, it just uses tone, timing, and clarity to shift the dynamic.</p>
                                </div>

                                <div className="mt-14 mb-8">
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">So, What Changed?</h3>
                                    <p className="text-gray-700 leading-relaxed">In simulations like this, here's what we saw:</p>
                                    <ul className="list-disc list-inside space-y-2 mt-4">
                                        <li className="text-gray-700 leading-relaxed">Higher engagement - people opened up more and gave context.</li>
                                        <li className="text-gray-700 leading-relaxed">More opportunities to offer tailored solutions (instead of defaulting to "cancel" or "escalate").</li>
                                        <li className="text-gray-700 leading-relaxed">Less need for human intervention.</li>
                                    </ul>

                                    <p className="text-gray-700 leading-relaxed mt-4">No fancy gimmicks. Just better conversational design.</p>
                                </div>

                                <div className="mt-14 mb-8">
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Why It Works</h3>
                                    <p className="text-gray-700 leading-relaxed">When an AI can manage tone, handle emotion, and guide the customer instead of reacting to them, it changes everything.</p>

                                    <p className="text-gray-700 leading-relaxed mt-4">We're not replacing people. We're just making it easier to have human-quality conversations at scale.</p>
                                </div>

                                <div className="my-12 p-6 bg-blue-50 rounded-lg">
                                    <h2 className="text-xl font-semibold text-blue-700 mb-3">What AI Customer Support Should Actually Feel Like</h2>
                                    <p>Customer service doesn't always need a person, but it does need to feel personal.</p>
                                    <p className="mt-3">At ChitChat, we build AI personas that can fully manage certain conversations on their own. In cases where the issue is clear and the tone is handled well, there's no need to hand off to a human. The AI can take care of it from start to finish.</p>
                                    <p className="mt-3">But we also know some moments are too complex, too sensitive, or too unpredictable to automate entirely. That's why our system is also built to work alongside real teams when needed, with seamless handovers and no confusion.</p>
                                    <p className="mt-3">We're not removing the human from customer service. We're just giving businesses the option to decide where they still need one.</p>
                                </div>

                                <div className="mt-14 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 relative">
                                        <span className="absolute -left-4 top-0 bottom-0 w-1 bg-theme-main rounded-full"></span>
                                        What is Human-Augmented AI? (And Why Should You Care?)
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">A lot of people are throwing around terms like "AI-powered" and "human-like," but no one really explains what it means or why it matters.</p>

                                    <p className="text-gray-700 leading-relaxed mt-4">At ChitChat, when we say "human-augmented AI", we mean AI that's been carefully shaped to talk like a person, not just in what it says, but how it says it. We design AI personas that know how to manage tone, emotion, and intent so conversations don't feel robotic, even if no human is involved.</p>
                                </div>

                                <div className="mt-14 mb-8">
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">So…Is It Just a Chatbot?</h3>
                                    <p className="text-gray-700 leading-relaxed">Not really. Most chatbots follow a script - they're limited, reactive, and often frustrating. Our personas, on the other hand, are built to carry real conversations. They understand emotional cues, respond in the right tone, and guide the conversation instead of just reacting to it.</p>

                                    <p className="text-gray-700 leading-relaxed mt-4">It's not about faking being human, it's about creating a better experience.</p>
                                </div>

                                <div className="mt-14 mb-8">
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">What's Augmented About It?</h3>
                                    <p className="text-gray-700 leading-relaxed">The "augmented" part means that businesses aren't just plugging in a generic model and hoping for the best. We work with them to shape how their AI sounds, feels, and interacts so it fits their brand, their customers, and the kind of experience they actually want to offer.</p>

                                    <p className="text-gray-700 leading-relaxed mt-4">You don't need to train a model from scratch. You bring the model, we bring the voice.</p>
                                </div>

                                <div className="mt-14 mb-8">
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Why Does It Matter?</h3>
                                    <p className="text-gray-700 leading-relaxed">When customers feel like they're being heard, they stay longer, trust more, and need less support overall. And when the AI is doing its job well, your human team can focus on higher-level work or, in some cases, you can run entire interactions without needing a person at all.</p>
                                </div>

                                <div className="mt-14 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 relative">
                                        <span className="absolute -left-4 top-0 bottom-0 w-1 bg-theme-main rounded-full"></span>
                                        How Our Personas Integrate With Your Existing Systems
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">One of the biggest questions we get is "Will this work with the platforms we already use?"<br />
                                        Short answer: yes.</p>

                                    <p className="text-gray-700 leading-relaxed mt-4">ChitChat doesn't require you to rebuild your setup or change what's already working. We build AI personas that plug into your current systems, not ones that demand a whole new way of doing things.</p>
                                </div>

                                <div className="mt-14 mb-8">
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Our Personas are Built to Fit, Not to Replace Everything</h3>
                                    <p className="text-gray-700 leading-relaxed">Whether you're using Zendesk, Freshdesk, Intercom, WhatsApp, or your own internal tools, our AI can be integrated to work alongside your team.</p>

                                    <p className="text-gray-700 leading-relaxed mt-4">The integration process depends on your systems, but the goal is always the same:<br />
                                        Get the persona live, fast, and functioning exactly where your customers are.</p>
                                </div>

                                <div className="mt-14 mb-8">
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">What Does the AI Actually See?</h3>
                                    <p className="text-gray-700 leading-relaxed">Our AI personas don't need access to all your data to do their job. They only connect to what they need, like basic customer information, conversation history, or specific knowledge bases so they can respond with context and accuracy.</p>

                                    <p className="text-gray-700 leading-relaxed mt-4">You stay in control of what's shared, what's stored, and how the AI is allowed to respond.</p>
                                </div>

                                <div className="my-12 p-6 bg-yellow-50 rounded-lg pb-24">
                                    <h2 className="text-xl font-semibold text-yellow-700 mb-3">The Founder's Voice</h2>

                                    <h3 className="text-lg font-medium text-yellow-800 mt-4 mb-2">Why I Started ChitChat</h3>
                                    <p>I didn't come from a tech background. I studied psychology because I've always been interested in how people think, how they communicate, and what makes conversations actually work.</p>
                                    <p className="mt-3">So, when I started looking into AI and customer service, it hit me pretty quickly:<br />
                                        Most of these systems don't understand people at all.</p>
                                    <p className="mt-3">They respond fast, but they don't actually connect. They handle basic questions, but they don't handle tone, frustration, or nuance - the things that actually matter in a real conversation.</p>
                                    <p className="mt-3">That's where the idea for ChitChat started.</p>

                                    <h3 className="text-lg font-medium text-yellow-800 mt-4 mb-2">What I Wanted to Build</h3>
                                    <p>I wanted to create AI that didn't sound like AI. Something that could talk to people the way a good support agent would - calm when it needs to be, warm when it helps, and direct when it matters.</p>
                                    <p className="mt-3">I wasn't trying to create the most technical product. I wanted to create the most human one. And I knew that meant starting with personality, tone, and emotional awareness, not just functionality.</p>

                                    <h3 className="text-lg font-medium text-yellow-800 mt-4 mb-2">Where We're Headed</h3>
                                    <p>ChitChat is still growing. We're building new personas, improving the way they interact, and making it easier for businesses to plug in voices that actually sound like they belong.</p>
                                    <p className="mt-3">We're not trying to copy human agents. We're building AI that's smart, clear, and emotionally aware, so it can hold real conversations when it counts.</p>
                                    <p className="mt-3">And the best part is, this is just the beginning.</p>
                                </div>

                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section
                id="cta"
                className="relative py-16 px-6 sm:px-10 text-white bg-cover bg-center scroll-review"
                style={{ backgroundImage: "url('/solutionsPage/solutions.jpg')" }}
            >
                {/* Overlay for readability - also extended higher */}
                <div className="absolute inset-0 z-0 bg-white/90 -top-24" />

                <motion.div
                    className="relative z-20 max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 whitespace-pre-line">
                        Ready to Elevate Your Business?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed p-6">
                        Discover how ChitChat can transform your customer experience with tailored AI solutions.
                    </p>
                    <div className="flex justify-center gap-6 mt-8">
                        <Link
                            to="/contact-us"
                            className="px-6 py-3.5 rounded-lg bg-white/90 backdrop-blur text-theme-main border border-purple-200 
                             font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/30
                             hover:transform hover:scale-105 hover:bg-white/100 flex items-center gap-2 group"
                        >
                            <span className="opacity-80 group-hover:opacity-100">Contact Us</span>

                        </Link>
                        <Link
                            to="/book-call"
                            className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white 
                             font-medium text-base shadow-md shadow-purple-300/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/40
                             hover:transform hover:scale-105 flex items-center gap-2 group"
                        >

                            <span>Book a Call</span>
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </>
    );
};

export default VisionBoard;
