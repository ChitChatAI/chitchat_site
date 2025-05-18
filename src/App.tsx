import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
import VisionBoard from './pages/VisionBoard'; 
import Solutions from './pages/Solutions';
import FeatureLearnMore from './pages/FeatureLearnMore';
import './App.css';
import useScrollAnimation from './hooks/useScrollAnimation';

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
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <LoadingSpinner />
            <p className="mt-4 text-gray-700 font-medium">Loading, please wait...</p>
          </div>
        </div>
      )}
    </>
  );
};

const App: React.FC = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/blog" element={<VisionBoard />} />
          <Route path="/features/:slug" element={<FeatureLearnMore />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;