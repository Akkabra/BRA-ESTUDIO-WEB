'use client';

import { useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut
} from 'firebase/auth'; // Eliminado: createUserWithEmailAndPassword
import { auth } from '@/lib/firebase';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { BraLogo } from '@/components/bra-logo';
import { Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Redirigir solo si está cargado Y autenticado con el email de administrador
    if (!loading && user && user.email === 'braestudioweb@gmail.com') {
      router.push('/admin/portafolio');
    }
  }, [user, loading, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // 1. Siempre intenta INICIAR SESIÓN para un admin
      await signInWithEmailAndPassword(auth, email, password);
    } catch (signInError: any) {
      // 2. Si hay un error, solo muestra el error de inicio de sesión
      // NOTA: Eliminamos toda la lógica de registro (createUserWithEmailAndPassword)
      
      let errorMessage = "Error desconocido al iniciar sesión.";
      
      switch (signInError.code) {
        case 'auth/invalid-email':
          errorMessage = 'Formato de correo electrónico no válido.';
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          // Mostramos un error genérico para seguridad
          errorMessage = 'Correo o contraseña incorrectos.';
          break;
        case 'auth/api-key-not-valid':
          // Este es el error que ya corregimos, pero lo dejamos por si acaso
          errorMessage = 'Error de conexión con la API de Firebase. Vuelva a verificar las claves.';
          break;
        default:
          errorMessage = `Error: ${signInError.message}`;
      }
      
      setError(errorMessage);

    } finally {
      setIsSubmitting(false);
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
      <div className="w-full max-w-sm text-center flex flex-col items-center">
        <BraLogo className="h-20 w-auto mb-8" />
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
            <p className='text-text-desaturated'>Bienvenido, <span className='text-neon-yellow'>{user.email}</span></p>
            {user.email !== 'braestudioweb@gmail.com' ? (
              <p className='text-destructive'>No tienes permisos para acceder a esta área.</p>
            ): (
              <>
              <p className='text-green-400'>Redirigiendo al panel de administración...</p>
              <Loader2 className="mx-auto h-8 w-8 animate-spin text-neon-yellow" />
              </>
            )}
            <Button variant="outline" onClick={handleSignOut}>Cerrar Sesión</Button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-6 text-left w-full">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="text-neon-yellow/80">Email</Label>
              <Input 
                type="email" 
                id="email"
                placeholder="admin@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-cyber-black/50 border-neon-yellow/30 text-text-desaturated focus:border-neon-yellow focus:shadow-neon-intense"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">Contraseña</Label>
              <Input 
                type="password"
                id="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-cyber-black/50 border-neon-yellow/30 text-text-desaturated focus:border-neon-yellow focus:shadow-neon-intense"
              />
            </div>
            
            {error && <p className="text-destructive text-sm text-center">{error}</p>}
            
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="animate-spin" /> : 'ENTRAR'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}