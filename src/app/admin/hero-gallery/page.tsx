'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, Trash2, Loader2, Image as ImageIcon } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BraLogo } from '@/components/bra-logo';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { optimizeCloudinaryImage } from '@/lib/utils';
import { FirestorePermissionError, type SecurityRuleContext } from '@/firebase/errors';
import { errorEmitter } from '@/firebase/error-emitter';

interface HeroImage {
    id: string;
    imageUrl: string;
    createdAt?: any;
}

export default function HeroGalleryAdminPage() {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const [images, setImages] = useState<HeroImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState<{ imageUrl: string }>({ imageUrl: '' });
    const { toast } = useToast();

    useEffect(() => {
        if (!authLoading) {
            if (user && user.email === 'braestudioweb@gmail.com') {
                fetchImages();
            } else {
                router.push('/login');
            }
        }
    }, [user, authLoading, router]);

    const fetchImages = async () => {
        setLoading(true);
        const heroCollectionRef = collection(db, "hero_backgrounds");
        
        getDocs(query(heroCollectionRef, orderBy('createdAt', 'desc')))
          .then(querySnapshot => {
            const imagesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as HeroImage[];
            setImages(imagesData);
            setLoading(false);
          })
          .catch(serverError => {
            const permissionError = new FirestorePermissionError({
                path: heroCollectionRef.path,
                operation: 'list',
            } satisfies SecurityRuleContext);
            errorEmitter.emit('permission-error', permissionError);
            setLoading(false);
          });
    };

    const handleAddNew = () => {
        setFormData({ imageUrl: '' });
        setIsDialogOpen(true);
    };

    const handleDelete = async (imageId: string) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar esta imagen?')) {
            const docRef = doc(db, "hero_backgrounds", imageId);
            deleteDoc(docRef)
              .then(() => {
                fetchImages();
                toast({ title: "Imagen eliminada", description: "La imagen ha sido eliminada de la galería." });
              })
              .catch(serverError => {
                const permissionError = new FirestorePermissionError({
                    path: docRef.path,
                    operation: 'delete',
                } satisfies SecurityRuleContext);
                errorEmitter.emit('permission-error', permissionError);
              });
        }
    };
    
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const dataToSave = { 
            imageUrl: formData.imageUrl, 
            createdAt: serverTimestamp() 
        };

        const collectionRef = collection(db, "hero_backgrounds");
        addDoc(collectionRef, dataToSave)
          .then(() => {
            toast({ title: "Imagen añadida", description: "La nueva imagen se ha añadido a la galería del Hero." });
            fetchImages();
            setIsDialogOpen(false);
            setFormData({ imageUrl: '' });
          })
          .catch(serverError => {
            const permissionError = new FirestorePermissionError({
                path: collectionRef.path,
                operation: 'create',
                requestResourceData: dataToSave
            } satisfies SecurityRuleContext);
            errorEmitter.emit('permission-error', permissionError);
          });
    };

    if (authLoading || !user) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-background text-neon-yellow space-y-4">
                 <div className='flex justify-center w-full'>
                    <BraLogo className="h-20 w-auto mx-auto" />
                </div>
                <Loader2 className="h-16 w-16 animate-spin" />
            </div>
        );
    }

    return (
    <div className="min-h-screen bg-background text-foreground cyber-grain p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <Link href="/admin/portafolio" className="flex items-center gap-2 text-neon-yellow hover:text-white transition-colors group">
              <BraLogo className="h-10 w-auto neon-glow-subtle group-hover:neon-glow-intense transition-all" />
              <span className="font-headline hidden md:inline">Admin Portafolio</span>
            </Link>
          <h1 className="text-3xl md:text-4xl font-headline bg-gradient-neon text-transparent bg-clip-text glitch flex-1 text-center" data-text="Galería Hero">
            Galería Hero
          </h1>
          <Button variant="hero" onClick={handleAddNew} className="w-full md:w-auto">
            <PlusCircle className="mr-2 h-4 w-4" />
            Añadir Nueva Imagen
          </Button>
        </header>

        <div className="bg-surface-dark/90 border border-neon-yellow/30 p-4 rounded-lg">
          {loading ? (
            <div className="flex justify-center items-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-neon-yellow"/>
                <p className="ml-4 text-neon-yellow">Cargando imágenes...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image) => (
                  <Card key={image.id} className="relative group overflow-hidden border-neon-yellow/20 bg-cyber-black">
                     <CardContent className="p-0">
                        <Image src={optimizeCloudinaryImage(image.imageUrl)} alt="Imagen de fondo del hero" width={400} height={225} className="w-full h-40 object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button variant="destructive" size="icon" onClick={() => handleDelete(image.id)}>
                                <Trash2 className="h-5 w-5" />
                            </Button>
                        </div>
                     </CardContent>
                  </Card>
                ))}
            </div>
          )}
           {!loading && images.length === 0 && (
                <div className="text-center py-16 text-text-desaturated">
                    <ImageIcon className="mx-auto h-12 w-12 text-neon-yellow/50 mb-4" />
                    <h3 className="text-xl font-headline text-neon-yellow">Galería Vacía</h3>
                    <p className="mt-2 font-body">Añade tu primera imagen de fondo para el Hero.</p>
                </div>
            )}
        </div>
      </div>
      
       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="w-full max-w-[95vw] md:max-w-md bg-surface-dark border border-neon-yellow/30 text-text-desaturated">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-headline bg-gradient-neon text-transparent bg-clip-text">
                        Añadir Nueva Imagen al Hero
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className='grid gap-2'>
                        <Label htmlFor="imageUrl" className="text-neon-yellow/80">URL de la Imagen</Label>
                        <Input id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleFormChange} className="bg-cyber-black/50 border-neon-yellow/30" placeholder="https://ejemplo.com/imagen.png" required />
                        {formData.imageUrl && (
                           <div className="mt-2 relative w-full h-32">
                             <Image src={optimizeCloudinaryImage(formData.imageUrl)} alt="Vista previa" fill className="object-contain rounded-md" />
                           </div>
                        )}
                    </div>
                    <DialogFooter className="mt-4 flex-col sm:flex-row gap-2">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" className="w-full sm:w-auto">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit" variant="hero" className="w-full sm:w-auto">
                            Añadir Imagen
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </div>
  );
}
