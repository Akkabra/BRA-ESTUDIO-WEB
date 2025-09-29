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
      <div className="relative z-20 flex flex-col items-center space-y-8">
        <BraLogo className="h-24 md:h-32 w-auto animate-pulse" />

        <div className="w-64 md:w-96">
          <div className="h-2 w-full bg-neon-yellow/10 rounded-full overflow-hidden border border-neon-yellow/20">
            <div className="h-full bg-gradient-neon rounded-full animate-loading-fill shadow-neon-subtle"></div>
          </div>
        </div>

        <p className="text-sm md:text-base text-neon-yellow font-code tracking-widest animate-text-flicker">
          INICIANDO SISTEMA...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;

    