import './globals.css';
import type { Metadata } from 'next';
// Asegúrate de que esta ruta sea correcta:
import { AuthProvider } from '@/hooks/useAuth'; 
import { TooltipProvider } from '@/components/ui/tooltip'; 
import { Toaster } from '@/components/ui/toaster'; 

// Se ha eliminado toda importación o referencia a fuentes genéricas como 'Inter'.
// Tu fuente personalizada se cargará desde 'globals.css'.

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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ¡IMPORTANTE! No hay ninguna clase de fuente aquí. El control está en tu CSS.
    <html lang="es">
      <body>
        <AuthProvider>
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </AuthProvider>
      </body>
    </html>
  );
}