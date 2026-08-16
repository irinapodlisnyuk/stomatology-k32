"use client";

import styles from "./HeroService.module.scss";

interface HeroServiceProps {
  title: string;
}

export function HeroService({ title }: HeroServiceProps) {
  return (
    <section className={styles.heroService}>
      {/* 1. Глубокий градиент */}
      <div className={styles.heroService__gradient} />

      {/* 2.  СВЕТЯЩИЕСЯ СФЕРЫ-БЛИКИ */}
      <div className={styles.heroService__glowContainer}>
        <div
          className={`${styles.heroService__glowOrb} ${styles["heroService__glowOrb--1"]}`}
        />
        <div
          className={`${styles.heroService__glowOrb} ${styles["heroService__glowOrb--2"]}`}
        />
      </div>

      {/* 3. ЖИВЫЕ ВОЛНЫ С ПАРАЛЛАКСОМ */}
      <div className={styles.heroService__wavesWrapper}>
        <svg
          className={styles.heroService__waveSvg}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C150,90 350,-10 500,30 C650,70 850,20 1000,40 C1150,60 1200,20 1200,20 L1200,120 L0,120 Z"
            className={`${styles.heroService__wave} ${styles["heroService__wave--1"]}`}
          />
          <path
            d="M0,50 C300,10 600,100 900,40 C1050,10 1150,70 1200,60 L1200,120 L0,120 Z"
            className={`${styles.heroService__wave} ${styles["heroService__wave--2"]}`}
          />
          <path
            d="M0,40 C200,20 400,60 600,40 C800,20 1000,70 1200,30 L1200,120 L0,120 Z"
            className={`${styles.heroService__wave} ${styles["heroService__wave--3"]}`}
          />
        </svg>
      </div>

      {/* 4. ПАРЯЩИЕ МИКРОЧАСТИЦЫ */}
      <div className={styles.heroService__particles}>
        <span className={styles.heroService__dot} />
        <span className={styles.heroService__dot} />
        <span className={styles.heroService__dot} />
        <span className={styles.heroService__dot} />
        <span className={styles.heroService__dot} />
      </div>

      {/* 5. КОНТЕНТ  ТЕКСТА */}
      <div className="container">
        <div className={styles.heroService__content}>
            <h1 className={styles.heroService__title}>{title}</h1>
        </div>
      </div>
    </section>
  );
}
