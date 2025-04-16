import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Lottie from 'lottie-react';

import customerService from '../assets/lottie/customerService.json';
import sales from '../assets/lottie/sales.json';
import healthcare from '../assets/lottie/healthCare.json';
import education from '../assets/lottie/education.json';

const Solutions: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxElements = useRef<HTMLElement[]>([]);
  const [headerText, setHeaderText] = useState('');
  const fullText = "Built for Every Business.\nDesigned to Feel Human.";
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        parallaxElements.current.forEach((el) => {
          const speed = parseFloat(el.getAttribute('data-speed') || '0.2');
          const yPos = -(scrollPosition * speed);
          el.style.transform = `translateY(${yPos}px)`;
        });
      });
    };

    if (parallaxRef.current) {
      parallaxElements.current = Array.from(document.querySelectorAll('.parallax-element'));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          } else {
            entry.target.classList.remove('animate-slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.scroll-review');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const typingInterval = setInterval(() => {
        setHeaderText(fullText.substring(0, i + 1));
        i++;

        if (i > fullText.length) {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    } else {
      setHeaderText('');
    }
  }, [isVisible, fullText]);

  const getLottie = (title: string) => {
    switch (title) {
      case 'Telecommunications':
        return customerService;
      case 'E-Commerce':
        return sales;
      case 'Healthcare':
        return healthcare;
      case 'Education & Online Learning':
        return education;
      default:
        return customerService;
    }
  };

  const solutionCategories = [
    {
      title: 'Telecommunications',
      description: 'Handle network support, router setup, billing queries, and cancellations — all through emotionally aware AI that actually listens.',
      features: [
        '24/7 emotionally responsive support',
        'Seamless handoff to human agents',
        'Context-aware conversation history',
      ],
      animationClass: 'animate-slide-in-left',
    },
    {
      title: 'E-Commerce',
      description: 'Convert more browsers into buyers with AI that feels like a helpful, friendly shopping assistant — available 24/7.',
      features: [
        'Qualified lead generation',
        'Personalized product recommendations',
        'Consistent brand voice and messaging',
      ],
      animationClass: 'animate-slide-in-right',
    },
    {
      title: 'Healthcare',
      description: 'Support appointment booking, patient onboarding, medical FAQs, and follow-ups with a calm, patient persona that builds trust.',
      features: [
        'Empathetic health guidance',
        'Medication and appointment reminders',
        'Wellness check-ins and monitoring',
      ],
      animationClass: 'animate-fade-in',
    },
    {
      title: 'Education & Online Learning',
      description: 'Provide tutoring, course navigation, enrollment support, and mental health check-ins — all with personalities that adapt to age and tone.',
      features: [
        'Adaptive learning pathways',
        'Personalized feedback and assessment',
        '24/7 learning support',
      ],
      animationClass: 'animate-slide-up',
    },
  ];

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

  return (
    <>
      <NavBar />
      <main className="pt-24 md:pt-28" ref={parallaxRef}>
        <section className="bg-white py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100 z-0"></div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 ref={headerRef} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 whitespace-pre-line">
              {headerText}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              ChitChat works for any business — from global enterprises to small startups — as long as you have access to a language model (LLM). Whether you're looking to integrate hyper-human customer support, automate sales flows, or retain users with emotionally intelligent conversations, we build AI personas that feel like real people — tailored to your goals.
            </p>
            <p className="mt-6 text-sm text-gray-500 italic">
              Note: ChitChat doesn’t provide the LLM itself — we work on top of whatever model you use, whether that’s OpenAI, Claude, or another provider.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-b from-theme-main/10 to-white py-20 px-6 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative">
              {solutionCategories.map((category, index) => (
                <div
                  key={index}
                  className={`scroll-review bg-white rounded-xl p-6 border border-gray-100 opacity-0 transform translate-y-10 hover:shadow-lg transition-all duration-300 ${category.animationClass}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 mr-4">
                      <Lottie
                        animationData={getLottie(category.title)}
                        loop
                        autoplay
                        style={{ height: '64px', width: '64px' }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-5">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="material-symbols-outlined text-theme-main text-sm mr-2">
                          check_circle
                        </span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-6 inline-block text-theme-main hover:text-theme-dark font-medium"
                  >
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neural Dot Timeline Style Section */}
        <section className="relative bg-white py-32 px-6 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-gray-900 mb-20 scroll-review opacity-0 transform translate-y-10">More Industries We Serve</h3>
            <div className="relative border-l-2 border-dotted border-purple-500 pl-12 space-y-20">
              {additionalSolutions.map((item, index) => (
                <div key={index} className="relative scroll-review opacity-0 transform translate-y-10">
                  <span className="absolute -left-[14px] top-1 w-4 h-4 bg-purple-600 border-4 border-white rounded-full shadow-md"></span>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-2 ml-4">{item.title}</h4>
                  <p className="text-base text-gray-600 max-w-2xl leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Solutions;
