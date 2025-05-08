import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import MeetOurCEO from '../components/MeetOurCEO';
import Testimonials from '../components/Testimonials';
import Community from '../components/Community';
import Footer from '../components/Footer';
import { X, Cookie } from 'lucide-react';

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
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setCookiePolicyOpen(!cookiePolicyOpen)}
          className="bg-theme-main text-white p-4 rounded-full shadow-lg hover:bg-theme-dark transition-all flex items-center justify-center"
          aria-label="Cookie Policy"
        >
          <div className="transform transition-transform duration-300 hover:rotate-12">
            <Cookie size={24} strokeWidth={1.5} />
          </div>
        </button>

        {/* Cookie Policy Modal */}
        {cookiePolicyOpen && (
          <div 
            className="fixed inset-x-0 mx-auto bottom-0 bg-white shadow-lg rounded-t-lg p-6 w-full sm:w-[500px] max-h-[90vh] overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out"
            style={{ 
              transform: isModalExiting ? 'translateY(100%)' : 'translateY(0)',
              animation: isModalExiting ? 'slideDown 0.3s ease-out forwards' : 'slideUp 0.3s ease-out forwards'
            }}
          >
            {/* ChitChat logo */}
            <div className="flex justify-center mb-4">
              <img 
                src="/branding/chitchatAI.png"
                alt="ChitChat AI Logo"
                className="w-12 h-auto"
              />
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 drop-shadow-md">Your cookie preferences</h3> {/* Added drop shadow */}
              <button 
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mb-5 drop-shadow-sm">
              We use cookies to keep our site secure and user-friendly, and to carry out the activities stated below.
            </p>
            
            <p className="text-sm text-gray-600 mb-5 drop-shadow-sm">
              You can customize your cookie preferences at any time by toggling the options on or off.
            </p>
            
            <p className="text-sm text-gray-600 mb-6 drop-shadow-sm">
              For more information, have a look at our <a href="#" className="text-theme-main underline hover:text-theme-dark">Privacy and Cookie Policy</a>
            </p>
            
            <div className="border-t border-gray-200 pt-4 mb-5">
              <h4 className="text-sm font-semibold mb-4 drop-shadow-md">Manage consent preferences</h4> {/* Added drop shadow */}
              
              {/* Technical cookies toggle - always active */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-800 drop-shadow-sm">Technical cookies</p> {/* Added drop shadow */}
                  <p className="text-xs text-gray-500 drop-shadow-sm">Always active</p> {/* Added drop shadow */}
                </div>
                <div className="bg-theme-main rounded-full w-10 h-5 flex items-center px-0.5">
                  <div className="bg-white rounded-full w-4 h-4 ml-auto shadow-sm"></div>
                </div>
              </div>
              
              {/* Analytics cookies toggle */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm font-medium text-gray-800 drop-shadow-sm">Analytics cookies</p> {/* Added drop shadow */}
                </div>
                <button className="bg-gray-200 rounded-full w-10 h-5 flex items-center px-0.5 hover:bg-gray-300 transition-colors">
                  <div className="bg-white rounded-full w-4 h-4 shadow-sm"></div>
                </button>
              </div>
            </div>
            
            <div className="flex justify-between space-x-3 pt-3 border-t border-gray-200">
              <button 
                onClick={handleCloseModal}
                className="flex-1 py-2 border border-gray-300 text-gray-700 rounded font-medium hover:bg-gray-50 transition-colors drop-shadow-sm"
              >
                Reject all
              </button>
              <button 
                onClick={handleCloseModal}
                className="flex-1 bg-theme-main text-white py-2 rounded font-medium hover:bg-theme-dark transition-colors drop-shadow-sm"
              >
                Confirm my choices
              </button>
            </div>
          </div>
        )}
      </div>

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

