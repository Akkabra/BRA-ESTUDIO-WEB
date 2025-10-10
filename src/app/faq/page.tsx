'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Send, BrainCircuit, ArrowLeft } from 'lucide-react';
import { BraLogo } from '@/components/bra-logo';
import { generateFaqAnswer } from '@/ai/flows/faq-flow';
import { useToast } from '@/hooks/use-toast';
import { Typewriter } from '@/components/typewriter';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';


export default function FaqPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer('');
    
    try {
      const currentQuestion = question;
      setQuestion(''); // Clear input after submit
      const result = await generateFaqAnswer({ question: currentQuestion });
      setAnswer(result.answer);
    } catch (error) {
      console.error('Error processing query:', error);
      toast({
        variant: 'destructive',
        title: 'Error de Conexión',
        description: 'No se pudo establecer la conexión con la matriz de la IA. Intente de nuevo.',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground cyber-grain">
        <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/80 backdrop-blur-lg border-b border-neon-yellow/20 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" aria-label="Volver al inicio">
                    <BraLogo className="h-8 w-auto" />
                </Link>
                <Button variant="outline" onClick={() => router.back()} className="border-neon-yellow/50 text-neon-yellow/80 hover:bg-neon-yellow/10 hover:text-neon-yellow">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver
                </Button>
            </div>
        </header>

      <main className="flex-1 flex items-center justify-center p-4 pt-20">
        <motion.div 
            className="w-full max-w-2xl text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          <div className="mb-8 flex justify-center items-center gap-4">
            <BrainCircuit className="h-12 w-12 text-neon-yellow" />
            <h1
              className="text-4xl md:text-5xl font-headline bg-gradient-neon text-transparent bg-clip-text glitch"
              data-text="BRA AI"
            >
              BRA AI
            </h1>
          </div>
          <p className="text-text-desaturated mb-8 font-body">
            Conectado a la matriz de BRA ESTUDIO WEB. Realiza tu consulta.
          </p>

          <form onSubmit={handleSubmit} className="mb-8 flex gap-2">
            <Input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ej: ¿Cuál es su proceso de diseño web?"
              disabled={isLoading}
              className="flex-grow bg-cyber-black/50 border-2 border-neon-yellow/30 text-text-desaturated placeholder:text-text-desaturated/50 focus:border-neon-yellow focus:shadow-neon-intense"
            />
            <Button type="submit" variant="hero" size="icon" disabled={isLoading}>
              {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
            </Button>
          </form>

          <div className="min-h-[150px] w-full bg-surface-dark/80 border border-neon-yellow/20 rounded-lg p-6 text-left font-code text-neon-yellow shadow-neon-subtle">
            {isLoading ? (
              <div className="flex items-center gap-3">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span className="animate-text-flicker">Procesando consulta en la red...</span>
              </div>
            ) : answer ? (
              <Typewriter text={answer} />
            ) : (
              <p className="text-neon-yellow/50 animate-pulse">Esperando transmisión de datos...</p>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
