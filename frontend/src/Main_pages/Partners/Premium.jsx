import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const premiumSponsors = [
  {
    name: "TechNova Industries",
    tagline: "Innovation Partner",
    logo: "/sponsors/technova.png",
  },
  {
    name: "RoboVerse Labs",
    tagline: "AI & Robotics Partner",
    logo: "/sponsors/roboverselabs.png",
  },
  {
    name: "CircuitCloud",
    tagline: "Cloud & DevOps Partner",
    logo: "/sponsors/circuitcloud.png",
  },
];

const timelineItems = [
  {
    title: "What We Are Looking For",
    points: [
      "Brands that resonate with technology, innovation and youth.",
      "Support through financial sponsorship or in-kind resources.",
      "Interest in long-term collaboration beyond a single event.",
      "Partners who want to actively engage with the AUST community.",
    ],
  },
  {
    title: "What We Offer in Return",
    points: [
      "High-visibility branding across stage backdrops and arenas.",
      "Logo placement on website, banners and digital media.",
      "Dedicated shout-outs in opening & closing ceremonies.",
      "Custom co-branded campaigns with AUST Robotics Club.",
    ],
  },
  {
    title: "Access & Privileges",
    points: [
      "Direct access to top CSE / EEE / ME students at AUST.",
      "On-campus activation booth during RoBomania 2.0.",
      "VIP passes, reserved seating and networking space.",
      "Opportunities to promote internships and recruitment.",
    ],
  },
  {
    title: "Why Partner With Us",
    points: [
      "Proven track record with events like ARC and Robomania 1.0.",
      "Highly engaged robotics and tech-focused student base.",
      "Strong social media presence and campus reach.",
      "A partnership team committed to building long-term value.",
    ],
  },
];

const Premium = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSponsor = premiumSponsors[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % premiumSponsors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? premiumSponsors.length - 1 : prev - 1
    );
  };

  return (
    <section className="px-4 py-10 md:py-20">
      {/* --- PREMIUM PARTNER OVERVIEW + CAROUSEL --- */}
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl border border-green-400  p-6 backdrop-blur-md md:flex-row md:p-10">
        {/* LEFT: Overview */}
        <div className="flex-1 space-y-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-emerald-200/80">
            Premium Partnership · RoBomania 2.0
          </p>

          <h1 className="text-[28px] font-semibold leading-tight text-emerald-50 md:text-[34px]">
            Premium Partners: Front-Row Seat to AUST Robotics
          </h1>

          <p className="text-[15px] leading-relaxed text-emerald-50/80">
            Premium Partners are our closest collaborators. They receive the
            most prominent presence across RoBomania 2.0 — from main-stage
            branding and segment arenas to digital campaigns and social media.
          </p>

          <ul className="space-y-2 text-[14px] text-emerald-50/90">
            <li>• Logo across high-visibility event collaterals.</li>
            <li>• Dedicated shout-outs in ceremonies and on socials.</li>
            <li>• Featured spotlight on the RoBomania 2.0 website.</li>
            <li>• On-ground activation opportunities at the AUST campus.</li>
          </ul>

          <button className="mt-4 inline-flex items-center rounded-full bg-emerald-400 px-6 py-2.5 text-[14px] font-semibold text-slate-900">
            Become a Premium Partner
          </button>
        </div>

        {/* RIGHT: Carousel */}
        <div className="flex-1">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="overflow-hidden rounded-3xl border border-green-800  px-6 py-8">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-100/70">
                  Featured Premium Sponsor
                </p>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSponsor.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col items-center gap-4 text-center"
                  >
                    <div className="flex h-[120px] w-full items-center justify-center rounded-2xl bg-emerald-900/60">
                      <img
                        src={currentSponsor.logo}
                        alt={currentSponsor.name}
                        className="max-h-[80px] max-w-[80%] object-contain"
                      />
                    </div>

                    <div>
                      <h2 className="text-[20px] font-semibold text-emerald-50">
                        {currentSponsor.name}
                      </h2>
                      <p className="text-[13px] text-emerald-100/70">
                        {currentSponsor.tagline}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  className="rounded-full border border-emerald-400/40 bg-emerald-900/40 px-3 py-1.5 text-[13px] text-emerald-50"
                >
                  ‹ Prev
                </button>
                <div className="flex items-center gap-2">
                  {premiumSponsors.map((sponsor, index) => (
                    <button
                      key={sponsor.name}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-[8px] w-[8px] rounded-full transition ${
                        index === currentIndex
                          ? "bg-green-400"
                          : "bg-green-200/30"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="rounded-full border border-emerald-400/40 bg-emerald-900/40 px-3 py-1.5 text-[13px] text-emerald-50"
                >
                  Next ›
                </button>
              </div>

              <p className="mt-3 text-center text-[12px] text-emerald-100/60">
                {currentIndex + 1} / {premiumSponsors.length} Premium Sponsors
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- TIMELINE SECTION (LIKE YOUR SCREENSHOT) --- */}
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="mb-8 text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-emerald-200/80">
            Premium Partnership Framework
          </p>
          <h2 className="mt-2 text-[26px] font-semibold text-emerald-50 md:text-[30px]">
            How We Structure Our Collaboration
          </h2>
        </div>

        <div className="relative">
          {/* vertical glowing line */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-emerald-300 via-emerald-400/80 to-transparent" />

          <div className="space-y-16">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className="relative flex items-stretch md:min-h-[160px]"
                >
                  {/* glowing node */}
                  <div className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2">
                    <div className="relative">
                      <div className="h-[18px] w-[18px] rounded-full bg-green-400 shadow-[0_0_20px_rgba(16,185,129,0.9)]" />
                      <div className="absolute inset-[-6px] rounded-full border border-green-300/70" />
                    </div>
                  </div>

                  {/* spacer + card */}
                  <div className="flex w-full flex-col md:flex-row">
                    {isLeft ? (
                      <>
                        {/* card left */}
                        <div className="md:w-1/2 md:pr-10">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.35 }}
                            className="rounded-3xl border border-green-300 bg-green-550/50 p-6 shadow-[0_0_35px_rgba(16,185,129,0.2)]"
                          >
                            <h3 className="text-[18px] font-semibold text-emerald-50">
                              {item.title}
                            </h3>
                            <ul className="mt-3 space-y-2 text-[14px] text-emerald-100/80">
                              {item.points.map((point) => (
                                <li key={point}>• {point}</li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
                        {/* empty spacer right */}
                        <div className="hidden md:block md:w-1/2" />
                      </>
                    ) : (
                      <>
                        {/* empty spacer left */}
                        <div className="hidden md:block md:w-1/2" />
                        {/* card right */}
                        <div className="md:w-1/2 md:pl-10">
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.35 }}
                            className="rounded-3xl border border-green-300 bg-green-550/50 p-6 shadow-[0_0_35px_rgba(16,185,129,0.2)]"
                          >
                            <h3 className="text-[18px] font-semibold text-emerald-50">
                              {item.title}
                            </h3>
                            <ul className="mt-3 space-y-2 text-[14px] text-emerald-100/80">
                              {item.points.map((point) => (
                                <li key={point}>• {point}</li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;
