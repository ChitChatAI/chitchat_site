import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { LocationOutline, MailOutline, CallOutline } from 'react-ionicons';

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

  const handleNextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
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
      <NavBar className="navbar fixed top-0 left-0 w-full bg-transparent transition-all duration-300 z-50" />
      <section
        className="relative bg-cover bg-center bg-fixed py-24 px-4 sm:px-8 lg:px-12"
        style={{ backgroundImage: "url('solutionsPage/solutions.jpg')" }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 z-0 bg-white/80 -top-24" />

        <div className="relative max-w-7xl mx-auto z-20">
          {/* Hero Section */}
          <div className="text-center mb-16 py-6 scroll-review opacity-0 transition-opacity duration-700">
            <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-lg tracking-wide">{typedText}</h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Have questions or need help? <br /> Reach out to us, and we’ll get back to you as soon as possible.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100 opacity-0 shadow-xl z-30 scroll-review transition-opacity duration-700">
              <h2 className="text-3xl font-bold text-gray-700 mb-8">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="bg-green-50/80 border border-green-100 rounded-lg p-6 text-center scroll-review opacity-0 transition-opacity duration-700">
                  <h3 className="text-lg font-semibold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-green-600">Thank you for reaching out. We’ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 scroll-review opacity-0 transition-opacity duration-700">
                  {currentStep === 1 && (
                    <>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </>
                  )}
                  {currentStep === 2 && (
                    <>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Company Size</option>
                        <option value="Solo">Solo</option>
                        <option value="Startup">Startup</option>
                        <option value="SME">SME</option>
                        <option value="Enterprise">Enterprise</option>
                      </select>
                      <p className="text-sm text-gray-700 mt-2">Knowing your company size helps us tailor our response better.</p>
                      <input
                        type="text"
                        name="industry"
                        placeholder="Industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <p className="text-sm text-gray-700 mt-2">Let us know your industry to provide relevant solutions.</p>
                      <select
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Use Case / Goals</option>
                        <option value="Customer Support AI">Customer Support AI</option>
                        <option value="Sales Assistant">Sales Assistant</option>
                        <option value="Internal Automation">Internal Automation</option>
                        <option value="Other">Other</option>
                      </select>
                      <p className="text-sm text-gray-700 mt-2">Understanding your goals helps us align our solutions to your needs.</p>
                    </>
                  )}
                  {currentStep === 3 && (
                    <>
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">Are you interested in:</label>
                        <div className="flex flex-wrap gap-4">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="SDK Integration"
                              checked={formData.interests.includes('SDK Integration')}
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <span className="text-gray-700">SDK Integration</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="Custom Persona"
                              checked={formData.interests.includes('Custom Persona')}
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <span className="text-gray-700">Custom Persona</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="AI Strategy Call"
                              checked={formData.interests.includes('AI Strategy Call')}
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <span className="text-gray-700">AI Strategy Call</span>
                          </label>
                        </div>
                      </div>
                      <textarea
                        name="teamDescription"
                        rows={4}
                        placeholder="Describe your team (e.g., Technical team onboard, need AI help)"
                        value={formData.teamDescription}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <p className="text-sm text-gray-700 mt-2">Knowing your team setup helps us tailor our response better.</p>
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </>
                  )}
                  <div className="flex justify-between">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-all duration-300"
                      >
                        ←
                      </button>
                    )}
                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-4 py-2 bg-theme-main text-white rounded-full shadow-md hover:bg-theme-main transition-all duration-300 transform hover:scale-110"
                      >
                        →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-6 py-3 text-white bg-theme-main hover:bg-theme-main rounded-md font-medium transition-all duration-300 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                          }`}
                      >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 opacity-0 scroll-review transition-opacity duration-700">
              <h2 className="text-3xl font-bold text-gray-700 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-theme-main p-2 rounded-full">
                    <LocationOutline color="#FFFFFF" height="20px" width="20px" />
                  </div>
                  <p className="text-gray-700">123 Business Lane, Suite 456, Tech City, TX 78901</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-theme-main p-2 rounded-full">
                    <CallOutline color="#FFFFFF" height="20px" width="20px" />
                  </div>
                  <p className="text-gray-700">+1 (123) 456-7890</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-theme-main p-2 rounded-full">
                    <MailOutline color="#FFFFFF" height="20px" width="20px" />
                  </div>
                  <p className="text-gray-700">contact@chitchat.com</p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Business Hours</h3>
                <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Personalized Follow-up Options */}
          <div className="mt-16 bg-white rounded-xl p-6 border border-gray-100 opacity-0 scroll-review transition-opacity duration-700">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">Personalized Follow-up Options</h2>
            <p className="text-gray-700 mb-6">Let us know how you'd like to proceed:</p>
            <div className="space-y-6">
              {/* Book a Meeting */}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-gray-700 py-4 px-6 font-semibold text-center transition-all duration-300 transform hover:scale-110 hover:text-theme-main scroll-review opacity-0 transition-opacity duration-700 flex items-center justify-between"
              >
                Book a Meeting Now
                <span className="ml-2">→</span>
              </a>

              {/* Send Info */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('We will send you the requested information.');
                }}
                className="w-full block text-gray-700 py-4 px-6 font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:text-theme-main scroll-review opacity-0 transition-opacity duration-700 flex items-center justify-between"
              >
                Just Send Info — I’ll Review It First
                <span className="ml-2">→</span>
              </a>

              {/* Demo Video */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('A demo video link will be sent to your email.');
                }}
                className="w-full block text-gray-700 py-4 px-6 font-semibold text-center transition-all duration-300 transform hover:scale-110 hover:text-theme-main scroll-review opacity-0 transition-opacity duration-700 flex items-center justify-between"
              >
                Want to See a Demo Video
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
