import { Poppins, Manrope, Montserrat } from "next/font/google";
import "@/assets/styles/main.scss";
import HeaderComponent from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { Providers } from "@/components/context/Providers"; // Импортируем новую обертку

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: false,
});

const manrope = Manrope({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-text",
  display: "swap",
  preload: false,
});

const montserrat = Montserrat({
  subsets: ["cyrillic"],
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
        <Providers>
          <div className="root-wrapper">
            <HeaderComponent />
            <main>{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
