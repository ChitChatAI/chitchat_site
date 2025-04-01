import React from 'react';
import { IonIcon } from '@ionic/react';
import { codeSlashOutline, serverOutline, settingsOutline } from 'ionicons/icons';

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
      <IonIcon icon={icon} className="h-6 w-6 text-primary-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
      Learn More →
    </button>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: codeSlashOutline,
      title: 'Build',
      description: 'Construct context-aware AI applications with a flexible and composable framework.',
    },
    {
      icon: serverOutline,
      title: 'Run',
      description: 'Deploy your applications at scale with a purpose-built platform.',
    },
    {
      icon: settingsOutline,
      title: 'Manage',
      description: 'Monitor, evaluate, and optimize your AI applications effortlessly.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;