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
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Community />
      </main>
      <CookieBanner />
      <Footer />
    </div>
  );
};

export default App;