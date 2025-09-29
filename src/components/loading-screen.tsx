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
      {/* Corner Flares */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 animate-corner-flare bg-[radial-gradient(ellipse_at_center,_hsl(var(--neon-yellow)/0.4)_0%,_hsl(var(--neon-orange)/0.2)_40%,transparent_80%)] [animation-delay:0s]"></div>
        <div className="absolute -top-1/4 -right-1/4 h-1/2 w-1/2 animate-corner-flare bg-[radial-gradient(ellipse_at_center,_hsl(var(--neon-yellow)/0.4)_0%,_hsl(var(--neon-orange)/0.2)_40%,transparent_80%)] [animation-delay:0.2s]"></div>
        <div className="absolute -bottom-1/4 -left-1/4 h-1/2 w-1/2 animate-corner-flare bg-[radial-gradient(ellipse_at_center,_hsl(var(--neon-yellow)/0.4)_0%,_hsl(var(--neon-orange)/0.2)_40%,transparent_80%)] [animation-delay:0.3s]"></div>
        <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 animate-corner-flare bg-[radial-gradient(ellipse_at_center,_hsl(var(--neon-yellow)/0.4)_0%,_hsl(var(--neon-orange)/0.2)_40%,transparent_80%)] [animation-delay:0.5s]"></div>
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
