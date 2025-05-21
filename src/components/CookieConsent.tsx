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
  const [showCookieInfoModal, setShowCookieInfoModal] = useState(false); // New state for cookie info modal
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
    }, 300);
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

  // Modal position classes with improved animations
  const modalClass =
    modalPosition === 'right'
      ? 'fixed right-0 top-0 h-full bg-white shadow-lg w-full sm:w-[400px] max-h-screen overflow-y-auto z-[1001] transition-all duration-300 ease-in-out'
      : 'fixed inset-x-0 bottom-0 bg-white shadow-lg w-full max-h-[90vh] overflow-y-auto z-[1001] transition-all duration-300 ease-in-out';

  const modalStyle =
    modalPosition === 'right'
      ? {
          transform: isModalExiting ? 'translateX(100%)' : 'translateX(0)',
          opacity: isModalExiting ? 0 : 1,
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease',
        }
      : {
          transform: isModalExiting ? 'translateY(20px)' : 'translateY(0)',
          opacity: isModalExiting ? 0 : 1,
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease',
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
    <>
      {/* Cookie Settings Button - Enhanced with animations and fixed to bottom right */}
      {cookiesAccepted && (
        <div
          className="fixed bottom-6 right-6 z-50 animate-bounce-slow"
        >
          <button
            onClick={() => setCookiePolicyOpen(!cookiePolicyOpen)}
            className="bg-theme-main text-white p-3 rounded-full shadow-lg hover:bg-theme-dark transition-all flex items-center justify-center group hover:scale-110"
            aria-label="Cookie Policy"
          >
            <div className="transform transition-transform duration-300 group-hover:rotate-90">
              <Cookie size={22} strokeWidth={1.5} />
            </div>
          </button>
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-theme-main rounded-full border-2 border-white animate-pulse"></span>
        </div>
      )}

      {/* Cookie Banner - with smaller font size */}
      <div className={bannerClass}>
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-start md:items-center space-x-3 mb-3 md:mb-0">
            <div className="bg-theme-main/10 p-2 rounded-full">
              <Cookie size={20} className="text-theme-main" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800 mb-0.5">
                Cookie Notice
              </h3>
              <p className="text-xs text-gray-600 max-w-xl">
                We use cookies to improve your experience and analyze site traffic.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCookiePolicyOpen(true)}
              className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors"
            >
              Customize
            </button>
            <button
              onClick={rejectCookies}
              className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors"
            >
              Reject
            </button>
            <button
              onClick={acceptCookies}
              className="px-3 py-1.5 bg-theme-main text-white rounded-lg text-xs font-medium hover:bg-theme-dark transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>

      {/* Overlay with fade animation */}
      {cookiePolicyOpen ? (
        <div
          className="fixed inset-0 bg-black/40 z-[1000] transition-opacity duration-300 backdrop-blur-sm"
          style={{
            opacity: isModalExiting ? 0 : 1,
            pointerEvents: isModalExiting ? 'none' : 'auto',
          }}
          onClick={handleCloseModal}
          aria-label="Close cookie policy overlay"
        />
      ) : null}

      {/* Detailed Cookie Settings Modal with reduced font size */}
      {cookiePolicyOpen && (
        <div className={modalClass} style={modalStyle}>
          <div className="max-w-6xl mx-auto p-5">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src="/branding/chitchatAI.png"
                  alt="ChitChat AI Logo"
                  className="w-7 h-7 mr-2"
                />
                <h3 className="text-base font-semibold text-gray-800">
                  Cookie Settings
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-xs text-gray-600 mb-4 max-w-2xl">
              Control how we use cookies on this site. Essential cookies are required for basic functionality.
              <a
                href="#"
                className="text-theme-main underline hover:text-theme-dark ml-1"
                onClick={e => {
                  e.preventDefault();
                  setShowCookieInfoModal(true);
                }}
              >
                Privacy Policy
              </a>
            </p>
            {/* Cookie Info Modal */}
            {showCookieInfoModal && (
              <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
                <div className="fixed inset-0 bg-white rounded-none shadow-none w-full h-full p-0 flex flex-col animate-fade-in z-[1101]">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-lg font-bold text-theme-main">How We Use Cookies at ChitChat AI</h3>
                    <div className="flex items-center gap-2">
                      <button
                        className="text-gray-400 hover:text-theme-main text-xl"
                        onClick={() => setShowCookieInfoModal(false)}
                        aria-label="Minimize cookie info modal"
                      >
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="4" y="9" width="12" height="2" rx="1" fill="currentColor"/></svg>
                      </button>
                      <button
                        className="text-gray-400 hover:text-red-500 text-xl"
                        onClick={() => setShowCookieInfoModal(false)}
                        aria-label="Close cookie info modal"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto px-6 py-8">
                    <p className="text-gray-700 text-base mb-4">
                      ChitChat AI uses cookies to enhance your browsing experience, analyze site usage, and support our marketing efforts. Cookies help us remember your preferences, keep you logged in, and understand how you interact with our website.
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                      We comply with the Protection of Personal Information Act (POPIA) and South African cookie laws. This means:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 text-base mb-4">
                      <li>We only use essential cookies by default. Analytics and marketing cookies are optional and require your consent.</li>
                      <li>Your cookie preferences are stored securely and can be changed at any time.</li>
                      <li>We do not sell or share your personal data with third parties for advertising purposes.</li>
                      <li>All data collected via cookies is processed in accordance with South African law and our privacy policy.</li>
                    </ul>
                    <p className="text-gray-700 text-base">
                      For more information, please contact our support team or review our full privacy policy. By using our site, you agree to our use of cookies as described above.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {/* Technical cookies card */}
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <Shield className="text-theme-main mr-2" size={16} />
                    <h4 className="text-sm font-medium text-gray-800">
                      Essential Cookies
                    </h4>
                  </div>
                  <div className="bg-theme-main rounded-full w-10 h-5 flex items-center px-0.5">
                    <div className="bg-white rounded-full w-4 h-4 ml-auto shadow-sm"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">
                  Required for the website to function properly. Cannot be disabled.
                </p>
                <p className="text-xs text-gray-500 mt-1 italic">Always active</p>
              </div>

              {/* Analytics cookies card */}
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <BarChart className="text-gray-500 mr-2" size={16} />
                    <h4 className="text-sm font-medium text-gray-800">
                      Analytics
                    </h4>
                  </div>
                  <label className="relative inline-flex cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-theme-main"></div>
                  </label>
                </div>
                <p className="text-xs text-gray-600">
                  Help us improve by tracking usage patterns and site performance.
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-3 border-t border-gray-100">
              <button
                onClick={rejectCookies}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-xs font-medium hover:bg-gray-50 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 bg-theme-main text-white rounded-md text-xs font-medium hover:bg-theme-dark transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 bg-theme-main/10 text-theme-main rounded-md text-xs font-medium hover:bg-theme-main/20 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
