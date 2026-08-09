import React from "react";

interface ResponsivePictureProps {
  folder: string;
  baseName: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function ResponsivePicture({
  folder,
  baseName,
  alt,
  className,
  sizes = "100vw",
  priority = false,
}: ResponsivePictureProps) {
  const cleanFolder = folder.endsWith("/") ? folder.slice(0, -1) : folder;

  return (
    <picture className={className}>
      {/* 1. МОБИЛЬНЫЕ (до 767px) */}
      <source
        media="(max-width: 767px)"
       
        srcSet={`${cleanFolder}/${baseName}-mob.webp 768w, ${cleanFolder}/${baseName}-mob@2x.webp 1536w`}
        sizes={sizes}
        type="image/webp"
      />
      <source
        media="(max-width: 767px)"
        srcSet={`${cleanFolder}/${baseName}-mob.jpg 768w, ${cleanFolder}/${baseName}-mob@2x.jpg 1536w`}
        sizes={sizes}
        type="image/jpeg"
      />

      {/* 2. ПЛАНШЕТЫ (от 768px до 1023px) */}
      <source
        media="(max-width: 1023px)"
        srcSet={`${cleanFolder}/${baseName}-tab.webp 1024w, ${cleanFolder}/${baseName}-tab@2x.webp 2048w`}
        sizes={sizes}
        type="image/webp"
      />
      <source
        media="(max-width: 1023px)"
        srcSet={`${cleanFolder}/${baseName}-tab.jpg 1024w, ${cleanFolder}/${baseName}-tab@2x.jpg 2048w`}
        sizes={sizes}
        type="image/jpeg"
      />

      {/* 3. ДЕСКТОП (от 1024px и выше) */}
      <source
        media="(min-width: 1024px)"  
        srcSet={`${cleanFolder}/${baseName}.webp 1440w, ${cleanFolder}/${baseName}@2x.webp 2880w`}
        sizes={sizes}
        type="image/webp"
      />
      <source
        media="(min-width: 1024px)"
        srcSet={`${cleanFolder}/${baseName}.jpg 1440w, ${cleanFolder}/${baseName}@2x.jpg 2880w`}
        sizes={sizes}
        type="image/jpeg"
      />

      {/* Базовый тег-фоллбек */}
      <img
        src={`${cleanFolder}/${baseName}.jpg`}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}