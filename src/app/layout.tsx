import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '@/hooks/useAuth'; 
import { TooltipProvider } from '@/components/ui/tooltip'; 
import { Toaster } from '@/components/ui/toaster'; 
import { Inter, Orbitron } from 'next/font/google';
import { cn } from '@/lib/utils';
import LiveChatTerminal from '@/components/live-chat-terminal';
import FirebaseErrorListener from '@/components/FirebaseErrorListener';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron', weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'BRA ESTUDIO WEB - Diseño Web Sin Plantillas',
  description:
    'Transformamos tu visión digital en realidad. Especialistas en diseño web moderno y funcional.',
  openGraph: {
    title: 'BRA ESTUDIO WEB - Diseño Web Sin Plantillas',
    description:
      'Transformamos tu visión digital en realidad. Especialistas en diseño web moderno y funcional.',
    type: 'website',
    images: ['https://lovable.dev/opengraph-image-p98png.png'], 
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={cn(inter.variable, orbitron.variable)}>
        <AuthProvider>
          <TooltipProvider>
            <FirebaseErrorListener />
            {children}
            <Toaster />
            <LiveChatTerminal />
          </TooltipProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
