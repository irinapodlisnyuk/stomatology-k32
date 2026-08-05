import { Metadata } from "next";
import BlogPage from "@/components/BlogPage/BlogPage";

export const metadata: Metadata = {
  title: "О клинике «Клиника +32» в Кабардинке | Наша история и стандарты",
  description:
    "Узнайте больше о стоматологии «Клиника +32». Наша миссия, передовое медицинское оборудование и стандарты безопасного лечения зубов в Геленджике.",
  keywords: ["о клинике +32", "стоматология Кабардинка о нас", "лицензия стоматологии Геленджик"],
};

export default function AboutUsPage() {
  return (
   < BlogPage/>
  );
}