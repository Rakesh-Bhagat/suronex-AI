"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

type Meteor = {
  left: number;
  delay: string;
  duration: string;
};

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const list: Meteor[] = Array.from({ length: number }).map((_, idx) => {
      const position = idx * (1200 / number) - 600;

      return {
        left: position,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.floor(Math.random() * 5 + 5)}s`,
      };
    });

    setMeteors(list);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pointer-events-none absolute inset-0"
    >
      {meteors.map((meteor, idx) => (
        <span
          key={idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-purple-500",
            "before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-purple-500 before:to-transparent",
            className
          )}
          style={{
            top: "-40px",
            left: `${meteor.left}px`,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </motion.div>
  );
};
