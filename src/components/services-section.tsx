'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle, Code, Gem, Package } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';


const ServicesSection = () => {
  const [activeService, setActiveService] = useState('web');
  const [flippedStates, setFlippedStates] = useState<Record<number, boolean>>({});
  const isMobile = useIsMobile();
  const whatsappNumber = "573000000000"; // Replace with your WhatsApp number


  const handleCardClick = (index: number) => {
    // Only allow flipping on mobile
    if (isMobile) {
      setFlippedStates(prev => ({
        ...prev,
        [index]: !prev[index],
      }));
    }
  };

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
    branding: [],
    apps: [],
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
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-neon-yellow mb-6 cyber-title">
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
          {activeService === 'web' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.web.map((plan, index) => {
                const Icon = plan.icon;
                const isFlipped = !!flippedStates[index];
                return (
                  <div
                    key={index}
                    className="group"
                    style={{ perspective: '1200px' }}
                    onClick={() => handleCardClick(index)}
                  >
                    <div
                      className={cn(
                        "relative h-[500px] w-full [transform-style:preserve-3d]",
                        "transition-transform duration-1000 ease-in-out",
                        // Only apply rotation on mobile based on isFlipped state
                        isMobile && isFlipped ? '[transform:rotateX(180deg)]' : ''
                      )}
                    >
                      {/* Front Face: Visible by default, fades on desktop hover */}
                      <div
                        className={cn(
                          "absolute inset-0 flex h-full w-full flex-col justify-between rounded-lg bg-surface-dark/90 p-6 shadow-md [backface-visibility:hidden]",
                          "transition-all duration-1000 ease-in-out",
                          // Desktop hover effect - only if NOT mobile
                          !isMobile ? "md:group-hover:opacity-0 md:group-hover:blur-lg" : ""
                        )}
                      >
                        <div className="absolute inset-0 rounded-lg border border-neon-yellow/30 md:group-hover:border-neon-yellow"></div>
                        <div>
                          <div className="mb-4 flex items-start justify-between">
                            <h3 className="text-2xl font-headline text-neon-yellow">{plan.title}</h3>
                            <div className="rounded-full border border-neon-yellow/30 bg-cyber-black/50 p-2">
                              <Icon className="h-6 w-6 text-neon-yellow/70" />
                            </div>
                          </div>
                          <div className="mb-6">
                            <span className="text-4xl font-bold text-text-desaturated">{plan.price}</span>
                            <p className="text-sm text-text-desaturated/70">{plan.priceDetails}</p>
                          </div>
                        </div>
                        <div>
                          <ul className="space-y-3 font-body">
                            {plan.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-center">
                                <CheckCircle className="mr-3 h-4 w-4 flex-shrink-0 text-neon-yellow" />
                                <span className="text-sm text-text-desaturated">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 text-center">
                            <p className="text-xs font-body text-neon-yellow/70">
                                <span className='md:hidden'>Toca para ver más</span>
                                <span className='hidden md:inline'>Pasa el cursor para ver más</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Back Face: Visible on click (mobile) or hover (desktop) */}
                      <div
                        className={cn(
                          "absolute inset-0 flex h-full w-full flex-col justify-between rounded-lg bg-surface-dark/95 p-6 [backface-visibility:hidden]",
                          "transition-all duration-1000 ease-in-out",
                          // Mobile: Rotated on click
                          '[transform:rotateX(180deg)]',
                          isMobile && isFlipped ? 'z-10 [transform:rotateX(0deg)]' : '',
                          // Desktop: Fades in on hover - only if NOT mobile
                          !isMobile ? "md:transform-none md:opacity-0 md:blur-lg md:scale-95 md:group-hover:opacity-100 md:group-hover:blur-0 md:group-hover:scale-100" : ""
                        )}
                      >
                        <div className="absolute inset-0 rounded-lg border border-neon-orange/50"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/10 via-transparent to-transparent"></div>
                        <div>
                          <h4 className="mb-4 text-xl font-headline text-neon-orange">
                            Más detalles del {plan.title}
                          </h4>
                          <p className="font-body text-sm leading-relaxed text-text-desaturated/90">{plan.details}</p>
                        </div>
                        <Button
                          variant="cyberpunk"
                          size="lg"
                          className="mt-6 w-full border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-cyber-black"
                          onClick={(e) => {
                            if (isMobile) e.stopPropagation();
                            const message = encodeURIComponent(`Hola, estoy interesado en contratar el ${plan.title}.`);
                            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
                          }}
                        >
                          Contratar Plan
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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
