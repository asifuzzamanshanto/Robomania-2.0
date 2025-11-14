"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * BackgroundGradientAnimation (shadcn/aceternity-style, no CLI required)
 * - Defaults are your palette: #014F23 (forest), #023C3C (deep teal), #1AB7AA (cyan-teal)
 * - No Tailwind config needed; keyframes are local.
 * - No `cn` helper or alias.
 */
export default function BackgroundGradientAnimation({
  // page gradient (top layer)
  gradientBackgroundStart = "rgb(1, 79, 35)",  // #014F23
  gradientBackgroundEnd   = "rgb(2, 60, 60)",  // #023C3C

  // blob colors as "R, G, B"
  firstColor  = "1, 79, 35",   // forest green
  secondColor = "2, 60, 60",   // deep teal
  thirdColor  = "26, 183, 170",// cyan-teal
  fourthColor = "1, 79, 35",   // forest green
  fifthColor  = "2, 60, 60",   // deep teal
  pointerColor = "26, 183, 170",

  size = "80%",                // blob size
  blendingValue = "hard-light",
  interactive = true,
  className = "",
  containerClassName = "",
  children,
}) {
  const pointerRef = useRef(null);
  const containerRef = useRef(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  // Smooth pointer follow using requestAnimationFrame
  useEffect(() => {
    let raf;
    const tick = () => {
      setCurX((prev) => prev + (tgX - prev) / 20);
      setCurY((prev) => prev + (tgY - prev) / 20);
      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [tgX, tgY, curX, curY]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTgX(e.clientX - rect.left);
    setTgY(e.clientY - rect.top);
  };

  // Safari needs stronger blur fallback
  const isSafari = typeof navigator !== "undefined" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
      <div
    aria-hidden="true"
    className={`pointer-events-none fixed inset-0 z-0 ${className}`}
    style={{ backgroundImage: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})` }}
  >
    <div
      ref={containerRef}
      onMouseMove={interactive ? handleMouseMove : undefined}
      className={`relative h-screen w-screen overflow-hidden top-0 left-0 ${containerClassName}`}
      style={{
        backgroundImage: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
      }}
    >
      {/* SVG filter for the gooey blur */}
      <svg className="hidden">
        <defs>
          <filter id="bg-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
</div>
      {/* Content goes above the background */}
      <div className={className}>{children}</div>

      {/* Blobs container with heavy blur */}
      <div
        className="absolute inset-0 blur-lg"
        style={{
          filter: isSafari ? "blur(32px)" : "url(#bg-goo) blur(40px)",
        }}
      >
        {/* First */}
        <div
          className="absolute"
          style={{
            background: `radial-gradient(circle at center, rgb(${firstColor}) 0, rgb(${firstColor}) 50%) no-repeat`,
            mixBlendMode: blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size}/2)`,
            left: `calc(50% - ${size}/2)`,
            transformOrigin: "center center",
            animation: "moveVertical 30s ease infinite",
            opacity: 1,
          }}
        />
        {/* Second */}
        <div
          className="absolute"
          style={{
            background: `radial-gradient(circle at center, rgba(${secondColor}, 0.8) 0, rgba(${secondColor}, 0) 50%) no-repeat`,
            mixBlendMode: blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size}/2)`,
            left: `calc(50% - ${size}/2)`,
            transformOrigin: "calc(50% - 400px)",
            animation: "moveInCircle 20s reverse infinite",
            opacity: 1,
          }}
        />
        {/* Third */}
        <div
          className="absolute"
          style={{
            background: `radial-gradient(circle at center, rgba(${thirdColor}, 0.8) 0, rgba(${thirdColor}, 0) 50%) no-repeat`,
            mixBlendMode: blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size}/2)`,
            left: `calc(50% - ${size}/2)`,
            transformOrigin: "calc(50% + 400px)",
            animation: "moveInCircle 40s linear infinite",
            opacity: 1,
          }}
        />
        {/* Fourth */}
        <div
          className="absolute"
          style={{
            background: `radial-gradient(circle at center, rgba(${fourthColor}, 0.8) 0, rgba(${fourthColor}, 0) 50%) no-repeat`,
            mixBlendMode: blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size}/2)`,
            left: `calc(50% - ${size}/2)`,
            transformOrigin: "calc(50% - 200px)",
            animation: "moveHorizontal 40s ease infinite",
            opacity: 0.7,
          }}
        />
        {/* Fifth */}
        <div
          className="absolute"
          style={{
            background: `radial-gradient(circle at center, rgba(${fifthColor}, 0.8) 0, rgba(${fifthColor}, 0) 50%) no-repeat`,
            mixBlendMode: blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size}/2)`,
            left: `calc(50% - ${size}/2)`,
            transformOrigin: "calc(50% - 800px) calc(50% + 800px)",
            animation: "moveInCircle 20s ease infinite",
            opacity: 1,
          }}
        />

        {/* Pointer-follow glow */}
        {interactive && (
          <div
            ref={pointerRef}
            className="absolute"
            style={{
              background: `radial-gradient(circle at center, rgba(${pointerColor}, 0.8) 0, rgba(${pointerColor}, 0) 50%) no-repeat`,
              mixBlendMode: blendingValue,
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              opacity: 0.7,
              willChange: "transform",
            }}
          />
        )}
      </div>

      {/* Local keyframes (no Tailwind config needed) */}
      <style>{`
        @keyframes moveHorizontal {
          0%   { transform: translateX(-50%) translateY(-10%); }
          50%  { transform: translateX(50%)  translateY(10%); }
          100% { transform: translateX(-50%) translateY(-10%); }
        }
        @keyframes moveInCircle {
          0%   { transform: rotate(0deg); }
          50%  { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes moveVertical {
          0%   { transform: translateY(-50%); }
          50%  { transform: translateY(50%); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
}
