import React, { useEffect, useMemo, useState } from 'react';

type LoaderProps = {
  progress?: number;
  message?: string;
};

const Loader: React.FC<LoaderProps> = ({ progress, message }) => {
  const [internalProgress, setInternalProgress] = useState(0);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev || 'unset';
    };
  }, []);

  useEffect(() => {
    if (typeof progress === 'number') return;
    const interval = setInterval(() => {
      setInternalProgress((prev) => {
        const next = prev + Math.max(1, Math.round((100 - prev) * 0.06));
        return Math.min(next, 90);
      });
    }, 300);
    return () => clearInterval(interval);
  }, [progress]);

  const displayProgress = useMemo(() => {
    const val = typeof progress === 'number' ? progress : internalProgress;
    return Math.max(0, Math.min(100, Math.floor(val)));
  }, [progress, internalProgress]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white w-full h-full overflow-hidden">
      {/* Main loader */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6">
        {/* Animated dots */}
        <div className="relative flex space-x-4 mb-6">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`w-5 h-5 rounded-full ${i % 2 === 0 ? 'bg-theme-main' : 'bg-purple-400'} animate-bounce`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

       
        {/* Progress bar (no bubble/stripe effects) */}
        <div
          className="w-[82vw] max-w-md relative"
          aria-label="Loading progress"
          role="progressbar"
          aria-valuenow={displayProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-3 w-full rounded-full bg-white/10 backdrop-blur-sm shadow-inner overflow-hidden ring-1 ring-white/10">
            <div
              className="h-full rounded-full bg-theme-main transition-[width] duration-300 ease-out"
              style={{ width: `${displayProgress}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs tabular-nums text-white/80">
            <span>Progress</span>
            <span>{displayProgress}%</span>
          </div>
        </div>
      </div>

      

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
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
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(90deg); }
          75% { transform: translateY(15px) rotate(270deg); }
        }
        .animate-bounce { animation: bounce 1.5s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite 2s; }
      `}</style>
    </div>
  );
};

export default Loader;
