'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code, Search, X } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { cn, optimizeCloudinaryImage } from '@/lib/utils';
import { projects as projectsData, Project } from '@/data/projects';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";


const PortfolioSection = () => {
  const [projects] = useState<Project[]>(projectsData);
  const [loading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.type === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (project.technologies && project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesFilter && matchesSearch;
  });

  const filterTypes = [
    { key: 'all', label: 'Todos', icon: '🔄' },
    { key: 'Web', label: 'Web', icon: '🌐' },
    { key: 'Branding', label: 'Branding', icon: '🎨' },
    { key: 'App', label: 'Apps', icon: '📱' }
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <>
      <section id="portafolio" className="py-20 cyber-grain relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 right-20 w-40 h-40 border border-neon-yellow rotate-45"></div>
          <div className="absolute bottom-32 left-20 w-28 h-28 border border-neon-yellow rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline font-bold bg-gradient-neon text-transparent bg-clip-text mb-6 glitch" data-text="PORTAFOLIO">
              PORTAFOLIO
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-xl text-text-desaturated max-w-3xl mx-auto font-body"
            >
              Proyectos que demuestran nuestra experiencia y pasión por el diseño digital
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center mb-12 gap-6">
            <div className="flex flex-wrap gap-3 justify-center">
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

            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-desaturated w-4 h-4 z-10" />
              <input
                type="text"
                placeholder="Buscar proyectos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearching(true)}
                onBlur={() => setIsSearching(false)}
                className="pl-10 pr-4 py-2 bg-surface-dark/70 border border-neon-yellow/30 rounded-md text-text-desaturated placeholder-text-desaturated/60 focus:border-neon-yellow focus:outline-none focus:shadow-neon-subtle transition-all duration-300 w-full md:w-64 font-body"
              />
               <div className={cn(
                "absolute inset-0 border-neon-yellow/50 rounded-md pointer-events-none transition-all duration-300",
                isSearching ? "animate-pulse shadow-neon-subtle" : "shadow-none"
              )}></div>
            </div>
          </div>
          
          {loading ? (
             <div className="text-center text-neon-yellow font-headline">Cargando proyectos...</div>
          ) : (
            <LayoutGroup>
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredProjects.map((project, i) => (
                    <motion.div
                      key={project.id}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, scale: 0.8 }}
                      layoutId={`card-container-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                    >
                      <Card 
                        className="bg-surface-dark/90 border border-neon-yellow/30 hover:border-neon-yellow transition-all duration-300 cursor-pointer group transform hover:shadow-neon-intense"
                        style={{ perspective: '1000px' }}
                      >
                        <motion.div 
                          whileHover={{ scale: 1.05, rotateY: -10, rotateX: 5 }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                          className="relative overflow-hidden rounded-t-lg"
                        >
                          <Image 
                            src={optimizeCloudinaryImage(project.image || 'https://picsum.photos/seed/default/600/338')} 
                            alt={project.title}
                            width={600}
                            height={338}
                            data-ai-hint={project.imageHint || 'project image'}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge 
                              variant="secondary" 
                              className={`
                                ${project.type === 'Web' ? 'bg-blue-500/80' : 
                                  project.type === 'Branding' ? 'bg-purple-500/80' : 'bg-green-500/80'} 
                                text-white group-hover:animate-pulse
                              `}
                            >
                              {project.type}
                            </Badge>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <Button variant="neon" size="sm">
                              VER MÁS
                            </Button>
                          </div>
                        </motion.div>
                        
                        <CardContent className="p-6">
                          <h3 className="text-xl font-headline bg-gradient-neon text-transparent bg-clip-text mb-2 group-hover:glitch-text transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-text-desaturated font-body mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies && project.technologies.slice(0, 3).map((tech, index) => (
                              <Badge key={index} variant="outline" className="text-xs border-neon-yellow/50 text-neon-yellow/80 group-hover:border-neon-yellow group-hover:text-neon-yellow transition-colors">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies && project.technologies.length > 3 && (
                              <Badge variant="outline" className="text-xs border-neon-yellow/50 text-neon-yellow/80">
                                +{project.technologies.length - 3}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </LayoutGroup>
          )}


          {!loading && filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-headline text-neon-yellow mb-2">No se encontraron proyectos</h3>
              <p className="text-text-desaturated">Intenta con otros términos de búsqueda o filtros</p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-cyber-black/90 backdrop-blur-md" onClick={() => setSelectedProject(null)} />
          
          <motion.div layoutId={`card-container-${selectedProject.id}`} className="relative z-10 w-full max-w-md md:max-w-4xl">
            <Dialog open onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="w-full max-w-md md:max-w-4xl bg-surface-dark border border-neon-yellow/30 text-text-desaturated p-0 overflow-hidden" 
                 style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'52\' height=\'52\' viewBox=\'0 0 52 52\'%3E%3Cpath fill=\'hsl(46 93% 51% / 0.02)\' d=\'M0 17.8V0h17.8a26 26 0 0 1 0 52H0V34.2A26 26 0 0 1 0 0zM52 0v17.8a26 26 0 0 1 0 34.2V52H34.2a26 26 0 0 1 0-52H52z\'/%3E%3C/svg%3E")'
                  }}
              >
                <DialogHeader className="p-6 pb-0">
                  <motion.div layoutId={`title-${selectedProject.id}`}>
                    <DialogTitle className="text-3xl font-headline bg-gradient-neon text-transparent bg-clip-text mb-2 glitch" data-text={selectedProject.title}>
                      {selectedProject.title}
                    </DialogTitle>
                  </motion.div>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-h-[80vh] overflow-y-auto">
                    <div className="space-y-6">
                        {selectedProject.webThumbnailUrls && selectedProject.webThumbnailUrls.length > 0 ? (
                           <Carousel 
                             plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
                             className="w-full relative group"
                           >
                                <CarouselContent>
                                    {selectedProject.webThumbnailUrls.map((url, index) => (
                                        <CarouselItem key={index}>
                                            <Image
                                                src={optimizeCloudinaryImage(url)}
                                                alt={`${selectedProject.title} - Captura de pantalla ${index + 1}`}
                                                width={600}
                                                height={400}
                                                className="w-full h-auto object-cover rounded-lg border-2 border-neon-yellow/30"
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-neon-yellow border-neon-yellow/50 hover:bg-neon-yellow hover:text-black transition-all opacity-0 group-hover:opacity-100" />
                                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-neon-yellow border-neon-yellow/50 hover:bg-neon-yellow hover:text-black transition-all opacity-0 group-hover:opacity-100" />
                            </Carousel>
                        ) : (
                             <Image 
                                src={optimizeCloudinaryImage(selectedProject.image || 'https://picsum.photos/seed/modal/600/400')} 
                                alt={selectedProject.title}
                                width={600}
                                height={400}
                                data-ai-hint={selectedProject.imageHint || 'project image'}
                                className="w-full h-auto object-cover rounded-lg border-2 border-neon-yellow/30"
                            />
                        )}
                         <div className="scanlines absolute inset-0 rounded-lg pointer-events-none opacity-20" />
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
                        {selectedProject.technologies && selectedProject.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="border-neon-yellow/50 text-neon-yellow/80">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {selectedProject.developmentTime && (
                      <div>
                        <h4 className="font-semibold text-neon-yellow mb-2 font-body">Tiempo de desarrollo</h4>
                        <p className="text-text-desaturated font-body">{selectedProject.developmentTime}</p>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-3 pt-4">
                      {selectedProject.liveUrl && (
                        <Button 
                          variant="neon" 
                          onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                          className="animate-pulse w-full sm:w-auto"
                        >
                          <ExternalLink size={16} />
                          VER PÁGINA WEB
                        </Button>
                      )}
                       {selectedProject.codeUrl && (
                        <Button 
                          variant="outline"
                          onClick={() => window.open(selectedProject.codeUrl, '_blank')}
                          className="border-neon-yellow/50 text-neon-yellow/80 w-full sm:w-auto"
                        >
                          <Code size={16} />
                           VER CODIGO
                        </Button>
                      )}
                    </div>
                  </div>
                  {/* Branding Images Grid */}
                  {selectedProject.brandingImagesUrls && selectedProject.brandingImagesUrls.length > 0 && (
                        <div className="md:col-span-2 space-y-4">
                            <h4 className="font-semibold text-neon-yellow mb-2 font-body">Galería de Branding</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {selectedProject.brandingImagesUrls.map((url, index) => (
                                    <motion.div 
                                      key={index}
                                      className="relative group cursor-pointer"
                                      onClick={() => setActiveImage(url)}
                                      whileHover={{ scale: 1.05 }}
                                    >
                                        <Image
                                            src={optimizeCloudinaryImage(url)}
                                            alt={`Branding image ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="rounded-lg object-cover w-full h-full border border-neon-yellow/20 group-hover:border-neon-yellow transition-all duration-300 shadow-neon-subtle group-hover:shadow-neon-intense"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <DialogClose asChild>
                  <button className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </button>
                </DialogClose>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      <AnimatePresence>
            {activeImage && (
                <Dialog open onOpenChange={() => setActiveImage(null)}>
                     <DialogContent className="p-0 bg-transparent border-none max-w-4xl w-full">
                        <Image
                            src={optimizeCloudinaryImage(activeImage)}
                            alt="Branding image enlarged"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain rounded-lg"
                        />
                        <DialogClose className="absolute -top-2 -right-2 bg-surface-dark text-white rounded-full p-1">
                            <X className="h-5 w-5" />
                        </DialogClose>
                    </DialogContent>
                </Dialog>
            )}
        </AnimatePresence>
    </>
  );
};

export default PortfolioSection;

    
