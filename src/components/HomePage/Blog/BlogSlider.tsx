"use client";

import { FC, useState } from "react";
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

  const handlePrev = () =>
    setActiveIndex((p) => (p > 0 ? p - 1 : posts.length - 1));
  const handleNext = () =>
    setActiveIndex((p) => (p < posts.length - 1 ? p + 1 : 0));

  return (
    <div className={styles["blog__slider-container"]}>
      {/* 1. Список карточек на первом месте */}
      <ul className={styles["blog__list"]}>
        {posts.map(({ id, slug, name, title, imgName, altText }, index) => {
          const isCenter = index === activeIndex;

          let diff = index - activeIndex;
          const half = posts.length / 2;
          if (diff <= -half) diff += posts.length;
          if (diff > half) diff -= posts.length;

          const isVisible = diff >= -1 && diff <= 1;
          const translateX = diff * 85;

          const inlineStyle = {
            transform: isCenter
              ? `translateX(${translateX}%) scale(1.05) translateY(-15px)`
              : `translateX(${translateX}%) scale(0.85)`,
            opacity: isVisible ? (isCenter ? 1 : 0.6) : 0,
            pointerEvents: isVisible ? "auto" : "none",
            zIndex: isCenter ? 5 : 2, 
          } as React.CSSProperties;

          const CardInner = (
            <>
              <ResponsivePicture
                folder="/image/blog"
                baseName={imgName}
                alt={altText}
                className={styles["blog__picture-img"]}
                sizes="(max-width: 767px) 360px, (max-width: 1023px) 500px, 400px"
              />
              <div className={styles["blog__item-content"]}>
                <span className={styles["blog__item-name"]}>{name}</span>
                <h3 className={styles["blog__item-text"]}>{title}</h3>
              </div>
            </>
          );

          return (
            <li
              key={id}
              style={inlineStyle}
              className={`${styles["blog__item"]} ${isCenter ? styles["blog__item--center"] : ""}`}
              onClick={() => {
                if (!isCenter) setActiveIndex(index);
              }}
            >
              {isCenter ? (
                <Link href={`/blog/${slug || id}`} className={styles["blog__item-link"]}>
                  {CardInner}
                </Link>
              ) : (
                <div className={styles["blog__item-link"]} style={{ cursor: "pointer" }}>
                  {CardInner}
                </div>
              )}
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