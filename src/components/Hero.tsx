import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
      <div className="relative container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Applications that can reason.
          <br />
          Powered by our AI framework.
        </h1>
        <p className="text-xl md:text-2xl text-primary-100 mb-12 animate-fade-in-delay">
          Build, run, and manage your AI applications seamlessly.
        </p>
        <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-900 bg-white rounded-lg hover:bg-primary-50 transition-colors animate-fade-in-delay-2">
          Get Started
          <IonIcon icon={arrowForwardOutline} className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Hero;