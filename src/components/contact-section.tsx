'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Send
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const whatsappNumber = "573145527342";
  const formspreeEndpoint = "https://formspree.io/f/xgvnyorq";

  const services = [
    'Desarrollo Web - Básico',
    'Desarrollo Web - Normal', 
    'Desarrollo Web - Premium',
    'Branding - Identidad Básica',
    'Branding - Identidad Completa',
    'Branding - 360°',
    'Apps Móviles - Básica',
    'Apps Móviles - Avanzada',
    'Apps Móviles - Enterprise',
    'Consultoría Digital',
    'Otro'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Error",
        description: "Debes aceptar la política de privacidad para continuar",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Te contactaremos pronto. ¡Gracias por confiar en nosotros!",
        });
        setFormData({
          name: '',
          email: '',
          service: '',
          message: '',
          consent: false
        });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contacto" className="py-20 cyber-grain relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 w-36 h-36 border border-neon-yellow rotate-45"></div>
        <div className="absolute bottom-16 right-16 w-24 h-24 border border-neon-yellow rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-headline font-bold bg-gradient-neon text-transparent bg-clip-text mb-6 cyber-title glitch"
            data-text="CONTACTO"
          >
            CONTACTO
          </h2>
          <p className="text-xl text-text-desaturated max-w-3xl mx-auto font-body">
            ¿Listo para transformar tu visión digital en realidad? Hablemos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-surface-dark/90 border border-neon-yellow/30 shadow-neon-subtle">
            <CardHeader>
              <CardTitle className="text-2xl font-headline bg-gradient-neon text-transparent bg-clip-text">
                Envíanos un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-desaturated font-body mb-2">
                      Nombre *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Tu nombre completo"
                      className="bg-cyber-black/50 border-neon-yellow/30 text-text-desaturated focus:border-neon-yellow focus:shadow-neon-intense"
                    />
                  </div>
                  <div>
                    <label className="block text-text-desaturated font-body mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="tu@email.com"
                      className="bg-cyber-black/50 border-neon-yellow/30 text-text-desaturated focus:border-neon-yellow focus:shadow-neon-intense"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-desaturated font-body mb-2">
                    Servicio de interés
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    className="w-full p-3 bg-cyber-black/50 border border-neon-yellow/30 rounded-md text-text-desaturated focus:border-neon-yellow focus:outline-none focus:shadow-neon-intense transition-all duration-300 font-body"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-cyber-black">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-text-desaturated font-body mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    className="bg-cyber-black/50 border-neon-yellow/30 text-text-desaturated focus:border-neon-yellow focus:shadow-neon-intense"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                    className="border-neon-yellow/50 data-[state=checked]:bg-neon-yellow data-[state=checked]:border-neon-yellow mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-text-desaturated font-body leading-relaxed">
                    Acepto la{' '}
                    <a href="#" className="text-neon-yellow hover:underline">
                      política de privacidad
                    </a>{' '}
                    y autorizo el tratamiento de mis datos personales para fines comerciales y de contacto.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full animate-pulse"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-cyber-black border-t-transparent" />
                      ENVIANDO...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      ENVIAR MENSAJE
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-surface-dark/90 border border-neon-yellow/30">
              <CardHeader>
                <CardTitle className="text-2xl font-headline bg-gradient-neon text-transparent bg-clip-text">
                  Información de contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-yellow/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-neon-yellow" />
                  </div>
                  <div>
                    <p className="text-text-desaturated font-body">Email</p>
                    <a href="mailto:braestudioweb@gmail.com" className="text-neon-yellow hover:underline glitch-text">
                      braestudioweb@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-yellow/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-neon-yellow" />
                  </div>
                  <div>
                    <p className="text-text-desaturated font-body">Teléfono</p>
                    <a href={`tel:+${whatsappNumber}`} className="text-neon-yellow hover:underline glitch-text">
                      +57 314 552 7342
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-yellow/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-neon-yellow" />
                  </div>
                  <div>
                    <p className="text-text-desaturated font-body">Ubicación</p>
                    <p className="text-neon-yellow glitch-text">Itagui, Antioquia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-br from-green-600/20 to-green-800/20 border-2 border-green-500/30 animate-pulse">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-headline text-green-400 mb-2">
                  ¿Prefieres WhatsApp?
                </h3>
                <p className="text-text-desaturated font-body mb-4">
                  Chatea directo con nosotros para una respuesta inmediata
                </p>
                <Button 
                  variant="neon" 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hola, me interesa conocer más sobre sus servicios`, '_blank')}
                  className="bg-green-500 hover:bg-green-400 text-cyber-black border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)]"
                >
                  <MessageCircle size={20} />
                  ABRIR WHATSAPP
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
