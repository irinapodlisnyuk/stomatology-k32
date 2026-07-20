"use client";
import stylesNav from "./menu-nav.module.scss";
import styles from "./Header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  key: number;
  path: string;
  label: React.JSX.Element; // Тип для готовых компонентов <Link>
}

const items: MenuItem[] = [
  { key: 0, path: "/", label: <Link href="/">Главная</Link> },
  { key: 1, path: "/aboutUs", label: <Link href="/aboutUs">О Клинике</Link> },
  { key: 2, path: "/services", label: <Link href="/services">Услуги</Link> },
  { key: 4, path: "/team", label: <Link href="/team">Наша команда</Link> },
  { key: 5, path: "/contact", label: <Link href="/contact">Контакты</Link> },
];
export default function HeaderComponent() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header__wrapper"]}>
          <div className={styles["header__inner"]}>
            <Link href="/" className={styles["header__logo"]}>
              <picture>
                <img
                  src="/image/logo-icon.png"
                  alt="Логотип Клиника +32"
                  className={styles["header__logo-icon"]}
                />
              </picture>
            </Link>

            <nav className={stylesNav["menu-nav"]}>
              <ul className={stylesNav["menu-nav__list"]}>
                {items.map((item) => {
                  const isActive = pathname === item.path;

                  return (
                    <li
                      key={item.key}
                      className={`${stylesNav["menu-nav__item"]} ${isActive ? stylesNav["menu-nav__item--active"] : ""}`}
                    >
                      {item.label}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className={styles["header__actions"]}>
            <Link href="/BookAppointment" className="btn">
              Записаться на прием
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
