import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { LocationOutline, MailOutline, CallOutline } from 'react-ionicons';

const inputBase = "w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
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
  const [currentStep, setCurrentStep] = useState(1); // Track form step
  const [typedText, setTypedText] = useState('');
  const fullText = 'Contact Us';

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.substring(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  const handleNextStep = () => {
    if (currentStep === 1 && (!formData.name || !formData.email)) {
      alert('Please fill out all required fields before proceeding.');
      return;
    }
    if (currentStep === 2 && (!formData.companySize || !formData.industry || !formData.goals)) {
      alert('Please fill out all required fields before proceeding.');
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
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
      <section className="relative bg-white py-32 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-20 scroll-review opacity-0 transform translate-y-10">
            Let's Start the Conversation
          </h2>

          <div className="relative border-l-2 border-dotted border-theme-main pl-12 space-y-20">
            {currentStep === 1 && (
              <div className="relative scroll-review opacity-0 transform translate-y-10 pl-14 pr-32">
                <span className="absolute -left-[14px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md"></span>
                <h3 className="text-2xl font-semibold text-theme-main mb-4">Step 1: Your Contact Details</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputBase}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputBase}
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </form>
              </div>
            )}

            {currentStep === 2 && (
              <div className="relative scroll-review opacity-0 transform translate-y-10">
                <span className="absolute -left-[14px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md"></span>
                <h3 className="text-2xl font-semibold text-theme-main mb-4">Step 2: Company & Goals</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className={inputBase}
                  >
                    <option value="">Company Size</option>
                    <option value="Solo">Solo</option>
                    <option value="Startup">Startup</option>
                    <option value="SME">SME</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                  <input
                    type="text"
                    name="industry"
                    placeholder="Industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={inputBase}
                  />
                  <select
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    className={inputBase}
                  >
                    <option value="">Use Case / Goals</option>
                    <option value="Customer Support AI">Customer Support AI</option>
                    <option value="Sales Assistant">Sales Assistant</option>
                    <option value="Internal Automation">Internal Automation</option>
                    <option value="Other">Other</option>
                  </select>
                </form>
              </div>
            )}

            {currentStep === 3 && (
              <div className="relative scroll-review opacity-0 transform translate-y-10">
                <span className="absolute -left-[14px] top-1 w-4 h-4 bg-theme-main border-4 border-white rounded-full shadow-md"></span>
                <h3 className="text-2xl font-semibold text-theme-main mb-4">Step 3: Additional Info</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <label className="block text-gray-700 font-medium">Interested in:</label>
                    <div className="flex flex-wrap gap-4">
                      {['SDK Integration', 'Custom Persona', 'AI Strategy Call'].map((interest) => (
                        <label key={interest} className="flex items-center">
                          <input
                            type="checkbox"
                            name={interest}
                            checked={formData.interests.includes(interest)}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                          />
                          <span className="text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    name="teamDescription"
                    rows={4}
                    placeholder="Describe your team (e.g., Technical team onboard, need AI help)"
                    value={formData.teamDescription}
                    onChange={handleChange}
                    className={inputBase}
                  />
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className={inputBase}
                    required
                  />
                </form>
              </div>
            )}

            <div className="mt-10 flex justify-between items-center">
              {currentStep > 1 && (
                <button
                  onClick={handlePrevStep}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
                >
                  ← Back
                </button>
              )}
              {currentStep < 3 ? (
                <button
                  onClick={handleNextStep}
                  className="px-6 py-3 bg-theme-main text-gray-100 rounded-full hover:bg-theme-dark transition transform hover:scale-105"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-6 py-3 text-gray-100 bg-theme-main rounded-full font-medium transition-all duration-300 ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-theme-dark'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
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
