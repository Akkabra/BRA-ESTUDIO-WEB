'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Trash2, Loader2, Image as ImageIcon } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BraLogo } from '@/components/bra-logo';
import { useToast } from '@/hooks/use-toast';


interface Project {
    id: string;
    title: string;
    type: 'Web' | 'Branding' | 'App';
    description: string;
    longDescription?: string;
    image?: string;
    technologies?: string[];
    liveUrl?: string;
    codeUrl?: string;
    [key: string]: any;
}

const EditIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );


export default function PortfolioAdminPage() {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [formData, setFormData] = useState<Partial<Project>>({});
    const { toast } = useToast();

    useEffect(() => {
        if (!authLoading) {
            if (user && user.email === 'braestudioweb@gmail.com') {
                fetchProjects();
            } else {
                router.push('/login');
            }
        }
    }, [user, authLoading, router]);

    const fetchProjects = async () => {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "portafolio_proyectos"));
        const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Project[];
        setProjects(projectsData);
        setLoading(false);
    };

    const handleAddNew = () => {
        setEditingProject(null);
        setFormData({ type: 'Web', technologies: [] });
        setIsDialogOpen(true);
    };

    const handleEdit = (project: Project) => {
        setEditingProject(project);
        setFormData(project);
        setIsDialogOpen(true);
    };

    const handleDelete = async (projectId: string) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este proyecto? Esta acción no se puede deshacer.')) {
            try {
                await deleteDoc(doc(db, "portafolio_proyectos", projectId));
                await fetchProjects(); // Refresh list
                toast({ title: "Proyecto eliminado", description: "El proyecto ha sido eliminado exitosamente." });
            } catch (error) {
                console.error("Error deleting project: ", error);
                toast({ variant: "destructive", title: "Error", description: "No se pudo eliminar el proyecto." });
            }
        }
    };
    
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'technologies') {
            setFormData(prev => ({ ...prev, [name]: value.split(',').map(tech => tech.trim()) }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const dataToSave = {
                ...formData,
                updatedAt: serverTimestamp()
            };
    
            if (editingProject) {
                const projectDoc = doc(db, "portafolio_proyectos", editingProject.id);
                await updateDoc(projectDoc, dataToSave);
                toast({ title: "Proyecto actualizado", description: "Los cambios se han guardado exitosamente." });
            } else {
                await addDoc(collection(db, "portafolio_proyectos"), { ...dataToSave, createdAt: serverTimestamp() });
                toast({ title: "Proyecto creado", description: "El nuevo proyecto se ha añadido al portafolio." });
            }
            
            await fetchProjects();
            setIsDialogOpen(false);
            setEditingProject(null);
            setFormData({});
        } catch (error) {
            console.error("Error saving project:", error);
            toast({ variant: "destructive", title: "Error", description: "No se pudo guardar el proyecto." });
        }
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
        <header className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center gap-2 text-neon-yellow hover:text-white transition-colors group">
              <BraLogo className="h-12 w-auto neon-glow-subtle group-hover:neon-glow-intense transition-all" />
              <span className="font-headline hidden md:inline">Volver al Sitio</span>
            </Link>
          <div className="flex-1 flex justify-center items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-headline text-neon-yellow glitch" data-text="Admin Portafolio">
                Admin Portafolio
            </h1>
            <Link href="/admin/hero-gallery" passHref>
                <Button variant="outline" className="border-neon-yellow/50 text-neon-yellow/80 hover:bg-neon-yellow/10 hover:text-neon-yellow">
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Gestionar Galería Hero
                </Button>
            </Link>
          </div>
          <Button variant="hero" onClick={handleAddNew}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Añadir Nuevo Proyecto
          </Button>
        </header>

        <div className="bg-surface-dark/90 border border-neon-yellow/30 p-4 rounded-lg">
          {loading ? (
            <div className="flex justify-center items-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-neon-yellow"/>
                <p className="ml-4 text-neon-yellow">Cargando proyectos...</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-b-neon-yellow/20 hover:bg-surface-dark/50">
                  <TableHead className="text-neon-yellow font-headline">Título</TableHead>
                  <TableHead className="text-neon-yellow font-headline">Tipo</TableHead>
                  <TableHead className="text-right text-neon-yellow font-headline">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id} className="border-b-neon-yellow/10 hover:bg-neon-yellow/5">
                    <TableCell className="font-medium text-text-desaturated">{project.title}</TableCell>
                    <TableCell className="text-text-desaturated/80">{project.type}</TableCell>
                    <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="text-neon-yellow/80 hover:text-white transition-all duration-300 transform hover:scale-110" onClick={() => handleEdit(project)}>
                        <EditIcon className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive/80 hover:text-destructive" onClick={() => handleDelete(project.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
      
       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-md md:max-w-2xl bg-surface-dark border border-neon-yellow/30 text-text-desaturated">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-headline text-neon-yellow">
                        {editingProject ? 'Editar Proyecto' : 'Añadir Nuevo Proyecto'}
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto pr-2">
                    <div className='grid gap-2'>
                        <Label htmlFor="title" className="text-neon-yellow/80">Título</Label>
                        <Input id="title" name="title" value={formData.title || ''} onChange={handleFormChange} className="bg-cyber-black/50 border-neon-yellow/30" required />
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor="type" className="text-neon-yellow/80">Tipo</Label>
                         <select id="type" name="type" value={formData.type || ''} onChange={handleFormChange} className="w-full p-2 bg-cyber-black/50 border border-neon-yellow/30 rounded-md text-text-desaturated focus:border-neon-yellow focus:outline-none focus:shadow-neon-intense transition-all duration-300 font-body">
                            <option value="Web">Web</option>
                            <option value="Branding">Branding</option>
                            <option value="App">App</option>
                        </select>
                    </div>
                     <div className='grid gap-2'>
                        <Label htmlFor="description" className="text-neon-yellow/80">Descripción Corta</Label>
                        <Textarea id="description" name="description" value={formData.description || ''} onChange={handleFormChange} className="bg-cyber-black/50 border-neon-yellow/30" required/>
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor="longDescription" className="text-neon-yellow/80">Descripción Larga</Label>
                        <Textarea id="longDescription" name="longDescription" value={formData.longDescription || ''} onChange={handleFormChange} className="bg-cyber-black/50 border-neon-yellow/30" rows={4}/>
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor="technologies" className="text-neon-yellow/80">Tecnologías (separadas por coma)</Label>
                        <Input id="technologies" name="technologies" value={(formData.technologies || []).join(', ')} onChange={handleFormChange} className="bg-cyber-black/50 border-neon-yellow/30" />
                    </div>
                     <div className='grid gap-2'>
                        <Label htmlFor="liveUrl" className="text-neon-yellow/80">URL del Sitio</Label>
                        <Input id="liveUrl" name="liveUrl" value={formData.liveUrl || ''} onChange={handleFormChange} className="bg-cyber-black/50 border-neon-yellow/30" />
                    </div>
                     <div className='grid gap-2'>
                        <Label htmlFor="codeUrl" className="text-neon-yellow/80">URL del Repositorio</Label>
                        <Input id="codeUrl" name="codeUrl" value={formData.codeUrl || ''} onChange={handleFormChange} className="bg-cyber-black/50 border-neon-yellow/30" />
                    </div>
                     <div className='grid gap-2'>
                        <Label htmlFor="image" className="text-neon-yellow/80">URL de la Imagen</Label>
                        <Input id="image" name="image" value={formData.image || ''} onChange={handleFormChange} className="bg-cyber-black/50 border-neon-yellow/30" placeholder="https://ejemplo.com/imagen.png" />
                        {formData.image && (
                           <div className="mt-2 relative w-full h-32">
                             <Image src={formData.image} alt="Vista previa" fill className="object-contain rounded-md" />
                           </div>
                        )}
                    </div>
                    <DialogFooter className="mt-4">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit" variant="hero">
                            {editingProject ? 'Guardar Cambios' : 'Crear Proyecto'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </div>
  );
}
    

    




