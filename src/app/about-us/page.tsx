import { Metadata } from "next";
import AboutPage from "@/components/AboutUsPage/AboutPage";

export const metadata: Metadata = {
  title: "О клинике «Клиника +32» в Кабардинке | Наша история и стандарты",
  description:
    "Узнайте больше о стоматологии «Клиника +32». Наша миссия, передовое медицинское оборудование и стандарты безопасного лечения зубов в Геленджике.",
  keywords: ["о клинике +32", "стоматология кабардинка о нас", "лицензия стоматологии геленджик"],

  other: {
   
    "link:rel:preload:0": "",
    "link:href:0": "/image/aboutPage/aboutPage-mob.webp",
    "link:as:0": "image",
    "link:media:0": "(max-width: 767px)",
    "link:type:0": "image/webp",
    "link:fetchpriority:0": "high",


    "link:rel:preload:1": "",
    "link:href:1": "/image/aboutPage/aboutPage@2x.webp",
    "link:as:1": "image",
    "link:media:1": "(min-width: 768px)",
    "link:type:1": "image/webp",
    "link:fetchpriority:1": "high",
  }

};

export default function AboutRoute() {
  return (
   <  AboutPage />
  );
}