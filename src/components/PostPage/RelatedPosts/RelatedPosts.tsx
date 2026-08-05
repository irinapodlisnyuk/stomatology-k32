import Link from "next/link";
import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";
import styles from "./RelatedPosts.module.scss";


interface RelatedPostItem {
  id: string | number;
  slug: string;
  title: string;
  imgName: string;
  altText: string;
  textPreview: string;
}

interface RelatedPostsProps {
  posts: RelatedPostItem[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className={styles.related}>
      <div className="container">
        <h2 className={styles.related__title}>Другие интересные материалы</h2>
        
        <div className={styles.related__grid}>
          {posts.map(({ id, slug, title, imgName, altText, textPreview }) => (
            <article key={id} className={styles.card}>
              <Link href={`/blog/${slug || id}`} className={styles.card__link}>
                <div className={styles.card__imageWrapper}>
                  <ResponsivePicture
                    folder="/image/blog"
                    baseName={imgName}
                    alt={altText || title}
                    className={styles.card__img}
                  />
                </div>
                <div className={styles.card__content}>
                  <h3 className={styles.card__postTitle}>{title}</h3>
                  <p className={styles.card__preview}>{textPreview}</p>
                  <span className={styles.card__more}>Читать далее →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}