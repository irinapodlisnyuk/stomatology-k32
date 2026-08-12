import Hero from "@/components/Hero/Hero";
import { PRICES_SERVICE } from "@/data/Price_data";
import { SERVICES_DATA } from "@/data/Service_data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./ServicePage.module.scss";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ГЕНЕРАЦИЯ МЕТАДАННЫХ
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug || s.id === slug);
  if (!service) return {};

  return {
    title: `${service.title} в Кабардинке | Стоматология «Клиника +32»`,
    description: `Профессиональное выполнение услуги «${service.title}» в стоматологической клинике «Клиника +32». Современное оборудование, опытные врачи, доступные цены и безболезненное лечение. Запишитесь на прием!`,
  };
}

// СТАТИЧЕСКИЕ ПАРАМЕТРЫ
export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ 
    slug: service.slug || service.id 
  }));
}

// ГЛАВНЫЙ КОМПОНЕНТ СТРАНИЦЫ
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  
  // Находим данные о самой услуге
  const service = SERVICES_DATA.find((s) => s.slug === slug || s.id === slug);
  if (!service) {
    notFound();
  }

  // МАТЧИНГ ЦЕН: Берем массив цен по slug
  const currentServicePrices = PRICES_SERVICE[service.slug || ""] || [];

  return (
    <>
      <Hero
        title={service.title}
        subtitle="Стоматология экспертного уровня в Кабардинке"
        imageFolder="/image/services"
        imageName={service.imgName}
        altText={service.altText}
        pageType="post"
      />

      <div className="container">
        <div className={styles.serviceLayout}>
          <article className={styles.serviceContent}>
            {/* Если у вас в SERVICES_DATA появится детальное описание fullText, замените service.altText на service.fullText */}
            <div dangerouslySetInnerHTML={{ __html: service.altText }} /> 
          </article>

          {/* ВЫВОД ПРАЙСА ИЗ ОТДЕЛЬНОГО МАССИВА */}
          {currentServicePrices.length > 0 && (
            <section className={styles.priceSection}>
              <h2 className={styles.priceTitle}>Стоимость услуги</h2>
              <div className={styles.priceTable}>
                {currentServicePrices.map((item, idx) => (
                  <div key={idx} className={styles.priceRow}>
                    <span className={styles.priceName}>{item.name}</span>
                    <span className={styles.priceValue}>{item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.priceActions}>
                <button className="btn btn--appointment" style={{ marginTop: "30px" }}>
                  Записаться на консультацию
                </button>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}