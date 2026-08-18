"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-left" | "fade-right";
}

export default function ScrollReveal({ children, variant = "fade-up" }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !elementRef.current) return;

    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 10);
          
          // Отписываемся от слежки, так как блок уже один раз красиво появился
          observer.unobserve(currentElement);
        }
      },
      {
        root: null,
        /* порог до 0.15 (15% высоты секции) */
        threshold: 0.3, 
        /*  0px. Слежка идет ровно по нижней рамке экрана. */
        rootMargin: "0px 0px 0px 0px", 
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
      observer.disconnect();
    };
  }, []);

  const variantClass = `reveal--${variant}`;
  const visibleClass = isVisible ? "reveal--visible" : "";

  return (
    <div
      ref={elementRef}
      className={`reveal ${variantClass} ${visibleClass}`}
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
}