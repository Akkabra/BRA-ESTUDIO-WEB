# BRA ESTUDIO WEB - Sitio Web Oficial

![BRA Estudio Web](src/assets/bra-logo.png)

Sitio web oficial de **BRA ESTUDIO WEB** con estética Cyberpunk Neón, desarrollado con React, TypeScript, Tailwind CSS y shadcn/ui.

## 🚀 Características

- **Estética Cyberpunk Neón**: Diseño futurista con colores amarillo (#FFD700) y negro (#000000)
- **Efectos Avanzados**: Animaciones de pixelación, cards 3D, efectos de brillo neón
- **Responsive Design**: Optimizado para móvil, tablet y desktop
- **Integración WhatsApp**: Contacto directo con botones CTA
- **Formulario de Contacto**: Integrado con Formspree para manejo de mensajes
- **Portfolio Interactivo**: Galería de proyectos con filtros y modales
- **SEO Optimizado**: Meta tags, títulos y descripciones optimizadas

## 🛠️ Tecnologías Utilizadas

- **Next.js 15 (React 18)** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **shadcn/ui** - Componentes de UI
- **Lucide React** - Iconos
- **Radix UI** - Componentes primitivos accesibles

## ⚙️ Configuración

### Variables a Personalizar

Antes de desplegar, actualiza las siguientes variables:

#### 1. Número de WhatsApp
Reemplaza `573000000000` por tu número real en:
- `src/components/navigation.tsx`
- `src/components/hero-section.tsx`
- `src/components/contact-section.tsx`
- `src/components/footer.tsx`

#### 2. Endpoint de Formspree
Actualiza la URL de Formspree en `src/components/contact-section.tsx`:
```typescript
const formspreeEndpoint = "https://formspree.io/f/TU_ENDPOINT_AQUI";
```

#### 3. Enlaces Sociales
Actualiza los enlaces en `src/components/footer.tsx` y `src/components/contact-section.tsx`:
- Instagram
- Facebook
- TikTok
- Email de contacto

#### 4. Proyectos del Portfolio
Modifica los proyectos en `src/components/portfolio-section.tsx` con tus proyectos reales:
- URLs de sitios web
- Enlaces a repositorios de código
- Descripciones y tecnologías

## 🎨 Sistema de Diseño

### Colores Principales
- **Neon Yellow**: `#FFD700` (51 100% 50%)
- **Cyber Black**: `#000000` (0 0% 0%)
- **Surface Dark**: `#111111` (210 6% 7%)
- **Text Desaturated**: `#E6E6E6` (0 0% 90%)

### Tipografías
- **Títulos**: Orbitron (fuente cyber)
- **Texto**: Inter (sans serif moderna)

### Efectos Especiales
- **Neon Glow**: Efectos de brillo y sombras
- **Pixelation**: Animación de descomposición en píxeles
- **Glitch**: Efectos de interferencia
- **Moving Stripes**: Rayas animadas en movimiento

## 📱 Responsividad

El sitio está optimizado para:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Desarrollo

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Build de Producción
```bash
npm run build
```

## 📦 Despliegue

### Archivos Importantes
- `src/app/layout.tsx` - Contiene meta tags SEO
- `src/lib/placeholder-images.json` - Imágenes y recursos
- `src/app/globals.css` - Sistema de diseño y variables CSS
- `tailwind.config.ts` - Configuración de Tailwind

### Optimizaciones Incluidas
- **Lazy loading** de imágenes con `next/image`
- **Preload** de fuentes críticas
- **Minificación** automática en build
- **Tree shaking** de JavaScript no utilizado

## 🎯 Funcionalidades

### Navegación
- Nav sticky con efecto blur
- Mega dropdown para servicios
- Menú móvil fullscreen
- Smooth scroll entre secciones

### Hero Section
- Logo con efecto neon y pixelación
- Parallax sutil con movimiento del mouse
- CTA prominente con efectos visuales
- Animaciones de fondo fluidas

### Servicios
- Cards 3D con efectos hover
- Selector interactivo de servicios
- Precios y características detalladas
- Animaciones de transición suaves

### Portfolio
- Grid responsive con filtros
- Búsqueda por tecnologías
- Modales con información detallada
- Lazy loading de imágenes

### Contacto
- Formulario con validación
- Integración con Formspree
- Botones directos a WhatsApp
- Información de contacto completa

### Footer
- Enlaces organizados
- Redes sociales
- Efectos de fondo animados
- Información corporativa

## 🔧 Personalización Avanzada

### Agregar Nuevos Servicios
Edita `src/components/services-section.tsx` y actualiza el objeto `mainServices`.

### Modificar Colores
Actualiza las variables CSS en `src/app/globals.css` sección `:root`.

### Añadir Animaciones
Las animaciones están definidas en `tailwind.config.ts` y `src/app/globals.css`.

### Cambiar Fuentes
Modifica las importaciones en `src/app/layout.tsx` y actualiza `tailwind.config.ts`.

## 📧 Soporte

Para soporte técnico o consultas sobre el código:
- Email: info@braestudioweb.com
- WhatsApp: +57 300 000 0000

## 📄 Licencia

© 2024 BRA ESTUDIO WEB - Todos los derechos reservados

---

**Tu visión, nuestro desarrollo** ⚡
