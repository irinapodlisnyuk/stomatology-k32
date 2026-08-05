import Link from "next/link";
import Image from "next/image";
import styles from "./Post.module.scss";

interface PostProps {
  post: {
    name: string;
    title: string;
    imgName: string;
    altText: string;
    fullText: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <article className={styles.post}>
      <div className="container">
        <Link href="/blog" className={styles.post__backBtn}>
          ← Назад в блог
        </Link>

        <header className={styles.post__header}>
          <span className={styles.post__category}>{post.name}</span>
          <h1 className={styles.post__title}>{post.title}</h1>
        </header>

        <div className={styles.post__imageWrapper}>
          <Image 
            src={`/image/blog/${post.imgName}.jpg`} 
            alt={post.altText || post.title} 
            fill
            priority 
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        <div 
          className={styles.post__content} 
          dangerouslySetInnerHTML={{ __html: post.fullText }} 
        />
      </div>
    </article>
  );
}