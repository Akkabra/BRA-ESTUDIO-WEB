'use client';

import { BraLogo } from '@/components/bra-logo';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cyber-black mobile-menu-gradient cyber-grain overflow-hidden">
      <div className="relative z-20">
        <BraLogo className="h-24 md:h-32 w-auto mx-auto animate-pulse" />
      </div>
    </div>
  );
};

export default LoadingScreen;
