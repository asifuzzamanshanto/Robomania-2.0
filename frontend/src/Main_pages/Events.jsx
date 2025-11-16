import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "" }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    const node = nodeRef.current;
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.floor(value) + suffix;
      },
    });

    return () => controls.stop();
  }, [value, suffix, inView]);

  return (
    <span ref={nodeRef} className="text-2xl md:text-3xl font-bold text-[#DDB656]">
      0{suffix}
    </span>
  );
};

// Segments Slider Component (Shows one segment at a time with single image)
const SegmentsSlider = ({ segments }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % segments.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? segments.length - 1 : prev - 1));
  };

  const currentSegment = segments[currentIndex];

  return (
    <div className="w-full">
      <p className="text-xs font-semibold text-[#DDB656] mb-3 text-center uppercase tracking-wider">
        Competition Segments
      </p>

      <div className="relative">
        {/* Segment Navigation */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={handlePrev}
            className="rounded-full border border-[#322C17] bg-black/40 hover:bg-[#322C17]/50 px-3 py-1.5 text-xs text-[#DDB656] transition-all"
          >
            ‹ Prev
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSegment.name}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="text-center"
            >
              <h5 className="text-sm font-semibold text-[#DDB656]">
                {currentSegment.name}
              </h5>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handleNext}
            className="rounded-full border border-[#322C17] bg-black/40 hover:bg-[#322C17]/50 px-3 py-1.5 text-xs text-[#DDB656] transition-all"
          >
            Next ›
          </button>
        </div>

        {/* Single Image Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-lg border border-[#322C17] bg-black/40 h-36"
          >
            <img
              src={currentSegment.images[0]}
              alt={currentSegment.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Segment Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {segments.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-[#DDB656] w-5"
                  : "bg-[#322C17] hover:bg-[#DDB656]/50"
              }`}
            />
          ))}
        </div>

        <p className="mt-2 text-center text-[10px] text-gray-400">
          {currentIndex + 1} / {segments.length} Segments
        </p>
      </div>
    </div>
  );
};

// Segment Image Carousel (for Modal only)
const SegmentCarousel = ({ segment }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNext = () => {
    setImageIndex((prev) => (prev + 1) % segment.images.length);
  };

  const handlePrev = () => {
    setImageIndex((prev) =>
      prev === 0 ? segment.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="space-y-2">
      <h4 className="text-sm md:text-base font-semibold text-[#DDB656]">
        {segment.name}
      </h4>
      <div className="relative overflow-hidden rounded-xl border border-[#322C17] bg-black/40 h-48 md:h-56">
        <AnimatePresence mode="wait">
          <motion.img
            key={imageIndex}
            src={segment.images[imageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>

        {segment.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-[#DDB656] p-1.5 rounded-full transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-[#DDB656] p-1.5 rounded-full transition-all"
            >
              <ChevronRight size={18} />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {segment.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setImageIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === imageIndex ? "bg-[#DDB656] w-4" : "bg-[#322C17]"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const EventDetailsModal = ({ event, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {/* Full Screen Backdrop - সব device-এ full coverage */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-[2px]"
        style={{ 
          zIndex: 99998,
          width: '100vw',      // Full viewport width
          height: '100vh',     // Full viewport height
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: 'fixed'
        }}
        onClick={onClose}
      />

      {/* Modal Content Card - Centered */}
      <div
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{ 
          zIndex: 99999,
          pointerEvents: 'none'  // Click backdrop এর মাধ্যমে যাবে
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-gradient-to-b from-black/98 to-black/95 border-2 border-[#DDB656]/40 rounded-2xl p-6 md:p-8 max-h-[85vh] overflow-y-auto shadow-[0_0_80px_rgba(221,182,86,0.4)]"
          style={{ pointerEvents: 'auto' }}  // Card এ click কাজ করবে
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Sticky */}
          <button
            onClick={onClose}
            className="sticky top-0 float-right bg-[#322C17] hover:bg-[#DDB656] text-white p-2.5 rounded-full transition-all shadow-xl z-50 mb-4"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="mb-6 pb-4 border-b border-[#322C17]/50 clear-both">
            <h2 className="text-2xl md:text-3xl font-bold text-[#DDB656] mb-2">
              {event.title}
            </h2>
            {event.date && (
              <p className="text-sm text-gray-400">📅 {event.date}</p>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-black/50 rounded-xl border border-[#322C17]">
            {event.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#DDB656]">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-[10px] md:text-xs text-gray-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-6 space-y-3 text-sm md:text-base text-gray-300 leading-relaxed">
            {event.fullDescription.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Segments with Carousels */}
          <div className="space-y-5">
            <h3 className="text-lg md:text-xl font-semibold text-[#DDB656] text-center pb-2 border-b border-[#322C17]/50">
              Competition Segments Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.segments.map((segment, idx) => (
                <SegmentCarousel key={idx} segment={segment} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};



// Event Card Component
const EventCard = ({ event, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="relative">
        {/* Glowing Node */}
        <div className="absolute left-0 top-6 z-10">
          <div className="relative">
            <div className="h-4 w-4 rounded-full bg-[#DDB656] shadow-[0_0_20px_rgba(221,182,86,0.8)]" />
            <div className="absolute inset-[-5px] rounded-full border border-[#DDB656]/60" />
          </div>
        </div>

        {/* Card - Wider */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="ml-10 rounded-2xl border border-[#322C17] bg-black/40 backdrop-blur-sm p-5 shadow-lg hover:border-[#DDB656]/50 hover:shadow-[0_0_30px_rgba(221,182,86,0.2)] transition-all duration-300"
        >
          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-[#DDB656] mb-2">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-xs md:text-sm text-gray-400 mb-4 line-clamp-2">
            {event.description}
          </p>

          {/* Stats - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-black/30 rounded-lg border border-[#322C17]">
            {event.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-[10px] text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Segments Slider - Shows segments one by one */}
          {event.segments && <SegmentsSlider segments={event.segments} />}

          {/* Learn More Button */}
          <button
            onClick={() => setShowDetails(true)}
            className="w-full mt-4 flex items-center justify-center gap-1.5 rounded-lg bg-[#DDB656] hover:bg-[#DDB656]/90 px-4 py-2 text-xs md:text-sm font-semibold text-black transition-all"
          >
            Learn More
            <ChevronRight size={14} />
          </button>
        </motion.div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {showDetails && (
          <EventDetailsModal event={event} onClose={() => setShowDetails(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

// Main Events Page
const Events = () => {
  const eventsData = [
    {
      title: "ISPAHANI Presents AUST ROVER CHALLENGE 2022",
      date: "August 4, 2022",
      description:
        "The first edition (ARC 2022) featured four segments: Rover, Soccer Bot, Line Follower and Hardware Showcase.",
      fullDescription: [
        'On 4th August 2022, AUST Robotics Club held its first-ever national event, "ISPAHANI Presents AUST ROVER CHALLENGE 2022" at AUST premises. Across Nationwide, this event brings young minds together and provides a platform with Four designated segments: Rover Challenge, Robot Hardware Challenge, Line Following Robot, and Soccer Bot, with a total prize pool of 150k+ BDT.',
        "The prize-giving ceremony of ARC 2022 was a phenomenon. With 95 teams from over 25 universities across the country joining in different competitions, it was more than just a contest. The Rover Competition stole the show, attracting the biggest crowds. But that's not all! Thrilling segments like Robot Hardware Challenge, Line Following Robot, and Soccer Bot kept everyone on the edge of their seats.",
        "AUST Rover Challenge is always about showcasing the power of collaboration and creativity nationwide. It's not just about winning; it's about the spirit of exploration and learning. AUST Robotics Club (AUSTRC) would like to thank all of the participants and congratulate all of the winners.",
      ],
      stats: [
        { value: 95, suffix: "+", label: "Teams" },
        { value: 25, suffix: "+", label: "Universities" },
        { value: 4, suffix: "", label: "Segments" },
        { value: 150, suffix: "k", label: "Prize (BDT)" },
      ],
      segments: [
        {
          name: "Rover Challenge",
          images: [
            "/images/arc2022/rover1.jpg",
            "/images/arc2022/rover2.jpg",
            "/images/arc2022/rover3.jpg",
          ],
        },
        {
          name: "Soccer Bot",
          images: [
            "/images/arc2022/soccer1.jpg",
            "/images/arc2022/soccer2.jpg",
            "/images/arc2022/soccer3.jpg",
          ],
        },
        {
          name: "Line Follower Robot",
          images: [
            "/images/arc2022/lfr1.jpg",
            "/images/arc2022/lfr2.jpg",
            "/images/arc2022/lfr3.jpg",
          ],
        },
        {
          name: "Hardware Showcase",
          images: [
            "/images/arc2022/hardware1.jpg",
            "/images/arc2022/hardware2.jpg",
            "/images/arc2022/hardware3.jpg",
          ],
        },
      ],
    },
    {
      title: "Prime Bank presents AUST Rover Challenge 2.0",
      date: "2025",
      description:
        "The ARC 2.0 (2025) edition was even larger, hosting 500+ competitors from 31+ universities and five segments, with a BDT 1.5 lakh prize pool.",
      fullDescription: [
        '"AUST Rover Challenge 2.0" was an electrifying event featuring 5 thrilling segments, where over 500 passionate participants from all corners of the country came together to showcase their innovation, creativity, and competitive spirit. The segments are Rover Challenge, Project Showcasing, Line Following Robot, Soccer Bot, and a new segment called Robo Olympiad.',
        "Among them, the Soccer Bot Competition was the main attraction and drew the biggest crowd. The Robo Olympiad was added for the first time and gave participants a chance to solve problems and complete tasks using their knowledge and skills.",
        "The total prize money was 150,000 BDT, which made everyone even more excited. The Honorable Vice Chancellor of AUST, Prof. Dr. Md. Ashraful Hoque, visited the event as the Chief Guest. His presence made the event more special for everyone.",
      ],
      stats: [
        { value: 500, suffix: "+", label: "Participants" },
        { value: 31, suffix: "+", label: "Universities" },
        { value: 5, suffix: "", label: "Segments" },
        { value: 150, suffix: "k", label: "Prize (BDT)" },
      ],
      segments: [
        {
          name: "Rover Challenge",
          images: [
            "/images/arc2025/rover1.jpg",
            "/images/arc2025/rover2.jpg",
            "/images/arc2025/rover3.jpg",
          ],
        },
        {
          name: "Soccer Bot",
          images: [
            "/images/arc2025/soccer1.jpg",
            "/images/arc2025/soccer2.jpg",
            "/images/arc2025/soccer3.jpg",
          ],
        },
        {
          name: "Line Follower Robot",
          images: [
            "/images/arc2025/lfr1.jpg",
            "/images/arc2025/lfr2.jpg",
            "/images/arc2025/lfr3.jpg",
          ],
        },
        {
          name: "Project Showcasing",
          images: [
            "/images/arc2025/project1.jpg",
            "/images/arc2025/project2.jpg",
            "/images/arc2025/project3.jpg",
          ],
        },
        {
          name: "Robo Olympiad",
          images: [
            "/images/arc2025/olympiad1.jpg",
            "/images/arc2025/olympiad2.jpg",
            "/images/arc2025/olympiad3.jpg",
          ],
        },
      ],
    },
    {
      title: "Robomania 1.0",
      date: "January 27, 2024",
      description:
        "Robomania 1.0 was an intra-AUST robotics festival held to give students their first experience in competitive robotics. The event featured 200+ participants and a 33,000 BDT prize pool.",
      fullDescription: [
        "On January 27th, 2024, AUST Robotics Club organized its first ever intra event, RoboMania 1.0. This event served as a platform for students across the university to showcase their talents in four competitive categories: Line Follower Robot (LFR), Robo Fight, Project Showcasing, and Soccer Bot.",
        "The event was designed to give AUST students their first taste of competitive robotics in a supportive, campus-wide environment. With over 200 participants and a prize pool of 33,000 BDT, Robomania 1.0 successfully fostered a culture of innovation and hands-on learning within the university community.",
      ],
      stats: [
        { value: 200, suffix: "+", label: "Participants" },
        { value: 1, suffix: "", label: "University" },
        { value: 4, suffix: "", label: "Segments" },
        { value: 33, suffix: "k", label: "Prize (BDT)" },
      ],
      segments: [
        {
          name: "Line Follower Robot",
          images: [
            "/images/robomania/lfr1.jpg",
            "/images/robomania/lfr2.jpg",
            "/images/robomania/lfr3.jpg",
          ],
        },
        {
          name: "Robo Fight",
          images: [
            "/images/robomania/fight1.jpg",
            "/images/robomania/fight2.jpg",
            "/images/robomania/fight3.jpg",
          ],
        },
        {
          name: "Project Showcasing",
          images: [
            "/images/robomania/project1.jpg",
            "/images/robomania/project2.jpg",
            "/images/robomania/project3.jpg",
          ],
        },
        {
          name: "Soccer Bot",
          images: [
            "/images/robomania/soccer1.jpg",
            "/images/robomania/soccer2.jpg",
            "/images/robomania/soccer3.jpg",
          ],
        },
      ],
    },
  ];

  return (
    <AuroraBackground>
      <div className="relative z-10 w-full max-w-lg  mx-auto px-4 py-10 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-[#DDB656]/80 mb-2">
            Our Legacy · AUST Robotics Club
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#DDB656] mb-3">
            OUR PREVIOUS EVENTS
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto">
            Celebrating innovation, competition, and the spirit of robotics
          </p>
        </motion.div>

        {/* Timeline - Wider */}
        <div className="relative">
          <div className="absolute left-[8px] top-0 h-full w-[2px] bg-gradient-to-b from-[#DDB656] via-[#DDB656]/70 to-transparent" />
          
          <div className="space-y-12">
            {eventsData.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Events;
