import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CallToAction from '../components/CallToAction';
import CookieConsent from '../components/ContactModal';

const DevelopmentWorkflow: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
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

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/homePage/hero-banner.png"
          alt="Human Augmented AI Background"
          className="w-full h-full object-cover object-center opacity-70"
        />
      </div>

      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full backdrop-blur-[4px] rounded-none shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2)] border-t border-white/10" />
      </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Development Workflow
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            A comprehensive journey from concept to deployment, ensuring your AI persona perfectly embodies your brand.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tools We Work With
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                  <img
                    src={`/workflow/${tool.icon}`}
                    alt={tool.name}
                    className="w-10 h-10"
                  />
                </div>
                <p className="text-lg font-medium text-gray-800">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our Development Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovery to deployment, here's how we craft AI personas that don't just function — they resonate.
            </p>
          </div>
          
          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-theme-main/40 text-white rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {step.name}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-700 mb-4">
                  {step.description}
                </p>
                
                <p className="text-gray-600 mb-6">
                  {step.story}
                </p>
                
                <ul className="space-y-3">
                  {step.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-theme-main mt-0.5 mr-3">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Common Questions
            </h2>
            <p className="text-gray-600">
              Have more questions? <Link to="/contactus" className="text-blue-600 hover:underline">Contact our team</Link>
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                >
                  <h4 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h4>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFAQ === idx ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === idx && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <CookieConsent />
      <Footer />
    </>
  );
};

export default DevelopmentWorkflow;