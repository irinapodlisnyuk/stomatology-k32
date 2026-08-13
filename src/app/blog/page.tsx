import { Metadata } from "next";
import BlogPage from "@/components/BlogPage/BlogPage";

export const metadata: Metadata = {
  title: "Блог стоматологии «Клиника +32» | Советы экспертов и рекомендации",
  description:
    "Полезные статьи о лечении зубов, имплантации, эстетической стоматологии и уходе за полостью рта от опытных врачей клиники «Клиника +32» в Кабардинке.",
  keywords: [
    "блог стоматологии", 
    "советы стоматолога", 
    "стоматология Кабардинка статьи", 
    "профилактика кариеса", 
    "рекомендации по уходу за зубами"
  ],
  robots: {
    index: true,
    follow: true,
  },
   other: {
    // Предзагрузка мобильной версии баннера (до 767px включительно)
    "link:rel:preload:0": "",
    "link:href:0": "/image/heroBlog/blog-mob.webp",
    "link:as:0": "image",
    "link:media:0": "(max-width: 767px)",
    "link:type:0": "image/webp",
    "link:fetchpriority:0": "high",

    // Предзагрузка Retina-версии для планшетов и компьютеров (от 768px и выше)
    "link:rel:preload:1": "",
    "link:href:1": "/image/heroBlog/blog@2x.webp",
    "link:as:1": "image",
    "link:media:1": "(min-width: 768px)",
    "link:type:1": "image/webp",
    "link:fetchpriority:1": "high",
  }
};

export default function BlogRoute() {
  return (
   < BlogPage/>
  );
}