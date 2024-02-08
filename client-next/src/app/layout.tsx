import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas | Personal Portfolio",
  description: "Lucas is a fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          <Nav />
          <main className="mx-10">{children}</main>
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
