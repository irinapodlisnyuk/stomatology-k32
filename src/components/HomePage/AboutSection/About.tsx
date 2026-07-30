import Link from "next/link";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.about__wrapper}>
          <div className={styles["about__wrapper-info"]}>
            <h2 className={styles.about__title}>О&nbsp;стоматологии К+32</h2>
            <h3 className={styles["about__subtitle"]}>
              Мы&nbsp;Заботимся о&nbsp;Здоровье Ваших Зубов
            </h3>
            <p className={styles.about__text}>
              Наша стоматологическая клиника объединяет передовые технологии,
              многолетний опыт врачей и&nbsp;искреннюю заботу о&nbsp;каждом
              пациенте. Мы&nbsp;создаем комфортные условия для лечения
              и&nbsp;помогаем обрести уверенность в&nbsp;вашей улыбке.
            </p>

            <div className={styles["about__actions"]}>
              <Link href="/aboutUs" className="btn btn--about">
                Узнать больше
              </Link>
            </div>
          </div>
          <div className={styles["about__wrapper-image"]}>
            <picture className={styles.about__picture}>
              {/* 1. МОБИЛЬНЫЕ (до 768px включительно) */}
              <source
                media="(max-width: 768px)"
                srcSet="/image/about/about-mobile.webp 1x, /image/about/about-mobile@2x.webp 2x"
                type="image/webp"
              />
              <source
                media="(max-width: 768px)"
                srcSet="/image/about/about-mobile.jpg 1x, /image/about/about-mobile@2x.jpg 2x"
                type="image/jpg"
              />

              {/* 2. ПЛАНШЕТЫ (от 769px до 1024px включительно) */}
              <source
                media="(max-width: 1024px)"
                srcSet="/image/about/about-tablet.webp 1x, /image/about/about-tablet@2x.webp 2x"
                type="image/webp"
              />
              <source
                media="(max-width: 1024px)"
                srcSet="/image/about/about-tablet.jpg 1x, /image/about/about-tablet@2x.jpg 2x"
                type="image/jpg"
              />

              {/* 3. ДЕСКТОП (все, что больше 1024px) */}
              <source
                srcSet="/image/about/about.webp 1x, /image/about/about@2x.webp 2x"
                type="image/webp"
              />
              <source
                srcSet="/image/about/about.jpg 1x, /image/about/about@2x.jpg 2x"
                type="image/jpg"
              />

              {/* Базовый тег (фоллбек) */}
              <img
                src="/image/about/about.jpg"
                alt="Прием в Клиника +32"
                className={styles["about__picture-img"]}
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
