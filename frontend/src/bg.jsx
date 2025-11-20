// src/components/Background.jsx
import React from "react";

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* FIXED GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-[#FDF9F0]">
        {/* TOP HALFTONE DOTS – STRONG & VISIBLE */}
        <div
          className="absolute left-0 top-0 h-[45vh] w-full"
          style={{
            // big yellow dots
            backgroundImage:
              "radial-gradient(circle, #F4D481 0 2px, transparent 2px)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* BOTTOM DARK BAND */}
        <div className="absolute bottom-[01px]  h-[18px] w-full bg-[#4A3C16]" />


      </div>

      {/* YOUR PAGE CONTENT */}
      <div className="relative">{children}</div>
    </div>
  );
};

export default Background;
