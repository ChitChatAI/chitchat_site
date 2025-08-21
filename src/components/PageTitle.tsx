import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'ChitChat AI | Psychology-Driven AI Personas & Digital Humans',
  '/contactus': 'ChitChat AI | Contact Us - AI Solutions Inquiry',
  '/industries': 'ChitChat AI | AI Solutions - Custom Digital Humans for Business',
  '/development-workflow': 'ChitChat AI | Our AI Development Process - Psychology + Technology',
};

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const baseTitle = 'ChitChat AI | ';
    const path = location.pathname;
    
    // Find matching path or use default
    let pageTitle = pageTitles[path] || `${baseTitle}${path.replace('/', '')}`;
    
    // Handle home page case
    if (path === '/') {
      pageTitle = pageTitles['/'];
    }

    document.title = pageTitle;

    // Update meta description dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const defaultDescription = 'Psychology-driven AI personas and digital humans for business solutions';
      const descriptions: Record<string, string> = {
        '/': 'ChitChat AI creates hyper-realistic, psychology-driven AI personas for customer service and business solutions.',
        '/industries': 'Explore our AI solutions for customer service, sales, and support with emotionally intelligent digital humans.',
        '/contactus': 'Contact ChitChat AI to discuss custom AI persona solutions for your business needs.',
        '/development-workflow': 'Our unique development process combines cognitive psychology with advanced AI technology.',
      };
      metaDescription.setAttribute('content', descriptions[path] || defaultDescription);
    }
  }, [location.pathname]);

  return null;
};

export default PageTitle;