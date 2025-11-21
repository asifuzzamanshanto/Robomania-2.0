import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Promotional_Opportunity from "./Promotional_Opportunity";
import PartnershipMatrix from "./PartnershipMatrix";

const premiumSponsors = [
  {
    name: "Prime Bank",
    tagline: "ARC 2.0 (2025)",
    logo: "https://www.primebank.com.bd/web/new_assets/assets/images/new-logo-en.png",
  },
  {
    name: "Ispahani Limited",
    tagline: "ARC 1.0 (2022)",
    logo: "https://www.ispahanifoods.com/wp-content/uploads/2019/10/logo.png",
  },
  {
    name: "Ulterior Engineering Intl.",
    tagline: "ROBOMANIA 1.0 ",
    logo: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/471852262_610576054806180_1030698770042489876_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_p2X42aiafkQ7kNvwGHvqXJ&_nc_oc=AdniX2raKE7K29qIhcQT33DHJVdJ2XC1cHaVawcew8iwL1Ig2VbjR-HClk0gcAW8Bcs&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=XUiVLPshsKbl8OUBdP3yfw&oh=00_AfgTOSRjBYYAXg2i1swejAg_zrGlri3AxDsg60JTPVMnrQ&oe=692638A7",
  },
];
// e.g. put this in PremiumContents.jsx or directly in Premium.jsx
// PremiumContents.jsx
export const premiumContents = [
  {
    id: 1,
    content: () => (
      <div className="space-y-3">
        <p>
          As the <span className="font-semibold">Premier Partner</span>, your brand receives
          exclusive title placement across the event.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Featured as the primary “Premier Partner” / title credit.</li>
          <li>“Titled By” lock-up on core event materials and key touchpoints.</li>
          <li>Strong, long-term association with the event’s core identity.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    content: () => (
      <div className="space-y-3">
        <p>
          Gain <span className="font-semibold">high-impact brand visibility</span> across
          on-ground and promotional assets.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Logo on banners, backdrops, and key event posters.</li>
          <li>Presence on LED screens, standees, and major on-site touchpoints.</li>
          <li>Integration into select digital and printed communications.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    content: () => (
      <div className="space-y-3">
        <p>
          Use a <span className="font-semibold">dedicated booth</span> to build meaningful,
          face-to-face engagement.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Two full days of booth presence inside the event area.</li>
          <li>Space for demos, product displays, and interaction zones.</li>
          <li>Opportunities to collect leads and feedback from participants.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    content: () => (
      <div className="space-y-3">
        <p>
          Unlock <span className="font-semibold">exclusive engagement time</span> with a focused
          audience.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Three hours of dedicated event time reserved for your brand.</li>
          <li>Run tech talks, workshops, or live demonstrations.</li>
          <li>Shape the session format to match your campaign objectives.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    content: () => (
      <div className="space-y-3">
        <p>
          Stay visible on the <span className="font-semibold">Caption Submission Portal</span>{" "}
          where teams repeatedly log in.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Logo and brand identity integrated into the portal interface.</li>
          <li>Persistent visibility whenever participants submit or update entries.</li>
          <li>Subtle yet constant brand recall during the full event cycle.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    content: () => (
      <div className="space-y-3">
        <p>
          Extend your reach through <span className="font-semibold">social media promotion</span>.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Regular shout-outs across major event social channels.</li>
          <li>Branded posters, tags, and story mentions highlighting your support.</li>
          <li>Inclusion in key announcement, update, and recap posts.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    content: () => (
      <div className="space-y-3">
        <p>
          Secure <span className="font-semibold">website-level visibility</span> throughout the
          event timeline.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Featured as Premier Partner on the official event website.</li>
          <li>Placement in sponsor listings and event highlight sections.</li>
          <li>Continuous exposure for visitors, applicants, and future audiences.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    content: () => (
      <div className="space-y-3">
        <p>
          Put your brand directly into participants’ hands through{" "}
          <span className="font-semibold">gift boxes and materials</span>.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Branding on exclusive participant gift boxes.</li>
          <li>Logo on select promotional inserts or merchandise.</li>
          <li>Memorable, take-home exposure beyond the event day.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 9,
    content: () => (
      <div className="space-y-3">
        <p>
          Reach a broad audience through <span className="font-semibold">newsletter placements</span>.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Brand position within official event newsletters.</li>
          <li>Visibility among registrants, subscribers, and stakeholders.</li>
          <li>Reinforcement of your role as a key event partner.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 10,
    content: () => (
      <div className="space-y-3">
        <p>
          Enjoy <span className="font-semibold">exclusive guest privileges</span> during the event.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Two representatives with elevated guest access.</li>
          <li>Enhanced experience during key sessions and ceremonies.</li>
          <li>Premium networking opportunities with guests and organizers.</li>
        </ul>
      </div>
    ),
  },
];

export const premierKeywords = [
  { id: 1, keywords: ["Premier title", "“Titled By” lock-up", "High recall"] },
  { id: 2, keywords: ["Banners & posters", "Screens & backdrops", "On-ground reach"] },
  { id: 3, keywords: ["2-day booth", "Live demos", "Lead capture"] },
  { id: 4, keywords: ["3-hour slot", "Talks & workshops", "Focused engagement"] },
  { id: 5, keywords: ["Submission portal", "Repeat visits", "Digital recall"] },
  { id: 6, keywords: ["Social campaigns", "Posts & stories", "Online reach"] },
  { id: 7, keywords: ["Event website", "Sponsor listing", "Highlights"] },
  { id: 8, keywords: ["Gift boxes", "Promo inserts", "Take-home recall"] },
  { id: 9, keywords: ["Newsletter slot", "Broad audience", "Targeted reach"] },
  { id: 10, keywords: ["2 guest passes", "VIP access", "Networking"] },
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
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl border border-[#554110] p-6 backdrop-blur-md md:flex-row md:p-10">
        {/* LEFT: Overview */}
        <div className="flex-1 space-y-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white">
            Premium Partnership · RoBomania 2.0
          </p>

          <h1 className="text-[28px] font-semibold leading-tight text-white md:text-[34px]">
            Premium Partners: Front-Row Seat to AUST Robotics
          </h1>

          <p className="text-[15px] leading-relaxed text-white">
            Premium Partners are our closest collaborators. They receive the
            most prominent presence across RoBomania 2.0 — from main-stage
            branding and segment arenas to digital campaigns and social media.
          </p>

          <ul className="space-y-2 text-[14px] text-white">
            <li>• Logo across high-visibility event collaterals.</li>
            <li>• Dedicated shout-outs in ceremonies and on socials.</li>
            <li>• Featured spotlight on the RoBomania 2.0 website.</li>
            <li>• On-ground activation opportunities at the AUST campus.</li>
          </ul>

          <button className="mt-4 inline-flex items-center rounded-full bg-[#554110] px-6 py-2.5 text-[14px] font-semibold text-white">
            Become a Premium Partner
          </button>
        </div>

        {/* RIGHT: Carousel */}
        <div className="flex-1">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="overflow-hidden rounded-3xl border border-[#554110] px-6 py-8">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
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
                    <div
                      className="flex h-[120px] w-full items-center justify-center rounded-2xl"
                      style={{ backgroundColor: "white" }} // subtle brand-tinted bg
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
                {currentIndex + 1} / {premiumSponsors.length} Premium Sponsors
              </p>
            </div>
          </div>
        </div>
      </div>
      <Promotional_Opportunity contents={premiumContents}  keywords = {premierKeywords} />
      <PartnershipMatrix />
    </section>
  );
};

export default Premium;
