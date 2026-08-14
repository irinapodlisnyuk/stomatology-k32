"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Licenses.module.scss";
import { licenseList } from "./Licenses-data";


export default function Licenses() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % licenseList.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(nextSlide, 4000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  const handleCardClick = (): void => {
    setIsAutoPlaying(false); 
    nextSlide();
  };

  const handleDotClick = (index: number): void => {
    setIsAutoPlaying(false); // Останавливаем таймер
    setCurrentIndex(index);
  };

  const path = "/image/license";
  const activeItem = licenseList[currentIndex];

  return (
    <section className={styles.licenses}>
      <div className="container">
        <div className={styles.licenses__wrapper}>
          <div className={styles["licenses__wrapper-left"]}>
            <h2 className={styles.licenses__title}>
              Гарантия безопасности и стандарты качества
            </h2>
            <p className={styles.licenses__subtitle}>
              К+32&nbsp;&mdash; это клиника высоких стандартов,
              с&nbsp;современным цифровым оборудованием и
              высококвалифицированными специалистами.
            </p>
            <p className={styles.licenses__text}>
              Деятельность клиники К+32 полностью лицензирована. Мы работаем
              строго по медицинским протоколам Министерства здравоохранения РФ.
            </p>

          </div>

          {/* 1. ДЕСКТОПНАЯ ВЕРСИЯ */}
          <div className={styles.licenses__desktop}>
            <div className={styles.licenses__bookScene}>
              <div
                className={styles.licenses__card}
                onClick={handleCardClick}
                key={activeItem.id}
              >
                <div className={styles.licenses__imgWrapper}>
                  <picture>
                    <source
                      srcSet={`${path}/${activeItem.baseName}.webp 1x, ${path}/${activeItem.baseName}-@2x.webp 2x`}
                      type="image/webp"
                    />
                    <source
                      srcSet={`${path}/${activeItem.baseName}.jpg 1x, ${path}/${activeItem.baseName}-@2x.jpg 2x`}
                      type="image/jpeg"
                    />
                    <img
                      src={`${path}/${activeItem.baseName}.jpg`}
                      alt={activeItem.title}
                      className={styles.licenses__img}
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
            </div>

            {/*  ЦИФРОВУЮ ПАГИНАЦИЮ  */}
            <div className={styles.licenses__counter}>
              <span className={styles.licenses__current}>
                {currentIndex + 1}
              </span>
              <span className={styles.licenses__divider}>/</span>
              <span className={styles.licenses__total}>
                {licenseList.length}
              </span>
            </div>

          </div>

          {/* 2. МОБИЛЬНАЯ ВЕРСИЯ */}
          <div className={styles.licenses__mobile}>
            {licenseList.map((item) => (
              <div key={item.id} className={styles["licenses__mobile-card"]}>
                <div className={styles.licenses__imgWrapper}>
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcSet={`${path}/${item.baseName}-mob.webp 1x, ${path}/${item.baseName}-mob@2x.webp 2x`}
                      type="image/webp"
                    />
                    <source
                      media="(max-width: 767px)"
                      srcSet={`${path}/${item.baseName}-mob.jpg 1x, ${path}/${item.baseName}-mob@2x.jpg 2x`}
                      type="image/jpeg"
                    />
                    <img
                      src={`${path}/${item.baseName}-mob.jpg`}
                      alt={item.title}
                      className={styles.licenses__img}
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
            ))}
          </div>

              <div className={styles.licenses__dots}>
              {licenseList.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.licenses__dot} ${
                    index === currentIndex
                      ? styles["licenses__dot--active"]
                      : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Перейти к странице ${index + 1}`}
                />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
