import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactHeroSection from '../components/ContactUsHero';
import SeoHelmet from '../components/SEOHelmet';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'framer-motion';
import CookieConsent from '../components/ChatModal';

const ContactUs: React.FC = () => {
  const navigate = useNavigate();
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const typewriterRef = useRef(null);
  const isInView = useInView(typewriterRef, { once: true, margin: '-50px' });



  const seoConfig = {
    title: 'Contact ChitChat AI | AI Solutions Inquiry & Support',
    description: 'Get in touch with our AI experts to discuss custom digital human solutions for your business.',
    keywords: 'contact AI experts, AI solutions inquiry, digital human consultation',
    path: '/contactus',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    if (!formData.message) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) return setErrors(errs);

    setSubmitting(true);
    try {
      const formDataPayload = new FormData();

      // Construct one full message string from all fields
      const combinedMessage = `
From: ${formData.name}
Subject: ${formData.subject}

${formData.message}
    `.trim();

      formDataPayload.append("email", formData.email);     // Still used by Formspree for reply-to
      formDataPayload.append("message", combinedMessage);  // All data combined

      const res = await fetch("https://formspree.io/f/mnnzpely", {
        method: "POST",
        body: formDataPayload,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        setToast({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setToast(null);
          navigate("/");
        }, 2000);
      } else {
        setToast({
          type: "error",
          message: data?.errors?.[0]?.message || "Submission failed. Try again.",
        });
      }
    } catch (err) {
      console.error(err);
      setToast({ type: "error", message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };



  return (
    <div className='overflow-x-hidden'>
      <SeoHelmet {...seoConfig} />
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 mt-14 mx-auto rounded-md text-white shadow-lg flex items-center justify-between gap-4 max-w-md w-full
      ${toast.type === 'success' ? 'bg-emerald-500' : 'bg-rose-500'}`}
        >
          <span className="flex-1">{toast.message}</span>
          <button
            onClick={() => setToast(null)}
            className="ml-4 text-white/80 hover:text-white text-xl font-bold focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>
        </motion.div>
      )}

      <ContactHeroSection />

      <section className="py-16 py-28 px-4 sm:px-8 lg:px-20 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex md:space-x-8">
            <motion.div
              ref={typewriterRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="md:w-2/5 p-8 border border-gray-700 py-28 px-4 sm:px-8 lg:px-20 bg-gray-950 text-white"
            >
              <h3 className="text-white text-2xl font-bold mb-4">
                {isInView && (
                  <Typewriter
                    words={['Unlock the power of human-augmented AI']}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={40}
                    deleteSpeed={0}
                    delaySpeed={2000}
                  />
                )}
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
              transition={{ duration: 0.5 }}
              className="mt-10 md:mt-0 md:w-3/5 p-10 border border-gray-700 rounded-lg bg-black text-white"
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
                  disabled={submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-theme-main text-white rounded-lg font-medium hover:brightness-110 transition"
                >
                  {submitting ? (
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
