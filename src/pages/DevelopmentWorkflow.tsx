import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CallToAction from '../components/CallToAction';
import CookieConsent from '../components/CookieConsent';
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
    }, {
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
          <div className="flex space-x-3 mt-10 animate-fade-in-up delay-700 justify-center">
            <span className="w-4 h-4 rounded-full bg-theme-main animate-pulse"></span>
            <span className="w-4 h-4 rounded-full bg-purple-400 animate-pulse delay-150"></span>
            <span className="w-4 h-4 rounded-full bg-pink-400 animate-pulse delay-300"></span>
          </div>
        </div>
      </section>

      {/* Tools and Technologies Section */}
      <section className="relative bg-black py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0">
          {/* Code particles floating in background */}
          <div className="absolute inset-0 opacity-10">
            {Array(15).fill(0).map((_, i) => (
              <motion.div
                key={`code-particle-${i}`}
                className="absolute text-xs text-green-400 font-mono"
                initial={{
                  opacity: 0.1,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{
                  opacity: [0.1, 0.5, 0.1],
                  y: [0, Math.random() * -100, 0],
                  rotate: [0, Math.random() * 20 - 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: Math.random() * 10 + 5,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              >
                {["</>", "{ }", "AI", "function()", "import", "export", "=>", "class", "const", "let"][i % 10]}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-bl from-green-500/30 via-emerald-400/20 to-teal-400/25 mix-blend-overlay filter blur-3xl"
            animate={{
              scale: [1, 1.3, 0.9, 1.2, 1],
              opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
              borderRadius: ["50%", "60% 40% 70% 30%", "30% 70% 40% 60%", "40% 60% 30% 70%", "50%"],
              rotate: [0, 20, -10, 15, 0]
            }}
            transition={{
              duration: 18,
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />

          {/* Neural network pattern animation */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <motion.g>
              {Array(12).fill(0).map((_, i) => (
                <motion.circle
                  key={`node-${i}`}
                  r="5"
                  cx={200 + Math.cos(i / 6 * Math.PI) * 100}
                  cy={300 + Math.sin(i / 6 * Math.PI) * 100}
                  fill="#a855f7"
                  initial={{ opacity: 0.5 }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.3, 1],
                    cx: [
                      200 + Math.cos(i / 6 * Math.PI) * 100,
                      200 + Math.cos((i + 0.5) / 6 * Math.PI) * 120,
                      200 + Math.cos(i / 6 * Math.PI) * 100
                    ],
                    cy: [
                      300 + Math.sin(i / 6 * Math.PI) * 100,
                      300 + Math.sin((i + 0.5) / 6 * Math.PI) * 120,
                      300 + Math.sin(i / 6 * Math.PI) * 100
                    ]
                  }}
                  transition={{
                    duration: 10 + i,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }}
                />
              ))}
              {Array(15).fill(0).map((_, i) => (
                <motion.line
                  key={`connection-${i}`}
                  x1={200 + Math.cos(i / 7 * Math.PI) * 100}
                  y1={300 + Math.sin(i / 7 * Math.PI) * 100}
                  x2={200 + Math.cos((i + 3) / 7 * Math.PI) * 100}
                  y2={300 + Math.sin((i + 3) / 7 * Math.PI) * 100}
                  stroke="#a855f7"
                  strokeWidth="1"
                  initial={{ opacity: 0.2 }}
                  animate={{
                    opacity: [0.1, 0.4, 0.1],
                    strokeWidth: [1, 2, 1]
                  }}
                  transition={{
                    duration: 8 + i % 5,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                />
              ))}
            </motion.g>
          </svg>

          <motion.div
            className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-orange-400/30 to-pink-500/20 mix-blend-overlay filter blur-3xl"
            animate={{
              scale: [1, 1.2, 0.9, 1.1, 1],
              opacity: [0.2, 0.4, 0.3, 0.5, 0.2],
              rotate: [0, 5, -5, 3, 0],
              borderRadius: ["50% 50%", "60% 40%", "40% 60%", "55% 45%", "50% 50%"],
            }}
            transition={{
              duration: 12,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />

          {/* Additional floating elements for more visual interest */}
          <motion.div
            className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-cyan-400/25 mix-blend-overlay filter blur-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0.2, 1.1, 0.2],
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              delay: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />

          <motion.div
            className="absolute bottom-20 right-72 w-16 h-16 rounded-full bg-purple-400/30 mix-blend-plus-lighter filter blur-lg"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.6, 1.2, 0.6],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 7,
              delay: 1,
              repeat: Infinity,
              repeatType: "mirror",
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
                className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white/10 w-32 h-32"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-12 h-12 mb-3 object-contain"
                  style={{ fill: 'var(--theme-main)' }}
                />
                <h3 className="text-sm font-semibold text-white text-center">{tool.name}</h3>
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
        <div className="absolute inset-0">          <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-purple-500/30 via-violet-400/20 to-fuchsia-600/25 mix-blend-overlay filter blur-3xl"
          animate={{
            scale: [0.9, 1.3, 1, 1.2, 0.9],
            opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
            background: [
              "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(147,51,234,0.2) 60%, rgba(168,85,247,0.1) 100%)",
              "radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(147,51,234,0.3) 60%, rgba(168,85,247,0.2) 100%)",
              "radial-gradient(circle, rgba(139,92,246,0.3) 10%, rgba(147,51,234,0.2) 50%, rgba(168,85,247,0.3) 90%)",
              "radial-gradient(circle, rgba(139,92,246,0.2) 20%, rgba(147,51,234,0.3) 70%, rgba(168,85,247,0.2) 100%)",
              "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(147,51,234,0.2) 60%, rgba(168,85,247,0.1) 100%)"
            ],
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

          {/* Additional floating orbs */}
          <motion.div
            className="absolute top-40 left-40 w-20 h-20 rounded-full bg-indigo-500/20 mix-blend-screen filter blur-xl"
            animate={{
              x: [0, 30, -20, 10, 0],
              y: [0, -20, 30, -10, 0],
              opacity: [0.1, 0.5, 0.3, 0.6, 0.1],
              scale: [0.8, 1.2, 0.9, 1.1, 0.8]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute top-8 left-1/3 w-12 h-12 rounded-full bg-fuchsia-400/30 mix-blend-overlay filter blur-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
              x: [0, 80, 0],
              y: [0, 40, 0]
            }}
            transition={{
              duration: 10,
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-tr from-blue-500/30 via-sky-400/25 to-cyan-300/20 mix-blend-overlay filter blur-3xl"
            animate={{
              scale: [1, 1.15, 0.95, 1.1, 1],
              opacity: [0.2, 0.5, 0.3, 0.4, 0.2],
              filter: ["blur(24px)", "blur(32px)", "blur(24px)", "blur(36px)", "blur(24px)"],
              rotate: [0, 10, -5, 8, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1]
            }}
          />

          {/* Flowing particle effect */}
          <motion.div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
            <div className="relative w-full h-full">
              {Array(5).fill(0).map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className={`absolute w-2 h-2 rounded-full bg-white/80`}
                  style={{
                    top: `${20 + 10 * i}%`,
                    left: `-20px`,
                    boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.4)'
                  }}
                  animate={{
                    x: [0, window.innerWidth + 40],
                    y: [0, Math.sin(i * 30) * 100, 0, Math.sin(i * 60) * -100, 0],
                    opacity: [0, 0.8, 1, 0.8, 0]
                  }}
                  transition={{
                    duration: 15,
                    delay: i * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
          </motion.div>
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
              }} whileHover={{
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

      {/* Call to Action Section */}
      <CallToAction bgImage="/solutionsPage/solutions.jpg" />
      <CookieConsent position="left" modalPosition="bottom" />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DevelopmentWorkflow;
