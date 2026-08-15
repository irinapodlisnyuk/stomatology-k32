import "@/assets/styles/main.scss";
import HeaderComponent from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import CookieBanner from "@/components/CookieBanner/CookieBanner";
import { Providers } from "@/components/context/Providers";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://googleapis.com" />
        <link
          rel="preconnect"
          href="https://gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <div className="root-wrapper">
            <HeaderComponent />
            <main>{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
          <Suspense fallback={null}>
            <CookieBanner />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
