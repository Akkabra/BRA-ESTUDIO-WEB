'use client';

import { useState, useEffect } from 'react';
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
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';


// NOTE: This is a placeholder for the full project type.
// You should expand this to match the data model for your projects.
interface Project {
    id: string;
    title: string;
    type: 'Web' | 'Branding' | 'App';
    description: string;
    [key: string]: any; // Allow other fields
}


export default function PortfolioAdminPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [formData, setFormData] = useState<Partial<Project>>({});

    const fetchProjects = async () => {
        setLoading(true);
        // TODO: Implement user authentication check here.
        // This is a placeholder. In a real app, you'd fetch from Firestore.
        const querySnapshot = await getDocs(collection(db, "portafolio_proyectos"));
        const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Project[];
        setProjects(projectsData);
        setLoading(false);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleAddNew = () => {
        setEditingProject(null);
        setFormData({});
        setIsDialogOpen(true);
    };

    const handleEdit = (project: Project) => {
        setEditingProject(project);
        setFormData(project);
        setIsDialogOpen(true);
    };

    const handleDelete = async (projectId: string) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
            // TODO: Implement delete logic with Firestore
            console.log('Deleting project:', projectId);
            await deleteDoc(doc(db, "portafolio_proyectos", projectId));
            await fetchProjects(); // Refresh list
        }
    };
    
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Add form validation (e.g., with Zod)
        
        if (editingProject) {
            // Update existing project
            console.log('Updating project:', editingProject.id, formData);
             const projectDoc = doc(db, "portafolio_proyectos", editingProject.id);
             await updateDoc(projectDoc, formData);

        } else {
            // Create new project
            console.log('Creating new project:', formData);
            await addDoc(collection(db, "portafolio_proyectos"), formData);
        }
        
        await fetchProjects(); // Refresh list
        setIsDialogOpen(false);
        setEditingProject(null);
        setFormData({});
    };

  return (
    <div className="min-h-screen bg-background text-foreground cyber-grain p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-headline text-neon-yellow glitch" data-text="Admin Portafolio">
            Admin Portafolio
          </h1>
          <Button variant="hero" onClick={handleAddNew}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Añadir Nuevo Proyecto
          </Button>
        </header>

        {/* Projects Table */}
        <div className="bg-surface-dark/90 border border-neon-yellow/30 p-4 rounded-lg">
          {loading ? (
            <p className="text-center text-neon-yellow">Cargando proyectos...</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-b-neon-yellow/20 hover:bg-surface-dark/50">
                  <TableHead className="text-neon-yellow font-headline">Título</TableHead>
                  <TableHead className="text-neon-yellow font-headline">Tipo</TableHead>
                  <TableHead className="text-neon-yellow font-headline">Descripción</TableHead>
                  <TableHead className="text-right text-neon-yellow font-headline">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id} className="border-b-neon-yellow/10 hover:bg-neon-yellow/5">
                    <TableCell className="font-medium text-text-desaturated">{project.title}</TableCell>
                    <TableCell className="text-text-desaturated/80">{project.type}</TableCell>
                    <TableCell className="text-text-desaturated/80 max-w-sm truncate">{project.description}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="text-neon-yellow/80 hover:text-neon-yellow" onClick={() => handleEdit(project)}>
                        <Edit className="h-4 w-4" />
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
      
      {/* Add/Edit Dialog */}
       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-md md:max-w-2xl bg-surface-dark border border-neon-yellow/30 text-text-desaturated">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-headline text-neon-yellow">
                        {editingProject ? 'Editar Proyecto' : 'Añadir Nuevo Proyecto'}
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-6 py-4">
                    {/* Form Fields */}
                    <div>
                        <Label htmlFor="title" className="text-neon-yellow/80">Título</Label>
                        <Input id="title" name="title" value={formData.title || ''} onChange={handleFormChange} className="bg-cyber-black/50 border-neon-yellow/30" />
                    </div>
                    <div>
                        <Label htmlFor="type" className="text-neon-yellow/80">Tipo</Label>
                         <select id="type" name="type" value={formData.type || ''} onChange={handleFormChange} className="w-full p-3 bg-cyber-black/50 border border-neon-yellow/30 rounded-md text-text-desaturated focus:border-neon-yellow focus:outline-none focus:shadow-neon-intense transition-all duration-300 font-body">
                            <option value="">Selecciona un tipo</option>
                            <option value="Web">Web</option>
                            <option value="Branding">Branding</option>
                            <option value="App">App</option>
                        </select>
                    </div>
                     <div>
                        <Label htmlFor="description" className="text-neon-yellow/80">Descripción Corta</Label>
                        <Textarea id="description" name="description" value={formData.description || ''} onChange={handleFormChange} className="bg-cyber-black/50 border-neon-yellow/30" />
                    </div>
                    <div>
                        <Label htmlFor="longDescription" className="text-neon-yellow/80">Descripción Larga</Label>
                        <Textarea id="longDescription" name="longDescription" value={formData.longDescription || ''} onChange={handleFormChange} className="bg-cyber-black/50 border-neon-yellow/30" />
                    </div>
                     <div>
                        <Label htmlFor="image" className="text-neon-yellow/80">URL de Imagen</Label>
                        <Input id="image" name="image" value={formData.image || ''} onChange={handleFormChange} className="bg-cyber-black/50 border-neon-yellow/30" />
                    </div>
                    {/* Add other fields like technologies, liveUrl, codeUrl etc. */}

                    <DialogFooter>
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
