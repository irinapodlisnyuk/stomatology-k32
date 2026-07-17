import Link from "next/link";
import styles from "./About.module.scss";

export default function AboutK32() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.about__wrapper}>
          <div className={styles["about__wrapper-info"]}>
            <h2 className={styles.info__title}>О&nbsp;компании К+32</h2>
            <p className={styles["info__subtitle"]}>
              Мы&nbsp;заботимся о&nbsp;здоровье ваших зубов.
            </p>
            <p className={styles.info__text}></p>

            <div className={styles["info__actions"]}>
              <Link href="/BookAppointment" className="btn btn--about">
                Узнать больше
              </Link>
            </div>
          </div>
          <div className={styles["about__wrapper-image"]}></div>
        </div>
      </div>
    </section>
  );
}
