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
