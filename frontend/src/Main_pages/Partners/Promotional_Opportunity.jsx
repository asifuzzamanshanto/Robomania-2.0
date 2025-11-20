// components/sections/Promotional_Opportunity.jsx
"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AutoImageCarousel } from "@/components/ui/auto-image-carousel";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";

const items = [
  {
    id: 1,
    title: "Exclusive Title & Powered By Placement",
    description:
      "Prime branding across all major event collaterals as title or powered-by sponsor.",
    images: [
      "https://picsum.photos/seed/robomania-title-1/1200/800",
      "https://picsum.photos/seed/robomania-title-2/1200/800",
    ],
    className: "col-span-1",
  },
  {
    id: 2,
    title: "Brand Visibility",
    description:
      "High-impact logo presence on stage screens, banners, and key touch points.",
    images: [
      "https://picsum.photos/seed/robomania-visibility-1/1200/800",
      "https://picsum.photos/seed/robomania-visibility-2/1200/800",
    ],
    className: "col-span-1",
  },
  {
    id: 3,
    title: "Kit Box Branding & Materials",
    description:
      "Sponsor-branded kits, certificates, and participant materials.",
    images: [
      "https://picsum.photos/seed/robomania-kitbox-1/1200/800",
      "https://picsum.photos/seed/robomania-kitbox-2/1200/800",
    ],
    className: "col-span-2",
  },
  {
    id: 4,
    title: "Logo Placement",
    description:
      "Logos featured across backdrops, banners, and partner panels.",
    images: [
      "https://picsum.photos/seed/robomania-logo-1/1200/800",
      "https://picsum.photos/seed/robomania-logo-2/1200/800",
      "https://picsum.photos/seed/robomania-logo-3/1200/800",
    ],
    className: "col-span-3",
  },
  {
    id: 5,
    title: "Exclusive Engagement Opportunities",
    description:
      "Direct interaction with teams, judges, and attendees through special sessions.",
    images: [
      "https://picsum.photos/seed/robomania-engagement-1/1200/800",
      "https://picsum.photos/seed/robomania-engagement-2/1200/800",
    ],
    className: "col-span-1",
  },
  {
    id: 6,
    title: "Submission Portal Branding",
    description:
      "Brand presence inside the online submission and communication portal.",
    images: [
      "https://picsum.photos/seed/robomania-portal-1/1200/800",
      "https://picsum.photos/seed/robomania-portal-2/1200/800",
    ],
    className: "col-span-1",
  },
  {
    id: 7,
    title: "On-site Engagement & Activation",
    description:
      "Custom activation zones, product demos, and experiential booths.",
    images: [
      "https://picsum.photos/seed/robomania-onsite-1/1200/800",
      "https://picsum.photos/seed/robomania-onsite-2/1200/800",
    ],
    className: "col-span-3",
  },
  {
    id: 8,
    title: "Social Media Promotion",
    description:
      "Co-branded posts, shout-outs, and digital creatives across our channels.",
    images: [
      "https://picsum.photos/seed/robomania-social-1/1200/800",
    ],
    className: "col-span-2",
  },
  {
    id: 9,
    title: "Website Promotion",
    description:
      "Logo and recognition sections on the official event website.",
    images: [
      "https://picsum.photos/seed/robomania-website-1/1200/800",
      "https://picsum.photos/seed/robomania-website-2/1200/800",
    ],
    className: "col-span-1",
  },
  {
    id: 10,
    title: "Guest & Networking Privileges",
    description:
      "Special invitations for representatives to join as guests, judges, or keynote speakers.",
    images: [
      "https://picsum.photos/seed/robomania-guest-1/1200/800",
      "https://picsum.photos/seed/robomania-guest-2/1200/800",
    ],
    className: "col-span-1",
  },
];


export default function Promotional_Opportunity({ contents = [] }) {
  const [active, setActive] = useState(null); // active item from items[]
  const modalRef = useRef(null);
  const id = useId();

  // ESC + body scroll lock
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // Close when clicking outside the modal
  useOutsideClick(modalRef, () => setActive(null));

  // Find content for the currently active item (by id)
  const activeContentConfig =
    active && Array.isArray(contents)
      ? contents.find((entry) => entry.id === active.id)
      : null;

  return (
    <section className="py-10">
      {/* ========= EXPANDABLE MODAL + BACKDROP ========= */}
      <AnimatePresence>
        {active && (
          <>
            {/* BLURRED BACKDROP (covers navbar + page) */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md"
            />

            {/* CENTERED MODAL – RESPONSIVE */}
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 sm:px-4 py-6">
              <motion.div
                key={`modal-${active.id}-${id}`}
                layoutId={`card-${active.id}-${id}`}
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  transition: { duration: 0.12 },
                }}
                className="
                  relative flex w-full max-w-[900px]
                  max-h-[90vh] flex-col overflow-hidden
                  rounded-3xl bg-white shadow-2xl dark:bg-neutral-900
                "
              >
                {/* Banner / carousel */}
                <div className="w-full h-52 sm:h-60 md:h-72 lg:h-80">
                  <AutoImageCarousel images={active.images} />
                </div>

                {/* Text + long content (scrollable inside) */}
                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                        {active.title}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                        {active.description}
                      </p>
                    </div>

                    {/* Close (desktop) */}
                    <button
                      className="hidden md:inline-flex rounded-full bg-neutral-100 p-2 text-neutral-700 hover:bg-neutral-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActive(null);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <CloseIcon />
                    </button>
                  </div>

                  {/* Long content scrolls inside, not whole screen */}
                  <div className="mt-4 flex-1 overflow-auto text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
                    {activeContentConfig ? (
                      typeof activeContentConfig.content === "function" ? (
                        activeContentConfig.content()
                      ) : (
                        activeContentConfig.content
                      )
                    ) : (
                      <p className="text-neutral-500">
                        Detailed content coming soon.
                      </p>
                    )}
                  </div>
                </div>

                {/* Close (mobile) */}
                <button
                  className="
                    absolute right-4 top-4 
                    z-20 inline-flex items-center justify-center 
                    rounded-full bg-white/90 p-2 text-neutral-800 shadow 
                    md:hidden
                  "
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(null);
                  }}
                >
                  <CloseIcon />
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* ========= YOUR ORIGINAL BENTO GRID (TRIGGERS) ========= */}
      {/* make sure items[].className uses col-span-* (no md:) and grid is 4 col everywhere */}
      <BentoGrid className="mt-6 md:grid-cols-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}-${id}`}
            onClick={() => setActive(item)}
            className={cn(
              "h-full cursor-pointer rounded-2xl transition hover:-translate-y-1 hover:shadow-xl",
              item.className
            )}
          >
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={<AutoImageCarousel images={item.images} />}
              className="h-full"
            />
          </motion.div>
        ))}
      </BentoGrid>
    </section>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
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
