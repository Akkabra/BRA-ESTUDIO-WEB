'use client';

import { Lightbulb, TerminalSquare, ShieldCheck } from "lucide-react";

const ManifestoSection = () => {
  const manifestoPoints = [
    {
      icon: Lightbulb,
      title: "VISIÓN",
      text: "No construimos páginas, forjamos experiencias. Creemos en un universo digital donde cada marca tiene una identidad única, liberada de las plantillas que estandarizan la web. Tu visión es el núcleo de nuestro código."
    },
    {
      icon: TerminalSquare,
      title: "PROTOCOLO",
      text: "Funcionamos como una extensión de tu equipo. Nuestro protocolo es la transparencia radical y la co-creación. Desde la primera línea de código hasta el despliegue final, estás en control. Desarrollamos con agilidad, precisión y una obsesión por el rendimiento."
    },
    {
      icon: ShieldCheck,
      title: "PROMESA",
      text: "Entregamos más que un producto: un activo digital a prueba de futuro. Nuestra promesa es un código limpio, una estética que impacta y una funcionalidad que convierte. Tu éxito es la compilación final de nuestro trabajo."
    }
  ];

  return (
    <section id="manifiesto" className="py-20 bg-cyber-black relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-transparent to-cyber-black z-10"></div>


      <div className="container mx-auto px-4 text-center relative z-20">
        <h2
          className="text-4xl md:text-6xl font-headline font-bold bg-gradient-neon text-transparent bg-clip-text mb-4 cyber-title glitch"
          data-text="MANIFIESTO"
        >
          MANIFIESTO
        </h2>
        <p className="text-lg md:text-xl text-text-desaturated max-w-3xl mx-auto font-body mb-16">
          DESPLEGANDO EL CÓDIGO DE UNA NUEVA REALIDAD DIGITAL.
        </p>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {manifestoPoints.map((point, index) => (
            <div key={index} className="relative p-6 border border-neon-yellow/20 rounded-lg bg-surface-dark/50 backdrop-blur-sm hover:border-neon-yellow/50 hover:shadow-neon-subtle transition-all duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-surface-dark border-2 border-neon-yellow/50 flex items-center justify-center">
                  <point.icon className="w-8 h-8 text-neon-yellow" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-2xl font-headline bg-gradient-neon text-transparent bg-clip-text mb-4">{point.title}</h3>
                <p className="text-text-desaturated/80 font-body leading-relaxed">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ManifestoSection;
