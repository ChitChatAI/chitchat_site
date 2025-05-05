import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Lottie from 'lottie-react';
import { ChevronDown, X, Cookie } from 'lucide-react'; // Added Cookie and X icons
import { motion } from 'framer-motion';

import customerService from '../assets/lottie/customerService.json';
import sales from '../assets/lottie/sales.json';
import healthcare from '../assets/lottie/healthCare.json';
import education from '../assets/lottie/education.json';

const Solutions: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxElements = useRef<HTMLElement[]>([]);
  const [headerText, setHeaderText] = useState('');
  const fullText = "Built for Every Business.\nDesigned to Feel Human.";
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false); // Added cookie policy state
  const [isModalExiting, setIsModalExiting] = useState(false); // Added state for animation

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
            entry.target.classList.add('animate-slide-up');
          } else {
            entry.target.classList.remove('animate-slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.scroll-review');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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

  return (
    <>
      <NavBar />
      <main ref={parallaxRef}>
        <section id="hero" className="relative py-40 px-6 overflow-hidden bg-white">
          {/* Background image - extended higher with negative top positioning */}
          <div 
            className="absolute inset-0 z-0 -top-24 bg-fixed animate-fade-in" 
            style={{
              backgroundImage: 'url("/solutionsPage/solutions.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Overlay for readability - also extended higher */}
          <div className="absolute inset-0 z-0 bg-white/80 -top-24" />

          {/* Content Wrapper */}
          <motion.div
            className="relative z-10 max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Header & Intro */}
            <div className="mb-20">
              <div className="h-32 flex items-center justify-center mb-6"> {/* Fixed height container */}
                <h2
                  ref={headerRef}
                  className="text-4xl md:text-5xl font-bold text-gray-900 whitespace-pre-line"
                >
                  {headerText}
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                ChitChat works for any business — from global enterprises to small startups — as long as you
                have access to a language model (LLM). Whether you're looking to integrate hyper-human customer
                support, automate sales flows, or retain users with emotionally intelligent conversations, we
                build AI personas that feel like real people — tailored to your goals.
              </p>
              <p className="mt-6 text-sm text-gray-500 italic">
                Note: ChitChat doesn't provide the LLM itself — we work on top of whatever model you use,
                whether that's OpenAI, Claude, or another provider.
              </p>
            </div>

            {/* Category Cards */}
            <div id="categories" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
              {solutionCategories.map((category, index) => (
                <div
                  key={index}
                  className={`scroll-review bg-white rounded-xl p-6 border border-gray-100 opacity-0 transform translate-y-10 hover:shadow-lg transition-all duration-300 ${category.animationClass}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 mr-4">
                      <Lottie
                        animationData={getLottie(category.title)}
                        loop
                        autoplay
                        style={{ height: '64px', width: '64px' }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-5">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="material-symbols-outlined text-theme-main text-sm mr-2">
                          check_circle
                        </span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-6 inline-block text-theme-main hover:text-theme-dark font-medium"
                  >
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Neural Dot Timeline Style Section */}
        <section id="industries" className="relative bg-white py-32 px-6 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-gray-900 mb-20 scroll-review opacity-0 transform translate-y-10">More Industries We Serve</h3>
            <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20">
              {additionalSolutions.map((item, index) => (
                <div key={index} className="relative scroll-review opacity-0 transform translate-y-10">
                  <span className="absolute -left-[14px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md"></span>
                  <h4 className="text-2xl font-semibold text-theme-main mb-2 ml-4">{item.title}</h4>
                  <p className="text-base text-gray-600 max-w-2xl leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
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

export default Solutions;
