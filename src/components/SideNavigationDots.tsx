import React, { useEffect, useState } from 'react';

interface SideNavigationDotsProps {
  sections: string[];
}

const SideNavigationDots: React.FC<SideNavigationDotsProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let foundActiveSection = false;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            foundActiveSection = true;
            break;
          }
        }
      }
      if (!foundActiveSection) {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleScrollToSection(section)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section
                ? 'bg-theme-main scale-125 shadow-lg shadow-theme-main/30'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Scroll to ${section} section`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SideNavigationDots;
