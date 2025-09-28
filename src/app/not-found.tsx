import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground cyber-grain">
      <div className="text-center">
        <h1
          className="mb-4 text-9xl font-headline font-bold text-primary glitch"
          data-text="404"
        >
          404
        </h1>
        <p className="mb-8 text-2xl text-text-desaturated font-body">
          Oops! Page not found.
        </p>
        <Link href="/" className="inline-block">
          <Button variant="hero" size="lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
