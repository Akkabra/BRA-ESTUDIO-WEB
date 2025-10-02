import type { Metadata } from 'next';
import './globals.css';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/useAuth.tsx';

export const metadata: Metadata = {
  title:
    'BRA ESTUDIO WEB - Diseño Web Sin Plantillas | Experiencias Digitales Únicas',
  description:
    'Transformamos tu visión digital en realidad. Especialistas en desarrollo web, branding y apps móviles. Diseño personalizado sin plantillas. ¡Contáctanos!',
  authors: [{ name: 'BRA ESTUDIO WEB' }],
  openGraph: {
    title: 'BRA ESTUDIO WEB - Diseño Web Sin Plantillas',
    description:
      'Transformamos tu visión digital en realidad. Especialistas en desarrollo web, branding y apps móviles.',
    type: 'website',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@braestudioweb',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cyberjunkies&family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased cyber-grain">
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
