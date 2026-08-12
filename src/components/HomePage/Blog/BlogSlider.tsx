"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Blog.module.scss";
import Icon from "@/components/Icon/Icon";
import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";
import { BlogItem } from "@/data/Blog_data";

interface BlogSliderProps {
  posts: BlogItem[];
}

export const BlogSlider: FC<BlogSliderProps> = ({ posts }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Железное определение мобилки/тачскрина через брейкпоинт CSS (767px из вашего миксина)
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const handlePrev = () =>
    setActiveIndex((p) => (p > 0 ? p - 1 : posts.length - 1));
  const handleNext = () =>
    setActiveIndex((p) => (p < posts.length - 1 ? p + 1 : 0));

  return (
    <div className={styles["blog__slider-container"]}>
      <ul className={styles["blog__list"]}>
        {posts.map(({ id, slug, name, title, imgName, altText }, index) => {
          const isCenter = index === activeIndex;

          let diff = index - activeIndex;
          const half = posts.length / 2;
          if (diff <= -half) diff += posts.length;
          if (diff > half) diff -= posts.length;

          const isVisible = diff >= -1 && diff <= 1;
          const translateX = diff * 85;

          // Формируем инлайн-стили ТОЛЬКО для десктопа.
          // На мобилках отдаем управление чистому SCSS файлу.
          const inlineStyle = !isMobile
            ? ({
                transform: isCenter
                  ? `translateX(${translateX}%) scale(1.05) translateY(-15px)`
                  : `translateX(${translateX}%) scale(0.85)`,
                opacity: isVisible ? (isCenter ? 1 : 0.6) : 0,
                pointerEvents: isVisible ? "auto" : "none",
              } as React.CSSProperties)
            : undefined;

          return (
            <li
              key={id}
              style={inlineStyle}
              className={`${styles["blog__item"]} ${!isMobile && isCenter ? styles["blog__item--center"] : ""}`}
              onClick={() => {
                if (!isMobile && !isCenter) {
                  setActiveIndex(index);
                }
              }}
            >
              <Link
                href={`/blog/${slug || id}`}
                className={styles["blog__item-link"]}
                onClick={(e) => {
                  if (isMobile) return;

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
                  sizes="(max-width: 767px) calc(100vw - 30px), (max-width: 1023px) calc(50vw - 40px), 500px"
                />
                <div className={styles["blog__item-content"]}>
                  <span className={styles["blog__item-name"]}>{name}</span>
                  <h3 className={styles["blog__item-text"]}>{title}</h3>
                </div>
              </Link>
            </li>
          );
        })}
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
  );
};
