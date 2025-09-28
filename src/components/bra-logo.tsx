import { cn } from "@/lib/utils"

export const BraLogo = ({ className }: { className?: string }) => {
    return (
        <div className={cn(className)}>
            <svg viewBox="0 0 220 50" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                    <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <text 
                    fontFamily="Orbitron, sans-serif" 
                    fontSize="40" 
                    fill="hsl(var(--primary))" 
                    x="50%" 
                    y="50%" 
                    dominantBaseline="middle" 
                    textAnchor="middle" 
                    letterSpacing="5"
                    className="neon-glow-subtle"
                >
                    BRA
                </text>
            </svg>
        </div>
    );
};
