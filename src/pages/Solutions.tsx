import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/NavBar';
import Lottie from 'lottie-react';
import customerService from '../assets/lottie/customerService.json';
import sales from '../assets/lottie/sales.json';
import healthcare from '../assets/lottie/healthCare.json';
import education from '../assets/lottie/education.json';
import CallToAction from '../components/CallToAction';
import CookieConsent from '../components/ContactModal';
import Footer from '../components/Footer';
import { useScroll, motion, useTransform, AnimatePresence } from 'framer-motion';
import Hero from '../components/SolutionsHero';
import SeoHelmet from '../components/SEOHelmet';

const Solutions: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

   // SEO Configuration
  const seoConfig = {
    title: "ChitChat AI Solutions | Industry-Specific AI Personas for Business",
    description: "Discover our psychology-driven AI solutions tailored for customer service, sales, healthcare, education and more. Emotionally intelligent digital humans for your industry.",
    keywords: "AI solutions, industry-specific AI, customer service AI, sales AI assistant, healthcare AI, education AI, emotionally intelligent chatbots, business AI applications",
    path: "/solutions"
  };

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax values for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);

  // Replace these with your actual image paths
  const carouselImages = [
    "/homePage/Arin.png",
    "/homePage/Arin.png"

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const additionalSolutions = [
    {
      title: 'Insurance',
      text: "Guide customers through quotes, claims, and coverage with a conversational tone that feels more like a chat — not a form."
    },
    {
      title: 'Retail Banking & Fintech',
      text: "Help users understand features, resolve issues, and manage their accounts without confusion — friendly, fast, and secure."
    },
    {
      title: 'Startups & Small Businesses',
      text: "From MVP to product-market fit, scale support that feels human and agile — without adding headcount."
    },
    {
      title: 'Ride-Hailing & Logistics',
      text: "Support drivers and riders with real-time help, loyalty perks, and booking clarity — always responsive, never robotic."
    },
    {
      title: 'Travel & Hospitality',
      text: "Deliver concierge-style experiences with itinerary help, bookings, and travel advice — all with a calm, clear voice."
    },
    {
      title: 'Banking & Finance',
      text: "Clarify transactions, guide through loans, and help with disputes — with empathy, transparency, and data security."
    }
  ];

  const useCases = [
    {
      title: 'Customer Support Automation',
      description: 'Revolutionize your customer support with AI that understands and resolves issues 24/7, reducing response times and increasing satisfaction.'
    },
    {
      title: 'Sales Lead Qualification',
      description: 'Automatically qualify and prioritize leads based on engagement and intent, ensuring your sales team focuses on the right prospects.'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Streamline your scheduling process with AI that can book, reschedule, and send reminders for appointments, reducing no-shows and optimizing time.'
    },
    {
      title: 'Personalized Marketing Campaigns',
      description: 'Create dynamic, personalized marketing campaigns that adapt to user behavior and preferences, increasing engagement and conversion rates.'
    },
    {
      title: 'AI-Powered Tutoring',
      description: 'Offer on-demand tutoring support that adapts to individual learning styles and paces, providing a personalized education experience.'
    },
    {
      title: 'Healthcare Patient Engagement',
      description: 'Enhance patient engagement with AI that provides personalized health tips, medication reminders, and answers to medical queries.'
    },
  ];

  const industries = [
    {
      title: 'Telecommunications',
      description: 'Automate SIM support, router setups, and billing issues through AI that understands frustration and responds with human-like empathy.',
      icon: customerService,
      features: [
        "24/7 tone-aware virtual agents",
        "Context-aware troubleshooting",
        "Seamless live agent handoff"
      ]
    },
    {
      title: 'E-Commerce',
      description: 'Convert browsers to buyers with AI that remembers preferences, suggests products, and guides customers like your best salesperson.',
      icon: sales,
      features: [
        "Hyper-personalized recommendations",
        "Abandoned cart recovery",
        "Brand-aligned conversational style"
      ]
    },
    {
      title: 'Healthcare',
      description: 'Deliver 24/7 healthcare assistance with AI that shows empathy, handles appointments, and provides medication reminders.',
      icon: healthcare,
      features: [
        "HIPAA-compliant interactions",
        "Personalized health reminders",
        "Emotionally-aware responses"
      ]
    },
    {
      title: 'Education',
      description: 'Personalized tutoring and educational support that adapts to each student\'s learning style and emotional needs.',
      icon: education,
      features: [
        "Learning style adaptation",
        "Real-time progress feedback",
        "24/7 homework assistance"
      ]
    }
  ];

  return (
    <>
     <SeoHelmet
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        path={seoConfig.path}
      />
      
      <Navbar />

      <main className="bg-gradient-to-br from-gray-950 to-gray-950" ref={containerRef}>
        {/* Hero Section with Parallax */}
        <Hero />

        {/* Industries Section */}
        <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 to-gray-950">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold tracking-wider text-gray-200 uppercase">
                Industry Solutions
              </span>
              <h2 className="text-gray-200 text-3xl sm:text-4xl font-bold mt-4 mb-6">
                AI That Understands Humans
              </h2>
              <div className="mx-auto h-1 w-20 bg-gray-600 mb-8 rounded-full" />
              <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Emotionally intelligent AI designed to deliver exceptional customer experiences across every industry vertical.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="p-10 border border-gray-700 rounded-lg overflow-hidden shadow-sm transition-all duration-300 flex flex-col hover:shadow-md bg-black"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, borderColor: "rgba(var(--theme-main), 0.3)" }}
                >
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center mr-6 rounded-lg bg-theme-main/10 p-3">
                      <Lottie
                        animationData={industry.icon}
                        loop
                        autoplay
                        style={{ height: '40px', width: '40px' }}
                      />
                    </div>
                    <div>
                      <span className="inline-block bg-theme-main/10 text-gray-200 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                        {industry.title}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-100 mb-2">
                        {industry.title === 'Telecommunications' ? 'Intelligent Customer Support' :
                          industry.title === 'E-Commerce' ? 'Personalized Shopping Assistant' :
                            industry.title === 'Healthcare' ? 'Compassionate Patient Support' :
                              'Adaptive Learning Companion'}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-100 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  <ul className="space-y-3">
                    {industry.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 + index * 0.1 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-theme-main/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <svg className="w-3 h-3 text-gray-200
" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-200">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Solutions Section */}
        <section className="py-24 bg-gray-950 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold tracking-wider text-gray-200
 uppercase">
                Expanded Offerings
              </span>
              <h2 className="text-white text-3xl sm:text-4xl font-bold mt-4 mb-6">
                More Industries We Serve
              </h2>
              <div className="mx-auto h-1 w-20 bg-black mb-8 rounded-full" />
              <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Our AI solutions adapt to the specific needs of various industries, providing personalized experiences that feel human.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="p-10 border border-gray-700 rounded-lg overflow-hidden shadow-sm transition-all duration-300 flex flex-col hover:shadow-md bg-black"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-theme-main/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-gray-200"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="12" r="8" /> {/* Bullet point SVG */}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed"> {/* Slightly lighter gray */}
                    {solution.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 to-gray-950">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold tracking-wider text-gray-200
 uppercase">
                Implementation Scenarios
              </span>
              <div className="mx-auto h-1 w-20 bg-black my-8 rounded-full" />
              <h2 className="text-white text-3xl sm:text-4xl font-bold mt-4 mb-6">
                Practical Use Cases
              </h2>
              
            </motion.div>

            <div className="space-y-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-950 to-gray-950
 rounded-xl p-8 hover:shadow-md transition-all duration-300 group"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ borderColor: "rgba(var(--theme-main), 0.5)" }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden shadow-smbg-black flex items-center justify-center group-hover:bg-theme-main/20 transition-colors">
                        <span className="text-gray-200
 font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-200 mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-200 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <motion.section
          className="py-16 bg-gradient-to-br from-gray-950 to-gray-950/30 text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "24/7", label: "Availability" },
                { value: "90%+", label: "Satisfaction" },
                { value: "10x", label: "Faster Response" },
                { value: "5M+", label: "Daily Interactions" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm uppercase tracking-wider opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <CookieConsent />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Solutions;
