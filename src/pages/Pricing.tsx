import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { Cookie, X } from 'lucide-react';

const Pricing: React.FC = () => {
  const location = useLocation();
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerText, setHeaderText] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);
  const controls = useAnimation();

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

  const getNavLinkClass = (path: string) =>
    `transition-colors duration-200 text-sm lg:text-base ${location.pathname === path
      ? 'text-theme-main font-semibold'
      : isScrolled
        ? 'text-gray-700 hover:text-theme-main'
        : 'text-white hover:text-theme-light'
    }`;

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
      {/* Embedded NavBar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={isScrolled ? '/branding/chitchatAI.png' : '/branding/chitchatAILite.png'}
              alt="ChitChat AI Logo"
              className="w-8 sm:w-10 h-auto"
            />
            <Link
              to="/"
              className={`ml-2 text-xl sm:text-2xl font-semibold ${isScrolled ? 'text-gray-800' : 'text-white'
                } transition duration-300`}
            >
              ChitChat
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <Link to="/" className={getNavLinkClass('/')}>About Us</Link>
            <Link to="/values" className={getNavLinkClass('/values')}>Values</Link>
            <Link to="/solutions" className={getNavLinkClass('/solutions')}>Solutions</Link>
            <Link to="/partnerships" className={getNavLinkClass('/partnerships')}>Businesses</Link>
            <Link to="/Vision Board" className={getNavLinkClass('/Vision Board')}>
              Vision Board <span className="ml-1 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
            </Link>
            <Link to="/pricing" className={getNavLinkClass('/pricing')}>Pricing</Link>
            <Link to="/contact-us" className={getNavLinkClass('/contact-us')}>Contact Us</Link>
          </div>

          {/* Mobile Menu */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-2 py-2 bg-white rounded-md shadow-lg animate-fade-in">
            {[
              { to: '/', label: 'About Us' },
              { to: '/values', label: 'Values' },
              { to: '/solutions', label: 'Solutions' },
              { to: '/partnerships', label: 'Businesses' },
              { to: '/Vision Board', label: 'Vision Board', badge: true },
              { to: '/pricing', label: 'Pricing' },
              { to: '/contact-us', label: 'Contact Us' }
            ].map(({ to, label, badge }) => (
              <Link key={to} to={to} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-theme-main transition-colors">
                <div className="flex items-center">
                  <span>{label}</span>
                  {badge && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-theme-light text-theme-main rounded-full">New</span>
                  )}
                </div>
              </Link>
            ))}
            <div className="px-4 py-2 border-t border-gray-100">
              <Link to="#" className="w-full block bg-theme-main hover:bg-theme-dark text-white text-center px-4 py-2 rounded-full">
                Sign In
              </Link>
            </div>
          </div>
        )}
      </nav>

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
        transition={{ duration: 1, ease: "easeOut" }}
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
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl text-white md:text-5xl font-extrabold leading-tight drop-shadow-lg min-h-[4rem] ">
            Transparent Pricing.<br />Prices that Scale with You.
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto mb-16 text-white/90 leading-relaxed drop-shadow-lg"
          >
            Choose the plan that fits your needs and scale your business with confidence.
          </motion.p>
          <div className="absolute bottom- left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
          </div>
        </motion.div>
      </motion.section>

      {/* Pricing Cards */}
      <section className="bg-gray-50 py-20 px-4 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Plans
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Clear, phase-based pricing with no surprises.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 rounded-md p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[580px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 }}
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
      <section className="bg-white py-20 px-4 sm:px-10 lg:px-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl border border-gray-200 p-6 bg-gray-50 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left flex justify-between items-center text-gray-800 font-medium text-lg focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-theme-main text-2xl">{openFAQ === idx ? '−' : '+'}</span>
                </button>
                {openFAQ === idx && (
                  <motion.p
                    className="mt-4 text-gray-600 text-base leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
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
              to="/contact-us"
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
