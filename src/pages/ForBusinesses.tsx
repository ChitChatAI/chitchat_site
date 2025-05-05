import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X, Cookie } from 'lucide-react'; // Removed Menu icon import
import { motion, useAnimation } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ForBusinesses: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  // Removed menuOpen state
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);
  const fullText = "AI That Fits Seamlessly\nInto Your Operations";
  const headerRef = useRef<HTMLHeadingElement>(null);
  const controls = useAnimation();

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
      const elements = document.querySelectorAll('.scroll-review');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate-slide-up');
        } else {
          el.classList.remove('animate-slide-up'); // Reapply animation when scrolling back
        }
      });
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
      <NavBar />
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
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg min-h-[4rem]"
              >
                {headerText && headerText.split('\n').map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </h2>
            </div>
            <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto mb-16">
              We provide AI solutions that seamlessly integrate into your business operations, enhancing customer engagement and driving results.
            </p>
            <div className="absolute bottom- left-1/2 transform -translate-x-1/2 animate-bounce z-20">
              <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
            </div>
          </div>
        </motion.section>

        <section
          id="use-cases"
          className="relative py-20 px-6 sm:px-10 bg-gradient-to-b from-gray-50 to-gray-100 scroll-review opacity-0 transition-opacity duration-700"
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
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-800">
              Use Cases
            </h2>

            <div className="hidden sm:grid grid-cols-12 gap-12">
              {/* Top Row (2 cols) */}
              {useCases.slice(0, 2).map((useCase, index) => (
                <motion.div
                  key={index}
                  className="col-span-6 text-center p-6 relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-theme-main mb-4">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </motion.div>
              ))}

              {/* Middle (1 col full) */}
              <motion.div
                className="col-span-12 text-center p-6 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-theme-main mb-4">{useCases[2].title}</h3>
                <p className="text-gray-600">{useCases[2].description}</p>
              </motion.div>

              {/* Bottom Row (2 cols) */}
              {useCases.slice(3).map((useCase, index) => (
                <motion.div
                  key={index + 3}
                  className="col-span-6 text-center p-6 relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.15 }}
                >
                  <h3 className="text-2xl font-semibold text-theme-main mb-4">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Mobile Stack (below sm breakpoint) */}
            <div className="sm:hidden flex flex-col gap-12">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="text-center p-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold text-theme-main mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h3 className="text-4xl font-bold text-center text-gray-900 mb-20 scroll-review opacity-0 transform translate-y-10">
              How ChitChat Adds Value to Your Business
            </h3>

            <div className="relative border-l-2 border-dotted border-purple-500 pl-12 space-y-20">
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
                  <span className="absolute -left-[14px] top-1 w-4 h-4 bg-purple-600 border-4 border-white rounded-full shadow-md transition-transform hover:scale-125"></span>
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
            <h3 className="text-4xl font-bold text-center text-gray-900 mb-20 scroll-review opacity-0 transform translate-y-10">
              What’s Included in Every ChitChat Package
            </h3>

            <div className="relative border-l-2 border-dotted border-purple-500 pl-12 space-y-20">
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
                  <span className="absolute -left-[14px] top-1 w-4 h-4 bg-purple-600 border-4 border-white rounded-full shadow-md transition-transform hover:scale-125"></span>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-2 ml-4">{item.title}</h4>
                  <p className="text-base text-gray-600 max-w-2xl leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
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

        {/* Cookie Policy Floating Button - Left Side */}
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

          {/* Cookie Policy Modal */}
          {cookiePolicyOpen && (
            <div 
              className="fixed inset-x-0 mx-auto bottom-0 bg-white shadow-lg rounded-t-lg p-6 w-full sm:w-[500px] max-h-[90vh] overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out"
              style={{ 
                transform: isModalExiting ? 'translateY(100%)' : 'translateY(0)',
                animation: isModalExiting ? 'slideDown 0.3s ease-out forwards' : 'slideUp 0.3s ease-out forwards'
              }}
            >
              {/* ChitChat logo */}
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

