import { Poppins, Manrope, Montserrat } from "next/font/google";
import "@/assets/styles/main.scss";
import HeaderComponent from "@/components/HomePage/Header/Header";
import Footer from "@/components/HomePage/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { ModalProvider } from "@/components/context/ModalContext";
import AppointmentModal from "@/components/Modals/AppointmentModal";
import CookieBanner from "@/components/CookieBanner/CookieBanner";

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
      data-scroll-behavior="smooth"
    >
      <body>
        <ModalProvider>
          <div className="root-wrapper">
            <HeaderComponent />
            <main>{children}</main>
            <Footer />
          </div>
          <AppointmentModal />
        </ModalProvider>
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
