import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { DotBackground } from "@/components/ui/bg-grid-dots";
import { FloatingNav } from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

import { ReactLenis } from "lenis/react";
import "./globals.css";
import { DialogContact } from "@/components/dialogs/dialog-contact";
import { DialogAbout } from "@/components/dialogs/dialog-about";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const niconne = localFont({ src: '../assets/fonts/niconne.ttf' });

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
        className={`${inter.variable} ${niconne.className} font-sans-serif antialiased`}
      >
        <ReactLenis root options={{ duration: 1.2}}>
          <FloatingNav
            navItems={[
              { name: "Inicio", link: "/" },
              { name: "Proyectos", link: "/projects" },
              { name: "Procesos", link: "/process" },
              { name: "Sobre mi", modal: <DialogAbout name="Sobre mi" /> },
              { name: "Contacto", modal: <DialogContact name="Contacto" /> },
            ]}
          />
          <DotBackground>{children}</DotBackground>
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
