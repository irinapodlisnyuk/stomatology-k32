import React from "react";

interface ResponsivePictureProps {
  folder: string;      
  baseName: string;     
  alt: string;         
  className?: string;   
}

export default function ResponsivePicture({
  folder,
  baseName,
  alt,
  className,
}: ResponsivePictureProps) {
  // Очищаем путь от лишних слешей на стыках для надежности
  const cleanFolder = folder.endsWith("/") ? folder.slice(0, -1) : folder;

  return (
    <picture>
      {/* 1. МОБИЛЬНЫЕ (до 768px включительно) */}
      <source
        media="(max-width: 767px)"
        srcSet={`${cleanFolder}/${baseName}-mob.webp 1x, ${cleanFolder}/${baseName}-mob@2x.webp 2x`}
        type="image/webp"
      />
      <source
        media="(max-width: 767px)"
        srcSet={`${cleanFolder}/${baseName}-mob.jpg 1x, ${cleanFolder}/${baseName}-mob@2x.jpg 2x`}
        type="image/jpeg"
      />

      {/* 2. ПЛАНШЕТЫ (от 769px до 1024px включительно) */}
      <source
        media="(max-width: 1023px)"
        srcSet={`${cleanFolder}/${baseName}-tab.webp 1x, ${cleanFolder}/${baseName}-tab@2x.webp 2x`}
        type="image/webp"
      />
      <source
        media="(max-width: 1023px)"
        srcSet={`${cleanFolder}/${baseName}-tab.jpg 1x, ${cleanFolder}/${baseName}-tab@2x.jpg 2x`}
        type="image/jpeg"
      />

      {/* 3. ДЕСКТОП (все, что больше 1024px) */}
      <source
        srcSet={`${cleanFolder}/${baseName}.webp 1x, ${cleanFolder}/${baseName}@2x.webp 2x`}
        type="image/webp"
      />
      <source
        srcSet={`${cleanFolder}/${baseName}.jpg 1x, ${cleanFolder}/${baseName}@2x.jpg 2x`}
        type="image/jpeg"
      />

      {/* Базовый тег (фоллбек для старых браузеров) */}
      <img
        src={`${cleanFolder}/${baseName}.jpg`}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        fetchPriority="high"
        
      />
    </picture>
  );
}