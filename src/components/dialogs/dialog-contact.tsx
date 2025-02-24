"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DialogContactProps {
  name: string;
}

export const DialogContact = ({ name }: DialogContactProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="rounded-full md:text-base text-xs">
          {name}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full h-screen max-w-full duration-700 transition-all">
        <DialogHeader>
          <DialogTitle className="text-6xl font-bold">{name}</DialogTitle>
          <DialogDescription className="text-lg text-foreground">
            ¿Tienes alguna pregunta, oferta laboral o algún diseño en mente?
            ¡Escríbeme!
          </DialogDescription>
        </DialogHeader>

        <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-4">
          <Button size="lg" variant={"outline"} asChild>
            <Link href="mailto:parzigo@gmail.com" className="text-primary">
              Llenar un formulario con su mensajé
            </Link>
          </Button>

          <div className="max-w-72 md:max-w-full w-full md:w-12 border border-orange-400 transform md:rotate-90 rotate-0 rounded"></div>

          <Button size="lg" variant={"outline"} asChild>
            <Link href="mailto:parzigo@gmail.com" className="text-primary">
              Enviame un correo electronico
            </Link>
          </Button>
        </div>

        <DialogFooter className="w-full h-full flex flex-col justify-end items-end">
          <DialogClose asChild>
            <Button variant="outline" className="rounded-full text-primary">
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
