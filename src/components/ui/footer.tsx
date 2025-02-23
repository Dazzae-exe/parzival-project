"use client"
import Link from 'next/link'
import { InstagramIcon } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "./button"

export default function Footer() {
  return (
    <AnimatePresence>
      <motion.footer 
        className="bg-foreground py-16 px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-primary">
          {/* Left Column - Navigation Links */}
          <motion.div 
            className="space-y-4 md:block hidden font-medium"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/projects" className="block text-lg hover:underline underline-offset-4 w-fit">
              Proyectos
            </Link>
            <Link href="/process" className="block text-lg hover:underline underline-offset-4 w-fit">
              Procesos
            </Link>
            <Link href="/newsletter" className="block text-lg hover:underline underline-offset-4 w-fit">
              Newsletter
            </Link>
          </motion.div>

          {/* Middle Column - CTA */}
          <motion.div 
            className="text-center flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-center">Interesado en trabajar juntos o tienes alguna pregunta?</h2>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary rounded-full px-8 py-6 text-lg h-auto">
              Envia un mensaje
            </Button>
          </motion.div>

          {/* Right Column - Social Icons */}
          <motion.div 
            className="flex justify-center md:justify-end space-x-6 h-full items-end"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="https://www.instagram.com/parzi.design/" target="_blank" className="hover:text-primary">
              <InstagramIcon className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </motion.footer>
    </AnimatePresence>
  )
}
