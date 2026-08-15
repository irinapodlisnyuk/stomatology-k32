"use client";

import React, { useRef, useState, useEffect, useSyncExternalStore } from "react";


const subscribeEmpty = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isRendered, setIsRendered] = useState(false);

 
  const isMounted = useSyncExternalStore(subscribeEmpty, getClientSnapshot, getServerSnapshot);

  // 2. Эффект отслеживания скролла (срабатывает только на клиенте)
  useEffect(() => {
    if (!isMounted || isRendered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          setIsRendered(true);
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      {
        root: null,
        threshold: 0.05, // Уменьшили порог, чтобы секции подгружались чуть раньше и карта не залипала
        rootMargin: "0px 0px 300px 0px",
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [isMounted, isRendered]);

  return (
    <div
      ref={elementRef}
      style={{
        opacity: !isMounted || isRendered ? 1 : 0,
        transform: !isMounted || isRendered ? "translateY(0)" : "translateY(20px)",
        transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
        width: "100%",
      }}
    >
   
      {children}
    </div>
  );
}