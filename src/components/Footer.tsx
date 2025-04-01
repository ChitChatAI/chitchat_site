import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoTwitter, logoLinkedin, logoYoutube, logoGithub } from 'ionicons/icons';

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: ['Build', 'Run', 'Manage'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Customer Stories', 'Academy'],
    },
    {
      title: 'Docs',
      links: ['Python Docs', 'JavaScript Docs', 'API Reference'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Contact'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service'],
    },
  ];

  const socialLinks = [
    { icon: logoTwitter, href: '#' },
    { icon: logoLinkedin, href: '#' },
    { icon: logoYoutube, href: '#' },
    { icon: logoGithub, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2025 AIFramework. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {socialLinks.map(({ icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="hover:text-white transition-colors"
                >
                  <IonIcon icon={icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;