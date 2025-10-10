'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, MessageSquare, Send, X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { generateChatAnswer } from '@/ai/flows/bra-chat-flow';
import { useToast } from '@/hooks/use-toast';
import { Typewriter } from './typewriter';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

const LiveChatTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: 'Hola, soy el asistente virtual de BRA ESTUDIO WEB. ¿En qué puedo ayudarte hoy?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await generateChatAnswer({ question: input });
      const aiMessage: Message = { sender: 'ai', text: result.answer };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error processing query:', error);
      toast({
        variant: 'destructive',
        title: 'Error de Conexión',
        description: 'No se pudo establecer la conexión con la unidad IA. Intente de nuevo.',
      });
       const errorMessage: Message = { sender: 'ai', text: 'ERROR: No se pudo procesar la solicitud. La conexión a la matriz es inestable.' };
       setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showButton && (
            <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                        size="icon"
                        variant="hero"
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-full w-14 h-14 shadow-neon-intense animate-pulse"
                        aria-label="Abrir terminal de chat"
                    >
                        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
                    </Button>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-40 w-[90vw] max-w-sm h-[60vh] max-h-[500px] flex flex-col"
          >
            <div className="flex-grow flex flex-col bg-surface-dark/95 border-2 border-neon-yellow/50 rounded-lg shadow-neon-intense backdrop-blur-md overflow-hidden">
              <header className="p-4 border-b border-neon-yellow/20 flex items-center gap-3">
                <Bot className="text-neon-yellow" />
                <h3 className="font-headline text-lg bg-gradient-neon text-transparent bg-clip-text">
                  Terminal de Conexión BRA
                </h3>
              </header>

              <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={cn('flex items-end gap-2', {
                        'justify-end': message.sender === 'user',
                        'justify-start': message.sender === 'ai',
                      })}
                    >
                      <div
                        className={cn('max-w-[80%] rounded-lg px-3 py-2 text-sm', {
                          'bg-neon-yellow/80 text-cyber-black font-medium': message.sender === 'user',
                          'bg-cyber-black/70 text-neon-yellow font-code': message.sender === 'ai',
                        })}
                      >
                         {message.sender === 'ai' ? (
                            <Typewriter text={message.text} speed={20} />
                         ) : (
                            message.text
                         )}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                     <div className="flex items-end gap-2 justify-start">
                        <div className="bg-cyber-black/70 text-neon-yellow font-code rounded-lg px-3 py-2 text-sm">
                            <div className="flex items-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin"/>
                                <span className="animate-pulse">Procesando datos...</span>
                            </div>
                        </div>
                     </div>
                  )}
                </div>
              </ScrollArea>

              <form onSubmit={handleSubmit} className="p-4 border-t border-neon-yellow/20 flex gap-2">
                <Input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Inicie interrogatorio de datos..."
                  disabled={isLoading}
                  className="flex-grow bg-cyber-black/50 border-2 border-neon-yellow/30 text-text-desaturated placeholder:text-text-desaturated/50 focus:border-neon-yellow focus:shadow-neon-intense"
                />
                <Button type="submit" variant="hero" size="icon" disabled={isLoading}>
                  {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChatTerminal;
