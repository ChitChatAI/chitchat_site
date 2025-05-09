import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { Cookie, X } from 'lucide-react';
import NavBar from '../components/NavBar';

const Pricing: React.FC = () => {
  const [headerText, setHeaderText] = useState("");
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);
  const controls = useAnimation();
  const fullText = "Transparent Pricing\nPrices that Scale with You";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      controls.start({ y: window.scrollY * 0.5 });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setHeaderText(fullText.substring(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 50);
    return () => clearInterval(typingInterval);
  }, [fullText]);

  const isPricingPage = location.pathname === '/pricing';

  const plans = [
    {
      name: 'Persona Development',
      description: 'One-time setup of a brand-aligned, production-ready AI persona.',
      price: '$20,000',
      frequency: 'once-off',
      features: [
        'Persona research & scripting',
        'Brand tone & voice customization',
        'Prompt testing & handoff',
      ],
      button: 'Start Development',
      icon: 'design_services',
    },
    {
      name: 'Integration & Deployment',
      description: '3-month rollout with technical and strategic onboarding.',
      price: '$5,000',
      frequency: '/month (x3)',
      features: [
        'Seamless API integration support',
        'Launch & testing support',
        'Weekly iteration and feedback',
      ],
      button: 'Start Integration',
      icon: 'integration_instructions',
    },
    {
      name: 'Maintenance',
      description: 'Ongoing updates, model tuning, and performance monitoring.',
      price: '$500',
      frequency: '/month (x21)',
      features: [
        'Model & persona updates',
        'Usage monitoring and insights',
        'Ongoing optimization support',
      ],
      button: 'Contact Sales',
      icon: 'settings',
    },
  ];

  const faqs = [
    {
      question: 'Do you offer custom pricing for multiple personas?',
      answer: 'Yes. We offer volume discounts and enterprise bundling — contact us for details.',
    },
    {
      question: 'Can we pause or delay the maintenance phase?',
      answer: 'Maintenance is flexible. We’ll work with your roadmap to adapt timing.',
    },
    {
      question: 'Can we bring our own model or infrastructure?',
      answer: 'Yes, our personas work with any LLM — you can use your own OpenAI key or infra.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We specialize in industries like healthcare, finance, e-commerce, and telecoms, but our solutions are adaptable to any sector.',
    },
    {
      question: 'How long does it take to develop a persona?',
      answer: 'Persona development typically takes 4-6 weeks, depending on the complexity and requirements.',
    },
    {
      question: 'Do you provide ongoing support after deployment?',
      answer: 'Yes, we offer maintenance plans that include updates, performance monitoring, and optimization.',
    },
    {
      question: 'Can we integrate the AI persona with our existing systems?',
      answer: 'Absolutely. Our integration process ensures seamless compatibility with your existing tech stack.',
    },
    {
      question: 'What is the cost of additional integrations?',
      answer: 'Additional integrations are priced based on complexity. Contact us for a custom quote.',
    },
    {
      question: 'Can we customize the persona’s tone and style?',
      answer: 'Yes, we work closely with your team to ensure the persona reflects your brand’s tone and style.',
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide training sessions to help your team manage and optimize the AI persona.',
    },
    {
      question: 'What happens if we need to scale quickly?',
      answer: 'Our solutions are designed to scale seamlessly. We can support rapid scaling with minimal downtime.',
    },
    {
      question: 'Is there a trial period for your services?',
      answer: 'We do not offer trials, but we provide detailed demos and consultations to ensure our solution meets your needs.',
    },
  ];

  const handleCloseModal = () => {
    setIsModalExiting(true);
    setTimeout(() => {
      setCookiePolicyOpen(false);
      setIsModalExiting(false);
    }, 300); // Match animation duration
  };

  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section with Overlay */}
      <motion.section
        className="relative min-h-screen px-8 sm:px-12 lg:px-20 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/businessesPage/BusinessBG.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Purplish Glass Overlay */}
        <div className="absolute inset-0 border border-white/10 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.1)] z-10" />
        <div className="absolute inset-0 z-20 bg-[#260a40]/30 backdrop-blur-[5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-purple-400/20 to-transparent z-10 pointer-events-none" />


        {/* Hero Content */}
        <motion.div
          className="relative z-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-white font-header text-[clamp(2rem,6vw,3.25rem)] leading-[150%] tracking-tight sm:leading-[1.4] animate-fade-in delay-100 drop-shadow-md">
            Transparent Pricing<br />Prices that Scale with You
          </h1>
          <p className="text-lg text-white sm:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-[150%]">
            Choose the plan that fits your business needs and scale effortlessly.
          </p>
          <div className="absolute bottom- left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
          </div>
        </motion.div>
      </motion.section>

      {/* Pricing Hero Section */}
      <section
        id="pricing"
        className="relative bg-cover bg-center py-20 px-6 sm:px-10"
        style={{
          backgroundImage: "url('/pricingPage/pricingBg.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          {/* Removed the heading and description */}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-gray-50 py-20 px-4 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Plans
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            Clear, phase-based pricing with no surprises.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-theme-main p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[580px]"
              style={{
                clipPath: "polygon(45px 0%, 100% 0%, 100% calc(100% - 45px), calc(100% - 45px) 100%, 0% 100%, 0% 45px)",
              }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
            >
              <div>
                <div className="flex items-center mb-6 space-x-4">
                  <span className="material-symbols-outlined text-theme-main text-4xl">{plan.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">{plan.name}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-base text-gray-500 ml-1">{plan.frequency}</span>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="material-symbols-outlined text-theme-main mr-2 text-lg">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <button
                  className={`w-full py-3 px-6 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 ${plan.name === 'Maintenance'
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-theme-main text-white hover:bg-theme-dark'
                    }`}
                >
                  {plan.button}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-10 lg:px-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="relative bg-white border border-theme-main p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{
                  clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left flex justify-between items-center text-gray-800 font-medium text-lg focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`text-theme-main text-2xl transform transition-transform duration-300 ${
                      openFAQ === idx ? "rotate-180" : ""
                    }`}
                  >
                    {openFAQ === idx ? "−" : "+"}
                  </span>
                </button>
                {openFAQ === idx && (
                  <motion.div
                    className="mt-4 text-gray-600 text-base leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="p-4 bg-gray-50 rounded-lg border-l-4 border-theme-main shadow-inner">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Call-to-Action Section */}
      <section
        id="cta"
        className="relative py-16 px-6 sm:px-10 text-white bg-cover bg-center scroll-review mt-5"
        style={{ backgroundImage: "url('/solutionsPage/solutions.jpg')" }}
      >
        {/* Overlay for readability - also extended higher */}
        <div className="absolute inset-0 z-0 bg-white/90 -top-24" />

        <motion.div
          className="relative z-20 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 whitespace-pre-line">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed p-6">
            Discover how ChitChat can transform your customer experience with tailored AI solutions.
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <Link
              to="/contact us"
              className="px-6 py-3.5 rounded-lg bg-white/90 backdrop-blur text-theme-main border border-purple-200 
                        font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/30
                        hover:transform hover:scale-105 hover:bg-white/100 flex items-center gap-2 group"
            >
              <span className="opacity-80 group-hover:opacity-100">Contact Us</span>

            </Link>
            <Link
              to="/book-call"
              className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white 
                        font-medium text-base shadow-md shadow-purple-300/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/40
                        hover:transform hover:scale-105 flex items-center gap-2 group"
            >

              <span>Book a Call</span>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />

      {/* Cookie Policy Floating Button - Left Side */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setCookiePolicyOpen(!cookiePolicyOpen)}
          className="bg-theme-main text-white p-4 rounded-full shadow-lg hover:bg-theme-dark transition-all flex items-center justify-center"
          aria-label="Cookie Policy"
        >
          <div className="transform transition-transform duration-300 hover:rotate-12">
            <Cookie size={24} strokeWidth={1.5} />
          </div>
        </button>

        {/* Cookie Policy Modal - Slide from right */}
        {cookiePolicyOpen && (
          <div
            className="fixed right-0 top-0 h-full bg-white shadow-lg p-6 w-full sm:w-[400px] max-h-screen overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out"
            style={{
              transform: isModalExiting ? 'translateX(100%)' : 'translateX(0)',
              animation: isModalExiting ? 'slideRight 0.3s ease-out forwards' : 'slideLeft 0.3s ease-out forwards'
            }}
          >
            {/* ChitChat logo */}
            <div className="flex justify-center mb-4">
              <img
                src="/branding/chitchatAI.png"
                alt="ChitChat AI Logo"
                className="w-12 h-auto"
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Your cookie preferences</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-5">
              We use cookies to keep our site secure and user-friendly, and to carry out the activities stated below.
            </p>

            <p className="text-sm text-gray-600 mb-5">
              You can customize your cookie preferences at any time by toggling the options on or off.
            </p>

            <p className="text-sm text-gray-600 mb-6">
              For more information, have a look at our <a href="#" className="text-theme-main underline hover:text-theme-dark">Privacy and Cookie Policy</a>
            </p>

            <div className="border-t border-gray-200 pt-4 mb-5">
              <h4 className="text-sm font-semibold mb-4">Manage consent preferences</h4>

              {/* Technical cookies toggle - always active */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-800">Technical cookies</p>
                  <p className="text-xs text-gray-500">Always active</p>
                </div>
                <div className="bg-theme-main rounded-full w-10 h-5 flex items-center px-0.5">
                  <div className="bg-white rounded-full w-4 h-4 ml-auto shadow-sm"></div>
                </div>
              </div>

              {/* Analytics cookies toggle */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm font-medium text-gray-800">Analytics cookies</p>
                </div>
                <button className="bg-gray-200 rounded-full w-10 h-5 flex items-center px-0.5 hover:bg-gray-300 transition-colors">
                  <div className="bg-white rounded-full w-4 h-4 shadow-sm"></div>
                </button>
              </div>
            </div>

            <div className="flex justify-between space-x-3 pt-3 border-t border-gray-200">
              <button
                onClick={handleCloseModal}
                className="flex-1 py-2 border border-gray-300 text-gray-700 rounded font-medium hover:bg-gray-50 transition-colors"
              >
                Reject all
              </button>
              <button
                onClick={handleCloseModal}
                className="flex-1 bg-theme-main text-white py-2 rounded font-medium hover:bg-theme-dark transition-colors"
              >
                Confirm my choices
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Updated animation keyframes for slide from right */}
      <style>
        {`
        @keyframes slideLeft {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }

        @keyframes slideRight {
            from { transform: translateX(0); }
            to { transform: translateX(100%); }
        }
        `}
      </style>
    </>
  );
};

export default Pricing;
