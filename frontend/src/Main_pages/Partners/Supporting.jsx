import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Promotional_Opportunity from "./Promotional_Opportunity";
import PartnershipMatrix from "./PartnershipMatrix";

const premiumSponsors = [
  {
    name: "Daily Ittefaq",
    tagline: "Bangla Newspaper Partner",
    logo: "https://cdn.ittefaqbd.com/contents/themes/public/style/images/logo.svg",
  },
  {
    name: "NTV channel",
    tagline: "Television Partner",
    logo: "https://images.seeklogo.com/logo-png/39/2/ntv-channel-logo-png_seeklogo-396286.png",
  },
  {
    name: "Tech Topia BD",
    tagline: "LFR Track Partner",
    logo: "	https://techtopiabd.com/wp-content/uploads/2023/03/logo_150_by_150-01.png",
  },
];

// ==========================
// SUPPORT / BASE TIER CONTENT
// ==========================
export const premiumContents = [
  {
    id: 1,
    content: () => (
      <div className="space-y-3">
        <p>
          This tier does <span className="font-semibold">not</span> include
          exclusive “Title” or “Powered By” branding, but your brand is still
          visible in designated sponsor spaces.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>No exclusive “Title” or “Powered By” slot.</li>
          <li>Standard sponsor recognition in event layouts.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    content: () => (
      <div className="space-y-3">
        <p>
          Get <span className="font-semibold">limited logo visibility</span> on
          selected physical and digital assets.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Logo on selected event materials.</li>
          <li>Moderate, consistent exposure on key digital spots.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    content: () => (
      <div className="space-y-3">
        <p>
          This tier includes{" "}
          <span className="font-semibold">no on-site booth</span> or activation
          zone.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>No booth or physical activation area.</li>
          <li>On-ground engagement is reserved for higher tiers.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    content: () => (
      <div className="space-y-3">
        <p>
          There are <span className="font-semibold">no exclusive engagement slots</span>{" "}
          such as talks or brand-only sessions.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>No dedicated stage or time-blocked sessions.</li>
          <li>Brand exposure happens via shared channels only.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    content: () => (
      <div className="space-y-3">
        <p>
          <span className="font-semibold">No submission portal branding</span>{" "}
          is included at this tier.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Brand does not appear on the Caption Submission Portal.</li>
          <li>Portal integrations are reserved for higher tiers.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    content: () => (
      <div className="space-y-3">
        <p>
          Your brand still receives{" "}
          <span className="font-semibold">social media promotion</span> across
          event channels.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Mentions in core event posts and updates.</li>
          <li>Essential digital visibility on social platforms.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    content: () => (
      <div className="space-y-3">
        <p>
          Enjoy <span className="font-semibold">limited website promotion</span>{" "}
          via sponsor listings.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Brand name in the official sponsor listing.</li>
          <li>Simple acknowledgment on the event website.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    content: () => (
      <div className="space-y-3">
        <p>
          Receive <span className="font-semibold">brief newsletter mentions</span>{" "}
          sent to attendees and subscribers.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Short sponsor mention in event newsletters.</li>
          <li>Additional touchpoint with the registered audience.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 9,
    content: () => (
      <div className="space-y-3">
        <p>
          This tier includes <span className="font-semibold">no guest privileges</span>{" "}
          or special access passes.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>No dedicated guest / VIP passes.</li>
          <li>Guest perks are reserved for higher tiers.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 10,
    content: () => (
      <div className="space-y-3">
        <p>
          <span className="font-semibold">No gift box branding</span> or
          physical materials are included.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>No logo on participant gift boxes.</li>
          <li>No branding on physical promo materials at this tier.</li>
        </ul>
      </div>
    ),
  },
];

export const premierKeywords = [
  { id: 1, keywords: ["No Title / Powered By", "Standard recognition"] },
  { id: 2, keywords: ["Selected materials", "Moderate visibility"] },
  { id: 3, keywords: ["No booth", "No on-ground activation"] },
  { id: 4, keywords: ["No stage slot", "Shared engagement only"] },
  { id: 5, keywords: ["No portal branding"] },
  { id: 6, keywords: ["Social posts", "Essential digital reach"] },
  { id: 7, keywords: ["Website listing", "Sponsor acknowledgement"] },
  { id: 8, keywords: ["Newsletter mention", "Brief visibility"] },
  { id: 9, keywords: ["No guest passes"] },
  { id: 10, keywords: ["No gift box", "No physical materials"] },
];

// ==========================
// COMPONENT (CONTENT UPDATED)
// ==========================
const Supporting = () => {
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
      {/* --- SUPPORT / BASE PARTNER OVERVIEW + CAROUSEL --- */}
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl border border-[#554110] p-6 backdrop-blur-md md:flex-row md:p-10">
        {/* LEFT: Overview */}
        <div className="flex-1 space-y-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white">
            Support Partnership · RoBomania 2.0
          </p>

          <h1 className="text-[28px] font-semibold leading-tight text-white md:text-[34px]">
            Support Partner: Essential Visibility Tier
          </h1>

          <p className="text-[15px] leading-relaxed text-white">
            This tier is designed for brands that want{" "}
            <span className="font-semibold">clean, essential visibility</span>{" "}
            around RoBomania 2.0 — logo presence, social media mentions, and
            website / newsletter listings, without booth commitments or
            exclusive title slots.
          </p>

          <ul className="space-y-2 text-[14px] text-white">
            <li>• No “Title” or “Powered By” lock-up, but clear sponsor visibility.</li>
            <li>• Limited logo placement on selected event and digital assets.</li>
            <li>• No booth, no portal branding, no guest privileges.</li>
            <li>• Social media promotion + website & newsletter mentions.</li>
          </ul>

          <button className="mt-4 inline-flex items-center rounded-full bg-[#554110] px-6 py-2.5 text-[14px] font-semibold text-white">
            Become a Support Partner
          </button>
        </div>

        {/* RIGHT: Carousel */}
        <div className="flex-1">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="overflow-hidden rounded-3xl border border-[#554110] px-6 py-8">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                  Featured Support Sponsor
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
                    <div
                      className="flex h-[120px] w-full items-center justify-center rounded-2xl"
                      style={{ backgroundColor: "white" }}
                    >
                      <img
                        src={currentSponsor.logo}
                        alt={currentSponsor.name}
                        className="max-h-[80px] max-w-[80%] object-contain"
                      />
                    </div>

                    <div>
                      <h2 className="text-[20px] font-semibold text-white">
                        {currentSponsor.name}
                      </h2>
                      <p className="text-[13px] text-white">
                        {currentSponsor.tagline}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  className="rounded-full px-3 py-1.5 text-[13px] text-white border"
                  style={{ borderColor: "#554110" }}
                >
                  ‹ Prev
                </button>
                <div className="flex items-center gap-2">
                  {premiumSponsors.map((sponsor, index) => (
                    <button
                      key={sponsor.name}
                      onClick={() => setCurrentIndex(index)}
                      className="h-[8px] w-[8px] rounded-full transition"
                      style={{
                        backgroundColor:
                          index === currentIndex ? "#554110" : "#55411033",
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="rounded-full px-3 py-1.5 text-[13px] text-white border"
                  style={{ borderColor: "#554110" }}
                >
                  Next ›
                </button>
              </div>

              <p className="mt-3 text-center text-[12px] text-white">
                {currentIndex + 1} / {premiumSponsors.length} Support Sponsors
              </p>
            </div>
          </div>
        </div>
      </div>

      <Promotional_Opportunity
        contents={premiumContents}
        keywords={premierKeywords}
      />
      <PartnershipMatrix />
    </section>
  );
};

export default Supporting;
