import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function optimizeCloudinaryImage(url: string) {
  if (typeof url !== 'string' || !url.includes('res.cloudinary.com')) {
    return url;
  }
  
  const parts = url.split('/upload/');
  if (parts.length !== 2) {
    return url;
  }

  // Avoid adding transformations if they already exist
  if (parts[1].match(/^(f_|q_|w_)/)) {
    return url;
  }

  const transformation = 'f_auto,q_auto';
  return `${parts[0]}/upload/${transformation}/${parts[1]}`;
}
