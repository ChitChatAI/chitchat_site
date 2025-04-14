import React, { useEffect, useState } from 'react';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookieConsent');
    if (!accepted) {
      setTimeout(() => setVisible(true), 1000); // slight delay for polish
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl px-6 py-3 text-sm text-gray-800 flex items-center gap-4 z-50 animate-fade-in max-w-[90vw] sm:max-w-xl">
      <div className="flex-1">
        We use cookies to enhance your experience. By continuing, you agree to our{" "}
        <a href="/cookie-policy" className="underline text-theme-main hover:text-theme-dark transition">cookie policy</a>.
      </div>
      <button
        onClick={handleAccept}
        className="bg-theme-main hover:bg-theme-dark text-white px-4 py-2 text-xs sm:text-sm rounded-full transition"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
