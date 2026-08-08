import Link from "next/link";
import styles from "./About.module.scss";
import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";

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
              <Link href="/about-us" className="btn btn--about">
                Узнать больше
              </Link>
            </div>
          </div>
          <div className={styles["about__wrapper-image"]}>
            <ResponsivePicture
              folder="/image/about"
              baseName="about"
              alt="Прием в Клинике +32"
              className={styles["about__picture-img"]}
              sizes="(max-width: 767px) 558px, (max-width: 1023px) 768px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
