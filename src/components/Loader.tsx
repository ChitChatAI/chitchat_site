import React, { useEffect } from 'react';

const Loader: React.FC = () => {
  useEffect(() => {
    // Prevent scrolling when loader is shown
    document.body.style.overflow = 'hidden';
    
    // Cleanup: restore scrolling when loader is unmounted
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black w-full h-full overflow-hidden">
     

      {/* Animated dots for loading */}
      <div className="relative z-10 flex space-x-3 justify-center">
        <span className="w-4 h-4 rounded-full bg-theme-main animate-pulse shadow-lg shadow-theme-main/50"></span>
        <span className="w-4 h-4 rounded-full bg-purple-400 animate-pulse delay-150 shadow-lg shadow-purple-400/50"></span>
        <span className="w-4 h-4 rounded-full bg-pink-400 animate-pulse delay-300 shadow-lg shadow-pink-400/50"></span>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          33% { transform: translateX(10px) translateY(-15px); }
          66% { transform: translateX(-10px) translateY(15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.2); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          75% { transform: translateY(10px) rotate(270deg); }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default Loader;
