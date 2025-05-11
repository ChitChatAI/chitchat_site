import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X, Cookie } from 'lucide-react'; 
import { motion, useAnimation } from 'framer-motion';
import Navbar from '../components/NavBar';  
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import CookieConsent from '../components/CookieConsent';
import { initCustomCursor } from '../utils/cursorEffects';

const ForBusinesses: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null); // Track active section
  const fullText = "AI That Fits Seamlessly\nInto Your Operations";
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isHomePage = location.pathname === '/';
  
  // Add Pricing related states
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const controls = useAnimation();

  useEffect(() => {
      const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);

          // Update active section based on scroll position
          const sections = ['hero', 'use-cases', 'features', 'value', 'pricing'];
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                setActiveSection(section);
                break;
              }
            }
          }
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

  // Function to handle video loading
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  // Load video after component mount with delay to prioritize other content
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.src = "/businessesPage/businessVideo.mp4";
        videoRef.current.load();
      }
    }, 300); // Short delay to let the page render first
    
    return () => clearTimeout(timer);
  }, []);

  // Add FAQ toggle function for pricing section
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Add pricing plans data
  const plans = [
    {
      name: 'Persona Development',
      description: 'One-time setup of a brand-aligned, production-ready AI persona.',
      price: '$20,000',
      frequency: 'once-off',
      features: [
        'Persona research & scripting',
        'Brand tone & voice customization',
        'Prompt testing & handoff',
      ],
      button: 'Start Development',
      icon: 'design_services',
    },
    {
      name: 'Integration & Deployment',
      description: '3-month rollout with technical and strategic onboarding.',
      price: '$5,000',
      frequency: '/month (x3)',
      features: [
        'Seamless API integration support',
        'Launch & testing support',
        'Weekly iteration and feedback',
      ],
      button: 'Start Integration',
      icon: 'integration_instructions',
    },
    {
      name: 'Maintenance',
      description: 'Ongoing updates, model tuning, and performance monitoring.',
      price: '$500',
      frequency: '/month (x21)',
      features: [
        'Model & persona updates',
        'Usage monitoring and insights',
        'Ongoing optimization support',
      ],
      button: 'Contact Sales',
      icon: 'settings',
    },
  ];

  // Add pricing FAQs
  const faqs = [
    {
      question: 'Do you offer custom pricing for multiple personas?',
      answer: 'Yes. We offer volume discounts and enterprise bundling — contact us for details.',
    },
    {
      question: 'Can we pause or delay the maintenance phase?',
      answer: 'Maintenance is flexible. We\'ll work with your roadmap to adapt timing.',
    },
    {
      question: 'Can we bring our own model or infrastructure?',
      answer: 'Yes, our personas work with any LLM — you can use your own OpenAI key or infra.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We specialize in industries like healthcare, finance, e-commerce, and telecoms, but our solutions are adaptable to any sector.',
    },
    {
      question: 'How long does it take to develop a persona?',
      answer: 'Persona development typically takes 4-6 weeks, depending on the complexity and requirements.',
    }
  ];

  useEffect(() => {
    const cleanupCursor = initCustomCursor();
    return () => cleanupCursor();
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Side Navigation Dots for sections */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
          {['hero', 'use-cases', 'features', 'value', 'pricing'].map((section) => (
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

      <main className="font-satoshi">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="relative min-h-screen flex items-center justify-center text-white px-6 sm:px-10 lg:px-20"
          initial="hidden"
          animate="visible"
          variants={scrollAnimation}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Video background - enhanced with progressive loading */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 z-0">
            {/* Placeholder image shown while video loads */}
            <img 
              src="/businessesPage/BusinessBG.png" 
              alt="Business Background"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
            />
            
            {/* Video with improved loading */}
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onLoadedData={handleVideoLoaded}
              onCanPlay={handleVideoLoaded}
              disablePictureInPicture={true}
              disableRemotePlayback={true}
              controlsList="nodownload nofullscreen noremoteplayback"
              style={{ 
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                WebkitAppearance: 'none',
              }}
              poster="/businessesPage/BusinessBG.png"
            ></video>
            
            {/* Loading indicator */}
            {!videoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>

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
                className="scroll-review opacity-0 transform translate-y-6 text-white font-header font-extrabold text-[clamp(2.5rem,6vw,4rem)] leading-[150%] tracking-tight sm:leading-[1.4] animate-fade-in delay-100 drop-shadow-lg min-h-[4rem] transition-all duration-700"
              >
                {headerText && headerText.split('\n').map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </h2>
            </div>
            <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto mb-16 font-satoshi text-white/90">
              We provide AI solutions that seamlessly integrate into your business operations, enhancing customer engagement and driving results.
            </p>
          </div>
        </motion.section>

        {/* Use Cases Section */}
        <section
          id="use-cases"
          className="relative py-20 px-6 sm:px-10 lg:px-20"
        >
          <div className="relative z-20 max-w-7xl mx-auto">
            <h2 className="scroll-review opacity-0 transform translate-y-6 text-gray-900 font-header font-extrabold text-[clamp(2.5rem,5vw,3rem)] leading-[140%] tracking-tight text-center mb-12 transition-all duration-700">
              Use Cases
            </h2>
            <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20 ml-6 md:ml-10 lg:ml-16 neural-timeline">
              {useCases.map((useCase, index, arr) => (
                <div key={index} className="relative">
                  {/* Enhanced neural dot */}
                  <span className="absolute -left-[42px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md neural-timeline-dot hover:scale-110 transition-all"></span>
                  <h3 className="font-header text-2xl font-bold text-theme-main mb-3">{useCase.title}</h3>
                  <p className="text-base text-gray-700 font-satoshi leading-relaxed mb-2">{useCase.description}</p>
                  {/* Add subtle divider line */}
                  {index < arr.length - 1 && (
                    <div className="w-16 h-0.5 bg-gradient-to-r from-theme-main/20 to-transparent mt-8 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features  Section */}
        <section
          id="features"
          className="relative px-6 sm:px-10 bg-gradient-to-b from-gray-50 to-gray-100"
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
        <section id="value" className="relative py-32 px-6 sm:px-10 lg:px-20 border-t border-gray-100">
          <motion.div
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
            }}
          >
            <h3 className="scroll-review text-4xl font-bold text-center text-theme-main mb-20">
              How ChitChat Adds Value to Your Business
            </h3>

            <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20">
              {businessValues.map((item, index) => (
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
                    <p className="text-sm text-theme-main font-bold uppercase tracking-wider mb-2">{item.metric}</p>
                    <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* What's Included Section */}
        <section id="whats-included" className="relative bg-white py-32 px-6 border-t border-gray-100">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
            }}
          >
            <h3 className="scroll-review text-4xl font-bold text-center text-theme-main mb-20">
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
          </motion.div>
        </section>

        {/* Simplified Pricing Section - More elegant styling */}
        <section id="pricing" className="relative bg-gray-50 py-24 px-6 sm:px-10 lg:px-20">
          {/* Background image - extended higher with negative top positioning */}
          <div 
            className="absolute inset-0 z-0 -top-24 bg-fixed animate-fade-in" 
            style={{
              backgroundImage: 'url("/solutionsPage/solutions.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          
          {/* Overlay for readability - also extended higher */}
          <div className="absolute inset-0 z-0 bg-white/80 -top-24"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-theme-main/10 text-theme-main text-xs font-medium rounded-full mb-3">
                Pricing
              </span>
              <h2 className="text-4xl font-header font-bold text-gray-900 mb-4">
                Transparent Pricing That Scales
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-satoshi">
                Clear, phase-based pricing with no surprises. Choose the package that fits your business needs.
              </p>
            </div>
            
            {/* Refined Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  className={`relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 ${
                    idx === 1 ? 'scale-105 z-10' : 'scale-100'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.7 }}
                >
                  {idx === 1 && (
                    <div className="absolute top-0 left-0 w-full bg-theme-main text-white text-xs py-1.5 px-3 text-center font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8 flex flex-col h-full">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md ${
                          idx === 0 ? 'bg-purple-100 text-purple-500' : idx === 1 ? 'bg-theme-main/10 text-theme-main' : 'bg-green-100 text-green-500'
                        }`}
                      >
                        <span className="material-symbols-outlined text-3xl">{plan.icon}</span>
                      </div>
                      <h3 className="ml-4 text-xl font-semibold text-gray-800">{plan.name}</h3>
                    </div>

                    {/* Price and Frequency */}
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.frequency}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700 text-sm">
                          <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                            <span className="material-symbols-outlined text-theme-main text-sm">
                              check_circle
                            </span>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Call-to-Action Button */}
                    <div className="mt-auto">
                      <button
                        className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                          idx === 1
                            ? 'bg-theme-main hover:bg-theme-dark text-white hover:shadow-lg'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800 hover:shadow'
                        }`}
                      >
                        {plan.button}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center text-center text-gray-500 text-sm">
              <p>Need a custom solution?</p>
              <Link to="/contact-us" className="animated-link text-theme-main font-medium ml-1 hover:underline">
                Contact our sales team
              </Link>
            </div>
          </div>

          {/* Curved Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
              <path d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Pricing FAQ Section */}
        <section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  >
                    <h3 className="font-medium text-gray-800 text-base">
                      {faq.question}
                    </h3>
                    <span
                      className={`material-symbols-outlined text-gray-400 transition-transform duration-300 ${
                        openFAQ === idx ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  
                  <div
                    className={`transition-all duration-300 ${
                      openFAQ === idx ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <CallToAction bgImage="/solutionsPage/solutions.jpg" />

        {/* Cookie Policy Floating Button */}
        <CookieConsent position="left" modalPosition="bottom" />

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
          
          @keyframes float {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          }

          .animate-float-slow {
            animation: float 8s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-fast {
            animation: float 4s ease-in-out infinite;
          }
          
          .bg-grid-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
          `}
        </style>
      </main>
      <Footer />
    </>
  );
};

export default ForBusinesses;

