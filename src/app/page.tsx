import ScrollReveal from "@/components/HomePage/Scroll-reveal/ScrollReveal";
import About from "@/components/HomePage/AboutSection/About";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/HomePage/Service/Services";
import Teams from "@/components/HomePage/Teams/Teams";
import Questions from "@/components/HomePage/Questions/Questions";
import Contact from "@/components/HomePage/Contact/Contact";
import { Metadata } from "next";
import { Blog } from "@/components/HomePage/Blog/Blog";

export const metadata: Metadata = {
  title:
    "Стоматология в Кабардинке | Клиника экспертного лечения зубов «Клиника +32»",
  description:
    "Профессиональное лечение зубов, имплантация и протезирование без боли. Прием ведут врачи со стажем от 10 лет. Запишитесь на консультацию!",
  keywords: [
    "стоматология Геленджик",
    "стоматология Кабардинка",
    "лечение зубов",
    "имплантация зубов 35000рублей",
    "хороший стоматолог",
    "протезирование",
    "стоматологическая клиника",
  ],

  //  Настройки для роботов (Robots) — разрешаем индексировать весь сайт и переходить по ссылкам
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
  other: {
    rel: "preload",
    as: "image",
    href: "/image/hero/hero-bg@2x.webp",
    fetchpriority: "high",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="Добро пожаловать в&nbsp;К+32"
        subtitle="Заботимся о&nbsp;здоровье и&nbsp;красоте ваших зубов на&nbsp;каждом этапе."
        text="Мы&nbsp;знаем, что поход к&nbsp;стоматологу часто вызывает волнение. Поэтому в К+32 делаем упор на&nbsp;комфорт..."
        showButton={true}
      />

      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <Teams />
      <ScrollReveal>
        <Questions />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <ScrollReveal>
        <Blog />
      </ScrollReveal>
    </>
  );
}
