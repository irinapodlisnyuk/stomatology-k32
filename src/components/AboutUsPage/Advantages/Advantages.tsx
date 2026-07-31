"use client"
import Icon from "@/models/Icon";
import { advantagesList } from "./AdvantageItem";
import AnimatedNumber from "./AnimatedNumber";
import styles from "./Advantages.module.scss";

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <div className={styles.advantages__wrapper}>
          <div className={styles["advantages__wrapper-header"]}>
            <h2 className={styles.advantages__title}>Почему выбирают нас?</h2>
            <p className={styles.advantages__subtitle}>
              Преимущества c&nbsp;&laquo;K+32&raquo;
            </p>
          </div>
          <div className={styles.advantages__grid}>
            {advantagesList.map((item) => (
              <div
                key={item.id}
                className={`${styles.advantages__card} ${
                  item.hasBorder ? styles["advantages__card--bordered"] : ""
                }`}
              >
                <Icon className={styles["advantages__card-icon"]} name={item.icon} />
                <span className={styles["advantages__card-number"]}>  <AnimatedNumber value={item.number} /></span>
                <p className={styles["advantages__card-text"]}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
