// src/app/price/page.tsx
import { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import styles from "./PricePage.module.scss"; // Сейчас создадим этот файл стилей

// Добавляем SEO-метаданные для поисковых роботов (Яндекс / Google)
export const metadata: Metadata = {
  title: "Цены на стоматологические услуги «Клиника +32» в Кабардинке | Прайс-лист",
  description:
    "Ознакомьтесь с актуальным прайс-листом стоматологической клиники «Клиника +32» в Кабардинке. Честные и доступные цены на лечение, имплантацию, протезирование и гигиену зубов.",
  keywords: [
    "стоматология кабардинка цены",
    "прайс лист стоматологии геленджик",
    "стоимость лечения зубов",
    "имплантация зубов цена кабардинка",
  ],
  robots: { index: true, follow: true },
};

// Временный массив с базовыми ценами (замените на ваши реальные услуги клиники)
const PRICE_CATEGORIES = [
  {
    category: "Терапевтическое лечение",
    items: [
      { name: "Консультация врача-стоматолога", price: "Бесплатно" },
      { name: "Лечение поверхностного кариеса", price: "от 3 500 ₽" },
      { name: "Лечение глубокого кариеса", price: "от 5 000 ₽" },
    ],
  },
  {
    category: "Хирургия и Имплантация",
    items: [
      { name: "Удаление зуба (простое)", price: "от 2 500 ₽" },
      { name: "Удаление зуба мудрости", price: "от 5 500 ₽" },
      { name: "Установка имплантата (премиум-класс)", price: "от 35 000 ₽" },
    ],
  },
  {
    category: "Профгигиена и Отбеливание",
    items: [
      { name: "Комплексная чистка Air-Flow + ультразвук", price: "4 500 ₽" },
      { name: "Профессиональное отбеливание зубов", price: "от 15 000 ₽" },
    ],
  },
];

export default function PricePage() {
  return (
    <>
      {/* Верхний баннер страницы */}
      <Hero
        title="Прайс-лист услуг"
        subtitle="Прозрачная стоимость и честный подход к лечению без скрытых платежей"
        imageFolder="/image/servicePage" // Используем существующую папку с картинками
        imageName="service" // Используем оптимизированный баннер, который мы настроили
        altText="Стоимость лечения зубов в Клинике +32"
        pageType="call" // Активирует размеры 360px для идеального прохождения Lighthouse
      />

      <div className="container">
        <section className={styles.priceSection}>
          <div className={styles.priceHeader}>
            <h2 className={styles.priceTitle}>Стоимость стоматологических услуг</h2>
            <p className={styles.priceSubtitle}>
              * Конечная стоимость лечения определяется врачом на бесплатной консультации после составления индивидуального плана.
            </p>
          </div>

          {/* Вывод категорий и таблиц цен */}
          <div className={styles.priceWrapper}>
            {PRICE_CATEGORIES.map((cat, idx) => (
              <div key={idx} className={styles.priceCategory}>
                <h3 className={styles.categoryTitle}>{cat.category}</h3>
                <div className={styles.priceTable}>
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className={styles.priceRow}>
                      <span className={styles.priceName}>{item.name}</span>
                      <span className={styles.priceValue}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.priceActions}>
            <p className={styles.priceNotice}>Остались вопросы по стоимости? Запишитесь на осмотр!</p>
          </div>
        </section>
      </div>
    </>
  );
}