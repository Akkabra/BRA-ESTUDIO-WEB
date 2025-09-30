'use client';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Code, Gem, Package, Smartphone, Rocket, Network } from 'lucide-react';
import { motion } from 'framer-motion';


const ServicesSection = () => {
  const [activeService, setActiveService] = useState('web');
  const [flippedStates, setFlippedStates] = useState<Record<string, boolean>>({});
  const [isBrandingInteracted, setIsBrandingInteracted] = useState(false);
  const [brandingActiveIndex, setBrandingActiveIndex] = useState(0);
  const [activeAppPlanIndex, setActiveAppPlanIndex] = useState<number>(0);

  const whatsappNumber = "573000000000";
  
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
        details: 'El punto de partida perfecto para tu marca. Creamos un logotipo memorable y una identidad visual coherente que te diferenciará desde el primer día.',
        features: [
          'Diseño de Logotipo (3 conceptos)',
          'Paleta de colores y tipografías',
          'Manual de marca básico',
        ],
      },
      {
        title: 'Plan Estratégico',
        price: '$1,800',
        priceDetails: 'USD / pago único',
        details: 'Más que un logo, una estrategia. Profundizamos en el ADN de tu marca para construir una identidad sólida y unificada, desde el tono de voz hasta las aplicaciones visuales.',
        features: [
          'Todo del Plan Esencial',
          'Diseño de papelería (tarjetas, hojas)',
          'Plantillas para redes sociales (5)',
          'Manual de marca completo',
        ],
      },
      {
        title: 'Plan 360°',
        price: '$4,000+',
        priceDetails: 'USD / según alcance',
        details: 'Una inmersión total en el universo de tu marca. Creamos un ecosistema de marca cohesivo y potente que cautiva y fideliza, desde el producto físico hasta la estrategia digital.',
        features: [
          'Todo del Plan Estratégico',
          'Diseño de packaging o producto',
          'Guía de estilo fotográfico',
          'Estrategia de comunicación visual',
        ],
      },
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

  const handleBrandingNav = (index: number) => {
    setBrandingActiveIndex(index);
    setIsBrandingInteracted(true);
  }
  
  const handleAppPlanSelect = (index: number) => {
    setActiveAppPlanIndex(index);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeService === 'branding' && !isBrandingInteracted) {
      interval = setInterval(() => {
        setBrandingActiveIndex(prevIndex => (prevIndex + 1) % mainServices.branding.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [activeService, isBrandingInteracted, mainServices.branding.length]);
  
  const currentServicePlans = mainServices[activeService as keyof typeof mainServices] || [];

  const PlanCard = ({ plan, isFlipped, onMouseEnter, onMouseLeave }: { plan: any, isFlipped: boolean, onMouseEnter: () => void, onMouseLeave: () => void }) => {
    const Icon = plan.icon;
  
    return (
      <div
        className="group"
        style={{ perspective: '1200px' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={cn(
            "relative w-full h-[520px] [transform-style:preserve-3d] transition-transform duration-700 ease-in-out cursor-pointer",
            isFlipped ? '[transform:rotateY(180deg)]' : '',
          )}
          onClick={() => isFlipped && window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, estoy interesado en contratar el ${plan.title}.`)}`, '_blank')}
        >
          {/* Main Service Front Face */}
          <div className="absolute inset-0 flex h-full w-full flex-col justify-between rounded-lg bg-surface-dark/90 p-6 shadow-md [backface-visibility:hidden] border border-neon-yellow/30 transition-all duration-300 group-hover:shadow-neon group-hover:scale-105">
            <div>
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-2xl font-headline text-neon-yellow">{plan.title}</h3>
                {Icon && (
                  <div className="rounded-full border bg-cyber-black/50 p-2 border-neon-yellow/30">
                    <Icon className="h-6 w-6 text-neon-yellow/70" />
                  </div>
                )}
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-text-desaturated">{plan.price}</span>
                <p className="text-sm text-text-desaturated/70">{plan.priceDetails}</p>
              </div>
              <ul className="space-y-3 font-body mb-6">
                {plan.features.map((feature: string, fIndex: number) => (
                  <li key={fIndex} className="flex items-center">
                    <CheckCircle className="mr-3 h-4 w-4 flex-shrink-0 text-neon-yellow" />
                    <span className="text-sm text-text-desaturated">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs font-body text-center mt-4 text-neon-yellow/70">
              Pasa el cursor para más detalles y contratar
            </p>
          </div>
  
          {/* Main Service Back Face */}
          <div
            className="absolute inset-0 flex h-full w-full cursor-pointer flex-col justify-center items-center rounded-lg bg-surface-dark/95 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-neon-orange/50 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/10 via-transparent to-transparent"></div>
            <div className="relative">
              <h4 className="mb-4 text-xl font-headline text-neon-orange">
                Más sobre {plan.title}
              </h4>
              <p className="font-body text-sm leading-relaxed text-text-desaturated/90 mb-6">{plan.details}</p>
              <button
                className="inline-block px-4 py-2 bg-transparent border-2 border-neon-orange text-neon-orange font-headline hover:bg-neon-orange hover:text-cyber-black transition-colors duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-orange)/0.7)]"
              >
                CONTRATAR AHORA
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const BrandingCard = ({ plan, isActive, onClick, isFlipped, onMouseEnter, onMouseLeave }: { plan: any, isActive: boolean, onClick: () => void, isFlipped: boolean, onMouseEnter: () => void, onMouseLeave: () => void }) => {
    return (
      <div
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="absolute w-[320px] h-[480px] transition-all duration-500 ease-in-out cursor-pointer"
        style={{
          transform: `translateX(${isActive ? 0 : -50}px) scale(${isActive ? 1 : 0.85}) translateZ(${isActive ? '0' : '-100px'}) rotateY(${isActive ? 0 : 10}deg)`,
          zIndex: isActive ? 10 : 1,
          opacity: isActive ? 1 : 0.4,
        }}
      >
        <div
          className={cn(
            "relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out",
            isFlipped && isActive ? '[transform:rotateY(180deg)]' : '',
          )}
        >
          {/* Front Face */}
          <div className={cn(
            "absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg border-2 bg-surface-dark/90 p-8 text-center [backface-visibility:hidden]",
            isActive 
              ? 'border-neon-orange/80 animate-pulse-fast shadow-[0_0_30px_hsl(var(--neon-orange)/0.5),_inset_0_0_15px_hsl(var(--neon-orange)/0.3)]' 
              : 'border-neon-orange/30'
          )}>
            <h3 className="font-headline text-3xl mb-4 text-neon-orange">{plan.title}</h3>
            <div className="mt-1 mb-6">
              <span className="text-4xl font-bold text-text-desaturated">{plan.price}</span>
              <p className="text-sm text-text-desaturated/60">{plan.priceDetails}</p>
            </div>
            <ul className="space-y-3 font-body text-left mb-6">
              {plan.features.map((feature: string, fIndex: number) => (
                <li key={fIndex} className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-neon-orange" />
                  <span className="text-sm text-text-desaturated">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs font-body text-center mt-auto text-neon-orange/70">
              Pasa el cursor para girar
            </p>
          </div>
          {/* Back Face */}
          <div 
            className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg border-2 border-neon-orange/50 bg-surface-dark/95 p-8 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
            onClick={(e) => {
              e.stopPropagation();
              window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, estoy interesado en contratar el ${plan.title}.`)}`, '_blank')
            }}
          >
            <h4 className="font-headline text-3xl text-neon-orange mb-4">{plan.title}</h4>
            <p className="mb-6 text-sm leading-relaxed text-text-desaturated">{plan.details}</p>
            <span
              className="font-headline mt-auto inline-block px-6 py-2 bg-gradient-neon text-cyber-black text-base rounded-md transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-orange)/0.7)] hover:scale-105"
            >
              CONTRATAR AHORA
            </span>
          </div>
        </div>
      </div>
    );
  };


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
            {Object.keys(mainServices).map(serviceKey => (
              <button
                key={serviceKey}
                onClick={() => setActiveService(serviceKey)}
                className={cn(
                  'px-6 py-2 rounded-md font-headline text-sm transition-all duration-300',
                  activeService === serviceKey
                    ? 'bg-surface-dark text-neon-yellow border border-neon-yellow/50 shadow-neon-subtle'
                    : 'text-text-desaturated/70 hover:text-neon-yellow/80'
                )}
              >
                {serviceKey === 'web' ? 'Desarrollo Web' : serviceKey === 'branding' ? 'Branding' : 'Apps Móviles'}
              </button>
            ))}
          </div>
        </div>
        
        <div className="relative min-h-[600px]">
        {activeService === 'web' ? (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentServicePlans.map((plan, index) => {
                const planKey = `web-${index}`;
                return (
                  <PlanCard 
                    key={planKey}
                    plan={plan}
                    isFlipped={!!flippedStates[planKey]}
                    onMouseEnter={() => setFlippedStates(prev => ({ ...prev, [planKey]: true }))}
                    onMouseLeave={() => setFlippedStates(prev => ({ ...prev, [planKey]: false }))}
                  />
                )
              })}
            </div>
        ) : activeService === 'branding' ? (
             <div className="relative flex h-[500px] w-full items-center justify-center">
                <button onClick={() => handleBrandingNav((brandingActiveIndex - 1 + mainServices.branding.length) % mainServices.branding.length)} className="absolute left-0 top-1/2 z-20 -translate-y-1/2 text-neon-orange/70 transition-colors hover:text-neon-orange disabled:opacity-30 md:-left-12">
                  <CheckCircle size={48} />
                </button>
                <button onClick={() => handleBrandingNav((brandingActiveIndex + 1) % mainServices.branding.length)} className="absolute right-0 top-1/2 z-20 -translate-y-1/2 text-neon-orange/70 transition-colors hover:text-neon-orange disabled:opacity-30 md:-right-12">
                  <CheckCircle size={48} />
                </button>
                
                <div className="relative h-full w-full max-w-sm flex items-center justify-center [transform-style:preserve-3d]">
                    {mainServices.branding.map((plan, index) => {
                        const isActive = index === brandingActiveIndex;
                        const offset = index - brandingActiveIndex;
                        const planKey = `branding-${index}`;
                        const isFlipped = !!flippedStates[planKey];

                        return (
                          <div
                            key={planKey}
                            onMouseEnter={() => {
                                if (isActive) {
                                    setFlippedStates(prev => ({...prev, [planKey]: true}));
                                    setIsBrandingInteracted(true);
                                }
                            }}
                            onMouseLeave={() => {
                                if (isActive) {
                                    setFlippedStates(prev => ({...prev, [planKey]: false}));
                                }
                            }}
                            onClick={() => {
                                if (!isActive) {
                                    handleBrandingNav(index);
                                }
                            }}
                            className="absolute w-[320px] h-[480px] transition-all duration-500 ease-in-out"
                            style={{
                              transform: `translateX(${offset * 35}%) scale(${isActive ? 1 : 0.85}) translateZ(${isActive ? '0' : '-100px'}) rotateY(${offset * -10}deg)`,
                              zIndex: mainServices.branding.length - Math.abs(offset),
                              opacity: isActive ? 1 : 0.4,
                              cursor: 'pointer'
                            }}
                          >
                             <div
                                className={cn(
                                  "relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out",
                                  isFlipped && isActive ? '[transform:rotateY(180deg)]' : '',
                                )}
                              >
                                {/* Front Face */}
                                <div className={cn(
                                  "absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg border-2 bg-surface-dark/90 p-8 text-center [backface-visibility:hidden]",
                                  isActive 
                                    ? 'border-neon-orange/80 animate-pulse-fast shadow-[0_0_30px_hsl(var(--neon-orange)/0.5),_inset_0_0_15px_hsl(var(--neon-orange)/0.3)]' 
                                    : 'border-neon-orange/30'
                                )}>
                                  <h3 className="font-headline text-3xl mb-4 text-neon-orange">{plan.title}</h3>
                                  <div className="mt-1 mb-6">
                                      <span className="text-4xl font-bold text-text-desaturated">{plan.price}</span>
                                      <p className="text-sm text-text-desaturated/60">{plan.priceDetails}</p>
                                  </div>
                                  <ul className="space-y-3 font-body text-left mb-6">
                                    {plan.features.map((feature, fIndex) => (
                                      <li key={fIndex} className="flex items-start">
                                        <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-neon-orange" />
                                        <span className="text-sm text-text-desaturated">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                   <p className="text-xs font-body text-center mt-auto text-neon-orange/70">
                                      Pasa el cursor para girar
                                   </p>
                                </div>
                                {/* Back Face */}
                                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg border-2 border-neon-orange/50 bg-surface-dark/95 p-8 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, estoy interesado en contratar el ${plan.title}.`)}`, '_blank')
                                }}>
                                  <h4 className="font-headline text-3xl text-neon-orange mb-4">{plan.title}</h4>
                                  <p className="mb-6 text-sm leading-relaxed text-text-desaturated">{plan.details}</p>
                                  <span
                                      className="font-headline mt-auto inline-block px-6 py-2 bg-gradient-neon text-cyber-black text-base rounded-md transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-orange)/0.7)] hover:scale-105"
                                  >
                                      CONTRATAR AHORA
                                  </span>
                                </div>
                            </div>
                          </div>
                        )
                    })}
                </div>
              </div>
        ) : activeService === 'apps' ? (
           <div className="relative grid md:grid-cols-3 gap-8 min-h-[600px] border border-neon-orange/20 rounded-lg p-8 bg-black/30 backdrop-blur-sm">
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-neon-orange/50"></div>
                <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-neon-orange/50"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-neon-orange/50"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-neon-orange/50"></div>
                <div className="absolute inset-0 scanline-vertical" style={{'--scanline-color': 'hsl(var(--neon-orange) / 0.05)'}}></div>

                {/* Plan Selectors */}
                <div className="md:col-span-1 flex flex-col justify-center space-y-4">
                  {mainServices.apps.map((plan, index) => (
                    <button
                      key={plan.title}
                      onClick={() => handleAppPlanSelect(index)}
                      className={cn(
                        "relative p-4 rounded-md text-left transition-all duration-300 border-2",
                        activeAppPlanIndex === index 
                          ? 'border-neon-orange bg-neon-orange/10 animate-selector-pulse'
                          : 'border-transparent hover:bg-neon-yellow/5'
                      )}
                    >
                      <h3 className="font-headline text-xl text-neon-yellow">{plan.title}</h3>
                      <p className="text-sm text-text-desaturated/70">{plan.price}</p>
                      {activeAppPlanIndex === index && (
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-10 bg-neon-orange rounded-r-full shadow-neon"></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Hologram Projection Area */}
                <div className="md:col-span-2 relative">
                  {activeAppPlanIndex !== null && (() => {
                    const plan = mainServices.apps[activeAppPlanIndex];
                    return (
                      <div key={plan.title} className="relative w-full h-full flex items-center justify-center animate-hologram-glitch">
                        <div className="hologram-card relative w-full rounded-lg border-2 border-neon-orange/70 bg-black/60 p-8 backdrop-blur-md">
                          {/* Header */}
                          <div className="mb-4 flex items-start justify-between">
                              <h3 className="text-3xl font-headline bg-gradient-to-r from-neon-yellow to-neon-orange text-transparent bg-clip-text glitch" data-text={plan.title}>
                                {plan.title}
                              </h3>
                              <div className="rounded-full border bg-cyber-black/50 p-2 border-neon-orange/30">
                                <plan.icon className="h-6 w-6 text-neon-orange" />
                              </div>
                          </div>

                          {/* Price */}
                          <div className="mb-6">
                              <span className="text-4xl font-bold text-text-desaturated">{plan.price}</span>
                              <p className="text-sm text-text-desaturated/70">{plan.priceDetails}</p>
                          </div>

                          {/* Features */}
                          <ul className="space-y-3 font-body mb-6">
                            {plan.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-center">
                                <CheckCircle className="mr-3 h-4 w-4 flex-shrink-0 text-neon-orange" />
                                <span className="text-sm text-text-desaturated">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Details */}
                          <p className="font-body text-sm leading-relaxed text-text-desaturated/80 mb-8">{plan.details}</p>

                          {/* CTA */}
                          <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, estoy interesado en contratar el ${plan.title}.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center inline-block px-4 py-3 bg-transparent border-2 border-neon-orange text-neon-orange font-headline hover:bg-neon-orange hover:text-cyber-black transition-colors duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-orange)/0.7)]"
                          >
                            CONTRATAR AHORA
                          </a>
                        </div>
                      </div>
                    )
                  })()}
                </div>
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
