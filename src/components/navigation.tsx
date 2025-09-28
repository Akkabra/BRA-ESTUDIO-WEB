'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { BraLogo } from '@/components/bra-logo';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "573000000000"; 

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-cyber-black/80 backdrop-blur-lg" : "bg-transparent pt-4"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} className="z-50">
              <BraLogo 
                className={cn(
                  "h-24 w-auto transition-all duration-300",
                  isScrolled ? "h-16" : "h-24"
                )}
              />
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-body text-text-desaturated hover:text-neon-yellow transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-yellow group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-text-desaturated hover:text-neon-yellow transition-colors z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 md:hidden bg-cyber-black/95 backdrop-blur-xl transition-transform duration-500 ease-in-out",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-10">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-3xl font-headline text-text-desaturated hover:text-neon-yellow transition-transform duration-300 hover:scale-110"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <Button
            variant="hero"
            size="lg"
            onClick={() => {
              window.open(`https://wa.me/${whatsappNumber}?text=Hola, me interesa conocer más sobre sus servicios`, '_blank');
              setIsOpen(false);
            }}
          >
            <MessageCircle size={20} />
            CONTACTAR
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
