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
export const GoldContents = [
  {
    id: 1,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        {/* No Exclusive Title or Powered By Placement */}
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Title / Powered By Placement
          </p>
          <p>
            This tier{" "}
            <span className="font-semibold text-rose-200">
              does not include exclusive “Title” or “Powered By” branding
            </span>
            , but your brand will still receive{" "}
            <span className="font-semibold text-amber-100">
              visible recognition in defined event spaces
            </span>
            .
          </p>
        </div>

        <div className="rounded-xl border border-rose-400/45 bg-rose-500/10 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-rose-100/95">
            What this means
          </h4>
          <ul className="space-y-1.5 list-disc pl-4 text-rose-50/90">
            <li>No “Titled By” or “Powered By” lock-up on core collaterals.</li>
            <li>
              Brand is highlighted as a{" "}
              <span className="font-semibold">strong supporting partner</span>, not the
              lead presenter.
            </li>
            <li>
              Ideal for brands seeking{" "}
              <span className="font-semibold">solid visibility without top-tier naming</span>.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 2,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        {/* Limited Brand Visibility & Logo Placement */}
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Brand Visibility & Logo Placement
          </p>
          <p>
            Your logo enjoys{" "}
            <span className="font-semibold text-amber-100">moderate, consistent exposure</span>{" "}
            across selected on-ground and digital assets.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/30 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Logo on selected event materials and curated digital platforms.</li>
            <li>
              Presence where it matters, while premium spots remain with higher tiers.
            </li>
            <li>
              Balanced reach suitable for{" "}
              <span className="font-semibold">supporter-level positioning</span>.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 3,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        {/* On-Site Engagement & Activation */}
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            On-Site Engagement & Activation
          </p>
          <p>
            Use a{" "}
            <span className="font-semibold text-amber-100">one-day booth</span> to connect
            with attendees, showcase your brand and create on-ground visibility.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/30 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Booth presence for one full event day.</li>
            <li>Room for product displays, demos and interactive conversations.</li>
            <li>
              A strong on-ground touchpoint for{" "}
              <span className="font-semibold">brand discovery and recall</span>.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 4,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        {/* No Exclusive Engagement Opportunities */}
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Exclusive Engagement Opportunities
          </p>
          <p className="text-amber-100/90">
            <span className="font-semibold text-rose-200">
              Dedicated audience interaction slots are not included
            </span>{" "}
            in this tier.
          </p>
        </div>

        <div className="rounded-xl border border-rose-400/45 bg-rose-500/10 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-rose-100/95">
            What this means
          </h4>
          <ul className="space-y-1.5 list-disc pl-4 text-rose-50/90">
            <li>No reserved stage or auditorium time for exclusive sessions.</li>
            <li>Engagement happens organically around your booth and presence.</li>
            <li>
              For structured talks or workshops, consider{" "}
              <span className="font-semibold">Platinum or Premier tiers</span>.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 5,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        {/* Limited Submission Portal Branding */}
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Submission Portal Branding
          </p>
          <p>
            Your branding appears on the{" "}
            <span className="font-semibold text-amber-100">
              Caption Submission Portal interface
            </span>
            , keeping you visible during key participant actions.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/30 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Limited but noticeable logo presence on the submission platform.</li>
            <li>Visibility each time teams submit or update their entries.</li>
            <li>
              Subtle brand recall tied to{" "}
              <span className="font-semibold">important competition moments</span>.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 6,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        {/* Social Media Promotion – full benefit */}
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-emerald-200/90">
            Social Media Promotion
          </p>
          <p>
            Your brand is{" "}
            <span className="font-semibold text-emerald-100">
              actively promoted across major event social channels
            </span>{" "}
            to maximize digital reach and engagement.
          </p>
        </div>

        <div className="rounded-xl border border-emerald-300/40 bg-emerald-500/10 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-emerald-100">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Regular mentions in posts, updates and event stories.</li>
            <li>Visual placements that highlight your brand’s support.</li>
            <li>
              Strong online visibility across{" "}
              <span className="font-semibold">multiple social platforms</span>.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 7,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        {/* Limited Website Promotion */}
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Website Promotion
          </p>
          <p>
            Your brand receives{" "}
            <span className="font-semibold text-amber-100">a dedicated mention</span> on the
            official event website as a Gold Partner.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/30 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Named mention in the partner / supporters section of the website.</li>
            <li>
              Clear acknowledgement of your role as a{" "}
              <span className="font-semibold">Gold Partner</span>.
            </li>
            <li>
              Increased credibility through association with AUST & Robomania 2.0.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 8,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        {/* Limited Newsletter Advertisement */}
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Newsletter Advertisement
          </p>
          <p>
            Your brand will be{" "}
            <span className="font-semibold text-amber-100">
              mentioned inside event newsletters
            </span>{" "}
            sent to subscribers and participants.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/30 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Supporter-level mentions in event newsletters.</li>
            <li>Visibility to attendees, registrants and subscribers.</li>
            <li>
              A light but meaningful{" "}
              <span className="font-semibold">additional communication touchpoint</span>.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 9,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        {/* Guest Privileges */}
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Guest Privileges
          </p>
          <p>
            One representative from your organization will enjoy{" "}
            <span className="font-semibold text-amber-100">
              elevated guest access and experience
            </span>{" "}
            during the event.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/30 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Exclusive guest privileges for one representative.</li>
            <li>
              Premium-level experience during key sessions and ceremonies.
            </li>
            <li>
              Better opportunities to{" "}
              <span className="font-semibold">network with students and organizers</span>.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 10,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        {/* No Gift box Branding & Materials */}
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Gift Box Branding & Materials
          </p>
          <p className="text-amber-100/90">
            <span className="font-semibold text-rose-200">
              Branding on participant gift boxes or inserts is not included
            </span>{" "}
            at this tier.
          </p>
        </div>

        <div className="rounded-xl border border-rose-400/45 bg-rose-500/10 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-rose-100/95">
            What this means
          </h4>
          <ul className="space-y-1.5 list-disc pl-4 text-rose-50/90">
            <li>No branding on the participant gift box exterior.</li>
            <li>No leaflets, coupons or materials added inside gift kits.</li>
            <li>
              For in-box branding, consider{" "}
              <span className="font-semibold">upgrading to Premier-tier benefits</span>.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];


export const premierKeywords = [
  {
    id: 1,
    keywords: [
      { label: "Title Credit", status: "none" },       // not included
      { label: "Powered By", status: "none" },         // not included
      { label: "Standard recognition", status: "partial" } // partial
    ],
  },
  {
    id: 2,
    keywords: [
      { label: "Selected materials", status: "partial" },
      { label: "Moderate visibility", status: "partial" },
      { label: "Digital platforms", status: "full" },
    ],
  },
  {
    id: 3,
    keywords: [
      { label: "1-day booth", status: "full" },
      { label: "On-ground engagement", status: "full" },
      { label: "Brand showcase", status: "full" },
    ],
  },
  {
    id: 4,
    keywords: [
      { label: "Special slot", status: "none" },
      { label: "Booth-only interaction", status: "partial" },
      { label: "Higher-tier perk", status: "none" },
    ],
  },
  {
    id: 5,
    keywords: [
      { label: "Submission portal", status: "partial" },
      { label: "Limited branding", status: "partial" },
      { label: "Participant touchpoint", status: "full" },
    ],
  },
  {
    id: 6,
    keywords: [
      { label: "Social posts", status: "full" },
      { label: "Mentions & visuals", status: "full" },
      { label: "Digital reach", status: "full" },
    ],
  },
  {
    id: 7,
    keywords: [
      { label: "Website mention", status: "partial" },
      { label: "Gold tag", status: "full" },
      { label: "Credibility", status: "full" },
    ],
  },
  {
    id: 8,
    keywords: [
      { label: "Newsletter mention", status: "partial" },
      { label: "Subscribers & attendees", status: "full" },
      { label: "Targeted touch", status: "full" },
    ],
  },
  {
    id: 9,
    keywords: [
      { label: "1 guest pass", status: "full" },
      { label: "Exclusive access", status: "full" },
      { label: "Networking", status: "full" },
    ],
  },
  {
    id: 10,
    keywords: [
      { label: "Gift box", status: "none" },
      { label: "Materials", status: "none" },
      { label: "Tier limit", status: "partial" },
    ],
  },
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
        <div className="flex-1 space-y-5 text-white">
  {/* tier pill */}
  <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
    <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
    <span>Gold Partnership</span>
    <span className="opacity-60">•</span>
    <span className="text-amber-100/80">Robomania 2.0</span>
  </div>

  {/* heading */}
  <div className="space-y-2">
    <h1 className="text-[26px] md:text-[32px] font-extrabold leading-tight">
      <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
        Gold Partner
      </span>
      <span className="block text-[22px] md:text-[24px] font-semibold text-amber-50/90">
        Strong Supporter Presence
      </span>
    </h1>

    <p className="text-[14px] md:text-[15px] leading-relaxed text-amber-50/85">
      <span className="font-semibold text-amber-100">Gold Partners</span> gain
      prominent visibility across{" "}
      <span className="font-semibold text-amber-100">
        selected event and digital touchpoints
      </span>
      , while{" "}
      <span className="font-semibold text-amber-200">
        keeping “Title” and “Powered By” tiers reserved for higher levels
      </span>
      .
    </p>
  </div>

  {/* quick-glance chips */}
  <div className="flex flex-wrap gap-2 pt-1">
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/70 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-50">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
      Solid brand presence
    </span>
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/70 bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-50">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
      No title / powered-by lockup
    </span>
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-amber-50/90">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
      Ideal for strong supporters
    </span>
  </div>

  {/* feature list */}
  <div className="grid gap-2.5 sm:grid-cols-2">
    <div className="flex items-start gap-2 rounded-2xl bg-white/5 px-3 py-2.5 backdrop-blur-md border border-white/10">
      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
      <p className="text-[13px] leading-snug">
        Gold-tier logo placement on curated{" "}
        <span className="font-semibold text-amber-100">
          event materials & digital platforms
        </span>
        .
      </p>
    </div>
    <div className="flex items-start gap-2 rounded-2xl bg-white/5 px-3 py-2.5 backdrop-blur-md border border-white/10">
      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
      <p className="text-[13px] leading-snug">
        <span className="font-semibold text-amber-100">1-day booth</span> for
        on-ground engagement and live brand showcasing.
      </p>
    </div>
    <div className="flex items-start gap-2 rounded-2xl bg-white/3 px-3 py-2.5 backdrop-blur-md border border-amber-300/30">
      <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
      <p className="text-[13px] leading-snug">
        Engagement happens around your booth;{" "}
        <span className="font-semibold text-amber-100">
          no exclusive stage slot
        </span>{" "}
        in this tier.
      </p>
    </div>
    <div className="flex items-start gap-2 rounded-2xl bg-white/3 px-3 py-2.5 backdrop-blur-md border border-amber-300/30">
      <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
      <p className="text-[13px] leading-snug">
        <span className="font-semibold text-amber-100">
          Limited branding
        </span>{" "}
        on submission portal & website + newsletter mention, social promotion &
        <span className="font-semibold text-amber-100"> 1 guest privilege</span>.
      </p>
    </div>
  </div>

  {/* CTA */}
  <div className="pt-2">
    <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 px-6 py-2.5 text-[14px] font-semibold text-black shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/90">
      <span>Become a Gold Partner</span>
      <span className="text-[16px]" aria-hidden="true">
        →
      </span>
    </button>
    <p className="mt-2 text-[11px] text-amber-100/75">
      Perfect for brands that want{" "}
      <span className="font-semibold">high visibility</span> without the
      commitments of Title or Powered By tiers.
    </p>
  </div>
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
        contents={GoldContents}
        keywords={premierKeywords}
      />
      <PartnershipMatrix />
    </section>
  );
};

export default Gold;


