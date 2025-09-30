'use client';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Code, Gem, Package, Palette, Layers, Globe, Smartphone, Rocket, Network, ChevronLeft, ChevronRight, Power } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';


const ServicesSection = () => {
  const [activeService, setActiveService] = useState('web');
  const [flippedStates, setFlippedStates] = useState<Record<string, boolean>>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPhoneOn, setIsPhoneOn] = useState(false);
  const [activeAppPlanIndex, setActiveAppPlanIndex] = useState(0);
  const [isBrandingInteracted, setIsBrandingInteracted] = useState(false);

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
    setIsBrandingInteracted(true);
  }

  const handleCircleClick = (index: number) => {
    if (index === activeIndex) {
      handleCardClick(`branding-${index}`);
    } else {
      setActiveIndex(index);
    }
    setIsBrandingInteracted(true);
  };
  
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
        icon: Palette,
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
        icon: Layers,
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
        icon: Globe,
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
  
    useEffect(() => {
    if (activeService === 'branding' && !isBrandingInteracted) {
      const interval = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % mainServices.branding.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [activeService, isBrandingInteracted, mainServices.branding.length]);


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
            {Object.keys(mainServices).map(serviceKey => (
              <button
                key={serviceKey}
                onClick={() => setActiveService(serviceKey)}
                className={cn(
                  'px-6 py-2 rounded-md font-headline text-sm transition-all duration-300 relative',
                  activeService === serviceKey
                    ? 'text-neon-yellow'
                    : 'text-text-desaturated/70 hover:text-neon-yellow/80 hover:bg-white/5'
                )}
              >
                {serviceKey === 'web' ? 'Desarrollo Web' : serviceKey === 'branding' ? 'Branding' : 'Apps Móviles'}
                {activeService === serviceKey && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-yellow animate-pulse shadow-neon-subtle"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        <div className="relative min-h-[600px]">
        {activeService === 'web' ? (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentServicePlans.map((plan, index) => {
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
                                <plan.icon className="h-6 w-6 text-neon-yellow/70" />
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
        ) : activeService === 'branding' ? (
            <div className="relative flex h-[500px] w-full items-center justify-center">
              <button onClick={() => handleBrandingNav((activeIndex - 1 + mainServices.branding.length) % mainServices.branding.length)} className="absolute left-0 top-1/2 z-20 -translate-y-1/2 text-neon-orange/70 transition-colors hover:text-neon-orange disabled:opacity-30 md:left-12">
                <ChevronLeft size={48} />
              </button>
              <button onClick={() => handleBrandingNav((activeIndex + 1) % mainServices.branding.length)} className="absolute right-0 top-1/2 z-20 -translate-y-1/2 text-neon-orange/70 transition-colors hover:text-neon-orange disabled:opacity-30 md:right-12">
                <ChevronRight size={48} />
              </button>
              <div className="relative h-[420px] w-[320px]" style={{ perspective: '1000px' }}>
                {mainServices.branding.map((plan, index) => {
                  const planKey = `branding-${index}`;
                  const isFlipped = !!flippedStates[planKey];
                  const isActive = index === activeIndex;
                  const offset = index - activeIndex;

                  return (
                    <div
                      key={planKey}
                      onClick={() => handleBrandingNav(index)}
                      onMouseEnter={() => isActive && !isMobile && setFlippedStates(prev => ({ ...prev, [planKey]: true }))}
                      onMouseLeave={() => isActive && !isMobile && setFlippedStates(prev => ({ ...prev, [planKey]: false }))}
                      className="absolute flex h-full w-full cursor-pointer items-center justify-center transition-all duration-500"
                      style={{
                        transform: `translateX(${offset * 40}%) scale(${isActive ? 1 : 0.75}) translateZ(${isActive ? '0' : '-150px'})`,
                        zIndex: mainServices.branding.length - Math.abs(offset),
                        opacity: isActive ? 1 : 0.4,
                      }}
                    >
                      <div
                        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
                        style={{ transform: isFlipped && isActive ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                      >
                        {/* Front Face */}
                        <div
                          className={cn(
                            'absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg border-2 bg-surface-dark/90 p-8 text-center [backface-visibility:hidden]',
                            isActive ? 'border-neon-orange/80 animate-pulse-fast shadow-[0_0_20px_hsl(var(--neon-orange)/0.4)]' : 'border-neon-orange/30'
                          )}
                        >
                          <plan.icon className={cn("h-16 w-16 mb-4", isActive ? "text-neon-orange" : "text-neon-orange/50")} />
                          <h3 className={cn("font-headline text-3xl mb-2", isActive ? "text-neon-orange" : "text-neon-orange/50")}>{plan.title}</h3>
                          <div className="mt-1">
                            <span className="text-3xl font-bold text-text-desaturated">{plan.price}</span>
                            <p className="text-sm text-text-desaturated/60">{plan.priceDetails}</p>
                          </div>
                          {isActive && (
                            <p className="absolute bottom-6 text-xs font-body text-center text-neon-orange/70">
                                {isMobile ? 'Toca para más detalles' : 'Pasa el cursor para más detalles'}
                            </p>
                          )}
                        </div>
                        {/* Back Face */}
                        <div
                          className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg border-2 border-neon-orange/50 bg-surface-dark/95 p-8 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
                        >
                          <h4 className="font-headline text-2xl text-neon-orange mb-4">{plan.title}</h4>
                          <p className="mb-6 text-sm leading-relaxed text-text-desaturated">{plan.details}</p>
                          <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, estoy interesado en contratar el ${plan.title}.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-2 bg-gradient-neon text-cyber-black font-headline text-base rounded-md transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-orange)/0.7)] hover:scale-105"
                            onClick={(e) => e.stopPropagation()}
                          >
                            CONTRATAR AHORA
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
        ) : activeService === 'apps' ? (
            <div className="flex justify-center items-center h-[600px]">
                <div className="relative w-[320px] h-[620px] bg-gray-800/30 rounded-[40px] border-4 border-gray-600 shadow-2xl p-2.5 flex items-center">
                    <div className="absolute top-1/2 -right-3 h-24 w-1.5 bg-gray-600 rounded-r-md transform -translate-y-1/2"></div>
                    <button
                        onClick={() => setIsPhoneOn(!isPhoneOn)}
                        className="absolute top-1/2 -right-3 h-14 w-2.5 bg-gray-500 rounded-r-md transform -translate-y-[120%] flex items-center justify-center group"
                    >
                      <Power className={cn("w-4 h-4 text-red-500/50 transition-all", isPhoneOn ? 'text-green-500 animate-pulse' : 'group-hover:text-red-500/80 group-hover:shadow-[0_0_10px_red]')}/>
                    </button>
                    
                    <div className="w-full h-full bg-black rounded-[30px] overflow-hidden relative cyber-grain scanlines">
                        {isPhoneOn ? (
                             <div key={activeAppPlanIndex} className="w-full h-full flex flex-col animate-fade-in-slow">
                                {/* Header */}
                                <div className="p-4 bg-black/30 backdrop-blur-sm border-b border-neon-cyan/20">
                                    <div className="flex justify-center items-center mb-4">
                                       <h3 className="font-headline text-lg text-neon-cyan glitch-subtle" data-text="Planes Móviles">Planes Móviles</h3>
                                    </div>
                                    <div className="flex justify-around">
                                        {mainServices.apps.map((plan, index) => (
                                            <button 
                                                key={index}
                                                onClick={() => setActiveAppPlanIndex(index)}
                                                className={cn(
                                                    "text-xs font-headline pb-1 border-b-2 transition-colors",
                                                    activeAppPlanIndex === index ? "text-neon-cyan border-neon-cyan" : "text-text-desaturated/50 border-transparent hover:text-neon-cyan/70"
                                                )}
                                            >
                                                {plan.title.split(' ')[1] || plan.title}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="flex-1 p-4 overflow-y-auto">
                                    <div className="text-center mb-4">
                                        <mainServices.apps[activeAppPlanIndex].icon className="w-10 h-10 text-neon-cyan mx-auto mb-2"/>
                                        <h4 className="text-2xl font-headline text-neon-cyan">{mainServices.apps[activeAppPlanIndex].title}</h4>
                                        <p className="text-2xl font-bold text-text-desaturated">{mainServices.apps[activeAppPlanIndex].price}</p>
                                        <p className="text-xs text-text-desaturated/60">{mainServices.apps[activeAppPlanIndex].priceDetails}</p>
                                    </div>

                                    <ul className="space-y-2 font-body text-sm mb-4">
                                      {mainServices.apps[activeAppPlanIndex].features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start">
                                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-neon-cyan mt-0.5" />
                                          <span className="text-text-desaturated/90">{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                    <p className="text-xs text-text-desaturated/70 mb-6">{mainServices.apps[activeAppPlanIndex].details}</p>

                                    <a
                                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, estoy interesado en contratar el ${mainServices.apps[activeAppPlanIndex].title} para Apps Móviles.`)}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="w-full inline-block text-center px-4 py-3 bg-neon-cyan/90 text-cyber-black font-headline text-base rounded-md transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.7)] hover:bg-neon-cyan"
                                    >
                                      CONTRATAR AHORA
                                    </a>
                                </div>
                             </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center p-4">
                              <div className="text-center">
                                  <div className="text-3xl text-gray-600 animate-boot-up-glitch" data-text="BRA_OS">BRA_OS</div>
                                  <p className="text-xs text-gray-500 font-code animate-pulse">Presiona el botón para iniciar</p>
                              </div>
                          </div>
                        )}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full flex items-center justify-center px-2">
                           <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                        </div>
                    </div>
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
