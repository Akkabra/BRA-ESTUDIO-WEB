'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import PortfolioSection from '@/components/portfolio-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import LoadingScreen from '@/components/loading-screen';
import ScrollspySection from '@/components/scrollspy-section';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Duration of the exit animation
    }, 2500); // Total loading time (reduced)

    return () => clearTimeout(timer);
  }, []);

  const handleInViewChange = (inView: boolean, id: string) => {
    if (inView) {
      setActiveSection(id);
    }
  };

  if (loading) {
    return <LoadingScreen isExiting={exiting} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      <main id="main-content">
        <ScrollspySection
          id="inicio"
          onInViewChange={(inView) => handleInViewChange(inView, 'inicio')}
        >
          <HeroSection />
        </ScrollspySection>
        <ScrollspySection
          id="servicios"
          onInViewChange={(inView) => handleInViewChange(inView, 'servicios')}
        >
          <ServicesSection />
        </ScrollspySection>
        <ScrollspySection
          id="portafolio"
          onInViewChange={(inView) => handleInViewChange(inView, 'portafolio')}
        >
          <PortfolioSection />
        </ScrollspySection>
        <ScrollspySection
          id="contacto"
          onInViewChange={(inView) => handleInViewChange(inView, 'contacto')}
        >
          <ContactSection />
        </ScrollspySection>
      </main>
      <Footer />
    </div>
  );
}
