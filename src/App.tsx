import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
import Industries from './pages/Industries';
import DevelopmentWorkflow from './pages/DevelopmentWorkflow';
import NavBar from './components/NavBar';
import AnnouncementBanner from './components/AnnouncementBanner';
import OchestrationShowcase from './pages/Overview';
import './App.css';
import useScrollAnimation from './hooks/useScrollAnimation';
import Channels from './pages/Channels';

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
            <Route path="/integrations/overview" element={<OchestrationShowcase />} />
            <Route path="/integrations/channels" element={<Channels />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/development-workflow" element={<DevelopmentWorkflow />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;