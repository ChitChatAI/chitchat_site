import React from 'react';
import { IonIcon } from '@ionic/react';
import { peopleOutline } from 'ionicons/icons';

const Community = () => {
  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <IonIcon icon={peopleOutline} className="h-16 w-16 mx-auto mb-8 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join 1M+ developers pushing the industry forward.
        </h2>
        <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors">
          Explore the Community
        </button>
      </div>
    </section>
  );
};

export default Community;