import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-3xl mx-auto pt-32 pb-20 px-6">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          We use cookies to improve functionality, analyze usage, and enhance user experience.
        </p>
        <p className="text-gray-700 leading-relaxed">
          You can manage your cookie preferences through your browser settings.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;
