import Icon from "@/models/Icon";
import { advantagesList } from "./AdvantageItem";
import styles from "./Advantages.module.scss";

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <div className={styles.advantages__wrapper}>
          <div className={styles["advantages__wrapper-left"]}>
            <div className={styles["advantages__wrapper-header"]}>
              <h2 className={styles.advantages__title}>Почему выбирают нас?</h2>
              <p className={styles.advantages__subtitle}>
                Преимущества c&nbsp;&laquo;K+32&raquo;
              </p>
              <p className={styles.advantages__text}></p>
            </div>
            <div className={styles.advantages__grid}>
              {advantagesList.map((item) => (
                <div key={item.id} className={styles.advantages__card}>
                  <Icon
                    className={styles["advantages__icon"]}
                    name={item.icon}
                  />
                  <span className={styles.advantages__number}>
                    {item.value}
                  </span>
                  <p className={styles.advantages__text}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles["advantages__wrapper-right"]}>
            <picture className={styles.advantages__picture}>
              {/* 1. МОБИЛЬНЫЕ (до 768px включительно) */}
              <source
                media="(max-width: 768px)"
                srcSet="/image/advantages/advantages-mob.webp 1x, /image/advantages/advantages-mob@2x.webp 2x"
                type="image/webp"
              />
              <source
                media="(max-width: 768px)"
                srcSet="/image/advantages/advantages-mob.jpg 1x, /image/advantages/advantages-mob@2x.jpg 2x"
                type="image/jpg"
              />

              {/* 2. ПЛАНШЕТЫ (от 769px до 1024px включительно) */}
              <source
                media="(max-width: 1024px)"
                srcSet="/image/advantages/advantages-tab.webp 1x, /image/advantages/advantages-tab@2x.webp 2x"
                type="image/webp"
              />
              <source
                media="(max-width: 1024px)"
                srcSet="/image/advantages/advantages-tab.jpg 1x, /image/advantages/advantages-tab@2x.jpg 2x"
                type="image/jpg"
              />

              {/* 3. ДЕСКТОП (все, что больше 1024px) */}
              <source
                srcSet="/image/advantages/advantages.webp 1x, /image/advantages/advantages@2x.webp 2x"
                type="image/webp"
              />
              <source
                srcSet="/image/advantages/advantages.jpg 1x, /image/advantages/advantages@2x.jpg 2x"
                type="image/jpg"
              />

              {/* Базовый тег (фоллбек) */}
              <img
                src="/image/advantages/advantages-tab.jpg"
                alt="Прием в Клиника +32"
                className={styles["advantages__picture-img"]}
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
