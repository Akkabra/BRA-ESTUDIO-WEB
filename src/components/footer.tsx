'use client'
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { BraLogo } from '@/components/bra-logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "573000000000";

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: '#',
      color: 'hover:text-pink-400'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: '#',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      href: `https://wa.me/${whatsappNumber}`,
      color: 'hover:text-green-400'
    },
    { 
      name: 'TikTok', 
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ), 
      href: '#',
      color: 'hover:text-white'
    }
  ];

  return (
    <footer className="relative bg-cyber-black border-t border-neon-yellow/20 py-16 overflow-hidden">
      {/* Background decoration with moving stripes */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-neon-yellow/60 to-transparent animate-move-stripes"
            style={{
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '8s'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <BraLogo className="h-12 w-auto neon-glow-subtle" />
              <span className="font-headline text-neon-yellow text-lg font-bold">
                BRA ESTUDIO WEB
              </span>
            </div>
            <p className="text-text-desaturated font-body leading-relaxed">
              Transformamos tu visión digital en realidad. Especialistas en desarrollo web, 
              branding y aplicaciones móviles con un enfoque único y personalizado.
            </p>
            <div className="text-sm text-text-desaturated/80 font-body">
              <p>🎯 Tu visión, nuestro desarrollo</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-headline text-neon-yellow">
              Enlaces Rápidos
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-text-desaturated hover:text-neon-yellow transition-colors font-body flex items-center group"
                >
                  <span className="w-2 h-2 bg-neon-yellow/50 rounded-full mr-3 group-hover:bg-neon-yellow transition-colors"></span>
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="pt-4 border-t border-neon-yellow/20">
              <div className="space-y-2">
                <a 
                  href="#" 
                  className="block text-text-desaturated hover:text-neon-yellow transition-colors font-body text-sm"
                >
                  Políticas de Privacidad
                </a>
                <a 
                  href="#" 
                  className="block text-text-desaturated hover:text-neon-yellow transition-colors font-body text-sm"
                >
                  Términos y Condiciones
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-headline text-neon-yellow">
              Síguenos
            </h3>
            <p className="text-text-desaturated font-body">
              Mantente al día con nuestros últimos proyectos y noticias del mundo digital.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`
                      w-12 h-12 bg-surface-dark border border-neon-yellow/30 rounded-full 
                      flex items-center justify-center text-text-desaturated 
                      transition-all duration-300 group
                      hover:border-neon-yellow hover:shadow-neon-subtle hover:scale-110
                      ${social.color}
                    `}
                  >
                    <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-text-desaturated/80 font-body mb-2">
                📧 info@braestudioweb.com
              </p>
              <p className="text-sm text-text-desaturated/80 font-body">
                📱 +57 300 000 0000
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neon-yellow/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-desaturated/80 font-body text-sm">
              © {currentYear} BRA ESTUDIO WEB — Todos los derechos reservados
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-text-desaturated/60 font-body">
                Diseñado con
              </span>
              <div className="flex items-center space-x-1">
                <span className="text-neon-yellow animate-pulse">⚡</span>
                <span className="text-text-desaturated/60 font-body">y</span>
                <span className="text-red-400 animate-pulse">❤️</span>
              </div>
              <span className="text-text-desaturated/60 font-body">
                en Colombia
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-neon-yellow/30"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-neon-yellow/30"></div>
    </footer>
  );
};

export default Footer;

    