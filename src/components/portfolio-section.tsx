'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code, Search } from 'lucide-react';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

interface Project {
  id: number;
  title: string;
  type: 'Web' | 'Branding' | 'App';
  description: string;
  longDescription: string;
  image: string;
  imageHint: string;
  technologies: string[];
  developmentTime: string;
  liveUrl?: string;
  codeUrl?: string;
}

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const portfolioImageMap = PlaceHolderImages.reduce((acc, img) => {
    acc[img.id] = img;
    return acc;
  }, {} as Record<string, ImagePlaceholder>);

  const projectsData: Omit<Project, 'image' | 'imageHint'>[] = [
    {
      id: 1,
      title: "E-commerce Moderno",
      type: "Web",
      description: "Tienda online completa con carrito de compras",
      longDescription: "Desarrollo completo de e-commerce con sistema de pagos integrado, gestión de inventario, panel administrativo y optimización SEO. Incluye diseño responsive y animaciones avanzadas.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      developmentTime: "8 semanas",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "Identidad Visual Restaurante",
      type: "Branding",
      description: "Branding completo para cadena de restaurantes",
      longDescription: "Desarrollo de identidad visual completa incluyendo logo, paleta de colores, tipografías, papelería corporativa y aplicaciones en diferentes medios. Incluye manual de marca detallado.",
      technologies: ["Illustrator", "Photoshop", "InDesign"],
      developmentTime: "4 semanas"
    },
    {
      id: 3,
      title: "App Delivery",
      type: "App",
      description: "Aplicación móvil para delivery de comida",
      longDescription: "Aplicación móvil nativa para iOS y Android con sistema de pedidos en tiempo real, tracking GPS, pagos integrados y panel administrativo para restaurantes.",
      technologies: ["React Native", "Firebase", "Stripe"],
      developmentTime: "12 semanas",
      liveUrl: "https://play.google.com/store"
    },
    {
      id: 4,
      title: "Landing Page Corporativa",
      type: "Web",
      description: "Sitio web corporativo con animaciones",
      longDescription: "Desarrollo de landing page corporativa con animaciones CSS avanzadas, optimización SEO, formularios de contacto y integración con CRM. Diseño completamente responsive.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      developmentTime: "3 semanas",
      liveUrl: "https://example-corp.com"
    },
    {
      id: 5,
      title: "Logo & Branding Tech",
      type: "Branding",
      description: "Identidad para startup tecnológica",
      longDescription: "Creación de identidad visual para startup tecnológica, incluyendo naming, logo, aplicaciones digitales y estrategia de marca. Enfoque en transmitir innovación y confianza.",
      technologies: ["Illustrator", "After Effects", "Figma"],
      developmentTime: "6 semanas"
    },
    {
      id: 6,
      title: "App Fitness",
      type: "App",
      description: "Aplicación de entrenamiento personal",
      longDescription: "App móvil para entrenamiento personal con rutinas personalizadas, tracking de progreso, comunidad social y integración con wearables. Incluye versión web complementaria.",
      technologies: ["Flutter", "Node.js", "PostgreSQL"],
      developmentTime: "16 semanas",
      liveUrl: "https://fitness-app.com"
    }
  ];

  const imageKeys = Object.keys(portfolioImageMap);
  
  const projects: Project[] = projectsData.map((p, i) => {
    const imageKey = imageKeys[i % imageKeys.length];
    const imageData = portfolioImageMap[imageKey];
    return {
      ...p,
      image: imageData.imageUrl,
      imageHint: imageData.imageHint
    }
  });


  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.type === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const filterTypes = [
    { key: 'all', label: 'Todos', icon: '🔄' },
    { key: 'Web', label: 'Web', icon: '🌐' },
    { key: 'Branding', label: 'Branding', icon: '🎨' },
    { key: 'App', label: 'Apps', icon: '📱' }
  ];

  return (
    <>
      <section id="portafolio" className="py-20 cyber-grain relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 right-20 w-40 h-40 border border-neon-yellow rotate-45"></div>
          <div className="absolute bottom-32 left-20 w-28 h-28 border border-neon-yellow rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-neon-yellow mb-6 cyber-title">
              PORTAFOLIO
            </h2>
            <p className="text-xl text-text-desaturated max-w-3xl mx-auto font-body">
              Proyectos que demuestran nuestra experiencia y pasión por el diseño digital
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {filterTypes.map((type) => (
                <button
                  key={type.key}
                  onClick={() => setFilter(type.key)}
                  className={`px-4 py-2 rounded-md font-body font-semibold transition-all duration-300 flex items-center gap-2 ${
                    filter === type.key
                      ? 'bg-neon-yellow text-cyber-black shadow-neon'
                      : 'bg-surface-dark/70 text-text-desaturated border border-neon-yellow/30 hover:border-neon-yellow hover:text-neon-yellow'
                  }`}
                >
                  <span>{type.icon}</span>
                  {type.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-desaturated w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar proyectos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-surface-dark/70 border border-neon-yellow/30 rounded-md text-text-desaturated placeholder-text-desaturated/60 focus:border-neon-yellow focus:outline-none focus:shadow-neon-subtle transition-all duration-300 w-64 font-body"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id}
                className="bg-surface-dark/90 border border-neon-yellow/30 hover:border-neon-yellow hover:shadow-neon-subtle transition-all duration-300 cursor-pointer group transform hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={600}
                    height={338}
                    data-ai-hint={project.imageHint}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge 
                      variant="secondary" 
                      className={`
                        ${project.type === 'Web' ? 'bg-blue-500/80' : 
                          project.type === 'Branding' ? 'bg-purple-500/80' : 'bg-green-500/80'} 
                        text-white
                      `}
                    >
                      {project.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button variant="neon" size="sm">
                      VER MÁS
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-headline text-neon-yellow mb-2 group-hover:text-neon-yellow/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-desaturated font-body mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-neon-yellow/50 text-neon-yellow/80">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-neon-yellow/50 text-neon-yellow/80">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-headline text-neon-yellow mb-2">No se encontraron proyectos</h3>
              <p className="text-text-desaturated">Intenta con otros términos de búsqueda o filtros</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-surface-dark border border-neon-yellow/30 text-text-desaturated">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-headline text-neon-yellow mb-4">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    width={600}
                    height={400}
                    data-ai-hint={selectedProject.imageHint}
                    className="w-full h-64 object-cover rounded-lg border border-neon-yellow/20"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neon-yellow mb-2 font-body">Descripción</h4>
                    <p className="text-text-desaturated font-body">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-yellow mb-2 font-body">Tecnologías</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="border-neon-yellow/50 text-neon-yellow/80">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-yellow mb-2 font-body">Tiempo de desarrollo</h4>
                    <p className="text-text-desaturated font-body">{selectedProject.developmentTime}</p>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    {selectedProject.liveUrl && (
                      <Button 
                        variant="neon" 
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} />
                        VER PÁGINA WEB
                      </Button>
                    )}
                    {selectedProject.codeUrl && (
                      <Button 
                        variant="cyberpunk" 
                        onClick={() => window.open(selectedProject.codeUrl, '_blank')}
                      >
                        <Code size={16} />
                        VER CÓDIGO
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioSection;
