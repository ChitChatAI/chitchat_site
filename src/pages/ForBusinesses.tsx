import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion'; // Added useAnimation
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ForBusinesses: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  const fullText = "AI That Fits Seamlessly\nInto Your Operations";
  const headerRef = useRef<HTMLHeadingElement>(null);
  const controls = useAnimation(); // Animation controls for parallax

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

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 }); // Trigger parallax animation on load
  }, [controls]);

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
        <motion.section
          className="relative min-h-screen flex items-center justify-center text-white scroll-review opacity-0 transition-opacity duration-700"
          initial={{ opacity: 0, y: 50 }} // Parallax animation starts here
          animate={controls} // Controlled by framer-motion
          transition={{ duration: 1, ease: 'easeOut' }}
        >
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
            <div className="h-32 flex items-center justify-center mb-6">
              <h2
                ref={headerRef}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg min-h-[4rem]"
              >
                {headerText && headerText.split('\n').map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </h2>
            </div>
            <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto">
              We provide AI solutions that seamlessly integrate into your business operations, enhancing customer engagement and driving results.
            </p>
            <div className="mt-10">
              <ChevronDown size={32} className="animate-bounce mx-auto" />
            </div>
          </div>
        </motion.section>

        {/* Features and Business Values Section */}
        <section
          className="relative py-20 px-6 sm:px-10 bg-gradient-to-b from-gray-50 to-gray-100 scroll-review opacity-0 transition-opacity duration-700"
        >
          <div className="relative z-20 max-w-7xl mx-auto">
            {/* Features Section */}
            <div className="mb-20 scroll-review opacity-0 transition-opacity duration-700">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-800">
                What's Included When You Work With Us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {includedFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <Link
                      to={`/features/${index}`}
                      className="text-theme-main font-medium inline-flex items-center hover:underline"
                    >
                      <ChevronDown size={16} className="mr-2 -rotate-90" /> Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Values Section */}
            <div className="scroll-review opacity-0 transition-opacity duration-700">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-800">
                How ChitChat Adds Value to Your Business
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {businessValues.map((value, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-theme-main text-white rounded-full mx-auto mb-4">
                      <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600 mb-4">{value.description}</p>
                    <p className="text-theme-main font-bold text-lg">{value.metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section
          className="relative py-16 px-6 sm:px-10 text-white bg-cover bg-center scroll-review"
          style={{ backgroundImage: "url('/solutionsPage/solutions.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <motion.div
            className="relative z-20 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              Discover how ChitChat can transform your customer experience with tailored AI solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact-us"
                className="bg-white text-black px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:bg-gray-100 hover:text-theme-main transition-all"
              >
                Contact Us
              </Link>
              <Link
                to="/book-call"
                className="bg-theme-main text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:bg-theme-dark transition-all"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ForBusinesses;

