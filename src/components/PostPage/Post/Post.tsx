"use client";

import Link from "next/link";
import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";
import { BlogPost } from "../PostPage";
import styles from "./Post.module.scss";
import asideStyles from "./aside.module.scss";
import { useModals } from "@/components/context/ModalContext";
import { AppointmentButton } from "@/components/Form/Button/AppointmentButton";

interface PostProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function Post({ post, relatedPosts }: PostProps) {
  const { openAppointment } = useModals();

  return (
    <article className={styles.post}>
      <div className="container">
        <Link href="/blog" className={styles.post__backBtn}>
          ← Назад в блог
        </Link>
        <div className={styles.post__wrapper}>
          <div className={styles.post__info}>
            <ResponsivePicture
              folder="/image/blog"
              baseName={post.imgName}
              alt={post.altText || post.title}
              className={styles.post__img}
              sizes="(max-width: 767px) calc(100vw - 30px), (max-width: 1023px) 60vw, 500px"
            />
            <div
              suppressHydrationWarning
              className={styles.post__content}
              dangerouslySetInnerHTML={{ __html: post.fullText }}
            />
          </div>

          <aside className={asideStyles.post__inner}>
            <div className={asideStyles.post__appointment}>
              <h3 className={asideStyles["post__appointment-title"]}>
                Онлайн-запись на прием
              </h3>
              <p className={asideStyles["post__appointment-subtitle"]}>
                Удобное онлайн-бронирование
              </p>
              <div className={asideStyles.post__appointmentActions}>
                {/* <button className="btn btn--post" onClick={openAppointment}>
                  Записаться на прием
                </button> */}
                  <AppointmentButton className="btn btn--post" />
              </div>
            </div>

            {/* НАВИГАЦИОННЫЙ БЛОК С РЕКОМЕНДАЦИЯМИ В САЙДБАРЕ */}
            {relatedPosts.length > 0 && (
              <nav className={asideStyles.related} aria-label="Читайте также">
                <div className={asideStyles.related__grid}>
                  {relatedPosts.map(({ id, slug, title, imgName, altText }) => (
                    <article key={id} className={asideStyles.card}>
                      <Link
                        href={`/blog/${slug || id}`}
                        className={asideStyles.card__link}
                      >
                        <ResponsivePicture
                          folder="/image/blog"
                          baseName={imgName}
                          alt={altText || title}
                          className={asideStyles.card__img}
                          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 30vw, 300px"
                        />
                        <h4 className={asideStyles["card__post-title"]}>
                          {title}
                        </h4>
                      </Link>
                    </article>
                  ))}
                </div>
              </nav>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
}
