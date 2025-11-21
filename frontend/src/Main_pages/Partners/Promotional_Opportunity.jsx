// components/sections/Promotional_Opportunity.jsx
"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BentoGrid } from "@/components/ui/bento-grid";
import { AutoImageCarousel } from "@/components/ui/auto-image-carousel";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";

// ---- BASE CARD DEFINITIONS (layout + images + default text) ----
const BASE_ITEMS = [
  {
    id: 1,
    title: "Exclusive Title & Powered By Placement",
    description:
      "Prime branding across all major event collaterals as title or powered-by sponsor.",
    keywords: ["Title credit", "Hero branding", "Core recall"], // fallback
    bullets: [
      "Featured as the primary “Titled By” / Premier Partner for the event.",
      "Name locked into key event materials for maximum recall and visibility.",
    ],
    images: [
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/475117831_642957674944915_77544815518688065400_n.jpg",
      "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/501467217_122201666228266874_7760614089794915733_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=O3Ll7GjQsjgQ7kNvwE5mX5F&_nc_oc=AdkXId56wdCpdrBRcABFkMdS1wvb_tMrz7u1GXkxQFpgUjXV68vGCX71XPxLXdDUorU&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=sxbn2bZUHxoIGF1-kliPbw&oh=00_AfiBNCEHlwAj7gqSfQC0dzgaQY9dD1du_OOGc-c6lEUTVA&oe=6925C854",
    ],
    className: "lg:col-span-1",
  },
  {
    id: 2,
    title: "Brand Visibility",
    description:
      "High-impact logo presence on stage screens, banners, and key touch points.",
    keywords: ["Screens", "Banners", "Digital reach"],
    bullets: [
      "Logo displayed on stage screens, banners, posters, and digital assets.",
      "Visibility across all major on-ground and digital communication points.",
    ],
    images: [
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/IMG_7792sdv.jpg",
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/IMG_7794d.jpg",
    ],
    className: "lg:col-span-1",
  },
  {
    id: 3,
    title: "Kit Box Branding & Materials",
    description:
      "Sponsor-branded kits, certificates, and participant materials.",
    keywords: ["Gift boxes", "Certificates", "Take-home recall"],
    bullets: [
      "Branding on exclusive gift / kit boxes handed to participants.",
      "Presence on select certificates and printed materials as take-home recall.",
    ],
    images: [
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/Screenshot%202025-10-02%20003727.png",
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/Certificate%20of%20Photography%20Club%20(ARC%202.0)%20-%201.png",
    ],
    className: "lg:col-span-2",
  },
  {
    id: 4,
    title: "Logo Placement",
    description:
      "Logos featured across backdrops, banners, and partner panels.",
    keywords: ["Backdrops", "Partner walls", "Photo zones"],
    bullets: [
      "Logo placed across backdrops, standees, and partner walls at key zones.",
      "Reinforced presence wherever audiences gather, click photos, or queue.",
    ],
    images: [
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/DSC5F3077.jpg",
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/518337540_782882070970443_.43283012672512810666_n.jpg",
    ],
    className: "lg:col-span-3",
  },
  {
    id: 5,
    title: "Exclusive Engagement Opportunities",
    description:
      "Direct interaction with teams, judges, and attendees through special sessions.",
    keywords: ["3-hr slot", "Talks & demos", "Deep engagement"],
    bullets: [
      "Up to three hours of dedicated program time reserved for your brand.",
      "Use for demos, tech talks, workshops, or focused promo activities.",
    ],
    images: [
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/D.SCF33404.jpg",
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/Untitled%20desig%20n%20(18)..png",
    ],
    className: "lg:col-span-1",
  },
  {
    id: 6,
    title: "Submission Portal Branding",
    description:
      "Brand presence inside the online submission and communication portal.",
    keywords: ["Portal UI", "Repeat visibility"],
    bullets: [
      "Logo and branding on the Caption Submission Portal interface.",
      "Recurring visibility as teams log in and submit throughout the event.",
    ],
    images: [
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/Screenshot%202025-09-11%20171v841.png",
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/Screenshot%202025-09-11%20172005.png",
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/Screenshot%202025-09-11%20171938.png",
    ],
    className: "lg:col-span-1",
  },
  {
    id: 7,
    title: "On-site Engagement & Activation",
    description:
      "Custom activation zones, product demos, and experiential booths.",
    keywords: ["2-day booth", "Product demos", "Lead capture"],
    bullets: [
      "Dedicated booth / activation zone for two full days of engagement.",
      "Space for product demos, sampling, lead capture, and live experiences.",
    ],
    images: [
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/WhatsApp%20Image%202025-09-09%20at%2007.48.55_ba65bd117.jpg",
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/518274863_753383913858726_467gg81.22354568735732_n.jpg",
    ],
    className: "lg:col-span-3",
  },
  {
    id: 8,
    title: "Social Media Promotion",
    description:
      "Co-branded posts, shout-outs, and digital creatives across our channels.",
    keywords: ["Co-branded posts", "Shout-outs", "Stories"],
    bullets: [
      "Regular co-branded posts, shout-outs, and stories on event pages.",
      "Visual creatives featuring your logo and messaging for digital reach.",
    ],
    images: ["https://ik.imagekit.io/mekt2pafz/MSM%20PIC/image.png"],
    className: "lg:col-span-2",
  },
  {
    id: 9,
    title: "Website Promotion",
    description:
      "Logo and recognition sections on the official event website.",
    keywords: ["Sponsor area", "Highlights"],
    bullets: [
      "Logo placement on the official event website sponsor area.",
      "Visibility within key event highlight sections and information pages.",
    ],
    images: [
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/Screenshot%202025-509-08%20164710.png",
    ],
    className: "lg:col-span-1",
  },
  {
    id: 10,
    title: "Guest & Networking Privileges",
    description:
      "Special invitations for representatives to join as guests, judges, or keynote speakers.",
    keywords: ["2 guest passes", "Judging / keynote", "Networking"],
    bullets: [
      "Exclusive guest privileges for two representatives from your brand.",
      "Opportunities for deeper networking with organisers, judges, and talent.",
    ],
    images: [
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/Untitled%20Dresign%20-%207.png",
      "https://ik.imagekit.io/mekt2pafz/MSM%20PIC/Untitled%20desiggn%20(3)..png",
    ],
    className: "lg:col-span-1",
  },
];

// ---- CARD ANIMATION VARIANTS ----
const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: 0.04 * i,
      ease: "easeOut",
    },
  }),
};

export default function Promotional_Opportunity({
  contents = [],
  keywords = [],
}) {
  const [active, setActive] = useState(null);
  const modalRef = useRef(null);
  const id = useId();

  // merge BASE_ITEMS with keyword sets from props
  const items = BASE_ITEMS.map((item) => {
    const override = Array.isArray(keywords)
      ? keywords.find((entry) => entry.id === item.id)
      : null;

    return override?.keywords
      ? { ...item, keywords: override.keywords }
      : item;
  });

  // ESC + body scroll lock
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(modalRef, () => setActive(null));

  // pick content from `contents` array that matches active card id
  const activeContentConfig =
    active && Array.isArray(contents)
      ? contents.find((entry) => entry.id === active.id)
      : null;

  return (
    <section
      id="promotional-opportunities"
      className="relative py-12 sm:py-16 "
    >
      {/* background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0  from-amber-400/10 via-transparent to-amber-400/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-64 max-w-5xl rounded-full bg-amber-300/10 blur-3xl"
      />

      {/* ========== MODAL ========== */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md"
            />
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 sm:px-4 py-4 sm:py-6">
              <motion.div
                key={`modal-${active.id}-${id}`}
                layoutId={`card-${active.id}-${id}`}
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: 12,
                  transition: { duration: 0.15 },
                }}
                className={cn(
                  "relative flex w-full max-w-[960px] max-h-[calc(100vh-2.5rem)] sm:max-h-[90vh] flex-col overflow-hidden",
                  "rounded-2xl sm:rounded-3xl border border-amber-400/40 bg-neutral-950/95 shadow-[0_0_40px_rgba(0,0,0,0.65)]"
                )}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.25),transparent_55%),radial-gradient(circle_at_bottom,_rgba(255,215,0,0.2),transparent_55%)] opacity-70"
                />

                <div className="relative z-10 flex flex-col">
                  {/* top image */}
                  <div className="w-full h-[42vh] min-h-[12rem] max-h-[18rem] sm:h-60 md:h-72 lg:h-80 overflow-hidden">
                    <AutoImageCarousel images={active.images} />
                  </div>

                  {/* modal body */}
                  <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-6 sm:pb-6 sm:pt-5 md:px-7 md:pt-6 gap-3 sm:gap-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2 text-[0.7rem] sm:text-xs uppercase tracking-[0.18em] text-amber-200/70">
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                            Promotional opportunity
                          </span>
                          <span className="text-neutral-300/70">
                            #{String(active.id).padStart(2, "0")} of{" "}
                            {String(items.length).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">
                          {active.title}
                        </h3>
                      </div>

                      {/* close desktop */}
                      <button
                        className="hidden sm:inline-flex shrink-0 rounded-full border border-[rgba(255,215,0,0.55)] bg-black/40 p-2 text-neutral-200 hover:bg-black/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActive(null);
                        }}
                      >
                        <span className="sr-only">Close</span>
                        <CloseIcon />
                      </button>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

                    <div className="flex flex-1 flex-col gap-3 sm:gap-4 lg:flex-row lg:gap-6 overflow-hidden">
                      {/* right content */}
                      <div className="flex-1 overflow-auto rounded-2xl border border-amber-400/20 bg-black/40 px-3 sm:px-4 py-3 text-xs sm:text-sm text-neutral-100/90">
                        {activeContentConfig ? (
                          // 1️⃣ Use the content from the `contents` array (matched by id)
                          typeof activeContentConfig.content === "function" ? (
                            activeContentConfig.content()
                          ) : (
                            activeContentConfig.content
                          )
                        ) : active?.bullets && active.bullets.length > 0 ? (
                          // 2️⃣ Fallback: default bullets
                          <div className="space-y-3">
                            <h4 className="text-[0.75rem] sm:text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
                              Key benefits
                            </h4>
                            <ul className="space-y-2">
                              {active.bullets.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-[0.8rem] sm:text-[0.9rem]"
                                >
                                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300 shrink-0" />
                                  <span className="font-medium text-amber-50/90">
                                    {point}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          // 3️⃣ Final fallback
                          <div className="space-y-2 text-neutral-300/90">
                            <p>
                              Detailed copy for{" "}
                              <span className="font-medium text-amber-200">
                                {active.title}
                              </span>{" "}
                              will appear here.
                            </p>
                            <p className="text-xs sm:text-sm text-neutral-400">
                              You can also pass a custom{" "}
                              <code>contents</code> prop to inject your own
                              text.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* close mobile */}
                  <button
                    className={cn(
                      "absolute right-3 top-3 z-20 inline-flex items-center justify-center rounded-full sm:hidden",
                      "bg-black/80 p-2 text-neutral-100 shadow-lg ring-1 ring-amber-400/40"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(null);
                    }}
                  >
                    <CloseIcon />
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* ========== HEADER + GRID ========== */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="mt-8 rounded-3xl border border-amber-400/30 bg-black/40 p-3 sm:p-4 md:p-5 backdrop-blur-md gap-1 space-y-6">
          {/* heading */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            {/* ... your heading content here ... */}
          </div>

          {/* grid */}
          <BentoGrid
            className={cn(
              "grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4",
              "gap-3 md:gap-4"
            )}
          >
            {items.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                layoutId={`card-${item.id}-${id}`}
                onClick={() => setActive(item)}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl",
                  "border border-amber-400/25 bg-gradient-to-b from-white/8 via-white/3 to-black/60 text-left shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all",
                  "hover:-translate-y-1.5 hover:border-[rgba(255,215,0,0.85)] hover:shadow-[0_26px_80px_rgba(0,0,0,0.85)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
                  item.className
                )}
              >
                {/* card aura */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.24),transparent_55%)] transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* image: unified heights so all carousels align */}
                <div className="relative w-full h-40 sm:h-44 md:h-52 lg:h-60 xl:h-64 overflow-hidden">
                  <div className="absolute inset-0">
                    <AutoImageCarousel images={item.images} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                </div>

                {/* content */}
                <div className="relative flex flex-1 flex-col gap-2 px-3.5 py-3.5 sm:px-4 sm:py-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-amber-50 leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  {item.keywords && item.keywords.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {item.keywords.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full border border-amber-400/60 bg-black/40 px-2 py-0.5 text-[0.65rem] sm:text-[0.7rem] font-semibold text-amber-100"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
