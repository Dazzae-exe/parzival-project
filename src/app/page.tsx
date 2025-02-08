"use client";
import { BentoGridComponent } from "@/components/ui/bento-grid-component";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full space-y-8 font-sans-serif">
      <main className="flex flex-col gap-8 items-center sm:items-start w-full">
        <section className="w-full min-h-screen relative flex px-20 py-40 flex-col space-y-8">
          <motion.h1
            className="relative z-20 text-8xl text-primary-foreground font-extrabold uppercase text-left"
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
            }}
          >
            Ten una cara digital con la mejor visión grafica de LATAM
          </motion.h1>
          <motion.p
            className="relative z-20 text-2xl text-primary-foreground font-extrabold uppercase text-left"
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          >
            Hacemos realidad tus diseños y proyectos digitales <br /> con la
            mejor calidad y precio del mercado.
          </motion.p>
          <motion.p
            className="relative z-20 text-xl w-full text-right text-primary-foreground font-extrabold uppercase"
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            Hacemos realidad tus diseños y proyectos digitales <br /> con la
            mejor calidad y precio del mercado.
          </motion.p>
        </section>
        <section className="w-full min-h-screen relative flex px-20 py-20 flex-col space-y-8">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-20"></div>
          <h2 className="text-primary-foreground">Acerca de mi</h2>
        </section>
        <section className="w-full min-h-screen relative container mx-auto mb-40">
          <BentoGridComponent />
        </section>
      </main>
    </div>
  );
}
