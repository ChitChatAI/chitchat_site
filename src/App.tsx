import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ForBusinesses from './pages/Businesses';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
import Values from './pages/Values'; 
import VisionBoard from './pages/VisionBoard'; 
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

  return null; // Removed the loading spinner UI
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
          <Route path="/partnerships" element={<ForBusinesses />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/pricing" element={<Navigate replace to="/partnerships#pricing" />} />
          <Route path="/values" element={<Values />} /> 
          <Route path="/blog" element={<VisionBoard />} />
          <Route path="/features/:slug" element={<FeatureLearnMore />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
