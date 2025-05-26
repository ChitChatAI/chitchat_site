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
    {
      question: 'What industries can benefit from AI personas?',
      answer: 'AI personas can be tailored for industries such as healthcare, education, customer service, retail, and more, providing personalized and efficient interactions.'
    },
    {
      question: 'How do you ensure data privacy and security?',
      answer: 'We implement robust encryption, adhere to data protection regulations, and conduct regular security audits to safeguard your data.'
    },
    {
      question: 'Can the AI persona support multiple languages?',
      answer: 'Yes, our AI personas are designed to support multiple languages, ensuring seamless communication with diverse audiences.'
    },
    {
      question: 'What happens if we need to scale the AI persona?',
      answer: 'Our AI personas are built with scalability in mind, allowing for easy adaptation to increased demand or expanded functionalities.'
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

      {/* Tools We Work With Section */}
      <section className="relative bg-black py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
            Tools We Work With
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            { [
              { name: 'Chatbot', icon: 'chatbot.svg' },
              { name: 'Claude', icon: 'claude.svg' },
              { name: 'HTML5', icon: 'html5.svg' },
              { name: 'LangGraph', icon: 'langgraph.svg' },
              { name: 'n8n', icon: 'n8n.svg' },
              { name: 'Ollama', icon: 'ollama.svg' },
              { name: 'OpenAI', icon: 'openai.svg' },
              { name: 'Python', icon: 'python.svg' },
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full mb-4">
                  <img
                    src={`/workflow/${tool.icon}`}
                    alt={tool.name}
                    className="w-16 h-16"
                  />
                </div>
                <p className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent capitalize">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Steps Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Process Workflow
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A step-by-step guide to how we bring your AI persona to life, ensuring precision, professionalism, and innovation at every phase.
            </p>
          </div>
          <div className="space-y-16">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${index !== 0 ? 'mt-8' : ''}`}
              >
                <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {step.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {step.story}
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {step.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced FAQ Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Common Questions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have more questions? <Link to="/contact" className="text-purple-400 font-medium hover:underline">Contact our team</Link> for detailed answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h4>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300 ${openFAQ === idx ? 'bg-purple-400 border-purple-400' : 'border-gray-600'}`}>                    
                    <span className={`material-symbols-outlined text-sm ${openFAQ === idx ? 'text-white' : 'text-gray-400'}`}>
                      {openFAQ === idx ? 'remove' : 'add'}
                    </span>
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFAQ === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 py-4 border-t border-gray-700">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
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
