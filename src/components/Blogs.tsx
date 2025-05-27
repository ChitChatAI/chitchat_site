import React, { useState } from 'react';
import { blogs } from '../data/blogs';
import '../styles/fonts.css';

const Blogs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  };

  const getPositionStyles = (index: number) => {
    const offset = (index - currentIndex + blogs.length) % blogs.length;
    const position = offset === 0
      ? 'z-40 scale-100'
      : offset === 1 || offset === blogs.length - 1
      ? 'z-20 scale-90 blur-[1px]'
      : 'z-10 scale-75 blur-sm';

    const translateX = offset === 0
      ? 'translate-x-0'
      : offset === 1
      ? 'translate-x-64'
      : offset === blogs.length - 1
      ? '-translate-x-64'
      : 'translate-x-full';

    return `${translateX} ${position}`;
  };

  return (
    <section className="relative pt-20 md:pt-20 px-4 sm:px-16 bg-black text-white overflow-hidden font-satoshi">
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-center mb-8 sm:mb-12">Articles</h2>

      <div className="relative h-[24rem] sm:h-[28rem] flex items-center justify-center perspective-1000">
        {/* Blog Card 1 */}
        <div
          className={`absolute transform-gpu transition-all duration-700 ease-in-out w-full max-w-sm sm:max-w-md ${getPositionStyles(0)}`}
        >
          <div className="p-6 sm:p-8 bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_8px_80px_rgba(0,0,0,0.5)] rounded-3xl text-center hover:scale-105 transition-transform duration-500 flex flex-col justify-between h-80 sm:h-96 w-[20rem] sm:w-[28rem] opacity-90 hover:opacity-100">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">{blogs[0].title}</h3>
            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              {blogs[0].content.substring(0, 140)}...
            </p>
            <a
              href={blogs[0].link}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-theme-main to-theme-light text-white font-semibold rounded-full shadow-md hover:opacity-90 transition-all"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div
          className={`absolute transform-gpu transition-all duration-700 ease-in-out w-full max-w-sm sm:max-w-md ${getPositionStyles(1)}`}
        >
          <div className="p-6 sm:p-8 bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_8px_80px_rgba(0,0,0,0.5)] rounded-3xl text-center hover:scale-105 transition-transform duration-500 flex flex-col justify-between h-80 sm:h-96 w-[20rem] sm:w-[28rem] opacity-90 hover:opacity-100">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">{blogs[1].title}</h3>
            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              {blogs[1].content.substring(0, 140)}...
            </p>
            <a
              href={blogs[1].link}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-theme-main to-theme-light text-white font-semibold rounded-full shadow-md hover:opacity-90 transition-all"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div
          className={`absolute transform-gpu transition-all duration-700 ease-in-out w-full max-w-sm sm:max-w-md ${getPositionStyles(2)}`}
        >
          <div className="p-6 sm:p-8 bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_8px_80px_rgba(0,0,0,0.5)] rounded-3xl text-center hover:scale-105 transition-transform duration-500 flex flex-col justify-between h-80 sm:h-96 w-[20rem] sm:w-[28rem] opacity-90 hover:opacity-100">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">{blogs[2].title}</h3>
            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              {blogs[2].content.substring(0, 140)}...
            </p>
            <a
              href={blogs[2].link}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-theme-main to-theme-light text-white font-semibold rounded-full shadow-md hover:opacity-90 transition-all"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 sm:mt-8 space-x-3 sm:space-x-4">
        <button
          onClick={handlePrev}
          className="p-3 sm:p-4 w-12 sm:w-16 bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] rounded-md hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
          <span className="text-xl sm:text-2xl">&#8592;</span>
        </button>
        <button
          onClick={handleNext}
          className="p-3 sm:p-4 w-12 sm:w-16 bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] rounded-md hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
          <span className="text-xl sm:text-2xl">&#8594;</span>
        </button>
      </div>
    </section>
  );
};

export default Blogs;
