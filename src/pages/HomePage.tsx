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
      <Navbar />
      <main className="relative overflow-hidden bg-white min-h-screen">
        <Hero />
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
