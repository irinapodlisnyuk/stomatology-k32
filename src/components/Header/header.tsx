import Icon from "@/models/Icon";
import styles from "./header.module.scss";
import Link from "next/link";

const items = [
  { key: 0, label: <Link href="/">Главная</Link> },
  { key: 1, label: <Link href="/aboutUs"> О Клинике</Link> },
  { key: 2, label: <Link href="/services"> Услуги</Link> },
  // { key: 3, label: <Link href="/prices">Наши цены</Link> },
  { key: 4, label: <Link href="/team">Наша команда</Link> },
  { key: 5, label: <Link href="/contact">Контакты</Link> },
  { key: 6, label: <Link href="/BookAppointment">Записаться на прием</Link> },
];

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <div className={styles["header__wrapper"]}>
        <div className={styles["header__logo"]}>
          <Link href="/" className={styles["header__logo-link"]}>
            <Icon name="logo" className={styles["header__logo-icon"]} />
          </Link>
        </div>

        <nav className={styles["header__menu"]}>
          <ul className={styles["header__menu-list"]}>
            {items.map((item) => (
              <li key={item.key} className={styles["header__menu-item"]}>
                {/* 
                  Магия React: item.label уже содержит готовый компонент <Link> из массива.
                  Мы просто выводим его здесь.
                */}
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
