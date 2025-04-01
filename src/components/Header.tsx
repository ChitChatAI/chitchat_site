import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <div className="flex items-center relative">
              <div className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'} drop-shadow-sm transition-colors duration-300`}>
                ChitChat
              </div>
              <div className="w-2 h-2 rounded-full bg-theme-main absolute bottom-0.5 -right-3 animated-dot"></div>
            </div>

            {/* Navigation Links - Center */}
            <div className="hidden md:flex items-center justify-center space-x-10">
              <a href="#" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm font-medium`}>
                Solutions
              </a>
              <a href="#" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm font-medium`}>
                Prompt Library
              </a>
              <a href="#" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm font-medium`}>
                Use Cases
              </a>
              <a href="#" className={`flex items-center ${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm font-medium`}>
                <span>For Businesses</span>
                <span className="ml-1 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
              </a>
              <a href="#" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm font-medium`}>
                Pricing
              </a>
            </div>

            {/* Auth Buttons - Right */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className={`${isScrolled ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white'} 
                  px-5 py-2.5 rounded-full transition-all duration-200 font-medium text-sm`}
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-theme-main hover:bg-theme-dark text-white px-5 py-2.5 rounded-full transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-2 bg-white rounded-md shadow-lg animate-fade-in">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Solutions</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Prompt Library</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Use Cases</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                <span>For Businesses</span>
                <span className="ml-1 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Pricing</a>
              <div className="px-4 py-2 flex flex-col space-y-2 border-t border-gray-100 mt-2 pt-2">
                <a href="#" className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-full text-center">
                  Sign In
                </a>
                <a href="#" className="w-full bg-theme-main hover:bg-theme-dark text-white px-4 py-2 rounded-full text-center">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <header className="section_header relative overflow-hidden min-h-screen flex items-center justify-center font-sans">
        <div className="padding-global py-24 w-full">
          <div className="container-large mx-auto px-6 text-center relative z-10">
            <div className="header_content flex flex-col items-center justify-center w-full">
              <div className="header_title-wrap is-home max-w-4xl mx-auto">
                <div className="maxwidth-header-home mb-6">
                  <p className="hero-subheading text-base md:text-lg lg:text-xl text-white/80 font-medium font-sans">
                    ChitChat's suite of powerful AI tools helps customer service teams deliver
                  </p>
                </div>
                <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 font-sans">
                  Human-like conversations,<br />
                  <span className="hero-gradient-text">powered by AI</span>
                </h1>
                <p className="hero-description text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-10 font-sans">
                  Build and deploy contextual AI responses that understand your customers and your business.
                </p>
              </div>
              <div className="join-us_buttons-wrapper flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full">
                <a href="/contact-sales" className="hero-button-primary bg-theme-main hover:bg-theme-dark text-white px-8 py-4 rounded-md transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl font-sans">
                  Get a demo
                </a>
                <a href="/documentation" className="hero-button-secondary bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md transition-all duration-200 font-medium text-lg font-sans">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background Video */}
        <div className="header_background-video-wrapper absolute inset-0 w-full h-full z-0">
          <div className="video-wrap w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              id="myVideo"
              poster="https://placehold.co/1920x1080/252525/ffffff?text=ChitChat+Background"
              className="w-full h-full object-cover"
            >
              <source
                src="/chitchat.mp4"
                type="video/mp4"
              />
            </video>
            
            {/* Enhanced video overlays - multiple layers for depth and readability */}
            {/* Base dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Vertical gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"></div>
            
            {/* Horizontal gradient with theme colors */}
            <div className="absolute inset-0 bg-gradient-to-r from-theme-main/30 via-transparent to-purple-900/30"></div>
            
            {/* Subtle noise texture for depth (optional) */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay" 
                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            
            {/* Vignette effect for focus */}
            <div className="absolute inset-0 bg-radial-gradient"></div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;