import { cn } from "@/lib/utils"
import Image from 'next/image';

export const BraLogo = ({ className }: { className?: string }) => {
    return (
        <div className={cn(className)}>
            <Image 
                src="/bra-logo-shield.png"
                alt="BRA ESTUDIO WEB Logo"
                width={100}
                height={120}
                className="w-full h-auto"
                priority
            />
        </div>
    );
};
