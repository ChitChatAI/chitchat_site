import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import MeetOurCEO from '../components/MeetOurCEO';
import Testimonials from '../components/Testimonials';
import Community from '../components/Community';
import Footer from '../components/Footer';
import { ChevronDown, X, Menu } from 'lucide-react';

const HomePage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close the menu after clicking
    }
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

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-theme-main text-white p-4 rounded-full shadow-lg hover:bg-theme-dark transition-all flex items-center justify-center"
        >
          <div
            className={`transform transition-transform duration-300 ${
              menuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>

        {/* Mini Menu Modal */}
        {menuOpen && (
          <div className="absolute right-0 bottom-16 bg-white shadow-lg rounded-lg p-4 w-56 animate-slide-up">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleScrollToSection('hero')}
                  className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all"
                >
                  <ChevronDown size={16} />
                  Get demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('features')}
                  className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all"
                >
                  <ChevronDown size={16} />
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('meet-our-ceo')}
                  className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all"
                >
                  <ChevronDown size={16} />
                  Meet Our CEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('testimonials')}
                  className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all"
                >
                  <ChevronDown size={16} />
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('community')}
                  className="flex items-center gap-2 text-theme-main hover:text-theme-dark transition-all"
                >
                  <ChevronDown size={16} />
                  Community
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;

