"use client";
import { BentoGridComponent } from "@/components/ui/bento-grid-component";
import { motion } from "framer-motion";
import { Flower, PaintbrushVerticalIcon, PlaneTakeoff } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full space-y-8 font-sans-serif">
      <main className="flex flex-col gap-8 items-center sm:items-start w-full">
        <section className="w-full min-h-screen relative flex px-20 py-40 flex-col space-y-8">
          <motion.h1
            className="relative z-20 text-6xl sm:text-8xl lg:text-[180px] text-primary font-extrabold uppercase text-left mt-44 "
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
            Haz ruido <br /> Deja marca
          </motion.h1>
          <motion.p
            className="relative z-20 text-2xl text-primary font-extrabold uppercase text-left"
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
            Las marcas que encajan se olvidan, las que destacan trascienden. <br /> Creemos algo unico.  
          </motion.p>
        </section>
        <motion.section
          className="w-full min-h-screen relative flex px-20 py-20 flex-col space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)] z-20"></div>
          <div className="flex flex-col items-end">
            <motion.h2
              className="text-primary w-full text-right text-5xl sm:text-7xl lg:text-[140px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Acerca <br />de mi
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Image src="/parzi_logo.svg" width={80} height={80} alt="Parzival Logo" className="w-80" quality={80} />
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          className="w-full min-h-screen relative px-20 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <BentoGridComponent />
        </motion.section>
        <motion.section
          className="w-full min-h-screen relative px-20 mx-auto my-40 flex items-center justify-center flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)] z-20"></div>
          <motion.h2
            className="text-primary w-full text-center text-4xl"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explicación breve <br /> de mis procesos
          </motion.h2>
          <motion.div
            className="flex md:items-center md:flex-row flex-col md:justify-between mt-8 gap-4 h-full w-full justify-start items-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, staggerChildren: 0.3 }}
          >
            <motion.div
              className="w-full text-black max-h-[50vh] h-[50vh] rounded-lg bg-green-200/50 p-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <PlaneTakeoff width={24} height={24} />
              <div className="h-[90%] w-full flex items-end">
                <h3 className="text-primary text-2xl font-bold">Planificación</h3>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-[65%] text-black max-h-[50vh] h-[50vh] rounded-lg bg-green-200/60 p-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <PaintbrushVerticalIcon width={24} height={24} />
              <div className="h-[90%] w-full flex items-end">
                <h3 className="text-primary text-2xl font-bold">Diseño y creatividad</h3>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-[65%] text-black max-h-[50vh] h-[50vh] rounded-lg bg-green-200/60 p-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Flower width={24} height={24} />
              <div className="h-[90%] w-full flex items-end">
                <h3 className="text-primary text-2xl font-bold">Diseño de marca</h3>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
