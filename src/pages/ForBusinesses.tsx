import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ForBusinesses: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  const fullText = "AI That Fits Seamlessly\nInto Your Operations";
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    }, { threshold: 0.5 });

    if (headerRef.current) observer.observe(headerRef.current);
    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const typingInterval = setInterval(() => {
        setHeaderText(fullText.substring(0, i + 1));
        i++;
        if (i > fullText.length) clearInterval(typingInterval);
      }, 50);
      return () => clearInterval(typingInterval);
    } else {
      setHeaderText('');
    }
  }, [isVisible, fullText]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-review');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate-slide-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    },
    {
      title: 'Improve Customer Experience',
      description: 'Create human-like interactions that feel personal and emotionally intelligent.',
      icon: 'sentiment_satisfied',
    },
    {
      title: 'Boost Retention & Upsells',
      description: 'Drive revenue through nuanced conversations, not generic sales scripts.',
      icon: 'trending_up',
    },
    {
      title: 'Save Valuable Time',
      description: 'No writing prompts or managing AI yourself - we handle everything.',
      icon: 'schedule',
    },
    {
      title: 'Gain Competitive Edge',
      description: 'Stand out by offering truly believable AI support before your competitors.',
      icon: 'workspace_premium',
    }
  ];

  return (
    <>
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen pt-18 px-4 sm:px-6 overflow-hidden bg-center bg-cover scroll-review">
          {/* Mobile background image (hidden on larger screens) */}
          <img
            className="absolute inset-0 w-full h-full object-cover z-0 block sm:hidden"
            src="/businessesPage/BusinessBG.png"
            alt="Business background"
          />
          
          {/* Video background (hidden on mobile) */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 hidden sm:block"
            src="/businessesPage/businessVideo.mp4"
            autoPlay
            loop
            muted
            onTimeUpdate={(e) => {
              const video = e.target as HTMLVideoElement;
              if (video.currentTime > 2.75) {
                video.currentTime = 0;
                video.play();
              }
            }}
          />
          
          {/* Overlays - kept the same for both mobile and desktop */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#260a40]/70 via-black/30 to-[#260a40]/70 mix-blend-multiply z-20" />
          <div className="absolute inset-0 bg-[url('/textures/dots.svg')] opacity-10 mix-blend-soft-light z-20 animate-pulse-slow" />
          
          {/* Content */}
          <div className="relative z-30 max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-full pt-24 px-4">
            <div className="mb-16">
              <div className="h-32 flex items-center justify-center mb-6">
                <h2
                  ref={headerRef}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white whitespace-pre-line drop-shadow-md animate-fade-in-slow"
                >
                  {headerText}
                </h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mt-6 leading-relaxed">
                We don't just give you an AI persona — we handle the strategy, setup, and support so your team can focus on results. 
                Whether you need a retention agent, a setup guide, or full customer support automation, we've got you covered.
              </p>
            </div>
            <div className="animate-bounce mt-10 text-white opacity-70">
              <ChevronDown size={32} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 to-transparent z-30"></div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 bg-white scroll-review">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              What's Included When You Work With Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {includedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="scroll-review opacity-0 transform translate-y-10 bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-theme-main text-3xl mb-4 animate-wiggle-slow">
                    check_circle
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Values Section */}
        <section className="py-16 px-4 sm:px-6 bg-gray-50 scroll-review">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              How ChitChat Adds Value to Your Business
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {businessValues.map((value, index) => (
                <div
                  key={index}
                  className="scroll-review opacity-0 transform translate-y-10 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-theme-light flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-theme-main text-2xl sm:text-3xl animate-wiggle-slow">
                      {value.icon}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 scroll-review">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              Trusted by forward-thinking teams
            </h2>
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="flex items-center justify-center bg-gray-100 rounded-full p-4 sm:p-6 shadow-sm">
                <svg
                  viewBox="0 0 393.8 183"
                  className="h-10 sm:h-12 md:h-16 rain-logo"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#BBBCBC">
                    <path d="M278,178.8h37.4v-68c0-7.7,0-26.1,21.4-26.1c19.6,0,19.6,17.1,19.6,25.9v68.3h37.4v-78.2 c0-24.6-7.7-34.5-14.4-40.3c-6.8-5.9-20.1-10.8-32-10.8c-22.3,0-30.2,11.5-34,17.6h-0.5V53.7H278V178.8z M262.3,178.8h-37.4v-125 h37.4V178.8z M107.7,116.6c0-14.2,9.5-32.2,30.9-32.2c21.2,0,31.5,16.7,31.5,31.8c0,12.2-7.9,32-31.3,32 C116.3,148.1,107.7,128.3,107.7,116.6 M207.5,53.7h-37.4V67h-0.5c-4.5-7.7-16-17.6-36.5-17.6c-33.3,0-62.9,25.7-62.9,66.7 c0,35.8,23.2,66.9,62.9,66.9c14.6,0,30.2-5.6,36.5-17.8h0.5v13.5h37.4V53.7z M0,53.7h35.1V67h0.5c3.2-6.1,9.7-17.6,31.3-17.6v37.6 c-17.3,0.4-29.5,4.1-29.5,23v68.7H0V53.7z"></path>
                  </g>
                  <g fill="#0283cf">
                    <path d="M265.8,22.3c0-12.3-10-22.3-22.3-22.3c-12.3,0-22.3,10-22.3,22.3c0,12.3,10,22.3,22.3,22.3 C255.9,44.6,265.8,34.6,265.8,22.3"></path>
                  </g>
                </svg>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-12 bg-gray-50 p-4 sm:p-6 md:p-8 rounded-md shadow-sm">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                <span className="block text-theme-main font-semibold text-lg sm:text-xl mb-3 sm:mb-4">Rain's Success Story</span>
                Rain, our first major client, has seamlessly integrated our persona-based AI agent to modernize customer engagement. By leveraging emotionally intelligent interactions, Rain delivers a stylish and personalized experience that resonates with their audience, setting a new standard for customer support in the digital age.
              </p>
              
              <div className="mt-8 sm:mt-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">What Rain's Team Says</h3>
                
                <ul className="relative border-l-0 sm:border-l-2 border-dotted border-theme-main pl-0 sm:pl-6 space-y-8">
                  {/* Mobile-first approach with stacked layout */}
                  <li className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                    <img 
                      src="/profiles/teamLead.png" 
                      alt="Team Lead" 
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-theme-main"
                    />
                    <div className="flex flex-col">
                      <h4 className="text-lg font-semibold text-gray-800">Team Lead</h4>
                      <p className="text-sm text-gray-500">Pieter van der Merwe</p>
                      <p className="text-gray-600 mt-2 w-full sm:w-auto max-w-xs sm:max-w-md md:max-w-lg mx-auto sm:mx-0">
                        "The persona-based AI has transformed how we engage with customers, making every interaction feel personal and meaningful."
                      </p>
                    </div>
                  </li>
                  
                  <li className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                    <img 
                      src="/profiles/promptEngineer.png" 
                      alt="Prompt Engineer" 
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-theme-main"
                    />
                    <div className="flex flex-col">
                      <h4 className="text-lg font-semibold text-gray-800">Prompt Engineer</h4>
                      <p className="text-sm text-gray-500">Emily Carter</p>
                      <p className="text-gray-600 mt-2 w-full sm:w-auto max-w-xs sm:max-w-md md:max-w-lg mx-auto sm:mx-0">
                        "ChitChat's AI has been a game-changer, enabling us to fine-tune responses and deliver impactful interactions."
                      </p>
                    </div>
                  </li>
                  
                  <li className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                    <img 
                      src="/profiles/softwareEngineer.png" 
                      alt="Software Engineer" 
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-theme-main"
                    />
                    <div className="flex flex-col">
                      <h4 className="text-lg font-semibold text-gray-800">Software Engineer</h4>
                      <p className="text-sm text-gray-500">Olwethu Dlamini</p>
                      <p className="text-gray-600 mt-2 w-full sm:w-auto max-w-xs sm:max-w-md md:max-w-lg mx-auto sm:mx-0">
                        "Integrating ChitChat's AI was seamless, and it has elevated our customer support to a whole new level."
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 px-4 sm:px-6 bg-theme-main/10 scroll-review">
          <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-xl border-white/20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-gray-900">
              Ready to bring ChitChat into your business?
            </h2>
            <p className="text-sm sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Let us help you transform your customer experience with cutting-edge AI solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link
                to="/contact-us"
                className="bg-theme-main hover:bg-theme-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Let's Talk
              </Link>
              <Link
                to="/book-call"
                className="bg-white hover:bg-gray-100 text-theme-main border border-theme-main px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ForBusinesses;

