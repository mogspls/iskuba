import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Iskuba from "@/components/Iskuba";
import "./globals.css";

export const metadata: Metadata = {
  title: "ISKUBA Philippines",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Iskuba />
        <Header />
        {children}
      </body>
    </html>
  );
}
