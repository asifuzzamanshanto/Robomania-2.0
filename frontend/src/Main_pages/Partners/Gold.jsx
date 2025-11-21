import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Promotional_Opportunity from "./Promotional_Opportunity";
import PartnershipMatrix from "./PartnershipMatrix";

const premiumSponsors = [
  {
    name: "MIDLAND BANK LIMITED",
    tagline: "ARC 2.0 (2025)",
    logo: "https://www.midlandbankbd.net/wp-content/uploads/2024/04/MDB-LOGO-080915-TAB.png",
  },
  {
    name: "BDAPPS Limited",
    tagline: "AI & Robotics Partner",
    logo: "https://user.bdapps.com/cas/custom-styles/images/company-logo-1.png",
  },
  {
    name: "Ispahani Limited",
    tagline: "ARC 1.0 (2022)",
    logo: "https://www.ispahanifoods.com/wp-content/uploads/2019/10/logo.png",
  },
];
// e.g. put this in PremiumContents.jsx or directly in Premium.jsx
export const premiumContents = [
  {
    id: 1,
    content: () => (
      <div className="space-y-3">
        <p>
          At the <span className="font-semibold">Gold Partner</span> level, there is{" "}
          <span className="font-semibold">no exclusive “Title” or “Powered By” placement</span>,
          but your brand still receives clear recognition.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>No dedicated “Title” or “Powered By” lock-up for this tier.</li>
          <li>Brand visibility provided through designated event spaces.</li>
          <li>Recognition aligned with the Gold partnership level.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    content: () => (
      <div className="space-y-3">
        <p>
          Enjoy <span className="font-semibold">limited brand visibility & logo placement</span>{" "}
          across selected touchpoints.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Logo placed on selected event materials.</li>
          <li>Presence on chosen digital platforms and assets.</li>
          <li>Moderate but consistent exposure throughout the event.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    content: () => (
      <div className="space-y-3">
        <p>
          Get <span className="font-semibold">on-site engagement & activation</span> through a
          one-day booth.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Booth access for one full day at the venue.</li>
          <li>Showcase your brand, products, or services to attendees.</li>
          <li>Engage directly with participants in an on-ground setting.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    content: () => (
      <div className="space-y-3">
        <p>
          This tier includes <span className="font-semibold">no exclusive engagement time slots</span>{" "}
          for dedicated audience sessions.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>No separate stage time reserved for brand-only activities.</li>
          <li>Audience interactions happen organically at your booth.</li>
          <li>Exclusive engagement sessions are reserved for higher tiers.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    content: () => (
      <div className="space-y-3">
        <p>
          Benefit from <span className="font-semibold">limited submission portal branding</span> on
          the Caption Submission Portal.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Your branding appears on the portal interface used by participants.</li>
          <li>Consistent visibility as teams submit and manage entries.</li>
          <li>Steady recall during key event activities.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    content: () => (
      <div className="space-y-3">
        <p>
          Extend your reach via <span className="font-semibold">social media promotion</span>{" "}
          across event channels.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Mentions in event posts, stories, and updates.</li>
          <li>Visual placements highlighting your role as a partner.</li>
          <li>Digital reach and engagement across major platforms.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    content: () => (
      <div className="space-y-3">
        <p>
          Receive <span className="font-semibold">limited website promotion</span> on the official
          event site.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Dedicated mention on the event’s official website.</li>
          <li>Acknowledgment of your support as a Gold Partner.</li>
          <li>Enhanced credibility for visitors exploring partner details.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    content: () => (
      <div className="space-y-3">
        <p>
          Gain visibility through <span className="font-semibold">limited newsletter advertisement</span>.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Brand mentioned within event newsletters.</li>
          <li>Reach both subscribers and event attendees via email.</li>
          <li>Targeted touchpoints during key communication cycles.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 9,
    content: () => (
      <div className="space-y-3">
        <p>
          Enjoy <span className="font-semibold">guest privileges</span> for your representative.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>One representative with exclusive guest access.</li>
          <li>Premium-level experience across event segments.</li>
          <li>Networking opportunities with attendees and stakeholders.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 10,
    content: () => (
      <div className="space-y-3">
        <p>
          <span className="font-semibold">No gift box branding & materials</span> are included for
          the Gold tier.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>No branding on participant gift boxes.</li>
          <li>No logo on gift-related promotional materials.</li>
          <li>These branding options are reserved for higher tiers.</li>
        </ul>
      </div>
    ),
  },
];

export const premierKeywords = [
  { id: 1, keywords: ["No title credit", "No Powered By", "Standard recognition"] },
  { id: 2, keywords: ["Selected materials", "Moderate visibility", "Digital platforms"] },
  { id: 3, keywords: ["1-day booth", "On-ground engagement", "Brand showcase"] },
  { id: 4, keywords: ["No special slot", "Booth-only interaction", "Higher-tier perk"] },
  { id: 5, keywords: ["Submission portal", "Limited branding", "Participant touchpoint"] },
  { id: 6, keywords: ["Social posts", "Mentions & visuals", "Digital reach"] },
  { id: 7, keywords: ["Website mention", "Gold tag", "Credibility"] },
  { id: 8, keywords: ["Newsletter mention", "Subscribers & attendees", "Targeted touch"] },
  { id: 9, keywords: ["1 guest pass", "Exclusive access", "Networking"] },
  { id: 10, keywords: ["No gift box", "No materials", "Tier limit"] },
];

const Gold = () => {
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
      {/* --- GOLD PARTNER OVERVIEW + CAROUSEL --- */}
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl border border-[#554110] p-6 backdrop-blur-md md:flex-row md:p-10">
        {/* LEFT: Overview */}
        <div className="flex-1 space-y-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white">
            Gold Partnership · RoBomania 2.0
          </p>

          <h1 className="text-[28px] font-semibold leading-tight text-white md:text-[34px]">
            Gold Partner: Strong Supporter Presence
          </h1>

          <p className="text-[15px] leading-relaxed text-white">
            <span className="font-semibold">Gold Partners</span> get solid
            recognition across selected event and digital touchpoints,{" "}
            <span className="font-semibold">
              without “Title” or “Powered By” lock-ups
            </span>
            .
          </p>

          <ul className="space-y-2 text-[14px] text-white">
            <li>• Gold-tier logo placement on selected materials & platforms.</li>
            <li>• One-day booth for on-ground engagement and brand showcasing.</li>
            <li>• No exclusive stage slot — engagement happens around your booth.</li>
            <li>• Limited branding on submission portal & event website.</li>
            <li>• Newsletter mention, social promotion & 1 guest privilege.</li>
          </ul>

          <button className="mt-4 inline-flex items-center rounded-full bg-[#554110] px-6 py-2.5 text-[14px] font-semibold text-white">
            Become a Gold Partner
          </button>
        </div>

        {/* RIGHT: Carousel */}
        <div className="flex-1">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="overflow-hidden rounded-3xl border border-[#554110] px-6 py-8">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                  Featured Gold Sponsor
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
                {currentIndex + 1} / {premiumSponsors.length} Gold Sponsors
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

export default Gold;


