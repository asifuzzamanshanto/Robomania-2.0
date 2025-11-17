// Event.jsx - Responsive for all devices
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import assets
import evbgImage from "../assets/evbg.png";
import lfLogo from "../assets/lf.png";
import soccerLogo from "../assets/so.png";
import roverLogo from "../assets/r.png";
import hardwareLogo from "../assets/h.png";

const segments = [
  {
    id: 1,
    name: "Line Follower",
    description: "Navigate autonomous robots through complex track patterns with precision and speed",
    logo: lfLogo,
  },
  {
    id: 2,
    name: "Soccer Bot",
    description: "Program robots to compete in fast-paced soccer matches with strategy and skill",
    logo: soccerLogo,
  },
  {
    id: 3,
    name: "Rover Challenge",
    description: "Design rovers to tackle real-world terrain obstacles and complete missions",
    logo: roverLogo,
  },
  {
    id: 4,
    name: "Hardware Showcase",
    description: "Present innovative robotics projects and prototypes to judges and peers",
    logo: hardwareLogo,
  },
];

const Event = () => {
  const [selectedSegment, setSelectedSegment] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="min-h-screen px-4 py-8">
      {/* Banner - Responsive width */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl overflow-hidden rounded-3xl border border-[#554110] backdrop-blur-md"
      >
        <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
          <img
            src={evbgImage}
            alt="Robomania 2.0 Banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
      </motion.div>

      {/* Event Info - Responsive width */}
      <div className="mx-auto mb-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl space-y-3 rounded-3xl border border-[#554110] p-4 sm:p-5 md:p-6 backdrop-blur-md">
        <p className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-white/80">
          Intra AUST Robotics Competition
        </p>
        
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-white">
          AUST Robotics Club Presents Robomania 2.0
        </h2>

        <p className="text-xs sm:text-sm leading-relaxed text-white/90">
          Building on the overwhelming success of Season 1, this edition brings together 
          the brightest minds from AUST. The competition ignites creativity and innovation, 
          offering a dynamic platform to showcase robotics expertise.
        </p>

        <div className="space-y-2 text-xs sm:text-sm text-white/90">
          <div className="flex items-start gap-2">
            <span className="font-semibold">📅 Date:</span>
            <span>20 December, 2025</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold">📍 Venue:</span>
            <span>AUST, 141 & 142 Love Road, Tejgaon, Dhaka-1208</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold">👥 Expected:</span>
            <span>500-600 tech-enthusiast students</span>
          </div>
        </div>
      </div>

      {/* Segments Grid - Responsive */}
      <div className="mx-auto mb-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h3 className="mb-3 text-center text-sm sm:text-base md:text-lg font-semibold text-white">
          Competition Segments
        </h3>
        
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedSegment(segment)}
              className="cursor-pointer overflow-hidden rounded-xl border border-[#554110] backdrop-blur-md transition-all hover:border-[#776622] hover:scale-105"
            >
              <div className="flex h-16 sm:h-20 md:h-24 items-center justify-center bg-[#55411011] p-2 sm:p-2.5 md:p-3">
                <img
                  src={segment.logo}
                  alt={segment.name}
                  className="max-h-10 sm:max-h-12 md:max-h-14 max-w-[65%] object-contain"
                />
              </div>
              <div className="p-1.5 sm:p-2 md:p-2.5">
                <h4 className="mb-0.5 text-[10px] sm:text-xs md:text-sm font-semibold text-white">
                  {segment.name}
                </h4>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-white/70">Tap to explore</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Previous Events Button - Responsive */}
      <div className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => navigate('/previous-events')}
          className="inline-flex items-center gap-2 rounded-full border border-[#554110] bg-white/5 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-[#554110] hover:scale-105"
        >
          View Previous Events →
        </motion.button>
      </div>

      {/* Modal - Responsive */}
      {selectedSegment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedSegment(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden rounded-3xl border border-[#554110] bg-black/90 backdrop-blur-md"
          >
            <button
              onClick={() => setSelectedSegment(null)}
              className="absolute right-3 sm:right-4 top-3 sm:top-4 z-10 rounded-full bg-white/10 p-1.5 sm:p-2 text-white transition-colors hover:bg-white/20"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>

            <div className="p-4 sm:p-5 md:p-6 pt-10 sm:pt-12">
              <div className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <img
                  src={selectedSegment.logo}
                  alt={selectedSegment.name}
                  className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
                />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  {selectedSegment.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-white/90">
                {selectedSegment.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Event;