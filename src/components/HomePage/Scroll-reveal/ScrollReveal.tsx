"use client";

import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-left" | "fade-right";
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    // if (typeof window === "undefined" || !elementRef.current) return;

    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            currentElement.classList.add("reveal--visible");
          });

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
      },
    );

    observer.observe(currentElement);
    return () => {
      observer.disconnect();
    };
  }, []);

  const variantClass = `reveal--${variant}`;

  return (
    <div
      ref={elementRef}
      className={`reveal ${variantClass}`}
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
}
