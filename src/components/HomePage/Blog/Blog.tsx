"use client";

import { FC } from "react";
import styles from "./Blog.module.scss";
import { BLOG_DATA } from "@/data/Blog_data";
import { BlogGrid } from "./BlogGrid";
import { BlogSlider } from "./BlogSlider";

interface BlogProps {
  isFullPage?: boolean;
}

export const Blog: FC<BlogProps> = ({ isFullPage = false }) => {
  return (
    <section className={`${styles.blog} ${isFullPage ? styles["blog--full-page"] : ""}`}>
      <div className="container">
        <div className={styles.blog__wrapper}>

            <div className={styles["blog__header"]}>
            {!isFullPage && (
              <>
                <h2 className={styles["blog__header-title"]}>Блог</h2>
                <p className={styles["blog__header-subtitle"]}>Советы и Рекомендации</p>
              </>
            )}
          </div>
          {isFullPage ? <BlogGrid posts={BLOG_DATA} /> : <BlogSlider posts={BLOG_DATA} />}
        </div>
      </div>
    </section>
  );
};

