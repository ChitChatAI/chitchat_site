import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/NavBar';
import Lottie from 'lottie-react';
import customerService from '../assets/lottie/customerService.json';
import sales from '../assets/lottie/sales.json';
import healthcare from '../assets/lottie/healthCare.json';
import education from '../assets/lottie/education.json';
import CallToAction from '../components/CallToAction';
import CookieConsent from '../components/ContactModal';
import Footer from '../components/Footer';

const Solutions: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxElements = useRef<HTMLElement[]>([]);
  const [showHero, setShowHero] = useState(false);

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
    } window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed unused state and variables like 'isHeaderVisible', 'linkVariants', and 'visible' function.

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
      <main ref={parallaxRef} className="relative z-10 overflow-hidden min-h-screen bg-black">
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative z-10 flex items-center px-4 sm:px-6 md:px-8 ">
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
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-20 md:gap-40 scroll-review pt-24">
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                {showHero && (
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight drop-shadow-xl animate-hero-fade-in">
                    <span className="block text-white font-extrabold animate-gradient-x py-4 animate-hero-slide-in">
                      Built for Every Business to Feel Human
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
                <p className="text-lg md:text-2xl mb-8 text-white animate-fade-in">
                  Experience cutting-edge AI that streamlines operations and enhances customer interactions, delivering a truly humanized digital experience.
                </p>
                {/* Animated dots for life */}
                <div className="flex space-x-3 mt-10 animate-fade-in-up delay-700 justify-center">
                  <span className="w-4 h-4 rounded-full bg-theme-main animate-pulse"></span>
                  <span className="w-4 h-4 rounded-full bg-purple-400 animate-pulse delay-150"></span>
                  <span className="w-4 h-4 rounded-full bg-pink-400 animate-pulse delay-300"></span>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative z-10 py-16 bg-black px-4 sm:px-6 md:px-8">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
                Explore Our AI-Powered Solutions
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow">
                Unlock the power of emotionally intelligent AI — built to elevate customer experiences across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
              {/* Card 1: Telecommunications */}
              <div className="relative bg-white/10 p-6 sm:p-8 shadow-lg group hover:shadow-xl transition-all duration-300 rounded-2xl backdrop-blur-lg flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-white/50 w-full overflow-hidden"
                style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 12%, 100% 88%, 92% 100%, 8% 100%, 0% 88%, 0% 12%)' }}>
                <div className="flex items-center mb-4 sm:mb-5">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mr-3 sm:mr-5">
                    <Lottie animationData={customerService} loop autoplay style={{ height: '40px', width: '40px' }} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                    <span className="inline-block bg-white/20 text-gray-300 font-semibold text-xs px-3 py-1 rounded-full mb-2">
                      Telecommunications
                    </span>
                  </h3>
                </div>
                <p className="text-gray-200 mb-4 text-lg" style={{ lineHeight: '1.5', maxWidth: '100ch' }}>
                  Automate SIM support, router setups, billing issues, and service queries through human-like AI that understands tone, context, and frustration — and responds like a pro.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "24/7 intelligent, tone-aware support",
                    "Seamless escalation to live agents",
                    "Remembers user context across chats"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <span className="material-symbols-outlined text-gray-300 text-sm">check_circle</span>
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: E-Commerce */}
              <div className="relative bg-white/10 p-6 sm:p-8 shadow-lg group hover:shadow-xl transition-all duration-300 rounded-2xl backdrop-blur-lg flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-white/50 w-full overflow-hidden"
                style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 12%, 100% 88%, 92% 100%, 8% 100%, 0% 88%, 0% 12%)' }}>
                <div className="flex items-center mb-4 sm:mb-5">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mr-3 sm:mr-5">
                    <Lottie animationData={sales} loop autoplay style={{ height: '40px', width: '40px' }} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                    <span className="inline-block bg-white/20 text-gray-300 font-semibold text-xs px-3 py-1 rounded-full mb-2">
                      E-Commerce
                    </span>
                  </h3>
                </div>
                <p className="text-gray-200 mb-4 text-lg" style={{ lineHeight: '1.5', maxWidth: '100ch' }}>
                  Transform casual shoppers into loyal customers with AI that acts like a digital salesperson — always on, always ready to recommend, and always brand-aligned.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Smart lead capture & qualification",
                    "Hyper-personalized product suggestions",
                    "Consistent brand voice at every touchpoint"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <span className="material-symbols-outlined text-gray-300 text-sm">check_circle</span>
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3: Healthcare */}
              <div className="relative bg-white/10 p-6 sm:p-8 shadow-lg group hover:shadow-xl transition-all duration-300 rounded-2xl backdrop-blur-lg flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-white/50 w-full overflow-hidden"
                style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 12%, 100% 88%, 92% 100%, 8% 100%, 0% 88%, 0% 12%)' }}>
                <div className="flex items-center mb-4 sm:mb-5">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mr-3 sm:mr-5">
                    <Lottie animationData={healthcare} loop autoplay style={{ height: '40px', width: '40px' }} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                    <span className="inline-block bg-white/20 text-gray-300 font-semibold text-xs px-3 py-1 rounded-full mb-2">
                      Healthcare
                    </span>
                  </h3>
                </div>
                <p className="text-gray-200 mb-4 text-lg" style={{ lineHeight: '1.5', maxWidth: '100ch' }}>
                  Deliver compassionate, responsive healthcare support through AI that feels human — ideal for appointment handling, medical questions, onboarding, and patient follow-up.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Patient-first conversational tone",
                    "Timely reminders for meds & visits",
                    "Gentle daily check-ins and wellness tracking"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <span className="material-symbols-outlined text-gray-300 text-sm">check_circle</span>
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 4: Education & Online Learning */}
              <div className="relative bg-white/10 p-6 sm:p-8 shadow-lg group hover:shadow-xl transition-all duration-300 rounded-2xl backdrop-blur-lg flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-white/50 w-full overflow-hidden"
                style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 12%, 100% 88%, 92% 100%, 8% 100%, 0% 88%, 0% 12%)' }}>
                <div className="flex items-center mb-4 sm:mb-5">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mr-3 sm:mr-5">
                    <Lottie animationData={education} loop autoplay style={{ height: '40px', width: '40px' }} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                    <span className="inline-block bg-white/20 text-gray-300 font-semibold text-xs px-3 py-1 rounded-full mb-2">
                      Education & Online Learning
                    </span>
                  </h3>
                </div>
                <p className="text-gray-200 mb-4 text-lg" style={{ lineHeight: '1.5', maxWidth: '100ch' }}>
                  Empower students of all ages with 24/7 AI mentors that provide tutoring, course guidance, and emotional support — customized by learner profile and tone.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Adapts teaching style per learner",
                    "Real-time feedback and encouragement",
                    "Always-on support for students & parents"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <span className="material-symbols-outlined text-gray-300 text-sm">check_circle</span>
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Industry-wide callout */}
            <div className="mt-16 bg-white/5 rounded-xl p-8 max-w-4xl mx-auto text-center backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Don’t see your industry? <span className="bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">We cover it too.</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                From finance to hospitality, our adaptable AI personas are fine-tuned for your exact customer needs — bringing empathy, context-awareness, and scalability to any sector.
              </p>
            </div>
          </div>
        </section>


        {/* INDUSTRIES SECTION */}
        <section id="industries" className="relative py-16 bg-black text-white overflow-hidden px-4 sm:px-6 md:px-8">
          <div className="container mx-auto">
            <div
              className="mb-20 text-center"
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
            </div>

            <div className="relative pl-6 sm:pl-12 space-y-20 ">
              {additionalSolutions.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col gap-6 bg-white/5 backdrop-blur-xl 
                     border border-white/10 rounded-2xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.3)] 
                     transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.4)]"

                >
                  <span className="absolute -left-6 sm:-left-14 top-3 w-3 h-3 bg-theme-main rounded-full"></span>
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug font-satoshi">
                    {item.title}
                  </h3>

                  {/* Accent Line */}
                  <div className="h-1 w-10 bg-theme-main rounded-full"></div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed tracking-wide">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section id="use-cases" className="relative py-16 bg-black text-white overflow-hidden px-4 sm:px-6 md:px-8">
          <div className="container mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4 pb-6 leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
              Use Cases
            </h2>
            <div className="relative pl-6 sm:pl-12 space-y-20">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="relative flex flex-col gap-6 bg-white/5 backdrop-blur-xl 
                     border border-white/10 rounded-2xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.3)] 
                     transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.4)]">
                  <span className="absolute -left-6 sm:-left-14 top-3 w-3 h-3 bg-white rounded-full"></span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug font-satoshi">
                    {useCase.title}
                  </h3>

                  {/* Accent Line */}
                  <div className="h-1 w-10 bg-theme-main rounded-full"></div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed tracking-wide">
                    {useCase.description}
                  </p>

                </div>
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
      </main >
      <CookieConsent position="left" modalPosition="bottom" />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Solutions;
