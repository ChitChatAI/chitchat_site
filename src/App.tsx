import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
import VisionBoard from './pages/Personas';
import Solutions from './pages/Solutions';
import FeatureLearnMore from './pages/FeatureLearnMore';
import DevelopmentWorkflow from './pages/DevelopmentWorkflow';
import './App.css';
import useScrollAnimation from './hooks/useScrollAnimation';
import WhyAIPersonas from './pages/WhyAIPersonas';
import WhatsAPersona from './pages/WhatsAPersona';

const App: React.FC = () => {
  useScrollAnimation();

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/behind-personas" element={<VisionBoard />} />
          <Route path="/features/:slug" element={<FeatureLearnMore />} />
          <Route path="/development-workflow" element={<DevelopmentWorkflow />} />
          <Route path="/why-ai-personas" element={<WhyAIPersonas />} />
          <Route path="/whats-a-persona" element={<WhatsAPersona />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
