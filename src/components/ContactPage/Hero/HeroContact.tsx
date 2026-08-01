import styles from "./hero.module.scss";

export default function HeroContact() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <picture className={styles.hero__picture}>
          {/* 1. Мобильные (до 767px включительно) */}
          <source
            media="(max-width: 767px)"
            srcSet="/image/call/call-mob.webp 1x, /image/call/call-mob@2x.webp 2x"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/image/call/call-mob.jpg 1x, /image/call/call-mob@2x.jpg 2x"
            type="image/jpg"
          />

          {/* 2. Планшеты (от 768px до 1199px включительно) */}
          <source
            media="(max-width: 1199px)"
            srcSet="/image/call/call-tab.webp 1x, /image/call/call-tab@2x.webp 2x"
            type="image/webp"
          />
          <source
            media="(max-width: 1199px)"
            srcSet="/image/call/call-tab.jpg 1x, /image/call/call-tab@2x.jpg 2x"
            type="image/jpg"
          />

          {/* 3. Десктоп (от 1200px) */}
          <source
            srcSet="/image/call/call.webp 1x, /image/call/call@2x.webp 2x"
            type="image/webp"
          />
          <source
            srcSet="/image/call/call.jpg 1x, /image/call/call@2x.jpg 2x"
            type="image/jpg"
          />

          {/* Базовый тег (фоллбек) */}
          <img
            src="/image/call/call.jpg"
            alt="Современная стоматология Клиника +32"
            className={styles.hero__img}
            fetchPriority="high"
            loading="eager"
          />
        </picture>

        <div className={styles.hero__wrapper}>
          <h2 className={styles.hero__title}>
           Связаться с нами
          </h2>
          <p className={styles["hero__subtitle"]}>
            Давайте общаться легко и непринужденно
          </p>
        </div>
      </div>
    </section>
  );
}
