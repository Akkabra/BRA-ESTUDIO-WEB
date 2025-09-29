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
      {/* Background Effects: Particles, Scanline, Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Neon Particles */}
        <div className="absolute top-0 left-0 h-full w-full opacity-60">
          <div className="neon-particles"></div>
        </div>

        {/* Scanline */}
        <div className="absolute top-0 left-0 w-full h-full animate-scan opacity-40">
          <div className="h-1 bg-gradient-to-r from-transparent via-neon-orange/80 to-transparent"></div>
        </div>
        
        {/* Grid Background */}
        <div
            className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"
        ></div>

        {/* Central Pulse */}
        <div
          className="absolute inset-0 z-[5] pointer-events-none animate-cyber-pulse"
          style={{
            background: `
              radial-gradient(circle at center, 
                hsl(var(--neon-yellow) / 0.15) 0%, 
                hsl(var(--neon-orange) / 0.1) 30%, 
                transparent 70%
              )
            `,
            filter: 'blur(80px)',
          }}
        ></div>
      </div>


      <div className="relative z-20 flex flex-col items-center space-y-8">
        <BraLogo className="h-24 md:h-32 w-auto animate-pulse" />

        <div className="w-64 md:w-96">
          <div className="h-2 w-full bg-neon-yellow/10 rounded-full overflow-hidden border border-neon-yellow/20">
            <div className="h-full bg-gradient-neon rounded-full animate-loading-fill shadow-neon-subtle"></div>
          </div>
        </div>

        <p className="font-headline text-sm md:text-base text-neon-yellow tracking-widest animate-text-flicker relative h-5 w-64 text-center overflow-hidden">
          <span className="animate-binary-glitch absolute inset-0"></span>
        </p>

        <p className="font-headline text-xs text-neon-yellow/70 tracking-[0.2em] animate-pulse">
            CARGANDO PROYECTO...
        </p>

      </div>
    </div>
  );
};

export default LoadingScreen;
