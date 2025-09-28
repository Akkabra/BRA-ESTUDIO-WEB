import { cn } from "@/lib/utils"
import Image from 'next/image';

export const BraLogo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("relative", className)}>
            <Image 
                src="/logoprincipal.png"
                alt="BRA ESTUDIO WEB Logo"
                width={100}
                height={30}
                className="w-auto"
                style={{ height: '30px' }}
                priority
            />
        </div>
    );
};
