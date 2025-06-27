import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactHeroSection from '../components/ContactUsHero';
import SeoHelmet from '../components/SEOHelmet';

import { motion, useScroll, useTransform } from 'framer-motion';

interface ToastMessage {
  type: 'success' | 'error';
  message: string;
}

const ContactUs: React.FC = () => {
  const navigate = useNavigate();
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // SEO Configuration
  const seoConfig = {
    title: "Contact ChitChat AI | AI Solutions Inquiry & Support",
    description: "Get in touch with our AI experts to discuss custom digital human solutions for your business. Contact us for consultations, support, and partnership opportunities.",
    keywords: "contact AI experts, AI solutions inquiry, digital human consultation, business AI support, ChitChat AI contact",
    path: "/contactus"
  };

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: '',
    companySize: '',
    industry: '',
    goals: '',
    interests: [] as string[],
    teamDescription: ''
  });

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'email' && value && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
    } else if (name === 'email') {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.email;
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev.interests, name]
        : prev.interests.filter(interest => interest !== name)
    }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.surname.trim()) newErrors.surname = 'Surname is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    } else if (step === 2) {
      if (!formData.companySize) newErrors.companySize = 'Please select company size';
      if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
      if (!formData.goals) newErrors.goals = 'Please select a goal';
    } else if (step === 3) {
      if (!formData.message.trim()) newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  // Background blobs
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bgX1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const bgX2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitting(true);

      try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setToast({ type: 'success', message: 'Message sent successfully!' });
        setTimeout(() => navigate('/'), 2000);
      } catch (error) {
        setToast({ type: 'error', message: 'Failed to send message' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  const errorInputClass = "w-full px-4 py-3 border border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500";

  return (
    <>

      <SeoHelmet
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        path={seoConfig.path}
      />

      <NavBar />

      {toast && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-md ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white shadow-lg`}>
          {toast.message}
        </div>
      )}
      <ContactHeroSection />
      <section className="py-16 bg-gradient-to-br from-gray-950 to-gray-950
">
        {/* Background orb 1 */}
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 rounded-full bg-theme-main/40 blur-xl"
          style={{ y: bgY1, x: bgX1 }}
        />
        {/* Background orb 2 */}
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-black/90 blur-xl -z-10"
          style={{ y: bgY2, x: bgX2 }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-700 rounded-lg overflow-hidden shadow-sm transition-all duration-300 flex flex-col bg-gray-950 z-500 py-10 px-10 rounded-xl p-8 shadow-sm">
            {/* Progress Steps */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map(step => (
                <div key={step} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= step
                    ? 'bg-theme-main/95 text-white'
                    : 'bg-theme-main/40 text-gray-200'
                    }`}>
                    {step}
                  </div>
                  <span className={`text-sm ${currentStep >= step
                    ? 'text-gray-200 font-medium'
                    : 'text-gray-500'
                    }`}>
                    {step === 1 ? 'Your Details' : step === 2 ? 'Company' : 'Message'}
                  </span>
                </div>
              ))}
            </div>

            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-100 mb-6">Your Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">First Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? errorInputClass : inputClass}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">Last Name</label>
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      className={errors.surname ? errorInputClass : inputClass}
                    />
                    {errors.surname && <p className="mt-1 text-sm text-red-600">{errors.surname}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? errorInputClass : inputClass}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Subject (Optional)</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-3 bg-theme-main/95 text-white rounded-lg hover:bg-theme-main/60 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Company Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-200 mb-6">Company Information</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Company Size</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className={errors.companySize ? errorInputClass : inputClass}
                  >
                    <option value="">Select company size</option>
                    <option value="Solo">Solo</option>
                    <option value="Small (2-10)">Small (2-10)</option>
                    <option value="Medium (11-100)">Medium (11-100)</option>
                    <option value="Large (101+)">Large (101+)</option>
                  </select>
                  {errors.companySize && <p className="mt-1 text-sm text-red-600">{errors.companySize}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Industry</label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={errors.industry ? errorInputClass : inputClass}
                  />
                  {errors.industry && <p className="mt-1 text-sm text-red-600">{errors.industry}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Primary Goal</label>
                  <select
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    className={errors.goals ? errorInputClass : inputClass}
                  >
                    <option value="">Select primary goal</option>
                    <option value="Customer Support">Customer Support</option>
                    <option value="Sales">Sales</option>
                    <option value="Internal Tools">Internal Tools</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.goals && <p className="mt-1 text-sm text-red-600">{errors.goals}</p>}
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-3 bg-theme-main text-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-3 bg-theme-main/95 text-white rounded-lg hover:bg-theme-main/60 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Additional Info */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-200 mb-6">Additional Information</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Interests</label>
                  <div className="space-y-2">
                    {['SDK Integration', 'Custom Persona', 'AI Strategy'].map(interest => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          name={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-theme-main rounded"
                        />
                        <span className="ml-2 text-gray-200">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Team Description (Optional)</label>
                  <textarea
                    name="teamDescription"
                    rows={3}
                    value={formData.teamDescription}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Your Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? errorInputClass : inputClass}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-3 bg-theme-main text-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-theme-main/95 text-white rounded-lg hover:bg-theme-main/60 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
};

export default ContactUs;