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
 
  other: {
  
    "link:rel:preload:0": "",
    "link:href:0": "/image/call/call-mob.webp",
    "link:as:0": "image",
    "link:media:0": "(max-width: 767px)",
    "link:type:0": "image/webp",

  
    "link:rel:preload:1": "",
    "link:href:1": "/image/call/call.webp",
    "link:as:1": "image",
    "link:media:1": "(min-width: 768px)",
    "link:type:1": "image/webp",
  }
};

export default function ContactRoute() {
  return (
   < ContactPage />
  );
}