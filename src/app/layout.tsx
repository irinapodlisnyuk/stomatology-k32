import type { Metadata } from "next";
import "@/assets/styles/main.scss";
import HeaderComponent from "@/components/Header/header";

export const metadata: Metadata = {
  title:
    "Стоматология в Кабардинке | Клиника экспертного лечения зубов «Клиника +32»",
  description:
    "Профессиональное лечение зубов, имплантация и протезирование без боли. Прием ведут врачи со стажем от 10 лет. Запишитесь на консультацию!",
  keywords: [
    "стоматология Геленджик",
    "стоматология Кабардинка",
    "лечение зубов",
    "имплантация зубов 35000рублей",
    "хороший стоматолог",
    "протезирование",
    "стоматологическая клиника",
  ],

  //  Настройки для роботов (Robots) — разрешаем индексировать весь сайт и переходить по ссылкам
  robots: {
    index: true,
    follow: true,
  },
   icons: {
    icon: "/icon.svg", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="root-wrapper">
          <HeaderComponent />
          <main>{children}</main>
          <footer>Footer</footer>
        </div>
      </body>
    </html>
  );
}
