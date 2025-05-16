import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Community from '../components/Community';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import { initCustomCursor } from '../utils/cursorEffects';
import Businesses from '../components/Businesses';

const HomePage: React.FC = () => {
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
    // Remove scroll animation observer
    return () => { };
  }, []);

  useEffect(() => {
    const cleanupCursor = initCustomCursor();
    return () => cleanupCursor();
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Parallax Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="/businessesPage/BusinessBG.png"
            alt="Background"
            className="w-full h-full object-cover object-center fixed top-0 left-0 z-[-2] pointer-events-none select-none"
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              objectPosition: 'center',
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: -2,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
            draggable={false}
          />
        </div>
        <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-theme-main/10 blur-3xl parallax-element" data-speed="0.3"></div>
        <div className="absolute bottom-[15%] right-[5%] w-48 h-48 rounded-full bg-purple-100/20 blur-3xl parallax-element" data-speed="0.2"></div>
        <div className="absolute top-[50%] left-[50%] w-16 h-16 rounded-full bg-blue-100/30 blur-2xl parallax-element" data-speed="0.1"></div>
      </div>

      {/* Removed side navigation dots */}
      
      <Header />
      <main className="relative overflow-hidden bg-gradient-to-br from-white via-gray-100 to-gray-50 min-h-screen">
        <Features id="features" />
        <Businesses />
        <Community id="community" />
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

        /* Remove scroll animation for sections */
        section {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }
        section.animate-in-view {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>
    </>
  );
};

export default HomePage;
