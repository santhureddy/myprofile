'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface BackgroundImageProps {
  src: string
  alt: string
  className?: string
  overlayClassName?: string
  priority?: boolean
  quality?: number
}

/**
 * Reusable background image component for IT professional themes
 * Optimized for performance with Next.js Image component
 */
export function BackgroundImage({
  src,
  alt,
  className,
  overlayClassName,
  priority = false,
  quality = 75
}: BackgroundImageProps) {
  return (
    <div className={cn("absolute inset-0 z-0", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center tech-background"
        priority={priority}
        quality={quality}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />
      <div 
        className={cn(
          "absolute inset-0 tech-bg-overlay",
          overlayClassName
        )} 
      />
    </div>
  )
}

/**
 * Predefined background images for different sections
 */
export const backgroundImages = {
  hero: {
    src: '/images/tech-bg-1.jpg',
    alt: 'IT Professional Background - Modern technology workspace'
  },
  about: {
    src: '/images/code-bg.jpg',
    alt: 'Code background - Programming and development workspace'
  },
  experience: {
    src: '/images/server-bg.jpg',
    alt: 'Server and technology infrastructure background'
  },
  projects: {
    src: '/images/tech-bg-2.jpg',
    alt: 'Modern development workspace with multiple monitors and code'
  },
  skills: {
    src: '/images/tech-bg-3.jpg',
    alt: 'Technology and innovation background'
  }
} as const
