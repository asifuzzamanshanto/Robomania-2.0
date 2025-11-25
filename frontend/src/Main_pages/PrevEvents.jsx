// PrevEvents.jsx - Enhanced with better backgrounds and image optimization
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Award, Sparkles } from "lucide-react";

const previousEvents = [
  {
    id: 1,
    title: "AUST ROVER CHALLENGE 1.0",
    subtitle: "The Inaugural Event",
    year: "2022",
    presenter: " Presented by Ispahani",
    banner: "https://ik.imagekit.io/mekt2pafz/arc%201.0/banner%201.0?tr=w-800,h-400,q-80,fo-auto",
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
          "https://ik.imagekit.io/mekt2pafz/arc%201.0/rover%20competition%20moment-1.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/arc%201.0/rover%20competition%20moment-2.jpg?tr=w-500,h-300,fo-auto",
        ],
      },
      {
        name: "Soccer Bot",
        images: [
          "https://ik.imagekit.io/mekt2pafz/arc%201.0/soccer%20bot%20moment%20-3%20(1).jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/arc%201.0/soccer%20bot%20moment%20-2%20(1).jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/_MG_4488.jpg?tr=w-500,h-300,fo-auto"
        ],
      },
      {
        name: "Line Follower",
        images: [
          "https://ik.imagekit.io/mekt2pafz/arc%201.0/lfr%20moment%20-2%20(1).jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/arc%201.0/lfr%20moment%20-1%20(1).jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/arc%201.0/lfr%20moment%20-3.jpg?tr=w-500,h-300,fo-auto",
        ],
      },
      {
        name: "Hardware",
        images: [
          "https://ik.imagekit.io/mekt2pafz/arc%201.0/Project%20showcase%20moment%20-1.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/arc%201.0/Project%20showcase%20moment%20-3.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/arc%201.0/Project%20showcase%20moment%20-2.jpg?tr=w-500,h-300,fo-auto",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Robomania 1.0",
    subtitle: "Season One",
    year: "2024",
    presenter: null,
    banner: "https://ik.imagekit.io/mekt2pafz/485658163_695759766349341_2156621265921599892_n.jpg?tr=w-800,h-400,q-80,fo-auto",
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
          "https://ik.imagekit.io/mekt2pafz/lfr%20moment%20-1.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/lfr%20moment%20-2.jpg?tr=w-500,h-300,fo-auto",
        ],
      },
      {
        name: "Robo Fight",
        images: [
          "https://ik.imagekit.io/mekt2pafz/boot%20fight%20moment%20-2.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/boot%20fight%20moment%20-1.jpg?tr=w-500,h-300,fo-auto",
        ],
      },
      {
        name: "Project",
        images: [
          "https://ik.imagekit.io/mekt2pafz/project%20show%20case%20moment%20-4.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/project%20show%20case%20moment%20-5.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/project%20show%20case%20moment%20-2.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/project%20show%20case%20moment%20-1.jpg?tr=w-500,h-300,fo-auto",
        ],
      },
      {
        name: "Soccer Bot",
        images: [
          "https://ik.imagekit.io/mekt2pafz/soccer%20bot%20moment%20-3.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/soccer%20bot%20moment%20-2.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/soccer%20bot%20moment%20-1.jpg?tr=w-500,h-300,fo-auto",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "AUST Rover Challenge 2.0",
    subtitle: "Expanded Edition",
    year: "2025",
    presenter: "Presented by Prime Bank",
    banner: "https://ik.imagekit.io/mekt2pafz/1000032065%20(1).jpg?tr=w-800,h-400,q-80,fo-auto",
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
          "https://ik.imagekit.io/mekt2pafz/DSCF3224.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/DSCF3219.jpg?tr=w-500,h-300,fo-auto",
        ],
      },
      {
        name: "Soccer Bot",
        images: [
          "https://ik.imagekit.io/mekt2pafz/_MG_4041.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/_MG_4084.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/_MG_4488.jpg?tr=w-500,h-300,fo-auto"
        ],
      },
      {
        name: "Line Follower",
        images: [
          "https://ik.imagekit.io/mekt2pafz/IMG_6371.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/IMG_6380.jpg?tr=w-500,h-300,fo-auto",
        ],
      },
      {
        name: "Robo Olympiad",
        images: [
          "https://ik.imagekit.io/mekt2pafz/_MG_4363%20(1).jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/_MG_4327.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/_MG_4358.jpg?tr=w-500,h-300,fo-auto",
        ],
      },
      {
        name: "Hardware",
        images: [
          "https://ik.imagekit.io/mekt2pafz/DSCF3211.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/DSCF3210.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/DSCF3277.jpg?tr=w-500,h-300,fo-auto",
          "https://ik.imagekit.io/mekt2pafz/DSCF2918.jpg?tr=w-500,h-300,fo-auto"
        ],
      },
    ],
  },
];

// Optimized Segment Carousel
const SegmentCarousel = ({ segment, index }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const directions = [
    { initial: { x: 100, opacity: 0 }, exit: { x: -100, opacity: 0 } },
    { initial: { x: -100, opacity: 0 }, exit: { x: 100, opacity: 0 } },
    { initial: { y: -100, opacity: 0 }, exit: { y: 100, opacity: 0 } },
    { initial: { y: 100, opacity: 0 }, exit: { y: -100, opacity: 0 } },
  ];

  const direction = directions[index % 4];

  useEffect(() => {
    if (segment.images.length <= 1) return;

    // Preload next image only
    const nextIndex = (imageIndex + 1) % segment.images.length;
    const img = new Image();
    img.src = segment.images[nextIndex];

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % segment.images.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [segment.images, imageIndex]);

  const handleNext = () => {
    setImageIndex((prev) => (prev + 1) % segment.images.length);
  };

  const handlePrev = () => {
    setImageIndex((prev) => (prev === 0 ? segment.images.length - 1 : prev - 1));
  };

  return (
    <div className="space-y-1.5">
      <h4 className="text-[10px] sm:text-xs font-bold text-[#aa8844] tracking-wide uppercase flex items-center gap-1">
        <Sparkles size={10} className="sm:w-3 sm:h-3" />
        {segment.name}
      </h4>
      <div className="relative overflow-hidden rounded-lg border border-[#554110] bg-black/30 h-28 sm:h-32 lg:h-36 shadow-md hover:border-[#aa8844] transition-all duration-300 group">
        <AnimatePresence mode="wait">
          <motion.img
            key={imageIndex}
            src={segment.images[imageIndex]}
            initial={direction.initial}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={direction.exit}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute w-full h-full object-contain bg-black/20"
          />
        </AnimatePresence>

        {segment.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/60 text-[#aa8844] p-1 rounded-full hover:bg-black/80 hover:scale-110 transition-all z-10 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/60 text-[#aa8844] p-1 rounded-full hover:bg-black/80 hover:scale-110 transition-all z-10 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={14} />
            </button>

            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1 z-10">
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

// Compact Event Details Modal
const EventDetailsModal = ({ event, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[99999]" 
        onClick={onClose} 
      />
      <div className="fixed inset-0 flex items-center justify-center p-3 sm:p-4 z-[100000] pt-24 pb-6 overflow-y-auto">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          className="relative w-full max-w-3xl bg-gradient-to-br from-black/95 via-[#1a1206]/95 to-black/95 border border-[#aa8844] rounded-xl overflow-hidden shadow-2xl shadow-[#aa8844]/20 my-auto backdrop-blur-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose} 
            className="absolute right-3 top-3 z-20 bg-[#aa8844] text-black p-1.5 rounded-full hover:bg-[#ccaa55] transition-all hover:rotate-90 duration-300"
          >
            <X size={16} />
          </button>

          {/* Compact Banner */}
          <div className="relative h-40 sm:h-52 overflow-hidden">
            <img 
              src={event.banner} 
              alt={event.title} 
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            
            {event.presenter && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", damping: 15 }}
                className="absolute top-2 left-2 bg-gradient-to-r from-[#aa8844] to-[#ccaa55] text-black px-2 py-1 rounded-full font-bold text-[9px] sm:text-xs shadow-lg flex items-center gap-1"
              >
                <Award size={10} />
                <span>{event.presenter}</span>
              </motion.div>
            )}

            <div className="absolute bottom-2 left-2 right-2">
              <span className="inline-block text-[9px] sm:text-xs font-bold text-[#aa8844] bg-black/60 px-2 py-0.5 rounded-full mb-1 backdrop-blur-sm">
                {event.year}
              </span>
              <h2 className="text-lg sm:text-2xl font-extrabold text-white drop-shadow-lg">
                {event.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#aa8844] font-semibold">
                {event.subtitle}
              </p>
            </div>
          </div>

          {/* Compact Stats */}
          <div className="grid grid-cols-4 gap-2 p-3 sm:p-4 bg-gradient-to-r from-[#554110]/10 via-[#aa8844]/5 to-[#554110]/10 border-y border-[#554110]/50">
            {event.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="text-center bg-black/30 rounded-lg p-2 border border-[#554110]/50 hover:border-[#aa8844] hover:scale-105 transition-all"
              >
                <div className="text-sm sm:text-lg font-extrabold text-[#aa8844]">
                  {stat.value}
                </div>
                <p className="text-[8px] sm:text-[10px] text-white/60 font-medium uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="p-3 sm:p-4">
            <p className="text-xs sm:text-sm leading-relaxed text-white/85 text-center">
              {event.details}
            </p>
          </div>

          {/* Segments */}
          <div className="px-3 sm:px-4 pb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#aa8844]"></div>
              <h3 className="text-xs sm:text-sm font-bold text-[#aa8844] uppercase">Segments</h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#aa8844]"></div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
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

  return (
    <section className="min-h-screen px-3 sm:px-4 py-8 sm:py-12 bg-black/40 backdrop-blur-lg">
      {/* Compact Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-8 sm:mb-10 max-w-4xl text-center"
      >
        <p className="text-emerald-100/60 text-xs sm:text-sm mb-2 tracking-wide">
          Our Journey
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg mb-3">
          PREVIOUS EVENTS
        </h1>
        <div className="h-0.5 w-24 sm:w-40 mx-auto bg-gradient-to-r from-transparent via-[#aa8844] to-transparent rounded-full"></div>
      </motion.div>

      {/* Compact Cards with Gradient Blurred Background */}
      <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6">
        {previousEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            onClick={() => setSelectedEvent(event)}
            className="group cursor-pointer overflow-hidden rounded-xl border border-[#554110]/60 backdrop-blur-md bg-gradient-to-br from-[#aa8844]/10 via-black/20 to-[#554110]/15 hover:border-[#aa8844] hover:scale-[1.02] hover:shadow-xl hover:shadow-[#aa8844]/20 transition-all duration-300"
          >
            {/* Banner */}
            <div className="relative h-32 sm:h-36 overflow-hidden">
              <img 
                src={event.banner} 
                alt={event.title} 
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {event.presenter && (
                <div className="absolute top-2 left-2 bg-gradient-to-r from-[#aa8844] to-[#ccaa55] text-black px-2 py-1 rounded-full text-[8px] sm:text-[10px] font-bold shadow-md flex items-center gap-1">
                  <Award size={9} />
                  <span>{event.presenter}</span>
                </div>
              )}
              
              <span className="absolute top-2 right-2 text-[9px] sm:text-xs font-bold text-[#aa8844] bg-black/60 px-2 py-1 rounded-full backdrop-blur-sm">
                {event.year}
              </span>
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4 bg-gradient-to-br from-black/50 via-black/40 to-[#554110]/20 backdrop-blur-sm">
              <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 group-hover:text-[#aa8844] transition-colors">
                {event.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-white/60 mb-3">{event.subtitle}</p>

              {/* Mini Stats */}
              <div className="grid grid-cols-2 gap-1.5 mb-3">
                {event.stats.slice(0, 2).map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="text-center bg-[#55411015] rounded-md py-1.5 border border-[#554110]/40"
                  >
                    <div className="text-xs sm:text-sm font-bold text-[#aa8844]">{stat.value}</div>
                    <p className="text-[8px] sm:text-[9px] text-white/50 uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full rounded-full bg-gradient-to-r from-[#554110] to-[#aa8844] px-3 py-1.5 text-[10px] sm:text-xs font-semibold text-white hover:from-[#aa8844] hover:to-[#ccaa55] transition-all duration-300 shadow-md flex items-center justify-center gap-1.5">
                <span>View Details</span>
                <ChevronRight size={12} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedEvent && <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default PrevEvents;