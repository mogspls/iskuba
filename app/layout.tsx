import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { ContactModalProvider } from "@/components/contact-modal";

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
        <ContactModalProvider>
          {children}
          <Footer/>
        </ContactModalProvider>
      </body>
    </html>
  );
}
