import { useEffect } from 'react';
import initScrollAnimations from '../utils/scrollAnimations';

// React hook to initialize scroll animations once the component is mounted
const useScrollAnimation = () => {
  useEffect(() => {
    // Small timeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      initScrollAnimations();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
};

export default useScrollAnimation;
