/**
 * Utility functions for enhanced scrolling effects
 */

/**
 * Add data-parallax attribute to elements to enable parallax scrolling effect
 * @param speed - Parallax speed factor (default: 0.2)
 */
export const enableParallax = (selector: string, speed: number = 0.2) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute('data-parallax', '');
    element.setAttribute('data-speed', speed.toString());
  });
};

/**
 * Enable staggered animations for elements in a container
 * @param containerSelector - The parent container selector
 * @param childSelector - The child elements selector
 */
export const enableStaggeredAnimations = (containerSelector: string, childSelector: string) => {
  document.querySelectorAll(containerSelector).forEach((container) => {
    container.classList.add('stagger-children');
    container.querySelectorAll(childSelector).forEach((child, index) => {
      child.style.transitionDelay = `${0.1 * (index + 1)}s`;
    });
  });
};

/**
 * Initialize scroll animations for all sections
 */
export const initScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15, // 15% visibility triggers the animation
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in-view');
        sectionObserver.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Observe all sections and elements that should animate on scroll
  document.querySelectorAll('section, .scroll-animate').forEach((section) => {
    sectionObserver.observe(section);
  });
};

/**
 * Smooth scroll to element
 * @param elementId - The ID of the element to scroll to
 * @param offset - Additional offset (e.g., for fixed headers)
 */
export const smoothScrollTo = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  }
};

export default {
  enableParallax,
  enableStaggeredAnimations,
  initScrollAnimations,
  smoothScrollTo
};
