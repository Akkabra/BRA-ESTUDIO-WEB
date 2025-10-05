import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '@/hooks/useAuth';
import { TooltipProvider } from '@/components/ui/tooltip'; 
import { Toaster } from '@/components/ui/toaster'; 

export const metadata: Metadata = {
  title: 'BRA ESTUDIO WEB - Diseño Web Sin Plantillas',
  description:
    'Transformamos tu visión digital en realidad. Especialistas en diseño web moderno y funcional.',
  openGraph: {
    title: 'BRA ESTUDIO WEB - Diseño Web Sin Plantillas',
    description:
      'Transformamos tu visión digital en realidad. Especialistas en diseño web moderno y funcional.',
    type: 'website',
    // Asegúrate de reemplazar esta URL con una imagen tuya, o subir la imagen al directorio /public
    images: ['https://lovable.dev/opengraph-image-p98png.png'], 
  },
  // La configuración de icons le dice a Next.js dónde buscar el favicon.ico
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
    // ¡IMPORTANTE! Hemos eliminado cualquier 'className' o referencia a fuentes externas. 
    // Esto fuerza al navegador a usar la fuente que tienes configurada en globals.css.
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