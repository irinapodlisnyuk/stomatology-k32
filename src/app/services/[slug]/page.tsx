import Hero from "@/components/Hero/Hero";
import { PRICES_SERVICE } from "@/data/Price_data";
import { SERVICES_DATA } from "@/data/Services_data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./ServicePage.module.scss";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. ИСПРАВЛЕНО ДЛЯ ДЕПЛОЯ: Разрешаем динамическую генерацию страниц на сервере, если их нет в статической сборке
export const dynamicParams = true;

// ГЕНЕРАЦИЯ МЕТАДАННЫХ
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const services = SERVICES_DATA.find((s) => s.slug === slug || String(s.id) === slug);
  if (!services) return {};

  return {
    title: `${services.title} в Кабардинке | Стоматология «Клиника +32»`,
    description: `Профессиональное выполнение услуги «${services.title}» в стоматологической клинике «Клиника +32». Современное оборудование, опытные врачи, доступные цены и безболезненное лечение. Запишитесь на прием!`,
  };
}

// СТАТИЧЕСКИЕ ПАРАМЕТРЫ
// 2. ИСПРАВЛЕНО ДЛЯ ДЕПЛОЯ: Принудительно превращаем slug и id в строковый тип (string)
export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ 
    slug: String(service.slug || service.id) 
  }));
}

// ГЛАВНЫЙ КОМПОНЕНТ СТРАНИЦЫ
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  
  // Находим данные о самой услуге (проверяем и по slug, и по текстовому id)
  const services = SERVICES_DATA.find((s) => s.slug === slug || String(s.id) === slug);
  if (!services) {
    notFound();
  }

  // МАТЧИНГ ЦЕН: Берем массив цен по slug
  const currentServicePrices = PRICES_SERVICE[services.slug || ""] || [];

  return (
    <>
      <Hero
        title={services.title}
        subtitle="Стоматология экспертного уровня в Кабардинке"
        imageFolder="/image/services"
        imageName={services.imgName}
        altText={services.altText}
        pageType="service"
      />

      <div className="container">
        <div className={styles.serviceLayout}>
          <article className={styles.serviceContent}>
            <div dangerouslySetInnerHTML={{ __html: services.fullText || "<p>Описание услуги временно наполняется...</p>" }} /> 
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