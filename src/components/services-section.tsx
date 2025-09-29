'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('web');

  const mainServices = {
    web: {
      title: 'Desarrollo Web',
      packages: [
        {
          name: 'Básico',
          icon: <Star className="w-8 h-8" />,
          price: 'Desde $500',
          features: [
            'Diseño responsivo',
            'Hasta 5 páginas',
            'Optimización SEO básica',
            'Formulario de contacto',
            'SSL incluido',
            '1 mes de soporte'
          ],
          details: 'Ideal para startups y proyectos personales que necesitan una presencia online profesional y efectiva desde el primer día.'
        },
        {
          name: 'Normal',
          icon: <Zap className="w-8 h-8" />,
          price: 'Desde $1,200',
          features: [
            'Todo lo del paquete Básico',
            'Hasta 10 páginas',
            'CMS personalizado',
            'Integración redes sociales',
            'Analytics avanzado',
            'Blog funcional',
            '3 meses de soporte'
          ],
          popular: true,
          details: 'La solución perfecta para empresas en crecimiento que buscan una web potente, autogestionable y con herramientas de marketing.'
        },
        {
          name: 'Premium',
          icon: <Crown className="w-8 h-8" />,
          price: 'Desde $2,500',
          features: [
            'Todo lo del paquete Normal',
            'Páginas ilimitadas',
            'E-commerce completo',
            'Animaciones avanzadas',
            'API personalizada',
            'Diseño UX/UI premium',
            '6 meses de soporte'
          ],
          details: 'Para proyectos a gran escala y e-commerce que requieren funcionalidades a medida, un diseño excepcional y el máximo rendimiento.'
        }
      ]
    },
    branding: {
      title: 'Branding',
      packages: [
        {
          name: 'Identidad Básica',
          icon: <Star className="w-8 h-8" />,
          price: 'Desde $300',
          features: [
            'Logo principal',
            'Paleta de colores',
            'Tipografías',
            '2 revisiones',
            'Archivos en alta resolución'
          ],
          details: 'El punto de partida para cualquier nueva marca. Creamos un logo memorable y una paleta de colores que te represente.'
        },
        {
          name: 'Identidad Completa',
          icon: <Zap className="w-8 h-8" />,
          price: 'Desde $800',
          features: [
            'Todo lo del paquete Básico',
            'Manual de marca',
            'Variaciones del logo',
            'Papelería corporativa',
            'Mockups incluidos',
            '5 revisiones'
          ],
          popular: true,
          details: 'Un paquete integral para establecer una identidad de marca sólida y coherente en todos los puntos de contacto.'
        },
        {
          name: 'Branding 360°',
          icon: <Crown className="w-8 h-8" />,
          price: 'Desde $1,500',
          features: [
            'Todo lo del paquete Completo',
            'Estrategia de marca',
            'Aplicaciones digitales',
            'Merchandising',
            'Redes sociales templates',
            'Revisiones ilimitadas'
          ],
          details: 'La solución definitiva para marcas que buscan dominar su mercado con una estrategia y una identidad visual de alto impacto.'
        }
      ]
    },
    apps: {
      title: 'Apps Móviles',
      packages: [
        {
          name: 'App Básica',
          icon: <Star className="w-8 h-8" />,
          price: 'Desde $1,500',
          features: [
            'App híbrida',
            'Hasta 5 pantallas',
            'Diseño responsive',
            'Play Store/App Store',
            '2 meses de soporte'
          ],
          details: 'Lanza tu idea al mercado móvil rápidamente con una aplicación funcional y bien diseñada para iOS y Android.'
        },
        {
          name: 'App Avanzada',
          icon: <Zap className="w-8 h-8" />,
          price: 'Desde $3,000',
          features: [
            'Todo lo del paquete Básico',
            'App nativa',
            'Backend incluido',
            'Push notifications',
            'Autenticación usuarios',
            '4 meses de soporte'
          ],
          popular: true,
          details: 'Para aplicaciones que requieren mayor rendimiento, funcionalidades complejas y una experiencia de usuario superior.'
        },
        {
          name: 'App Enterprise',
          icon: <Crown className="w-8 h-8" />,
          price: 'Desde $5,000',
          features: [
            'Todo lo del paquete Avanzado',
            'Funcionalidades complejas',
            'API personalizada',
            'Analytics avanzado',
            'Mantenimiento 1 año',
            'Soporte prioritario'
          ],
          details: 'Soluciones móviles a nivel empresarial, diseñadas para la escalabilidad, la seguridad y la integración con sistemas existentes.'
        }
      ]
    }
  };

  const serviceTypes = [
    { key: 'web', label: 'Desarrollo Web' },
    { key: 'branding', label: 'Branding' },
    { key: 'apps', label: 'Apps Móviles' }
  ];

  const FlippableCard = ({ pkg, index }: { pkg: any, index: number }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    return (
      <div 
        className="group [perspective:1000px]"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div 
          className={cn(
            "relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]",
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          )}
        >
          {/* Front of the card */}
          <div className="absolute w-full h-full [backface-visibility:hidden]">
            <Card 
              className={cn(
                'h-full flex flex-col justify-between bg-surface-dark/90 border-2 transition-all duration-300 group-hover:[transform:translateZ(20px)_rotateX(5deg)] group-hover:shadow-[0_0_20px_hsl(var(--neon-cyan)),0_0_30px_hsl(var(--neon-cyan)/0.4)]',
                pkg.popular ? 'border-neon-yellow shadow-neon-subtle' : 'border-neon-cyan/30 group-hover:border-neon-cyan',
                'cursor-pointer'
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-neon-yellow text-cyber-black px-4 py-1 rounded-full text-sm font-bold font-headline">
                    MÁS POPULAR
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={cn('p-4 rounded-full', pkg.popular ? 'bg-neon-yellow text-cyber-black' : 'bg-neon-cyan/20 text-neon-cyan')}>
                    {pkg.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-headline text-neon-yellow mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="text-3xl font-bold text-text-desaturated">
                  {pkg.price}
                </div>
              </CardHeader>

              <CardContent className="flex-grow space-y-4">
                {pkg.features.map((feature: string, featureIndex: number) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-neon-yellow flex-shrink-0" />
                    <span className="text-text-desaturated font-body">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <div className="p-6 pt-0">
                  <Button variant="cyberpunk" className="w-full border-neon-cyan/80 text-neon-cyan hover:bg-neon-cyan hover:text-cyber-black">
                    GIRAR PARA VER MÁS <ArrowRight className="ml-2"/>
                  </Button>
              </div>
            </Card>
          </div>

          {/* Back of the card */}
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
             <Card 
              className={cn(
                'h-full flex flex-col justify-between bg-surface-dark border-2',
                 pkg.popular ? 'border-neon-yellow' : 'border-neon-cyan',
                'cursor-pointer p-6'
              )}
            >
                <CardHeader className="p-0 text-center">
                    <CardTitle className="text-2xl font-headline text-neon-yellow mb-4">
                        {pkg.name}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow flex items-center">
                    <p className="text-text-desaturated text-center font-body text-lg leading-relaxed">
                        {pkg.details}
                    </p>
                </CardContent>
                <div className="pt-6">
                    <Button 
                        variant={pkg.popular ? "neon" : "cyberpunk"} 
                        className={cn(!pkg.popular && 'border-neon-cyan/80 text-neon-cyan hover:bg-neon-cyan hover:text-cyber-black')}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent card from flipping back
                            const element = document.getElementById('contacto');
                            element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        CONTRATAR ESTE PLAN
                    </Button>
                </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }

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


        {/* Service Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mainServices[activeService as keyof typeof mainServices].packages.map((pkg, index) => (
              <FlippableCard key={index} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 text-center">
          <p className="text-lg text-text-desaturated mb-6 font-body">
            ¿Necesitas algo más específico?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Piezas Gráficas', 'Consultoría Digital', 'Mantenimiento Web', 'SEO Avanzado'].map((service, index) => (
              <div key={index} className="px-4 py-2 bg-surface-dark/70 border border-neon-yellow/30 rounded-md text-text-desaturated hover:border-neon-yellow hover:text-neon-yellow transition-all duration-300 cursor-pointer">
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
