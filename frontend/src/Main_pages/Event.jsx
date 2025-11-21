// Event.jsx - Responsive for all devices, using image URLs instead of local assets
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

// BG image link (replace with your cloudinary URL)
const evbgImage = "https://ik.imagekit.io/mekt2pafz/Robomania%202.0/evbg.png?updatedAt=1763665401046";

// Segment logo URLs (replace with your own)
const segments = [
  {
    id: 1,
    name: "Line Follower",
    
    logo: "https://ik.imagekit.io/mekt2pafz/Robomania%202.0/Line%20Following%20Robot%20(2).png?updatedAt=1763664890272",
  },
  {
    id: 2,
    name: "Soccer Bot",
    
    logo: "https://ik.imagekit.io/mekt2pafz/Robomania%202.0/Soccer%20Bot%20(2).png?updatedAt=1763664890807",
  },
  {
    id: 3,
    name: "Cadyssey",
    logo: "https://ik.imagekit.io/mekt2pafz/Robomania%202.0/Cadyssey%20(2).png?updatedAt=1763664889194",
  },
  {
    id: 4,
    name: "RoboProject  Hackathon",

    logo: "https://ik.imagekit.io/mekt2pafz/Robomania%202.0/RoboProject%20%20Hackathon.png?updatedAt=1763664890526",
  },
  {
    id: 5,
    name: "CIRCUIT  Wizardy",
    
    logo: "https://ik.imagekit.io/mekt2pafz/Robomania%202.0/CIRCUIT%20%20Wizardy%20(2).png?updatedAt=1763664890619",
  },
  {
    id: 6,
    name: "ADCanvas",
    
    logo: "https://ik.imagekit.io/mekt2pafz/Robomania%202.0/ADCanvas%20(2).png?updatedAt=1763664889989",
  },
  {
    id: 7,
    name: "Innovators Arena",
    logo: "https://ik.imagekit.io/mekt2pafz/Robomania%202.0/Innovators_%20%20arena%20(2).png?updatedAt=1763664890819",
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
          <div className="flex items-start gap-3">
            <span className="font-bold">📅Date:</span>
            <span>20 December, 2025</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold"> Venue:</span>
            <span>AUST, 141 & 142 Love Road, Tejgaon, Dhaka-1208</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold"> Expected:</span>
            <span>500-600 tech-enthusiast students</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold">Audience::</span>
            <span>Avid tech-enthusiast students from Ahsanullah University of Science and Technology.</span>
          </div>
        </div>
      </div>

      {/* Segments Grid - Responsive; now for 7 segments */}
      <div className="mx-auto mb-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h3 className="mb-3 text-center text-sm sm:text-base md:text-lg font-semibold text-white">
          Competition Segments
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              onClick={() => setSelectedSegment(segment)}
              className="cursor-pointer overflow-hidden rounded-xl border border-[#554110] backdrop-blur-md transition-all hover:border-[#776622] hover:scale-105 bg-[#55411011]"
            >
              <div className="flex h-16 sm:h-20 md:h-24 items-center justify-center p-2 sm:p-2.5 md:p-3">
                <img
                  src={segment.logo}
                  alt={segment.name}
                  className="max-h-10 sm:max-h-12 md:max-h-14 max-w-[65%] object-contain mx-auto"
                />
              </div>
              {/* Centered segment name (bold) */}
              <div className="p-1.5 sm:p-2 md:p-2.5">
                <h4 className="text-center text-[10px] sm:text-xs md:text-sm font-bold text-white">
                  {segment.name}
                </h4>
              
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
    </section>
  );
};

export default Event;
