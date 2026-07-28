import { Poppins, Manrope, Montserrat } from "next/font/google";
import "@/assets/styles/main.scss";
import HeaderComponent from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // Имя CSS-переменной
  display: "swap", // Текст виден сразу, предотвращает блокировку отрисовки
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-text",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${poppins.variable} ${manrope.variable} ${montserrat.variable}`}
    >
      <body>
        
        <div className="root-wrapper">
          <HeaderComponent />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
