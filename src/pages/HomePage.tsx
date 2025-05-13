import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Community from '../components/Community';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import { initCustomCursor } from '../utils/cursorEffects';
import Businesses from '../components/Businesses';

const HomePage: React.FC = () => {
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const parallaxElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        parallaxElements.current.forEach((el) => {
          const speed = parseFloat(el.getAttribute('data-speed') || '0.2');
          const yPos = -(scrollPosition * speed);
          el.style.transform = `translateY(${yPos}px)`;
        });
      });
    };

    parallaxElements.current = Array.from(document.querySelectorAll('.parallax-element'));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initialize intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        // Add animation class when element becomes visible
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
          
          // Update active section for navigation
          const id = entry.target.id;
          if (id) setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Target all section elements
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    // Track scroll position for parallax effects
    const handleScroll = () => {
      // Only keep parallax effect, remove hasScrolled tracking
      document.querySelectorAll('[data-parallax]').forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.2');
        const yPos = -window.scrollY * speed;
        element.setAttribute('style', `transform: translateY(${yPos}px)`);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - 70; // Adjust for navbar height
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
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

  useEffect(() => {
    const cleanupCursor = initCustomCursor();
    return () => cleanupCursor();
  }, []);

  return (
    <>
      {/* Parallax Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-theme-main/10 blur-3xl parallax-element" data-speed="0.3"></div>
        <div className="absolute bottom-[15%] right-[5%] w-48 h-48 rounded-full bg-purple-100/20 blur-3xl parallax-element" data-speed="0.2"></div>
        <div className="absolute top-[50%] left-[50%] w-16 h-16 rounded-full bg-blue-100/30 blur-2xl parallax-element" data-speed="0.1"></div>
      </div>

      {/* Side Navigation Dots for sections */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
          {['hero', 'features', 'meet-our-ceo', 'testimonials', 'community'].map((section) => (
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
      
      <Header />
      <main className="relative overflow-hidden">
        <Businesses />
        <Features id="features" />
        <Community id="community" />
        
        {/* Removed the floating scroll to top button */}
        
      </main>
      <Footer />

      {/* Cookie Policy Floating Button */}
      <CookieConsent position="left" modalPosition="bottom" />

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .parallax-element {
          will-change: transform;
        }

        section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        section.animate-in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default HomePage;

