import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    message: '',
  });

  const [selectedType, setSelectedType] = useState<'solo' | 'team' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState('');
  const fullText = "Let's Build Better Conversations";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.substring(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(typingInterval);
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const animateSection = (ref: React.RefObject<HTMLDivElement>, animationClass: string) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            ref.current.classList.add(animationClass);
            ref.current.style.opacity = '1';
          }
        }
      };

      animateSection(formRef, 'animate-slide-up');
      animateSection(testimonialRef, 'animate-slide-in-right');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ firstName: '', lastName: '', email: '', company: '', jobTitle: '', message: '' });
        setSelectedType(null);
      }, 4000);
    }, 1500);
  };

  return (
    <>
      <NavBar />
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-gradient-to-br from-white to-gray-50 pt-24">
        {/* Left - Form */}
        <div ref={formRef} className="px-6 sm:px-12 py-16 opacity-0 transition-opacity duration-700">
          <div className="max-w-xl mx-auto">
            <div style={{ minHeight: '6rem' }} className="flex items-center relative overflow-hidden">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 whitespace-normal w-full text-left relative leading-snug">
                <span className="inline-block">
                  {typedText || '\u00A0'}
                  <span className="animate-pulse inline-block">|</span>
                </span>
              </h2>
            </div>
            <p className="text-gray-600 mb-8 pt-6">
              Whether you're a solo creator or part of a team, we're here to help you transform your customer support. Reach out to us, and we'll respond within 2 hours.
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Message Sent!</h3>
                <p className="text-green-600">Thanks for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-theme-main"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-theme-main"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-theme-main"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Work email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-theme-main"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-theme-main"
                />

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Number of employees</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedType('solo')}
                      className={`flex items-start gap-3 p-4 rounded-lg border ${selectedType === 'solo' ? 'border-theme-main bg-theme-main/5' : 'border-gray-300'} hover:border-theme-main transition`}
                    >
                      <span className="material-symbols-outlined text-theme-main">person</span>
                      <div className="text-left">
                        <p className="font-medium text-gray-800">I’m a solo developer</p>
                        <p className="text-sm text-gray-500">I need to set up an account for myself.</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedType('team')}
                      className={`flex items-start gap-3 p-4 rounded-lg border ${selectedType === 'team' ? 'border-theme-main bg-theme-main/5' : 'border-gray-300'} hover:border-theme-main transition`}
                    >
                      <span className="material-symbols-outlined text-theme-main">groups</span>
                      <div className="text-left">
                        <p className="font-medium text-gray-800">I’m part of a team</p>
                        <p className="text-sm text-gray-500">I need to set up an account for a team.</p>
                      </div>
                    </button>
                  </div>
                </div>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us how we can help you"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-theme-main"
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 text-white bg-theme-main hover:bg-theme-dark rounded-md font-medium transition-all duration-300 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Get in touch'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right - Visual/Testimonial Panel */}
        <div
          ref={testimonialRef}
          className="relative bg-black/80 pt-10 opacity-0 transition-opacity duration-700"
        >
          <img
            src="/contactUsPage/jess.png"
            alt="Jessica Claire Leigh"
            className="absolute inset-0 w-full h-full object-cover opacity-90 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-theme-main/80 via-transparent to-black/50 z-10" />
          <div className="relative z-20 p-10 flex flex-col justify-end h-full text-white">
            <p className="text-lg sm:text-xl max-w-lg italic">
              “ChitChat’s platform can streamline client support while keeping the human touch. It’s a total game-changer.”
            </p>
            <p className="mt-4 font-semibold">Jessica Claire Leigh<br /><span className="text-sm text-white/70">CEO of ChitChat AI</span></p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
