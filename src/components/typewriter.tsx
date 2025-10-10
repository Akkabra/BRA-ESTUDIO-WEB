'use client';

import { useState, useEffect } from 'react';

export const Typewriter = ({ text, speed = 30 }: { text: string, speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    if (text) {
        let i = 0;
        const intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
        if (i >= text.length) {
            clearInterval(intervalId);
        }
        }, speed);

        return () => clearInterval(intervalId);
    }
  }, [text, speed]);

  return <p>{displayedText}<span className="inline-block w-2 h-4 bg-current animate-pulse ml-1"></span></p>;
};
