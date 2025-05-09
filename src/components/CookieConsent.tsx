import React, { useState } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieConsentProps {
  position?: 'left' | 'right';
  modalPosition?: 'bottom' | 'right';
}

const CookieConsent: React.FC<CookieConsentProps> = ({
  position = 'left',
  modalPosition = 'bottom',
}) => {
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);

  const handleCloseModal = () => {
    setIsModalExiting(true);
    setTimeout(() => {
      setCookiePolicyOpen(false);
      setIsModalExiting(false);
    }, 300);
  };

  // Modal position classes
  const modalClass =
    modalPosition === 'right'
      ? 'fixed right-0 top-0 h-full bg-white shadow-lg p-6 w-full sm:w-[400px] max-h-screen overflow-y-auto z-[1001] transition-transform duration-300 ease-in-out'
      : 'fixed inset-x-0 mx-auto bottom-0 bg-white shadow-lg rounded-t-lg p-6 w-full sm:w-[500px] max-h-[90vh] overflow-y-auto z-[1001] transition-transform duration-300 ease-in-out';

  const modalStyle =
    modalPosition === 'right'
      ? {
          transform: isModalExiting ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        }
      : {
          transform: isModalExiting ? 'translateY(100%)' : 'translateY(0)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        };

  // Overlay for modal
  const overlay =
    cookiePolicyOpen ? (
      <div
        className="fixed inset-0 bg-black/40 z-[1000] transition-opacity duration-300"
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
      <div
        className={`fixed bottom-6 ${position === 'left' ? 'left-6' : 'right-6'} z-50`}
      >
        <button
          onClick={() => setCookiePolicyOpen(!cookiePolicyOpen)}
          className="bg-theme-main text-white p-4 rounded-full shadow-lg hover:bg-theme-dark transition-all flex items-center justify-center"
          aria-label="Cookie Policy"
        >
          <div className="transform transition-transform duration-300 hover:rotate-12">
            <Cookie size={24} strokeWidth={1.5} />
          </div>
        </button>
      </div>

      {/* Overlay */}
      {overlay}

      {/* Modal */}
      {cookiePolicyOpen && (
        <div className={modalClass} style={modalStyle}>
          {/* ChitChat logo */}
          <div className="flex justify-center mb-4">
            <img
              src="/branding/chitchatAI.png"
              alt="ChitChat AI Logo"
              className="w-12 h-auto"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Your cookie preferences</h3>
            <button
              onClick={handleCloseModal}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-5">
            We use cookies to keep our site secure and user-friendly, and to carry out the activities stated below.
          </p>

          <p className="text-sm text-gray-600 mb-5">
            You can customize your cookie preferences at any time by toggling the options on or off.
          </p>

          <p className="text-sm text-gray-600 mb-6">
            For more information, have a look at our{' '}
            <a href="#" className="text-theme-main underline hover:text-theme-dark">
              Privacy and Cookie Policy
            </a>
          </p>

          <div className="border-t border-gray-200 pt-4 mb-5">
            <h4 className="text-sm font-semibold mb-4">Manage consent preferences</h4>

            {/* Technical cookies toggle - always active */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm font-medium text-gray-800">Technical cookies</p>
                <p className="text-xs text-gray-500">Always active</p>
              </div>
              <div className="bg-theme-main rounded-full w-10 h-5 flex items-center px-0.5">
                <div className="bg-white rounded-full w-4 h-4 ml-auto shadow-sm"></div>
              </div>
            </div>

            {/* Analytics cookies toggle */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm font-medium text-gray-800">Analytics cookies</p>
              </div>
              <button className="bg-gray-200 rounded-full w-10 h-5 flex items-center px-0.5 hover:bg-gray-300 transition-colors">
                <div className="bg-white rounded-full w-4 h-4 shadow-sm"></div>
              </button>
            </div>
          </div>

          <div className="flex justify-between space-x-3 pt-3 border-t border-gray-200">
            <button
              onClick={handleCloseModal}
              className="flex-1 py-2 border border-gray-300 text-gray-700 rounded font-medium hover:bg-gray-50 transition-colors"
            >
              Reject all
            </button>
            <button
              onClick={handleCloseModal}
              className="flex-1 bg-theme-main text-white py-2 rounded font-medium hover:bg-theme-dark transition-colors"
            >
              Confirm my choices
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
