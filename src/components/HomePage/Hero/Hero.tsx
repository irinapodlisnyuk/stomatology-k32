import Link from "next/link";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <picture className={styles.hero__picture}>
          <source
            media="(max-width: 767px)"
            srcSet="/image/hero/hero-mobile.webp 1x, /image/hero/hero-mobile@2x.webp 2x"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/image/hero/hero-mobile.jpg 1x, /image/hero/hero-mobile@2x.jpg 2x"
            type="image/jpg"
          />

          <source
            media="(max-width: 1199px)"
            srcSet="/image/hero/hero-tablet.webp 1x, /image/hero/hero-tablet@2x.webp 2x"
            type="image/webp"
          />
          <source
            media="(max-width: 1199px)"
            srcSet="/image/hero/hero-tablet.jpg 1x, /image/hero/hero-tablet@2x.jpg 2x"
            type="image/jpg"
          />

          <source
            srcSet="/image/hero/hero.webp 1x, /image/hero/hero@2x.webp 2x"
            type="image/webp"
          />
          <source
            srcSet="/image/hero/hero.jpg 1x, /image/hero/hero@2x.jpg 2x"
            type="image/jpg"
          />

          <img
            src="/image/hero/hero.jpg"
            alt="Современная стоматология Клиника +32"
            className={styles.hero__bg}
            fetchPriority="high"
            loading="eager"
          />
        </picture>

        <div className={styles.hero__wrapper}>
          <h2 className={styles.hero__title}>Добро пожаловать в&nbsp;К+32</h2>
          <p className={styles["hero__subtitle"]}>
            Заботимся о&nbsp;здоровье и&nbsp;красоте ваших зубов на&nbsp;каждом
            этапе.
          </p>
          <p className={styles.hero__text}>
            Мы&nbsp;знаем, что поход к&nbsp;стоматологу часто вызывает волнение.
            Поэтому в К+32 делаем упор на&nbsp;комфорт. Цифровая диагностика,
            экспертное лечение и&nbsp;имплантация от&nbsp;опытых врачей
            со&nbsp;стажем более 10&nbsp;лет.
          </p>

          <div className={styles["hero__actions"]}>
            <Link href="/BookAppointment" className="btn btn--appointment">
              Записаться на прием
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
