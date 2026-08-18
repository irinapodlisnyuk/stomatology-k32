import Link from "next/link";
import styles from "./Footer.module.scss";
import Icon from "@/components/Icon/Icon";
import Image from "next/image";

interface MenuItem {
  key: number;
  path: string;
  label: string;
}

const footerNavigationItems: MenuItem[] = [
  { key: 0, path: "/", label: "Главная" },
  { key: 1, path: "/about-us", label: "О нас" },
  { key: 2, path: "/services", label: "Услуги" },
  { key: 3, path: "/price", label: "Наш прайс" },
  { key: 4, path: "/blog", label: "Блог" },
  { key: 5, path: "/contact", label: "Связаться с нами" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles["footer__right"]}>
            <Link className={styles["footer__logo"]} href="/" prefetch={false}>
              <Image
                src="/image/logo-icon.png"
                alt="Логотип Клиника +32"
                className={styles["footer__logo-icon"]}
                width={100}
                height={67}
                priority
              />
            </Link>
            <p className={styles["footer__right-text"]}>
              «Ваша улыбка наш главный приоритет. Профессиональная забота о
              зубах: от профилактики до сложного протезирования.»
            </p>
          </div>

          <div className={styles["footer__center"]}>
            <h3 className={styles["footer__center-title"]}>Быстрые ссылки</h3>
            <ul className={styles["footer__menu-list"]}>
              {footerNavigationItems.map((item: MenuItem) => (
                <li key={item.key} className={styles["footer__menu-item"]}>
                  <Icon
                    className={styles["footer__menu-icon"]}
                    name={"arrow"}
                  />
                  <Link href={item.path} prefetch={false}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles["footer__left"]}>
            <h3 className={styles["footer__left-title"]}>
              Контактная информация
            </h3>
            <ul className={styles["footer__left-list"]}>
              <li
                className={styles["footer__left-item"]}
                suppressHydrationWarning
              >
                <Icon
                  className={styles["footer__left-icon"]}
                  name={"location"}
                />

                <span className={styles["footer__left-text"]}>
                  г. Геленджик, с. Кабардинка, улица Мира, дом 15.
                </span>
              </li>
              <li
                className={styles["footer__left-item"]}
                suppressHydrationWarning
              >
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

              <li
                className={styles["footer__left-item"]}
                suppressHydrationWarning
              >
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
              <li
                className={styles["footer__left-item"]}
                suppressHydrationWarning
              >
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
                  prefetch={false}
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
          {/* Убираем JS-символы \u00A0, заменяя их на обычный текст */}
          <p className={styles["footer__inner-text"]}>
            Copyright © «Клиника+32» 2026. Все права защищены.
          </p>
          <span className={styles["footer__inner-police"]}>
            * На сайте есть ссылки на социальные сети: Инстаграм, принадлежащие
            Meta Platforms Inc., деятельность которой запрещена на территории РФ
            в части реализации данных социальных сетей на основании
            осуществления ею экстремистской деятельности
          </span>
        </div>
      </div>
    </footer>
  );
}
