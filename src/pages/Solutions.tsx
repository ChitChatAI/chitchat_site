import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/NavBar';
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
import Footer from '../components/Footer';

const Solutions: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxElements = useRef<HTMLElement[]>([]);
  // Remove typing effect state
  const headerText = "Built for Every Business.\nDesigned to Feel Human.";
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

  // Add this effect just before the return statement (inside the component)
  useEffect(() => {
    // Subtle parallax for hero left/right columns
    const handleParallax = () => {
      const scrollY = window.scrollY;
      const left = document.getElementById('parallax-left');
      const right = document.getElementById('parallax-right');
      if (left) {
        left.style.transform = `translateY(${scrollY * 0.06}px)`;
      }
      if (right) {
        right.style.transform = `translateY(${scrollY * 0.03}px)`;
      }
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <>
    <Navbar />
      <main ref={parallaxRef} className="relative z-10 overflow-hidden min-h-screen bg-black">
        {/* HERO SECTION */}
        <section id="hero" className="parallax-element py-16 relative z-10 pt-32">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/homePage/chitchat_bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10"></div>
          <div className="container mx-auto px-6 sm:px-12 relative z-20">
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-20 md:gap-40 min-h-[600px]">
              <div className="flex-1 flex flex-col items-start justify-center text-center md:text-left h-full min-h-[400px]">
              
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight drop-shadow-xl animate-fade-in-up">
                  <span className="block text-white font-extrabold animate-gradient-x pb-4">
                    Built for Every Business.
                  </span>
                  <span className="block text-white font-extrabold mt-2 animate-fade-in-up delay-150">
                    Designed to Feel Human.
                  </span>
                </h1>
                <p className="text-2xl sm:text-3xl md:text-2xl text-gray-200 max-w-2xl mb-12 leading-relaxed font-medium drop-shadow animate-fade-in-up delay-300">
                  Experience cutting-edge AI that streamlines operations and enhances customer interactions, delivering a truly humanized digital experience.
                </p>
                {/* Animated dots for life */}
                <div className="flex space-x-3 mt-10 animate-fade-in-up delay-700 justify-center md:justify-start">
                  <span className="w-4 h-4 rounded-full bg-theme-main animate-pulse"></span>
                  <span className="w-4 h-4 rounded-full bg-purple-400 animate-pulse delay-150"></span>
                  <span className="w-4 h-4 rounded-full bg-pink-400 animate-pulse delay-300"></span>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        {/* CARDS SECTION */}
        <section className="relative z-10 py-16 bg-black">
          <div className="container mx-auto px-6 sm:px-12">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
          Explore Our Solutions
              </h2>
              <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow">
          Discover how our AI solutions can transform your business across various industries.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Card 1: Telecommunications */}
              <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-white/5 border border-white/20 p-8 shadow-xl hover:shadow-theme transition-shadow duration-200 flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-theme-main/60 group w-full backdrop-blur-lg scroll-review"
          style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 12%, 100% 88%, 92% 100%, 8% 100%, 0% 88%, 0% 12%)' }}
              >
          <div className="flex items-center mb-5">
            <div className="w-16 h-16 flex items-center justify-center mr-5 bg-theme-main/5 rounded-lg">
              <Lottie
                animationData={customerService}
                loop
                autoplay
                style={{ height: '48px', width: '48px' }}
              />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
              Telecommunications
            </h3>
          </div>
          <p className="text-gray-200 font-sans mb-4 text-lg" style={{ lineHeight: '1.5', maxWidth: '100ch' }}>
            Handle network support, router setup, billing queries, and cancellations — all through emotionally aware AI that actually listens.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                <span className="material-symbols-outlined text-theme-main text-sm">
            check_circle
                </span>
              </div>
              <span className="text-gray-200">24/7 emotionally responsive support</span>
            </li>
            <li className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                <span className="material-symbols-outlined text-theme-main text-sm">
            check_circle
                </span>
              </div>
              <span className="text-gray-200">Seamless handoff to human agents</span>
            </li>
            <li className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                <span className="material-symbols-outlined text-theme-main text-sm">
            check_circle
                </span>
              </div>
              <span className="text-gray-200">Context-aware conversation history</span>
            </li>
          </ul>
          <a
            href="#"
            className="text-theme-main font-semibold flex items-center font-sans transition-colors duration-200 group-hover:text-theme-main group-focus-visible:text-theme-main"
            tabIndex={0}
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
              </motion.div>
              {/* Card 2: E-Commerce */}
              <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative bg-white/5 border border-white/20 p-8 shadow-xl hover:shadow-theme transition-shadow duration-200 flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-theme-main/60 group w-full backdrop-blur-lg scroll-review"
          style={{ clipPath: 'polygon(12% 0%, 88% 0%, 100% 20%, 100% 80%, 88% 100%, 12% 100%, 0% 80%, 0% 20%)' }}
              >
          <div className="flex items-center mb-5">
            <div className="w-16 h-16 flex items-center justify-center mr-5 bg-theme-main/5 rounded-lg">
              <Lottie
                animationData={sales}
                loop
                autoplay
                style={{ height: '48px', width: '48px' }}
              />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
              E-Commerce
            </h3>
          </div>
          <p className="text-gray-200 font-sans mb-4 text-lg" style={{ lineHeight: '1.5', maxWidth: '100ch' }}>
            Convert more browsers into buyers with AI that feels like a helpful, friendly shopping assistant — available 24/7.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                <span className="material-symbols-outlined text-theme-main text-sm">
            check_circle
                </span>
              </div>
              <span className="text-gray-200">Qualified lead generation</span>
            </li>
            <li className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                <span className="material-symbols-outlined text-theme-main text-sm">
            check_circle
                </span>
              </div>
              <span className="text-gray-200">Personalized product recommendations</span>
            </li>
            <li className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                <span className="material-symbols-outlined text-theme-main text-sm">
            check_circle
                </span>
              </div>
              <span className="text-gray-200">Consistent brand voice and messaging</span>
            </li>
          </ul>
          <a
            href="#"
            className="text-theme-main font-semibold flex items-center font-sans transition-colors duration-200 group-hover:text-theme-main group-focus-visible:text-theme-main"
            tabIndex={0}
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
              </motion.div>
              {/* Card 3: Healthcare */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="relative bg-white/5 border border-white/20 p-8 shadow-xl hover:shadow-theme transition-shadow duration-200 flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-theme-main/60 group w-full backdrop-blur-lg scroll-review"
                style={{ clipPath: 'polygon(0% 10%, 10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)' }}
              >
                <div className="flex items-center mb-5">
                  <div className="w-16 h-16 flex items-center justify-center mr-5 bg-theme-main/5 rounded-lg">
                    <Lottie
                      animationData={healthcare}
                      loop
                      autoplay
                      style={{ height: '48px', width: '48px' }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
                    Healthcare
                  </h3>
                </div>
                <p className="text-gray-200 font-sans mb-4 text-lg" style={{ lineHeight: '1.5', maxWidth: '100ch' }}>
                  Support appointment booking, patient onboarding, medical FAQs, and follow-ups with a calm, patient persona that builds trust.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                      <span className="material-symbols-outlined text-theme-main text-sm">
                        check_circle
                      </span>
                    </div>
                    <span className="text-gray-200">Empathetic health guidance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                      <span className="material-symbols-outlined text-theme-main text-sm">
                        check_circle
                      </span>
                    </div>
                    <span className="text-gray-200">Medication and appointment reminders</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                      <span className="material-symbols-outlined text-theme-main text-sm">
                        check_circle
                      </span>
                    </div>
                    <span className="text-gray-200">Wellness check-ins and monitoring</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-theme-main font-semibold flex items-center font-sans transition-colors duration-200 group-hover:text-theme-main group-focus-visible:text-theme-main"
                  tabIndex={0}
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
              {/* Card 4: Education & Online Learning */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className="relative bg-white/5 border border-white/20 p-8 shadow-xl hover:shadow-theme transition-shadow duration-200 flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-theme-main/60 group w-full backdrop-blur-lg scroll-review"
                style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)' }}
              >
                <div className="flex items-center mb-5">
                  <div className="w-16 h-16 flex items-center justify-center mr-5 bg-theme-main/5 rounded-lg">
                    <Lottie
                      animationData={education}
                      loop
                      autoplay
                      style={{ height: '48px', width: '48px' }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
                    Education & Online Learning
                  </h3>
                </div>
                <p className="text-gray-200 font-sans mb-4 text-lg" style={{ lineHeight: '1.5', maxWidth: '100ch' }}>
                  Provide tutoring, course navigation, enrollment support, and mental health check-ins — all with personalities that adapt to age and tone.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                      <span className="material-symbols-outlined text-theme-main text-sm">
                        check_circle
                      </span>
                    </div>
                    <span className="text-gray-200">Adaptive learning pathways</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                      <span className="material-symbols-outlined text-theme-main text-sm">
                        check_circle
                      </span>
                    </div>
                    <span className="text-gray-200">Personalized feedback and assessment</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                      <span className="material-symbols-outlined text-theme-main text-sm">
                        check_circle
                      </span>
                    </div>
                    <span className="text-gray-200">24/7 learning support</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-theme-main font-semibold flex items-center font-sans transition-colors duration-200 group-hover:text-theme-main group-focus-visible:text-theme-main"
                  tabIndex={0}
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
        {/* INDUSTRIES SECTION */}
        <section id="industries" className="relative py-16 bg-black text-white overflow-hidden px-4 sm:px-8">
          <div className="container mx-auto px-6 sm:px-12">
            <motion.div
              className="mb-20 text-center scroll-review"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="inline-block px-3 py-1 bg-theme-main/10 text-theme-main text-xs font-medium rounded-full mb-3">
                Versatile Solutions
              </span>
              <h3 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4 leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
                More Industries We Serve
              </h3>
              <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-medium drop-shadow">
                Our AI solutions adapt to the specific needs of various industries, providing personalized experiences that feel human.
              </p>
            </motion.div>
            {/* Normal neural timeline */}
            <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20 ml-6 md:ml-10 lg:ml-16">
              {additionalSolutions.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative scroll-review"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
                >
                  {/* Neural dot style */}
                  <span className="absolute -left-14 top-3 w-3 h-3 bg-theme-main rounded-full"></span>
                  <div className="flex flex-row w-full items-start">
                    <div className="w-1/3 min-w-[180px] pr-6 flex items-center">
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent mb-2">{item.title}</h4>
                    </div>
                    <div className="w-2/3">
                      <p className="text-base text-gray-200 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* USE CASES SECTION */}
        <section id="use-cases" className="relative py-16 bg-black text-white overflow-hidden px-4 sm:px-8">
          <div className="container mx-auto px-6 sm:px-12">
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4 pb-6 leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent scroll-review"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Use Cases
            </motion.h2>
            <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20 ml-6 md:ml-10 lg:ml-16">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="relative bg-white/5 p-6 md:p-8 transition-all duration-300 flex items-start border-b border-gray-200 rounded-2xl shadow-xl scroll-review"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
                >
                  {/* Neural dot style */}
                  <span className="absolute -left-14 top-3 w-3 h-3 bg-theme-main rounded-full"></span>
                  <div className="flex flex-row w-full items-start">
                    <div className="w-1/3 min-w-[180px] pr-6 flex items-center">
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent mb-2">{useCase.title}</h4>
                    </div>
                    <div className="w-2/3">
                      <p className="text-base text-gray-200 leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .parallax-element {
          will-change: transform;
          position: relative;
          z-index: 10;
        }
      `}</style>
      </main>
      <CookieConsent position="left" modalPosition="bottom" />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Solutions;
