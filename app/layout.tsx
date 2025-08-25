import type { Metadata } from "next";
import { Geist, Geist_Mono, Exo_2 } from "next/font/google";
import Header from "@/components/Header";
import Iskuba from "@/components/Iskuba";
import "./globals.css";

// Initialize font
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose the weights you need
  display: "swap", // optional
});

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
      <body className={`${exo2.className} antialiased`}>
        <Iskuba />
        <Header />
        {children}
      </body>
    </html>
  );
}
