'use client';

import { BraLogo } from '@/components/bra-logo';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cyber-black mobile-menu-gradient cyber-grain">
      <div className="w-full max-w-md mx-auto text-center">
        <BraLogo className="h-24 md:h-32 w-auto mx-auto mb-8 animate-pulse" />
        <p className="text-center font-headline text-lg glitch-text mb-4">
          SISTEMA INICIANDO...
        </p>
        <div className="h-1 bg-cyber-black border border-neon-yellow/50 rounded-full overflow-hidden shadow-neon-subtle">
          <div className="h-full bg-neon-yellow rounded-full animate-loading-fill shadow-neon"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
