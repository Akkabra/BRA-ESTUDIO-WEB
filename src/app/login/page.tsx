'use client';

import { useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { BraLogo } from '@/components/bra-logo';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // TEMPORARY: Log the hostname to help debug the unauthorized-domain error.
    if (typeof window !== 'undefined') {
      console.log("Authorization Domain Check:", window.location.hostname);
    }

    if (!loading && user && user.email === 'braestudioweb@gmail.com') {
      router.push('/admin/portafolio');
    }
  }, [user, loading, router]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleSignOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error signing out", error);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground cyber-grain p-4">
        <div className="w-full max-w-sm text-center">
            <BraLogo className="h-20 w-auto mx-auto mb-8" />
            <h1 className="text-3xl font-headline text-neon-yellow mb-4 glitch" data-text="Admin Login">
                Admin Login
            </h1>
            <p className="text-text-desaturated mb-8">
                Acceso exclusivo para administración de portafolio.
            </p>

            {loading ? (
                <Loader2 className="mx-auto h-8 w-8 animate-spin text-neon-yellow" />
            ) : user ? (
                <div className='space-y-4'>
                    <p className='text-text-desaturated'>Bienvenido, <span className='text-neon-yellow'>{user.displayName || user.email}</span></p>
                    {user.email !== 'braestudioweb@gmail.com' ? (
                        <p className='text-destructive'>No tienes permisos para acceder a esta área.</p>
                    ): (
                        <p className='text-green-400'>Redirigiendo al panel de administración...</p>
                    )}
                    <Button variant="outline" onClick={handleSignOut}>Cerrar Sesión</Button>
                </div>
            ) : (
                <Button variant="hero" size="lg" onClick={signInWithGoogle}>
                    <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 21.2 173.4 58.2L359.3 127.4c-24.3-23.8-58.2-38.2-99.3-38.2-83.8 0-151.8 68.1-151.8 151.8s68 151.8 151.8 151.8c90.3 0 134-62.1 140.3-94.8H248v-69.2h239.2c1.4 12.9 2.2 26.4 2.8 40.8z"></path></svg>
                    Iniciar Sesión con Google
                </Button>
            )}
        </div>
    </div>
  );
}
