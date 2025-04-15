import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import MeetOurCEO from './components/MeetOurCEO'; // Import the new component
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <MeetOurCEO /> {/* Add the MeetOurCEO component here */}
        <Testimonials />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default App;