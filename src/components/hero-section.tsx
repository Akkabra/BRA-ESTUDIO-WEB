'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { BraLogo } from '@/components/bra-logo';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const whatsappNumber = "573000000000"; // Replace with real number

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center cyber-grain scanlines overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-neon-yellow to-transparent animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Parallax Background Lines */}
      <div className="absolute inset-0 opacity-20" style={parallaxStyle}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-neon-yellow/30 to-transparent"
            style={{
              top: `${10 + i * 10}%`,
              transform: `rotate(${-45 + Math.random() * 90}deg)`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Logo with Neon Effect */}
        <div className="mb-8">
          <BraLogo 
            className="h-32 md:h-48 w-auto mx-auto neon-glow animate-pulse-neon pixel-hover transition-all duration-300"
          />
        </div>

        {/* Main Title with Pixelation Effect */}
        <div className="space-y-4">
          <h1 
            className="text-4xl md:text-7xl font-headline font-bold text-neon-yellow pixel-hover cursor-pointer"
            data-text="BRA ESTUDIO WEB"
          >
            BRA ESTUDIO WEB
          </h1>
          
          <p className="text-lg md:text-2xl text-text-desaturated font-body max-w-2xl mx-auto leading-relaxed">
            Diseño web sin plantillas — Experiencias digitales únicas
          </p>
        </div>

        {/* CTA Button with Background Slideshow Effect */}
        <div className="pt-8">
          <div className="relative inline-block">
            {/* Background slideshow overlay */}
            <div className="absolute inset-0 rounded-lg overflow-hidden opacity-20">
              <div className="w-full h-full bg-gradient-to-r from-neon-yellow/30 via-neon-yellow/50 to-neon-yellow/30 animate-move-stripes"></div>
            </div>
            
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              className="relative z-10 group"
            >
              <MessageCircle size={24} className="group-hover:animate-pulse" />
              HABLA CON NOSOTROS
              
              {/* Diagonal rays overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-yellow/20 to-transparent skew-x-12 group-hover:animate-move-stripes"></div>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-neon-yellow rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neon-yellow rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Decorative Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-neon-yellow/30"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-neon-yellow/30"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-neon-yellow/30"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-neon-yellow/30"></div>
    </section>
  );
};

export default HeroSection;
