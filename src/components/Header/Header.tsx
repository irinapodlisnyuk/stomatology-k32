"use client";
import stylesNav from "./menu-nav.module.scss";
import styles from "./Header.module.scss";
import stylesBurger from "./Burger.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationItems, MenuItem } from "@/data/navigation";
import { AppointmentButton } from "@/components/Form/Button/AppointmentButton";

export default function HeaderComponent() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`${styles.header} ${isOpen ? styles["header--open"] : ""}`}
    >
      <div className="container">
        <div className={styles["header__wrapper"]}>
          <div className={styles["header__inner"]}>
            <Link href="/" className={styles["header__logo"]}>
              <picture>
                <img
                  src="/image/logo.png"
                  alt="Логотип Клиника +32"
                  className={styles["header__logo-icon"]}
                />
              </picture>
            </Link>

            <nav
              className={`${stylesNav["menu-nav"]} ${isOpen ? stylesNav["menu-nav--open"] : ""}`}
            >
              <ul className={stylesNav["menu-nav__list"]}>
                {navigationItems.map((item: MenuItem) => {
                  const isActive = pathname === item.path;

                  return (
                    <li
                      key={item.key}
                      className={`${stylesNav["menu-nav__item"]} ${isActive ? stylesNav["menu-nav__item--active"] : ""}`}
                    >
                      <Link href={item.path} onClick={() => setIsOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className={styles["header__actions"]}>
            <AppointmentButton className="btn" />
          </div>
          <div className={styles["header__actions-burger"]}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${styles["header__actions-btn"]} ${stylesBurger["burger"]} ${isOpen ? stylesBurger["burger--open"] : ""}`}
              type="button"
              aria-label="Открыть меню"
            >
              <span className={stylesBurger["burger__menu"]}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
