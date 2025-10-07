'use client';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { CheckCircle, Code, Gem, Package, ArrowLeft, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const webPlans = [
  { id: 'web-1', title: 'Plan Básico', price: 700000, description: 'Landing Page profesional (hasta 4 secciones).', icon: Package },
  { id: 'web-2', title: 'Plan Normal', price: 1400000, description: 'Sitio Web completo (hasta 7 páginas).', icon: Code },
  { id: 'web-3', title: 'Plan Premium', price: 2500000, description: 'Plataforma Web a medida con E-commerce/CMS.', icon: Gem },
];

const brandingPlans = [
  { id: 'brand-1', title: 'Plan Esencial', price: 300000, description: 'Diseño de logotipo y paleta de colores.', icon: Package },
  { id: 'brand-2', title: 'Plan Profesional', price: 800000, description: 'Identidad sólida y plantillas para redes.', icon: Code },
  { id: 'brand-3', title: 'Plan Premium', price: 1500000, description: 'Ecosistema de marca completo y manual.', icon: Gem },
];

const DISCOUNT_PERCENTAGE = 0.15; // 15% discount

export default function ConfigurarPaquetePage() {
  const router = useRouter();
  const [selectedWeb, setSelectedWeb] = useState<any | null>(null);
  const [selectedBranding, setSelectedBranding] = useState<any | null>(null);

  const { subtotal, discount, total } = useMemo(() => {
    const webPrice = selectedWeb?.price || 0;
    const brandingPrice = selectedBranding?.price || 0;
    const sub = webPrice + brandingPrice;
    const disc = (selectedWeb && selectedBranding) ? sub * DISCOUNT_PERCENTAGE : 0;
    const tot = sub - disc;
    return { subtotal: sub, discount: disc, total: tot };
  }, [selectedWeb, selectedBranding]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(value);
  };

  const handleRequestQuote = () => {
    let message = `Hola, estoy interesado en una cotización para el siguiente paquete:\n`;
    if (selectedWeb) {
      message += `\n- Desarrollo Web: ${selectedWeb.title}`;
    }
    if (selectedBranding) {
      message += `\n- Branding: ${selectedBranding.title}`;
    }
    message += `\n\nPrecio Total Estimado: ${formatCurrency(total)}`;
    
    router.push(`/contacto?message=${encodeURIComponent(message)}`);
  };

  const PlanSelectorCard = ({ plan, isSelected, onSelect }: { plan: any, isSelected: boolean, onSelect: () => void }) => {
    const Icon = plan.icon;
    return (
      <div
        onClick={onSelect}
        className={cn(
          'p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 relative overflow-hidden bg-surface-dark/80',
          isSelected ? 'border-neon-yellow shadow-neon-intense animate-pulse-fast' : 'border-neon-yellow/30 hover:border-neon-yellow'
        )}
      >
        {isSelected && <div className="absolute top-0 left-0 w-full h-1 bg-neon-yellow animate-glitch-line-1"></div>}
        <div className="flex items-start justify-between mb-4">
          <h4 className="text-xl font-headline text-neon-yellow">{plan.title}</h4>
          <Icon className={cn('w-6 h-6', isSelected ? 'text-neon-yellow' : 'text-neon-yellow/60')} />
        </div>
        <p className="text-text-desaturated/80 font-body text-sm mb-4 h-10">{plan.description}</p>
        <p className="text-2xl font-bold text-white">{formatCurrency(plan.price)}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground cyber-grain p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <header className="flex items-center justify-between mb-8">
          <Button variant="outline" onClick={() => router.back()} className="border-neon-yellow/50 text-neon-yellow/80 hover:bg-neon-yellow/10 hover:text-neon-yellow">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <h1 className="text-3xl md:text-4xl font-headline text-neon-yellow glitch text-center flex-1" data-text="LABORATORIO DE PAQUETES">
            LABORATORIO DE PAQUETES
          </h1>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Configuration */}
          <div className="lg:col-span-2 space-y-12">
            {/* Step 1: Web Development */}
            <div>
              <h2 className="text-2xl font-headline text-neon-orange mb-6 glitch" data-text="1. Elige tu Plan de Desarrollo Web">1. Elige tu Plan de Desarrollo Web</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {webPlans.map(plan => (
                  <PlanSelectorCard 
                    key={plan.id}
                    plan={plan}
                    isSelected={selectedWeb?.id === plan.id}
                    onSelect={() => setSelectedWeb(plan)}
                  />
                ))}
              </div>
            </div>

            {/* Step 2: Branding */}
            <div>
              <h2 className="text-2xl font-headline text-neon-orange mb-6 glitch" data-text="2. Elige tu Plan de Branding">2. Elige tu Plan de Branding</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {brandingPlans.map(plan => (
                  <PlanSelectorCard 
                    key={plan.id}
                    plan={plan}
                    isSelected={selectedBranding?.id === plan.id}
                    onSelect={() => setSelectedBranding(plan)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-surface-dark/90 border-2 border-neon-orange/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-headline text-neon-orange mb-6 text-center">Resumen del Paquete</h3>
              
              <div className="space-y-4 mb-6 font-body">
                <div className="flex justify-between items-center">
                  <span className="text-text-desaturated">Desarrollo Web:</span>
                  <span className="font-medium text-white">{selectedWeb?.title || 'No seleccionado'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-desaturated">Branding:</span>
                  <span className="font-medium text-white">{selectedBranding?.title || 'No seleccionado'}</span>
                </div>
                 <div className="w-full h-px bg-neon-orange/20 my-4"></div>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-text-desaturated">Subtotal:</span>
                  <span className="font-bold text-white">{formatCurrency(subtotal)}</span>
                </div>
                <div className={cn("flex justify-between items-center text-lg transition-opacity duration-500", discount > 0 ? "opacity-100" : "opacity-0")}>
                  <span className="text-green-400">Descuento ({DISCOUNT_PERCENTAGE * 100}%):</span>
                  <span className="font-bold text-green-400">-{formatCurrency(discount)}</span>
                </div>
              </div>

              <div className="w-full h-px bg-neon-orange/50 my-6"></div>

              <div className="text-center">
                <p className="text-lg text-neon-orange/80 font-headline">PRECIO TOTAL</p>
                <p className="text-5xl font-bold text-white my-2 animate-text-flicker-fast">
                  {formatCurrency(total)}
                </p>
                <p className="text-sm text-text-desaturated/70">Impuestos no incluidos</p>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full mt-8"
                disabled={!selectedWeb && !selectedBranding}
                onClick={handleRequestQuote}
              >
                <Send size={20} />
                SOLICITAR COTIZACIÓN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
