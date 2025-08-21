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

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />

        <div>
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