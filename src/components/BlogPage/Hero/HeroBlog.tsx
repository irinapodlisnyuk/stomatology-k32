import styles from "./hero.module.scss";

export default function HeroBlog() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <picture className={styles.hero__picture}>
          {/* 1. Мобильные (до 767px включительно) */}
          <source
            media="(max-width: 767px)"
            srcSet="/image/heroBlog/blog-mob.webp 1x, /image/heroBlog/blog-mob@2x.webp 2x"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/image/heroBlog/blog-mob.jpg 1x, /image/heroBlog/blog-mob@2x.jpg 2x"
            type="image/jpg"
          />

          {/* 2. Планшеты (от 768px до 1199px включительно) */}
          <source
            media="(max-width: 1199px)"
            srcSet="/image/heroBlog/blog-tab.webp 1x, /image/heroBlog/blog-tab@2x.webp 2x"
            type="image/webp"
          />
          <source
            media="(max-width: 1199px)"
            srcSet="/image/heroBlog/blog-tab.jpg 1x, /image/blog/heroBlog-tab@2x.jpg 2x"
            type="image/jpg"
          />

          {/* 3. Десктоп (от 1200px) */}
          <source
            srcSet="/image/heroBlog/blog.webp 1x, /image/heroBlog/blog@2x.webp 2x"
            type="image/webp"
          />
          <source
            srcSet="/image/heroBlog/blog.jpg 1x, /image/blog/heroBlog@2x.jpg 2x"
            type="image/jpg"
          />

          {/* Базовый тег (фоллбек) */}
          <img
            src="/image/heroBlog/blog.jpg"
            alt="Современная стоматология Клиника +32"
            className={styles.hero__img}
            fetchPriority="high"
            loading="eager"
          />
        </picture>

        <div className={styles.hero__wrapper}>
          <h2 className={styles.hero__title}>Блог</h2>
          <p className={styles["hero__subtitle"]}>
            Будьте в курсе последних новостей K+32.
          </p>
        </div>
      </div>
    </section>
  );
}
