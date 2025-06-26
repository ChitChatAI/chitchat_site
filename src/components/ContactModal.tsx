import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={scrollToTop}
            className="border border-gray-700 shadow-sm transition-all duration-300 flex flex-col hover:shadow-md bg-black p-3 rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:bg-gradient-to-br from-gray-950 to-gray-950
/20 transition-all flex items-center justify-center group hover:scale-110"
            aria-label="Scroll to top"
          >
            <div className="text-white transform transition-transform duration-300 group-hover:-translate-y-1">
              <ChevronUp size={22} strokeWidth={1.5} />
            </div>
          </button>
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-theme-main to-theme-light rounded-full border-2 border-white animate-pulse"></span>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
