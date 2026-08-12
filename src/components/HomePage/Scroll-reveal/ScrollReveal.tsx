"use client";
import React, { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isRendered, setIsRendered] = useState(false);
  const [isMounted, setIsMounted] = useState(false); 
  const elementRef = useRef<HTMLDivElement>(null);

  // 1. ИСПРАВЛЕНО ДЛЯ ЛИНТЕРА: Асинхронно фиксируем монтирование на клиенте
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  // 2. Основной эффект для отслеживания скролла
  useEffect(() => {
    if (!isMounted) return; 

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const idleCallback = window.requestIdleCallback
            ? window.requestIdleCallback(() => {
                setIsRendered(true);
              })
            : window.setTimeout(() => {
                setIsRendered(true);
              }, 50);

          if (elementRef.current) observer.unobserve(elementRef.current);

          return () => {
            if (window.cancelIdleCallback && typeof idleCallback === "number") {
              window.cancelIdleCallback(idleCallback);
            } else {
              clearTimeout(idleCallback);
            }
          };
        }
      },
      {
        root: null,
        threshold: 0.18,
        rootMargin: "0px 0px 250px 0px",
      },
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [isMounted]); 

  return (
    <div
      ref={elementRef}
      style={{
        contentVisibility: !isMounted || isRendered ? "visible" : "auto",
        containIntrinsicSize: "400px",
        minHeight: isRendered ? "auto" : "400px",
      }}
    >
      {!isMounted || isRendered ? children : <div style={{ height: "400px" }} />}
    </div>
  );
}