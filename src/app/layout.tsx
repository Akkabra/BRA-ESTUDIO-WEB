import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Si usas la fuente Inter
import { AuthProvider } from '@/hooks/useAuth'; // La ruta corregida
import { TooltipProvider } from '@/components/ui/tooltip'; // Asumiendo que es la ruta correcta
import { Toaster } from '@/components/ui/toaster'; // Asumiendo que es la ruta correcta

// Si no usas la fuente Inter, puedes eliminar esto y usar tu fuente personalizada
const inter = Inter({ subsets: ['latin'] });

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
    <html lang="es" className={inter.className}>
      <body>
        {/* Aquí envolvemos toda la app con los Providers */}
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