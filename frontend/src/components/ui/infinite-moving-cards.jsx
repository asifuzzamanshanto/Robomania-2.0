"use client";

import React, { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
// If you don't actually use cn() anywhere, you can delete this import
import { cn } from "@/lib/utils";

export function InfiniteMovingCards({
  items = [],            // [{ content: <div>...</div> }, ...]
  direction = "left",
  speed = 1,
  pauseOnHover = false,
  className = "",
}) {
  const baseVelocity = direction === "left" ? -speed : speed;
  const baseX = useRef(0);
  const [x, setX] = useState(0);
  const [paused, setPaused] = useState(false);

  // animation loop
  useAnimationFrame((_, delta) => {
    if (paused) return;
    baseX.current += baseVelocity * (delta / 1000) * 50;
    setX(baseX.current);
  });

  // duplicate items to make infinite scroll effect
  const duplicated = [...items, ...items];

  return (
    <div
      className={`relative flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <motion.div
        className="flex gap-6"
        style={{ x }}
        transition={{ ease: "linear" }}
      >
        {duplicated.map((item, idx) => (
          <div key={idx} className="shrink-0">
            {/* 🔥 NOW IT RENDERS JSX DIRECTLY */}
            {item.content}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
