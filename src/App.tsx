import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="parallax">
        <Header />
      </div>
      <main>
        <div className="parallax">
          <Hero />
        </div>
        <div className="parallax">
          <Features />
        </div>
        <div className="parallax">
          <Testimonials />
        </div>
        <div className="parallax">
          <Community />
        </div>
      </main>
      <div className="parallax">
        <CookieBanner />
      </div>
      <div className="parallax">
        <Footer />
      </div>
    </div>
  );
};

export default App;