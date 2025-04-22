import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ForBusinesses: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  const fullText = "AI That Fits Seamlessly\nInto Your Operations";
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setHeaderText(fullText.substring(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 50);
    return () => clearInterval(typingInterval);
  }, [fullText]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-review');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate-slide-up');
        }
      });
    };

    handleScroll(); // Trigger on load
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const includedFeatures = [
    { title: 'Custom Persona Design', description: 'Psychology-driven personas that understand emotional nuance.' },
    { title: 'Tone & Personality Development', description: 'Carefully crafted voices that match your brand identity.' },
    { title: 'Industry-Specific Adaptation', description: 'Tailored knowledge base for your business vertical.' },
    { title: 'Integration Support', description: 'Works with your existing tech stack (chat, WhatsApp, voice, etc.).' },
    { title: 'Developer Collaboration', description: 'We work with your team or provide our own technical experts.' },
    { title: 'Continuous Improvements', description: 'Regular updates based on conversation data and feedback.' },
    { title: 'Human Testing & QA', description: 'Rigorous quality assurance by our psychology specialists.' }
  ];

  const businessValues = [
    {
      title: 'Reduce Support Costs',
      description: 'Replace call center agents or scale your operations without new hires.',
      icon: 'savings',
      metric: 'Up to 40% cost reduction',
    },
    {
      title: 'Boost Retention & Upsells',
      description: 'Drive revenue through nuanced conversations, not generic sales scripts.',
      icon: 'trending_up',
      metric: '20% increase in customer retention',
    },
    {
      title: 'Save Valuable Time',
      description: 'No writing prompts or managing AI yourself - we handle everything.',
      icon: 'schedule',
      metric: '30% faster response times',
    },
    {
      title: 'Gain Competitive Edge',
      description: 'Stand out by offering truly believable AI support before your competitors.',
      icon: 'workspace_premium',
      metric: '15% higher customer satisfaction',
    },
    {
      title: 'Improve Customer Experience',
      description: 'Create human-like interactions that feel personal and emotionally intelligent.',
      icon: 'sentiment_satisfied',
      metric: '95% positive feedback from users',
    },
  ];

  return (
    <>
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-white scroll-review opacity-0 transition-opacity duration-700">
          {/* Video background */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/businessesPage/businessVideo.mp4"
            autoPlay
            loop
            muted
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70 z-10"></div>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-20"></div>
          {/* Content */}
          <div className="relative z-30 text-center px-6">
            <h1
              ref={headerRef}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg min-h-[4rem]"
            >
              {headerText || "AI That Fits Seamlessly\nInto Your Operations"}
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto">
              We provide AI solutions that seamlessly integrate into your business operations, enhancing customer engagement and driving results.
            </p>
            <div className="mt-10">
              <ChevronDown size={32} className="animate-bounce mx-auto" />
            </div>
          </div>
        </section>

        {/* Features and Business Values Section */}
        <section
          className="relative py-20 px-6 sm:px-10 bg-cover bg-center bg-fixed scroll-review opacity-0 transition-opacity duration-700"
          style={{ backgroundImage: "url('/solutionsPage/solutions.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="relative z-20 max-w-6xl mx-auto">
            {/* Features Section */}
            <div className="mb-20 scroll-review opacity-0 transition-opacity duration-700">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
                What's Included When You Work With Us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {includedFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <Link
                      to={`/features/${index}`}
                      className="text-theme-main font-medium mt-4 inline-flex items-center hover:underline"
                    >
                      <ChevronDown size={16} className="mr-2 -rotate-90" /> Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Values Section */}
            <div className="scroll-review opacity-0 transition-opacity duration-700">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
                How ChitChat Adds Value to Your Business
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {businessValues.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center"
                  >
                    <span className="material-symbols-outlined text-theme-main text-4xl mb-4">
                      {value.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                    <p className="text-gray-600 mt-2">{value.description}</p>
                    <p className="text-theme-main font-bold mt-4">{value.metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 px-6 sm:px-10 bg-theme-main text-white scroll-review opacity-0 transition-opacity duration-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Ready to bring ChitChat into your business?
            </h2>
            <p className="text-lg mb-8">
              Let us help you transform your customer experience with cutting-edge AI solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact-us"
                className="bg-white text-theme-main px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Let's Talk
              </Link>
              <Link
                to="/book-call"
                className="bg-theme-dark text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ForBusinesses;

