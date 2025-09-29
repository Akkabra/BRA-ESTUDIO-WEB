'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time it comes into view
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
