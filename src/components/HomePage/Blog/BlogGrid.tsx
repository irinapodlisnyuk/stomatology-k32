"use client";

import { FC, useState, useRef, useCallback } from "react";
import Link from "next/link";
import styles from "./Blog_grid.module.scss";
import { BlogItem } from "@/data/Blog_data";
import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";

interface BlogGridProps {
  posts: BlogItem[];
}

export const BlogGrid: FC<BlogGridProps> = ({ posts = [] }) => {
  const CARDS_PER_PAGE = 6;
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_PAGE);
  
  // Храним ссылку на observer, чтобы не пересоздавать его при каждом рендере
  const observer = useRef<IntersectionObserver | null>(null);

  const safePosts = Array.isArray(posts) ? posts : [];
  const displayedPosts = safePosts.slice(0, visibleCount);

  //  Используем useCallback для отслеживания триггера.

  const lastElementRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    if (visibleCount >= safePosts.length) return;

    // Отключаем предыдущий наблюдатель перед созданием нового
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Добавляем карточки плавно, предотвращая гонку потоков
        setVisibleCount((prev) => Math.min(prev + CARDS_PER_PAGE, safePosts.length));
      }
    }, { threshold: 0.1, rootMargin: "100px" });
    
    observer.current.observe(node);
  }, [visibleCount, safePosts.length]);

  return (
    <div className={styles["blog__grid-container"]}>
      <ul className={`${styles["blog__list"]} ${styles["blog__list--grid"]}`}>
        {displayedPosts.map(
          ({ id, slug, title, imgName, altText, textPreview }, index) => (
            <li
              key={id}
              className={`${styles["blog__item"]} ${styles["blog__item--card"]}`}
             style={{ "--blog-index": index } as React.CSSProperties}
          >
              <Link
                href={`/blog/${slug || id}`}
                className={styles["blog__item-link"]}
              >
                <ResponsivePicture
                  folder="/image/blog"
                  baseName={imgName}
                  alt={altText}
                  className={`${styles["blog__picture-img"]} ${styles["blog__picture-img--rotate"]}`}
                  sizes="(max-width: 767px) 360px, (max-width: 1023px) 500px, 400px"
                />
                <div
                  className={`${styles["blog__item-content"]} ${styles["blog__item-content--color"]}`}
                >
                  <h3
                    className={`${styles["blog__item-text"]} ${styles["blog__item-text--color"]}`}
                  >
                    {title}
                  </h3>
                  {textPreview && (
                    <p className={styles["blog__item-preview"]}>{textPreview}</p>
                  )}
                  <span className="btn btn--blog">Читать далее</span>
                </div>
              </Link>
            </li>
          ),
        )}
      </ul>

      {visibleCount < safePosts.length && (
        <div ref={lastElementRef} className={styles.blog__loaderTrigger}>
          <div className={styles.blog__spinner} />
        </div>
      )}
    </div>
  );
};