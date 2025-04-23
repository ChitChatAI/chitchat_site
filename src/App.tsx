import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import MeetOurCEO from './components/MeetOurCEO';
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Solutions from './pages/Solutions';
import ForBusinesses from './pages/ForBusinesses';
import CookiePolicy from './pages/CookiePolicy';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs'; 
import UseCases from './pages/UseCases'; // Import UseCases page
import './App.css';

const Home: React.FC = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Features />
      <MeetOurCEO />
      <Testimonials />
      <Community />
    </main>
    <Footer />
  </>
);

const LoadingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/partnerships" element={<ForBusinesses />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/use-cases" element={<UseCases />} /> 
        </Routes>
        <CookieBanner />
      </div>
    </Router>
  );
};

export default App;