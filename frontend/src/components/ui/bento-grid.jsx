"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({ className, ...props }) {
  return (
    <div
      className={cn(
        "grid w-full gap-3 sm:gap-4",
        // always 4 columns (same layout desktop + mobile)
        "grid-cols-4",
        // 🔥 rows: at least X height, but can grow if content needs more
        "auto-rows-[minmax(14rem,auto)] sm:auto-rows-[minmax(15rem,auto)] md:auto-rows-[minmax(16rem,auto)] lg:auto-rows-[minmax(18rem,auto)]",
        className
      )}
      {...props}
    />
  );
}

export function BentoGridItem({
  className,
  header,
  title,
  description,
  ...props
}) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-black/40 backdrop-blur",
        "p-2.5 sm:p-3.5",
        className
      )}
      {...props}
    >
      {header && (
        <div className="mb-2 sm:mb-3">
          {header}
        </div>
      )}

      {/* ⬇️ text now sits directly under image, same start level for all cards */}
      <div>
        <h3 className="font-semibold text-[10px] sm:text-xs md:text-sm text-white">
          {title}
        </h3>
        <p className="mt-1 text-[9px] sm:text-[11px] md:text-xs text-neutral-200 leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}