import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CallToAction from '../components/CallToAction';
import CookieConsent from '../components/CookieConsent';

const DevelopmentWorkflow: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({ y: window.scrollY * 0.5 });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const workflowSteps = [
    {
      name: 'Phase 1: Conceptualization and Persona Development',
      description: 'Laying the foundation for your AI persona by defining its core attributes and objectives.',
      story: 'Our journey begins with a comprehensive analysis of your brand identity and goals. Leveraging advanced AI models, we meticulously craft a digital persona that embodies your unique vision. This phase ensures your AI is equipped with the personality, voice, and knowledge to resonate with your audience.',
      features: [
        "Identifying your brand's voice and values",
        "Defining personality traits aligned with your objectives",
        "Developing conversational capabilities",
        "Establishing a robust knowledge base",
        "Fine-tuning responses for precision",
        "Conducting thorough persona validation",
      ],
      button: 'Initiate Development',
      icon: 'psychology',
      phase: 'Conceptualization',
    },
    {
      name: 'Phase 2: Deployment and Integration',
      description: 'Seamlessly integrating your AI persona into real-world applications.',
      story: 'In this phase, your AI persona transitions from concept to reality. We ensure a smooth deployment across your platforms, enabling meaningful and consistent interactions. Rigorous testing and refinement guarantee optimal performance and alignment with your brand.',
      features: [
        'Comprehensive platform integration',
        'Real-world interaction testing and optimization',
        'Designing intelligent conversation flows',
        'Implementing adaptive response mechanisms',
        'Establishing learning frameworks',
        'Setting performance benchmarks',
      ],
      button: 'Launch Persona',
      icon: 'smart_toy',
      phase: 'Deployment',
    },
    {
      name: 'Phase 3: Continuous Evolution and Optimization',
      description: 'Ensuring your AI persona remains dynamic and aligned with evolving needs.',
      story: 'The journey of your AI persona does not end at deployment. Through continuous monitoring and iterative improvements, we enhance its capabilities and ensure it adapts to new challenges. This phase is dedicated to maintaining relevance and delivering exceptional value.',
      features: [
        'Learning from user interactions',
        'Adapting to emerging scenarios',
        'Expanding knowledge and functionality',
        'Enhancing emotional intelligence',
        'Optimizing decision-making processes',
        'Aligning with your business growth',
      ],
      button: 'Enhance Persona',
      icon: 'neurology',
      phase: 'Optimization',
    },
  ];

  const faqs = [
    {
      question: 'How long does the development process typically take?',
      answer: 'The initial persona development typically takes 4-6 weeks, followed by a 3-month integration phase. The enhancement phase is ongoing to ensure continuous improvement.',
    },
    {
      question: 'Can the AI persona be customized for multiple use cases?',
      answer: 'Yes, we can develop multiple personality variants for different contexts while maintaining your core brand identity.',
    },
    {
      question: 'What level of technical expertise do we need?',
      answer: "Our team handles all technical aspects. You'll need basic platform access and the ability to provide feedback on persona behavior and responses.",
    },
    {
      question: 'How do you ensure the AI stays aligned with our brand?',
      answer: 'We implement strict guardrails and continuous monitoring systems, plus regular review cycles to maintain brand alignment.',
    },
    {
      question: 'What kind of support is included in the enhancement phase?',
      answer: 'Continuous monitoring, regular updates, performance optimization, and proactive improvements based on usage analytics.',
    },
  ];

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-[#1a1a2e] text-white font-sans overflow-hidden px-4 sm:px-8 flex items-center justify-center"
      >
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/homePage/chitchat_bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-10"></div>
        </div>
        <div className="relative z-20 container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
            Development Workflow
          </h1>
          <p className="text-lg md:text-2xl mb-8 animate-fade-in">
            A comprehensive journey from concept to deployment, ensuring your AI persona perfectly embodies your brand.
          </p>
          <div className="flex space-x-3 mt-10 animate-fade-in-up delay-700 justify-center">
            <span className="w-4 h-4 rounded-full bg-theme-main animate-pulse"></span>
            <span className="w-4 h-4 rounded-full bg-purple-400 animate-pulse delay-150"></span>
            <span className="w-4 h-4 rounded-full bg-pink-400 animate-pulse delay-300"></span>
          </div>
        </div>
      </section>

      {/* Workflow Steps Section */}
      <motion.section
        className="relative bg-black py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3
            }
          }
        }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-purple-500/30 via-violet-400/20 to-fuchsia-600/25 mix-blend-overlay filter blur-3xl"
            animate={{
              scale: [0.9, 1.3, 1, 1.2, 0.9],
              opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
              rotate: [0, 15, 0, -15, 0]
            }}
            transition={{
              duration: 15,
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-16">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative shadow-lg rounded-lg p-8 border border-gray-700 hover:shadow-2xl transition-shadow duration-300"
              style={{
                clipPath: `polygon(
                  10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%
                )`,
                background: `linear-gradient(135deg, rgba(72, 61, 139, 0.8), rgba(123, 104, 238, 0.8))`,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.4), 0 4px 25px 0px rgba(0, 0, 0, 0.3)",
                background: "linear-gradient(135deg, rgba(82, 71, 149, 0.9), rgba(133, 114, 248, 0.9))",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center mb-6">
                <span className="material-symbols-outlined text-purple-400 text-4xl mr-4">
                  {step.icon}
                </span>
                <h2 className="text-2xl font-bold text-white">
                  {step.name}
                </h2>
              </div>
              <p className="text-gray-200 mb-4">
                {step.description}
              </p>
              <p className="text-gray-300 mb-6">
                {step.story}
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {step.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Advanced FAQ Section */}
      <section className="relative bg-black py-24 px-4 sm:px-10 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-90"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-theme-main/20 text-theme-main text-xs font-medium rounded-full mb-3">
              Process FAQ
            </span>
            <h2 className="text-5xl font-header font-bold text-white mb-4">
              Common Questions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have more questions?
              <Link to="/contact" className="text-theme-main font-medium mx-1 hover:underline">
                Contact our team
              </Link>
              for detailed answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl border border-white/10 hover:border-theme-main/30 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <h4 className="font-header font-semibold text-white pr-8">
                    {faq.question}
                  </h4>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300 ${openFAQ === idx ? 'bg-theme-main border-theme-main' : 'border-theme-main/30'
                    }`}>
                    <span className={`material-symbols-outlined text-sm ${openFAQ === idx ? 'text-white' : 'text-theme-main'
                      }`}>
                      {openFAQ === idx ? 'remove' : 'add'}
                    </span>
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFAQ === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="px-6 py-4 border-t border-white/10">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                    <hr className="my-4 border-white/10 w-16" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction bgImage="/solutionsPage/solutions.jpg" />
      <CookieConsent position="left" modalPosition="bottom" />
      <Footer />
    </>
  );
};

export default DevelopmentWorkflow;
