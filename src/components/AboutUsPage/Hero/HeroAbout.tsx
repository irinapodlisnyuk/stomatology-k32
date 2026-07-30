
import styles from "./hero.module.scss";

export default function HeroAbout() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <picture className={styles.hero__picture}>
          {/* 1. Мобильные (до 767px включительно) */}
          <source
            media="(max-width: 767px)"
            srcSet="/image/aboutPage/aboutPage-mobile.webp 1x, /image/aboutPage/aboutPage-mobile@2x.webp 2x"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/image/aboutPage/aboutPage-mobile.jpg 1x, /image/aboutPage/aboutPage-mobile@2x.jpg 2x"
            type="image/jpg"
          />

          {/* 2. Планшеты (от 768px до 1199px включительно) */}
          <source
            media="(max-width: 1199px)"
            srcSet="/image/aboutPage/aboutPage-tablet.webp 1x, /image/aboutPage/aboutPage-tablet@2x.webp 2x"
            type="image/webp"
          />
          <source
            media="(max-width: 1199px)"
            srcSet="/image/aboutPage/aboutPage-tablet.jpg 1x, /image/aboutPage/aboutPage-tablet@2x.jpg 2x"
            type="image/jpg"
          />

          {/* 3. Десктоп (от 1200px) */}
          <source
            srcSet="/image/aboutPage/aboutPage.webp 1x, /image/aboutPage/aboutPage@2x.webp 2x"
            type="image/webp"
          />
          <source
            srcSet="/image/aboutPage/aboutPage.jpg 1x, /image/aboutPage/aboutPage@2x.jpg 2x"
            type="image/jpg"
          />

          {/* Базовый тег (фоллбек) */}
          <img
            src="/image/aboutPage/aboutPage.jpg"
            alt="Современная стоматология Клиника +32"
            className={styles.hero__img}
            fetchPriority="high"
            loading="eager"
          />
        </picture>

        <div className={styles.hero__wrapper}>
          <h2 className={styles.hero__title}>
            О стоматологической клинике&nbsp;К+32
          </h2>
          <p className={styles["hero__subtitle"]}>
            Ваш партнер в&nbsp;области здоровья зубов
          </p>
        </div>
      </div>
    </section>
  );
}
