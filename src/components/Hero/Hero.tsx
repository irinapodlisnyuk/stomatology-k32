import Link from "next/link";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <picture className={styles.hero__picture}>
        <source
          srcSet="/image/hero-bg.webp 1x, /image/hero-bg@2x.webp 2x"
          type="image/webp"
        />
        <source
          srcSet="/image/hero-bg.jpg 1x, /image/hero-bg@2x.jpg 2x"
          type="image/jpg"
        />
        <img
          src="/image/hero-bg.jpg"
          alt="Современная стоматология Клиника +32"
          className={styles.hero__bg}
        />
      </picture>
      <div className="container">
        <div className={styles.hero__wrapper}>
          <h2 className={styles.hero__title}>Добро пожаловать в К+32</h2>
          <p className={styles["hero__subtitle"]}>
            Заботимся о здоровье и красоте ваших зубов на каждом этапе.
          </p>
          <p className={styles.hero__text}>
            Мы знаем, что поход к стоматологу часто вызывает волнение. Поэтому в
            К+32 делаем упор на комфорт. Цифровая диагностика, экспертное
            лечение и имплантация от опытых врачей со стажем более 10 лет.
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
