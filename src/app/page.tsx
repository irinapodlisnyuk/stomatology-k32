import Hero from "@/components/Hero/Hero";
import ScrollReveal from "@/components/HomePage/Scroll-reveal/ScrollReveal";
import About from "@/components/HomePage/AboutSection/About";
import Services from "@/components/HomePage/Service/Services";
import Teams from "@/components/HomePage/Teams/Teams";
import { Blog } from "@/components/HomePage/Blog/Blog";
import { Metadata } from "next";
import Questions from "@/components/HomePage/Questions/Questions";
import ContactComponent from "@/components/HomePage/Contact/ContactComponent";

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
      <ScrollReveal variant="fade-up">
        <About />
      </ScrollReveal>

      <ScrollReveal variant="fade-left">
        <Services />
      </ScrollReveal>

      <ScrollReveal variant="fade-right">
        <Teams />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <Questions />
      </ScrollReveal>

      <ScrollReveal variant="fade-left">
        <ContactComponent />
      </ScrollReveal>

      <ScrollReveal variant="fade-right">
        <Blog />
      </ScrollReveal>

    </>
  );
}
