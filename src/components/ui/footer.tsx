import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Linkedin, Music } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Left Column - Navigation Links */}
        <div className="space-y-4">
          <Link href="/projects" className="block text-lg hover:underline underline-offset-4 w-fit">
            Proyectos
          </Link>
          <Link href="/process" className="block text-lg hover:underline underline-offset-4 w-fit">
            Proceso
          </Link>
          <Link href="/packages" className="block text-lg hover:underline underline-offset-4 w-fit">
            Paquetes
          </Link>
          <Link href="/newsletter" className="block text-lg hover:underline underline-offset-4 w-fit">
            Newsletter
          </Link>
          <Link href="/contact" className="block text-lg hover:underline underline-offset-4 w-fit">
            Contacto
          </Link>
        </div>

        {/* Middle Column - CTA */}
        <div className="text-center flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl font-normal text-center">Interesado en trabajar juntos o tienes alguna pregunta?</h2>
          <Button className="bg-secondary hover:bg-secondary-foreground hover:text-secondary rounded-full px-8 py-6 text-lg h-auto">
            Envia un mensaje
          </Button>
        </div>

        {/* Right Column - Legal & Social */}
        <div className="flex flex-col items-end justify-between">
          <div className="space-y-4 text-right">
            <Link href="/privacy" className="block text-lg hover:underline underline-offset-4">
              Privacy policy
            </Link>
            <Link href="/terms" className="block text-lg hover:underline underline-offset-4">
              Terms of service
            </Link>
          </div>

          <div className="mt-8">
            <div className="flex gap-6 justify-end mb-4">
              <Link href="https://instagram.com" className="hover:opacity-80">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="hover:opacity-80">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://linkedin.com" className="hover:opacity-80">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <p className="text-sm text-right opacity-80">© Parzival Design 2025</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
