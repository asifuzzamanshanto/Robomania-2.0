"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-[#FACC6B] to-[#F5E6C8] py-4 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-7xl"
      >
        Contact Us
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
  contentClassName,
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#020617] w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Left conic glow */}
        <motion.div
          initial={{ opacity: 0.5, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            willChange: "transform, opacity",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#22C5A5] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-[#020617] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-[#020617] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right conic glow */}
        <motion.div
          initial={{ opacity: 0.5, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            willChange: "transform, opacity",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#22C5A5] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-[#020617] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-[#020617] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Dark base under glow */}
        <div
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#020617] blur-xl"
          style={{ willChange: "transform" }}
        ></div>

        {/* Very subtle glass layer */}
        <div
          className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-sm"
          style={{ willChange: "opacity" }}
        ></div>

        {/* Main teal glow */}
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#22C5A5] opacity-45 blur-2xl"
          style={{ willChange: "transform" }}
        ></div>

        {/* Inner warm glow (gold) */}
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeOut",
          }}
          style={{ willChange: "transform" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#FACC6B] blur-xl"
        ></motion.div>

        {/* Top highlight line in gold */}
        <motion.div
          initial={{ scaleX: 0.5 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeOut",
          }}
          style={{ willChange: "transform" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[#FACC6B] origin-center"
        ></motion.div>

        {/* Mask to fade lamp into page bg */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#020617]" />
      </div>

      {/* Content slot (your “Contact Us” text etc.) */}
      <div
        className={cn(
          "relative z-50 flex -translate-y-80 flex-col items-center px-5",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};
