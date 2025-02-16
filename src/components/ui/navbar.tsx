"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    logo?: HTMLImageElement;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() <= 0) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="sync">
        <motion.figure initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="fixed hidden md:block top-4 left-0 z-30">
          <Image
            src="/parzi_logo.svg"
            className="w-32"
            alt="logo"
            width={100}
            height={100}
          />
        </motion.figure>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-secondary bg-primary shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-2 py-2  items-center justify-center space-x-2",
          className
        )}
      >
        <motion.figure initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          scale: visible ? 1 : 0.8,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 1,
        }} className="w-16 h-16 md:hidden block">
        <Image
            src="/parzi_logo.svg"
            className="w-full"
            alt="logo"
            width={100}
            height={100}
          />
        </motion.figure>
        {navItems.map((navItem, idx: number) => (
          <Button
            variant="ghost"
            className="rounded-full text-white"
            asChild
            key={`link-${idx}`}
          >
            <Link href={navItem.link} className="md:text-base text-xs">{navItem.name}</Link>
          </Button>
        ))}
      </motion.div>
        <motion.figure  initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="fixed top-4 hidden md:block md:right-2 lg:right-8 z-30">
          <Image
            src="/parzi_isologo.svg"
            className="w-32"
            alt="logo"
            width={100}
            height={100}
          />
        </motion.figure>
    </AnimatePresence>
  );
};
