'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Crown } from 'lucide-react';

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
          ]
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
          popular: true
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
          ]
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
          ]
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
          popular: true
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
          ]
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
          ]
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
          popular: true
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
          ]
        }
      ]
    }
  };

  const serviceTypes = [
    { key: 'web', label: 'Desarrollo Web', icon: '🌐' },
    { key: 'branding', label: 'Branding', icon: '🎨' },
    { key: 'apps', label: 'Apps Móviles', icon: '📱' }
  ];

  return (
    <section id="servicios" className="py-20 cyber-grain relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-neon-yellow rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-neon-yellow rotate-12"></div>
      </div>

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

        {/* Service Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-2 bg-surface-dark/50 rounded-lg border border-neon-yellow/20">
            {serviceTypes.map((service) => (
              <button
                key={service.key}
                onClick={() => setActiveService(service.key)}
                className={`px-6 py-3 rounded-md font-body font-semibold transition-all duration-300 ${
                  activeService === service.key
                    ? 'bg-neon-yellow text-cyber-black shadow-neon'
                    : 'text-text-desaturated hover:text-neon-yellow hover:bg-neon-yellow/10'
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Packages */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mainServices[activeService as keyof typeof mainServices].packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`
                relative bg-surface-dark/90 border-2 transition-all duration-500 hover:scale-105 hover:shadow-neon
                ${pkg.popular ? 'border-neon-yellow shadow-neon-subtle' : 'border-neon-yellow/30 hover:border-neon-yellow/60'}
                group cursor-pointer
              `}
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
                  <div className={`p-4 rounded-full ${pkg.popular ? 'bg-neon-yellow text-cyber-black' : 'bg-neon-yellow/20 text-neon-yellow'}`}>
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

              <CardContent className="space-y-4">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-neon-yellow flex-shrink-0" />
                    <span className="text-text-desaturated font-body">{feature}</span>
                  </div>
                ))}

                <div className="pt-6">
                  <Button 
                    variant={pkg.popular ? "neon" : "cyberpunk"} 
                    className="w-full"
                    onClick={() => {
                      const element = document.getElementById('contacto');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    CONTRATAR
                  </Button>
                </div>
              </CardContent>

              {/* 3D hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
            </Card>
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
