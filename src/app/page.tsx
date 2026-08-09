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
    "Профессиональное лечение зубов, имплантация и протезирование без боли. Прием ведут врачи со стажем от 10 лет.",
  keywords: [
    "стоматология Геленджик",
    "стоматология Кабардинка",
    "лечение зубов",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },

  other: {
    "link:rel:preload:0": "",
    "link:href:0": "/image/hero/hero-mob.webp",
    "link:as:0": "image",
    "link:media:0": "(max-width: 767px)",
    "link:type:0": "image/webp",
    "link:fetchpriority:0": "high", 

    "link:rel:preload:1": "",
    "link:href:1": "/image/hero/hero@2x.webp",
    "link:as:1": "image",
    "link:media:1": "(min-width: 768px)",
    "link:type:1": "image/webp",
    "link:fetchpriority:1": "high",
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
        pageType="home"
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
