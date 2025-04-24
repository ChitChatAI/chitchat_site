import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ForBusinesses: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  const fullText = "AI That Fits Seamlessly\nInto Your Operations";
  const headerRef = useRef<HTMLHeadingElement>(null);
  const controls = useAnimation();

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

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

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
          initial="hidden"
          animate="visible"
          variants={scrollAnimation}
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
          <motion.div
            className="relative z-20 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollAnimation}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Features Section */}
            <section
              className="relative py-20 px-6 sm:px-10 bg-gradient-to-b from-gray-50 to-gray-100 scroll-review opacity-0 transition-opacity duration-700"
            >
              <div className="relative z-20 max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-800">
                  What's Included When You Work With Us
                </h2>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-theme-main"></div>
                  <div className="space-y-12">
                    {includedFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className={`relative flex items-center ${
                          index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                        } scroll-review`}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        <div className="flex-1 px-6 text-right">
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                        <div className="w-10 h-10 bg-theme-main text-white flex items-center justify-center rounded-full shadow-lg mx-6">
                          <span className="text-lg font-bold">{index + 1}</span>
                        </div>
                        <div className="flex-1 px-6 text-left">
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Business Values Section */}
            <motion.div
              className="scroll-review opacity-0 transition-opacity duration-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scrollAnimation}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-800">
                How ChitChat Adds Value to Your Business
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {businessValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={scrollAnimation}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-theme-main text-white rounded-full mx-auto mb-4">
                      <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600 mb-4">{value.description}</p>
                    <p className="text-theme-main font-bold text-lg">{value.metric}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
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

