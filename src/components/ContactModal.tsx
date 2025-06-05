import React, { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';
import ContactUs from '../pages/ContactUs';

const ContactUsModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsExiting(false);
    }, 500);
  };

  const modalStyle = {
    transform: isExiting
      ? 'translateY(40px) scale(0.9) perspective(1000px) rotateX(10deg)'
      : 'translateY(0) scale(1) perspective(1000px) rotateX(0deg)',
    opacity: isExiting ? 0 : 1,
    filter: isExiting ? 'blur(4px)' : 'blur(0px)',
    transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease, filter 0.3s ease',
    transformOrigin: 'bottom center',
  };

  return (
    <>
      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:bg-white/20 transition-all flex items-center justify-center group hover:scale-110"
          aria-label="Contact Us"
        >
          <div className="transform transition-transform duration-300 group-hover:rotate-90">
            <Mail size={22} strokeWidth={1.5} />
          </div>
        </button>
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-theme-main to-theme-light rounded-full border-2 border-white animate-pulse"></span>
      </div>

      {/* Modal Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[1000] backdrop-blur-md"
          style={{
            opacity: isExiting ? 0 : 1,
            backdropFilter: isExiting ? 'blur(0px)' : 'blur(8px)',
            transition: 'opacity 0.4s ease, backdrop-filter 0.3s ease',
            pointerEvents: isExiting ? 'none' : 'auto',
          }}
          onClick={handleClose}
          aria-label="Close modal overlay"
        />
      )}

      {/* Modal Panel */}
      {isOpen && (
        <div
          className="backdrop-blur-md border border-white/10 fixed inset-0 z-[1001] max-h-[100vh] flex items-center justify-center px-4 sm:px-0 py-32"
          style={modalStyle}
        >
          <div className="w-full overflow-y-auto max-h-[90vh] rounded-2xl shadow-2xl relative">

            <div className="flex justify-end mt-12 mx-10">
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all backdrop-blur-md border border-white/10"
              >
                <X size={20} />
              </button>
            </div>
              <ContactUs />
          </div>
        </div>

      )}
    </>
  );
};

export default ContactUsModal;
