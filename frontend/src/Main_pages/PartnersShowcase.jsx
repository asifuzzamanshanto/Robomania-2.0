"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const partnerSections = [
  {
    tier: "Premier Partners",
    color: "from-purple-500 via-pink-500 to-rose-500",
    partners: [
      {
        name: "TechNova Industries",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Intel-logo.svg",
        comment:
          "Supporting young innovators is part of our DNA. Robomania reflects the future we believe in.",
      },
      {
        name: "RoboVerse Labs",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Robot_icon.svg",
        comment:
          "Incredible energy and creativity from students — thrilled to partner again this year.",
      },
      {
        name: "CircuitCloud",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cloud_computing_icon.svg",
        comment:
          "We’re proud to power real-world engineering challenges with the next generation of minds.",
      },
    ],
  },
  {
    tier: "Platinum Partners",
    color: "from-slate-100 via-slate-300 to-slate-200",
    partners: [
      {
        name: "DataMatrix Solutions",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Dell_Logo.svg",
        comment:
          "Robomania inspires collaboration, problem-solving, and brilliant ideas every time.",
      },
      {
        name: "CloudForge Systems",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        comment:
          "AUST Robotics Club embodies everything we value — teamwork, innovation, and precision.",
      },
      {
        name: "PixelWave Studios",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Adobe_logo_and_wordmark.svg",
        comment:
          "We love seeing creative engineering in motion — a true festival of innovation!",
      },
    ],
  },
  {
    tier: "Gold Partners",
    color: "from-yellow-400 via-amber-400 to-yellow-500",
    partners: [
      {
        name: "NovaTech Solutions",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
        comment:
          "Being part of Robomania 2.0 means investing in the inventors of tomorrow.",
      },
      {
        name: "AlgoWorks Robotics",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/NVIDIA_logo.svg",
        comment:
          "Fantastic event — amazing students and spectacular robots on display!",
      },
      {
        name: "BrightSpark Automation",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Tesla_T_symbol.svg",
        comment:
          "We’re honored to contribute to a community that keeps technology alive and exciting.",
      },
    ],
  },
];

export default function PartnersShowcase() {
  return (
    <section className="relative w-full py-20 bg-transparent text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {partnerSections.map((section, index) => (
          <div key={section.tier} className="relative">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}
              >
                {section.tier}
              </h2>
              <p className="mt-3 text-amber-100/70 text-base sm:text-lg">
                Our valued {section.tier.toLowerCase()} sharing their experiences
              </p>
            </div>

            {/* Infinite Moving Cards */}
            <InfiniteMovingCards
              items={section.partners.map((p) => ({
                content: (
                  <div
                    className="relative
                      flex flex-col items-center justify-center 
                      w-[280px] sm:w-[320px] rounded-3xl p-6 
                      border border-amber-400/30
                      bg-black/80
                      backdrop-blur-xl
                      shadow-[0_0_40px_rgba(0,0,0,0.9)]
                      hover:shadow-[0_0_60px_rgba(0,0,0,1)]
                      transition-all duration-300
                    "
                  >
                    {/* soft amber glow on top of solid black */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/18 via-transparent to-amber-500/10" />

                    {/* actual content */}
                    <div className="relative z-10 flex flex-col items-center text-center gap-3">
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="h-16 sm:h-20 object-contain mb-1"
                      />
                      <h3 className="text-lg sm:text-xl font-semibold text-amber-50">
                        {p.name}
                      </h3>
                      <p className="text-sm text-amber-100/80 leading-relaxed">
                        “{p.comment}”
                      </p>
                    </div>
                  </div>
                ),
              }))}
              direction={index % 2 === 0 ? "left" : "right"}
              speed={1.5}
              pauseOnHover
            />
          </div>
        ))}
      </div>
    </section>
  );
}
