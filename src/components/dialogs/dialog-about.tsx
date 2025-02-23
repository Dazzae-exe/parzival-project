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

interface DialogAboutProps {
  name: string;
}

export const DialogAbout = ({ name }: DialogAboutProps) => {
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
           Descubre un poco más acerca de mís estudios, gustos y hobbies.
          </DialogDescription>
        </DialogHeader>

        <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-4">
          Descubramos un poco mas de parzival con un bento grid de sus gustos, hobbies y estudios.
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
