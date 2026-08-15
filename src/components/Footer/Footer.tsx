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
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles["footer__right"]}>
            <Link
              className={styles["footer__logo"]}
              href="/"
              scroll={true}
              prefetch={false}
            >
              <Image
                src="/image/logo-icon.png"
                alt="Логотип Клиника +32"
                className={styles["footer__logo-icon"]}
                width={100}
                height={67}
              />
            </Link>
            <p className={styles["footer__right-text"]}>
              «Ваша улыбка{"\u00A0"} наш главный приоритет. Профессиональная
              забота о{"\u00A0"}зубах: от{"\u00A0"}профилактики до{"\u00A0"}
              сложного протезирования.»
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
              <li className={styles["footer__left-item"]}>
                <Icon
                  className={styles["footer__left-icon"]}
                  name={"location"}
                />

                <span className={styles["footer__left-text"]}>
                  г. Геленджик, с. Кабардинка, улица Мира, дом{"\u00A0"}15.
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
          <p className={styles["footer__inner-text"]}>
            Copyright {"\u00A9"} {"\u201C"}Клиника+32{"\u201D"} 2026 Все права
            защищены
          </p>
          <span className={styles["footer__inner-police"]}>
            * На{"\u00A0"}сайте есть ссылки на{"\u00A0"}социальные сети:
            Инстаграм, принадлежащие Meta Platforms Inc., деятельность которой
            запрещена на{"\u00A0"}территории{"\u00A0"}РФ в части реализации
            данных социальных сетей на{"\u00A0"}основании осуществления ею
            экстремистской деятельности
          </span>
        </div>
      </div>
    </footer>
  );
}
