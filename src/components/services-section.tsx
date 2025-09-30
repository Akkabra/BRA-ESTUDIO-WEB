'use client';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Code, Gem, Package, Palette, Layers, Globe, Smartphone, Rocket, Network, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';


const ServicesSection = () => {
  const [activeService, setActiveService] = useState('web');
  const [flippedStates, setFlippedStates] = useState<Record<string, boolean>>({});
  const [activeIndex, setActiveIndex] = useState(1); 
  const isMobile = useIsMobile();
  const whatsappNumber = "573000000000";
  
  const handleCardClick = (planKey: string) => {
    setFlippedStates(prev => ({
      ...prev,
      [planKey]: !prev[planKey],
    }));
  };

  const handleBrandingNav = (index: number) => {
    setActiveIndex(index);
  }

  const serviceTypes = [
    { key: 'web', label: 'Desarrollo Web' },
    { key: 'branding', label: 'Branding' },
    { key: 'apps', label: 'Apps Móviles' },
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
        details:
          'Ideal para startups y proyectos que necesitan una presencia online profesional y rápida. Una landing page optimizada para convertir visitantes en clientes.',
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
        details:
          'La solución completa para empresas que buscan crecer. Un sitio web robusto y escalable con un sistema de gestión de contenidos para que tengas control total sobre tu plataforma.',
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
        details:
          'Desarrollo sin límites para tu visión más ambiciosa. Creamos plataformas web complejas, desde e-commerce hasta aplicaciones web interactivas, con la última tecnología.',
      },
    ],
    branding: [
      {
        title: 'Plan Esencial',
        price: '$800',
        priceDetails: 'USD / pago único',
        icon: Palette,
        details: 'El punto de partida perfecto para tu marca. Creamos un logotipo memorable y una identidad visual coherente que te diferenciará desde el primer día.'
      },
      {
        title: 'Plan Estratégico',
        price: '$1,800',
        priceDetails: 'USD / pago único',
        icon: Layers,
        details: 'Más que un logo, una estrategia. Profundizamos en el ADN de tu marca para construir una identidad sólida y unificada, desde el tono de voz hasta las aplicaciones visuales.'
      },
      {
        title: 'Plan 360°',
        price: '$4,000+',
        priceDetails: 'USD / según alcance',
        icon: Globe,
        details: 'Una inmersión total en el universo de tu marca. Creamos un ecosistema de marca cohesivo y potente que cautiva y fideliza, desde el producto físico hasta la estrategia digital.'
      }
    ],
    apps: [
      {
        title: 'Plan MVP',
        price: '$4,000+',
        priceDetails: 'USD / según alcance',
        icon: Smartphone,
        features: [
          'App para iOS o Android',
          'Diseño UI/UX funcional',
          'Hasta 5 pantallas clave',
          'Backend básico (login, perfiles)',
          'Publicación en tiendas',
        ],
        details: 'Perfecto para validar tu idea de negocio. Desarrollamos un Producto Mínimo Viable (MVP) funcional y pulido para obtener feedback de usuarios reales y atraer inversores.'
      },
      {
        title: 'Plan Crecimiento',
        price: '$8,000+',
        priceDetails: 'USD / según alcance',
        icon: Rocket,
        features: [
          'App nativa para iOS y Android',
          'Diseño UI/UX personalizado y animado',
          'Integraciones con APIs (mapas, pagos)',
          'Notificaciones push',
          'Panel de administración web',
        ],
        details: 'Lleva tu proyecto al siguiente nivel. Una app robusta y escalable con funcionalidades avanzadas para expandir tu base de usuarios y potenciar tu negocio en el ecosistema móvil.'
      },
      {
        title: 'Plan Enterprise',
        price: '$15,000+',
        priceDetails: 'USD / según alcance',
        icon: Network,
        features: [
          'Arquitectura de microservicios',
          'Alta disponibilidad y escalabilidad',
          'Seguridad avanzada y cifrado',
          'Sincronización de datos en tiempo real',
          'Soporte Enterprise 24/7',
        ],
        details: 'Soluciones móviles de misión crítica. Diseñamos y construimos aplicaciones complejas de alto rendimiento, preparadas para soportar millones de usuarios y operaciones críticas.'
      }
    ],
  };

  const currentServicePlans = mainServices[activeService as keyof typeof mainServices] || [];
  
  return (
    <section id="servicios" className="py-20 cyber-grain relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-neon-yellow rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-neon-yellow rotate-12"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-headline font-bold text-neon-yellow mb-6 glitch" data-text="NUESTROS SERVICIOS">
              NUESTROS SERVICIOS
          </h2>
          <p className="text-xl text-text-desaturated max-w-3xl mx-auto font-body">
            Soluciones digitales personalizadas que transforman tu visión en realidad
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 p-1 bg-black/50 border border-neon-yellow/20 rounded-lg">
            {serviceTypes.map(service => (
              <button
                key={service.key}
                onClick={() => setActiveService(service.key)}
                className={cn(
                  'px-6 py-2 rounded-md font-headline text-sm transition-all duration-300 relative',
                  activeService === service.key
                    ? 'text-neon-yellow'
                    : 'text-text-desaturated/70 hover:text-neon-yellow/80 hover:bg-white/5'
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
        
        <div className="relative min-h-[550px]">
        {activeService === 'branding' ? (
          <div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden" style={{ perspective: '1200px' }}>
            <div className="relative flex items-center justify-center w-full h-[450px]">
              {mainServices.branding.map((plan, index) => {
                const planKey = `branding-${index}`;
                const isFlipped = !!flippedStates[planKey];
                const isActive = index === activeIndex;
                const Icon = plan.icon;

                let transform = '';
                if (index < activeIndex) {
                  transform = 'translateX(-70%) scale(0.8) rotateY(45deg)';
                } else if (index > activeIndex) {
                  transform = 'translateX(70%) scale(0.8) rotateY(-45deg)';
                } else {
                  transform = 'translateX(0) scale(1) rotateY(0deg)';
                }

                return (
                  <div
                    key={planKey}
                    className="absolute w-[320px] h-[420px] transition-all duration-500 ease-in-out cursor-pointer"
                    style={{ transform, zIndex: isActive ? 10 : 1, opacity: isActive ? 1 : 0.6 }}
                    onClick={() => !isActive && handleBrandingNav(index)}
                  >
                    <div
                      className={cn(
                        "relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700",
                        isActive && isFlipped && '[transform:rotateY(180deg)]'
                      )}
                      onMouseEnter={() => isActive && !isMobile && setFlippedStates(prev => ({...prev, [planKey]: true}))}
                      onMouseLeave={() => isActive && !isMobile && setFlippedStates(prev => ({...prev, [planKey]: false}))}
                      onClickCapture={(e) => {
                        if (isActive && isMobile) {
                          e.stopPropagation();
                          handleCardClick(planKey);
                        }
                      }}
                    >
                      {/* Front Face */}
                      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center [backface-visibility:hidden] rounded-lg border-2 border-neon-orange/80 bg-surface-dark/90 shadow-[0_0_20px_hsl(var(--neon-orange)/0.4)] animate-pulse-fast hover:shadow-[0_0_40px_hsl(var(--neon-orange)/0.8)] transition-shadow duration-300 p-8">
                        <div className="absolute inset-0 rounded-lg bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center">
                          <Icon className="h-12 w-12 text-neon-orange mb-4"/>
                          <h3 className="font-headline text-2xl text-neon-orange glitch-text">{plan.title}</h3>
                          <div className="mt-3">
                            <span className="text-3xl font-bold text-text-desaturated">{plan.price}</span>
                            <p className="text-sm text-text-desaturated/60">{plan.priceDetails}</p>
                          </div>
                          <p className="font-body text-xs text-center mt-6 text-neon-orange/70">
                            {isMobile ? 'Toca para ver detalles' : 'Pasa el cursor para detalles'}
                          </p>
                        </div>
                      </div>

                      {/* Back Face */}
                      <div className="absolute inset-0 flex h-full w-full flex-col justify-center rounded-lg bg-surface-dark/95 p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-neon-orange/50">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-orange/10 via-transparent to-transparent"></div>
                        <div className="text-center relative flex flex-col items-center justify-center h-full">
                          <h4 className="mb-4 text-xl font-headline text-neon-orange">{plan.title}</h4>
                          <p className="font-body text-sm leading-relaxed text-text-desaturated/90 mb-6 px-2 text-center">
                            {plan.details}
                          </p>
                          <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, estoy interesado en contratar el ${plan.title}.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 py-2 bg-transparent border-2 border-neon-orange text-neon-orange font-headline text-base hover:bg-neon-orange hover:text-cyber-black transition-colors duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-orange)/0.7)]"
                            onClick={(e) => e.stopPropagation()}
                          >
                            CONTRATAR
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Navigation */}
            <div className="absolute bottom-0 flex items-center justify-center w-full gap-16">
              <button onClick={() => handleBrandingNav((activeIndex - 1 + mainServices.branding.length) % mainServices.branding.length)} className="text-neon-orange/70 hover:text-neon-orange transition-colors p-2 z-20 disabled:opacity-30" disabled={activeIndex === 0}>
                <ChevronLeft size={48} />
              </button>
              <button onClick={() => handleBrandingNav((activeIndex + 1) % mainServices.branding.length)} className="text-neon-orange/70 hover:text-neon-orange transition-colors p-2 z-20 disabled:opacity-30" disabled={activeIndex === mainServices.branding.length - 1}>
                <ChevronRight size={48} />
              </button>
            </div>
          </div>
        ) : currentServicePlans.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentServicePlans.map((plan, index) => {
                const Icon = plan.icon;
                const planKey = `${activeService}-${index}`;
                const isFlipped = !!flippedStates[planKey];
                
                return (
                  <div
                    key={planKey}
                    className="group"
                    style={{ perspective: '1200px' }}
                    onClick={() => isMobile && handleCardClick(planKey)}
                    onMouseEnter={() => !isMobile && setFlippedStates(prev => ({...prev, [planKey]: true}))}
                    onMouseLeave={() => !isMobile && setFlippedStates(prev => ({...prev, [planKey]: false}))}
                  >
                     <div
                      className={cn(
                        "relative w-full h-[520px] [transform-style:preserve-3d] transition-transform duration-700 ease-in-out cursor-pointer",
                        isFlipped ? '[transform:rotateX(180deg)]' : '',
                      )}
                    >
                      {/* Main Service Front Face */}
                      <div className="absolute inset-0 flex h-full w-full flex-col justify-between rounded-lg bg-surface-dark/90 p-6 shadow-md [backface-visibility:hidden] border border-neon-yellow/30">
                          <div>
                            <div className="mb-4 flex items-start justify-between">
                              <h3 className="text-2xl font-headline text-neon-yellow">{plan.title}</h3>
                              <div className="rounded-full border bg-cyber-black/50 p-2 border-neon-yellow/30">
                                <Icon className="h-6 w-6 text-neon-yellow/70" />
                              </div>
                            </div>
                            <div className="mb-6">
                              <span className="text-4xl font-bold text-text-desaturated">{plan.price}</span>
                              <p className="text-sm text-text-desaturated/70">{plan.priceDetails}</p>
                            </div>
                            <ul className="space-y-3 font-body mb-6">
                              {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-center">
                                  <CheckCircle className="mr-3 h-4 w-4 flex-shrink-0 text-neon-yellow" />
                                  <span className="text-sm text-text-desaturated">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                           <p className="text-xs font-body text-center mt-4 text-neon-yellow/70">
                              {isMobile ? 'Toca para más detalles y contratar' : 'Pasa el cursor para más detalles y contratar'}
                          </p>
                      </div>

                      {/* Main Service Back Face */}
                       <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, estoy interesado en contratar el ${plan.title}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex h-full w-full cursor-pointer flex-col justify-center items-center rounded-lg bg-surface-dark/95 p-6 [backface-visibility:hidden] [transform:rotateX(180deg)] border border-neon-orange/50 text-center"
                       >
                           <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/10 via-transparent to-transparent"></div>
                           <div className="relative">
                             <h4 className="mb-4 text-xl font-headline text-neon-orange">
                               Más sobre {plan.title}
                             </h4>
                             <p className="font-body text-sm leading-relaxed text-text-desaturated/90 mb-6">{plan.details}</p>
                              <span
                                className="inline-block px-4 py-2 bg-transparent border-2 border-neon-orange text-neon-orange font-headline hover:bg-neon-orange hover:text-cyber-black transition-colors duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-orange)/0.7)]"
                              >
                                CONTRATAR AHORA
                              </span>
                           </div>
                       </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
             <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-text-desaturated py-16">
                <p>Cargando servicios...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
