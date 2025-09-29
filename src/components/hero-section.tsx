'use client';

import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { BraLogo } from '@/components/bra-logo';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImages = PlaceHolderImages.filter(img =>
    img.id.startsWith('hero-carousel')
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [heroImages.length]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0 h-screen w-full">
        {heroImages.map((image, index) => (
          <Image
            key={image.id}
            src={image.imageUrl}
            alt={image.description}
            fill
            data-ai-hint={image.imageHint}
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
          />
        ))}
      </div>
      
      {/* LaserRayGlow Effect */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] blur-3xl opacity-40"
        style={{
          background: `
            radial-gradient(at 50% 100%, hsl(var(--neon-yellow) / 0.2), transparent 50%),
            linear-gradient(to right, transparent, hsl(var(--neon-cyan) / 0.1) 50%, transparent),
            linear-gradient(to left, transparent, hsl(var(--neon-yellow) / 0.1) 50%, transparent)
          `
        }}
      ></div>


      {/* Overlay and Content Container */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center p-4">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-cyber-black/50"></div>
        
        {/* Grid Background */}
        <div className="absolute inset-0 scanlines cyber-grain">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 text-center space-y-8 animate-fade-in-up">
          <div className="mb-4 flex justify-center">
            <BraLogo
              className="pixel-hover transition-all duration-300 h-[230px] w-auto"
            />
          </div>

          <div className="relative">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold glitch"
              data-text="BRA ESTUDIO WEB"
            >
              <span className="text-neon-yellow">BRA ESTUDIO</span>{' '}
              <span className="text-text-desaturated">WEB</span>
            </h1>
          </div>
          
          <p className="text-base md:text-xl text-text-desaturated font-body max-w-2xl mx-auto leading-relaxed">
            Transformamos ideas en experiencias web inmersivas.
            <br />
            
          </p>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#servicios" aria-label="Ir a servicios" className="animate-bounce block">
            <div className="w-10 h-10 border-2 border-neon-yellow/50 rounded-full flex items-center justify-center text-neon-yellow hover:bg-neon-yellow/10 transition-colors">
              <ArrowDown className="w-6 h-6" />
            </div>
          </a>
        </div>
      </div>
      
      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-neon-yellow/30 z-20"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-neon-yellow/30 z-20"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-neon-yellow/30 z-20"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-neon-yellow/30 z-20"></div>
    </section>
  );
};

export default HeroSection;
