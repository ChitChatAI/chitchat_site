import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { laptopOutline, menuOutline, closeOutline, chevronDownOutline } from 'ionicons/icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <IonIcon icon={laptopOutline} className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold">AIFramework</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {['Products', 'Resources', 'Docs', 'Company', 'Pricing'].map((item) => (
                <div key={item} className="relative group">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-primary-600">
                    <span>{item}</span>
                    <IonIcon icon={chevronDownOutline} className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-primary-600">
                Get a demo
              </button>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Sign Up
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <IonIcon 
              icon={isMobileMenuOpen ? closeOutline : menuOutline} 
              className="h-6 w-6"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Products', 'Resources', 'Docs', 'Company', 'Pricing'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
                >
                  {item}
                </a>
              ))}
              <div className="mt-4 space-y-2">
                <button className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                  Get a demo
                </button>
                <button className="block w-full px-3 py-2 text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;