import { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import styles from "./PricePage.module.scss"; 
import { PRICES_SERVICE } from "@/data/Price_data";

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

const PRICE_CATEGORIES = [
  { key: "therapy", title: "Терапевтическое лечение" },
  { key: "endodontics", title: "Лечение каналов (Эндодонтия)" },
  { key: "surgery", title: "Хирургическая стоматология" },
  { key: "implantation", title: "Имплантация зубов" },
  { key: "orthopedics", title: "Ортопедия и Протезирование" },
  { key: "orthodontics", title: "Ортодонтия (Исправление прикуса)" },
  { key: "hygiene", title: "Профессиональная гигиена" },
  { key: "whitening", title: "Эстетическое отбеливание" },
  { key: "planmeca", title: "Диагностика и Снимки (Planmeca)" },
];

export default function PricePage() {
  return (
    <>
      <Hero
        title="Прайс-лист услуг"
        subtitle="Прозрачная стоимость и честный подход к лечению без скрытых платежей"
        imageFolder="/image/servicePage" 
        imageName="service" 
        altText="Стоимость лечения зубов в Клинике +32"
        pageType="call" 
      />

      <div className="container">
        <section className={styles.priceSection}>
          <div className={styles.priceHeader}>
            <h2 className={styles.priceTitle}>Стоимость стоматологических услуг</h2>
            <p className={styles.priceSubtitle}>
              * Конечная стоимость лечения определяется врачом на бесплатной консультации после составления индивидуального плана.
            </p>
          </div>

          <div className={styles.priceWrapper}>
          {PRICE_CATEGORIES.map((categoryObj) => {
              const items = PRICES_SERVICE[categoryObj.key] || [];
              if (items.length === 0) return null; // Если категория пустая, не выводим её

              return (
                <div key={categoryObj.key} className={styles.priceCategory}>
                  <h3 className={styles.categoryTitle}>{categoryObj.title}</h3>
                  <div className={styles.priceTable}>
                    {items.map((item, itemIdx) => (
                      <div key={`${categoryObj.key}-${itemIdx}`} className={styles.priceRow}>
                        <span className={styles.priceName}>{item.name}</span>
                        <span className={styles.priceValue}>{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.priceActions}>
            <p className={styles.priceNotice}>Остались вопросы по стоимости? Запишитесь на осмотр!</p>
          </div>
        </section>
      </div>
    </>
  );
}