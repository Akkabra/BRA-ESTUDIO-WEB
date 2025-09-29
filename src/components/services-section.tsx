'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle, Code, Gem, Package } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('web');

  const serviceTypes = [
    { key: 'web', label: 'Desarrollo Web' },
    { key: 'branding', label: 'Branding' },
    { key: 'apps', label: 'Apps Móviles' }
  ];

  const mainServices = {
    web: [
        {
          title: 'Plan Básico',
          price: '$1,200',
          priceDetails: 'USD / pago único',
          icon: Package,
          features: [
            'Landing Page (hasta 4 secciones)',
            'Diseño responsive multidispositivo',
            'Formulario de contacto',
            'Integración con redes sociales',
            'Optimización SEO básica',
          ],
          details: 'Ideal para startups y proyectos que necesitan una presencia online profesional y rápida. Una landing page optimizada para convertir visitantes en clientes.',
        },
        {
          title: 'Plan Normal',
          price: '$2,500',
          priceDetails: 'USD / pago único',
          icon: Code,
          features: [
            'Sitio Web (hasta 8 páginas)',
            'Diseño personalizado y animaciones',
            'CMS para autogestión de contenido',
            'Blog integrado',
            'Optimización SEO avanzada',
            'Integración de API (hasta 2)',
          ],
          details: 'La solución completa para empresas que buscan crecer. Un sitio web robusto y escalable con un sistema de gestión de contenidos para que tengas control total sobre tu plataforma.',
        },
        {
          title: 'Plan Premium',
          price: '$5,000+',
          priceDetails: 'USD / según alcance',
          icon: Gem,
          features: [
            'Plataforma Web a medida',
            'E-commerce completo',
            'Panel de administración avanzado',
            'Integraciones complejas y APIs',
            'Soporte y mantenimiento prioritario',
            'Arquitectura de alto rendimiento',
          ],
          details: 'Desarrollo sin límites para tu visión más ambiciosa. Creamos plataformas web complejas, desde e-commerce hasta aplicaciones web interactivas, con la última tecnología.'
        },
    ],
    branding: [], // Placeholder for future content
    apps: [], // Placeholder for future content
  };

  return (
    <section id="servicios" className="py-20 cyber-grain relative overflow-hidden">
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

        {/* Services Content */}
        <div className="relative min-h-[550px]">
          {activeService === 'web' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1200px' }}>
              {mainServices.web.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <div key={index} className="group w-full h-[500px] relative">
                    {/* Back Face - always visible underneath */}
                    <div className="absolute w-full h-full p-6 rounded-lg bg-surface-dark/95 flex flex-col justify-between transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105">
                      <div className="absolute inset-0 border border-neon-cyan/50 rounded-lg"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-transparent"></div>
                      <div>
                        <h4 className="text-xl font-headline text-neon-cyan mb-4">Más detalles del {plan.title}</h4>
                        <p className="font-body text-text-desaturated/90 text-sm leading-relaxed">
                          {plan.details}
                        </p>
                      </div>
                      <Button variant="cyberpunk" size="lg" className="w-full mt-6 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-cyber-black" onClick={(e) => { e.stopPropagation(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        Contratar Plan
                      </Button>
                    </div>

                    {/* Front Face - Splits on hover */}
                    <div className="absolute w-full h-full rounded-lg overflow-hidden pointer-events-none">
                      <div className="absolute w-full h-1/2 top-0 left-0 bg-surface-dark/90 transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-50">
                        <div className="absolute inset-0 border-t border-x border-neon-yellow/30 rounded-t-lg group-hover:border-neon-yellow"></div>
                        <div className="p-6">
                           <div className="flex items-start justify-between mb-4 relative">
                            <h3 className="text-2xl font-headline text-neon-yellow">{plan.title}</h3>
                             <div className="p-2 bg-cyber-black/50 border border-neon-yellow/30 rounded-full">
                                <Icon className="w-6 h-6 text-neon-yellow/70" />
                            </div>
                          </div>
                          <div className="mb-6">
                            <span className="text-4xl font-bold text-text-desaturated">{plan.price}</span>
                            <p className="text-sm text-text-desaturated/70">{plan.priceDetails}</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute w-full h-1/2 bottom-0 left-0 bg-surface-dark/90 transition-all duration-500 ease-in-out group-hover:translate-y-full group-hover:opacity-50">
                         <div className="absolute inset-0 border-b border-x border-neon-yellow/30 rounded-b-lg group-hover:border-neon-yellow"></div>
                         <div className="p-6 -translate-y-full h-full flex flex-col justify-end">
                           <ul className="space-y-3 font-body">
                            {plan.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-neon-yellow mr-3 flex-shrink-0" />
                                <span className="text-text-desaturated text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="text-center mt-6">
                            <p className="text-xs font-body text-neon-yellow/70 opacity-100 group-hover:opacity-0 transition-opacity duration-200">
                              Pasa el cursor para ver más
                            </p>
                          </div>
                         </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {/* Placeholder for other services */}
          {activeService !== 'web' && (
             <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-text-desaturated py-16">
                  <p>Próximamente... aquí se mostrarán los paquetes de {activeService === 'branding' ? 'Branding' : 'Apps Móviles'}.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
