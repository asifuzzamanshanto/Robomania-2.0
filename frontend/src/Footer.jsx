import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGlobe } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-amber-800 border-t border-amber-900/60 text-white">
      {/* ↓ less vertical padding */}
      <div className="mx-auto max-w-6xl px-4 py-4 md:py-6">
        {/* Main area: LEFT (details) | RIGHT (map) */}
        {/* ↓ slightly smaller gap */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
          {/* LEFT SIDE – logo, tagline, socials, contact */}
          {/* ↓ slightly smaller vertical spacing */}
          <div className="space-y-4">
            {/* Logo + socials row */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Logo + text */}
              <div className="flex items-center gap-3">
                <img
                  src="https://aust.edu/storage/files/Rc46weeV7JQjH1VT1DoCUWUMsIp81dtIMvZBMlpm.jpg"
                  alt="AUST Robotics Club Logo"
                  className="h-14 w-auto" // slightly smaller logo
                />
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    AUST Robotics Club
                  </h3>
                  <p className="text-sm text-amber-100">
                    Robotics for Building a Safer Future
                  </p>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex flex-col items-center gap-2 md:items-center">
                <span className="text-sm font-medium tracking-wide">
                  Follow Us
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/AustRoboticsClub"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/90 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-amber-100"
                  >
                    <FaFacebookF className="text-[#014F23]" size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/aust_robotics_club/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/90 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-amber-100"
                  >
                    <FaInstagram className="text-[#014F23]" size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/aust-robotics-club"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/90 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-amber-100"
                  >
                    <FaLinkedinIn className="text-[#014F23]" size={16} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/90 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-amber-100"
                  >
                    <FaGlobe className="text-[#014F23]" size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="text-center md:text-left">
              <h3 className="mb-1 text-lg font-semibold">Contact Us</h3>
              <p className="text-sm text-amber-100">
                Email:{" "}
                <a
                  href="mailto:austrc@aust.edu"
                  className="font-medium underline-offset-2 hover:underline text-amber-50"
                >
                  austrc@aust.edu
                </a>
              </p>
              <p className="mt-1 text-sm leading-snug text-amber-100">
                Ahsanullah University of Science and Technology
                <br />
                141 &amp; 142, Love Road, Tejgaon Industrial Area,
                <br />
                Dhaka-1208, Bangladesh.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – Google Map */}
          <div className="order-first md:order-none">
            <p className="mb-2 text-sm font-semibold text-center md:text-right text-amber-100">
              Find Us on Google Maps
            </p>
            {/* ↓ slightly shorter map height */}
            <div className="h-44 w-full overflow-hidden rounded-xl border border-amber-300/40 bg-black/10 shadow-sm">
              <iframe
                title="AUST Location"
                src="https://www.google.com/maps?q=23.76363,90.40697&z=17&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
