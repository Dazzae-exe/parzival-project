import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-1 w-full mx-auto",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            duration: 1,
            staggerChildren: 0.5,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      className={cn(
        "max-w-full row-span-2 rounded-xl shadow-input bg-secondary border-black justify-between flex flex-col space-y- h-full shadow-md border",
        className
      )}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
    >
      {header}
      <motion.div
        className="p-4 h-28"
        variants={itemVariants}
      >
        {icon}
        <motion.div
          className="font-sans text-2xl font-bold text-primary mb-2 mt-2 truncate"
          variants={itemVariants}
        >
          {title}
        </motion.div>
        <motion.div
          className="font-sans font-normal text-primary text-xs truncate"
          variants={itemVariants}
        >
          {description}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
