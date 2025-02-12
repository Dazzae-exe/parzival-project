import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Badge } from "./badge";

export function BentoGridComponent() {
  return (
    <BentoGrid className="w-full mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={`${ i === 0 ? "md:col-span-3" : "" } ${i === 1 || i === 4 ? "md:col-span-2" : ""}`}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full min-h-[6rem] rounded-t-xl  bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 h-[400px]"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <Badge variant={'default'} className="h-4 text-white">La destrucción</Badge>,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <Badge variant={'default'} className="h-4 text-white">La destrucción</Badge>,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <Badge variant={'default'} className="h-4 text-white">La destrucción</Badge>,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <Badge variant={'default'} className="h-4 text-white">La destrucción</Badge>
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <Badge variant={'default'} className="h-4 text-white">La destrucción</Badge>,
  },
];
