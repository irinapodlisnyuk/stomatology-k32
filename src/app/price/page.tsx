import ScrollReveal from "@/components/HomePage/Scroll-reveal/ScrollReveal";
import PricePage from "@/components/PricePage/PricePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Цены на стоматологические услуги «Клиника +32» в Кабардинке | Прайс-лист",
  description:
    "Ознакомьтесь с актуальным прайс-листом стоматологической клиники «Клиника +32» в Кабардинке. Честные и доступные цены на лечение, имплантацию, протезирование и гигиену зубов.",
  keywords: [
    "стоматология Кабардинка цены",
    "прайс лист стоматологии Геленджик",
    "стоимость лечения зубов",
    "имплантация зубов цена Кабардинка",
  ],
  robots: { index: true, follow: true },
};

export default function PriceRoute() {
  return (
    <ScrollReveal>
      <PricePage />
    </ScrollReveal>
  );
}
