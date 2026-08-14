
import { ServicesList } from "@/components/HomePage/Service/List-service"; // Проверьте ваш точный путь к файлу List-service
import styles from "./ServicesAll.module.scss"; // Или ваш путь к файлу стилей этой секции

export default function ServicesAll() {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.services__wrapper}>
          <div className={styles["services__header"]}>
            <h2 className={styles["services__header-title"]}>
              Ознакомьтесь с нашими услугами
            </h2>

            <p className={styles["services__header-subtitle"]}>
              Специализированный уход для любых стоматологических потребностей
            </p>
          </div>

          <ServicesList isFullPage={true} />
        </div>
      </div>
    </section>
  );
}