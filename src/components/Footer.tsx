import React, { useEffect } from 'react';

const Footer: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.scroll-review');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-gray-50 py-12 text-center">
        <div className="scroll-review mt-10 pt-6 border-t border-gray-200 opacity-0 transform translate-y-10 flex justify-center items-center">
          <p className="text-sm font-sans text-gray-600 leading-[150%] text-center">
            &copy; {new Date().getFullYear()} ChitChat AI. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

const someFunction = (n: any) => {
  if (typeof n === 'string' || Array.isArray(n)) {
      return n.indexOf('someValue');
  } else {
      console.error('Unexpected type for n:', typeof n, n);
      return -1; // Default value
  }
};

export default Footer;