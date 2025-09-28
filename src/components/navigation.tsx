'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { BraLogo } from '@/components/bra-logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "573000000000"; // Replace with real number

  const services = [
    {
      name: "Desarrollo Web",
      description: "Sitios web personalizados y responsivos",
      icon: "🌐"
    },
    {
      name: "Branding",
      description: "Identidad visual para tu marca",
      icon: "🎨"
    },
    {
      name: "Apps Móviles",
      description: "Aplicaciones nativas y híbridas",
      icon: "📱"
    },
    {
      name: "Piezas Gráficas",
      description: "Diseño gráfico profesional",
      icon: "🖼️"
    }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-cyber-black/90 backdrop-blur-md border-b border-neon-yellow/20 shadow-neon-subtle' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <a href="#inicio">
                <BraLogo 
                  className="h-10 w-auto neon-glow-subtle transition-all duration-300 hover:scale-110"
                />
              </a>
              <span className="font-headline text-neon-yellow text-lg font-bold hidden sm:block">
                BRA ESTUDIO WEB
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-text-desaturated hover:text-neon-yellow transition-colors font-body">
                Inicio
              </a>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <a href="#servicios" className="flex items-center space-x-1 text-text-desaturated hover:text-neon-yellow transition-colors font-body">
                  <span>Servicios</span>
                  <ChevronDown size={16} />
                </a>
                
                {showServicesDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-surface-dark/95 backdrop-blur-md border border-neon-yellow/20 rounded-lg shadow-neon p-4 grid grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <a 
                        key={index}
                        href="#servicios"
                        className="p-3 rounded-md bg-cyber-black/50 hover:bg-neon-yellow/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-neon-yellow/30"
                      >
                        <div className="text-xl mb-2">{service.icon}</div>
                        <h3 className="text-neon-yellow font-semibold text-sm mb-1">{service.name}</h3>
                        <p className="text-text-desaturated text-xs">{service.description}</p>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#portafolio" className="text-text-desaturated hover:text-neon-yellow transition-colors font-body">
                Portafolio
              </a>
              <a href="#contacto" className="text-text-desaturated hover:text-neon-yellow transition-colors font-body">
                Contacto
              </a>
            </div>

            {/* WhatsApp Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="neon" 
                size="sm"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                className="hidden sm:flex"
              >
                <MessageCircle size={16} />
                WhatsApp
              </Button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden text-text-desaturated hover:text-neon-yellow transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-cyber-black/95 backdrop-blur-md">
            <div className="flex flex-col h-full justify-center items-center space-y-8 text-center">
              <BraLogo 
                className="h-20 w-auto neon-glow"
              />
              
              <div className="space-y-6">
                <a 
                  href="#inicio" 
                  className="block text-2xl font-headline text-neon-yellow hover:scale-110 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  INICIO
                </a>
                <a 
                  href="#servicios" 
                  className="block text-2xl font-headline text-neon-yellow hover:scale-110 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  SERVICIOS
                </a>
                <a 
                  href="#portafolio" 
                  className="block text-2xl font-headline text-neon-yellow hover:scale-110 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  PORTAFOLIO
                </a>
                <a 
                  href="#contacto" 
                  className="block text-2xl font-headline text-neon-yellow hover:scale-110 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACTO
                </a>
              </div>
              
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => {
                  window.open(`https://wa.me/${whatsappNumber}`, '_blank');
                  setIsOpen(false);
                }}
              >
                <MessageCircle size={20} />
                CONTACTAR
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
