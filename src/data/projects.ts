'use client'
import placeholderData from '@/lib/placeholder-images.json';

const { placeholderImages } = placeholderData;

export interface Project {
    id: string;
    title: string;
    type: 'Web' | 'Branding' | 'App';
    description: string;
    longDescription?: string;
    image: string; // Main thumbnail
    webThumbnailUrls?: string[];
    brandingImagesUrls?: string[];
    imageHint?: string;
    technologies?: string[];
    developmentTime?: string;
    liveUrl?: string;
    codeUrl?: string;
}
  

export const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Futurista',
      type: 'Web',
      description: 'Plataforma de E-commerce con estética cyberpunk y microinteracciones avanzadas.',
      longDescription: 'Desarrollo completo de una tienda online para una marca de moda urbana futurista. Se implementó un sistema de pago seguro, gestión de inventario en tiempo real y una experiencia de usuario inmersiva con animaciones WebGL y efectos de sonido reactivos. La plataforma está construida con Next.js, TypeScript y Three.js, garantizando un rendimiento óptimo y una estética única.',
      image: placeholderImages.find(p => p.id === 'portfolio-ecommerce')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'portfolio-ecommerce')?.imageHint || '',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'WebGL'],
      developmentTime: '8 Semanas',
      liveUrl: '#',
      codeUrl: '#',
      webThumbnailUrls: [
        "https://res.cloudinary.com/dignkfrsn/image/upload/v1717357065/Frame_3_-_1440x900_eefbsi.png",
        "https://res.cloudinary.com/dignkfrsn/image/upload/v1717357064/Frame_2_-_1440x900_jwfgft.png",
        "https://res.cloudinary.com/dignkfrsn/image/upload/v1717357064/Frame_1_-_1440x900_jchxfl.png",
      ],
    },
    {
      id: '2',
      title: 'Identidad Visual "Neura"',
      type: 'Branding',
      description: 'Creación de marca para una startup de biotecnología, enfocada en la innovación y el futuro.',
      longDescription: 'El proyecto abarcó desde la conceptualización del nombre y el eslogan hasta el diseño del logotipo, paleta de colores, tipografías y un completo manual de marca. La identidad visual se diseñó para ser escalable, funcionando tanto en medios digitales como impresos, y reflejando los valores de vanguardia y confianza de la empresa.',
      image: placeholderImages.find(p => p.id === 'portfolio-branding')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'portfolio-branding')?.imageHint || '',
      technologies: ['Figma', 'Illustrator', 'Photoshop', 'Storytelling'],
      developmentTime: '4 Semanas',
      brandingImagesUrls: [
        "https://res.cloudinary.com/dignkfrsn/image/upload/v1717357597/6255551_3232238_l3orar.jpg",
        "https://res.cloudinary.com/dignkfrsn/image/upload/v1717357598/6224343_3120935_g05p0j.jpg",
        "https://res.cloudinary.com/dignkfrsn/image/upload/v1717357596/6224341_3120933_vyl8is.jpg",
      ],
    },
    {
      id: '3',
      title: 'App de Fitness "CyberFit"',
      type: 'App',
      description: 'Aplicación móvil para seguimiento de rutinas de ejercicio con gamificación y avatares personalizados.',
      longDescription: 'Diseño de UI/UX y desarrollo de una aplicación móvil para iOS y Android. La app incluye planes de entrenamiento personalizados con IA, seguimiento de progreso en tiempo real, logros desbloqueables y una comunidad social. Se construyó con React Native para un desarrollo multiplataforma eficiente.',
      image: placeholderImages.find(p => p.id === 'portfolio-fitness')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'portfolio-fitness')?.imageHint || '',
      technologies: ['React Native', 'Firebase', 'GraphQL', 'Lottie'],
      developmentTime: '12 Semanas',
      liveUrl: '#',
    },
    {
      id: '4',
      title: 'Sitio Corporativo "Nexus"',
      type: 'Web',
      description: 'Landing page corporativa para una empresa de ciberseguridad, con un diseño sobrio y profesional.',
      longDescription: 'Creación de una página de aterrizaje de alto impacto para presentar los servicios de una consultora de ciberseguridad. El diseño se centró en la claridad, la confianza y la usabilidad, utilizando un diseño minimalista con animaciones sutiles para guiar al usuario. El sitio es totalmente responsivo y está optimizado para una alta velocidad de carga.',
      image: placeholderImages.find(p => p.id === 'portfolio-corporate')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'portfolio-corporate')?.imageHint || '',
      technologies: ['Astro', 'Tailwind CSS', 'GSAP', 'Netlify'],
      developmentTime: '3 Semanas',
      liveUrl: '#',
    },
    {
        id: '5',
        title: 'Branding para "Cygnus"',
        type: 'Branding',
        description: 'Identidad de marca para una consultora de innovación tecnológica.',
        longDescription: 'Conceptualización y diseño de la identidad visual completa para Cygnus, una firma de consultoría enfocada en la transformación digital. El proyecto incluyó la creación de un logotipo dinámico, un sistema de diseño escalable y material de marketing digital para posicionar a la marca como líder en su sector.',
        image: placeholderImages.find(p => p.id === 'portfolio-tech-branding')?.imageUrl || '',
        imageHint: placeholderImages.find(p => p.id === 'portfolio-tech-branding')?.imageHint || '',
        technologies: ['Figma', 'Adobe Suite', 'Motion Design'],
        developmentTime: '5 Semanas',
        brandingImagesUrls: [
            "https://res.cloudinary.com/dignkfrsn/image/upload/v1717357597/6255551_3232238_l3orar.jpg",
            "https://res.cloudinary.com/dignkfrsn/image/upload/v1717357596/6224341_3120933_vyl8is.jpg",
            "https://res.cloudinary.com/dignkfrsn/image/upload/v1717357598/6224343_3120935_g05p0j.jpg"
        ]
    },
    {
        id: '6',
        title: 'App de Comida "GastroLink"',
        type: 'App',
        description: 'Aplicación para descubrir y reservar en restaurantes con un sistema de reseñas gamificado.',
        longDescription: 'Desarrollo de una aplicación móvil nativa para iOS y Android que conecta a los comensales con restaurantes. La app cuenta con un motor de recomendación basado en IA, sistema de reservas en tiempo real, perfiles de usuario con insignias y un feed social para compartir experiencias culinarias.',
        image: placeholderImages.find(p => p.id === 'portfolio-app')?.imageUrl || '',
        imageHint: placeholderImages.find(p => p.id === 'portfolio-app')?.imageHint || '',
        technologies: ['SwiftUI', 'Kotlin', 'Firebase', 'Google Maps API'],
        developmentTime: '16 Semanas',
        liveUrl: '#',
        codeUrl: '#'
    },
    {
      id: '7',
      title: 'Portfolio Interactivo "Glitch"',
      type: 'Web',
      description: 'Sitio web personal para un artista digital con efectos visuales generativos.',
      longDescription: 'Un portafolio web experimental que utiliza shaders y WebGL para crear una experiencia de navegación única. Cada proyecto se presenta como una "falla" en la matriz, con animaciones generativas que reaccionan a la interacción del usuario. El sitio fue construido con SvelteKit y Three.js para un rendimiento excepcional y una libertad creativa total.',
      image: "https://picsum.photos/seed/glitch-art/600/338",
      imageHint: 'generative art',
      technologies: ['SvelteKit', 'Three.js', 'GLSL', 'Vercel'],
      developmentTime: '6 Semanas',
      liveUrl: '#',
      codeUrl: '#',
      webThumbnailUrls: [
        "https://picsum.photos/seed/glitch-1/600/400",
        "https://picsum.photos/seed/glitch-2/600/400",
        "https://picsum.photos/seed/glitch-3/600/400"
      ]
    },
    {
        id: '8',
        title: 'Identidad para "Vortex Audio"',
        type: 'Branding',
        description: 'Branding completo para una marca de auriculares de alta fidelidad.',
        longDescription: 'Desarrollo de una identidad de marca audaz y moderna para Vortex Audio. El proyecto incluyó el diseño de un logotipo inspirado en las ondas sonoras, un packaging de producto premium y una guía de estilo completa para asegurar la coherencia en todos los puntos de contacto con el cliente, desde la web hasta el punto de venta.',
        image: 'https://picsum.photos/seed/vortex-audio/600/338',
        imageHint: 'audio branding',
        technologies: ['Figma', 'Cinema 4D', 'Illustrator'],
        developmentTime: '6 Semanas',
        brandingImagesUrls: [
            "https://picsum.photos/seed/vortex-1/600/400",
            "https://picsum.photos/seed/vortex-2/600/400",
            "https://picsum.photos/seed/vortex-3/600/400"
        ]
    },
    {
        id: '9',
        title: 'App de Realidad Aumentada "HoloDeck"',
        type: 'App',
        description: 'Aplicación de AR para visualización de muebles en tiempo real.',
        longDescription: 'Desarrollo de una aplicación para iOS y Android que permite a los usuarios visualizar muebles de un catálogo en su propio espacio utilizando la cámara de su dispositivo. La app fue creada con ARCore y ARKit, ofreciendo una experiencia de compra inmersiva y práctica que reduce la incertidumbre del cliente y aumenta las conversiones.',
        image: 'https://picsum.photos/seed/holodeck-app/600/338',
        imageHint: 'augmented reality',
        technologies: ['Unity', 'ARCore', 'ARKit', 'C#'],
        developmentTime: '14 Semanas',
        liveUrl: '#',
        codeUrl: '#'
    }
  ];

    
