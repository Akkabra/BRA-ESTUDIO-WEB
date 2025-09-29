'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('web');

  const serviceTypes = [
    { key: 'web', label: 'Desarrollo Web' },
    { key: 'branding', label: 'Branding' },
    { key: 'apps', label: 'Apps Móviles' }
  ];

  return (
    <section id="servicios" className="py-20 cyber-grain relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-neon-yellow rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-neon-yellow rotate-12"></div>
      </div>
       <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>


      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-neon-yellow mb-6 cyber-title">
            NUESTROS SERVICIOS
          </h2>
          <p className="text-xl text-text-desaturated max-w-3xl mx-auto font-body">
            Soluciones digitales personalizadas que transforman tu visión en realidad
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="flex justify-center mb-12">
            <div className="flex space-x-2 p-1 bg-black/50 border border-neon-yellow/20 rounded-lg">
                {serviceTypes.map((service) => (
                <button
                    key={service.key}
                    onClick={() => setActiveService(service.key)}
                    className={cn(
                    "px-6 py-2 rounded-md font-headline text-sm transition-all duration-300 relative",
                    activeService === service.key
                        ? "text-neon-yellow"
                        : "text-text-desaturated/70 hover:text-neon-yellow/80 hover:bg-white/5"
                    )}
                >
                    {service.label}
                    {activeService === service.key && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-yellow animate-pulse shadow-neon-subtle"></div>
                    )}
                </button>
                ))}
            </div>
        </div>

        {/* CONTENEDOR PARA LAS NUEVAS TARJETAS */}
        <div className="text-center text-text-desaturated py-16">
          <p>Próximamente... aquí se mostrarán los paquetes de servicios.</p>
        </div>
        
      </div>
    </section>
  );
};

export default ServicesSection;
