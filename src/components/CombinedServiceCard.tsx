'use client'

import { Zap, Code, Gem } from "lucide-react";

export const CombinedServiceCard = () => {
    const whatsappNumber = "573145527342";
    return (
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-yellow to-neon-cyan rounded-lg blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative p-8 bg-surface-dark rounded-lg leading-none flex flex-col md:flex-row items-center justify-between gap-8 border border-neon-yellow/30">
                <div className="md:w-2/3">
                    <h3 className="text-3xl font-headline text-white mb-2 cyber-title glitch" data-text="PAQUETE VISIÓN DIGITAL">
                        PAQUETE VISIÓN DIGITAL
                    </h3>
                    <p className="text-lg text-text-desaturated font-body mb-4">
                        Tu Presencia Online de 0 a 100.
                    </p>
                    <div className="flex items-center space-x-4 text-neon-yellow">
                        <div className="flex items-center space-x-2">
                            <Code className="w-5 h-5"/>
                            <span className="font-body">Desarrollo Web</span>
                        </div>
                        <Zap className="w-6 h-6 text-neon-cyan animate-pulse"/>
                        <div className="flex items-center space-x-2">
                            <Gem className="w-5 h-5"/>
                            <span className="font-body">Branding</span>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3 text-center md:text-right">
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, estoy interesado en el Paquete Visión Digital.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            relative inline-block px-8 py-4
                            font-headline text-sm font-bold tracking-widest uppercase
                            text-cyber-black bg-gradient-neon shadow-[0_0_15px_hsl(var(--neon-yellow)/0.5)]
                            border-2 border-neon-yellow rounded-md
                            transition-all duration-300
                            hover:shadow-[0_0_25px_hsl(var(--neon-yellow)/1),_0_0_50px_hsl(var(--neon-yellow)/0.7)]
                            hover:text-white hover:scale-105
                            animate-pulse
                        "
                    >
                        INICIAR TRANSFORMACIÓN
                    </a>
                </div>
            </div>
        </div>
    );
};
