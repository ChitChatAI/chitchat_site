import React from 'react';

const Community: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section
      id={id}
      className="bg-white text-gray-900 px-4 sm:px-8 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Be Part of Our AI Revolution
        </h2>
        <p className="text-lg text-gray-600 mb-6 mx-auto">
          Join us in shaping the future of AI. Collaborate and innovate together.
        </p>
        <div className="flex justify-center mt-8">
          <a
            href="mailto:jessicaclaireleighza@gmail.com"
            className="px-8 py-3 rounded-lg bg-theme-main/80 text-white font-medium hover:bg-theme-main/50 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;