'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const NavigationContent = ({ activeSection }: { activeSection: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
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
    { name: 'Manifiesto', href: '#manifiesto' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ];
  
  const allNavLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Manifiesto', href: '#manifiesto' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    { name: 'Desarrollo Web', description: 'Soluciones web a medida', animation: 'animate-module-enter-1' },
    { name: 'Branding', description: 'Identidad y estrategia de marca', animation: 'animate-module-enter-2' },
    { name: 'Apps Móviles', description: 'Aplicaciones para iOS y Android', animation: 'animate-module-enter-3' },
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="hidden md:block flex-shrink-0 z-50">
             <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')}>
              <Image
                src="/LOGODOS.png"
                alt="BRA ESTUDIO WEB Logo"
                width={150}
                height={40}
                className="h-6 w-auto"
                priority
              />
             </a>
          </div>

          {/* Desktop Menu (Centered) */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-x-10">
            {mainLinks.slice(0, 1).map((link) => (
               <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn("font-headline text-text-desaturated transition-all duration-300 relative pixel-nav-link", {
                    'active-link': activeSection === link.href.substring(1)
                  })}
                >
                  <span className="link-text">{link.name}</span>
                </a>
            ))}
             <a
                  key="Manifiesto"
                  href="#manifiesto"
                  onClick={(e) => handleLinkClick(e, "#manifiesto")}
                  className={cn("font-headline text-text-desaturated transition-all duration-300 relative pixel-nav-link", {
                    'active-link': activeSection === "manifiesto"
                  })}
                >
                  <span className="link-text">Manifiesto</span>
                </a>

            <DropdownMenu open={isServicesMenuOpen} onOpenChange={setServicesMenuOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  onMouseEnter={() => setServicesMenuOpen(true)}
                  onMouseLeave={() => setServicesMenuOpen(false)}
                  className={cn("font-headline text-text-desaturated transition-all duration-300 flex items-center gap-1 group cursor-pointer relative hover:text-neon-yellow focus:outline-none", {
                    'active-link': activeSection === 'servicios'
                  })}
                >
                  <span>Servicios</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                onMouseEnter={() => setServicesMenuOpen(true)}
                onMouseLeave={() => setServicesMenuOpen(false)}
                className="bg-transparent border-none shadow-none w-64 mt-2"
              >
                <DropdownMenuGroup className="flex flex-col gap-2">
                  {services.map((service) => (
                    <DropdownMenuItem 
                      key={service.name}
                      className={cn(
                        "p-0 focus:bg-transparent data-[highlighted]:bg-transparent",
                        service.animation
                      )}
                      onClick={handleServiceClick}
                      style={{ animationFillMode: 'backwards' }}
                    >
                      <div className="w-full p-3 bg-black/70 border border-neon-yellow/30 rounded-md transition-all duration-300 hover:bg-surface-dark hover:border-neon-yellow hover:shadow-neon-subtle cursor-pointer group/item">
                        <div className="flex flex-col">
                          <span className="font-headline text-neon-yellow group-hover/item:text-neon-yellow transition-colors duration-200">{service.name}</span>
                          <span className="text-xs text-text-desaturated/70">{service.description}</span>
                        </div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {mainLinks.slice(2).map((link) => (
               <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn("font-headline text-text-desaturated transition-all duration-300 relative pixel-nav-link", {
                    'active-link': activeSection === link.href.substring(1)
                  })}
                >
                   <span className="link-text">{link.name}</span>
                </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-between z-50 flex-1">
            <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')}>
               <Image
                src="/LOGODOS.png"
                alt="BRA ESTUDIO WEB Logo"
                width={150}
                height={40}
                className="h-6 w-auto"
                priority
              />
            </a>
            <button
              className="text-text-desaturated hover:text-neon-yellow transition-colors relative h-8 w-8"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={28} className={cn('absolute transition-transform duration-300 ease-in-out', isOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100')} />
              <X size={28} className={cn('absolute transition-transform duration-300 ease-in-out', isOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0')} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-cyber-black/80 backdrop-blur-lg mobile-menu-gradient transition-transform duration-500 ease-in-out md:hidden h-screen',
          isOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-10 text-center">
          <nav className="flex flex-col items-center space-y-8">
            {allNavLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn("text-3xl font-headline text-text-desaturated hover:text-neon-yellow transition-transform duration-300 hover:scale-110 animate-fade-in-up", {
                  'active-link': activeSection === link.href.substring(1)
                })}
                style={{ animationDelay: `${index * 100 + 300}ms`, animationFillMode: 'backwards' }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};


const Navigation = ({ activeSection }: { activeSection: string }) => {
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
      <NavigationContent activeSection={activeSection}/>
    </header>
  )
}

export default Navigation;
