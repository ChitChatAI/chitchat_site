import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { LocationOutline, MailOutline, CallOutline, LogoLinkedin, LogoTwitter } from 'react-ionicons';

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
  const videoPanelRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState('');
  const fullText = "Let's Build Better Conversations";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    if (!isModalOpen && videoPanelRef.current) {
      videoPanelRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

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

    const handleLoadAnimations = () => {
      document.querySelectorAll('.load-animation').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-slide-up');
        }, index * 150);
      });
    };

    handleScroll(); // Trigger on load
    handleLoadAnimations();
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
        <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
          {/* Form */}
          <div
            ref={formRef}
            className="bg-white shadow-xl rounded-lg p-6 sm:p-8 lg:p-10 scroll-review opacity-0 transition-transform duration-700 load-animation transform translate-y-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Get in Touch</h2>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">Message Sent!</h3>
                <p className="text-green-600">Thanks for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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

          {/* Contact Video Background */}
          <div
            ref={videoPanelRef}
            className="relative bg-black rounded-lg overflow-hidden shadow-xl scroll-review opacity-0 transition-transform duration-700 load-animation transform translate-y-10"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/contactUsPage/contactUsPage.mp4"
              autoPlay
              loop
              muted
            ></video>
            {isModalOpen && (
              <div className="absolute inset-0 bg-black/70 flex flex-col items-start justify-center text-white p-6 sm:p-8 animate-fade-in space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 animate-slide-up border-b-2 border-theme-main pb-2 w-full text-center">
                  Contact Details
                </h2>
                <div className="space-y-3 sm:space-y-4 w-full">
                  <div className="flex items-center space-x-3 animate-slide-up">
                    <LocationOutline color="#fff" height="20px" width="20px" />
                    <p className="text-sm sm:text-base">123 Business Lane, Suite 456, Tech City, TX 78901</p>
                  </div>
                  <div className="flex items-center space-x-3 animate-slide-up">
                    <CallOutline color="#fff" height="20px" width="20px" />
                    <p className="text-sm sm:text-base">+1 (123) 456-7890</p>
                  </div>
                  <div className="flex items-center space-x-3 animate-slide-up">
                    <MailOutline color="#fff" height="20px" width="20px" />
                    <p className="text-sm sm:text-base">contact@chitchat.com</p>
                  </div>
                  <div className="flex items-center space-x-3 animate-slide-up">
                    <LogoLinkedin color="#fff" height="20px" width="20px" />
                    <a
                      href="https://www.linkedin.com/company/chitchat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-theme-main hover:underline"
                    >
                      linkedin.com/company/chitchat
                    </a>
                  </div>
                </div>
                <button
                  onClick={toggleModal}
                  className="mt-4 sm:mt-6 bg-theme-main text-white py-2 px-4 rounded-md hover:bg-theme-dark transition-all animate-slide-up self-center"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Floating Button */}
      <button
        onClick={toggleModal}
        className="fixed bottom-6 right-6 bg-theme-main text-white p-4 rounded-full shadow-lg hover:bg-theme-dark transition-all transform hover:scale-105 z-50"
      >
        <LocationOutline color="#fff" height="24px" width="24px" />
      </button>

      <Footer />
    </>
  );
};

export default ContactUs;
