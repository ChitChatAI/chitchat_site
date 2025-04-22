import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { LocationOutline, CallOutline, LogoWhatsapp, LogoLinkedin, LogoTwitter } from 'react-ionicons';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
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
      const elements = document.querySelectorAll('.scroll-review');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate-slide-up');
        }
      });
    };

    handleScroll(); // Trigger on load
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
      }, 4000);
    }, 1500);
  };

  return (
    <>
      <NavBar />
      <section
        className="relative min-h-screen bg-cover bg-center pt-24 scroll-review opacity-0 transition-opacity duration-700"
        style={{ backgroundImage: "url('/solutionsPage/solutions.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-theme-main/80 via-transparent to-gray-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 sm:px-12 py-16">
          {/* Form */}
          <div ref={formRef} className="bg-white shadow-lg rounded-lg p-8 scroll-review opacity-0 transition-opacity duration-700">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
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
                  className={`w-full px-6 py-3 text-white bg-theme-main hover:bg-theme-dark rounded-md font-medium transition-all duration-300 ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Get in touch'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="bg-gradient-to-br from-theme-main/80 to-gray-800 text-white rounded-lg p-8 shadow-lg scroll-review opacity-0 transition-opacity duration-700">
            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="hover:scale-105 transition-transform">
                  <LocationOutline color={'#fff'} height="28px" width="28px" />
                </div>
                <p>
                  <strong>Address:</strong><br />
                  123 Innovation Drive, Tech City, TX 75001
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="hover:scale-105 transition-transform">
                  <CallOutline color={'#fff'} height="28px" width="28px" />
                </div>
                <p>
                  <strong>Phone:</strong><br />
                  <a href="tel:+18005551234" className="hover:underline">
                    +1 (800) 555-1234
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="hover:scale-105 transition-transform">
                  <LogoWhatsapp color={'#fff'} height="28px" width="28px" />
                </div>
                <p>
                  <strong>WhatsApp:</strong><br />
                  <a href="https://wa.me/18005551234" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Chat with us on WhatsApp
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="hover:scale-105 transition-transform">
                  <LogoLinkedin color={'#fff'} height="28px" width="28px" />
                </div>
                <p>
                  <strong>LinkedIn:</strong><br />
                  <a href="https://linkedin.com/company/chitchat-ai" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Follow us on LinkedIn
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="hover:scale-105 transition-transform">
                  <LogoTwitter color={'#fff'} height="28px" width="28px" />
                </div>
                <p>
                  <strong>Twitter:</strong><br />
                  <a href="https://twitter.com/chitchat_ai" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Follow us on Twitter
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
