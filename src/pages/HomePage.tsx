import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Community from '../components/Community';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import { initCustomCursor } from '../utils/cursorEffects';
import Solutions from '../components/Solutions';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const parallaxElements = useRef<HTMLElement[]>([]);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [headerText, setHeaderText] = useState('');
  const fullText = "Built for Every Business.\nDesigned to Feel Human.";
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

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
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-gray-300">
      {/* Parallax Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a]">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-theme-main/20 blur-3xl parallax-element" data-speed="0.3"></div>
        <div className="absolute bottom-[15%] right-[5%] w-48 h-48 rounded-full bg-purple-900/30 blur-3xl parallax-element" data-speed="0.2"></div>
        <div className="absolute top-[50%] left-[50%] w-16 h-16 rounded-full bg-blue-900/40 blur-2xl parallax-element" data-speed="0.1"></div>

        {/* Dynamic Floating Elements */}
        <div className="absolute inset-0 flex justify-center items-center space-x-6 animate-fade-in delay-400">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-purple-700 rounded-full shadow-[0_0_30px_rgba(128,90,213,0.6)] animate-spin-slow"></div>
          <div className="w-20 h-20 bg-gradient-to-br from-pink-700 to-purple-700 rounded-full shadow-[0_0_40px_rgba(219,39,119,0.6)] animate-pulse"></div>
          <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-pink-700 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-bounce"></div>
        </div>
      </div>

      <Header />

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
    </div>
  );
};

export default HomePage;

