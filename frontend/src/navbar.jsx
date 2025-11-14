"use client";

import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";

const PALETTE = {
  left: "#127f40",
  mid: "#023C3C",
  right: "#1AB7AA",
};

const partnerOptions = [
  { name: "Platinum Partner", link: "/partners/platinum" },
  { name: "Premium Partner", link: "/partners/premium" },
  { name: "Gold Partner", link: "/partners/gold" },
  { name: "Supporting Partner", link: "/partners/supporting" },
];

export default function Navbar({ user, onLogout = () => {} }) {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Activities", link: "/activities" },
    { name: "Partners", link: "/partners/gold" },
    { name: "Segments", link: "/segments" },
    { name: "About Us", link: "/about-us" },
  ];

  const [open, setOpen] = useState(false);

  const pathname = useMemo(() => {
    if (typeof window !== "undefined") return window.location.pathname;
    return "/";
  }, []);

  // shrink-on-scroll
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setCompact(y > 120));

  return (
    <header className="fixed inset-x-0 top-10 z-50 flex justify-center">
      {/* navbar 5/6 width & centered */}
      <nav className="w-11/12 max-w-6xl px-3 mx-auto">
        {/* Glass pill */}
        <motion.div
          animate={{
            width: compact ? "88%" : "100%",
            y: compact ? 6 : 0,
            backdropFilter: "blur(16px)",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 36 }}
          className={cn(
            "mx-auto flex h-14 items-center justify-between rounded-full border px-3 sm:px-4",
            "bg-white/10 border-white/15 ring-1 ring-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
          )}
          style={{
            backgroundImage: `linear-gradient(135deg, ${PALETTE.left}22, ${PALETTE.mid}18 45%, ${PALETTE.right}22)`,
          }}
        >
          {/* Brand */}
          <a href="/" className="flex items-center gap-2 rounded-full px-2 py-1">
            <span
              className="h-6 w-6 rounded-full shadow-inner"
              style={{
                background: `conic-gradient(from 210deg, ${PALETTE.left}, ${PALETTE.mid} 45%, ${PALETTE.right} 85%, ${PALETTE.left})`,
              }}
            />
            <img
              src=""
              alt="Eventify"
              width={120}
              height={40}
              className="h-6 w-auto object-contain"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.link;
              const isPartners = item.name === "Partners";

              if (!isPartners) {
                return (
                  <li key={item.link}>
                    <a
                      href={item.link}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group relative rounded-full px-3 py-2 text-sm/6 text-white transition-colors",
                        "hover:text-white"
                      )}
                    >
                      {item.name}
                      <span
                        className={cn(
                          "pointer-events-none absolute inset-x-2 -bottom-1 h-[2px] rounded-full opacity-0 transition-opacity duration-300",
                          active ? "opacity-100" : "group-hover:opacity-100"
                        )}
                        style={{
                          background: `linear-gradient(90deg, ${PALETTE.left}, ${PALETTE.mid} 50%, ${PALETTE.right})`,
                          boxShadow: `0 0 10px ${PALETTE.right}88`,
                        }}
                      />
                    </a>
                  </li>
                );
              }

              // Partners with dropdown
              return (
                <li key={item.link} className="relative">
                  <div className="group relative">
                    <a
                      href={item.link}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative rounded-full px-3 py-2 text-sm/6 text-white transition-colors",
                        "hover:text-white"
                      )}
                    >
                      {item.name}
                      <span
                        className={cn(
                          "pointer-events-none absolute inset-x-2 -bottom-1 h-[2px] rounded-full opacity-0 transition-opacity duration-300",
                          active ? "opacity-100" : "group-hover:opacity-100"
                        )}
                        style={{
                          background: `linear-gradient(90deg, ${PALETTE.left}, ${PALETTE.mid} 50%, ${PALETTE.right})`,
                          boxShadow: `0 0 10px ${PALETTE.right}88`,
                        }}
                      />
                    </a>

                    {/* Dropdown */}
                    <div
                      className="pointer-events-none absolute left-1/2 top-full z-40 mt-2 w-56 -translate-x-1/2 rounded-2xl border border-white/15 bg-black/70 backdrop-blur-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto"
                    >
                      <ul className="py-2 text-sm text-white">
                        {partnerOptions.map((opt) => (
                          <li key={opt.link}>
                            <a
                              href={opt.link}
                              className="block px-3 py-1.5 hover:bg-white/10 text-white"
                            >
                              {opt.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Right: only burger (auth removed) */}
          <div className="flex items-center gap-2">
            {/* Mobile toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white lg:hidden"
            >
              {open ? <IconX size={18} /> : <IconMenu2 size={18} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile sheet */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mx-auto mt-2 rounded-3xl border border-white/15 bg-white/10 p-2 ring-1 ring-white/10 backdrop-blur-xl lg:hidden"
              style={{
                backgroundImage: `linear-gradient(135deg, ${PALETTE.left}22, ${PALETTE.mid}18 45%, ${PALETTE.right}22)`,
              }}
            >
              <ul className="grid gap-1">
                {navItems.map((item) => {
                  const active = pathname === item.link;
                  const isPartners = item.name === "Partners";

                  if (!isPartners) {
                    return (
                      <li key={`m-${item.link}`}>
                        <a
                          href={item.link}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-2xl px-3 py-2 text-base transition",
                            "text-white hover:text-white hover:bg-white/10"
                          )}
                        >
                          {item.name}
                          <span
                            className={cn("h-2 w-2 rounded-full", active ? "" : "opacity-0")}
                            style={{
                              background: `radial-gradient(circle, ${PALETTE.right}, ${PALETTE.mid})`,
                            }}
                          />
                        </a>
                      </li>
                    );
                  }

                  // Mobile: Partners + its options
                  return (
                    <React.Fragment key={`m-${item.link}`}>
                      <li>
                        <a
                          href={item.link}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-2xl px-3 py-2 text-base transition",
                            "text-white hover:text-white hover:bg-white/10"
                          )}
                        >
                          {item.name}
                          <span
                            className={cn("h-2 w-2 rounded-full", active ? "" : "opacity-0")}
                            style={{
                              background: `radial-gradient(circle, ${PALETTE.right}, ${PALETTE.mid})`,
                            }}
                          />
                        </a>
                      </li>
                      {partnerOptions.map((opt) => (
                        <li key={`m-${opt.link}`}>
                          <a
                            href={opt.link}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between rounded-2xl px-5 py-2 text-sm text-white hover:text-white hover:bg-white/10"
                          >
                            {opt.name}
                          </a>
                        </li>
                      ))}
                    </React.Fragment>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

/* ---------- Buttons (still available if you need later) ---------- */
function NavBtn({
  as: Tag = "a",
  href,
  className,
  variant = "gradient",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-3.5 py-2 text-sm font-medium transition";
  const styles =
    variant === "gradient"
      ? cn("text-white ring-1 ring-white/15 shadow", className)
      : cn("text-white border border-white/20 bg-white/10 hover:bg-white/20", className);

  const styleObj =
    variant === "gradient"
      ? { background: `linear-gradient(90deg, ${PALETTE.left}E0, ${PALETTE.mid}E0 45%, ${PALETTE.right}E0)` }
      : undefined;

  return (
    <Tag
      href={Tag === "a" ? href : undefined}
      className={cn(base, styles)}
      style={styleObj}
      {...props}
    >
      {children}
    </Tag>
  );
}
