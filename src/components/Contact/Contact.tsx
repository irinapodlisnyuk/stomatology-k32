"use client";
import Icon from "@/models/Icon";
import styles from "./Contact.module.scss";
import Link from "next/link";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.contact__wrapper}>
          <div className={styles.contact__container}>
            <iframe
              className={styles["contact__container-map"]}
              // src="https://yandex.ru/map-widget/v1/?ll=37.938266%2C44.649636&mode=whatshere&whatshere%5Bpoint%5D=37.937193%2C44.650068&whatshere%5Bzoom%5D=17&z=15.6"
              src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.938656%2C44.650382&mode=usermaps&source=mapframe&um=constructor%3A17c5e99398aa80de68596ce5822d5849aa805038971cfac10d65aee07c8efb4f&utm_source=mapframe&z=18"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Стоматологическая клиника К+32 в Кабардинке на карте"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={styles.contact__info}>
            <div className={styles.contact__header}>
              <h2 className={styles["contact__header-title"]}>Наши Контакты</h2>
              <p className={styles["contact__header-subtitle"]}>
                Запланируйте свой визит сегодня!
              </p>
            </div>
            <ul className={styles.contact__list}>
              <li className={styles.contact__item}>
                <Icon
                  className={styles["contact__item-icon"]}
                  name={"open-icon"}
                />
                <span className={styles["contact__item-text"]}>
                  Адрес: г.Геленджик, с.Кабардинка, улица Мира, дом 15.
                </span>
              </li>
              <li className={styles.contact__item}>
                <Icon
                  className={styles["contact__item-icon"]}
                  name={"open-icon"}
                />
                <a
                  href="tel:+78619913215"
                  className={styles["contact__item-text"]}
                >
                  Телефон: +7 (861) 991-32-15
                </a>
              </li>
              <li className={styles.contact__item}>
                <Icon
                  className={styles["contact__item-icon"]}
                  name={"open-icon"}
                />
                <a
                  href="mailto:clinic.k32@gmail.com"
                  className={styles["contact__item-text"]}
                >
                  Email: clinic.k32@gmail.com
                </a>
              </li>
            </ul>

            <div className={styles["contact__actions"]}>
              <Link href="/appointment" className="btn btn--contact">
                Свяжитесь с нами
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
