"use client";

import { useEffect, useState } from "react";
import styles from "./PageLoader.module.scss";
import Icon from "@/components/models/Icon";

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const handleLoad = () => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }, 600); // 0.6 секунды на плавный уход прелоадера
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.preloader} ${isFadingOut ? styles["preloader--hide"] : ""}`}>
      <div className={styles.preloader__container}>
        
        {/* Блок анимированного логотипа */}
        <div className={styles.preloader__logoWrapper}>
          
          {/* 💡 Элемент 1: Внешняя светящаяся орбита */}
          <div className={styles.preloader__orbit}></div>
          
          {/* 💡 Элемент 2: Вращающиеся вокруг логотипа точки-частицы */}
          <div className={styles.preloader__dots}>
            <span className={styles.preloader__dot}></span>
            <span className={styles.preloader__dot}></span>
            <span className={styles.preloader__dot}></span>
          </div>

          {/* 💡 Центр: Ваша фирменная иконка логотипа клиники К+32 */}
          <div className={styles.preloader__logoIcon}>
            <Icon name="logo_icon" className={styles.preloader__svg} />
          </div>
        </div>

        {/* Текст под логотипом */}
        <span className={styles.preloader__text}>ЦИФРОВАЯ СТОМАТОЛОГИЯ</span>
      </div>
    </div>
  );
}