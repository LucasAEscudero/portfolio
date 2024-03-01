import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas | Personal Portfolio",
  description:
    "Soy un fullstack developer y estudiante de Ingenieria en Informatica con un ferviente deseo de explorar y expandir mis habilidades en el vasto universo de la informática.",
  authors: {
    url: "https://www.linkedin.com/in/lucas-escudero-54195322b/",
    name: "Lucas Agustin Escudero",
  },
  keywords:
    "portfolio, Luca Escudero, fullstack, web, frontend, presentacion, desarrollador web, proyectos, email, tecnologias",
  openGraph: {
    title: "Lucas Escudero | Personal Portfolio",
    description:
      "Soy un fullstack developer y estudiante de Ingenieria en Informatica con un ferviente deseo de explorar y expandir mis habilidades en el vasto universo de la informática.",
  },
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-[#3575dd] dark:bg-[#1a365d]`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Nav />
            <main className="mx-10">
              {children}
              <Analytics />
            </main>
            <Footer />
            <ThemeSwitch />
            <Toaster position="bottom-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
