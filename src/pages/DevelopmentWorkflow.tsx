import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CallToAction from '../components/CallToAction';
import CookieConsent from '../components/ChatModal';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import SeoHelmet from '../components/SEOHelmet';

const DevelopmentWorkflow: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenFAQ(openFAQ === index ? null : index);

  // SEO Configuration
  const seoConfig = {
    title: "ChitChat AI | Our AI Development Process - Psychology + Technology",
    description: "Discover our comprehensive AI persona development workflow from concept to deployment. Psychology-driven approach for creating emotionally intelligent digital humans.",
    keywords: "Persona, Persona Development, Personas, AI development process, psychology-driven AI, persona creation workflow, AI deployment, continuous AI optimization, digital human development",
    path: "/development-workflow"
  };

  const workflowSteps = [
    {
      name: 'Phase 1: Conceptualization and Persona Development',
      description: 'Laying the foundation for your AI persona by defining its core attributes and objectives.',
      story: 'Our journey begins with a comprehensive analysis of your brand identity and goals. Leveraging advanced AI models, we meticulously craft a digital persona that embodies your unique vision.',
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
      story: 'In this phase, your AI persona transitions from concept to reality. We ensure a smooth deployment across your platforms, enabling meaningful and consistent interactions.',
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
      story: 'The journey of your AI persona does not end at deployment. Through continuous monitoring and iterative improvements, we enhance its capabilities and ensure it adapts to new challenges.',
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
      answer: 'The initial persona development typically takes 4-6 weeks, followed by a 3-month integration phase.',
    },
    {
      question: 'Can the AI persona be customized for multiple use cases?',
      answer: 'Yes, we can develop multiple personality variants for different contexts while maintaining your core brand identity.',
    },
    {
      question: 'What level of technical expertise do we need?',
      answer: "Our team handles all technical aspects. You'll need basic platform access and the ability to provide feedback.",
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
      answer: 'AI personas can be tailored for industries such as healthcare, education, customer service, retail, and more.'
    },
  ];

  const tools = [
    { name: 'Chatbot', icon: 'chatbot.svg' },
    { name: 'Claude', icon: 'claude.svg' },
    { name: 'HTML5', icon: 'html5.svg' },
    { name: 'LangGraph', icon: 'langgraph.svg' },
    { name: 'n8n', icon: 'n8n.svg' },
    { name: 'Ollama', icon: 'ollama.svg' },
    { name: 'OpenAI', icon: 'openai.svg' },
    { name: 'Python', icon: 'python.svg' },
  ];

  const heroRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);

  const isInViewTools = useInView(toolsRef, { once: true, margin: '-100px' });
  const isInViewWorkflow = useInView(workflowRef, { once: true, margin: '-100px' });
  const isInViewFAQ = useInView(faqRef, { once: true, margin: '-100px' });

  return (
    <>
    
      <SeoHelmet
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        path={seoConfig.path}
      />

      <NavBar />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden"
        style={{ y: yHero, opacity: opacityHero }}
        aria-label="Development Workflow Hero Section"
      >
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover object-center opacity-70">
            <source src="/homePage/chitchat_bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0">
        <div
          className="w-full h-full backdrop-blur-[10px] border-t border-white/10"
          style={{
            background:
              'linear-gradient(135deg, rgba(120,80,200,0.15) 0%, rgba(60,30,120,0.1) 100%)',
            boxShadow: 'inset 0 0 1px rgba(255, 255, 255, 0.3)',
          }}
        />
      </div>
        <div className="relative z-20 max-w-5xl w-full px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Development <span className="text-gray-100 text-4xl md:text-5xl lg:text-6xl">Workflow</span>
          </h1>
          <p className="text-white text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            A comprehensive journey from concept to deployment, ensuring your AI persona perfectly embodies your brand.
          </p>
        </div>
      </motion.section>

      {/* Tools Section */}
      <motion.section
        ref={toolsRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isInViewTools ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-16 bg-gradient-to-br from-gray-950 to-gray-950
"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-100 text-3xl font-bold text-center mb-12">Tools We Work With</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                  <img src={`/workflow/${tool.icon}`} alt={tool.name} className="w-10 h-10" />
                </div>
                <p className="text-lg font-medium text-gray-200">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Workflow Steps Section */}
      <motion.section
        ref={workflowRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isInViewWorkflow ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-16 bg-gradient-to-br from-gray-950 to-gray-950"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-100 text-3xl font-bold mb-4">Our Development Workflow</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From discovery to deployment, here's how we craft AI personas that don't just function — they resonate.
            </p>
          </div>
          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-700 rounded-lg overflow-hidden shadow-sm transition-all duration-300 flex flex-col hover:shadow-md bg-black p-10"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-theme-main/40 text-white rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-100">{step.name}</h3>
                </div>
                <p className="text-lg text-gray-200 mb-4">{step.description}</p>
                <p className="text-gray-200 mb-6">{step.story}</p>
                <ul className="space-y-3">
                  {step.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-gray-200 mt-0.5 mr-3">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isInViewFAQ ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-16 bg-gradient-to-br from-gray-950 to-gray-950
"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-100 text-3xl font-bold mb-4">Common Questions</h2>
            <p className="text-gray-200">
              Have more questions? <Link to="/contactus" className="text-white hover:underline">Contact our team</Link>
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-700 rounded-lg overflow-hidden shadow-sm transition-all duration-300 flex flex-col hover:shadow-md bg-black">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <h4 className="text-lg font-medium text-gray-200">{faq.question}</h4>
                  <svg className={`w-5 h-5 text-gray-100 transition-transform ${openFAQ === idx ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === idx && (
                  <div className="px-6 py-4 bg-gradient-to-br from-gray-950 to-gray-950
">
                    <p className="text-gray-200">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <CallToAction />
      <CookieConsent />
      <Footer />
    </>
  );
};

export default DevelopmentWorkflow;
