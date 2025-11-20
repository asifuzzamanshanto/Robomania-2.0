import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Promotional_Opportunity from "./Promotional_Opportunity";
import PartnershipMatrix from "./PartnershipMatrix";

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
// e.g. put this in PremiumContents.jsx or directly in Premium.jsx
export const premiumContents = [
  {
    id: 1,
    content: () => (
      <div className="space-y-3">
        <p>
          As the <span className="font-semibold">Title / Powered By Partner</span>,
          your brand becomes the primary name associated with Robomania 2.0.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Title lock-up on all major event collaterals.</li>
          <li>Stage, backdrop, and opening/closing ceremony mentions.</li>
          <li>Priority placement on website, socials, and digital materials.</li>
          <li>Verbal acknowledgment in key sessions and prize-giving.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    content: () => (
      <div className="space-y-3">
        <p>
          Get strong visibility in all high-traffic zones throughout the event.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Logo on LED screens between matches and sessions.</li>
          <li>Placement on welcome arch, registration desk, and help desks.</li>
          <li>Inclusion in official recap posts and highlight reels.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    content: () => (
      <div className="space-y-3">
        <p>
          Place your brand directly in participants’ hands through event
          materials.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Logo on participant kit boxes / bags.</li>
          <li>Branding on certificates, ID cards, and lanyards (tier-based).</li>
          <li>Option to include flyers, coupons, or small branded goodies.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    content: () => (
      <div className="space-y-3">
        <p>
          Strategic logo placement ensures that your brand appears in photos,
          media, and attendee memories.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Placement on main event backdrop and zone-specific standees.</li>
          <li>Logo wall for partner recognition and photo moments.</li>
          <li>Coverage in printed and digital partner panels.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    content: () => (
      <div className="space-y-3">
        <p>Go beyond logo placement and actually talk to the community.</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Host a tech talk, workshop, or product demo.</li>
          <li>Meet-and-greet with finalists and club members.</li>
          <li>Invitation to networking segments with faculty & guests.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    content: () => (
      <div className="space-y-3">
        <p>
          Extend your visibility to the digital layer where teams interact most.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Logo and tagline on submission dashboard or login page.</li>
          <li>Subtle branding on confirmation mails / announcements.</li>
          <li>Optional sponsor microsite or info link from the portal.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    content: () => (
      <div className="space-y-3">
        <p>
          Design a branded experience zone that students will remember and
          share.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Dedicated stall / activation zone inside the event area.</li>
          <li>Product demo, hiring booth, or showcase corner.</li>
          <li>Support from the organizing team for footfall & flow.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    content: () => (
      <div className="space-y-3">
        <p>
          Leverage the online buzz around Robomania 2.0 to amplify your brand.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Pre-event announcement creatives with your logo.</li>
          <li>Mid-event stories, reels, and live coverage tags.</li>
          <li>Post-event recap posts acknowledging your partnership.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 9,
    content: () => (
      <div className="space-y-3">
        <p>
          Stay visible even after the event through our official website.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Logo and tier tag on the Partners / Sponsors section.</li>
          <li>Short brand blurb + link to your official site.</li>
          <li>Archive visibility for future visitors and applicants.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 10,
    content: () => (
      <div className="space-y-3">
        <p>
          Create deeper relationships with the community through presence and
          interaction.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Nominate guests for VIP seating and front-row access.</li>
          <li>Opportunity to serve as judge / panelist (tier-based).</li>
          <li>Access to informal networking with organizers and faculty.</li>
        </ul>
      </div>
    ),
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
                      style={{ backgroundColor: "#55411011" }} // subtle brand-tinted bg
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
      <Promotional_Opportunity contents={premiumContents}/>
      <PartnershipMatrix />
    </section>
  );
};

export default Premium;
