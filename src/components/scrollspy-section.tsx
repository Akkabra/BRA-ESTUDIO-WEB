'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { type ReactNode, useEffect } from 'react';

interface ScrollspySectionProps {
  children: ReactNode;
  className?: string;
  id: string;
  onInViewChange: (inView: boolean, id: string) => void;
}

const ScrollspySection = ({
  children,
  className,
  id,
  onInViewChange,
}: ScrollspySectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3, // When 30% of the section is visible
  });

  useEffect(() => {
    onInViewChange(inView, id);
  }, [inView, id, onInViewChange]);

  const { ref: animationRef, inView: animationInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      id={id}
      ref={(node) => {
        ref(node);
        animationRef(node);
      }}
      className={cn(
        'transition-all duration-700 ease-out',
        animationInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollspySection;
