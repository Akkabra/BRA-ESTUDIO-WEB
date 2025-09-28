'use client';

import { ArrowDown } from 'lucide-react';
import { BraLogo } from '@/components/bra-logo';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center cyber-grain scanlines overflow-hidden p-4"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        </div>
      </div>

      <div className="relative z-10 text-center space-y-8 animate-fade-in-up">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <BraLogo 
            className="pixel-hover transition-all duration-300"
            style={{ height: '170px' }}
          />
        </div>

        {/* Animated Title */}
        <div className="relative">
          <h1 
            className="text-3xl sm:text-5xl lg:text-7xl font-headline font-bold glitch"
            data-text="BRA ESTUDIO WEB"
          >
            <span className="text-neon-yellow">BRA ESTUDIO</span>{' '}
            <span className="text-text-desaturated">WEB</span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-base md:text-xl text-text-desaturated font-body max-w-2xl mx-auto leading-relaxed">
          Transformamos ideas en experiencias web inmersivas.
          <br/>
          Tu visión, nuestro código.
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <a href="#servicios" aria-label="Ir a servicios" className="animate-bounce block">
          <div className="w-10 h-10 border-2 border-neon-yellow/50 rounded-full flex items-center justify-center text-neon-yellow hover:bg-neon-yellow/10 transition-colors">
            <ArrowDown className="w-6 h-6" />
          </div>
        </a>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-neon-yellow/30 transition-all duration-300 group-hover:w-16 group-hover:h-16"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-neon-yellow/30 transition-all duration-300 group-hover:w-16 group-hover:h-16"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-neon-yellow/30 transition-all duration-300 group-hover:w-16 group-hover:h-16"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-neon-yellow/30 transition-all duration-300 group-hover:w-16 group-hover:h-16"></div>
    </section>
  );
};

export default HeroSection;
