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
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [showHero, setShowHero] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHero(true), 300); // Delay for cool effect
  }, []);

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
    }    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeaderVisible(true);
          } else {
            setIsHeaderVisible(false);
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

  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, rotateY: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateY: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        mass: 1,
        delayChildren: 0.3,
        staggerChildren: 0.1
      } 
    },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 25px 50px -12px rgba(31, 41, 55, 0.35)",
      y: -10,
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1],
        boxShadow: { delay: 0.05 }
      }
    },
    tap: { 
      scale: 0.97, 
      y: 5,
      transition: { duration: 0.1, ease: "easeOut" }
    }
  };
  const iconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      } 
    },
    hover: { 
      rotate: 15, 
      scale: 1.2, 
      filter: "drop-shadow(0 0 10px rgba(125, 99, 210, 0.7))",
      transition: { 
        duration: 0.4, 
        ease: [0.19, 1, 0.22, 1] 
      } 
    }
  };
  const textRevealVariants = {
    hidden: { opacity: 0, y: 20, clipPath: "inset(0 100% 0 0)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      clipPath: "inset(0 0 0 0)",
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2 
      } 
    }
  };
  const listItemVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: i * 0.15,
        ease: [0.25, 1, 0.5, 1]
      } 
    })
  };
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.7, 
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1]
      } 
    }
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

  return (
    <>
    <Navbar />
      <main ref={parallaxRef} className="relative z-10 pt-14 overflow-hidden min-h-screen bg-black">
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative z-10 flex items-center px-4 sm:px-6 md:px-8">
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
          {/* Animated floating shapes */}
          <div className="absolute top-10 left-1/4 w-60 h-60 bg-theme-main/20 rounded-full blur-3xl animate-float z-20"></div>
          <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-pink-400/20 rounded-full blur-2xl animate-float-delayed z-20"></div>
          <div className="absolute top-1/2 left-2/3 w-32 h-32 bg-purple-400/30 rounded-full blur-2xl animate-pulse z-20"></div>          <div className="container mx-auto relative z-20">
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-20 md:gap-40 scroll-review">
              <div className="flex-1 flex flex-col items-start justify-center text-center md:text-left">
                {showHero && (
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight drop-shadow-xl animate-hero-fade-in">
                    <span className="block text-white font-extrabold animate-gradient-x pb-4 animate-hero-slide-in">
                      Built for Every Business.
                    </span>
                    <span className="block text-white font-extrabold mt-2 animate-hero-slide-in delay-200">
                      Designed to Feel Human.
                    </span>
                  </h1>
                )}
                {!showHero && (
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight drop-shadow-xl opacity-0">
                    <span className="block text-white font-extrabold pb-4">
                      Built for Every Business.
                    </span>
                    <span className="block text-white font-extrabold mt-2">
                      Designed to Feel Human.
                    </span>
                  </h1>
                )}
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
        <section className="relative z-10 py-16 bg-black px-4 sm:px-6 md:px-8">
          <div className="container mx-auto">
            <motion.div
              className="mb-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
                Explore Our Solutions
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow">
                Discover how our AI solutions can transform your business across various industries.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Card 1: Telecommunications */}              <motion.div
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative bg-white/5 border border-theme-main/20 p-6 sm:p-8 shadow-[0_4px_40px_rgba(125,99,210,0.2)] group hover:shadow-[0_8px_60px_rgba(125,99,210,0.35)] transition-all duration-300 rounded-2xl backdrop-blur-md after:absolute after:inset-0 after:rounded-2xl after:ring-1 after:ring-inset after:ring-theme-main/5 flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-theme-main/60 group w-full overflow-hidden"
                style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 12%, 100% 88%, 92% 100%, 8% 100%, 0% 88%, 0% 12%)' }}
              >
                <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-theme-main/20 via-purple-700/10 to-pink-500/20 blur-2xl animate-pulse-slow opacity-30 group-hover:opacity-80 transition-opacity"></div>
                <div className="flex items-center mb-4 sm:mb-5">
                  <motion.div 
                    className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mr-3 sm:mr-5 bg-theme-main/5 rounded-lg"
                    variants={iconVariants}
                  >
                    <Lottie
                      animationData={customerService}
                      loop
                      autoplay
                      style={{ height: '40px', width: '40px' }}
                    />
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent"
                    variants={textRevealVariants}
                  >
                    <span className="inline-block bg-theme-main/10 text-theme-main font-semibold text-xs px-3 py-1 rounded-full mb-2">
                      Telecommunications
                    </span>
                  </motion.h3>
                </div>
                
                <motion.p 
                  className="text-gray-200 font-sans mb-4 text-lg"
                  variants={textRevealVariants}
                  style={{ lineHeight: '1.5', maxWidth: '100ch' }}
                >
                  Handle network support, router setup, billing queries, and cancellations — all through emotionally aware AI that actually listens.
                </motion.p>
                
                <motion.ul 
                  className="space-y-3 mb-6"
                  variants={staggerContainer}
                >
                  {["24/7 emotionally responsive support", "Seamless handoff to human agents", "Context-aware conversation history"].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      variants={listItemVariants}
                      custom={i}
                    >
                      <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                        <span className="material-symbols-outlined text-theme-main text-sm">
                          check_circle
                        </span>
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </motion.li>
                  ))}

                </motion.ul>
                
              </motion.div>

              {/* Card 2: E-Commerce */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative bg-white/5 border border-theme-main/20 p-6 sm:p-8 shadow-[0_4px_40px_rgba(125,99,210,0.2)] group hover:shadow-[0_8px_60px_rgba(125,99,210,0.35)] transition-all duration-300 rounded-2xl backdrop-blur-md after:absolute after:inset-0 after:rounded-2xl after:ring-1 after:ring-inset after:ring-theme-main/5 flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-theme-main/60 group w-full overflow-hidden"
                style={{ clipPath: 'polygon(12% 0%, 88% 0%, 100% 20%, 100% 80%, 88% 100%, 12% 100%, 0% 80%, 0% 20%)' }}
              >
                <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-theme-main/20 via-purple-700/10 to-pink-500/20 blur-2xl animate-pulse-slow opacity-30 group-hover:opacity-80 transition-opacity"></div>
                <div className="flex items-center mb-4 sm:mb-5">
                  <motion.div 
                    className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mr-3 sm:mr-5 bg-theme-main/5 rounded-lg"
                    variants={iconVariants}
                  >
                    <Lottie
                      animationData={sales}
                      loop
                      autoplay
                      style={{ height: '40px', width: '40px' }}
                    />
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent"
                    variants={textRevealVariants}
                  >
                    <span className="inline-block bg-theme-main/10 text-theme-main font-semibold text-xs px-3 py-1 rounded-full mb-2">
                      E-Commerce
                    </span>
                  </motion.h3>
                </div>
                
                <motion.p 
                  className="text-gray-200 font-sans mb-4 text-lg"
                  variants={textRevealVariants}
                  style={{ lineHeight: '1.5', maxWidth: '100ch' }}
                >
                  Convert more browsers into buyers with AI that feels like a helpful, friendly shopping assistant — available 24/7.
                </motion.p>
                
                <motion.ul 
                  className="space-y-3 mb-6"
                  variants={staggerContainer}
                >
                  {["Qualified lead generation", "Personalized product recommendations", "Consistent brand voice and messaging"].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      variants={listItemVariants}
                      custom={i}
                    >
                      <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                        <span className="material-symbols-outlined text-theme-main text-sm">
                          check_circle
                        </span>
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
              </motion.div>

              {/* Card 3: Healthcare */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative bg-white/5 border border-theme-main/20 p-6 sm:p-8 shadow-[0_4px_40px_rgba(125,99,210,0.2)] group hover:shadow-[0_8px_60px_rgba(125,99,210,0.35)] transition-all duration-300 rounded-2xl backdrop-blur-md after:absolute after:inset-0 after:rounded-2xl after:ring-1 after:ring-inset after:ring-theme-main/5 flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-theme-main/60 group w-full overflow-hidden"
                style={{ clipPath: 'polygon(0% 10%, 10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)' }}
              >
                <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-theme-main/20 via-purple-700/10 to-pink-500/20 blur-2xl animate-pulse-slow opacity-30 group-hover:opacity-80 transition-opacity"></div>
                <div className="flex items-center mb-4 sm:mb-5">
                  <motion.div 
                    className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mr-3 sm:mr-5 bg-theme-main/5 rounded-lg"
                    variants={iconVariants}
                  >
                    <Lottie
                      animationData={healthcare}
                      loop
                      autoplay
                      style={{ height: '40px', width: '40px' }}
                    />
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent"
                    variants={textRevealVariants}
                  >
                    <span className="inline-block bg-theme-main/10 text-theme-main font-semibold text-xs px-3 py-1 rounded-full mb-2">
                      Healthcare
                    </span>
                  </motion.h3>
                </div>
                
                <motion.p 
                  className="text-gray-200 font-sans mb-4 text-lg"
                  variants={textRevealVariants}
                  style={{ lineHeight: '1.5', maxWidth: '100ch' }}
                >
                  Support appointment booking, patient onboarding, medical FAQs, and follow-ups with a calm, patient persona that builds trust.
                </motion.p>
                
                <motion.ul 
                  className="space-y-3 mb-6"
                  variants={staggerContainer}
                >
                  {["Empathetic health guidance", "Medication and appointment reminders", "Wellness check-ins and monitoring"].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      variants={listItemVariants}
                      custom={i}
                    >
                      <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                        <span className="material-symbols-outlined text-theme-main text-sm">
                          check_circle
                        </span>
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
              </motion.div>

              {/* Card 4: Education & Online Learning */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative bg-white/5 border border-theme-main/20 p-6 sm:p-8 shadow-[0_4px_40px_rgba(125,99,210,0.2)] group hover:shadow-[0_8px_60px_rgba(125,99,210,0.35)] transition-all duration-300 rounded-2xl backdrop-blur-md after:absolute after:inset-0 after:rounded-2xl after:ring-1 after:ring-inset after:ring-theme-main/5 flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-theme-main/60 group w-full overflow-hidden"
                style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)' }}
              >
                <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-theme-main/20 via-purple-700/10 to-pink-500/20 blur-2xl animate-pulse-slow opacity-30 group-hover:opacity-80 transition-opacity"></div>
                <div className="flex items-center mb-4 sm:mb-5">
                  <motion.div 
                    className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mr-3 sm:mr-5 bg-theme-main/5 rounded-lg"
                    variants={iconVariants}
                  >
                    <Lottie
                      animationData={education}
                      loop
                      autoplay
                      style={{ height: '40px', width: '40px' }}
                    />
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent"
                    variants={textRevealVariants}
                  >
                    <span className="inline-block bg-theme-main/10 text-theme-main font-semibold text-xs px-3 py-1 rounded-full mb-2">
                      Education & Online Learning
                    </span>
                  </motion.h3>
                </div>
                
                <motion.p 
                  className="text-gray-200 font-sans mb-4 text-lg"
                  variants={textRevealVariants}
                  style={{ lineHeight: '1.5', maxWidth: '100ch' }}
                >
                  Provide tutoring, course navigation, enrollment support, and mental health check-ins — all with personalities that adapt to age and tone.
                </motion.p>
                
                <motion.ul 
                  className="space-y-3 mb-6"
                  variants={staggerContainer}
                >
                  {["Adaptive learning pathways", "Personalized feedback and assessment", "24/7 learning support"].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      variants={listItemVariants}
                      custom={i}
                    >
                      <div className="h-6 w-6 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                        <span className="material-symbols-outlined text-theme-main text-sm">
                          check_circle
                        </span>
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
              </motion.div>
            </motion.div>
            
            {/* Industry-wide callout */}
            <motion.div 
              className="mt-16 bg-white/5 border border-white/10 rounded-xl p-8 max-w-4xl mx-auto text-center backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Not seeing your industry? <span className="bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">We serve them all.</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Our adaptable AI solutions can be tailored for any business vertical, delivering personalized customer experiences that feel genuinely human — regardless of your industry's unique challenges.
              </p>
             
            </motion.div>
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section id="industries" className="relative py-16 bg-black text-white overflow-hidden px-4 sm:px-6 md:px-8">
          <div className="container mx-auto">
            <motion.div
              className="mb-20 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
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
            
            <div className="relative border-l-2 border-dotted border-theme-main pl-6 sm:pl-12 space-y-20">
              {additionalSolutions.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
                >
                  <span className="absolute -left-6 sm:-left-14 top-3 w-3 h-3 bg-theme-main rounded-full"></span>
                  <div className="flex flex-col sm:flex-row items-start gap-6 bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-theme-main/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
                        {item.title}
                      </h4>
                      <hr className="border-t border-white/10 w-12 mt-2 mb-4" />
                    </div>
                    <div className="w-full sm:w-2/3">
                      <p className="text-base text-gray-200 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section id="use-cases" className="relative py-16 bg-black text-white overflow-hidden px-4 sm:px-6 md:px-8">
          <div className="container mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4 pb-6 leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Use Cases
            </motion.h2>
            <div className="relative border-l-2 border-dotted border-theme-main pl-6 sm:pl-12 space-y-20">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-6 md:p-8 flex flex-col sm:flex-row items-start border border-white/10 hover:border-theme-main/40 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 gap-4"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.08 }}
                >
                  <span className="absolute -left-6 sm:-left-14 top-3 w-3 h-3 bg-theme-main rounded-full"></span>
                  <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
                      {useCase.title}
                    </h4>
                    <hr className="border-t border-white/10 w-12 mt-2 mb-4" />
                  </div>
                  <div className="w-full sm:w-2/3">
                    <p className="text-base text-gray-200 leading-relaxed">{useCase.description}</p>
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
        @keyframes hero-fade-in {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-fade-in {
          animation: hero-fade-in 1.1s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes hero-slide-in {
          0% { opacity: 0; transform: translateX(-60px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .animate-hero-slide-in {
          animation: hero-slide-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        .delay-200 { animation-delay: 0.2s; }

        @media (max-width: 768px) {
          #hero {
            padding-top: 2rem; /* Increased padding-top for mobile devices */
          }
          #hero h1 {
            padding-top: 3rem; /* Further increased padding-top for hero text on mobile devices */
          }
          * {
            animation: none !important;
            transition: none !important;
          }
          .parallax-element {
            transform: none !important; /* Disable parallax effect for mobile and all devices */
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
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
