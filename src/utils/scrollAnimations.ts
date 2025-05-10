/**
 * Utility to apply scroll-based animations to elements
 */

// Initialize Intersection Observer
export const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll(
    '.reveal-fade, .reveal-slide-left, .reveal-slide-right, .reveal-scale, .reveal-rotate, .perspective-element, .text-reveal, .mask-reveal, .count-up, .neural-timeline-advanced'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          
          // Handle counters specifically
          if (entry.target.classList.contains('count-up')) {
            animateCounter(entry.target as HTMLElement);
          }
        } else {
          // Optional: remove class when element is not visible
          // entry.target.classList.remove('reveal-visible');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px', // Adjust trigger point (negative value triggers earlier)
    }
  );

  animatedElements.forEach((el) => observer.observe(el));

  // Setup parallax effects
  setupParallaxEffects();
  
  // Setup text split effects
  setupTextSplitEffects();
};

// Animate number counters
const animateCounter = (element: HTMLElement) => {
  const target = parseInt(element.getAttribute('data-target') || '0', 10);
  const duration = parseInt(element.getAttribute('data-duration') || '1500', 10);
  const start = Date.now();
  const startValue = 0;
  
  const step = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(startValue + (target - startValue) * easeOutQuart);
    
    element.textContent = current.toString();
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = target.toString();
    }
  };
  
  window.requestAnimationFrame(step);
};

// Setup parallax effects
const setupParallaxEffects = () => {
  const parallaxSections = document.querySelectorAll('.parallax-section');
  
  window.addEventListener('scroll', () => {
    parallaxSections.forEach((section) => {
      const bg = section.querySelector('.parallax-bg') as HTMLElement;
      if (bg) {
        const scrollPosition = window.pageYOffset;
        const sectionOffset = (section as HTMLElement).offsetTop;
        const relativeScroll = scrollPosition - sectionOffset;
        
        bg.style.transform = `translateY(${relativeScroll * 0.5}px)`;
      }
    });
  });
};

// Setup text split effects
const setupTextSplitEffects = () => {
  document.querySelectorAll('.text-split').forEach((element) => {
    const text = element.textContent || '';
    element.textContent = '';
    
    // Split by words or characters
    const splitBy = element.getAttribute('data-split') || 'words';
    
    if (splitBy === 'words') {
      const words = text.split(' ');
      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + (index < words.length - 1 ? ' ' : '');
        span.style.transitionDelay = `${index * 0.05}s`;
        element.appendChild(span);
      });
    } else {
      Array.from(text).forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.transitionDelay = `${index * 0.025}s`;
        element.appendChild(span);
      });
    }
  });
};

// Export a single function to initialize all animations
export default initScrollAnimations;
