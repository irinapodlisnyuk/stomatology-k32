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
};

export default function BlogRoute() {
  return (
   < BlogPage/>
  );
}