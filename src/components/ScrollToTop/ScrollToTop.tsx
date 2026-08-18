"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon/Icon";
import styles from "./ScrollToTop.module.scss";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
   const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Пока страница рендерится на сервере — отдаем null (не ломает гидратацию)
  if (!isMounted) return null;

  return (
    <button
      className={`${styles.scrollTop} ${isVisible ? styles["scrollTop--active"] : ""}`}
      onClick={scrollToTop}
      aria-label="Наверх"
      type="button"
    >
      <Icon name="open-icon" className={styles.scrollTop__icon} />
    </button>
  );
}

// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import Icon from '@/components/Icon/Icon';
// import styles from './ScrollToTop.module.scss';

// export default function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false);
//   const observerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // 1. Создаем невидимый элемент-маркер в самом верху тела документа
//     const target = document.createElement('div');
//     target.style.position = 'absolute';
//     target.style.top = '400px'; // Точка, после которой должна появиться кнопка
//     target.style.left = '0';
//     target.style.width = '1fr';
//     target.style.height = '1px';
//     target.style.pointerEvents = 'none';
//     document.body.appendChild(target);
//     observerRef.current = target;

//     // 2. Инициализируем наблюдатель
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Если маркер ушел выше экрана (isIntersecting === false), показываем кнопку
//         setIsVisible(!entry.isIntersecting);
//       },
//       { root: null, threshold: 0 }
//     );

//     observer.observe(target);

//     // Очищаем маркер и наблюдатель при размонтировании
//     return () => {
//       observer.disconnect();
//       if (target && document.body.contains(target)) {
//         document.body.removeChild(target);
//       }
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth', 
//     });
//   };

//   return (
//     <button
//       className={`${styles.scrollTop} ${isVisible ? styles['scrollTop--active'] : ''}`}
//       onClick={scrollToTop}
//       aria-label="Наверх"
//     >
//       <Icon name="open-icon" className={styles.scrollTop__icon} />
//     </button>
//   );
// }