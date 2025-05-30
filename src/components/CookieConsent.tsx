import React, { useState, useEffect } from 'react';
import { Cookie, X, Shield, BarChart } from 'lucide-react';

interface CookieConsentProps {
  position?: 'left' | 'right';
  modalPosition?: 'bottom' | 'right';
}

const CookieConsent: React.FC<CookieConsentProps> = ({
  position = 'left',
  modalPosition = 'bottom',
}) => {  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);
  const [showBanner, setShowBanner] = useState(false); // Always false to keep banner hidden
  const [cookiesAccepted, setCookiesAccepted] = useState(() => {
    return localStorage.getItem('cookieConsent') === 'accepted' || true; // Default to accepted
  });
  // Banner is disabled - we only use the floating button
  useEffect(() => {
    // If cookies haven't been accepted yet, set them to accepted by default
    // This prevents the banner from showing but keeps the floating button
    if (!cookiesAccepted) {
      localStorage.setItem('cookieConsent', 'accepted');
      setCookiesAccepted(true);
    }
  }, [cookiesAccepted]);
  const handleCloseModal = () => {
    setIsModalExiting(true);
    setTimeout(() => {
      setCookiePolicyOpen(false);
      setIsModalExiting(false);
    }, 500); // Increased timeout to match new animation duration
  };

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setCookiesAccepted(true);
    setShowBanner(false);
    handleCloseModal();
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setCookiesAccepted(true);
    setShowBanner(false);
    handleCloseModal();
  };

  // Banner appears at the bottom of the screen with enhanced animation
  const bannerClass = `fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg transform transition-all duration-500 ease-in-out ${
    showBanner ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
  }`;
  // Modal position classes with enhanced parallax animations
  const modalClass =
    modalPosition === 'right'
      ? 'fixed right-0 top-0 h-full bg-white shadow-lg w-full sm:w-[400px] max-h-screen overflow-y-auto z-[1001]'
      : 'fixed inset-x-0 bottom-0 bg-white shadow-lg w-full max-h-[90vh] overflow-y-auto z-[1001]';

  const modalStyle =
    modalPosition === 'right'
      ? {
          transform: isModalExiting 
            ? 'translateX(100%) scale(0.95) rotateY(10deg)' 
            : 'translateX(0) scale(1) rotateY(0deg)',
          opacity: isModalExiting ? 0 : 1,
          filter: isModalExiting ? 'blur(4px)' : 'blur(0px)',
          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease, filter 0.3s ease',
          transformOrigin: 'right center',
        }
      : {
          transform: isModalExiting 
            ? 'translateY(40px) scale(0.9) perspective(1000px) rotateX(10deg)' 
            : 'translateY(0) scale(1) perspective(1000px) rotateX(0deg)',
          opacity: isModalExiting ? 0 : 1,
          filter: isModalExiting ? 'blur(4px)' : 'blur(0px)',
          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease, filter 0.3s ease',
          transformOrigin: 'bottom center',
        };

  // Overlay for modal
  const overlay =
    cookiePolicyOpen ? (
      <div
        className="fixed inset-0 bg-black/40 z-[1000] transition-opacity duration-300 backdrop-blur-sm"
        style={{
          opacity: isModalExiting ? 0 : 1,
          pointerEvents: isModalExiting ? 'none' : 'auto',
        }}
        onClick={handleCloseModal}
        aria-label="Close cookie policy overlay"
      />
    ) : null;

  return (
    <>      {/* Cookie Settings Button - Matching site aesthetics */}
      {cookiesAccepted && (
        <div
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={() => setCookiePolicyOpen(!cookiePolicyOpen)}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:bg-white/20 transition-all flex items-center justify-center group hover:scale-110"
            aria-label="Cookie Policy"
          >
            <div className="transform transition-transform duration-300 group-hover:rotate-90">
              <Cookie size={22} strokeWidth={1.5} />
            </div>
          </button>
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-theme-main to-theme-light rounded-full border-2 border-white animate-pulse"></span>
        </div>
      )}      {/* Cookie Banner - matching site aesthetics */}
      <div className={bannerClass}>
        <div className="bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-start md:items-center space-x-4 mb-3 md:mb-0">
              <div className="bg-gradient-to-r from-theme-main to-theme-light p-2 rounded-full">
                <Cookie size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white mb-1">
                  Cookie Notice
                </h3>
                <p className="text-xs text-gray-300 max-w-xl">
                  We use cookies to improve your experience and analyze site traffic.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setCookiePolicyOpen(true)}
                className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs font-medium text-white hover:bg-white/20 transition-all"
              >
                Customize
              </button>
              <button
                onClick={rejectCookies}
                className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs font-medium text-white hover:bg-white/20 transition-all"
              >
                Reject
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 bg-gradient-to-r from-theme-main to-theme-light text-white rounded-lg text-xs font-medium hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(75,35,107,0.3)]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>      {/* Overlay with enhanced parallax backdrop blur */}
      {cookiePolicyOpen ? (
        <div
          className="fixed inset-0 bg-black/60 z-[1000] backdrop-blur-md"
          style={{
            opacity: isModalExiting ? 0 : 1,
            backdropFilter: isModalExiting ? 'blur(0px)' : 'blur(8px)',
            transition: 'opacity 0.4s ease, backdrop-filter 0.3s ease',
            pointerEvents: isModalExiting ? 'none' : 'auto',
          }}
          onClick={handleCloseModal}
          aria-label="Close cookie policy overlay"
        />
      ) : null}{/* Detailed Cookie Settings Modal - matching site aesthetics */}
      {cookiePolicyOpen && (
        <div className={modalClass} style={modalStyle}>
          <div className="bg-black/90 backdrop-blur-md border border-white/10 h-full">
            <div className="max-w-6xl mx-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <img
                    src="/branding/chitchatAI.png"
                    alt="ChitChat AI Logo"
                    className="w-8 h-8 mr-3"
                  />
                  <h3 className="text-lg font-semibold text-white">
                    Cookie Settings
                  </h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all backdrop-blur-md border border-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-sm text-gray-300 mb-6 max-w-2xl">
                Control how we use cookies on this site. Essential cookies are required for basic functionality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">                {/* Technical cookies card */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <Shield className="text-theme-main mr-3" size={18} />
                      <h4 className="text-sm font-medium text-white">
                        Essential Cookies
                      </h4>
                    </div>
                    <div className="bg-gradient-to-r from-theme-main to-theme-light rounded-full w-12 h-6 flex items-center px-1">
                      <div className="bg-white rounded-full w-4 h-4 ml-auto shadow-sm"></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 mb-2">
                    Required for the website to function properly. Cannot be disabled.
                  </p>
                  <p className="text-xs text-gray-400 italic">Always active</p>
                </div>                {/* Analytics cookies card */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <BarChart className="text-theme-light mr-3" size={18} />
                      <h4 className="text-sm font-medium text-white">
                        Analytics
                      </h4>
                    </div>
                    <label className="relative inline-flex cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-12 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-theme-main peer-checked:to-theme-light"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-300">
                    Help us improve by tracking usage patterns and site performance.
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4 border-t border-white/10">
                <button
                  onClick={rejectCookies}
                  className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-all"
                >
                  Reject All
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-6 py-3 bg-gradient-to-r from-theme-main to-theme-light text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(75,35,107,0.3)]"
                >
                  Accept All
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-all"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
