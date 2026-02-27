import React, { useEffect, useState } from 'react';
import { Brush as Broom, Eraser as Squeegee } from 'lucide-react';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'sweeping' | 'wiping' | 'done'>('sweeping');

  useEffect(() => {
    // Phase 1: Sweeping (2.5 seconds)
    const sweepTimer = setTimeout(() => {
      setPhase('wiping');
    }, 2500);

    // Phase 2: Wiping (2 seconds)
    const wipeTimer = setTimeout(() => {
      setPhase('done');
      setTimeout(onComplete, 500);
    }, 4500);

    return () => {
      clearTimeout(sweepTimer);
      clearTimeout(wipeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden">
      {phase === 'sweeping' && (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-slate-50">
          {/* Dirt particles */}
          <div className="absolute bottom-1/3 flex space-x-8">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="w-3 h-3 bg-amber-900/40 rounded-full animate-particle"
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  left: `${i * 8}%`
                }}
              />
            ))}
          </div>
          
          {/* 3D Broom */}
          <div className="animate-broom-action absolute bottom-1/3">
            <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
              {/* Handle */}
              <rect x="55" y="0" width="10" height="150" rx="5" fill="url(#broomHandleGradient)" />
              {/* Brush Base */}
              <path d="M10 150H110L120 190H0L10 150Z" fill="url(#broomBrushGradient)" />
              {/* Bristle Lines */}
              <line x1="20" y1="160" x2="15" y2="185" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              <line x1="40" y1="160" x2="35" y2="185" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              <line x1="60" y1="160" x2="60" y2="185" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              <line x1="80" y1="160" x2="85" y2="185" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              <line x1="100" y1="160" x2="105" y2="185" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              
              <defs>
                <linearGradient id="broomHandleGradient" x1="55" y1="0" x2="65" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#78350F" />
                  <stop offset="0.5" stopColor="#92400E" />
                  <stop offset="1" stopColor="#78350F" />
                </linearGradient>
                <linearGradient id="broomBrushGradient" x1="0" y1="150" x2="120" y2="150" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B45309" />
                  <stop offset="0.5" stopColor="#D97706" />
                  <stop offset="1" stopColor="#B45309" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="mt-48 text-center">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-2">Precision Cleaning</h2>
            <p className="font-bold text-brand-red uppercase tracking-widest text-xs animate-pulse">
              Sweeping away the dust...
            </p>
          </div>
        </div>
      )}

      {phase === 'wiping' && (
        <div className="absolute inset-0 bg-white flex items-center justify-center">
          {/* The "Cleaned" content behind the wipe */}
          <div className="absolute inset-0 bg-brand-red flex flex-col items-center justify-center text-white">
             <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Spotless</h1>
             <p className="text-xl font-bold opacity-80 uppercase tracking-widest">Ready for Business</p>
          </div>

          {/* The "Dirty" layer being wiped away */}
          <div className="absolute inset-0 bg-slate-200 animate-wipe-away">
             {/* 3D Squeegee (Rodo) */}
             <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center translate-y-1/2">
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
                  {/* Handle */}
                  <rect x="95" y="50" width="10" height="100" rx="5" fill="url(#squeegeeHandleGradient)" />
                  {/* Head */}
                  <rect x="0" y="40" width="200" height="15" rx="2" fill="url(#squeegeeHeadGradient)" />
                  {/* Rubber Blade */}
                  <rect x="0" y="55" width="200" height="5" fill="#1F2937" />
                  
                  <defs>
                    <linearGradient id="squeegeeHandleGradient" x1="95" y1="50" x2="105" y2="50" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#374151" />
                      <stop offset="0.5" stopColor="#4B5563" />
                      <stop offset="1" stopColor="#374151" />
                    </linearGradient>
                    <linearGradient id="squeegeeHeadGradient" x1="0" y1="40" x2="0" y2="55" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9CA3AF" />
                      <stop offset="0.5" stopColor="#D1D5DB" />
                      <stop offset="1" stopColor="#9CA3AF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="w-full h-2 bg-blue-400/30 blur-sm -mt-1" />
             </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes broom-action {
          0% { transform: translateX(-150px) rotate(-10deg); }
          50% { transform: translateX(150px) rotate(20deg); }
          100% { transform: translateX(-150px) rotate(-10deg); }
        }
        .animate-broom-action {
          animation: broom-action 1.2s ease-in-out infinite;
        }
        
        @keyframes particle {
          0% { transform: translateX(0) scale(1); opacity: 0.8; }
          50% { transform: translateX(100px) scale(0.5); opacity: 0; }
          100% { transform: translateX(-100px) scale(1); opacity: 0.8; }
        }
        .animate-particle {
          animation: particle 1.2s ease-in-out infinite;
        }

        @keyframes wipe-away {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        .animate-wipe-away {
          animation: wipe-away 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
      `}</style>
    </div>
  );
};
