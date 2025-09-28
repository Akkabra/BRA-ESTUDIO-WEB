import { cn } from "@/lib/utils"
import Image from 'next/image';

export const BraLogo = ({ className, style }: { className?: string, style?: React.CSSProperties }) => {
    return (
        <div className={cn("relative", className)} style={style}>
            <Image 
                src="/logoprincipal.png"
                alt="BRA ESTUDIO WEB Logo"
                width={100}
                height={30}
                className="w-auto h-full"
                priority
            />
        </div>
    );
};
