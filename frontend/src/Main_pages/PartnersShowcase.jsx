"use client";

import React from "react";
import { cn } from "@/lib/utils";

/* --------------------------
   LOGO ARRAY
---------------------------*/
const sponsorLogos = [
  "https://cdn.ittefaqbd.com/contents/themes/public/style/images/logo.svg",
  "https://images.seeklogo.com/logo-png/39/2/ntv-channel-logo-png_seeklogo-396286.png",
  "https://techtopiabd.com/wp-content/uploads/2023/03/logo_150_by_150-01.png",
  "https://www.primebank.com.bd/web/new_assets/assets/images/new-logo-en.png",
  "https://www.ispahanifoods.com/wp-content/uploads/2019/10/logo.png",
  "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/471852262_610576054806180_1030698770042489876_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_p2X42aiafkQ7kNvwGHvqXJ&_nc_oc=AdniX2raKE7K29qIhcQT33DHJVdJ2XC1cHaVawcew8iwL1Ig2VbjR-HClk0gcAW8Bcs&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=XUiVLPshsKbl8OUBdP3yfw&oh=00_AfgTOSRjBYYAXg2i1swejAg_zrGlri3AxDsg60JTPVMnrQ&oe=692638A7",
  "https://www.midlandbankbd.net/wp-content/uploads/2024/04/MDB-LOGO-080915-TAB.png",
  "https://user.bdapps.com/cas/custom-styles/images/company-logo-1.png",
];

/* --------------------------
   INFINITE MOVING CARDS
---------------------------*/
function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollerRef.current.appendChild(clone);
    });
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    );
    setStart(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[220px] max-w-full shrink-0 rounded-2xl border border-amber-400/30 bg-amber-950/30 px-4 py-4 backdrop-blur-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-white">
              <img
                src={item.src}
                alt={item.alt || `image-${idx + 1}`}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) linear infinite;
          animation-direction: var(--animation-direction, forwards);
        }
        @keyframes scroll {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

/* --------------------------
   PARTNERS SHOWCASE SECTION
---------------------------*/
export default function PartnersShowcase() {
  return (
    <section
      className="
        relative left-1/2 right-1/2 -mx-[50vw]
        w-screen overflow-hidden py-20 text-white
      "
    >
      {/* blurred amber background */}
      <div className="pointer-events-none absolute inset-0 bg-amber-950/30 backdrop-blur-2xl" />

      {/* content */}
      <div className="relative w-full px-4 sm:px-8 md:px-16 space-y-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-md">
            Meet Our Valued Partners
          </h2>
          <p className="mt-3 text-emerald-100/70 text-base sm:text-lg max-w-3xl mx-auto">
            Collaboration drives innovation. Discover the organizations that are
            backing the next wave of robotics talent.
          </p>
        </div>

        <InfiniteMovingCards
          items={sponsorLogos.map((logo, idx) => ({
            src: logo,
            alt: `Partner Logo ${idx + 1}`,
          }))}
          direction="left"
          speed="normal"
          pauseOnHover
          className="w-full max-w-none"
        />
      </div>
    </section>
  );
}
