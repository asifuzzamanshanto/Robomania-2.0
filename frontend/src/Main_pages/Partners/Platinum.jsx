import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Promotional_Opportunity from "./Promotional_Opportunity";
import PartnershipMatrix from "./PartnershipMatrix";

const premiumSponsors = [
    {
    name: "Ulterior Engineering Intl.",
    tagline: "ARC 1.0 ",
    logo: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/471852262_610576054806180_1030698770042489876_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_p2X42aiafkQ7kNvwGHvqXJ&_nc_oc=AdniX2raKE7K29qIhcQT33DHJVdJ2XC1cHaVawcew8iwL1Ig2VbjR-HClk0gcAW8Bcs&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=XUiVLPshsKbl8OUBdP3yfw&oh=00_AfgTOSRjBYYAXg2i1swejAg_zrGlri3AxDsg60JTPVMnrQ&oe=692638A7",
  },

];
// e.g. put this in PremiumContents.jsx or directly in Premium.jsx
// PremiumContents.jsx
// PremiumContents.jsx
export const premiumContents = [
  {
    id: 1,
    content: () => (
      <div className="space-y-3">
        <p>
          As the <span className="font-semibold">Platinum Partner</span>, your brand enjoys
          exclusive <span className="font-semibold">“Powered By” placement</span> across the event.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Featured in premium “Powered By” positions on key event materials.</li>
          <li>High-impact visibility wherever the event identity appears.</li>
          <li>Strong association with the core identity of the event.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    content: () => (
      <div className="space-y-3">
        <p>
          Gain <span className="font-semibold">brand visibility & logo placement</span> across
          on-ground and promotional assets.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Logo displayed on eligible banners, posters, and standees.</li>
          <li>Presence on event screens and other visual touchpoints.</li>
          <li>Inclusion in supporting digital content to maximize exposure.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    content: () => (
      <div className="space-y-3">
        <p>
          Use a <span className="font-semibold">dedicated one-day booth</span> to connect with
          participants.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Booth access for one full day inside the event venue.</li>
          <li>Space to run product demonstrations and service showcases.</li>
          <li>Direct engagement with attendees in an interactive setup.</li>
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
          audience segment.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Special one-hour slot reserved for your brand’s activities.</li>
          <li>Run presentations, product demos, workshops, or Q&A sessions.</li>
          <li>Ensure concentrated attention from participants during your slot.</li>
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
          <li>Branding displayed prominently on the submission interface.</li>
          <li>Consistent visibility as participants use the platform.</li>
          <li>Repeat brand recall throughout the event’s submission cycle.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    content: () => (
      <div className="space-y-3">
        <p>
          Extend your digital footprint through{" "}
          <span className="font-semibold">social media promotion</span>.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Features in event social media posts and updates.</li>
          <li>Mentions in stories and event highlight content.</li>
          <li>Amplified reach across multiple online platforms.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    content: () => (
      <div className="space-y-3">
        <p>
          Gain <span className="font-semibold">limited website promotion</span> on the official
          event site.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Dedicated mention on the event’s official website.</li>
          <li>Acknowledgment of your role as a Platinum Partner.</li>
          <li>Added credibility for visitors exploring partner details.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    content: () => (
      <div className="space-y-3">
        <p>
          Reach subscribers through{" "}
          <span className="font-semibold">limited newsletter advertisement</span>.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Inclusion in selected placements within event newsletters.</li>
          <li>Visibility among registrants, subscribers, and participants.</li>
          <li>Targeted communication to a relevant, engaged audience.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 9,
    content: () => (
      <div className="space-y-3">
        <p>
          Enjoy <span className="font-semibold">guest privileges</span> during the event.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>One representative with exclusive guest privileges.</li>
          <li>Elevated access during key event segments and sessions.</li>
          <li>Enhanced experience and visibility at the venue.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 10,
    content: () => (
      <div className="space-y-3">
        <p>
          <span className="font-semibold">Gift box branding & materials</span> are{" "}
          <span className="font-semibold">not included</span> in the Platinum tier.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>No branding on participant gift boxes.</li>
          <li>No logo placement on related gift materials in this tier.</li>
          <li>These benefits are reserved for higher sponsorship levels.</li>
        </ul>
      </div>
    ),
  },
];

export const premierKeywords = [
  { id: 1, keywords: ["Powered By credit", "Core identity", "High-impact visibility"] },
  { id: 2, keywords: ["Banners & posters", "Screens & digital", "On-ground reach"] },
  { id: 3, keywords: ["1-day booth", "Live demos", "Interactive zone"] },
  { id: 4, keywords: ["1-hour slot", "Talks & workshops", "Focused engagement"] },
  { id: 5, keywords: ["Submission portal", "Limited branding", "Repeat visits"] },
  { id: 6, keywords: ["Social campaigns", "Posts & stories", "Online reach"] },
  { id: 7, keywords: ["Website mention", "Platinum tag", "Credibility"] },
  { id: 8, keywords: ["Newsletter feature", "Selected placements", "Targeted reach"] },
  { id: 9, keywords: ["1 guest pass", "VIP access", "Experience"] },
  { id: 10, keywords: ["No gift box", "No materials", "Tier limitation"] },
];



const Platinum = () => {
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
      {/* --- PLATINUM PARTNER OVERVIEW + CAROUSEL --- */}
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl border border-[#554110] p-6 backdrop-blur-md md:flex-row md:p-10">
        {/* LEFT: Overview */}
        <div className="flex-1 space-y-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white">
            Platinum Partnership · RoBomania 2.0
          </p>

          <h1 className="text-[28px] font-semibold leading-tight text-white md:text-[34px]">
            Platinum Partner: Powered By Visibility
          </h1>

          <p className="text-[15px] leading-relaxed text-white">
            As a{" "}
            <span className="font-semibold">
              Platinum Partner
            </span>, your brand sits in the{" "}
            <span className="font-semibold">
              “Powered By”
            </span>{" "}
            slot with focused on-ground and digital visibility around
            RoBomania 2.0.
          </p>

          <ul className="space-y-2 text-[14px] text-white">
            <li>• “Powered By” presence on key event materials.</li>
            <li>• Logo on selected banners, screens and digital assets.</li>
            <li>• One-day booth for demos and face-to-face engagement.</li>
            <li>• 1-hour slot for talk / product demo / workshop.</li>
            <li>• Limited portal, website & newsletter branding + 1 guest pass.</li>
          </ul>

          <button className="mt-4 inline-flex items-center rounded-full bg-[#554110] px-6 py-2.5 text-[14px] font-semibold text-white">
            Become a Platinum Partner
          </button>
        </div>

        {/* RIGHT: Carousel */}
        <div className="flex-1">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="overflow-hidden rounded-3xl border border-[#554110] px-6 py-8">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                  Featured Platinum Sponsor
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
                {currentIndex + 1} / {premiumSponsors.length} Platinum Sponsors
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

export default Platinum;

