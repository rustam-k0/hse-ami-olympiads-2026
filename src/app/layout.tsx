import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin", "cyrillic"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin", "cyrillic"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Олимпиады для ПМИ ВШЭ",
  description: "Справочник льгот олимпиад школьников для поступления на ПМИ ВШЭ в 2026 году",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className={`${geist.variable} ${geistMono.variable}`}><body>{children}</body></html>;
}
