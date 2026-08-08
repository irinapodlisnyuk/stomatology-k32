import Icon from "@/components/Icon/Icon";
import styles from "./CallBack.module.scss";

export default function CallBack() {
  return (
    <section className={styles["callback"]}>
      <div className="container">
        <div className={styles["callback__wrapper"]}>
          <div className={styles["callback__header"]}>
            <h2 className={styles["callback__title"]}>
              Посетите нас или позвоните нам.
            </h2>
            <p className={styles["callback__subtitle"]}>
              Удобные способы связаться с&nbsp;&laquo;K+32&raquo;
            </p>
            <p className={styles["callback__text"]}>
              Свяжитесь с&nbsp;нами любым удобным способом. Ответим на&nbsp;ваши
              вопросы по&nbsp;лечению, сориентируем по&nbsp;стоимости услуг
              и&nbsp;подберем комфортное время для приёма у&nbsp;специалиста.
            </p>
             <p className={styles["callback__text-info"]}>
              Наши специалисты принимают по&nbsp;предварительной записи.
            </p>
            <div className={styles["callback__contact"]}>
              <div className={styles["callback__contact-email"]}>
                <a
                  href="mailto:clinic.k32@gmail.com"
                  className={styles["callback__contact-link"]}
                >
                  <Icon
                    className={styles["callback__contact-icon"]}
                    name={"email"}
                  />
                  <span className={styles["callback__contact-text"]}>
                    clinic.k32@gmail.com
                  </span>
                </a>
              </div>

              <div className={styles["callback__contact-phone"]}>
                <a
                  href="tel:+78619913215"
                  className={styles["callback__contact-link"]}
                >
                  <Icon
                    className={styles["callback__contact-icon"]}
                    name={"phone"}
                  />
                  <span className={styles["callback__contact-text"]}>
                    +7 (861) 991-32-15
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles["callback__inner"]}>
            <h3 className={styles["callback__inner-title"]}>
              Ваша улыбка заслуживает внимания.
            </h3>
            <div className={styles["callback__top"]}>
              <Icon className={styles["callback__top-icon"]} name={"time"} />
              <p className={styles["callback__top-text"]}>Рабочее время:</p>
            </div>
            <ul className={styles["callback__list"]}>
              <li className={styles["callback__item"]}>
                <span className={styles["callback__item-text"]}>
                  С&nbsp;понедельника по&nbsp;пятницу: с&nbsp;9:00
                  до&nbsp;19:00.
                </span>
              </li>

              <li className={styles["callback__item"]}>
                <span className={styles["callback__item-text"]}>
                  Суббота: Закрыто
                </span>
              </li>

              <li className={styles["callback__item"]}>
                <span className={styles["callback__item-text"]}>
                  Воскресенье: Закрыто
                </span>
              </li>
            </ul>
            <div className={styles["callback__bottom"]}>
              <span className={styles["callback__bottom-text"]}>
                Подписывайтесь на нас
              </span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["callback__bottom-link"]}
              >
                <Icon
                  className={styles["callback__bottom-icon"]}
                  name={"instagram"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
