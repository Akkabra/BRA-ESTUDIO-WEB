'use client';

import { BraLogo } from '@/components/bra-logo';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cyber-black mobile-menu-gradient cyber-grain">
      <div className="w-full max-w-md mx-auto text-center">
        <BraLogo className="h-24 md:h-32 w-auto mx-auto mb-8 animate-pulse" />
        <div className="h-2 bg-cyber-black/50 border border-neon-yellow/30 rounded-full overflow-hidden shadow-neon-subtle mb-4">
          <div className="h-full bg-gradient-to-r from-neon-yellow/70 to-neon-yellow rounded-full animate-loading-fill shadow-neon"></div>
        </div>
        <p className="text-center font-headline text-lg glitch-text">
          SISTEMA INICIANDO...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
