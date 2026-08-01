"use client";
import { useState } from "react";
import styles from "./PhotoGallery.module.scss";
import { Gallery_DATA } from "./PhotoGallery_data";
import Link from "next/link";

export default function Photogallery() {
  const gallery = Gallery_DATA;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.gallery}>
      <div className="container">
        <div className={styles.gallery__wrapper}>
          <div className={styles["gallery__wrapper-header"]}>
            <h2 className={styles.gallery__title}>
              Экскурсия по&nbsp;нашей клинике
            </h2>
            <p className={styles.gallery__subtitle}>
              Современные условия для исключительного ухода.
            </p>
          </div>

          <div className={styles["gallery__slider-container"]}>
            <ul className={styles["gallery__list"]}>
              {gallery.map(({ id, slug, imgName, altText }, index) => {
                const isCenter = index === activeIndex;

                // Универсальное вычисление смещения для бесконечного цикла
                let diff = index - activeIndex;

                const half = gallery.length / 2;
                if (diff <= -half) diff += gallery.length;
                if (diff > half) diff -= gallery.length;

                // Элемент видим только если это центр или его ближайшие соседи
                const isVisible = diff >= -1 && diff <= 1;

                // Множитель сдвига для абсолютного позиционирования карточек (в % от их ширины)
                const translateX = diff * 85;

                return (
                  <li
                    key={id}
                    className={`${styles["gallery__item"]} ${isCenter ? styles["gallery__item--center"] : ""}`}
                    onClick={() => !isCenter && setActiveIndex(index)}
                    style={{
                      // Сдвигаем карточки строго линейно по рельсам
                      transform: isCenter
                        ? `translateX(${translateX}%) scale(1.05) translateY(-15px)`
                        : `translateX(${translateX}%) scale(0.85)`,
                      opacity: isVisible ? (isCenter ? 1 : 0.6) : 0,
                      pointerEvents: isVisible ? "auto" : "none",
                    }}
                  >
                    <Link
                      href={`/gallery/${slug || id}`}
                      className={styles["gallery__item-link"]}
                      onClick={(e) => {
                        if (!isCenter) {
                          e.preventDefault();
                        }
                      }}
                    >
                      <picture className={styles["gallery__picture"]}>
                        <source
                          srcSet={`/image/gallery/${imgName}.webp 1x, /image/gallery/${imgName}@2x.webp 2x`}
                          type="image/webp"
                        />
                        <source
                          srcSet={`/image/gallery/${imgName}.jpg 1x, /image/gallery/${imgName}@2x.jpg 2x`}
                          type="image/jpeg"
                        />
                        <img
                          src={`/image/gallery/${imgName}.jpg`}
                          alt={altText}
                          className={styles["gallery__picture-img"]}
                          loading="lazy"
                        />
                      </picture>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Точки-индикаторы страниц */}
            {/* <div className={styles.gallery__dots}>
              {licenseList.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.gallery__dot} ${
                    index === currentIndex
                      ? styles["gallery__dot--active"]
                      : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Перейти к странице ${index + 1}`}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
