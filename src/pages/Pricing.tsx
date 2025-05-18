import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { Cookie, X } from 'lucide-react';
import NavBar from '../components/NavBar';
import CallToAction from '../components/CallToAction';
import CookieConsent from '../components/CookieConsent';
import { initCustomCursor } from '../utils/cursorEffects';

const Pricing: React.FC = () => {
  const [headerText, setHeaderText] = useState("");
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);
  const controls = useAnimation();
  const fullText = "Transparent Pricing\nPrices that Scale with You";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      controls.start({ y: window.scrollY * 0.5 });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setHeaderText(fullText.substring(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 50);
    return () => clearInterval(typingInterval);
  }, [fullText]);

  const isPricingPage = location.pathname === '/pricing';

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

  const faqs = [
    {
      question: 'Do you offer custom pricing for multiple personas?',
      answer: 'Yes. We offer volume discounts and enterprise bundling — contact us for details.',
    },
    {
      question: 'Can we pause or delay the maintenance phase?',
      answer: 'Maintenance is flexible. We’ll work with your roadmap to adapt timing.',
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

  const handleCloseModal = () => {
    setIsModalExiting(true);
    setTimeout(() => {
      setCookiePolicyOpen(false);
      setIsModalExiting(false);
    }, 300); // Match animation duration
  };

  useEffect(() => {
    const cleanupCursor = initCustomCursor();
    return () => cleanupCursor();
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section with Overlay - UNCHANGED */}
      <section
        className="relative min-h-screen px-8 sm:px-12 lg:px-20 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/businessesPage/BusinessBG.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Purplish Glass Overlay */}
        <div className="absolute inset-0 border border-white/10 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.1)] z-10" />
        <div className="absolute inset-0 z-20 bg-[#260a40]/30 backdrop-blur-[5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-main/50 via-purple-400/20 to-transparent z-10 pointer-events-none" />
        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto">
          <h1 className="scroll-review opacity-0 transform translate-y-6 text-white font-header font-extrabold text-[clamp(2rem,6vw,3.25rem)] leading-[140%] tracking-tight sm:leading-[1.3] drop-shadow-lg mb-8 transition-all duration-700">
            <span className="block mb-4">Transparent Pricing</span>
            <span className="block mb-4">Prices that Scale with You</span>
            <span className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto mb-16 font-satoshi text-white/90">
              Choose the plan that fits your business needs and scale effortlessly.
            </span>
          </h1>
          <div className="absolute bottom- left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
          </div>
        </div>
      </section>
      {/* Pricing Hero Section */}
      <section
        id="pricing"
        className="relative bg-cover bg-center py-20 px-6 sm:px-10"
        style={{
          backgroundImage: "url('/pricingPage/pricingBg.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          {/* Removed the heading and description */}
        </div>
      </section>
      
      {/* Enhanced Pricing Section with Complex Visual Elements */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-10 lg:px-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-purple-100 mix-blend-multiply opacity-70 blur-3xl"></div>
          <div className="absolute top-60 right-10 w-72 h-72 rounded-full bg-indigo-100 mix-blend-multiply opacity-60 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-blue-50 mix-blend-multiply opacity-60 blur-3xl"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
          
          {/* Animated floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-theme-main/40 animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-theme-main/30 animate-float-medium"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-theme-main/50 animate-float-fast"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section heading with visual enhancement */}
          <div className="text-center mb-20 relative">
            <div className="hidden md:block absolute -top-14 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-transparent via-theme-main to-transparent"></div>
            <h2 className="scroll-review opacity-0 transform translate-y-6 text-4xl md:text-5xl font-header font-extrabold text-gray-900 mb-6 tracking-tight transition-all duration-700">
              <span className="inline-block relative">
                Our <span className="text-theme-main">Plans</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 138 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.45875C31.3333 1.9637 99.6667 -2.04921 137 9.97547" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-theme-main/30"></path>
                </svg>
              </span>
            </h2>
            <p className="relative text-gray-600 max-w-2xl mx-auto font-satoshi text-lg">
              Clear, phase-based pricing with no surprises.
              <span className="absolute -right-4 -top-4 text-5xl text-theme-main/10 font-serif">$</span>
            </p>
          </div>
          
          {/* Interactive comparison toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
              <button className="py-2 px-6 rounded-full bg-theme-main text-white font-medium text-sm">
                Standard Pricing
              </button>
              <button className="py-2 px-6 rounded-full text-gray-700 font-medium text-sm">
                Enterprise Options
              </button>
            </div>
          </div>

          {/* Complex 3D pricing cards with enhanced visuals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pricing-cards">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20 ml-6 md:ml-10"
              >
                <div className="relative">
                  <span className="absolute -left-[42px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full"></span>
                  <h3 className="text-2xl font-semibold text-theme-main mb-2">{plan.name}</h3>
                  <p className="text-base text-gray-600 max-w-3xl leading-relaxed">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Feature comparison teaser */}
          <div className="mt-16 text-center">
            <p className="text-gray-600">
              Not sure which plan is right for you?
              <a href="#" className="text-theme-main font-medium ml-1 border-b border-dashed border-theme-main/30">
                Compare all features
              </a>
            </p>
          </div>
        </div>
      </section>
      
      {/* Enhanced Payment Partners Section - Now more visually complex */}
      <section className="relative bg-white py-24 px-4 sm:px-10 lg:px-20 overflow-hidden border-t border-gray-100">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute left-0 top-0 h-full text-gray-50" viewBox="0 0 150 800" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,0 L150,0 Q100,400 150,800 L0,800 Z"></path>
          </svg>
          <svg className="absolute right-0 top-0 h-full text-gray-50" viewBox="0 0 150 800" fill="currentColor" preserveAspectRatio="none">
            <path d="M150,0 L0,0 Q50,400 0,800 L150,800 Z"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Section heading with subtle animation */}
          <div className="text-center mb-16 relative">
            <span className="inline-block text-xs font-semibold text-theme-main tracking-widest uppercase mb-2 animate-pulse">
              Trusted Worldwide
            </span>
            <h3 className="text-3xl font-header font-bold text-gray-800 mb-4">
              Secure Payment Processing
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've partnered with leading payment processors and financial institutions to provide secure, reliable payment options globally.
            </p>
            
            {/* Subtle animated line separator */}
            <div className="mt-6 relative h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gray-300 to-transparent">
              <div className="absolute h-1 w-12 bg-theme-main/30 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            </div>
          </div>
          
          {/* Payment processors section with enhanced styling */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {/* Payment Logos */}
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img 
                src="/payment-logos/visa.svg" 
                alt="Visa" 
                className="h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/visa-10.svg";
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img 
                src="/payment-logos/mastercard.svg" 
                alt="Mastercard" 
                className="h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/mastercard-2.svg";
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img 
                src="/payment-logos/amex.svg" 
                alt="American Express" 
                className="h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/american-express-1.svg";
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img 
                src="/payment-logos/paypal.svg" 
                alt="PayPal" 
                className="h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/paypal-2.svg";
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img 
                src="/payment-logos/stripe.svg" 
                alt="Stripe" 
                className="h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/stripe-4.svg";
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img 
                src="/payment-logos/apple-pay.svg" 
                alt="Apple Pay" 
                className="h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/apple-pay-2.svg";
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
          </div>
          
          {/* Enhanced Banking Partners Section */}
          <div className="mt-16 mb-6 text-center">
            <h4 className="text-base text-gray-500 font-medium uppercase tracking-wider mb-6">
              Trusted Banking Partners
            </h4>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-10">
              We work with leading financial institutions to ensure secure and reliable transactions for businesses of all sizes.
            </p>
          </div>
          
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-50 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
            
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center bg-gray-50 py-10 px-8 rounded-2xl shadow-sm border border-gray-100">
              {/* Banking Logos with enhanced presentation */}
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 transform hover:scale-105">
                <img 
                  src="/payment-logos/hsbc.svg" 
                  alt="HSBC" 
                  className="h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/hsbc-3.svg";
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 transform hover:scale-105">
                <img 
                  src="/payment-logos/barclays.svg" 
                  alt="Barclays" 
                  className="h-12 object-contain" 
                  onError={(e) => {
                    e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/barclays-12.svg";
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 transform hover:scale-105">
                <img 
                  src="/payment-logos/lloyds.svg" 
                  alt="Lloyds Banking Group" 
                  className="h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/lloyds-bank-2.svg";
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 transform hover:scale-105">
                <img 
                  src="/payment-logos/santander.svg" 
                  alt="Santander" 
                  className="h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/santander-bank.svg";
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
            </div>
            
            {/* South African Banking Partners */}
            <div className="mt-12 mb-6 text-center">
              <h4 className="text-base text-gray-500 font-medium uppercase tracking-wider mb-6">
                South African Banking Partners
              </h4>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-8">
                We've partnered with leading South African financial institutions to provide seamless local payment solutions.
              </p>
            </div>
            
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center bg-gray-50 py-10 px-8 rounded-2xl shadow-sm border border-gray-100">
              {/* South African Banking Logos */}
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 transform hover:scale-105">
                <img 
                  src="/payment-logos/standard-bank.svg" 
                  alt="Standard Bank" 
                  className="h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/standard-bank-of-south-africa-logo.svg";
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 transform hover:scale-105">
                <img 
                  src="/payment-logos/fnb.svg" 
                  alt="First National Bank" 
                  className="h-12 object-contain" 
                  onError={(e) => {
                    e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/fnb-first-national-bank.svg";
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 transform hover:scale-105">
                <img 
                  src="/payment-logos/nedbank.svg" 
                  alt="Nedbank" 
                  className="h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/nedbank-1.svg";
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 transform hover:scale-105">
                <img 
                  src="/payment-logos/absa.svg" 
                  alt="ABSA Bank" 
                  className="h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://cdn.worldvectorlogo.com/logos/absa-group-limited-logo.svg";
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3">
                <span className="text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-600">256-bit SSL Encryption</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="text-sm text-gray-500">All transactions are secure and encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Advanced FAQ Section */}
      <section className="relative bg-gray-50 py-24 px-4 sm:px-10 lg:px-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2V6h4V4h-4zM0 34v-4H2v4h4v2H2v4H0v-4zm0-30V0H2v4h4v2H2v4H0V6h4V4H0z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        {/* Custom decorative elements */}
        <div className="absolute right-10 top-10 w-40 h-40 bg-purple-50 rounded-full mix-blend-multiply blur-3xl"></div>
        <div className="absolute left-10 bottom-10 w-60 h-60 bg-blue-50 rounded-full mix-blend-multiply blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-theme-main/10 text-theme-main text-xs font-medium rounded-full mb-3">
              Got Questions?
            </span>
            <h2 className="text-4xl font-header font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              If you can't find what you're looking for, please
              <Link to="/contact" className="text-theme-main font-medium mx-1 hover:underline">
                contact our team
              </Link>
              for assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-gradient-to-r from-gray-50 to-white"
                >
                  <h4 className="font-header font-semibold text-gray-800 pr-8">
                    {faq.question}
                  </h4>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 transition-colors duration-300 ${
                    openFAQ === idx ? 'bg-theme-main border-theme-main' : ''
                  }`}>
                    <span className={`material-symbols-outlined text-sm ${
                      openFAQ === idx ? 'text-white' : 'text-gray-500' 
                    }`}>
                      {openFAQ === idx ? 'remove' : 'add'}
                    </span>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFAQ === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 py-4 bg-white border-t border-gray-100">
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

      {/* Call to Action Section */}
      <CallToAction bgImage="/solutionsPage/solutions.jpg" />

      {/* Footer */}
      <Footer />

      {/* Cookie Consent Modal */}
      {cookiePolicyOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-md w-full"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg sm:text-xl font-header font-semibold text-gray-800">
                Cookie Policy
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4 text-gray-700 font-satoshi text-sm sm:text-base">
              <p>
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All Cookies", you consent to our use of cookies.
              </p>
              <p>
                You can manage your cookie preferences or withdraw your consent at any time by visiting our{" "}
                <Link to="/privacy" className="text-theme-main font-medium">
                  Privacy Policy
                </Link>.
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={handleCloseModal}
                className="bg-theme-main hover:bg-theme-dark text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
              >
                Accept All Cookies
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-all duration-200"
              >
                Decline
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      <style jsx>{`
        .pricing-cards {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
        }

        @media (min-width: 768px) {
            .pricing-cards {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (min-width: 1024px) {
            .pricing-cards {
                grid-template-columns: repeat(3, 1fr);
            }
        }
      `}</style>
    </>
  );
};

export default Pricing;
