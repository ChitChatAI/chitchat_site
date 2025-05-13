import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../components/purpleNavBar';
import Footer from '../components/Footer';
import Lottie from 'lottie-react';
import { ChevronDown, X, Cookie } from 'lucide-react';
import { motion } from 'framer-motion';
import customerService from '../assets/lottie/customerService.json';
import sales from '../assets/lottie/sales.json';
import healthcare from '../assets/lottie/healthCare.json';
import education from '../assets/lottie/education.json';
import CallToAction from '../components/CallToAction';
import CookieConsent from '../components/CookieConsent';
import { initCustomCursor } from '../utils/cursorEffects';
import SideNavigationDots from '../components/SideNavigationDots';

const Solutions: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxElements = useRef<HTMLElement[]>([]);
  const [headerText, setHeaderText] = useState('');
  const fullText = "Built for Every Business.\nDesigned to Feel Human.";
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        parallaxElements.current.forEach((el) => {
          const speed = parseFloat(el.getAttribute('data-speed') || '0.2');
          const yPos = -(scrollPosition * speed);
          el.style.transform = `translateY(${yPos}px)`;
        });
      });
    };

    if (parallaxRef.current) {
      parallaxElements.current = Array.from(document.querySelectorAll('.parallax-element'));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const typingInterval = setInterval(() => {
        setHeaderText(fullText.substring(0, i + 1));
        i++;

        if (i > fullText.length) {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    } else {
      setHeaderText('');
    }
  }, [isVisible, fullText]);

  const getLottie = (title: string) => {
    switch (title) {
      case 'Telecommunications':
        return customerService;
      case 'E-Commerce':
        return sales;
      case 'Healthcare':
        return healthcare;
      case 'Education & Online Learning':
        return education;
      default:
        return customerService;
    }
  };

  const solutionCategories = [
    {
      title: 'Telecommunications',
      description: 'Handle network support, router setup, billing queries, and cancellations — all through emotionally aware AI that actually listens.',
      features: [
        '24/7 emotionally responsive support',
        'Seamless handoff to human agents',
        'Context-aware conversation history',
      ],
      animationClass: 'animate-slide-in-left',
    },
    {
      title: 'E-Commerce',
      description: 'Convert more browsers into buyers with AI that feels like a helpful, friendly shopping assistant — available 24/7.',
      features: [
        'Qualified lead generation',
        'Personalized product recommendations',
        'Consistent brand voice and messaging',
      ],
      animationClass: 'animate-slide-in-right',
    },
    {
      title: 'Healthcare',
      description: 'Support appointment booking, patient onboarding, medical FAQs, and follow-ups with a calm, patient persona that builds trust.',
      features: [
        'Empathetic health guidance',
        'Medication and appointment reminders',
        'Wellness check-ins and monitoring',
      ],
      animationClass: 'animate-fade-in',
    },
    {
      title: 'Education & Online Learning',
      description: 'Provide tutoring, course navigation, enrollment support, and mental health check-ins — all with personalities that adapt to age and tone.',
      features: [
        'Adaptive learning pathways',
        'Personalized feedback and assessment',
        '24/7 learning support',
      ],
      animationClass: 'animate-slide-up',
    },
  ];

  const additionalSolutions = [
    {
      title: 'Insurance',
      text: "Guide customers through quotes, claims, and coverage with a conversational tone that feels more like a chat — not a form."
    },
    {
      title: 'Retail Banking & Fintech',
      text: "Help users understand features, resolve issues, and manage their accounts without confusion — friendly, fast, and secure."
    },
    {
      title: 'Startups & Small Businesses',
      text: "From MVP to product-market fit, scale support that feels human and agile — without adding headcount."
    },
    {
      title: 'Ride-Hailing & Logistics',
      text: "Support drivers and riders with real-time help, loyalty perks, and booking clarity — always responsive, never robotic."
    },
    {
      title: 'Travel & Hospitality',
      text: "Deliver concierge-style experiences with itinerary help, bookings, and travel advice — all with a calm, clear voice."
    },
    {
      title: 'Banking & Finance',
      text: "Clarify transactions, guide through loans, and help with disputes — with empathy, transparency, and data security."
    }
  ];

  const useCases = [
    {
      title: 'Customer Support Automation',
      description: 'Revolutionize your customer support with AI that understands and resolves issues 24/7, reducing response times and increasing satisfaction.'
    },
    {
      title: 'Sales Lead Qualification',
      description: 'Automatically qualify and prioritize leads based on engagement and intent, ensuring your sales team focuses on the right prospects.'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Streamline your scheduling process with AI that can book, reschedule, and send reminders for appointments, reducing no-shows and optimizing time.'
    },
    {
      title: 'Personalized Marketing Campaigns',
      description: 'Create dynamic, personalized marketing campaigns that adapt to user behavior and preferences, increasing engagement and conversion rates.'
    },
    {
      title: 'AI-Powered Tutoring',
      description: 'Offer on-demand tutoring support that adapts to individual learning styles and paces, providing a personalized education experience.'
    },
    {
      title: 'Healthcare Patient Engagement',
      description: 'Enhance patient engagement with AI that provides personalized health tips, medication reminders, and answers to medical queries.'
    },
  ];

  // Handle card hover effects
  const handleCardHover = (index: number | null) => {
    setActiveCategory(index);
  };

  // Handle modal closing with animation
  const handleCloseModal = () => {
    setIsModalExiting(true);
    setTimeout(() => {
      setCookiePolicyOpen(false);
      setIsModalExiting(false);
    }, 300);
  };

  useEffect(() => {
    const cleanupCursor = initCustomCursor();
    return () => cleanupCursor();
  }, []);

  return (
    <>
      <NavBar />
      
      {/* Side Navigation Dots */}
      <SideNavigationDots sections={['hero', 'categories', 'industries']} />

      <main ref={parallaxRef} className="relative z-10 overflow-hidden">
        <section id="hero" className="relative pt-48 pb-32 px-6 overflow-hidden">
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
          
          {/* Keep decorative elements but adjust opacity */}
          <div className="absolute top-0 -right-16 w-64 h-64 bg-theme-main/10 rounded-full filter blur-3xl animate-pulse-slow z-0"></div>
          <div className="absolute -top-20 -left-16 w-64 h-64 bg-purple-300/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000 z-0"></div>
          
          {/* Content Wrapper - adjusted text colors for better contrast against white overlay */}
          <motion.div
            className="relative z-10 max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Header Badge - adjusted for better visibility on white overlay */}
            <div className="inline-block mb-8 px-4 py-1 bg-theme-main/10 text-theme-main backdrop-blur-sm rounded-full text-sm font-medium animate-fade-in">
              Solutions for Every Industry
            </div>
            
            {/* Header & Intro - text colors adjusted for white overlay */}
            <div className="mb-24">
              <div className="h-32 flex items-center justify-center mb-8">
                <h2
                  ref={headerRef}
                  className="scroll-review text-5xl md:text-6xl font-bold text-gray-900 whitespace-pre-line leading-tight"
                >
                  {headerText}
                </h2>
              </div>
              
              <motion.p 
                className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Discover how our AI solutions can transform your business with human-like interactions 
                <span className="text-theme-main font-medium"> that engage, convert, and delight.</span>
              </motion.p>
              
              {/* Scrolling prompt - adjusted for white overlay */}
              <motion.div
                className="flex flex-col items-center justify-center mt-16 animate-bounce-gentle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <span className="text-sm text-gray-500 mb-2">Explore Solutions</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </motion.div>
            </div>

            {/* Category Cards - Keep existing enhanced styling */}
            <div id="categories" className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 text-left">
              {solutionCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className={`scroll-review bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden no-underline ${
                    activeCategory === index ? 'ring-2 ring-theme-main/30 transform scale-[1.02]' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.7 }}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={() => handleCardHover(null)}
                >
                  <div className="relative p-6 md:p-8 h-full flex flex-col">
                    {/* Category header */}
                    <div className="flex items-center mb-5 no-underline">
                      <div className="w-16 h-16 flex items-center justify-center mr-4 bg-theme-main/5 rounded-lg no-underline">
                        <Lottie
                          animationData={getLottie(category.title)}
                          loop
                          autoplay
                          style={{ height: '48px', width: '48px' }}
                          className="no-underline"
                        />
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent no-underline">
                        {category.title}
                      </h3>
                    </div>
                    
                      
                    
                    {/* Description */}
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed flex-grow no-underline">
                      {category.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                            <span className="material-symbols-outlined text-theme-main text-sm no-underline">
                              check_circle
                            </span>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Call to action */}
                    <div className="mt-auto pt-4">
                      <a
                        href="#"
                        className="group inline-flex items-center text-theme-main hover:text-theme-dark font-medium transition-colors duration-300 no-underline"
                      >
                        <span>Learn more</span>
                        <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Curved divider to next section */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
              <path d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </section>


        {/* Industries Section */}
        <section id="industries" className="relative bg-white py-32 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-20 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 bg-theme-main/10 text-theme-main text-xs font-medium rounded-full mb-3">
                Versatile Solutions
              </span>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">More Industries We Serve</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our AI solutions adapt to the specific needs of various industries, providing personalized experiences that feel human.
              </p>
            </motion.div>
            
            {/* Enhanced neural timeline */}
            <div className="relative neural-timeline">
              {/* Timeline line with animation */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-theme-main to-transparent neural-timeline-line"></div>
              
              <div className="ml-10 md:ml-16 space-y-24">
                {additionalSolutions.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, threshold: 0.2 }}
                    transition={{ delay: index * 0.1, duration: 0.7 }}
                  >
                    {/* Enhanced neural dot */}
                    <div className="absolute -left-[36px] md:-left-[42px] top-2 neural-dot-container">
                      <span className="neural-dot w-5 h-5 rounded-full bg-theme-main/80 flex items-center justify-center shadow-md shadow-theme-main/20 border-2 border-white">
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                      </span>
                    </div>
                    
                    {/* Content card with subtle glass effect */}
                    <div className="p-6 md:p-8 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                      <h4 className="text-2xl font-bold text-theme-main mb-3">{item.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{item.text}</p>
                      
                      {/* Subtle button */}
                      <a href="#" className="mt-4 inline-flex items-center text-sm text-theme-main hover:text-theme-dark font-medium group">
                        <span>Explore capabilities</span>
                        <svg 
                          className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Blurb under More Industries We Serve */}
            <motion.div
              className="mt-16 text-center relative overflow-hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium px-12 py-8 rounded-xl shadow-lg overflow-hidden">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-center"
                  initial={{ x: '100%' }}
                  animate={{ x: '-100%' }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Don’t see your industry? <span className="font-bold mx-2">ChitChat is flexible.</span> Our AI personas are fully customizable and can be tailored to any industry, tone, or role — even if it’s not listed here. If you’ve got a use case, we can build the voice for it.
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-20 rounded-xl pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
          
          {/* Background elements */}
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-100/20 filter blur-3xl opacity-50 z-0"></div>
          <div className="absolute -bottom-20 -left-40 w-64 h-64 rounded-full bg-theme-main/5 filter blur-3xl opacity-70 z-0"></div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="relative py-20 px-6 sm:px-10 lg:px-20 border-t border-gray-100">
          <div className="relative z-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-6 text-center">
              Use Cases
            </h2>
            <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20 ml-6 md:ml-10 lg:ml-16 neural-timeline">
              {useCases.map((useCase, index, arr) => (
                <div
                  key={index}
                  className="relative bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)',
                  }}
                >
                  {/* Modernized neural dot with uniform padding */}
                  <span className="absolute -left-[42px] top-1 p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center">
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                  </span>
                  <h3 className="font-header text-2xl font-bold text-theme-main mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-base text-gray-700 font-satoshi leading-relaxed mb-2">
                    {useCase.description}
                  </p>
                  {index < arr.length - 1 && (
                    <div className="w-16 h-0.5 bg-gradient-to-r from-theme-main/20 to-transparent mt-8 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Call To Action */}
        <CallToAction 
          bgImage="/solutionsPage/solutions.jpg" 
          showOverlay={true} 
          overlayOpacity={0.85}
        />

        {/* Cookie Policy Floating Button - Left Side */}
        <CookieConsent position="left" modalPosition="bottom" />

        {/* Animation keyframes and styles */}
        <style jsx global>{`
          /* Base animations */
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          
          @keyframes slideDown {
            from { transform: translateY(0); }
            to { transform: translateY(100%); }
          }
          
          /* Modern animations */
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.7; }
          }
          
          @keyframes bounce-gentle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          /* Apply animations */
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          
          .animate-float-slow {
            animation: float-slow 12s ease-in-out infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          
          .animate-bounce-gentle {
            animation: bounce-gentle 3s ease-in-out infinite;
          }
          
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          
          /* Neural timeline enhancements */
          .neural-timeline {
            position: relative;
          }
          
          .neural-timeline-line {
            opacity: 0;
            animation: growLine 1.5s ease-out forwards 0.5s;
          }
          
          @keyframes growLine {
            from { opacity: 0; height: 0; }
            to { opacity: 1; height: 100%; }
          }
          
          .neural-dot-container {
            position: relative;
            z-index: 10;
          }
          
          .neural-dot {
            transform: scale(0);
            animation: growDot 0.6s cubic-bezier(0.17, 0.67, 0.36, 1.5) forwards;
          }
          
          @keyframes growDot {
            from { transform: scale(0); }
            to { transform: scale(1); }
          }
          
          .neural-dot-container:hover .neural-dot {
            transform: scale(1.2);
            transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.36, 1.5);
          }
          
          /* Background grid pattern */
          .bg-grid-pattern {
            background-image: linear-gradient(to right, rgba(80, 36, 255, 0.05) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(80, 36, 255, 0.05) 1px, transparent 1px);
            background-size: 30px 30px;
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
};

export default Solutions;
