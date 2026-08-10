import Hero from "@/components/Hero/Hero";
import ScrollReveal from "@/components/HomePage/Scroll-reveal/ScrollReveal";
import About from "@/components/HomePage/AboutSection/About";
import Services from "@/components/HomePage/Service/Services";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Teams = dynamic(() => import("@/components/HomePage/Teams/Teams"), {
  ssr: true,
});
const Questions = dynamic(
  () => import("@/components/HomePage/Questions/Questions"),
  { ssr: true },
);
const Contact = dynamic(() => import("@/components/HomePage/Contact/Contact"), {
  ssr: true,
});
const Blog = dynamic(
  () => import("@/components/HomePage/Blog/Blog").then((mod) => mod.Blog),
  { ssr: true },
);

// 1. Стандартные SEO-метаданные
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
