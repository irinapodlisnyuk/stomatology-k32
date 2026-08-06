import { Metadata } from "next";
import ContactPage from "@/components/ContactPage/ContactPage";

export const metadata: Metadata = {
  title: "Контакты «Клиника +32» в Кабардинке | Адрес, телефон, режим работы",
  description:
    "Адрес, номер телефона и точный режим работы стоматологической клиники «Клиника +32» в Кабардинке. Удобная схема проезда и онлайн-запись на прием.",
  keywords: [
    "стоматология кабардинка контакты", 
    "клиника плюс 32 телефон", 
    "адрес стоматологии геленджик", 
    "где лечить зубы в кабардинке"
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactRoute() {
  return (
   < ContactPage />
  );
}