import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DotBackground } from "@/components/ui/bg-grid-dots";
import { FloatingNav } from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parzival Design",
  description:
    "Parzival Design es un autonomo diseñador grafico, ilustrador y diseñador ux/ui. Especializado en diseño de marcas, diseño de interfaces y diseño de ilustraciones. Conoce más sobre mi trabajo, servicios y cursos.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNav navItems={[{ name: 'Inicio', link: '/'}, { name: 'About', link: '/about'}]} />
        <DotBackground>{children}</DotBackground>
        <Footer />
      </body>
    </html>
  );
}
