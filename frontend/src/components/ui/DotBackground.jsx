import React from "react";

export function DotBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full">
      {/* DOT LAYER */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 animate-dotMove"
        style={{
          backgroundColor: "#000",
          backgroundImage:
            "radial-gradient(circle, #F4D481 1.8px, transparent 1.8px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* RADIAL FADE */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundColor: "#000",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, transparent 20%, black 80%)",
          maskImage:
            "radial-gradient(ellipse at center, transparent 20%, black 80%)",
        }}
      />

      <div className="relative z-0">{children}</div>
    </div>
  );
}
