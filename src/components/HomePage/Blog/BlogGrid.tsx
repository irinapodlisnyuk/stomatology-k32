import Link from "next/link";
import styles from "./Blog.module.scss";
import { BlogItem } from "@/data/Blog_data";
import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";
import { FC, useEffect, useRef, useState } from "react";

interface BlogGridProps {
  posts: BlogItem[];
}

export const BlogGrid: FC<BlogGridProps> = ({ posts }) => {
  const CARDS_PER_PAGE = 6;
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_PAGE);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const displayedPosts = posts.slice(0, visibleCount);

  useEffect(() => {
    if (visibleCount >= posts.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(
            () => setVisibleCount((prev) => prev + CARDS_PER_PAGE),
            200,
          );
        }
      },
      { threshold: 0.1 },
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [visibleCount, posts.length]);

  return (
    <div className={styles["blog__grid-container"]}>
      <ul className={`${styles["blog__list"]} ${styles["blog__list--grid"]}`}>
        {displayedPosts.map(
          ({ id, slug, title, imgName, altText, textPreview }) => (
            <li
              key={id}
              className={`${styles["blog__item"]} ${styles["blog__item--card"]}`}
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
                  sizes="(max-width: 767px) calc(100vw - 30px), (max-width: 1023px) calc(50vw - 30px), 500px"
                />
                <div
                  className={`${styles["blog__item-content"]} ${styles["blog__item-content--color"]}`}
                >
                  <h3
                    className={`${styles["blog__item-text"]} ${styles["blog__item-text--color"]}`}
                  >
                    {title}
                  </h3>
                  <p className={styles["blog__item-preview"]}>{textPreview}</p>
                  <span className="btn btn--blog">Читать далее</span>
                </div>
              </Link>
            </li>
          ),
        )}
      </ul>

      {visibleCount < posts.length && (
        <div ref={observerRef} className={styles.blog__loaderTrigger}>
          <div className={styles.blog__spinner} />
        </div>
      )}
    </div>
  );
};
