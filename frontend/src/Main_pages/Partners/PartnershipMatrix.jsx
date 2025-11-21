"use client";

import React from "react";

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
    <section className="px-4 py-10">
      <div className="mx-auto max-w-5xl overflow-x-auto rounded-3xl border border-[#D1BA83] bg-[#F5EEE4]/80 backdrop-blur-md">
        <table className="min-w-full border-collapse">
          {/* Header */}
          <thead>
            <tr className="bg-[#8B6A2E] text-[13px] uppercase tracking-[0.12em] text-white">
              <th className="px-4 py-3 text-left">Features</th>
              {tiers.map((tier) => (
                <th key={tier.key} className="px-4 py-3 text-center font-bold">
                  {tier.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="text-[14px] text-[#3B2A12]">
            {features.map((feature) => (
              <tr
                key={feature.label}
                className="border-t border-[#E2D4B0] bg-[#F9F3E8]"
              >
                <td className="px-4 py-3 text-left align-middle">
                  {feature.label}
                </td>
                <td className="px-4 py-3 text-center align-middle">
                  {getEmoji(feature.premier )}
                </td>
                <td className="px-4 py-3 text-center align-middle">
                  {getEmoji(feature.platinum )}
                </td>
                <td className="px-4 py-3 text-center align-middle">
                  {getEmoji(feature.gold )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mx-auto mt-4 flex max-w-5xl flex-wrap items-center gap-4 text-[12px] text-white font-bold">
        <div className="flex items-center gap-2">
          <span className="text-[16px]">✅</span>
          <span>Included</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[16px]">⚠️</span>
          <span>Limited / Conditional</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[16px]">❌</span>
          <span>Not Included</span>
        </div>
      </div>
    </section>
  );
};

export default PartnershipMatrix;
