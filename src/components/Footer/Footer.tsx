import Link from "next/link";
import styles from "./Footer.module.scss";
import Icon from "@/models/Icon";
import { navigationItems, MenuItem } from "@/components/Data/navigation";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles["footer__right"]}>
            <Link href="/" className={styles["footer__logo"]}>
              <picture>
                <img
                  src="/image/logo-icon.png"
                  alt="Логотип Клиника +32"
                  className={styles["footer__logo-icon"]}
                />
              </picture>
            </Link>
            <p className={styles["footer__right-text"]}></p>
          </div>

          <div className={styles["footer__center"]}>
            <h3 className={styles["footer__center-title"]}>Быстрые ссылки</h3>
            <ul className={styles["footer__menu-list"]}>
              {navigationItems.map((item: MenuItem) => (
                <li key={item.key} className={styles["footer__menu-item"]}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles["footer__left"]}>
            <h3 className={styles["footer__left-title"]}>
              Контактная информация
            </h3>
            <ul className={styles["footer__left-list"]}>
              <li className={styles["footer__left-item"]}>
                <Icon
                  className={styles["footer__left-icon"]}
                  name={"location"}
                />
                <span className={styles["footer__left-text"]}>
                  г.Геленджик, с.Кабардинка, улица Мира, дом 15.
                </span>
              </li>
              <li className={styles["footer__left-item"]}>
                <a
                  href="tel:+78619913215"
                  className={styles["footer__left-link"]}
                >
                  <Icon
                    className={styles["footer__left-icon"]}
                    name={"phone"}
                  />
                  <span className={styles["footer__left-text"]}>
                    +7 (861) 991-32-15
                  </span>
                </a>
              </li>

              <li className={styles["footer__left-item"]}>
                <a
                  href="mailto:clinic.k32@gmail.com"
                  className={styles["footer__left-link"]}
                >
                  <Icon
                    className={styles["footer__left-icon"]}
                    name={"email"}
                  />
                  <span className={styles["footer__left-text"]}>
                    clinic.k32@gmail.com
                  </span>
                </a>
              </li>

              <li className={styles["footer__left-item"]}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["footer__left-link"]}
                >
                  <Icon
                    className={styles["footer__left-icon"]}
                    name={"instagram"}
                  />
                     <span className={styles["footer__left-text"]}>
                    Instagram
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
