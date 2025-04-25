import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CookieBanner from './components/CookieBanner';
import Solutions from './pages/Solutions';
import ForBusinesses from './pages/ForBusinesses';
import CookiePolicy from './pages/CookiePolicy';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs';
import UseCases from './pages/UseCases';
import HomePage from './pages/HomePage';
import Values from './pages/Values'; // Import the Values page
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
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/values" element={<Values />} /> 
        </Routes>
        <CookieBanner />
      </div>
    </Router>
  );
};

export default App;