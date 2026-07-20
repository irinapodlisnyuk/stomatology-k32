import Link from "next/link";
import styles from "./Services.module.scss";
import { ServicesList } from "./List-service";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.services__wrapper}>
          <div className={styles["services__header"]}>
            <h2
              className={`${styles["services__header-title"]} ${styles["animate-fade-up"]}`}
              style={{ animationDelay: "0.2s" }}
            >
              Cтоматологические услуги
            </h2>
            <p
              className={`${styles["services__header-subtitle"]} ${styles["animate-fade-up"]}`}
              style={{ animationDelay: "0.35s" }} // Через 150мс
            >
              Забота о&nbsp;каждом аспекте вашей улыбки
            </p>
            <p
              className={`${styles["services__header-text"]} ${styles["animate-fade-up"]}`}
              style={{ animationDelay: "0.5s" }} // Через 150мс после подзаголовка
            >
              Здоровье зубов определяет качество жизни, поэтому мы&nbsp;создали
              пространство, где лечение проходит абсолютно безболезненно
              и&nbsp;комфортно. Индивидуальный план лечения, современное
              оборудование премиум-класса и&nbsp;бережное отношение
              к&nbsp;каждому пациенту гарантируют идеальный результат, которым
              вы&nbsp;будете гордиться.
            </p>
          </div>

          <ServicesList />

          <div
            className={`${styles["services__actions"]} ${styles["animate-fade-up"]}`}
            style={{ animationDelay: "2.0s" }}
          >
            <Link href="/services" className="btn btn--services">
              Изучите все услуги
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
