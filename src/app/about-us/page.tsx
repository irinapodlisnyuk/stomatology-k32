import { Metadata } from "next";
import AboutPage from "@/components/AboutUsPage/AboutPage";

export const metadata: Metadata = {
  title: "О клинике «Клиника +32» в Кабардинке | Наша история и стандарты",
  description:
    "Узнайте больше о стоматологии «Клиника +32». Наша миссия, передовое медицинское оборудование и стандарты безопасного лечения зубов в Геленджике.",
  keywords: ["о клинике +32", "стоматология кабардинка о нас", "лицензия стоматологии геленджик"],
};

export default function AboutRoute() {
  return (
   <  AboutPage />
  );
}