'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function FirebaseErrorListener() {
  useEffect(() => {
    const handlePermissionError = (error: FirestorePermissionError) => {
      // This will be caught by Next.js's error overlay in development
      // and by error boundaries in production.
      throw error;
    };

    errorEmitter.on('permission-error', handlePermissionError);

    return () => {
      errorEmitter.removeListener('permission-error', handlePermissionError);
    };
  }, []);

  return null; // This component does not render anything
}
