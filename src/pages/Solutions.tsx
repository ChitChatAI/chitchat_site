import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Lottie from 'lottie-react';
import customerService from '../assets/lottie/customerService.json';
import sales from '../assets/lottie/sales.json';
import healthcare from '../assets/lottie/healthCare.json';
import education from '../assets/lottie/education.json';
import CallToAction from '../components/CallToAction';
import CookieConsent from '../components/ContactModal';
import Footer from '../components/Footer';

const Solutions: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Replace these with your actual image paths
  const carouselImages = [
    "/homePage/businessBG.png",
    "/homePage/thinking.png"
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
      <Navbar />

      <main className="bg-white text-gray-900">
        {/* Hero Section */}

        <section
          className="relative w-full min-h-screen flex items-center bg-white text-gray-900 overflow-hidden"
          aria-label="Built for Every Business Hero Section"
        >
          {/* Content Container */}
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            {/* Text Content - Left Side */}
            <div className="md:w-1/2 md:pr-10 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                Built for Every Business to Feel Human
              </h1>

              {/* Branded Dots */}
              <div className="flex gap-3 my-6 md:my-10">
                <span className="w-3 h-3 rounded-full bg-theme-main/30" />
                <span className="w-3 h-3 rounded-full bg-theme-main/50" />
                <span className="w-3 h-3 rounded-full bg-theme-main/70" />
              </div>

              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10">
                Experience cutting-edge AI that streamlines operations and enhances customer interactions, delivering a truly humanized digital experience.
              </p>
            </div>

            {/* Carousel - Right Side */}
            <div className="md:w-1/2 mt-10 md:mt-0 relative h-[500px]">
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <div className="w-full h-full flex items-center justify-center bg-white rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`Business Illustration ${index + 1}`}
                        className="max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            
            </div>
          </div>
        </section>


        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                AI Solutions That Understand Humans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Emotionally intelligent AI designed to deliver exceptional customer experiences across every industry vertical.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center mr-5 rounded-lg p-2">
                      <Lottie
                        animationData={industry.icon}
                        loop
                        autoplay
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <div>
                      <span className="inline-block bg-theme-main/10 text-theme-main text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                        {industry.title}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {industry.title === 'Telecommunications' ? 'Intelligent Customer Support' :
                          industry.title === 'E-Commerce' ? 'Personalized Shopping Assistant' :
                            industry.title === 'Healthcare' ? 'Compassionate Patient Support' :
                              'Adaptive Learning Companion'}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    {industry.description}
                  </p>
                  <ul className="space-y-2">
                    {industry.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-theme-main/10 flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-theme-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Additional Solutions */}
        <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              More Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions adapt to the specific needs of various industries, providing personalized experiences that feel human.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {additionalSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-700">
                  {solution.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Use Cases
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-700">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <CookieConsent />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Solutions;