'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Loader2, Send, BrainCircuit, ArrowLeft, Bot, Sparkles, Wand2, Rocket } from 'lucide-react';
import { BraLogo } from '@/components/bra-logo';
import { generateFaqAnswer } from '@/ai/flows/faq-flow';
import { analyzeProjectBriefing, BriefingOutput } from '@/ai/flows/briefing-analyzer-flow';
import { useToast } from '@/hooks/use-toast';
import { Typewriter } from '@/components/typewriter';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function IaPage() {
  // FAQ State
  const [faqQuestion, setFaqQuestion] = useState('');
  const [faqAnswer, setFaqAnswer] = useState('');
  const [isFaqLoading, setIsFaqLoading] = useState(false);

  // Briefing Analyzer State
  const [briefingDescription, setBriefingDescription] = useState('');
  const [briefingAnalysis, setBriefingAnalysis] = useState<BriefingOutput | null>(null);
  const [isBriefingLoading, setIsBriefingLoading] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const handleFaqSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!faqQuestion.trim()) return;

    setIsFaqLoading(true);
    setFaqAnswer('');
    
    try {
      const currentQuestion = faqQuestion;
      setFaqQuestion('');
      const result = await generateFaqAnswer({ question: currentQuestion });
      setFaqAnswer(result.answer);
    } catch (error) {
      console.error('Error in FAQ query:', error);
      toast({
        variant: 'destructive',
        title: 'Error de Conexión',
        description: 'No se pudo establecer la conexión con la matriz de la IA. Intente de nuevo.',
      });
    } finally {
      setIsFaqLoading(false);
    }
  };
  
  const handleBriefingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!briefingDescription.trim()) return;

    setIsBriefingLoading(true);
    setBriefingAnalysis(null);
    
    try {
      const result = await analyzeProjectBriefing({ projectDescription: briefingDescription });
      setBriefingAnalysis(result);
    } catch (error) {
      console.error('Error in Briefing Analysis:', error);
      toast({
        variant: 'destructive',
        title: 'Error de Análisis',
        description: 'La unidad de análisis no pudo procesar la solicitud. Verifique la conexión.',
      });
    } finally {
      setIsBriefingLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground cyber-grain">
      <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/80 backdrop-blur-lg border-b border-neon-yellow/20 p-3 sm:p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" aria-label="Volver al inicio">
            <BraLogo className="h-7 sm:h-8 w-auto" />
          </Link>
          <Button variant="outline" onClick={() => router.back()} className="border-neon-yellow/50 text-neon-yellow/80 hover:bg-neon-yellow/10 hover:text-neon-yellow text-xs sm:text-sm px-3 sm:px-4">
            <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Volver
          </Button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 pt-24 sm:pt-20">
        <motion.div 
          className="w-full max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8" variants={itemVariants}>
            <div className="mb-4 flex justify-center items-center gap-3 sm:gap-4">
              <BrainCircuit className="h-10 w-10 sm:h-12 sm:w-12 text-neon-yellow" />
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-headline bg-gradient-neon text-transparent bg-clip-text glitch"
                data-text="IA BRA: Soporte & Estrategia"
              >
                IA BRA: Soporte & Estrategia
              </h1>
            </div>
            <p className="text-sm sm:text-base text-text-desaturated font-body">
              Dos unidades IA especializadas para asistirte. Elige tu protocolo.
            </p>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants} className="w-full max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl font-headline text-neon-yellow/90 mb-4 flex items-center justify-center gap-3">
              <Bot /> Preguntas Frecuentes
            </h2>
            <form onSubmit={handleFaqSubmit} className="mb-4 flex gap-2">
              <Input
                type="text"
                value={faqQuestion}
                onChange={(e) => setFaqQuestion(e.target.value)}
                placeholder="Realiza una consulta directa..."
                disabled={isFaqLoading}
                className="flex-grow bg-cyber-black/50 border-2 border-neon-yellow/30 text-text-desaturated placeholder:text-text-desaturated/50 focus:border-neon-yellow focus:shadow-neon-intense"
              />
              <Button type="submit" variant="hero" size="icon" disabled={isFaqLoading}>
                {isFaqLoading ? <Loader2 className="animate-spin" /> : <Send />}
              </Button>
            </form>
            <div className="min-h-[100px] w-full bg-surface-dark/80 border border-neon-yellow/20 rounded-lg p-4 text-left font-code text-neon-yellow shadow-neon-subtle text-sm">
              {isFaqLoading ? (
                <div className="flex items-center gap-3">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span className="animate-text-flicker">Procesando consulta...</span>
                </div>
              ) : faqAnswer ? (
                <Typewriter text={faqAnswer} />
              ) : (
                <p className="text-neon-yellow/50 animate-pulse">Esperando transmisión de datos...</p>
              )}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Separator className="bg-neon-yellow/30 my-12" />
          </motion.div>

          {/* Briefing Analyzer Section */}
          <motion.div variants={itemVariants} className="w-full">
             <h2 className="text-2xl font-headline text-neon-yellow/90 mb-4 flex items-center justify-center gap-3">
              <Wand2 /> Analizador de Briefing Neón
            </h2>
             <form onSubmit={handleBriefingSubmit} className="mb-4 flex flex-col gap-4">
              <Textarea
                value={briefingDescription}
                onChange={(e) => setBriefingDescription(e.target.value)}
                placeholder="Introduce la descripción de tu proyecto aquí para un análisis estratégico..."
                disabled={isBriefingLoading}
                rows={4}
                className="bg-cyber-black/50 border-2 border-neon-yellow/30 text-text-desaturated placeholder:text-text-desaturated/50 focus:border-neon-yellow focus:shadow-neon-intense font-body"
              />
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isBriefingLoading}>
                {isBriefingLoading ? <Loader2 className="animate-spin" /> : <><Sparkles className="mr-2"/> Iniciar Análisis de Datos</>}
              </Button>
            </form>
            <div className="min-h-[200px] w-full bg-surface-dark/80 border border-neon-yellow/20 rounded-lg p-6 text-left shadow-neon-subtle">
              {isBriefingLoading ? (
                <div className="flex items-center gap-3 text-neon-yellow">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span className="animate-text-flicker font-code">Analizando matriz del proyecto...</span>
                </div>
              ) : briefingAnalysis ? (
                 <div className="space-y-4 font-body text-text-desaturated">
                    {briefingAnalysis.functionalityCores.length === 0 ? (
                        <p className='text-neon-yellow font-code'>{briefingAnalysis.projectMatrix}</p>
                    ) : (
                        <>
                            <div>
                                <h3 className="font-headline text-lg text-neon-yellow mb-2">[1] MATRIZ DEL PROYECTO</h3>
                                <p>{briefingAnalysis.projectMatrix}</p>
                            </div>
                            <div>
                                <h3 className="font-headline text-lg text-neon-yellow mb-2">[2] NÚCLEOS DE FUNCIONALIDAD IDENTIFICADOS</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    {briefingAnalysis.functionalityCores.map((core, index) => (
                                        <li key={index}>{core}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-headline text-lg text-neon-yellow mb-2">[3] PASO SIGUIENTE SUGERIDO</h3>
                                <p className='italic'>{briefingAnalysis.nextStep}</p>
                            </div>
                             <div className="pt-6 text-center">
                                <Link href="/#contacto" passHref>
                                  <Button variant="hero" size="lg" className="animate-pulse">
                                    <Rocket className="mr-2 h-5 w-5" />
                                    INICIAR PROYECTO
                                  </Button>
                                </Link>
                              </div>
                        </>
                    )}
                 </div>
              ) : (
                <p className="text-neon-yellow/50 animate-pulse font-code">Esperando briefing para análisis...</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
