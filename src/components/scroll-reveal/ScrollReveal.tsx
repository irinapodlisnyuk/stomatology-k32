'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const [isRendered, setIsRendered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRendered(true); // Вставляем блок в разметку только при скролле!
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      { threshold: 1.0 } // Срабатывает, как только край блока зашел на экран
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} style={{ minHeight: '400px' }}>
      {/* 💡 Если доскроллили — рендерим блок. В этот момент сработает ваш @starting-style! */}
      {isRendered ? children : null}
    </div>
  );
}