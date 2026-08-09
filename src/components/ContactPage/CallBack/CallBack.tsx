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
            
            {/* Оптимизировали структуру контактов, убрав лишние промежуточные div */}
            <div className={styles["callback__contact"]}>
              <a
                href="mailto:clinic.k32@gmail.com"
                className={`${styles["callback__contact-link"]} ${styles["callback__contact-link--email"]}`}
              >
                <Icon
                  className={styles["callback__contact-icon"]}
                  name={"email"}
                />
                <span className={styles["callback__contact-text"]}>
                  clinic.k32@gmail.com
                </span>
              </a>

              <a
                href="tel:+78619913215"
                className={`${styles["callback__contact-link"]} ${styles["callback__contact-link--phone"]}`}
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
          
          <div className={styles["callback__inner"]}>
            <h3 className={styles["callback__inner-title"] || styles["callback__inner-title"]}>
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
                Подписывайтесь на нас *
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
            
            {/* Юридическая плашка-дисклеймер для Instagram непосредственно внутри блока */}
            <span className={styles["callback__disclaimer"]}>
              * Деятельность организации Meta Platforms Inc. и ее социальных сетей Instagram и Facebook запрещена на территории РФ.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}