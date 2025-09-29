'use client';

import { BraLogo } from '@/components/bra-logo';
import { cn } from '@/lib/utils';

const LoadingScreen = ({ isExiting }: { isExiting?: boolean }) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cyber-black mobile-menu-gradient cyber-grain overflow-hidden',
        isExiting && 'animate-pixel-dissolve-out'
      )}
    >
      {/* Neon Rays Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-px animate-neon-rays"
              style={{
                left: '50%',
                transform: `rotate(${i * 30}deg)`,
                animationDelay: `${i * 150}ms`,
              }}
            >
              <div
                className={`h-full w-full ${i % 2 === 0 ? 'bg-gradient-to-t from-neon-yellow/50 to-transparent' : 'bg-gradient-to-t from-neon-orange/50 to-transparent'}`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center space-y-8">
        <BraLogo className="h-24 md:h-32 w-auto animate-pulse" />

        <div className="w-64 md:w-96">
          <div className="h-2 w-full bg-neon-yellow/10 rounded-full overflow-hidden border border-neon-yellow/20">
            <div className="h-full bg-gradient-neon rounded-full animate-loading-fill shadow-neon-subtle"></div>
          </div>
        </div>

        <p className="text-sm md:text-base text-neon-yellow font-headline tracking-widest animate-text-flicker">
          INICIANDO SISTEMA...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
