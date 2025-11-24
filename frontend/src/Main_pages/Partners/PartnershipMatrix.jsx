"use client";

import React from "react";
import { cn } from "@/lib/utils";

const tiers = [
  { key: "premier", label: "Premier Partner" },
  { key: "platinum", label: "Platinum Partner" },
  { key: "gold", label: "Gold Partner" },
];

const features = [
  {
    label: "Exclusive Title or Powered By Placement",
    premier: "full",
    platinum: "full",
    gold: "none",
  },
  {
    label: "Brand Visibility & Logo Placement",
    premier: "full",
    platinum: "full",
    gold: "partial",
  },
  {
    label: "On-Site Engagement & Activation",
    premier: "full",
    platinum: "full",
    gold: "none",
  },
  {
    label: "Exclusive Engagement Opportunities",
    premier: "full",
    platinum: "full",
    gold: "none",
  },
  {
    label: "Exclusive Caption Submission Portal Branding",
    premier: "full",
    platinum: "full",
    gold: "none",
  },
  {
    label: "Social Media Promotion",
    premier: "full",
    platinum: "full",
    gold: "partial",
  },
  {
    label: "Visibility in Website Promotion",
    premier: "full",
    platinum: "partial",
    gold: "full",
  },
  {
    label: "Newsletter Advertisement",
    premier: "full",
    platinum: "partial",
    gold: "full",
  },
  {
    label: "Guest Privileges for Representatives",
    premier: "full",
    platinum: "none",
    gold: "none",
  },
  {
    label: "Kit Box Branding & Materials",
    premier: "full",
    platinum: "none",
    gold: "none",
  },
];

const getEmoji = (status) => {
  if (status === "full") return "✅";
  if (status === "partial") return "⚠️";
  return "❌";
};

const PartnershipMatrix = () => {
  return (
    <section className="relative px-4 py-10">
      {/* soft glowing background behind the matrix */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 "
      />

      {/* main card with rounded golden border + blur */}
      <div className="relative mx-auto max-w-5xl rounded-[32px] border border-amber-300/80 bg-black/50 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
        {/* subtle inner glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[32px] border border-amber-100/5 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.15),transparent_55%)] opacity-70"
        />

        <div className="relative z-10 px-3 py-4 sm:px-5 sm:py-6">
          {/* title above table */}
          <div className="mb-4 flex flex-col gap-1 text-center sm:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-100/80">
              Partnership Matrix · Robomania 2.0
            </p>
            <h2 className="text-lg sm:text-xl font-extrabold text-amber-50">
              Compare Premier, Platinum & Gold Partner Benefits
            </h2>
          </div>

          {/* table wrapper (keeps scroll on small screens) */}
          <div className="overflow-x-auto rounded-2xl border border-amber-200/20 bg-black/40">
            <table className="min-w-full border-collapse text-sm">
              {/* Header */}
              <thead>
                <tr className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-amber-50">
                  <th className="px-4 py-3 text-left font-semibold">
                    Features
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.key}
                      className="px-4 py-3 text-center font-bold"
                    >
                      {tier.label}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-[12px] sm:text-[13px] text-amber-50/90">
                {features.map((feature, idx) => (
                  <tr
                    key={feature.label}
                    className={cn(
                      "border-t border-amber-200/15",
                      idx % 2 === 0 ? "bg-white/3" : "bg-black/20"
                    )}
                  >
                    <td className="px-4 py-3 text-left align-middle font-medium text-amber-100">
                      {feature.label}
                    </td>
                    <td className="px-4 py-3 text-center align-middle">
                      {getEmoji(feature.premier)}
                    </td>
                    <td className="px-4 py-3 text-center align-middle">
                      {getEmoji(feature.platinum)}
                    </td>
                    <td className="px-4 py-3 text-center align-middle">
                      {getEmoji(feature.gold)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend inside the card */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[11px] sm:text-[12px] font-semibold text-amber-50/85">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 border border-emerald-300/60">
              <span className="text-[16px]">✅</span>
              <span>Included</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1.5 border border-amber-300/70">
              <span className="text-[16px]">⚠️</span>
              <span>Limited / Conditional</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3 py-1.5 border border-rose-400/70">
              <span className="text-[16px]">❌</span>
              <span>Not Included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipMatrix;
