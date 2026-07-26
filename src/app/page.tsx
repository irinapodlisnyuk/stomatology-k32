import ScrollReveal from "@/components/Scroll-reveal/ScrollReveal";
import About from "@/components/AboutK+32/About";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Service/Services";
import Teams from "@/components/Teams/Teams";
import Questions from "@/components/Questions/Questions";
import Contact from "@/components/Contact/Contact";
import { Metadata } from "next";
import Blog from "@/components/Blog/Blog";

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
      <Hero />

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

      <Blog />
    </>
  );
}
