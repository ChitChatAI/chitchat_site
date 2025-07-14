import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactHeroSection from '../components/ContactUsHero';
import SeoHelmet from '../components/SEOHelmet';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import CookieConsent from '../components/ChatModal';

const ContactUs: React.FC = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xanogayz");
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const seoConfig = {
    title: 'Contact ChitChat AI | AI Solutions Inquiry & Support',
    description: 'Get in touch with our AI experts to discuss custom digital human solutions for your business.',
    keywords: 'contact AI experts, AI solutions inquiry, digital human consultation',
    path: '/contactus',
  };

  useEffect(() => {
    if (state.succeeded) {
      setToast({ type: 'success', message: 'Message sent successfully!' });
      setTimeout(() => {
        setToast(null);
        navigate('/');
      }, 2000);
    }

    if (state.errors && state.errors.length > 0) {
      setToast({ type: 'error', message: 'Failed to send message. Try again.' });
    }
  }, [state, navigate]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className='overflow-x-hidden'>
      <SeoHelmet {...seoConfig} />
      <NavBar />
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-md text-white shadow-lg ${toast.type === 'success' ? 'bg-emerald-500' : 'bg-rose-500'
            }`}
        >
          {toast.message}
        </motion.div>
      )}
      <ContactHeroSection />
      <section className="py-16 py-28 px-4 sm:px-8 lg:px-20 bg-gray-950 will-change-transform">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:space-x-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0 }}
              className="md:w-2/5 p-8 rounded-lg border border-gray-700 py-28 px-4 sm:px-8 lg:px-20 bg-gray-950 text-gray-300 flex flex-col justify-center"
            >
              <h3 className="text-white text-2xl font-bold mb-4">
                <Typewriter
                  words={['Unlock the power of human-augmented AI']}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={40}
                  deleteSpeed={0}
                  delaySpeed={2000}
                />
              </h3>
              <p className="mb-6 opacity-90">
                Our team specializes in AI solutions that enhance—not replace—human interactions.
                Connect with us to explore how digital humans can transform your customer experience.
              </p>
            </motion.div>

            <motion.div
              key="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-10 md:mt-0 md:w-3/5 p-10 border border-gray-700 rounded-lg bg-black text-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-4 h-4 bg-theme-main rounded-full" />
                <h3 className="text-lg font-semibold uppercase tracking-wider">Contact Form</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField
                  label="Full Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Your name"
                  dark
                />
                <InputField
                  label="Email *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="you@example.com"
                  dark
                />
                <InputField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  dark
                />
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg bg-black text-gray-200 placeholder-gray-500 transition ${errors.message ? 'border-rose-500' : 'border-gray-700 focus:ring-2 focus:ring-theme-main'
                      }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-rose-500">{errors.message}</p>}
                </div>
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-theme-main text-white rounded-lg font-medium hover:brightness-110 transition"
                >
                  {state.submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <CookieConsent />
      <Footer />
    </div>
  );
};

const InputField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  dark = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: string;
  dark?: boolean;
}) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 border rounded-lg transition ${error ? 'border-rose-500' : 'border-gray-700 focus:ring-2 focus:ring-theme-main'
        } ${dark ? 'bg-black text-gray-200 placeholder-gray-500' : 'bg-white text-black'}`}
      placeholder={placeholder}
    />
    {error && <p className="mt-1 text-sm text-rose-500">{error}</p>}
  </div>
);

export default ContactUs;