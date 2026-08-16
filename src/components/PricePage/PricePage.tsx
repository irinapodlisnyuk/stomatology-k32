"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero/Hero";
import Icon from "@/components/Icon/Icon";
import styles from "./PricePage.module.scss";
import { PRICES_SERVICE } from "@/data/Price_data";

const PRICE_CATEGORIES = [
  { key: "therapy", title: "ТЕРАПЕВТИЧЕСКАЯ СТОМАТОЛОГИЯ" },
  { key: "endodontics", title: "ЭНДОДОНТИЧЕСКОЕ ЛЕЧЕНИЕ (Лечение каналов)" },
  { key: "surgery", title: "ХИРУРГИЧЕСКАЯ СТОМАТОЛОГИЯ" },
  { key: "implantation", title: "ИМПЛАНТАЦИЯ ЗУБОВ" },
  { key: "orthopedics", title: "ОРТОПЕДИЧЕСКАЯ СТОМАТОЛОГИЯ" },
  {
    key: "orthodontics",
    title: "ОРТОДОНТИЧЕСКАЯ СТОМАТОЛОГИЯ (Исправление прикуса)",
  },
  { key: "hygiene", title: "ПРОФЕССИОНАЛЬНАЯ ГИГИЕНА" },
  { key: "whitening", title: "ЭСТЕТИЧЕСКОЕ ОТБЕЛИВАНИЕ" },
  { key: "planmeca", title: "РЕНТГЕН-ИССЛЕДОВАНИЯ (Planmeca)" },
];

export default function PricePage() {
  // Стейт для хранения ключа открытой категории. Изначально null (все закрыты)
  const [activeCategoryKey, setActiveCategoryKey] = useState<string | null>(
    null,
  );

  const toggleCategory = (key: string) => {
    setActiveCategoryKey(activeCategoryKey === key ? null : key);
  };

  return (
    <>
      <Hero
        title="Прайс-лист услуг K+32"
        subtitle="Прозрачная стоимость и честный подход к лечению без скрытых платежей"
        imageFolder="/image/servicePage"
        imageName="service"
        altText="Стоимость лечения зубов в Клинике +32"
        pageType="call"
      />
      <section className={styles.prices}>
        <div className="container">
          <div className={styles.prices__wrapper}>
            <div className={styles.prices__header}>
              <h2 className={styles.prices__title}>
                Стоимость стоматологических услуг
              </h2>
              <p className={styles.prices__subtitle}>
                * конечная стоимость лечения определяется врачом на консультации
                после составления индивидуального плана лечения.
              </p>
            </div>

            <div className={styles.prices__info}>
              {PRICE_CATEGORIES.map((categoryObj) => {
                const items = PRICES_SERVICE[categoryObj.key] || [];
                if (items.length === 0) return null;
                const isOpen = activeCategoryKey === categoryObj.key;

                return (
                  <div
                    key={categoryObj.key}
                    className={`${styles.prices__category} ${isOpen ? styles["prices__category--open"] : ""}`}
                  >
                    {/* КНОПКА-ТРИГГЕР АККОРДЕОНА */}
                    <button
                      type="button"
                      className={styles["prices__category-trigger"]}
                      onClick={() => toggleCategory(categoryObj.key)}
                      aria-expanded={isOpen}
                    >
                      <h3 className={styles["prices__category-title"]}>
                        {categoryObj.title}
                      </h3>
                      <Icon
                        name="open-icon"
                        className={`${styles["prices__category-icon"]} ${isOpen ? styles["prices__category-icon--rotated"] : ""}`}
                      />
                    </button>

                    {/* РАСКРЫВАЮЩАЯСЯ ТАБЛИЦА С КОНТЕНТОМ */}
                    <div
                      className={styles.table__collapse}
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      <div className={styles.prices__table}>
                        <table className={styles["prices__table-wrapper"]}>
                          <thead>
                            <tr className={styles["prices__table-header"]}>
                              <th className={styles["prices__table-title"]}>
                                Наименование услуги
                              </th>
                              <th className={styles["prices__table-sum"]}>
                                Цена
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {items.map((item, itemIdx) => (
                              <tr
                                key={`${categoryObj.key}-${itemIdx}`}
                                className={styles.prices__row}
                              >
                                <td className={styles["prices__table-name"]}>
                                  {item.name}
                                </td>
                                <td className={styles["prices__table-value"]}>
                                  {item.price}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.prices__actions}>
              <p className={styles.prices__notice}>
                Остались вопросы по стоимости? Запишитесь на осмотр!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
