import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling when loader is shown
    document.body.style.overflow = 'hidden';

    // Simulate progress (optional - remove if not needed)
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 10, 90));
    }, 500);

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white w-full h-full overflow-hidden">
      {/* Main loader with enhanced animation */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        {/* Animated dots with improved spacing and effects */}
        <div className="relative flex space-x-4 mb-8">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`w-5 h-5 rounded-full ${i % 2 === 0 ? 'bg-theme-main' : 'bg-purple-400'
                } animate-bounce`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-theme-main animate-float-slow" />
        <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-purple-400 animate-float-medium" />
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-pink-400 animate-float-fast" />
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-theme-main animate-float-delayed" />
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(15px, -20px); }
          66% { transform: translate(-15px, 20px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.2); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(90deg); }
          75% { transform: translateY(15px) rotate(270deg); }
        }
        .animate-bounce {
          animation: bounce 1.5s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out infinite alternate;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
};

export default Loader;