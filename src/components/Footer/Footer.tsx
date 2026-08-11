import Link from "next/link";
import styles from "./Footer.module.scss";
import Icon from "@/components/Icon/Icon";
import { navigationItems, MenuItem } from "@/data/navigation";
import Image from "next/image";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles["footer__right"]}>
            <Link className={styles["footer__logo"]} href="/" scroll={true}>
              <Image
                src="/image/logo-icon.png"
                alt="Логотип Клиника +32"
                className={styles["footer__logo-icon"]}
                width={100}
                height={67}
              />
            </Link>
            <p className={styles["footer__right-text"]}>
              &laquo;Ваша улыбка&nbsp;&mdash; наш главный приоритет.
              Профессиональная забота о&nbsp;зубах: от&nbsp;профилактики
              до&nbsp;сложного протезирования.&raquo;
            </p>
          </div>

          <div className={styles["footer__center"]}>
            <h3 className={styles["footer__center-title"]}>Быстрые ссылки</h3>
            <ul className={styles["footer__menu-list"]}>
              {navigationItems.map((item: MenuItem) => (
                <li key={item.key} className={styles["footer__menu-item"]}>
                  <Icon
                    className={styles["footer__menu-icon"]}
                    name={"arrow"}
                  />
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
                  г.Геленджик, с.Кабардинка, улица Мира, дом&nbsp;15.
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
                  <span className={styles["footer__left-text"]}>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles["footer__police"]}>
            <h3 className={styles["footer__police-title"]}>
              Правовая информация
            </h3>
            <ul className={styles["footer__police-list"]}>
              <li className={styles["footer__police-item"]}>
                <Link
                  href="/privacy-policy"
                  className={styles["footer__police-item-link"]}
                >
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer__inner}>
        <div className={styles["footer__inner-info"]}>
          <p className={styles["footer__inner-text"]}>
            Copyright © “Клиника+32” 2026 Все права защищены
          </p>
          <span className={styles["footer__inner-pocile"]}>
            {" "}
            * На&nbsp;сайте есть ссылки на&nbsp;социальные сети: Инстаграм,
            принадлежащие Meta Platforms Inc., деятельность которой запрещена
            на&nbsp;территории&nbsp;РФ в части реализации данных социальных
            сетей на&nbsp;основании осуществления ею экстремистской деятельности
          </span>
        </div>
      </div>
    </section>
  );
}
