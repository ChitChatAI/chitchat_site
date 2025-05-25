import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import { initCustomCursor } from '../utils/cursorEffects';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

const inputBase = "block w-full px-4 py-3 text-sm text-white bg-gray-800 border border-gray-200 rounded-lg focus:ring-2 focus:ring-theme-main focus:outline-none transition-all duration-300";
const inputError = "block w-full px-4 py-3 text-sm text-white bg-red-50/20 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-300";

// Add toast interface
interface ToastMessage {
  type: 'success' | 'error';
  message: string;
}

const ContactUs: React.FC = () => {
  const navigate = useNavigate();

  // Add toast state
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const [formData, setFormData] = useState<{
    name: string;
    surname: string;
    email: string;
    subject: string;
    message: string;
    companySize: string;
    industry: string;
    goals: string;
    interests: string[];
    teamDescription: string;
  }>({
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
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [showLetsTalk, setShowLetsTalk] = useState(false);

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

  // Replace the simulation with actual form submission to Formspree
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Set up formdata to send to the specified email
    const formDataToSend = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      companySize: formData.companySize,
      industry: formData.industry,
      goals: formData.goals,
      interests: formData.interests.join(', '),
      teamDescription: formData.teamDescription,
      _replyto: formData.email, 
      _subject: formData.subject || "New ChitChat AI Inquiry",
      _cc: "hnengare@gmail.com", 
    };

    try {
      setIsSubmitting(true);

      const response = await fetch('https://formspree.io/f/xanokvdw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      setToast({ type: 'success', message: 'Message sent successfully!' });
      setShowConfetti(true);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setShowConfetti(false); 
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Failed to send the message:', error);
      setToast({ type: 'error', message: 'Failed to send the message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      setErrors({ message: 'Message is required' });
      setAlertMessage('Please enter your message before submitting.');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
      return;
    }

    // Call the sendEmail function with the form data
    await sendEmail(e as unknown as React.FormEvent<HTMLFormElement>);
  };

  // Add auto-dismiss for toast after 5 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - 70; // Adjust for navbar height
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const cleanupCursor = initCustomCursor();
    // On-load animation for hero section
    const hero = document.getElementById('contact-hero-parallax-row');
    if (hero) {
      hero.style.opacity = '0';
      hero.style.transform = 'translateY(60px)';
      setTimeout(() => {
        hero.style.transition = 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
      }, 100);
    }
    return () => cleanupCursor();
  }, []);

  // Modal component for Let's Talk popup
  const LetsTalkModal: React.FC<{ open: boolean; onClose: () => void; children: React.ReactNode }> = ({ open, onClose, children }) => {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${open ? 'visible bg-black/60' : 'invisible bg-transparent'}`}
        style={{ pointerEvents: open ? 'auto' : 'none' }}
        aria-modal="true"
        role="dialog"
      >
        <div
          className={`transform transition-all duration-500 ${open ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'} bg-black/95 rounded-2xl shadow-2xl border border-white/20 p-2 sm:p-8 w-full max-w-2xl relative`}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none text-2xl"
            aria-label="Close"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <NavBar />
      
      {/* Toast notification */}
      {toast && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-right">
          <div className={`max-w-md w-full shadow-lg rounded-lg pointer-events-auto overflow-hidden transition-all transform-gpu ${
            toast.type === 'success' 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
              : 'bg-gradient-to-r from-red-500 to-pink-600'
          }`}>
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {toast.type === 'success' ? (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div className="ml-3 w-0 flex-1">
                  <p className="text-base font-medium text-white">{toast.message}</p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    className="inline-flex text-white focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => setToast(null)}
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern dark video + image background */}
      <div className="fixed inset-0 z-[-2] pointer-events-none">
        <img
          src="/solutionsPage/solutions.jpg"
          alt="Contact Us Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          draggable="false"
        />
      </div>
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/homePage/chitchat_bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10"></div>
        </div>
      </div>
      <div className="fixed inset-0 z-[-3] bg-black" />

      {/* Modern floating alert with animation */}
      {showAlert && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-float-in">
          <div className="bg-white border-l-4 border-theme-main p-4 rounded-xl shadow-lg max-w-md backdrop-blur-sm bg-white/95">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-theme-main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 5a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-700">{alertMessage}</p>
              </div>
              <div className="ml-auto pl-3">
                <button
                  onClick={() => setShowAlert(false)}
                  className="inline-flex rounded-full p-1.5 text-gray-500 hover:bg-gray-100 focus:outline-none transition-all duration-200"
                >
                  <span className="sr-only">Dismiss</span>
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern hero section */}
      <section className="relative px-4 sm:px-8 bg-black bg-gradient-to-b from-black via-[#18132a] to-[#18132a] font-[Satoshi] overflow-hidden text-white border-b border-white/10 shadow-xl">
        {/* Video + image background handled globally */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/solutionsPage/solutions.jpg"
            alt="Contact Us Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
            draggable="false"
          />
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/homePage/chitchat_bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.04] parallax-el" data-speed="0.09"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-theme-main/30 rounded-full blur-3xl animate-float parallax-el" data-speed="0.15"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-float-delayed parallax-el" data-speed="0.11"></div>
          <div className="absolute top-1/2 left-2/3 w-40 h-40 bg-purple-400/30 rounded-full blur-2xl animate-pulse parallax-el" data-speed="0.13"></div>
        </div>
        <div className="container mx-auto px-6 sm:px-12 relative z-10">
            <div
            className="flex flex-col items-center justify-center min-h-screen text-center mx-auto"
            id="contact-hero-parallax-row"
            style={{ willChange: 'transform', opacity: 0, transform: 'translateY(60px)' }}
            >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight drop-shadow-xl animate-hero-fade-in">
              <span className="block text-white font-extrabold animate-gradient-x pb-4 animate-hero-slide-in">Let's Build Your AI Solution</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-2xl text-white max-w-2xl mb-12 leading-relaxed font-medium drop-shadow animate-contact-hero-fade-in delay-200">
              Fill out the form below to get started with <span className="text-theme-main font-semibold animate-contact-hero-gradient-in delay-400">ChitChat AI</span>. Our team will reach out to discuss how we can help you implement AI solutions tailored to your business needs.
            </p>
            <div className="flex space-x-3 mt-10 animate-fade-in-up delay-700">
              <span className="w-4 h-4 rounded-full bg-theme-main animate-pulse"></span>
              <span className="w-4 h-4 rounded-full bg-purple-400 animate-pulse delay-150"></span>
              <span className="w-4 h-4 rounded-full bg-pink-400 animate-pulse delay-300"></span>
            </div>
            </div>
        </div>
      </section>

      {/* Shifted Form Section */}
      <section className="relative px-4 sm:px-0 lg:px-20 bg-black bg-gradient-to-b from-[#18132a] via-black/90 to-black/95">
        <div className="container mx-auto">
          <div className="w-full mx-auto bg-black/80 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 p-6 sm:p-12 relative overflow-hidden transition-all duration-500 hover:shadow-2xl transform perspective-card">
            {/* Form steps container */}
            <div className="relative z-10">
              {/* Modern progress tracker */}
              <div className="mb-14 max-w-3xl mx-auto">
                <div className="flex items-center justify-between relative">
                  {/* Progress line */}
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>

                  {[1, 2, 3].map((step) => (
                    <div key={step} className="relative z-10 flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-500 
                        ${currentStep >= step
                            ? 'bg-theme-main text-white shadow-lg shadow-theme-main/30'
                            : 'bg-white text-gray-400 border border-gray-200'}`}
                      >
                        {currentStep > step ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        ) : (
                          <span className="text-sm font-semibold">{step}</span>
                        )}
                      </div>
                      <span
                        className={`text-sm font-satoshi font-medium transition-all duration-300 
                        ${currentStep >= step ? 'text-theme-main' : 'text-gray-400'}`}
                      >
                        {step === 1 ? 'Your Details' : step === 2 ? 'Company' : 'Additional Info'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Message - Enhanced with 3D effect */}
              {isSubmitted && (
                <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 p-6 mb-10 rounded-xl max-w-2xl mx-auto shadow-lg transform animate-success-enter">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-100 p-3 rounded-full shadow-inner">
                      <svg className="h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-green-800">Message Sent Successfully!</h4>
                      <p className="text-green-700">
                        Thank you for reaching out. Our team will get back to you shortly.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Steps with modernized inputs */}
              <div className="max-w-3xl mx-auto">
                {/* Step 1: Contact Details */}
                <div className={`${getStepClasses(1)}`}>
                  <h3 className="text-2xl font-semibold text-white mb-8 font-satoshi">Your Contact Details</h3>
                  <form className="space-y-6" onSubmit={sendEmail}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`${inputBase} ${errors.name ? inputError : ''}`}
                          required
                        />
                        <label
                          htmlFor="name"
                          className={`absolute left-4 text-sm text-gray-400 transition-all duration-300
                            ${formData.name ? 'top-1 text-xs text-theme-main' : 'top-3'}`}
                        >
                          First Name
                        </label>
                        {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          id="surname"
                          name="surname"
                          value={formData.surname}
                          onChange={handleChange}
                          className={`${inputBase} ${errors.surname ? inputError : ''}`}
                          required
                        />
                        <label
                          htmlFor="surname"
                          className={`absolute left-4 text-sm text-gray-400 transition-all duration-300
                            ${formData.surname ? 'top-1 text-xs text-theme-main' : 'top-3'}`}
                        >
                          Surname
                        </label>
                        {errors.surname && <p className="mt-2 text-sm text-red-400">{errors.surname}</p>}
                      </div>
                    </div>
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${inputBase} ${errors.email ? inputError : ''}`}
                        required
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-4 text-sm text-gray-400 transition-all duration-300
                          ${formData.email ? 'top-1 text-xs text-theme-main' : 'top-3'}`}
                      >
                        Email Address
                      </label>
                      {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                    </div>
                    <div className="relative group">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={inputBase}
                      />
                      <label
                        htmlFor="subject"
                        className={`absolute left-4 text-sm text-gray-400 transition-all duration-300
                          ${formData.subject ? 'top-1 text-xs text-theme-main' : 'top-3'}`}
                      >
                        Subject (Optional)
                      </label>
                    </div>
                    {currentStep === 1 && (
                      <button
                        type="submit"
                        className="hidden"
                      >
                        Submit
                      </button>
                    )}
                  </form>
                </div>

                {/* Step 2: Company & Goals */}
                <div className={`${getStepClasses(2)}`}>
                  <h3 className="text-2xl font-semibold text-white mb-8 font-satoshi">Company & Goals</h3>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {/* Company size selection */}
                    <div className="relative group">
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className={`${inputBase} appearance-none text-white ${errors.companySize ? inputError : ''}`}
                        required
                      >
                        <option value="" disabled className="text-gray-400">Select Company Size</option>
                        <option value="Solo" className="text-white">Solo</option>
                        <option value="Startup" className="text-white">Startup (2-10)</option>
                        <option value="SME" className="text-white">Small/Medium (11-100)</option>
                        <option value="Enterprise" className="text-white">Enterprise (101+)</option>
                      </select>
                      <label htmlFor="companySize" className="text-white">
                        Company Size
                      </label>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      {errors.companySize && <p className="mt-2 text-sm text-red-600">{errors.companySize}</p>}
                    </div>

                    {/* Industry field */}
                    <div className="relative group">
                      <input
                        type="text"
                        id="industry"
                        name="industry"
                        placeholder="Industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className={`${inputBase} ${errors.industry ? inputError : ''}`}
                        required
                      />
                      <label htmlFor="industry" className="text-white">
                        Industry
                      </label>
                      {errors.industry && <p className="mt-2 text-sm text-red-600">{errors.industry}</p>}
                    </div>

                    {/* Goals selection */}
                    <div className="relative group">
                      <select
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        className={`${inputBase} appearance-none text-white ${errors.goals ? inputError : ''}`}
                        required
                      >
                        <option value="" disabled className="text-gray-400">Select Primary Goal</option>
                        <option value="Customer Support AI" className="text-white">Customer Support AI</option>
                        <option value="Sales Assistant" className="text-white">Sales Assistant</option>
                        <option value="Internal Automation" className="text-white">Internal Automation</option>
                        <option value="Other" className="text-white">Other</option>
                      </select>
                      <label htmlFor="goals" className="text-white">
                        Primary Goal
                      </label>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      {errors.goals && <p className="mt-2 text-sm text-red-600">{errors.goals}</p>}
                    </div>
                  </form>
                </div>

                {/* Step 3: Additional Info */}
                <div className={`${getStepClasses(3)}`}>
                  <h3 className="text-2xl font-semibold text-white mb-8 font-satoshi">Additional Information</h3>
                  <form onSubmit={sendEmail} className="space-y-8">
                    {/* Interests checkboxes */}
                    <div className="space-y-4">
                      <label className="block text-gray-100 font-medium mb-4 text-lg">What are you interested in?</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['SDK Integration', 'Custom Persona', 'AI Strategy Call'].map((interest) => (
                          <label key={interest} className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-theme-main/30 hover:bg-black transition-all duration-300 cursor-pointer">
                            <input
                              type="checkbox"
                              name={interest}
                              checked={formData.interests && Array.isArray(formData.interests) ? formData.interests.includes(interest) : false}
                              onChange={handleCheckboxChange}
                              className="w-5 h-5 text-theme-main rounded focus:ring-theme-main/40 focus:ring-offset-0 focus:ring-2 mr-3"
                            />
                            <span className="text-white">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Team description field */}
                    <div className="relative group">
                      <textarea
                        id="teamDescription"
                        name="teamDescription"
                        rows={3}
                        placeholder="Team Description"
                        value={formData.teamDescription}
                        onChange={handleChange}
                        className={inputBase}
                      />
                      <label htmlFor="teamDescription" className="text-white">About Your Team (Optional)</label>
                    </div>

                    {/* Message field */}
                    <div className="relative group">
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputBase} ${errors.message ? inputError : ''}`}
                        required
                      />
                      <label htmlFor="message" className="text-white">Your Message</label>
                      <p className="mt-2 text-sm text-gray-400">Tell us about your specific needs or questions</p>
                    </div>
                  </form>
                </div>

                {/* Navigation buttons */}
                <div className="mt-12 flex justify-between items-center">
                  {currentStep > 1 ? (
                    <button
                      onClick={handlePrevStep}
                      className="inline-flex items-center px-5 py-3 rounded-xl font-medium transition-all duration-300 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:shadow-md active:scale-95 space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                      <span>Back</span>
                    </button>
                  ) : <div></div>}

                  {currentStep < 3 ? (
                    <button
                      onClick={handleNextStep}
                      className="inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 bg-theme-main text-white hover:bg-theme-dark active:scale-95 hover:shadow-lg space-x-2 group"
                    >
                      <span>Continue</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 text-white ${isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-theme-main hover:bg-theme-dark hover:shadow-lg active:scale-95'
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <span>Submit</span>
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trust indicators */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-5 text-gray-300 text-sm bg-black/90 py-8 border-t border-white/10">
        <div className="flex items-center bg-black/60 px-4 py-2 rounded-full shadow-sm border border-white/10">
          <svg className="w-5 h-5 mr-2 text-theme-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>SSL Secured</span>
        </div>
        <div className="flex items-center bg-black/60 px-4 py-2 rounded-full shadow-sm border border-white/10">
          <svg className="w-5 h-5 mr-2 text-theme-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>100% Confidential</span>
        </div>
        <div className="flex items-center bg-black/60 px-4 py-2 rounded-full shadow-sm border border-white/10">
          <svg className="w-5 h-5 mr-2 text-theme-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>24-48 Hour Response</span>
        </div>
      </div>

      <CookieConsent position="left" modalPosition="bottom" />
      <Footer />
      <LetsTalkModal open={showLetsTalk} onClose={() => setShowLetsTalk(false)}>
        <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">
          <h3 className="text-2xl font-semibold text-white mb-4 font-satoshi text-center">Let's Talk</h3>
          <p className="text-base text-gray-200 mb-6 text-center">
            We’re excited to connect with you! Please fill out the form below and our team will respond within <span className="text-theme-main font-semibold">48 hours</span>.<br/>
            You’re welcome to ask anything or just say hello — we’re here to help and happy to have you!
          </p>
          {/* Only show the form if not submitted, else show the success message */}
          {!isSubmitted ? (
            <form onSubmit={sendEmail} className="space-y-6">
              {/* Name, Surname, Email, Subject, Message fields (reuse as needed) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.name ? inputError : ''}`}
                    required
                  />
                  <label htmlFor="modal-name" className={`absolute left-4 text-sm text-gray-400 transition-all duration-300 ${formData.name ? 'top-1 text-xs text-theme-main' : 'top-3'}`}>First Name</label>
                  {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    id="modal-surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.surname ? inputError : ''}`}
                    required
                  />
                  <label htmlFor="modal-surname" className={`absolute left-4 text-sm text-gray-400 transition-all duration-300 ${formData.surname ? 'top-1 text-xs text-theme-main' : 'top-3'}`}>Surname</label>
                  {errors.surname && <p className="mt-2 text-sm text-red-400">{errors.surname}</p>}
                </div>
              </div>
              <div className="relative group">
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputBase} ${errors.email ? inputError : ''}`}
                  required
                />
                <label htmlFor="modal-email" className={`absolute left-4 text-sm text-gray-400 transition-all duration-300 ${formData.email ? 'top-1 text-xs text-theme-main' : 'top-3'}`}>Email Address</label>
                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
              </div>
              <div className="relative group">
                <input
                  type="text"
                  id="modal-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputBase}
                />
                <label htmlFor="modal-subject" className={`absolute left-4 text-sm text-gray-400 transition-all duration-300 ${formData.subject ? 'top-1 text-xs text-theme-main' : 'top-3'}`}>Subject (Optional)</label>
              </div>
              <div className="relative group">
                <textarea
                  id="modal-message"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputBase} ${errors.message ? inputError : ''}`}
                  required
                />
                <label htmlFor="modal-message" className="text-white">Your Message</label>
                <p className="mt-2 text-sm text-gray-400">Tell us about your specific needs or questions</p>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 text-white ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-theme-main hover:bg-theme-dark hover:shadow-lg active:scale-95'}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <span>Send</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 p-6 rounded-xl shadow-lg text-center">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-3 rounded-full shadow-inner mb-4">
                  <svg className="h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-green-800">Message Sent Successfully!</h4>
                <p className="text-green-700">Thank you for reaching out. Our team will get back to you shortly.</p>
              </div>
            </div>
          )}
        </div>
      </LetsTalkModal>
      <style>{`
        @keyframes contact-hero-fade-in {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-contact-hero-fade-in {
          animation: contact-hero-fade-in 1.1s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes contact-hero-slide-in {
          0% { opacity: 0; transform: translateX(-60px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .animate-contact-hero-slide-in {
          animation: contact-hero-slide-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes contact-hero-gradient-in {
          0% { opacity: 0; filter: blur(8px); }
          100% { opacity: 1; filter: blur(0); }
        }
        .animate-contact-hero-gradient-in {
          animation: contact-hero-gradient-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(100px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.4s cubic-bezier(0.4,0,0.2,1) both;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        @media (max-width: 768px) {
          form {
            margin: 2px; /* Add 2px margin */
            width: calc(100% - 4px); /* Ensure the form fills the screen minus the margin */
            box-sizing: border-box; /* Include padding and border in the element's total width and height */
          }
        }
      `}</style>
    </>
  );
};

export default ContactUs;
