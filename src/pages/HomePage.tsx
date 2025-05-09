import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import MeetOurCEO from '../components/MeetOurCEO';
import Testimonials from '../components/Testimonials';
import Community from '../components/Community';
import Footer from '../components/Footer';
import { X, Cookie } from 'lucide-react';
import CookieConsent from '../components/CookieConsent';

const HomePage: React.FC = () => {
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);

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

  return (
    <>
      <Header />
      <main>
        <Hero id="hero" />
        <Features id="features" />
        <MeetOurCEO id="meet-our-ceo" />
        <Testimonials id="testimonials" />
        <Community id="community" />
      </main>
      <Footer />

      {/* Cookie Policy Floating Button */}
      <CookieConsent position="left" modalPosition="bottom" />

      {/* Add animation keyframes for both entrance and exit */}
      <style>
        {`
        @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }
        
        @keyframes slideDown {
            from { transform: translateY(0); }
            to { transform: translateY(100%); }
        }
        `}
      </style>
    </>
  );
};

export default HomePage;

