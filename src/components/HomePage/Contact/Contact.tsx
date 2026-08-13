"use client";
import Icon from "@/components/Icon/Icon";
import styles from "./Contact.module.scss";
import Link from "next/link";
import LoaderPage from "@/components/LoaderPage/LoaderPage";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LazyMap = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className={styles.contact__mapLoader}>
      <LoaderPage local={true} />
    </div>
  ),
});

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.contact__wrapper}>
          <div className={styles.contact__container}>
            <Suspense>
              <LazyMap />
            </Suspense>
          </div>

          <div className={styles.contact__info}>
            <div className={styles.contact__header}>
              <h2 className={styles["contact__header-title"]}>Наши Контакты</h2>
              <p className={styles["contact__header-subtitle"]}>
                Запланируйте свой визит сегодня
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
              <Link href="/contact" className="btn btn--contact">
                Свяжитесь с нами
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
