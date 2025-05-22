import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="loader border-t-4 border-theme-main rounded-full w-16 h-16 mb-4 animate-spin"></div>
      </div>
      <style>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.2);
          border-top-color: #6b46c1; /* Theme main color */
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
