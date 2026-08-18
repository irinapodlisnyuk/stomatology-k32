import "@/assets/styles/main.css";
import "@/assets/styles/main.scss";

import Footer from "@/components/Footer/Footer";
import HeaderComponent from "@/components/Header/Header";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { Providers } from "@/components/context/Providers";
import { LayoutModals } from "@/components/context/LayoutModals"; // Импортируем модалки
import { Manrope, Montserrat, Poppins } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-text",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${montserrat.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body>
        <Providers>
          <div className="root-wrapper">
            <HeaderComponent />
            <main>{children}</main>

            <Footer />
          </div>
          <ScrollToTop />
          <LayoutModals />
        </Providers>
      </body>
    </html>
  );
}
