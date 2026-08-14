import React from "react";

interface ResponsivePictureProps {
  folder: string;
  baseName: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  isHero?: boolean;
}

export default function ResponsivePicture({
  folder,
  baseName,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  isHero = false,
}: ResponsivePictureProps) {
  const cleanFolder = folder.endsWith("/") ? folder.slice(0, -1) : folder;

  const mob = isHero ? 768 : 360;
  const mob2x = isHero ? 1536 : 720;

  const tab = isHero ? 1200 : 500;
  const tab2x = isHero ? 2400 : 800;

  const desk = isHero ? 1920 : 600;
  const desk2x = isHero ? 3840 : 1000;

  return (
    <picture className={className}>
      {/* 1. МОБИЛЬНЫЕ (до 767px) */}
      <source
        media="(max-width: 767px)"
        srcSet={`${cleanFolder}/${baseName}-mob.webp  ${mob}w, ${cleanFolder}/${baseName}-mob@2x.webp  ${mob2x}w`}
        sizes={sizes}
        type="image/webp"
      />
      <source
        media="(max-width: 767px)"
        srcSet={`${cleanFolder}/${baseName}-mob.jpg  ${mob}w, ${cleanFolder}/${baseName}-mob@2x.jpg  ${mob2x}w`}
        sizes={sizes}
        type="image/jpeg"
      />

      {/* 2. ПЛАНШЕТЫ (от 768px до 1023px) */}
      <source
        media="(max-width: 1023px)"
        srcSet={`${cleanFolder}/${baseName}-tab.webp ${tab}w, ${cleanFolder}/${baseName}-tab@2x.webp ${tab2x}w`}
        sizes={sizes}
        type="image/webp"
      />
      <source
        media="(max-width: 1023px)"
        srcSet={`${cleanFolder}/${baseName}-tab.jpg ${tab}w, ${cleanFolder}/${baseName}-tab@2x.jpg ${tab2x}w`}
        sizes={sizes}
        type="image/jpeg"
      />

      {/* 3. ДЕСКТОП (от 1024px и выше) */}
      <source
        media="(min-width: 1024px)"
        srcSet={`${cleanFolder}/${baseName}.webp ${desk}w, ${cleanFolder}/${baseName}@2x.webp  ${desk2x}w`}
        sizes={sizes}
        type="image/webp"
      />
      <source
        media="(min-width: 1024px)"
        srcSet={`${cleanFolder}/${baseName}.jpg ${desk}w, ${cleanFolder}/${baseName}@2x.jpg  ${desk2x}w`}
        sizes={sizes}
        type="image/jpeg"
      />

      {/* Базовый тег-фоллбек */}
      <img
        src={`${cleanFolder}/${baseName}.jpg`}
        alt={alt}
        className={className}
        width={desk}
        height={isHero ? 800 : 400} //
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}
