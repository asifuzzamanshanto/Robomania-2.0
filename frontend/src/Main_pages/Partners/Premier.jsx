import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Promotional_Opportunity from "./Promotional_Opportunity";
import PartnershipMatrix from "./PartnershipMatrix";

const PremierSponsors = [
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
// e.g. put this in PremierContents.jsx or directly in Premier.jsx
// PremierContents.jsx
export const PremierContents = [
  {
    id: 1,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Exclusive Title Placement
          </p>
          <p>
            As the{" "}
            <span className="font-semibold text-amber-100">Premier Partner</span>, your
            brand is locked into the premium{" "}
            <span className="font-semibold text-amber-200">“Titled By”</span> position
            across key event materials, creating a strong, long-term association with
            Robomania 2.0.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/25 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Featured as the primary “Premier Partner” / title credit.</li>
            <li>“Titled By” lock-up on core event materials and touchpoints.</li>
            <li>Persistent association with the event’s core identity.</li>
          </ul>
        </div>

        <p className="text-[0.75rem] text-amber-200/85">
          Impact: Ideal for brands that want their name to be{" "}
          <span className="font-semibold">synonymous with the event itself</span>.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Brand Visibility & Logo Placement
          </p>
          <p>
            As a Premier Partner, your logo is placed across{" "}
            <span className="font-semibold text-amber-100">high-visibility assets</span>,
            ensuring your brand is consistently noticed on-ground and online.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/25 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>
              Logo on banners, backdrops, standees and major event posters at AUST campus.
            </li>
            <li>Brand exposure through primary on-site display areas.</li>
            <li>Integration into selected digital and printed communications.</li>
          </ul>
        </div>

        <p className="text-[0.75rem] text-amber-200/85">
          Impact: Maximizes{" "}
          <span className="font-semibold">top-of-mind recall throughout the event</span>.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            On-Site Engagement & Activation
          </p>
          <p>
            Use a{" "}
            <span className="font-semibold text-amber-100">
              dedicated two-day booth
            </span>{" "}
            to build meaningful, face-to-face engagement with students and visitors.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/25 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Two full days of booth presence inside the event zone.</li>
            <li>
              Space for demos, product displays, interactive setups and hands-on
              experiences.
            </li>
            <li>Opportunities to collect leads, feedback and interests directly.</li>
          </ul>
        </div>

        <p className="text-[0.75rem] text-amber-200/85">
          Impact: Perfect for brands that want{" "}
          <span className="font-semibold">
            deeper conversations, not just logo impressions
          </span>
          .
        </p>
      </div>
    ),
  },
  {
    id: 4,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Exclusive Engagement Opportunities
          </p>
          <p>
            Unlock{" "}
            <span className="font-semibold text-amber-100">
              three hours of dedicated event time
            </span>{" "}
            to engage a focused audience with your own narrative.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/25 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Three hours of reserved event time for your brand’s agenda.</li>
            <li>
              Flexibility to run tech talks, workshops, live demos or launch segments.
            </li>
            <li>
              Session format tailored to meet your campaign and communication objectives.
            </li>
          </ul>
        </div>

        <p className="text-[0.75rem] text-amber-200/85">
          Impact: Enables{" "}
          <span className="font-semibold">deeper storytelling and thought-leadership</span>.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Submission Portal Branding
          </p>
          <p>
            Stay visible on the{" "}
            <span className="font-semibold text-amber-100">
              Caption Submission Portal
            </span>
            , a tool teams repeatedly use throughout the competition.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/25 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>
              Logo and brand identity integrated into the submission portal interface.
            </li>
            <li>
              Continuous visibility every time participants submit or update entries.
            </li>
            <li>
              Subtle but constant brand recall over the full event lifecycle.
            </li>
          </ul>
        </div>

        <p className="text-[0.75rem] text-amber-200/85">
          Impact: Great for{" "}
          <span className="font-semibold">always-on visibility during key actions</span>.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Social Media Promotion
          </p>
          <p>
            Extend your reach through{" "}
            <span className="font-semibold text-amber-100">
              high-frequency social media coverage
            </span>{" "}
            across event channels.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/25 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Regular shout-outs across major event social platforms.</li>
            <li>Branded posters, tags and story mentions highlighting your support.</li>
            <li>
              Inclusion in key announcements, updates and post-event recap content.
            </li>
          </ul>
        </div>

        <p className="text-[0.75rem] text-amber-200/85">
          Impact: Boosts{" "}
          <span className="font-semibold">online visibility and engagement</span> around your
          brand.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Website Promotion
          </p>
          <p>
            Secure{" "}
            <span className="font-semibold text-amber-100">
              website-level visibility
            </span>{" "}
            throughout the event and beyond.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/25 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Featured as Premier Partner on the official event website.</li>
            <li>
              Placement in sponsor listings, event highlight sections and recap pages.
            </li>
            <li>
              Continuous exposure for visitors, applicants and future audiences who revisit
              event information.
            </li>
          </ul>
        </div>

        <p className="text-[0.75rem] text-amber-200/85">
          Impact: Creates{" "}
          <span className="font-semibold">evergreen visibility</span> even after the event
          ends.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Gift Box Branding & Promotional Materials
          </p>
          <p>
            Put your brand directly into participants’ hands through{" "}
            <span className="font-semibold text-amber-100">
              curated gift boxes and materials
            </span>
            .
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/25 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Branding on exclusive participant gift boxes.</li>
            <li>Logo on selected inserts, goodies or promotional merchandise.</li>
            <li>
              Memorable, take-home exposure that extends beyond the event days.
            </li>
          </ul>
        </div>

        <p className="text-[0.75rem] text-amber-200/85">
          Impact: Builds{" "}
          <span className="font-semibold">tangible, long-lasting brand recall</span>.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Newsletter Advertisement
          </p>
          <p>
            Reach a broad audience through{" "}
            <span className="font-semibold text-amber-100">
              strategic newsletter placements
            </span>
            .
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/25 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Brand positioning within official event newsletters.</li>
            <li>
              Visibility among registrants, subscribers and key stakeholders.
            </li>
            <li>
              Reinforcement of your role as a{" "}
              <span className="font-semibold text-amber-100">core event partner</span>.
            </li>
          </ul>
        </div>

        <p className="text-[0.75rem] text-amber-200/85">
          Impact: Strengthens{" "}
          <span className="font-semibold">communication touchpoints beyond the venue</span>.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    content: () => (
      <div className="space-y-4 text-sm sm:text-[0.95rem] text-amber-50/90">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Guest Privileges
          </p>
          <p>
            Offer your team{" "}
            <span className="font-semibold text-amber-100">
              exclusive on-event experience
            </span>{" "}
            with elevated guest access.
          </p>
        </div>

        <div className="rounded-xl border border-amber-300/25 bg-white/5 px-3.5 py-3 space-y-2">
          <h4 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
            What this includes
          </h4>
          <ul className="space-y-1.5 list-disc pl-4">
            <li>Two representatives with exclusive guest privileges.</li>
            <li>
              Enhanced experience during key sessions, ceremonies and networking
              moments.
            </li>
            <li>
              Premier access to{" "}
              <span className="font-semibold text-amber-100">
                connect with organizers, judges and other partners
              </span>
              .
            </li>
          </ul>
        </div>

        <p className="text-[0.75rem] text-amber-200/85">
          Impact: Elevates{" "}
          <span className="font-semibold">relationship-building opportunities</span> on
          event days.
        </p>
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



const Premier = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSponsor = PremierSponsors[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PremierSponsors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? PremierSponsors.length - 1 : prev - 1
    );
  };

  return (
    <section className="px-4 py-10 md:py-20">
      {/* --- Premier PARTNER OVERVIEW + CAROUSEL --- */}
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl border border-[#554110] p-6 backdrop-blur-md md:flex-row md:p-10">
        {/* LEFT: Overview */}
<div className="flex-1 space-y-5 text-white">
  {/* tier pill */}
  <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/70 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
    <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
    <span>Premier Partnership</span>
    <span className="opacity-60">•</span>
    <span className="text-amber-100/80">Robomania 2.0</span>
  </div>

  {/* heading + description */}
  <div className="space-y-2">
    <h1 className="text-[26px] md:text-[32px] font-extrabold leading-tight">
      <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
        Premier Partners
      </span>
      <span className="block text-[22px] md:text-[24px] font-semibold text-amber-50/90">
        Front-Row Seat to AUST Robotics
      </span>
    </h1>

    <p className="text-[14px] md:text-[15px] leading-relaxed text-amber-50/85">
      <span className="font-semibold text-amber-100">Premier Partners</span>{" "}
      are our closest collaborators. They receive the{" "}
      <span className="font-semibold text-amber-200">
        most prominent presence across Robomania 2.0
      </span>{" "}
      — from main-stage branding and segment arenas to digital campaigns and
      social media storytelling.
    </p>
  </div>

  {/* quick-glance chips */}
  <div className="flex flex-wrap gap-2 pt-1">
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/70 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-50">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
      Closest collaboration tier
    </span>
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/80 bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-50">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
      Main-stage & arena visibility
    </span>
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-amber-50/90">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
      Deep campus & digital reach
    </span>
  </div>

  {/* feature grid */}
  <div className="grid gap-2.5 sm:grid-cols-2">
    <div className="flex items-start gap-2 rounded-2xl bg-white/5 px-3 py-2.5 backdrop-blur-md border border-white/10">
      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
      <p className="text-[13px] leading-snug">
        Logo woven across{" "}
        <span className="font-semibold text-amber-100">
          high-visibility event collaterals
        </span>{" "}
        and key communication points.
      </p>
    </div>

    <div className="flex items-start gap-2 rounded-2xl bg-white/5 px-3 py-2.5 backdrop-blur-md border border-white/10">
      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
      <p className="text-[13px] leading-snug">
        <span className="font-semibold text-amber-100">
          Dedicated shout-outs
        </span>{" "}
        in ceremonies, segment intros and official social channels.
      </p>
    </div>

    <div className="flex items-start gap-2 rounded-2xl bg-white/3 px-3 py-2.5 backdrop-blur-md border border-amber-300/30">
      <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
      <p className="text-[13px] leading-snug">
        Featured spotlight on the{" "}
        <span className="font-semibold text-amber-100">
          Robomania 2.0 website
        </span>{" "}
        with story-driven brand placement.
      </p>
    </div>

    <div className="flex items-start gap-2 rounded-2xl bg-white/3 px-3 py-2.5 backdrop-blur-md border border-amber-300/30">
      <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
      <p className="text-[13px] leading-snug">
        On-ground{" "}
        <span className="font-semibold text-amber-100">
          activation opportunities at the AUST campus
        </span>{" "}
        to meet, demo and engage with students.
      </p>
    </div>
  </div>

  {/* CTA */}
  <div className="pt-2">
    <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 px-6 py-2.5 text-[14px] font-semibold text-black shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/90">
      <span>Become a Premier Partner</span>
      <span className="text-[16px]" aria-hidden="true">
        →
      </span>
    </button>
    <p className="mt-2 text-[11px] text-amber-100/75">
      Designed for brands that want a{" "}
      <span className="font-semibold">front-row, long-term presence</span> in
      AUST’s flagship robotics ecosystem.
    </p>
  </div>
</div>


        {/* RIGHT: Carousel */}
        <div className="flex-1">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="overflow-hidden rounded-3xl border border-[#554110] px-6 py-8">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                  Featured Premier Sponsor
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
                  {PremierSponsors.map((sponsor, index) => (
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
                {currentIndex + 1} / {PremierSponsors.length} Premier Sponsors
              </p>
            </div>
          </div>
        </div>
      </div>
      <Promotional_Opportunity contents={PremierContents}  keywords = {premierKeywords} />
      <PartnershipMatrix />
    </section>
  );
};

export default Premier;
