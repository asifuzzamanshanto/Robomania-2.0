// PrevEvents.jsx - With auto-sliding segments
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const previousEvents = [
  {
    id: 1,
    title: "ARC 2022",
    subtitle: "The Inaugural Event",
    year: "2022",
    banner: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    stats: [
      { value: "95+", label: "Teams" },
      { value: "25+", label: "Unis" },
      { value: "4", label: "Segments" },
      { value: "150k", label: "Prize" },
    ],
    details: "The inaugural event with four segments (Rover, Soccer Bot, Line Follower, Hardware Showcasing). It was a milestone that drew dozens of universities.",
    segments: [
      {
        name: "Rover",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
        ],
      },
      {
        name: "Soccer Bot",
        images: [
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
        ],
      },
      {
        name: "Line Follower",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
        ],
      },
      {
        name: "Hardware",
        images: [
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Robomania 1.0",
    subtitle: "Season One",
    year: "2024",
    banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    stats: [
      { value: "200+", label: "Students" },
      { value: "1", label: "Uni" },
      { value: "4", label: "Segments" },
      { value: "33k", label: "Prize" },
    ],
    details: "An intra-university robotics festival at AUST. It aimed to give students their first hands-on competition experience.",
    segments: [
      {
        name: "Line Follower",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
        ],
      },
      {
        name: "Robo Fight",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
        ],
      },
      {
        name: "Project",
        images: [
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
        ],
      },
      {
        name: "Soccer Bot",
        images: [
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "ARC 2.0",
    subtitle: "Expanded Edition",
    year: "2025",
    banner: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&q=80",
    stats: [
      { value: "500+", label: "People" },
      { value: "31+", label: "Unis" },
      { value: "5", label: "Segments" },
      { value: "150k", label: "Prize" },
    ],
    details: "A significantly larger event with 500+ competitors from 31+ universities featuring five segments and a large prize pool.",
    segments: [
      {
        name: "Rover",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
        ],
      },
      {
        name: "Soccer Bot",
        images: [
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
        ],
      },
      {
        name: "Line Follower",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
        ],
      },
      {
        name: "Project",
        images: [
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
        ],
      },
      {
        name: "Olympiad",
        images: [
          "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=600",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
        ],
      },
    ],
  },
];

// Auto-sliding Segment Carousel
// SegmentCarousel - Random directions and faster
const SegmentCarousel = ({ segment, index }) => {
  const [imageIndex, setImageIndex] = useState(0);

  // Different animation directions based on segment index
  const directions = [
    { initial: { x: 100, opacity: 0 }, exit: { x: -100, opacity: 0 } }, // right to left
    { initial: { x: -100, opacity: 0 }, exit: { x: 100, opacity: 0 } }, // left to right
    { initial: { y: -100, opacity: 0 }, exit: { y: 100, opacity: 0 } }, // top to bottom
    { initial: { y: 100, opacity: 0 }, exit: { y: -100, opacity: 0 } }, // bottom to top
  ];

  const direction = directions[index % 4]; // Cycle through directions

  // Auto-slide every 2 seconds (faster)
  useEffect(() => {
    if (segment.images.length <= 1) return;

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % segment.images.length);
    }, 2000); // 2 seconds instead of 3

    return () => clearInterval(interval);
  }, [segment.images.length]);

  const handleNext = () => {
    setImageIndex((prev) => (prev + 1) % segment.images.length);
  };

  const handlePrev = () => {
    setImageIndex((prev) => (prev === 0 ? segment.images.length - 1 : prev - 1));
  };

  return (
    <div className="space-y-1">
      <h4 className="text-[11px] font-semibold text-[#aa8844]">{segment.name}</h4>
      <div className="relative overflow-hidden rounded-lg border border-[#554110] bg-black/40 h-24">
        <AnimatePresence mode="wait">
          <motion.img
            key={imageIndex}
            src={segment.images[imageIndex]}
            initial={direction.initial}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={direction.exit}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Navigation buttons */}
        {segment.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/60 text-[#aa8844] p-0.5 rounded-full hover:bg-black/80 transition-all z-10"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/60 text-[#aa8844] p-0.5 rounded-full hover:bg-black/80 transition-all z-10"
            >
              <ChevronRight size={14} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {segment.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setImageIndex(idx)}
                  className={`h-1 rounded-full transition-all ${
                    idx === imageIndex ? "bg-[#aa8844] w-3" : "bg-[#554110] w-1"
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

// EventDetailsModal - Pass index to SegmentCarousel
const EventDetailsModal = ({ event, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/80 z-[9998]" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center p-3 z-[9999]">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-md bg-black/95 border border-[#554110] rounded-xl overflow-hidden max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute right-3 top-3 z-10 bg-[#554110] text-white p-1.5 rounded-full">
            <X size={16} />
          </button>

          <div className="relative h-32">
            <img src={event.banner} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-2 left-3">
              <span className="text-[10px] font-semibold text-[#aa8844]">{event.year}</span>
              <h2 className="text-lg font-bold text-white">{event.title}</h2>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 p-3 bg-[#55411011]">
            {event.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-sm font-bold text-[#aa8844]">{stat.value}</div>
                <p className="text-[8px] text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="p-3">
            <p className="text-xs leading-relaxed text-white/90 mb-3">{event.details}</p>
          </div>

          <div className="px-3 pb-3">
            <h3 className="text-xs font-semibold text-[#aa8844] mb-2 text-center">Segments</h3>
            <div className="grid grid-cols-2 gap-2">
              {event.segments.map((segment, idx) => (
                <SegmentCarousel key={idx} segment={segment} index={idx} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

const PrevEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="min-h-screen px-3 py-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-6 max-w-3xl text-center"
      >
        <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-white/70">Our Journey</p>
        <h1 className="mb-2 text-xl font-bold text-white md:text-2xl">PREVIOUS EVENTS</h1>
        <p className="text-xs text-white/80">Tap to explore</p>
      </motion.div>

      <div className="mx-auto max-w-3xl grid grid-cols-2 gap-3 mb-6">
        {previousEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedEvent(event)}
            className="cursor-pointer overflow-hidden rounded-xl border border-[#554110] backdrop-blur-md hover:border-[#776622] hover:scale-105 transition-all"
          >
            <div className="relative h-28 overflow-hidden bg-[#55411011]">
              <img src={event.banner} alt={event.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-1.5 left-2">
                <span className="text-[10px] font-semibold text-[#aa8844]">{event.year}</span>
              </div>
            </div>

            <div className="p-3 bg-black/40">
              <h3 className="text-sm font-semibold text-white mb-0.5">{event.title}</h3>
              <p className="text-[10px] text-white/70 mb-2">{event.subtitle}</p>

              <div className="grid grid-cols-2 gap-1.5 mb-2">
                {event.stats.slice(0, 2).map((stat, idx) => (
                  <div key={idx} className="text-center bg-[#55411011] rounded-lg py-1">
                    <div className="text-xs font-bold text-[#aa8844]">{stat.value}</div>
                    <p className="text-[8px] text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>

              <button className="w-full rounded-full border border-[#554110] px-2 py-1 text-[10px] font-medium text-white hover:bg-[#554110] transition-colors">
                Learn More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <button
          onClick={() => navigate('/event')}
          className="rounded-full border border-[#554110] bg-white/5 px-5 py-2 text-xs font-medium text-white backdrop-blur-md hover:bg-[#554110] transition-all"
        >
          ← Back to Events
        </button>
      </div>

      <AnimatePresence>
        {selectedEvent && <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default PrevEvents;