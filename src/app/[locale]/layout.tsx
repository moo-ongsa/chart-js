import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { Anuphan } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { SupportLocales } from "@/core/types/SupportLocales";
import { routing } from "@/i18n/routing";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import { ToasterProvider } from "@/components/ToasterProvider";
import { AgeProvider } from "@/context/AgeContext";

// ✅ Font settings
const anuphan = Anuphan({
  subsets: ["latin", "thai"],
  variable: "--font-anuphan",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "ChartJS",
  description: "PiggyPigs with ChartJS",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: any;
}) {
  const { locale }: { locale: SupportLocales } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${anuphan.variable} antialiased`}>
        <NextIntlClientProvider>
          <ToasterProvider />
          <AgeProvider>
            <Navbar />
            {children}
          </AgeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
