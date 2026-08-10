import { Poppins, Manrope, Montserrat } from "next/font/google";
import "@/assets/styles/main.scss";
import HeaderComponent from "@/components/HomePage/Header/Header";
import Footer from "@/components/HomePage/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { ModalProvider } from "@/components/context/ModalContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
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
        <div className="root-wrapper">
          <ModalProvider>
            <HeaderComponent />
            <main>{children}</main>
          </ModalProvider>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
