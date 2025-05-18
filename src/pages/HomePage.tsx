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
      <main className="relative overflow-hidden bg-white min-h-screen">
        <section id="hero" className="parallax-element">
          <Hero />
        </section>
        <section id="features" className="parallax-element">
          <Features />
        </section>
        <section id="businesses" className="parallax-element">
          <Businesses />
        </section>
        <section id="community" className="parallax-element">
          <Community />
        </section>
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

        .hero-section {
          padding: 16px;
          text-align: center;
        }

        @media (min-width: 768px) {
          .hero-section {
            padding: 32px;
            text-align: left;
          }
        }

        @media (min-width: 1024px) {
          .hero-section {
            padding: 48px;
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;
