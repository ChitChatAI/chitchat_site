import React, { useEffect } from 'react';

type LoaderProps = {
  message?: string;
};

const Loader: React.FC<LoaderProps> = ({ message }) => {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev || 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white w-full h-full overflow-hidden">
      {/* Main loader */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6">
        {/* Animated dots */}
        <div className="relative flex space-x-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`w-5 h-5 rounded-full ${i % 2 === 0 ? 'bg-theme-main' : 'bg-purple-400'} animate-bounce`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        {/* Optional message */}
        {message && (
          <p className="mt-6 text-sm text-white/80">{message}</p>
        )}
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce { animation: bounce 1.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Loader;
