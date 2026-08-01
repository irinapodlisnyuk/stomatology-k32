import Icon from "@/models/Icon";
import styles from "./CallBack.module.scss";

export default function CallBack() {
  return (
    <section className={styles["call-back"]}>
      <div className="container">
        <div className={styles["call-back__wrapper"]}>
          <div className={styles["call-back__header"]}>
            <h2 className={styles["call-back__title"]}>
              Посетите нас или позвоните нам.
            </h2>
            <p className={styles["call-back__subtitle"]}>
              Удобные способы связаться с&nbsp;&laquo;K+32&raquo;
            </p>
            <p className={styles["call-back__text"]}>
              Свяжитесь с&nbsp;нами любым удобным способом. Ответим на&nbsp;ваши
              вопросы по&nbsp;лечению, сориентируем по&nbsp;стоимости услуг
              и&nbsp;подберем комфортное время для приёма у&nbsp;специалиста.
            </p>
            <div className={styles["call-back__contact"]}>
              <div className={styles["call-back__contact-email"]}>
                <a
                  href="mailto:clinic.k32@gmail.com"
                  className={styles["call-back__contact-link"]}
                >
                  <Icon className={styles["call-back__contact-icon"]} name={"email"} />
                  <span className={styles["call-back__contact-text"]}>
                    clinic.k32@gmail.com
                  </span>
                </a>
              </div>

              <div className={styles["call-back__contact-phone"]}>
                <a
                  href="tel:+78619913215"
                  className={styles["call-back__contact-link"]}
                >
                  <Icon className={styles["call-back__contact-icon"]} name={"phone"} />
                  <span className={styles["call-back__contact-text"]}>
                    +7 (861) 991-32-15
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles["call-back__inner"]}>
            <h3 className={styles["call-back__inner-title"]}>
              Ваша улыбка заслуживает внимания.
            </h3>
            <div className={styles["call-back__top"]}>
              <Icon className={styles["call-back__top-icon"]} name={"time"} />
              <p className={styles["call-back__top-text"]}>Рабочее время:</p>
            </div>
            <ul className={styles["call-back__list"]}>
              <li className={styles["call-back__item"]}>
                <span className={styles["call-back__item text"]}>
                  С&nbsp;понедельника по&nbsp;пятницу: с&nbsp;9:00
                  до&nbsp;19:00.
                </span>
              </li>

              <li className={styles["call-back__item"]}>
                <span className={styles["call-back__item text"]}>
                 Суббота: Закрыто
                </span>
              </li>

                 <li className={styles["call-back__item"]}>
                <span className={styles["call-back__item text"]}>
                 Воскресенье: Закрыто
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
