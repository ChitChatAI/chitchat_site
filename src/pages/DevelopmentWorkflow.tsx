import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CallToAction from '../components/CallToAction';
import { initCustomCursor } from '../utils/cursorEffects';

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
    },      {
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
    }
  ];

  useEffect(() => {
    const cleanupCursor = initCustomCursor();
    return () => cleanupCursor();
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
    <section
      className="relative min-h-screen py-20 md:py-32 bg-black text-white font-sans overflow-hidden px-4 sm:px-8 flex items-center justify-center"
    >
      <img
        src="/blog/blog.png"
        alt="Development Workflow"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-10"></div>
      <div className="relative z-20 container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
          Development Workflow
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate-fade-in">
          A comprehensive journey from concept to deployment, ensuring your AI persona perfectly embodies your brand.
        </p>
        <a
          href="/contactus"
          className="mt-6 px-6 py-3 bg-white text-theme-main font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
    
    {/* Tools and Technologies Section */}
    <section className="relative bg-black py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0">
            <motion.div
                className="absolute top-10 left-10 w-64 h-64 rounded-full bg-green-500/20 mix-blend-overlay filter blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-orange-400/20 mix-blend-overlay filter blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h2 className="text-5xl font-header font-bold text-white mb-8">
                Tools We Work With
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-12">
                Our development process is powered by cutting-edge tools, databases, programming languages, and AI models to deliver exceptional results.
            </p>

            <motion.div
                className="flex flex-wrap justify-center items-center gap-8 bg-white/5 backdrop-blur-lg rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white/10"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.3,
                        },
                    },
                }}
            >
                {[
                    { name: "Claude", icon: "/workflow/claude.svg" },
                    { name: "LangGraph", icon: "/workflow/langgraph.svg" },
                    { name: "n8n", icon: "/workflow/n8n.svg" },
                    { name: "Python", icon: "/workflow/python.svg" },
                    { name: "OpenAI", icon: "/workflow/openai.svg" },
                    { name: "Ollama", icon: "/workflow/ollama.svg" },
                    { name: "Chatbot", icon: "/workflow/chatbot.svg" },
                    { name: "HTML5", icon: "/workflow/html5.svg" },
                ].map((tool, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center bg-white/5 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white/10"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={tool.icon}
                            alt={tool.name}
                            className="w-16 h-16 mb-4"
                            style={{ fill: 'var(--theme-main)' }}
                        />
                        <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>


       {/* Workflow Steps Section */}
      <motion.section 
        className="relative bg-black py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500/20 mix-blend-overlay filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-blue-400/20 mix-blend-overlay filter blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-16">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative shadow-lg rounded-lg p-8 border border-gray-700 hover:shadow-2xl transition-shadow duration-300"
              style={{
                clipPath: `polygon(
                  10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%
                )`,
                background: `linear-gradient(135deg, rgba(72, 61, 139, 0.8), rgba(123, 104, 238, 0.8))`,
              }}
              whileHover={{ scale: 1.05 }}
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
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2V6h4V4h-4zM0 34v-4H2v4h4v2H2v4H0v-4zm0-30V0H2v4h4v2H2v4H0V6h4V4H0z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        {/* Image Background with Subtle Overlay */}
        <div className="absolute inset-0">
          <img
            src="/businessesPage/BusinessBG.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        </div>

        {/* Custom decorative elements */}
        <div className="absolute right-10 top-10 w-40 h-40 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute left-10 bottom-10 w-60 h-60 bg-gray-400/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute inset-0 bg-purple-500/10"></div>

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
                className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white/10"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <h4 className="font-header font-semibold text-white pr-8">
                    {faq.question}
                  </h4>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                    openFAQ === idx ? 'bg-theme-main border-theme-main' : 'border-theme-main/30'
                  }`}>
                    <span className={`material-symbols-outlined text-sm ${
                      openFAQ === idx ? 'text-white' : 'text-theme-main' 
                    }`}>
                      {openFAQ === idx ? 'remove' : 'add'}
                    </span>
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFAQ === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 py-4 border-t border-white/10">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction bgImage="/solutionsPage/solutions.jpg" />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DevelopmentWorkflow;
