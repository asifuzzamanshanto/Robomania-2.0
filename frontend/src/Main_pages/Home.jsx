import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cadysseyImg from "../assets/Cadyssey.png";
import circuitWizardryImg from "../assets/CIRCUITWizardy.png";
import hackathonImg from "../assets/RoboProjectHackathon(2).png";
import innovatorsArenaImg from "../assets/Innovatorsarena.png";
import lineFollowingImg from "../assets/LineFollowingRobot.png";
import soccerbotImg from "../assets/SoccerBot.png";
import adCanvasImg from "../assets/ADCanvas.png";
import premierPartnerImg from "../assets/PremierPartner.png";
import platinumPartnerImg from "../assets/PlatinumPartner.png";
import goldPartnerImg from "../assets/GoldPartner.jfif";
import supportingPartnerImg from "../assets/SupportingPartner.png";

// Segment data with images and descriptions
const SEGMENTS_DATA = [
  {
    id: 1,
    title: "Line Following Robot",
    subtitle: "Speed, Precision & Algorithm Mastery",
    description: "In the Line Following Robot challenge, participants will build a robot capable of autonomously navigating a path marked with lines. Perfect for those who want to test their engineering and programming skills in a fun and competitive setting.",
    imageUrl: lineFollowingImg,
    ctaLabel: "Explore More",
    icon: Zap
  },
  {
    id: 2,
    title: "Robo Soccer",
    subtitle: "Strategic Gameplay & Autonomous Control",
    description: "Join us in the Soccer Bot Challenge, where robotics and soccer meet. Teams will design and program autonomous robots that can kick a ball and score goals. Test your creativity and technical skills while competing to become the ultimate soccer bot champions.",
    imageUrl: soccerbotImg,
    ctaLabel: "Explore More",
    icon: Trophy
  },
  {
    id: 3,
    title: "CAD Odyssey",
    subtitle: "3D Modeling & Engineering Design",
    description: "In the CAD Design segment, participants will create precise digital models of mechanical or electrical systems using CAD software. Ideal for those who want to do their 3D design skills and gain a deeper understanding of engineering designs in the virtual space.",
    imageUrl: cadysseyImg,
    ctaLabel: "Explore More",
    icon: Zap
  },
  {
    id: 4,
    title: "Circuit Wizardry",
    subtitle: "Electronics Design & PCB Innovation",
    description: "Circuit Solve is a challenge designed for those with a passion for  electrical engineering. Teams will solve complex circuit problems, testing their knowledge in circuit design, troubleshooting and optimization.",
    imageUrl: circuitWizardryImg,
    ctaLabel: "Explore More",
    icon: Trophy
  },
  {
    id: 5,
    title: "Hackathon",
    subtitle: "Code, Innovate & Build Solutions",
    description: "The Mini Robotics Hackathon is a fast-paced event where participants will work on building mini robots under tight deadlines. With limited resources and time, this event challenges your problem-solving and quick-thinking abilities.",
    imageUrl: hackathonImg,
    ctaLabel: "Explore More",
    icon: Zap
  },
  {
    id: 6,
    title: "Innovators Arena",
    subtitle: "Project Showcase & Innovation Display",
    description: "The Project Showcase gives participants the chance to display their innovative robotics projects. Whether it's an individual or team effort, this is the platform to showcase your creativity, design skills and problem-solving abilities to a wider audience.",
    imageUrl: innovatorsArenaImg,
    ctaLabel: "Explore More",
    icon: Trophy
  },
  {
    id: 7,
    title: "AD Canvas",
    subtitle: "Creative Design & Marketing Excellence",
    description: "The AD Segment is a unique opportunity to explore the intersection of robotics and advertising. Participants will design creative ad campaigns utilizing robotics technology to attract attention and engage audiences.",
    imageUrl: adCanvasImg,
    ctaLabel: "Explore More",
    icon: Zap
  }
];

// Partner data
const PARTNERS_DATA = [
  {
    id: 1,
    title: "Premier Partner",
    tier: "Premier Tier",
    description: "As a Premier Partner, your support plays an important role in the overall success of our event. This partnership enables a well-organized and memorable experience for our esteemed guests, judges, faculty and participants.",
    imageUrl: premierPartnerImg,
    color: "from-purple-500 via-pink-500 to-rose-500",
    glowColor: "rgba(168, 85, 247, 0.4)",
    route: "/partners/premier",
    benefits: [
      { icon: "⚡", label: "Premium Benefits" },
      { icon: "🏆", label: "Exclusive Access" }
    ]
  },
  {
    id: 2,
    title: "Platinum Partner",
    tier: "Platinum Tier",
    description: "As a Platinum Partner, your support plays a significant role in ensuring the success of our event. This partnership enables a smooth, well-coordinated experience that honors our distinguished guests, judges, faculty and participants. ",
    imageUrl: platinumPartnerImg,
    color: "from-slate-100 via-slate-300 to-slate-200",
    glowColor: "rgba(226, 232, 240, 0.6)",
    route: "/partners/platinum",
    benefits: [
      { icon: "💎", label: "Elite Recognition" },
      { icon: "🎯", label: "Priority Access" }
    ]
  },
  {
    id: 3,
    title: "Gold Partner",
    tier: "Gold Tier",
    description: "As a Gold Partner, your organization contributes meaningfully to the success of our event. Your support helps create a well-coordinated, engaging and memorable experience for all participants including our guests, judges, faculty and attendees.",
    imageUrl: goldPartnerImg,
    color: "from-yellow-400 via-amber-400 to-yellow-500",
    glowColor: "rgba(251, 191, 36, 0.4)",
    route: "/partners/gold",
    benefits: [
      { icon: "⭐", label: "Advanced Features" },
      { icon: "🎁", label: "Special Perks" }
    ]
  },
  {
    id: 4,
    title: "Supporting Partner",
    tier: "Supporting Tier",
    description: "As a Supporting Partner, your organization plays an essential role in enhancing the overall success and quality of our event. Your contribution whether through services, refreshments, community collaboration or media support ensures a smooth, enjoyable and memorable experience for all participants, including guests, judges, faculty and attendees.",
    imageUrl: supportingPartnerImg,
    color: "from-emerald-400 via-teal-400 to-cyan-500",
    glowColor: "rgba(52, 211, 153, 0.4)",
    route: "/partners/supporting",
    benefits: [
      { icon: "🤝", label: "Community Support" },
      { icon: "📢", label: "Media Coverage" }
    ]
  }
];

// Professional Partners Carousel
const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = PARTNERS_DATA.length - 1;
      if (newIndex >= PARTNERS_DATA.length) newIndex = 0;
      return newIndex;
    });
  };

  const currentPartner = PARTNERS_DATA[currentIndex];

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      <div className="relative">
        {/* Carousel Container */}
        <div className="relative h-[650px] sm:h-[550px] lg:h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Glow Effect */}
          <motion.div
            key={currentIndex}
            className="absolute inset-0 opacity-30 blur-3xl"
            style={{
              background: `radial-gradient(circle at center, ${currentPartner.glowColor}, transparent 70%)`
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Main Card */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 280, damping: 28, mass: 0.8 },
                opacity: { duration: 0.35, ease: "easeInOut" },
                scale: { duration: 0.35, ease: "easeOut" },
                rotateY: { duration: 0.35, ease: "easeOut" },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-4xl"
              style={{ 
                perspective: "2000px",
                transformStyle: "preserve-3d"
              }}
            >
              {/* Premium Card Design */}
              <div className="relative mx-2 sm:mx-4 lg:mx-0">
                {/* Neon Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${currentPartner.color})`,
                    opacity: 0.4,
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Animated Border Wrapper */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-r ${currentPartner.color}`}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0%, ${currentPartner.glowColor} 50%, transparent 100%)`
                    }}
                  />
                  <div className="absolute inset-[3px] bg-slate-950 rounded-3xl" />
                </div>

                {/* Main Card Content */}
                <div 
                  className="relative bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-slate-900/95 backdrop-blur-2xl rounded-3xl border border-slate-800/50 overflow-hidden"
                  style={{
                    boxShadow: `0 0 30px ${currentPartner.glowColor}, 0 0 60px ${currentPartner.glowColor}, inset 0 0 20px rgba(0,0,0,0.5)`
                  }}
                >
                  {/* Premium Accents */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full" />
                  
                  {/* Animated Grid Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: '50px 50px'
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '50px 50px'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  <div className="relative p-4 sm:p-6 lg:p-12 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
                    {/* Left Section - Logo & Badge */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-6">
                      {/* Tier Badge */}
                      <motion.div
                        className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-linear-to-r ${currentPartner.color} shadow-2xl`}
                        animate={{ 
                          boxShadow: [
                            `0 0 20px ${currentPartner.glowColor}`,
                            `0 0 40px ${currentPartner.glowColor}`,
                            `0 0 20px ${currentPartner.glowColor}`,
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Trophy className={`w-4 sm:w-5 h-4 sm:h-5 ${
                          currentPartner.id === 2 ? 'text-gray-800' : 'text-white'
                        }`} />
                        <span className={`text-sm sm:text-base font-bold tracking-wider ${
                          currentPartner.id === 2 ? 'text-gray-800' : 'text-white'
                        }`}>
                          {currentPartner.tier}
                        </span>
                      </motion.div>

                      {/* Partner Logo */}
                      <motion.div
                        className="relative w-[200px] h-[140px] sm:w-[240px] sm:h-[170px] lg:w-[320px] lg:h-[240px]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Logo Glow */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background: `radial-gradient(circle, ${currentPartner.glowColor}, transparent 70%)`
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-2xl" />
                        <img
                          src={currentPartner.imageUrl}
                          alt={currentPartner.tier}
                          className="relative z-10 w-full h-full object-contain filter drop-shadow-2xl"
                        />
                      </motion.div>
                    </div>

                    {/* Right Section - Description */}
                    <div className="flex-1 flex flex-col gap-6">
                      {/* Animated Divider */}
                      <motion.div
                        className={`h-1 bg-linear-to-r ${currentPartner.color} rounded-full`}
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />

                      {/* Description Text */}
                      <motion.p
                        className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {currentPartner.description}
                      </motion.p>

                      {/* View Details Button */}
                      <motion.button
                        onClick={() => navigate(currentPartner.route)}
                        className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-white/5 backdrop-blur-sm border-2 border-white/20 font-semibold text-sm sm:text-base tracking-wide overflow-hidden mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.02, borderColor: currentPartner.glowColor }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Animated Background on Hover */}
                        <motion.div
                          className={`absolute inset-0 bg-linear-to-r ${currentPartner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        />
                        
                        <span className={`relative z-10 ${
                          currentPartner.id === 2 ? 'text-slate-200 group-hover:text-gray-800' : 'text-slate-200 group-hover:text-white'
                        } transition-colors duration-300`}>
                          View Details
                        </span>
                        <ArrowRight className={`relative z-10 w-4 h-4 sm:w-5 sm:h-5 ${
                          currentPartner.id === 2 ? 'text-slate-300 group-hover:text-gray-800' : 'text-slate-300 group-hover:text-white'
                        } transition-all duration-300 group-hover:translate-x-1`} />
                      </motion.button>
                    </div>
                  </div>

                  {/* Bottom Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            onClick={() => paginate(-1)}
            className="absolute left-2 sm:left-4 lg:left-8 z-10 p-3 sm:p-4 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 text-white hover:bg-slate-800/80 transition-colors shadow-2xl"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
          </motion.button>

          <motion.button
            onClick={() => paginate(1)}
            className="absolute right-2 sm:right-4 lg:right-8 z-10 p-3 sm:p-4 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 text-white hover:bg-slate-800/80 transition-colors shadow-2xl"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
          </motion.button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {PARTNERS_DATA.map((partner, index) => (
            <motion.button
              key={partner.id}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8' : 'w-2'
              }`}
              style={{
                background: index === currentIndex 
                  ? PARTNERS_DATA[index].glowColor.replace('0.4', '1')
                  : 'rgba(148, 163, 184, 0.3)'
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 3D Carousel Component
const Carousel3D = ({ 
  items = SEGMENTS_DATA, 
  autoPlay = true, 
  autoPlayInterval = 4000,
  showArrows = true,
  className = ""
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);
  const [flippedCards, setFlippedCards] = useState(new Set());

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isHovered) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [activeIndex, autoPlay, isHovered, autoPlayInterval]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % items.length);
    // Reset flipped cards when carousel moves
    setFlippedCards(new Set());
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    // Reset flipped cards when carousel moves
    setFlippedCards(new Set());
  }, [items.length]);

  const handleCardClick = useCallback((index) => {
    if (index === activeIndex) {
      // If it's the center card, flip it
      setFlippedCards(prev => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    } else {
      // If it's not center, move it to center
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
      setFlippedCards(new Set());
    }
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Calculate position and transform for each card
  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    const absIndex = ((diff % items.length) + items.length) % items.length;
    const normalizedDiff = absIndex > items.length / 2 ? absIndex - items.length : absIndex;

    // Check if mobile/tablet
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    // Configuration for 3D positioning (adjusted for mobile)
    const ROTATION_ANGLE = isMobile ? 25 : 35; // Reduced rotation on mobile
    const TRANSLATE_Z_CENTER = 0;
    const TRANSLATE_Z_SIDE = isMobile ? -150 : -200; // Less depth on mobile
    const TRANSLATE_Z_FAR = isMobile ? -250 : -350;
    const SCALE_CENTER = 1;
    const SCALE_SIDE = isMobile ? 0.65 : 0.75; // Smaller side cards on mobile
    const SCALE_FAR = isMobile ? 0.4 : 0.5;
    const OPACITY_CENTER = 1;
    const OPACITY_SIDE = isMobile ? 0.5 : 0.7; // Lower opacity on mobile
    const OPACITY_FAR = isMobile ? 0.2 : 0.3;
    const X_OFFSET = isMobile ? "55%" : "45%"; // Adjusted horizontal spacing
    const X_OFFSET_FAR = isMobile ? "100%" : "90%";

    let transform = {};
    let zIndex = 0;
    let opacity = OPACITY_FAR;

    if (normalizedDiff === 0) {
      // Center card
      transform = {
        x: 0,
        scale: SCALE_CENTER,
        rotateY: 0,
        z: TRANSLATE_Z_CENTER,
      };
      zIndex = 50;
      opacity = OPACITY_CENTER;
    } else if (normalizedDiff === 1) {
      // Right card
      transform = {
        x: X_OFFSET,
        scale: SCALE_SIDE,
        rotateY: -ROTATION_ANGLE,
        z: TRANSLATE_Z_SIDE,
      };
      zIndex = 30;
      opacity = OPACITY_SIDE;
    } else if (normalizedDiff === -1) {
      // Left card
      transform = {
        x: `-${X_OFFSET}`,
        scale: SCALE_SIDE,
        rotateY: ROTATION_ANGLE,
        z: TRANSLATE_Z_SIDE,
      };
      zIndex = 30;
      opacity = OPACITY_SIDE;
    } else if (normalizedDiff === 2) {
      // Far right card
      transform = {
        x: X_OFFSET_FAR,
        scale: SCALE_FAR,
        rotateY: -ROTATION_ANGLE * 1.5,
        z: TRANSLATE_Z_FAR,
      };
      zIndex = 10;
      opacity = OPACITY_FAR;
    } else if (normalizedDiff === -2) {
      // Far left card
      transform = {
        x: `-${X_OFFSET_FAR}`,
        scale: SCALE_FAR,
        rotateY: ROTATION_ANGLE * 1.5,
        z: TRANSLATE_Z_FAR,
      };
      zIndex = 10;
      opacity = OPACITY_FAR;
    } else {
      // Hidden cards
      transform = {
        x: normalizedDiff > 0 ? "120%" : "-120%",
        scale: 0.3,
        rotateY: normalizedDiff > 0 ? -60 : 60,
        z: -500,
      };
      zIndex = 0;
      opacity = 0;
    }

    return { transform, zIndex, opacity };
  };

  return (
    <div 
      className={`relative w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container with 3D Perspective */}
      <div 
        className="relative mx-auto h-[420px] sm:h-[480px] md:h-[550px] lg:h-[600px]"
        style={{ perspective: typeof window !== 'undefined' && window.innerWidth < 768 ? "1000px" : "1400px", perspectiveOrigin: "50% 50%" }}
      >
        {/* 3D Stage */}
        <div className="relative h-full w-full" style={{ transformStyle: "preserve-3d" }}>
          {items.map((item, index) => {
            const { transform, zIndex, opacity } = getCardStyle(index);
            const isCenter = index === activeIndex;
            const isFlipped = flippedCards.has(index);

            return (
              <motion.div
                key={item.id}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  zIndex,
                }}
                initial={false}
                animate={{
                  x: transform.x,
                  y: "-50%",
                  scale: transform.scale,
                  rotateY: transform.rotateY,
                  z: transform.z,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 30,
                  mass: 0.8,
                }}
                onClick={() => handleCardClick(index)}
                whileHover={!isCenter ? { scale: transform.scale * 1.05 } : {}}
              >
                {/* Card Container with Flip */}
                <motion.div
                  className="relative w-[240px] sm:w-[280px] md:w-[340px] lg:w-[380px] h-[360px] sm:h-[400px] md:h-[480px] lg:h-[520px]"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 25 }}
                >
                  {/* FRONT SIDE - Image and Title */}
                  <div
                    className={`
                      absolute inset-0 w-full h-full
                      rounded-2xl overflow-hidden
                      border ${isCenter ? 'border-amber-400/50' : 'border-amber-500/20'}
                      bg-linear-to-br from-amber-950/40 via-black/60 to-amber-900/40
                      backdrop-blur-md
                    `}
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transformStyle: "preserve-3d",
                      boxShadow: isCenter 
                        ? '0 0 40px rgba(251, 191, 36, 0.4), 0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(251, 191, 36, 0.2)'
                        : '0 10px 30px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-[70%] overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        style={{
                          filter: isCenter ? 'brightness(1)' : 'brightness(0.7)',
                        }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
                      
                      {/* Icon Badge */}
                      {isCenter && item.icon && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="absolute top-4 right-4 w-12 h-12 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 flex items-center justify-center"
                          style={{
                            boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)'
                          }}
                        >
                          <item.icon className="w-6 h-6 text-amber-400" />
                        </motion.div>
                      )}

                      {/* Click to flip hint - only on center card */}
                      {isCenter && !isFlipped && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30"
                        >
                          <span className="text-xs text-amber-300 font-medium">Click to flip</span>
                        </motion.div>
                      )}
                    </div>

                    {/* Title Section */}
                    <div className="relative h-[30%] p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-center">
                      <h3 className={`
                        font-bold text-center
                        ${isCenter ? 'text-lg sm:text-xl md:text-2xl text-amber-300' : 'text-base sm:text-lg md:text-xl text-amber-400/70'}
                      `}>
                        {item.title}
                      </h3>
                      <p className={`
                        text-xs sm:text-sm text-center mt-1 sm:mt-2 font-medium
                        ${isCenter ? 'text-amber-400/90' : 'text-amber-500/60'}
                      `}>
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Glow effect for center card */}
                    {isCenter && (
                      <div 
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle at 50% 0%, rgba(251, 191, 36, 0.1), transparent 70%)'
                        }}
                      />
                    )}
                  </div>

                  {/* BACK SIDE - Description and CTA */}
                  <div
                    className={`
                      absolute inset-0 w-full h-full
                      rounded-2xl overflow-hidden
                      border ${isCenter ? 'border-amber-400/50' : 'border-amber-500/20'}
                      bg-linear-to-br from-amber-950/60 via-black/80 to-amber-900/60
                      backdrop-blur-md
                      p-4 sm:p-5 md:p-6 lg:p-8
                      flex flex-col justify-between
                    `}
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transformStyle: "preserve-3d",
                      transform: "rotateY(180deg)",
                      boxShadow: isCenter 
                        ? '0 0 40px rgba(251, 191, 36, 0.4), 0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(251, 191, 36, 0.2)'
                        : '0 10px 30px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {/* Back content */}
                    <div className="flex-1 flex flex-col justify-center">
                      {/* Icon at top */}
                      {item.icon && (
                        <div className="flex justify-center mb-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 flex items-center justify-center"
                            style={{
                              boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)'
                            }}
                          >
                            <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-400" />
                          </div>
                        </div>
                      )}

                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-300 text-center mb-2 sm:mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm md:text-base text-amber-100/80 text-center leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 rounded-xl bg-linear-to-r from-amber-500 to-amber-600 text-black font-semibold text-xs sm:text-sm md:text-base"
                      style={{
                        boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)'
                      }}
                    >
                      {item.ctaLabel}
                    </motion.button>

                    {/* Click to flip back hint */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30"
                    >
                      <span className="text-xs text-amber-300 font-medium">Click to flip back</span>
                    </motion.div>

                    {/* Glow effect */}
                    {isCenter && (
                      <div 
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.1), transparent 70%)'
                        }}
                      />
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <motion.button
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-amber-950/80 border border-amber-500/30 backdrop-blur-md flex items-center justify-center text-amber-400 hover:text-amber-300 transition-colors"
            style={{
              boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)'
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-amber-950/80 border border-amber-500/30 backdrop-blur-md flex items-center justify-center text-amber-400 hover:text-amber-300 transition-colors"
            style={{
              boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)'
            }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </motion.button>
        </>
      )}

      {/* Indicator Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {items.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${index === activeIndex ? 'w-8 bg-amber-400' : 'w-2 bg-amber-600/40 hover:bg-amber-500/60'}
            `}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            style={{
              boxShadow: index === activeIndex ? '0 0 10px rgba(251, 191, 36, 0.6)' : 'none'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-10 md:py-20 font-noto-kr">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center justify-center">
          {/* Centered Title Display */}
          <div className="flex-1 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative text-center"
            >
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span 
                  className="relative inline-block bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 0 80px rgba(251, 191, 36, 0.5)',
                  }}
                >
                  Robomania
                  {/* Enhanced glow effect */}
                  <motion.span
                    className="absolute inset-0 bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent blur-xl opacity-50"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Robomania
                  </motion.span>
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative mt-2"
              >
                <span 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-linear-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 0 60px rgba(251, 191, 36, 0.4)',
                  }}
                >
                  2.0
                </span>
                
                {/* Decorative underline */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-linear-to-r from-transparent via-amber-400 to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                  style={{
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.8)'
                  }}
                />
              </motion.div>

              {/* Animated border glow */}
              <motion.div
                className="absolute -inset-4 rounded-3xl border-2 border-amber-400/20 pointer-events-none"
                animate={{
                  borderColor: ['rgba(251, 191, 36, 0.1)', 'rgba(251, 191, 36, 0.3)', 'rgba(251, 191, 36, 0.1)'],
                  boxShadow: [
                    '0 0 20px rgba(251, 191, 36, 0.2)',
                    '0 0 40px rgba(251, 191, 36, 0.4)',
                    '0 0 20px rgba(251, 191, 36, 0.2)'
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Description text */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="relative z-10 mt-8 max-w-2xl text-center text-base sm:text-lg md:text-xl font-medium text-amber-100/90"
                style={{
                  textShadow: '0 0 20px rgba(251, 191, 36, 0.3), 0 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                Join us for a week of <span className="text-amber-300 font-semibold">robots, rivalry</span> and <span className="text-amber-300 font-semibold">real innovation</span> at AUST.
                Build with your team, compete in multiple segments, and be part of
                RoBomania 2.0.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Carousel Section - Competition Segments */}
      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Container with background */}
          <div className="relative rounded-2xl md:rounded-3xl border border-amber-500/20 bg-linear-to-br from-amber-950/20 via-black/40 to-amber-900/20 backdrop-blur-md p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden"
            style={{
              boxShadow: '0 0 40px rgba(251, 191, 36, 0.15), inset 0 1px 0 rgba(251, 191, 36, 0.1)'
            }}
          >
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 via-transparent to-amber-600/5 pointer-events-none" />
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16 relative z-10"
            >
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-linear-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 40px rgba(251, 191, 36, 0.3)',
                  filter: 'drop-shadow(0 4px 8px rgba(251, 191, 36, 0.3))'
                }}
              >
                Competition Segments
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-amber-100/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-2"
              >
                Explore six exciting segments designed to challenge your skills and innovation
              </motion.p>
            </motion.div>

            {/* 3D Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <Carousel3D 
                items={SEGMENTS_DATA}
                autoPlay={true}
                autoPlayInterval={4000}
                showArrows={true}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section - Revolutionary 3D Carousel */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-3 rounded-full border-2 border-amber-400/30 bg-amber-950/30 text-sm font-semibold text-amber-300 tracking-wider uppercase backdrop-blur-md">
                Our Valued Partners
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-linear-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Meet Our
              </span>
              <br />
              <span className="bg-linear-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                Amazing Partners
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-amber-100/70 max-w-3xl mx-auto leading-relaxed"
            >
              Collaboration drives innovation. Discover the incredible organizations that make Robomania 2.0 possible.
            </motion.p>
          </motion.div>

          {/* Partners Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <PartnersCarousel />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
