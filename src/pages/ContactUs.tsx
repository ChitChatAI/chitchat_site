import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// Update the base input styling with improved focus and hover states and Satoshi font
const inputBase = "w-full px-5 py-4 bg-white/10 border border-gray-200 rounded-lg font-satoshi font-medium text-gray-700 placeholder:text-gray-400 placeholder:font-satoshi placeholder:font-normal placeholder:text-sm transition-all duration-200 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm tracking-wide";
const inputError = "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-400";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '', 
    email: '',
    subject: '',
    message: '',
    companySize: '',
    industry: '',
    goals: '',
    interests: [],
    teamDescription: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const fullText = 'Contact Us';
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar?.classList.add('bg-purple-600', 'shadow-md');
        navbar?.classList.remove('bg-transparent');
      } else {
        navbar?.classList.add('bg-transparent');
        navbar?.classList.remove('bg-purple-600', 'shadow-md');
      }
    };

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

  // Enhanced email validation function
  const validateEmail = (email: string): boolean => {
    // More comprehensive email regex pattern
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email.toLowerCase());
  };

  const capitalizeFirstLetter = (str: string): string => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Auto-capitalize name and surname
    if (name === 'name' || name === 'surname') {
      setFormData((prev) => ({ ...prev, [name]: capitalizeFirstLetter(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    
    // Email validation
    if (name === 'email' && value.trim() !== '') {
      if (!validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      } else {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.email;
          return newErrors;
        });
      }
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, name]
        : prev.interests.filter((interest) => interest !== name),
    }));
  };

  const validateStep = (step: number) => {
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
      if (!formData.companySize) newErrors.companySize = 'Please select a company size';
      if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
      if (!formData.goals) newErrors.goals = 'Please select a goal';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add this function to determine classes for each step
  const getStepClasses = (step: number) => {
    if (step === currentStep) {
      return "opacity-100 translate-y-0 block transition-all duration-300 ease-out";
    } else if (step < currentStep) {
      return "opacity-0 -translate-y-10 hidden";
    } else {
      return "opacity-0 translate-y-10 hidden";
    }
  };

  // Optimize the step transition handler for immediate feedback
  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      // Provide immediate visual feedback by updating progress bar first
      const progressBar = document.querySelector('.progress-bar') as HTMLElement;
      if (progressBar) {
        progressBar.style.width = `${((currentStep + 1) / 3) * 100}%`;
      }
      
      // Then update the step after a very short delay
      setTimeout(() => {
        setCurrentStep((prev) => Math.min(prev + 1, 3));
      }, 10);
    } else {
      setAlertMessage('Please fill out all required fields before proceeding.');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    }
  };

  const handlePrevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      setErrors({ message: 'Message is required' });
      setAlertMessage('Please enter your message before submitting.');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          surname: '', // Reset surname field
          email: '',
          subject: '',
          message: '',
          companySize: '',
          industry: '',
          goals: '',
          interests: [],
          teamDescription: '',
        });
        setCurrentStep(1); // Reset to the first step
      }, 4000);
    }, 1500);
  };

  return (
    <>
      <NavBar />
      
      {/* Custom Alert */}
      {showAlert && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-down">
          <div className="bg-white border-l-4 border-theme-main p-4 rounded-md shadow-lg max-w-md">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-theme-main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-700">{alertMessage}</p>
              </div>
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    onClick={() => setShowAlert(false)}
                    className="inline-flex rounded-md p-1.5 text-gray-500 hover:bg-gray-100 focus:outline-none"
                  >
                    <span className="sr-only">Dismiss</span>
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <section className="relative bg-white py-40 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-satoshi text-center text-gray-900 mb-20 scroll-review opacity-0 transform translate-y-10 py-4">
            <span className="bg-gradient-to-r from-theme-main to-theme-dark bg-clip-text text-transparent">Let's Build Your AI Solution</span>
          </h2>

          {/* Form Progress Indicator */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="flex justify-between mb-2">
              {[1, 2, 3].map((step) => (
                <span 
                  key={step} 
                  className={`text-sm font-satoshi font-medium ${currentStep >= step ? 'text-theme-main' : 'text-gray-400'}`}
                >
                  Step {step}
                </span>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-theme-main h-2.5 rounded-full transition-all duration-300 ease-out progress-bar"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Success Message - Enhanced with animation and better styling */}
          {isSubmitted && (
            <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-400 p-6 mb-12 rounded-lg max-w-2xl mx-auto shadow-md transform animate-fade-in scale-in-center">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
                  <svg className="h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-green-800">Message Sent Successfully!</h4>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="relative border-l-2 border-dotted border-theme-main pl-4 md:pl-12 space-y-14">
            {/* Pre-render all steps but control visibility with CSS */}
            <div className={`relative pl-8 pr-0 md:pl-14 md:pr-32 ${getStepClasses(1)}`}>
              <span className="absolute -left-[14px] top-1 w-5 h-5 bg-theme-main border-4 border-white rounded-full shadow-md flex items-center justify-center">
                <span className="text-white text-xs font-bold font-satoshi">1</span>
              </span>
              <h3 className="text-2xl font-semibold text-theme-main mb-6 font-satoshi">Your Contact Details</h3>
              <form className="space-y-8 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                {/* First name field */}
                <div className="group">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400 group-focus-within:text-theme-main transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="First Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${inputBase} pl-10 ${errors.name ? inputError : ''}`}
                      required
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center font-satoshi">
                      <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>
                
                {/* Added surname field */}
                <div className="group">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400 group-focus-within:text-theme-main transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="surname"
                      placeholder="Surname"
                      value={formData.surname}
                      onChange={handleChange}
                      className={`${inputBase} pl-10 ${errors.surname ? inputError : ''}`}
                      required
                    />
                  </div>
                  {errors.surname && (
                    <p className="mt-2 text-sm text-red-600 flex items-center font-satoshi">
                      <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.surname}
                    </p>
                  )}
                </div>
                
                {/* Email field */}
                <div className="group">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400 group-focus-within:text-theme-main transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => {
                        if (formData.email && !validateEmail(formData.email)) {
                          setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
                        }
                      }}
                      className={`${inputBase} pl-10 ${errors.email ? inputError : ''}`}
                      required
                    />
                    {formData.email && !errors.email && validateEmail(formData.email) && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>
                
                {/* Subject field */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
              </form>
            </div>

            <div className={`relative pl-8 pr-0 md:pl-14 md:pr-32 ${getStepClasses(2)}`}>
              <span className="absolute -left-[14px] top-1 w-5 h-5 bg-theme-main border-4 border-white rounded-full shadow-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">2</span>
              </span>
              <h3 className="text-2xl font-semibold text-theme-main mb-6">Company & Goals</h3>
              <form className="space-y-8 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.companySize ? inputError : ''}`}
                  >
                    <option value="">Company Size</option>
                    <option value="Solo">Solo</option>
                    <option value="Startup">Startup</option>
                    <option value="SME">SME</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                  {errors.companySize && <p className="mt-1 text-sm text-red-600">{errors.companySize}</p>}
                </div>
                
                <div>
                  <input
                    type="text"
                    name="industry"
                    placeholder="Industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.industry ? inputError : ''}`}
                  />
                  {errors.industry && <p className="mt-1 text-sm text-red-600">{errors.industry}</p>}
                </div>
                
                <div>
                  <select
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.goals ? inputError : ''}`}
                  >
                    <option value="">Use Case / Goals</option>
                    <option value="Customer Support AI">Customer Support AI</option>
                    <option value="Sales Assistant">Sales Assistant</option>
                    <option value="Internal Automation">Internal Automation</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.goals && <p className="mt-1 text-sm text-red-600">{errors.goals}</p>}
                </div>
              </form>
            </div>

            <div className={`relative pl-8 pr-0 md:pl-14 md:pr-32 ${getStepClasses(3)}`}>
              <span className="absolute -left-[14px] top-1 w-5 h-5 bg-theme-main border-4 border-white rounded-full shadow-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </span>
              <h3 className="text-2xl font-semibold text-theme-main mb-6">Additional Info</h3>
              <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
                <div className="space-y-4">
                  <label className="block text-gray-700 font-medium mb-2">What are you interested in?</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {['SDK Integration', 'Custom Persona', 'AI Strategy Call'].map((interest) => (
                      <label key={interest} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          name={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-theme-main rounded focus:ring-theme-main focus:ring-2 mr-3"
                        />
                        <span className="text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="teamDescription" className="block text-gray-700 font-medium">About Your Team</label>
                  <textarea
                    id="teamDescription"
                    name="teamDescription"
                    rows={3}
                    placeholder="Describe your team (e.g., Technical team onboard, need AI help)"
                    value={formData.teamDescription}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-gray-700 font-medium">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help you with ChitChat AI?"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.message ? inputError : ''}`}
                    required
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  <p className="text-sm text-gray-500">Tell us about your specific needs or questions</p>
                </div>
              </form>
            </div>

            <div className="mt-10 flex justify-between items-center pl-8 md:pl-14">
              {currentStep > 1 ? (
                <button
                  onClick={handlePrevStep}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-all active:scale-95 flex items-center gap-1 font-satoshi"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              ) : <div></div>}
              
              {currentStep < 3 ? (
                <button
                  onClick={handleNextStep}
                  className="px-6 py-3 bg-theme-main text-white rounded-full hover:bg-theme-dark transition-all active:scale-95 transform hover:scale-105 flex items-center gap-2 font-satoshi"
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-6 py-3 text-white bg-theme-main rounded-full font-satoshi font-medium transition-all duration-300 flex items-center gap-2 active:scale-95 ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-theme-dark hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Submit'}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
