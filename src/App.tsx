import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Solutions from './pages/Solutions';
import ForBusinesses from './pages/Businesses';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
import Values from './pages/Values'; 
import VisionBoard from './pages/VisionBoard'; 
import Pricing from './pages/Pricing';
import './App.css';

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
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/partnerships" element={<ForBusinesses />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/contact us" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/values" element={<Values />} /> 
          <Route path="/vision board" element={<VisionBoard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;