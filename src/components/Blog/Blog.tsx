import styles from "./Blog.module.scss";
import { BLOG_DATA } from "./Blog_data";

export default function Blog() {
  const blog = BLOG_DATA;

  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.blog__wrapper}>
          <div className={styles["blog__header"]}>
            <h2 className={styles["blog__header-title"]}>Блог</h2>

            <h3 className={styles["blog__header-subtitle"]}>
              Советы и рекомендации по уходу за зубами
            </h3>
          </div>

          <ul className={styles["blog__list"]}>
            {blog.map(
              ({ id, name, title, imgName, altText }, index) => (
                <li
                  key={id}
                  className={styles["blog__item"]}
                  style={{ "--index": index } as React.CSSProperties}
                >
                  <picture className={styles["blog__picture"]}>
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
                  </picture>
                  <div className={styles["blog__item-info"]}>
                    <span className={styles["blog__item-name"]}>{name}</span>
                    <h3 className={styles["blog__item-text"]}>{title}</h3>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
