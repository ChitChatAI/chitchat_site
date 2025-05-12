import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import customerService from '../assets/lottie/customerService.json';
import sales from '../assets/lottie/sales.json';
import healthcare from '../assets/lottie/healthCare.json';
import education from '../assets/lottie/education.json';
import CookieConsent from './CookieConsent';
import { initCustomCursor } from '../utils/cursorEffects';

const Solutions: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxElements = useRef<HTMLElement[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

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
    const cleanupCursor = initCustomCursor();
    return () => cleanupCursor();
  }, []);

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
    },
    {
      title: 'E-Commerce',
      description: 'Convert more browsers into buyers with AI that feels like a helpful, friendly shopping assistant — available 24/7.',
      features: [
        'Qualified lead generation',
        'Personalized product recommendations',
        'Consistent brand voice and messaging',
      ],
    },
    {
      title: 'Healthcare',
      description: 'Support appointment booking, patient onboarding, medical FAQs, and follow-ups with a calm, patient persona that builds trust.',
      features: [
        'Empathetic health guidance',
        'Medication and appointment reminders',
        'Wellness check-ins and monitoring',
      ],
    },
    {
      title: 'Education & Online Learning',
      description: 'Provide tutoring, course navigation, enrollment support, and mental health check-ins — all with personalities that adapt to age and tone.',
      features: [
        'Adaptive learning pathways',
        'Personalized feedback and assessment',
        '24/7 learning support',
      ],
    },
  ];

  return (
    <section id="solutions" ref={parallaxRef} className="relative py-36 px-6 bg-transparent text-white">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Solutions Built for Every Industry
        </h2>
        <p className="text-white/80 text-lg max-w-3xl mx-auto">
          Explore how ChitChat AI adapts to real-world business needs — blending empathy, intelligence, and your brand's voice.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {solutionCategories.map((category, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-[#1f0033] to-[#260a40] rounded-3xl p-8 shadow-[0_0_20px_rgba(128,90,213,0.3)] backdrop-blur-md transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-purple-500/10 rounded-lg">
                <Lottie animationData={getLottie(category.title)} loop autoplay style={{ height: '40px', width: '40px' }} />
              </div>
              <h3 className="ml-4 text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {category.title}
              </h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">{category.description}</p>
            <ul className="space-y-3 text-left">
              {category.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-white/90">
                  <span className="w-5 h-5 mr-3 text-theme-main">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <CookieConsent position="left" modalPosition="bottom" />
    </section>
  );
};

export default Solutions;
