import Icon from "@/models/Icon";
import { advantagesList } from "./AdvantageItem";
import styles from "./Advantages.module.scss";

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <div className={styles.advantages__wrapper}>
          <div className={styles["advantages__wrapper-left"]}>
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
                <span className={styles.advantages__number}>{item.value}</span>
                <p className={styles.advantages__text}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
