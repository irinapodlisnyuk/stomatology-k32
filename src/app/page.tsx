import Hero from "@/components/Hero/Hero";
import ScrollReveal from "@/components/HomePage/Scroll-reveal/ScrollReveal";
import About from "@/components/HomePage/AboutSection/About";
import Services from "@/components/HomePage/Service/Services";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import HomeClientContent from "./HomeClientContent"; // Импортируем безопасный контейнер

// Компонент Teams стабилен, его оставляем со сборкой на сервере
const Teams = dynamic(() => import("@/components/HomePage/Teams/Teams"), {
  ssr: true,
});

// Стандартные SEO-метаданные для поиска
export const metadata: Metadata = {
  title:
    "Стоматология в Кабардинке | Клиника экспертного лечения зубов «Клиника +32»",
  description:
    "Профессиональное лечение зубов, имплантация и протезирование без боли. Прием ведут врачи со стажем от 10 лет.",
  keywords: [
    "стоматология Геленджик",
    "стоматология Кабардинка",
    "лечение зубов",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="Добро пожаловать в&nbsp;К+32"
        subtitle="Заботимся о&nbsp;здоровье и&nbsp;красоте ваших зубов на&nbsp;каждом этапе."
        text="Мы&nbsp;знаем, что поход к&nbsp;стоматологу часто вызывает волнение. Поэтому в К+32 делаем упор на&nbsp;комфорт..."
        showButton={true}
        pageType="home"
      />

      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "0 1500px" }}
      >
        <Teams />
        

        <HomeClientContent />
      </div>
    </>
  );
}