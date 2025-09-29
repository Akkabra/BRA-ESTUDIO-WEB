'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import PortfolioSection from '@/components/portfolio-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import LoadingScreen from '@/components/loading-screen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Shortened loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <HeroSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <ServicesSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <PortfolioSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
