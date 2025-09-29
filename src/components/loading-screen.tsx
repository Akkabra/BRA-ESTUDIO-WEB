'use client';

import { BraLogo } from '@/components/bra-logo';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cyber-black mobile-menu-gradient cyber-grain overflow-hidden">
      <div className="absolute inset-0 w-full h-full animate-scan bg-gradient-to-t from-neon-yellow/20 via-transparent to-transparent z-10"></div>
      
      <div className="w-full max-w-lg mx-auto text-center relative z-20">
        <BraLogo className="h-24 md:h-32 w-auto mx-auto mb-8 animate-pulse" />
        
        <div className="relative mb-6">
          <div className="h-2 bg-cyber-black/50 border border-neon-yellow/30 rounded-full overflow-hidden shadow-neon-subtle">
            <div className="h-full bg-gradient-to-r from-neon-yellow/70 to-neon-yellow rounded-full animate-loading-fill shadow-neon"></div>
          </div>
        </div>
        
        <div className="relative h-8">
          <p 
            className="text-center font-headline text-lg animate-text-flicker text-neon-yellow"
            data-text="SISTEMA INICIANDO..."
          >
            SISTEMA INICIANDO...
          </p>
          <p 
            className="absolute inset-0 text-center font-code text-sm animate-binary-glitch text-green-400/70"
            aria-hidden="true"
          ></p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
