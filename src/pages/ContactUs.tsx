// ContactUs.tsx
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ChevronDown } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    reason: 'General Inquiry'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const validate = () => {
    const newErrors: { [key: string]: boolean } = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email || !formData.email.includes('@')) newErrors.email = true;
    if (!formData.message) newErrors.message = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '', reason: 'General Inquiry' });
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <NavBar />
      <main>
        <section className="relative min-h-screen px-4 sm:px-6 overflow-hidden bg-center bg-cover scroll-review flex items-center">
          {/* Mobile background image */}
          <img
            className="absolute inset-0 w-full h-full object-cover z-0 block sm:hidden"
            src="/contactUsPage/contactUsPage.png"
            alt="Contact Us background"
          />

          {/* Video background */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 hidden sm:block"
            src="/contactUsPage/contactUsPage.mp4"
            autoPlay
            loop
            muted
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#260a40]/70 via-[#371a5e]/50 to-[#260a40]/70 mix-blend-multiply z-20" />
          <div className="absolute inset-0 bg-[url('/textures/dots.svg')] opacity-10 mix-blend-soft-light z-20 animate-pulse-slow" />

          {/* Content */}
          <div className="relative z-30 w-full max-w-6xl mx-auto text-center flex flex-col justify-center items-center px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in delay-150">
              Have questions about our services? Ready to transform your customer support? We're here to help.
            </p>
            <div className="mt-12 flex justify-center animate-bounce-slow">
              <ChevronDown className="text-white opacity-70 w-8 h-8" />
            </div>
          </div>
        </section>


        <section className="py-16 px-4 sm:px-6 bg-white relative">
          <div className="absolute inset-0 bg-[url('/textures/dots.svg')] opacity-5 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-theme-main text-3xl">location_on</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Our Office</h3>
                    <p className="text-gray-600">123 AI Innovation Blvd<br />Cape Town, South Africa</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-theme-main text-3xl">email</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                    <p className="text-gray-600">hello@chitchat.ai</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-theme-main text-3xl">call</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                    <p className="text-gray-600">+27 (21) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                  <span className="material-symbols-outlined text-green-500 text-4xl mb-3">check_circle</span>
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-green-600">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-theme-main/50`}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-theme-main/50`}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-main/50"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Reason for Contact</label>
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-main/50"
                    >
                      <option>General Inquiry</option>
                      <option>Sales Question</option>
                      <option>Technical Support</option>
                      <option>Partnership Opportunity</option>
                      <option>Career Information</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-theme-main/50`}
                      placeholder="Tell us how we can help you"
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className={`w-full bg-theme-main hover:bg-theme-dark text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;