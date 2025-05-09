import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X, Cookie } from 'lucide-react'; 
import { motion} from 'framer-motion';
import Navbar from '../components/NavBar';  
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import CookieConsent from '../components/CookieConsent';

const ForBusinesses: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  // Removed menuOpen state
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);
  const fullText = "AI That Fits Seamlessly\nInto Your Operations";
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
      const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll); 
  }, []);


  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setHeaderText(fullText.substring(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 50);
    return () => clearInterval(typingInterval);
  }, [fullText]);

  useEffect(() => {
    const handleScroll = () => {
      // Remove scroll animation logic
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const includedFeatures = [
    { title: 'Custom Persona Design', description: 'Psychology-driven personas that understand emotional nuance.' },
    { title: 'Tone & Personality Development', description: 'Carefully crafted voices that match your brand identity.' },
    { title: 'Industry-Specific Adaptation', description: 'Tailored knowledge base for your business vertical.' },
    { title: 'Integration Support', description: 'Works with your existing tech stack (chat, WhatsApp, voice, etc.).' },
    { title: 'Developer Collaboration', description: 'We work with your team or provide our own technical experts.' },
    { title: 'Continuous Improvements', description: 'Regular updates based on conversation data and feedback.' },
    { title: 'Human Testing & QA', description: 'Rigorous quality assurance by our psychology specialists.' }
  ];

  const businessValues = [
    {
      title: 'Reduce Support Costs',
      description: 'Replace call center agents or scale your operations without new hires.',
      icon: 'savings',
      metric: 'Up to 40% cost reduction',
    },
    {
      title: 'Boost Retention & Upsells',
      description: 'Drive revenue through nuanced conversations, not generic sales scripts.',
      icon: 'trending_up',
      metric: '20% increase in customer retention',
    },
    {
      title: 'Save Valuable Time',
      description: 'No writing prompts or managing AI yourself - we handle everything.',
      icon: 'schedule',
      metric: '30% faster response times',
    },
    {
      title: 'Gain Competitive Edge',
      description: 'Stand out by offering truly believable AI support before your competitors.',
      icon: 'workspace_premium',
      metric: '15% higher customer satisfaction',
    },
    {
      title: 'Improve Customer Experience',
      description: 'Create human-like interactions that feel personal and emotionally intelligent.',
      icon: 'sentiment_satisfied',
      metric: '95% positive feedback from users',
    },
  ];

  const useCases = [
    {
      title: 'Instant Support That Feels Personal',
      description:
        'No more long wait times or robotic replies. Our AI personas handle customer queries immediately, 24/7, while sounding human, warm, and helpful.',
    },
    {
      title: 'Customer Retention, Reinvented',
      description:
        'Catch cancellations before they happen. Our AI personas are trained in subtle psychological techniques to calm, connect, and convince.',
    },
    {
      title: 'Humanised Automation for Every Department',
      description:
        'From tech support to billing, we tailor the tone. Each persona is custom-built to match your brand and department needs.',
    },
    {
      title: 'Never Sound Generic Again',
      description:
        'Say goodbye to copy-paste chatbot templates. ChitChat personas are deeply humanised, each with unique quirks, tone, and emotional intelligence.',
    },
    {
      title: 'Custom Chatbots for Any Industry',
      description:
        'Whether you\'re in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.',
    },
  ];

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Removed setMenuOpen(false) line
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
      {/* Navigation Bar */}
      <Navbar />
      
      <main className="font-satoshi">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="relative min-h-screen flex items-center justify-center text-white opacity-0 transition-opacity duration-700 overflow-x-hidden"
          initial="hidden"
          animate="visible"
          variants={scrollAnimation}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Video background - enhanced for mobile */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture={true}
            disableRemotePlayback={true}
            controlsList="nodownload nofullscreen noremoteplayback"
            style={{ 
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              WebkitAppearance: 'none',
            }}
            poster="/businessesPage/BusinessBG.png" // Fallback image
            src="/businessesPage/businessVideo.mp4"
          ></video>

          {/* PURPLISH GLASS OVERLAY */}
          <div className="absolute inset-0 border border-white/10 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.1)] z-10" />
          <div className="absolute inset-0 z-20 bg-[#260a40]/30 backdrop-blur-[5px]" />
         {/* Purple fog overlay from bottom to top */}
         <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-purple-400/20 to-transparent z-10 pointer-events-none" />


          {/* Content */}
          <div className="relative z-30 text-center px-6">
            <div className="h-32 flex items-center justify-center mb-6">
              <h2
                ref={headerRef}
                className="scroll-review opacity-0 transform translate-y-6 text-white font-header font-extrabold text-[clamp(2rem,6vw,3.25rem)] leading-[150%] tracking-tight sm:leading-[1.4] animate-fade-in delay-100 drop-shadow-lg min-h-[4rem] transition-all duration-700"
              >
                {headerText && headerText.split('\n').map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </h2>
            </div>
            <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto mb-16 font-satoshi text-white/90">
              We provide AI solutions that seamlessly integrate into your business operations, enhancing customer engagement and driving results.
            </p>
            <div className="absolute bottom- left-1/2 transform -translate-x-1/2 animate-bounce z-20">
              <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
            </div>
          </div>
        </motion.section>

        {/* Use Cases Section - Neural Dot Timeline Style */}
        <section
          id="use-cases"
          className="relative py-20 px-6 sm:px-10 bg-gradient-to-b from-gray-50 to-gray-100"
        >
          <div className="relative z-20 max-w-7xl mx-auto">
            <h2 className="scroll-review opacity-0 transform translate-y-6 text-gray-900 font-header font-extrabold text-[clamp(2rem,5vw,2.5rem)] leading-[140%] tracking-tight text-center mb-12 transition-all duration-700">
              Use Cases
            </h2>
            <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20 ml-6 md:ml-10">
              {useCases.map((useCase, index, arr) => (
                <div key={index} className="relative">
                  {/* Main neural dot */}
                  <span className="absolute -left-[42px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md"></span>
                  <h3 className="font-header text-2xl font-bold text-theme-main mb-3">{useCase.title}</h3>
                  <p className="text-base text-gray-700 font-satoshi leading-relaxed mb-2">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features  Section */}
        <section
          id="features"
          className="relative px-6 sm:px-10 bg-gradient-to-b from-gray-50 to-gray-100 scroll-review opacity-0 transition-opacity duration-700"
        >
          <motion.div
            className="relative z-20 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollAnimation}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >

          </motion.div>
        </section>

        {/* Business Values Section */}
        <section id="value" className="relative py-32 px-6 border-t border-gray-100 bg-white">
          <motion.div
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollAnimation}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="scroll-review opacity-0 transform translate-y-6 text-4xl font-bold text-center text-gray-900 mb-20 transition-all duration-700">
              How ChitChat Adds Value to Your Business
            </h3>

            <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20">
              {[
                {
                  title: 'Reduce Support Costs',
                  stat: 'Up to 40% cost reduction',
                  text: 'Replace call center agents or scale your operations without new hires.',
                },
                {
                  title: 'Boost Retention & Upsells',
                  stat: '20% increase in customer retention',
                  text: 'Drive revenue through nuanced conversations, not generic sales scripts.',
                },
                {
                  title: 'Save Valuable Time',
                  stat: '30% faster response times',
                  text: 'No writing prompts or managing AI yourself – we handle everything.',
                },
                {
                  title: 'Gain Competitive Edge',
                  stat: '15% higher customer satisfaction',
                  text: 'Stand out by offering truly believable AI support before your competitors.',
                },
                {
                  title: 'Improve Customer Experience',
                  stat: '95% positive feedback from users',
                  text: 'Create human-like interactions that feel personal and emotionally intelligent.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative scroll-review opacity-0 transform translate-y-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={itemAnimation}
                >
                  <span className="absolute -left-[14px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md transition-transform hover:scale-125"></span>
                  <div className="ml-4">
                    <h4 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-theme-main font-bold uppercase tracking-wider mb-2">{item.stat}</p>
                    <p className="text-base text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* What's Included Section */}
        <section id="whats-included" className="relative bg-white py-32 px-6 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="scroll-review opacity-0 transform translate-y-6 text-4xl font-bold text-center text-gray-900 mb-20 transition-all duration-700">
              What’s Included in Every ChitChat Package
            </h3>

            <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20">
              {[
                {
                  title: "Tailored Persona Design",
                  text: "We craft unique AI personas that reflect your brand’s tone, language, and culture — from casual to corporate.",
                },
                {
                  title: "LLM Integration & API Setup",
                  text: "Your assistant plugs directly into your systems with full OpenAI integration, API keys, and SDKs if needed.",
                },
                {
                  title: "Admin Dashboard Access",
                  text: "Monitor interactions, gather insights, and refine responses with our analytics-ready backend.",
                },
                {
                  title: "Ongoing Fine-Tuning",
                  text: "We continually refine your AI based on live feedback, user behavior, and your evolving business needs.",
                },
                {
                  title: "Multichannel Support",
                  text: "Deploy on web, WhatsApp, or your mobile app. Seamless UX across platforms.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative scroll-review opacity-0 transform translate-y-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={itemAnimation}
                >
                  <span className="absolute -left-[14px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md transition-transform hover:scale-125"></span>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-2 ml-4">{item.title}</h4>
                  <p className="text-base text-gray-600 max-w-2xl leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <CallToAction bgImage="/solutionsPage/solutions.jpg" />

        {/* Cookie Policy Floating Button - Left Side */}
        <CookieConsent position="left" modalPosition="bottom" />

        {/* Add animation keyframes for both entrance and exit */}
        <style>
          {`
          @keyframes slideUp {
              from { transform: translateY(100%); }
              to { transform: translateY(0); }
          }
          
          @keyframes slideDown {
              from { transform: translateY(0); }
              to { transform: translateY(100%); }
          }
          `}
        </style>
      </main>
      <Footer />
    </>
  );
};

export default ForBusinesses;

