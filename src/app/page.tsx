'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import PortfolioSection from '@/components/portfolio-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import LoadingScreen from '@/components/loading-screen';
import AnimatedSection from '@/components/animated-section';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Duration of the exit animation
    }, 2500); // Total loading time (reduced)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen isExiting={exiting} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection>
          <PortfolioSection />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}