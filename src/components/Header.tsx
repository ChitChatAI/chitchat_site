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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-5' : 'bg-transparent py-7'
        }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <div className="flex items-center relative">
              <div className={`text-3xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'} drop-shadow-sm transition-colors duration-300`}>
                ChitChat
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-theme-main absolute bottom-0.5 -right-3 animated-dot"></div>
            </div>

            {/* Navigation Links - Center */}
            <div className="hidden md:flex items-center justify-center space-x-10">
              <a href="#" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-base`}>
                Solutions
              </a>
              <a href="#" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm`}>
                Prompt Library
              </a>
              <a href="#" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm`}>
                Use Cases
              </a>
              <a href="#" className={`flex items-center ${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm`}>
                <span>For Businesses</span>
                <span className="ml-1 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
              </a>
              <a href="#" className={`${isScrolled ? 'text-gray-700 hover:text-theme-main' : 'text-white hover:text-theme-light'} transition-colors duration-200 text-sm`}>
                Pricing
              </a>
            </div>

            {/* Auth Buttons - Right */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className={`${isScrolled ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white'} 
                  px-6 py-3 rounded-full transition-all duration-200 font-medium text-base`}
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-theme-main hover:bg-theme-dark text-white px-6 py-3 rounded-full transition-all duration-200 font-medium text-base shadow-sm hover:shadow-md"
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
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Solutions</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Prompt Library</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Use Cases</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">
                <div className="flex items-center">
                  <span>For Businesses</span>
                  <span className="ml-2 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
                </div>
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-theme-main transition-colors">Pricing</a>
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
          <div className="container-large mx-auto px-6 text-left relative z-10">
            <div className="header_content flex flex-col items-start justify-center w-full">
              <div className="header_title-wrap is-home max-w-4xl">
                <div className="maxwidth-header-home mb-6">
                  <p className="hero-subheading text-base md:text-lg lg:text-xl text-white/80 font-medium font-sans pt-24">
                  </p>
                </div>
                <h1 className="hero-heading font-bold text-white leading-tight mb-8 font-sans text-left">
                  The Future of AI Conversations,<br className="hidden sm:block" />
                  So Real, You'll Forget It's Not.<br />
                  <span className="hero-gradient-text text-2xl md:text-3xl">Human Augmented AI by ChitChat</span>
                </h1>
                <p className="hero-description text-base md:text-lg text-white/80 max-w-3xl mb-10 font-sans">

                </p>
              </div>
              <div className="join-us_buttons-wrapper flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full">
                <a href="/contact-sales" className="hero-button-primary bg-theme-main hover:bg-theme-dark text-white px-8 py-4 rounded-full transition-all duration-200 font-medium text-base shadow-lg hover:shadow-xl font-sans">
                  Get a demo
                </a>
                <a href="/documentation" className="hero-button-secondary bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full transition-all duration-200 font-medium text-base font-sans">
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