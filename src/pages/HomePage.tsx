import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/NavBar';
import Features from '../components/Features';
import Community from '../components/Community';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import { initCustomCursor } from '../utils/cursorEffects';
import Businesses from '../components/Businesses';
import Solutions from './Solutions';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const parallaxElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.querySelectorAll('section.parallax-element').forEach((section, index) => {
        const speed = -0.1 - index * 0.05; // Negative speed for opposite direction
        (section as HTMLElement).style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

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
      <Navbar />
      <main className="relative overflow-hidden min-h-screen bg-black">
        <section id="hero" className="parallax-element mb-0 py-16 relative z-10">
          <Hero />
        </section>
        <section id="features" className="parallax-element mb-0 py-16 relative z-10">
          <Features />
        </section>
        <section id="businesses" className="parallax-element mb-0 py-16 relative z-10">
          <Businesses />
        </section>
        <section id="community" className="parallax-element mb-0 py-16 relative z-10">
          <Community />
        </section>
      </main>
      <Footer />

      {/* Cookie Policy Floating Button */}
      <CookieConsent position="left" modalPosition="bottom" />      {/* Keyframe Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .parallax-element {
          will-change: transform;
          position: relative;
          z-index: 10;
        }

        section {
          margin-bottom: 0 !important;
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
          /* Remove forced padding reset so component padding applies */
        }
        section.animate-in-view {
          opacity: 1 !important;
          transform: none !important;
        }

        h1, h2, h3, h4, h5, h6 {
          font-size: 1.5rem;
          font-weight: normal;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
};

export default HomePage;
