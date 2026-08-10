import ReactDOM from "react-dom";
import Hero from "@/components/Hero/Hero";
import ScrollReveal from "@/components/HomePage/Scroll-reveal/ScrollReveal";
import About from "@/components/HomePage/AboutSection/About";
import Services from "@/components/HomePage/Service/Services";
import Teams from "@/components/HomePage/Teams/Teams";
import Questions from "@/components/HomePage/Questions/Questions";
import Contact from "@/components/HomePage/Contact/Contact";
import { Blog } from "@/components/HomePage/Blog/Blog";
import { Metadata } from "next";

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

interface CustomPreloadOptions extends ReactDOM.PreloadOptions {
  media?: string;
  fetchPriority?: "high" | "low" | "auto";
}

export default function HomePage() {
  ReactDOM.preload("/image/hero/hero-mob.webp", {
    as: "image",
    media: "(max-width: 767px)",
    fetchPriority: "high",
  } as CustomPreloadOptions);

  ReactDOM.preload("/image/hero/hero.webp", {
    as: "image",
    media: "(min-width: 768px)",
    fetchPriority: "high",
  } as CustomPreloadOptions);

  return (
    <>
      <Hero
        title="Добро пожаловать в&nbsp;К+32"
        subtitle="Заботимся о&nbsp;здоровье и&nbsp;красоте ваших зубов на&nbsp;каждом этапе."
        text="Мы&nbsp;знаем, что поход к&nbsp;стоматологу часто вызывает волнение. Поэтому в К+32 делаем упор на&nbsp;комфорт..."
        showButton={true}
        pageType="home"
      />
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "0 2000px" }}
      >
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
      </div>
    </>
  );
}
