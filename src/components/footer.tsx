'use client'
import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { BraLogo } from '@/components/bra-logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "573145527342";

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://www.instagram.com/braestudioweb',
      color: 'hover:text-pink-400'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://www.facebook.com/profile.php?id=61561543854293',
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
      href: 'https://www.tiktok.com/@braestudioweb',
      color: 'hover:text-white'
    }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'IA BRA', href: '/ia' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="relative bg-cyber-black border-t border-neon-yellow/20 py-16 overflow-hidden">
      {/* Background decoration with moving stripes */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-neon-yellow/60 to-transparent"
            style={{
              top: `${10 + i * 10}%`,
              animation: `move-stripes ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="mb-4">
            <BraLogo className="h-16 w-auto neon-glow-subtle pixel-hover"/>
        </div>

        {/* Slogan */}
        <p className="text-neon-yellow font-body mb-6 text-sm md:text-base">
          Tu marca, sin ataduras de plantillas, así nace tu web
        </p>

        {/* Divider */}
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-neon-yellow to-transparent mb-6 animate-pulse-fast"></div>

        {/* Quick Links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-8 font-body text-sm text-text-desaturated">
          {quickLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <Link href={link.href} className="hover:text-neon-yellow hover:brightness-125 transition-all duration-300">
                {link.name}
              </Link>
              {index < quickLinks.length - 1 && <span className="text-neon-yellow/50">•</span>}
            </React.Fragment>
          ))}
        </nav>


        {/* Social Media */}
        <div className="flex space-x-6 mb-8">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-12 h-12 bg-surface-dark border border-neon-yellow/30 rounded-full 
                  flex items-center justify-center text-text-desaturated 
                  transition-all duration-300 group
                  hover:border-neon-yellow hover:shadow-neon-subtle hover:scale-110
                `}
              >
                <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform group-hover:glitch-text" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <Link href="/login" className="text-text-desaturated/80 font-body text-sm cursor-pointer">
            © {currentYear} BRA ESTUDIO WEB — Todos los derechos reservados
        </Link>
        
      </div>

      {/* Corner decorative elements */}
      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-neon-yellow/30"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-neon-yellow/30"></div>
    </footer>
  );
};

export default Footer;
