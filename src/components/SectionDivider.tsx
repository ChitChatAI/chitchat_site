import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="flex items-center justify-center my-12">
      <div className="h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-theme-light to-transparent"></div>
      <div className="w-4 h-4 bg-theme-light rounded-full mx-2"></div>
      <div className="h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-theme-light to-transparent"></div>
    </div>
  );
};

export default SectionDivider;
