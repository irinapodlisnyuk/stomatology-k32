"use client";
import { useEffect, useState } from "react";
import styles from "./PhotoGallery.module.scss";
import { Gallery_DATA } from "./PhotoGallery_data";


export default function Photogallery() {
  const gallery = Gallery_DATA;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex, gallery.length]);

  return (
    <section className={styles.gallery}>
      <div className="container">
        <div className={styles.gallery__wrapper}>
          <div className={styles["gallery__wrapper-header"]}>
            <h2 className={styles.gallery__title}>
              Экскурсия по&nbsp;нашей клинике
            </h2>
            <p className={styles.gallery__subtitle}>
              Современные условия для исключительного ухода
            </p>
          </div>

          <div className={styles["gallery__slider-container"]}>
            <ul className={styles["gallery__list"]}>
              {gallery.map(({ id, imgName, altText }, index) => {
                const isCenter = index === activeIndex;

                // Оставляем только базовый расчет для классов
                let diff = index - activeIndex;
                const half = gallery.length / 2;
                if (diff <= -half) diff += gallery.length;
                if (diff > half) diff -= gallery.length;

                const isVisible = diff >= -1 && diff <= 1;

                return (
                  <li
                    key={id}
                    className={`${styles["gallery__item"]} ${isCenter ? styles["gallery__item--center"] : ""} ${isVisible ? styles["gallery__item--visible"] : ""}`}
                    onClick={() => !isCenter && setActiveIndex(index)}
                    style={{ "--offset": diff } as React.CSSProperties}
                  >
                    <div className={styles["gallery__item-link"]}>
                    
                      <picture className={styles["gallery__picture"]}>
                        <source
                          srcSet={`/image/gallery/${imgName}.webp 1x, /image/gallery/${imgName}@2x.webp 2x`}
                          type="image/webp"
                          sizes="(max-width: 767px) 280px, (max-width: 1023px) 380px, 520px"
                        />
                        <source
                          srcSet={`/image/gallery/${imgName}.jpg 1x, /image/gallery/${imgName}@2x.jpg 2x`}
                          type="image/jpeg"
                          sizes="(max-width: 767px) 280px, (max-width: 1023px) 380px, 520px"
                        />
                        <img
                          src={`/image/gallery/${imgName}.jpg`}
                          alt={altText}
                          className={styles["gallery__picture-img"]}
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
