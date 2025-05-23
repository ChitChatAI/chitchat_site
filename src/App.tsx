import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
import VisionBoard from './pages/VisionBoard'; 
import Solutions from './pages/Solutions';
import FeatureLearnMore from './pages/FeatureLearnMore';
import DevelopmentWorkflow from './pages/DevelopmentWorkflow';
import './App.css';
import useScrollAnimation from './hooks/useScrollAnimation';
import Loader from './components/Loader';

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

  const [isLoading, setIsLoading] = useState(() => {
    const hasLoadedBefore = localStorage.getItem('hasLoadedBefore');
    return !hasLoadedBefore; // Show loader only if not loaded before
  });

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('hasLoadedBefore', 'true'); // Mark as loaded
      }, 3000); // Show loader for 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <Router>
      <ScrollToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/blog" element={<VisionBoard />} />
            <Route path="/features/:slug" element={<FeatureLearnMore />} />
            <Route path="/development-workflow" element={<DevelopmentWorkflow />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;