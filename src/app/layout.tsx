import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "../../styles/animate.min.css";
import "swiper/css";
import "swiper/css/bundle";

// Global styles
import "../../styles/style.css";
import "../../styles/responsive.css";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Layout/Footer";
import GoTop from "@/components/Layout/GoTop";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Majzik Ernő, sportsebész specialista",
  description:
    "All-inside keresztszalag műtét: kevesebb fájdalom, gyorsabb gyógyulás",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable}`}>
        {children}

        <Footer />

        <GoTop />
      </body>
    </html>
  );
}
