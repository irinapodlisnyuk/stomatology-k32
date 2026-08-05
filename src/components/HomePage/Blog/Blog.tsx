"use client";

import { useState } from "react";
import styles from "./Blog.module.scss";
import { BLOG_DATA } from "./Blog_data";
import Icon from "@/components/models/Icon";
import Link from "next/link";
import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";

export default function Blog() {
  const blog = BLOG_DATA;
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : blog.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < blog.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.blog__wrapper}>
          <div className={styles["blog__header"]}>
            <h2 className={styles["blog__header-title"]}>Блог</h2>
            <p className={styles["blog__header-subtitle"]}>
              Советы и Рекомендации
            </p>
          </div>

          <div className={styles["blog__slider-container"]}>
            <ul className={styles["blog__list"]}>
              {blog.map(
                ({ id, slug, name, title, imgName, altText }, index) => {
                  const isCenter = index === activeIndex;

                  // Универсальное вычисление смещения для бесконечного цикла
                  let diff = index - activeIndex;

                  const half = blog.length / 2;
                  if (diff <= -half) diff += blog.length;
                  if (diff > half) diff -= blog.length;

                  // Элемент видим только если это центр или его ближайшие соседи
                  const isVisible = diff >= -1 && diff <= 1;

                  // Множитель сдвига для абсолютного позиционирования карточек (в % от их ширины)
                  const translateX = diff * 85;

                  return (
                    <li
                      key={id}
                      className={`${styles["blog__item"]} ${isCenter ? styles["blog__item--center"] : ""}`}
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
                        href={`/blog/${slug || id}`}
                        className={styles["blog__item-link"]}
                        onClick={(e) => {
                          if (!isCenter) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <ResponsivePicture
                          folder="/image/blog"
                          baseName={imgName}
                          alt={altText}
                          className={styles["blog__picture-img"]}
                        />
                        {/* <picture className={styles["blog__picture"]}>
                          <source
                            srcSet={`/image/blog/${imgName}.webp 1x, /image/blog/${imgName}@2x.webp 2x`}
                            type="image/webp"
                          />
                          <source
                            srcSet={`/image/blog/${imgName}.jpg 1x, /image/blog/${imgName}@2x.jpg 2x`}
                            type="image/jpeg"
                          />
                          <img
                            src={`/image/blog/${imgName}.jpg`}
                            alt={altText}
                            className={styles["blog__picture-img"]}
                            loading="lazy"
                          />
                        </picture> */}
                        <div className={styles["blog__item-content"]}>
                          <span className={styles["blog__item-name"]}>
                            {name}
                          </span>
                          <h3 className={styles["blog__item-text"]}>{title}</h3>
                        </div>
                      </Link>
                    </li>
                  );
                },
              )}
            </ul>

            <div className={styles["blog__nav"]}>
              <button
                className={`${styles["blog__btn"]} ${styles["blog__btn--prev"]}`}
                onClick={handlePrev}
                aria-label="Назад"
              >
                <Icon className={styles["blog__btn-icon"]} name={"arrow"} />
              </button>
              <button
                className={`${styles["blog__btn"]} ${styles["blog__btn--next"]}`}
                onClick={handleNext}
                aria-label="Вперед"
              >
                <Icon
                  className={`${styles["blog__btn-icon"]} ${styles["blog__btn-icon--next"]}`}
                  name={"arrow"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
