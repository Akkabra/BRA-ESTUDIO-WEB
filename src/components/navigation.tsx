'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { BraLogo } from '@/components/bra-logo';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const NavigationContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };
  
  const handleServiceClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
    setServicesMenuOpen(false);
  };

  const mainLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    { name: 'Desarrollo Web', description: 'Soluciones web a medida' },
    { name: 'Branding', description: 'Identidad y estrategia de marca' },
    { name: 'Apps Móviles', description: 'Aplicaciones para iOS y Android' },
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} className="flex-shrink-0 z-50">
            <BraLogo className="h-16 w-auto" style={{ height: '55px'}}/>
          </a>

          {/* Desktop Menu (Centered) */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-x-10">
            {mainLinks.slice(0, 1).map((link) => (
               <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-headline text-text-desaturated transition-all duration-300 relative pixel-nav-link"
                >
                  <span className="link-text">{link.name}</span>
                </a>
            ))}

            <DropdownMenu open={isServicesMenuOpen} onOpenChange={setServicesMenuOpen}>
              <DropdownMenuTrigger asChild>
                <a
                  href="#servicios"
                  onMouseEnter={() => setServicesMenuOpen(true)}
                  onClick={(e) => handleLinkClick(e, '#servicios')}
                  className="font-headline text-text-desaturated transition-all duration-300 flex items-center gap-1 group cursor-pointer relative hover:text-neon-yellow focus:outline-none"
                >
                  <span>Servicios</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                </a>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                onMouseLeave={() => setServicesMenuOpen(false)}
                className="w-64 bg-surface-dark/90 border-neon-yellow/30 text-text-desaturated backdrop-blur-xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
              >
                <DropdownMenuGroup>
                  {services.map((service) => (
                    <DropdownMenuItem 
                      key={service.name}
                      className="focus:bg-neon-yellow/10 focus:text-neon-yellow cursor-pointer group/item"
                      onClick={handleServiceClick}
                    >
                      <div className="flex flex-col">
                        <span className="font-headline group-hover/item:text-neon-yellow transition-colors duration-200">{service.name}</span>
                        <span className="text-xs text-text-desaturated/70">{service.description}</span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {mainLinks.slice(1).map((link) => (
               <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-headline text-text-desaturated transition-all duration-300 relative pixel-nav-link"
                >
                   <span className="link-text">{link.name}</span>
                </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0 z-50">
            <button
              className="text-text-desaturated hover:text-neon-yellow transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-cyber-black/95 backdrop-blur-xl transition-transform duration-500 ease-in-out md:hidden',
          isOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-10 pt-20">
          <nav className="flex flex-col items-center space-y-8">
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="text-3xl font-headline text-text-desaturated hover:text-neon-yellow transition-transform duration-300 hover:scale-110"
            >
              Inicio
            </a>
            
            <a
              href="#servicios"
              onClick={(e) => handleLinkClick(e, '#servicios')}
              className="text-3xl font-headline text-text-desaturated hover:text-neon-yellow transition-transform duration-300 hover:scale-110"
            >
              Servicios
            </a>

            <a
              href="#portafolio"
              onClick={(e) => handleLinkClick(e, '#portafolio')}
              className="text-3xl font-headline text-text-desaturated hover:text-neon-yellow transition-transform duration-300 hover:scale-110"
            >
              Portafolio
            </a>

            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, '#contacto')}
              className="text-3xl font-headline text-text-desaturated hover:text-neon-yellow transition-transform duration-300 hover:scale-110"
            >
              Contacto
            </a>

          </nav>
        </div>
      </div>
    </>
  );
};


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-cyber-black/80 backdrop-blur-lg border-b border-neon-yellow/20' : 'bg-transparent pt-2'
      )}
    >
      <NavigationContent/>
    </header>
  )
}

export default Navigation;
