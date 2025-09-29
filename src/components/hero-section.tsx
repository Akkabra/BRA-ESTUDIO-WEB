'use client';

import { useState, useEffect } from 'react';
import { BraLogo } from '@/components/bra-logo';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImages = PlaceHolderImages.filter(img =>
    img.id.startsWith('hero-carousel')
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(imageInterval);
    };
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
      
      {/* Neon Particles */}
      <div className="absolute inset-0 z-[1] h-full w-full overflow-hidden">
        <div className="neon-particles"></div>
      </div>

      {/* CyberPulseRays Effect */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none animate-cyber-pulse"
        style={{
          background: `
            conic-gradient(from 180deg at 50% 100%, 
              transparent 0deg, 
              hsl(var(--neon-yellow) / 0.15) 160deg, 
              hsl(var(--neon-orange) / 0.1) 180deg, 
              hsl(var(--neon-yellow) / 0.15) 200deg, 
              transparent 360deg
            )
          `,
          filter: 'blur(60px)',
          transform: 'scale(1.5)'
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
        <div className="relative z-20 w-full text-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="mb-4 flex justify-center">
              <BraLogo
                className="pixel-hover transition-all duration-300 h-[100px] md:h-[230px] w-auto"
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

            <a
              href="https://wa.me/573145527342"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative inline-block px-4 py-2 mt-4
                font-headline text-sm font-bold tracking-widest uppercase 
                transition-colors duration-200 ease-in-out
                
                // Estilo Base Neón
                text-cyber-black bg-gradient-neon shadow-[0_0_15px_rgba(246,190,15,0.5)] 
                border-2 border-neon-yellow
                
                // Efecto Hover
                hover:shadow-[0_0_25px_rgba(246,190,15,1),_0_0_100px_rgba(246,190,15,0.7)] 
                
                // Contenedor para Pseudoelementos
                group
              "
            >
              INICIAR PROYECTO
              
              {/* Capa de Borde Superior/Inferior (Efecto de Línea de Falla) */}
              <span 
                  className="
                      absolute inset-0 
                      border-t-2 border-b-2 border-neon-yellow opacity-0 
                      group-hover:opacity-100 group-hover:animate-[glitch-line-1_0.2s_infinite]
                  " 
              ></span>
              
              {/* Capa de Borde Izquierdo/Derecho (Efecto de Desplazamiento) */}
              <span 
                  className="
                      absolute inset-0 
                      border-l-2 border-r-2 border-neon-yellow opacity-0 
                      group-hover:opacity-100 group-hover:animate-[glitch-line-2_0.2s_infinite]
                  " 
              ></span>
            </a>
          </div>
        </div>


        {/* Scroll Down Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <a href="#servicios" aria-label="Ir a servicios" className="animate-bounce block">
            <div className="w-6 h-6 border border-neon-yellow/50 rounded-full flex items-center justify-center text-neon-yellow hover:bg-neon-yellow/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </div>
          </a>
        </div>
      </div>
      
      {/* Corner Brackets */}
      <>
        <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-neon-yellow/30 z-20"></div>
        <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-neon-yellow/30 z-20"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-neon-yellow/30 z-20"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-neon-yellow/30 z-20"></div>
      </>
    </section>
  );
};

export default HeroSection;
