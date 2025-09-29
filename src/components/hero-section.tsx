'use client';

import { ArrowDown } from 'lucide-react';
import { BraLogo } from '@/components/bra-logo';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImages = PlaceHolderImages.filter(img =>
    img.id.startsWith('hero-carousel')
  );

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Carousel as background */}
      <Carousel
        className="absolute inset-0 z-0"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="m-0 h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="relative h-full p-0">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                data-ai-hint={image.imageHint}
                className="object-cover"
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Overlay and Content Container */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center p-4">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-cyber-black/70"></div>
        
        {/* Grid Background */}
        <div className="absolute inset-0 scanlines cyber-grain">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative text-center space-y-8 animate-fade-in-up">
          <div className="mb-4 flex justify-center">
            <BraLogo
              className="pixel-hover transition-all duration-300 h-[100px] w-auto"
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
            Tu visión, nuestro código.
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
