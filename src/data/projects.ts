'use client'
import placeholderData from '@/lib/placeholder-images.json';

const { placeholderImages } = placeholderData;

export interface Project {
    id: string;
    title: string;
    type: 'Web' | 'Branding' | 'App';
    description: string;
    longDescription?: string;
    image: string; // Main thumbnail
    webThumbnailUrls?: string[];
    brandingImagesUrls?: string[];
    imageHint?: string;
    technologies?: string[];
    developmentTime?: string;
    liveUrl?: string;
    codeUrl?: string;
}
  

export const projects: Project[] = [];
