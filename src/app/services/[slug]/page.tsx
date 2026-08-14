import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/data/Services_data";
import { PRICES_SERVICE } from "@/data/Price_data";
import { ServiceContent } from "@/components/ServicePage/ServiceContent";


interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

// ГЕНЕРАЦИЯ МЕТАДАННЫХ ДЛЯ SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const services = SERVICES_DATA.find((s) => s.slug === slug || String(s.id) === slug);
  if (!services) return {};

  return {
    title: `${services.title} в Кабардинке | Стоматология «Клиника +32»`,
    description: `Профессиональное выполнение услуги «${services.title}» в стоматологической клинике «Клиника +32». Современное оборудование, опытные врачи, доступные цены и безболезненное лечение. Запишитесь на прием!`,
  };
}

// СТАТИЧЕСКАЯ ГЕНЕРАЦИЯ СТРАНИЦ ПРИ СБОРКЕ (SSG)
export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ 
    slug: String(service.slug || service.id) 
  }));
}

// СЕРВЕРНЫЙ КОМПОНЕНТ РОУТА
export default async function PageService({ params }: PageProps) {
  const { slug } = await params;
  
  const services = SERVICES_DATA.find((s) => s.slug === slug || String(s.id) === slug);
  if (!services) {
    notFound();
  }

  const currentServicePrices = PRICES_SERVICE[services.slug || ""] || [];

  return (
    <ServiceContent 
      service={services} 
      prices={currentServicePrices} 
    />
  );
}