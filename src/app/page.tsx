// import ScrollReveal from "@/components/HomePage/Scroll-reveal/ScrollReveal";
// import About from "@/components/HomePage/AboutSection/About";
// import Hero from "@/components/Hero/Hero";
// import Services from "@/components/HomePage/Service/Services";
// import Teams from "@/components/HomePage/Teams/Teams";
// import Questions from "@/components/HomePage/Questions/Questions";
// import Contact from "@/components/HomePage/Contact/Contact";
// import { Metadata } from "next";
// import { Blog } from "@/components/HomePage/Blog/Blog";

// export const metadata: Metadata = {
//   title:
//     "Стоматология в Кабардинке | Клиника экспертного лечения зубов «Клиника +32»",
//   description:
//     "Профессиональное лечение зубов, имплантация и протезирование без боли. Прием ведут врачи со стажем от 10 лет. Запишитесь на консультацию!",
//   keywords: [
//     "стоматология Геленджик",
//     "стоматология Кабардинка",
//     "лечение зубов",
//     "имплантация зубов 35000рублей",
//     "хороший стоматолог",
//     "протезирование",
//     "стоматологическая клиника",
//   ],

//   //  Настройки для роботов (Robots) — разрешаем индексировать весь сайт и переходить по ссылкам
//   robots: {
//     index: true,
//     follow: true,
//   },
//   icons: {
//     icon: "/icon.svg",
//   },

//  other: {
//     // Предзагрузка базового мобильного баннера (до 767px включительно)
//     "link:rel:preload:0": "",
//     "link:href:0": "/image/hero/hero-mob.webp", /* ⚡ Путь к вашей картинке из отчета Lighthouse */
//     "link:as:0": "image",
//     "link:media:0": "(max-width: 767px)",
//     "link:type:0": "image/webp",

//     // Предзагрузка десктопного Retina-баннера (от 768px и выше)
//     "link:rel:preload:1": "",
//     "link:href:1": "/image/hero/hero@2x.webp",
//     "link:as:1": "image",
//     "link:media:1": "(min-width: 768px)",
//     "link:type:1": "image/webp",
//   }
// };

// export default function HomePage() {
//   return (
//     <>
//       <Hero
//         title="Добро пожаловать в&nbsp;К+32"
//         subtitle="Заботимся о&nbsp;здоровье и&nbsp;красоте ваших зубов на&nbsp;каждом этапе."
//         text="Мы&nbsp;знаем, что поход к&nbsp;стоматологу часто вызывает волнение. Поэтому в К+32 делаем упор на&nbsp;комфорт..."
//         showButton={true}
//         pageType="home"
//       />

//       <ScrollReveal>
//         <About />
//       </ScrollReveal>
//       <ScrollReveal>
//         <Services />
//       </ScrollReveal>
//       <Teams />
//       <ScrollReveal>
//         <Questions />
//       </ScrollReveal>
//       <ScrollReveal>
//         <Contact />
//       </ScrollReveal>
//       <ScrollReveal>
//         <Blog />
//       </ScrollReveal>
//     </>
//   );
// }

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
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export default function HomePage() {
  return (
    <>
      <link
        rel="preload"
        href="/image/hero/hero-mob.webp"
        as="image"
        media="(max-width: 767px)"
        type="image/webp"
        // @ts-expect-error fetchpriority еще не добавлен в базовые типы некоторых версий React, но валиден для браузеров
        fetchpriority="high"
      />
      <link
        rel="preload"
        href="/image/hero/hero@2x.webp"
        as="image"
        media="(min-width: 768px)"
        type="image/webp"
        // @ts-expect-error fetchpriority еще не добавлен в базовые типы некоторых версий React, но валиден для браузеров
        fetchpriority="high"
      />

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
