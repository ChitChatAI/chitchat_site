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
                  <h1 className="text-5xl text-white md:text-7xl font-extrabold mb-6 animate-hero-fade-in">
                    Built for Every Business to Feel Human
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

        <section className="relative z-10 py-20 bg-black px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tighter bg-gradient-to-r from-theme-main via-purple-600 to-pink-500 bg-clip-text text-transparent">
                AI Solutions That Understand Humans
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
                Emotionally intelligent AI designed to deliver exceptional customer experiences across every industry vertical.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {/* Telecommunications Card */}
              <div className="relative bg-black border border-white/10 p-6 sm:p-8 group hover:border-theme-main/50 transition-all duration-500 rounded-3xl backdrop-blur-xl flex flex-col cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-theme-main/10">
                <div className="flex items-start mb-6">
                  <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center mr-5 bg-theme-main/10 rounded-xl p-2">
                    <Lottie
                      animationData={customerService}
                      loop
                      autoplay
                      style={{ height: '60px', width: '60px' }}
                      className="transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="inline-block bg-theme-main/20 text-theme-main font-medium text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                      Telecommunications
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Intelligent Customer Support
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Automate SIM support, router setups, and billing issues through AI that understands frustration and responds with human-like empathy.
                </p>
                <ul className="space-y-3 mt-auto">
                  {[
                    "24/7 tone-aware virtual agents",
                    "Context-aware troubleshooting",
                    "Seamless live agent handoff"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-theme-main/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="material-symbols-outlined text-white text-xs">check</span>
                      </div>
                      <span className="text-base text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-theme-main/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* E-Commerce Card */}
              <div className="relative bg-black border border-white/10 p-6 sm:p-8 group hover:border-theme-main/50 transition-all duration-500 rounded-3xl backdrop-blur-xl flex flex-col cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-theme-main/10">
                <div className="flex items-start mb-6">
                  <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center mr-5 bg-theme-main/10 rounded-xl p-2">
                    <Lottie
                      animationData={sales}
                      loop
                      autoplay
                      style={{ height: '60px', width: '60px' }}
                      className="transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="inline-block bg-theme-main/20 text-theme-main font-medium text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                      E-Commerce
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Personalized Shopping Assistant
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Convert browsers to buyers with AI that remembers preferences, suggests products, and guides customers like your best salesperson.
                </p>
                <ul className="space-y-3 mt-auto">
                  {[
                    "Hyper-personalized recommendations",
                    "Abandoned cart recovery",
                    "Brand-aligned conversational style"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-theme-main/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="material-symbols-outlined text-white text-xs">check</span>
                      </div>
                      <span className="text-base text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-theme-main/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Healthcare Card */}
              <div className="relative bg-black border border-white/10 p-6 sm:p-8 group hover:border-theme-main/50 transition-all duration-500 rounded-3xl backdrop-blur-xl flex flex-col cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-theme-main/10">
                <div className="flex items-start mb-6">
                  <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center mr-5 bg-theme-main/10 rounded-xl p-2">
                    <Lottie
                      animationData={healthcare}
                      loop
                      autoplay
                      style={{ height: '60px', width: '60px' }}
                      className="transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="inline-block bg-theme-main/20 text-theme-main font-medium text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                      Healthcare
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Compassionate Patient Support
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Deliver 24/7 healthcare assistance with AI that shows empathy, handles appointments, and provides medication reminders.
                </p>
                <ul className="space-y-3 mt-auto">
                  {[
                    "HIPAA-compliant interactions",
                    "Personalized health reminders",
                    "Emotionally-aware responses"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-theme-main/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="material-symbols-outlined text-white text-xs">check</span>
                      </div>
                      <span className="text-base text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-theme-main/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Education Card */}
              <div className="relative bg-black border border-white/10 p-6 sm:p-8 group hover:border-theme-main/50 transition-all duration-500 rounded-3xl backdrop-blur-xl flex flex-col cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-theme-main/10">
                <div className="flex items-start mb-6">
                  <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center mr-5 bg-theme-main/10 rounded-xl p-2">
                    <Lottie
                      animationData={education}
                      loop
                      autoplay
                      style={{ height: '60px', width: '60px' }}
                      className="transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="inline-block bg-theme-main/20 text-theme-main font-medium text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                      Education
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Adaptive Learning Companion
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Personalized tutoring and educational support that adapts to each student's learning style and emotional needs.
                </p>
                <ul className="space-y-3 mt-auto">
                  {[
                    "Learning style adaptation",
                    "Real-time progress feedback",
                    "24/7 homework assistance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-theme-main/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="material-symbols-outlined text-white text-xs">check</span>
                      </div>
                      <span className="text-base text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-theme-main/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Industry-wide callout */}
            <div className="mt-20 bg-black border border-white/10 rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto text-center backdrop-blur-lg hover:shadow-2xl hover:shadow-theme-main/10 transition-all duration-500">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5">
                Custom AI Solutions for <span className="bg-gradient-to-r from-theme-main to-purple-500 bg-clip-text text-transparent">Your Industry</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Our AI platform adapts to your specific business needs with consistent, on-brand interactions powered by our proprietary emotion-aware technology.
              </p>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-theme-main to-purple-600 hover:from-theme-main/90 hover:to-purple-600/90 text-white font-medium rounded-full transition-all duration-300 group shadow-lg hover:shadow-theme-main/20">
                Request Custom Demo
                <span className="ml-2 material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </section>


        <section id="industries" className="relative py-16 bg-black text-white overflow-hidden px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-20 text-center">
              <span className="inline-block px-3 py-1 bg-theme-main/10 text-theme-main text-xs font-medium rounded-full mb-3">
                Versatile Solutions
              </span>
              <h3 className="text-5xl sm:text-6xl font-extrabold text-center text-white mb-4 leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
                More Industries We Serve
              </h3>
              <p className="text-2xl sm:text-3xl text-gray-200 mb-12 max-w-2xl mx-auto font-medium drop-shadow">
                Our AI solutions adapt to the specific needs of various industries, providing personalized experiences that feel human.
              </p>
            </div>

            <div className="relative pl-4 sm:pl-12 space-y-20">
              {additionalSolutions.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center md:items-start gap-6 dark:bg-black/50 backdrop-blur-md rounded-2xl p-6 
       shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] 
       transition-all duration-300"
                >
                  <span className="absolute -left-6 sm:-left-14 top-3 w-3 h-3 bg-theme-main rounded-full"></span>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug font-satoshi">
                    {item.title}
                  </h3>

                  {/* Accent Line */}
                  <div className="h-1 w-10 bg-theme-main rounded-full lg:hidden"></div>

                  {/* Description */}
                  <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed tracking-wide">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* USE CASES SECTION */}
        <section id="use-cases" className="relative py-16 bg-black text-white overflow-hidden px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto"> {/* Changed from container mx-auto */}
            <h2 className="text-5xl sm:text-6xl font-extrabold text-center text-white mb-4 pb-6 leading-tight tracking-tight drop-shadow-xl bg-gradient-to-r from-theme-main via-purple-700 to-pink-500 bg-clip-text text-transparent">
              Use Cases
            </h2>

            <div className="relative pl-4 sm:pl-12 space-y-20">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center md:items-start gap-6 dark:bg-black/50 backdrop-blur-md rounded-2xl p-6 
       shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] 
       transition-all duration-300">
                  <span className="absolute -left-6 sm:-left-14 top-3 w-3 h-3 bg-white rounded-full"></span>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug font-satoshi">
                    {useCase.title}
                  </h3>

                  {/* Accent Line */}
                  <div className="h-1 w-10 bg-theme-main rounded-full lg:hidden"></div>

                  {/* Description */}
                  <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed tracking-wide">
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
      <CookieConsent />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Solutions;
