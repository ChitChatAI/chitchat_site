import React, { useEffect } from 'react';
import Navbar from '../components/NavBar';
import Features from '../components/Features';
import Community from '../components/Community';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import { initCustomCursor } from '../utils/cursorEffects';
import Businesses from '../components/Businesses';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Remove scroll animation observer
    return () => { };
  }, []);

  useEffect(() => {
    const cleanupCursor = initCustomCursor();
    return () => cleanupCursor();
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden w-full min-h-screen bg-black">
        <Hero />

        <div className="parallax-element mb-0 py-16 relative z-10">
          <Features />
        </div>

        <div className="parallax-element mb-0 py-16 relative z-10">
          <Businesses />
        </div>

        <div className="parallax-element mb-0 py-16 relative z-10">
          <Community />
        </div>
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

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-up {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff; }
          50% { text-shadow: 0 0 10px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 50px #ff00ff; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-scale-up {
          animation: scale-up 0.8s ease-out;
        }

        .animate-text-glow {
          animation: text-glow 2s infinite alternate;
        }

        .loader {
          border: 4px solid rgba(255, 255, 255, 0.2);
          border-top-color: #6b46c1; /* Theme main color */
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          section {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .p-4 {
            padding: 1rem !important;
          }

          .md\\:animate-slide-up {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;
