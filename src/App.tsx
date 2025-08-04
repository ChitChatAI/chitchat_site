import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
import Solutions from './pages/Solutions';
import DevelopmentWorkflow from './pages/DevelopmentWorkflow';
import NavBar from './components/NavBar';
import AnnouncementBanner from './components/AnnouncementBanner';
import Loader from './components/Loader';
import './App.css';
import useScrollAnimation from './hooks/useScrollAnimation';

const App: React.FC = () => {
  useScrollAnimation();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion (or use actual loading logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />

        {/* Show loader while loading */}
        {isLoading && <Loader />}

        {/* Main app content - hidden while loading */}
        <div style={{ display: isLoading ? 'none' : 'block' }}>
          {/* Persistent components */}
          <AnnouncementBanner />
          <NavBar />

          {/* Page content */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/development-workflow" element={<DevelopmentWorkflow />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;