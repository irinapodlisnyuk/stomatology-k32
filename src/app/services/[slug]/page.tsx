import Hero from "@/components/Hero/Hero";
import { PRICES_SERVICE } from "@/data/Price_data";
import { SERVICES_DATA } from "@/data/Services_data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./ServicePage.module.scss";
import { AppointmentButton } from "@/components/Form/Button/AppointmentButton"; // Импортируем нашу кнопку

interface PageProps {
  params: Promise<{ slug: string }>;
}

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
export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ 
    slug: String(service.slug || service.id) 
  }));
}

// ГЛАВНЫЙ КОМПОНЕНТ СТРАНИЦЫ (Остается чистым и быстрым серверным компонентом)
export default async function PageService({ params }: PageProps) {
  const { slug } = await params;
  
  const services = SERVICES_DATA.find((s) => s.slug === slug || String(s.id) === slug);
  if (!services) {
    notFound();
  }

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
          
          {/* Безопасный контейнер описания услуги */}
          <article className={styles.serviceContent}>
            <div 
              suppressHydrationWarning // Защищает ядро React от зависания, если в fullText встретятся спецсимволы HTML
              dangerouslySetInnerHTML={{ __html: services.fullText || "<p>Описание услуги временно наполняется...</p>" }} 
            /> 
          </article>

          {/* ВЫВОД ПРАЙСА */}
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
                {/* Исправлено: Клиентская кнопка теперь безопасно триггерит контекст */}
                <AppointmentButton />
              </div>
            </section>
          )}
          
        </div>
      </div>
    </>
  );
}