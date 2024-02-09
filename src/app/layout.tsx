import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  description: "Lucas is a fullstack developer",
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
            <main className="mx-10">{children}</main>
            <Footer />
            <ThemeSwitch />
            <Toaster position="bottom-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
