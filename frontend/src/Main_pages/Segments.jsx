import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { Trophy, Users, Target, Cpu } from "lucide-react";


// Import segment images


const segmentsData = [
  {
    id: 1,
    name: "Soccer Bot Challenge",
    badge: "Flagship Arena Event",
    category: "Autonomous Robotics · Game AI",
    prizePool: "৳60,000+",
    expectedTeams: "35–40 teams",
    difficulty: "Intermediate – Advanced",
    image: "https://ik.imagekit.io/mekt2pafz/SoccerBot.png",
    tagline:
      "Where strategy, control systems and football passion collide under stadium lights.",
    shortDescription:
      "Design and program autonomous robots that can dribble, pass and score without human control. Bring your A-game in mechanics, control, and decision-making.",
    detailedDescription:
      "Soccer Bot is a high-energy arena event where teams deploy custom robots to outplay opponents in fast-paced matches. Bots must detect the ball, navigate the field, avoid collisions and execute scoring strategies in real time. The segment highlights sensor fusion, control algorithms, and competitive team coordination — making it a perfect magnet for audience engagement and sponsor visibility.",
    highlights: [
      "3v3 style autonomous robot matches with live commentary.",
      "Real-time decision-making using sensors, control loops or AI.",
      "Stadium-like experience with cheering zones and live score display."
    ]
  },
  {
    id: 2,
    name: "Line Following Robot",
    badge: "Core Robotics Skill",
    category: "Embedded Systems · Control",
    prizePool: "৳30,000+",
    expectedTeams: "40+ teams",
    difficulty: "Beginner – Intermediate",
    image: "https://ik.imagekit.io/mekt2pafz/LineFollowingRobot.png",
    tagline:
      "Master sensors, control logic and optimization in a classic robotics challenge.",
    shortDescription:
      "Build a robot that can autonomously follow complex tracks with high speed and accuracy. Perfect for participants stepping into robotics or sharpening control skills.",
    detailedDescription:
      "In the Line Following Robot challenge, participants design sensor arrays, tune motor drivers and implement control algorithms to track black/white paths and dynamic curves. Tracks may include sharp turns, lane splits and speed sections. This segment demonstrates fundamental automation principles and offers sponsors a strong connection to skill-building and learning-focused robotics.",
    highlights: [
      "Multiple track difficulties: beginner, intermediate and pro lanes.",
      "Focus on sensor tuning, PID control and hardware optimization.",
      "Ideal gateway event for newcomers to robotics."
    ]
  },
  {
    id: 3,
    name: "Innovators' Arena",
    badge: "Project Showcase",
    category: "Research · Prototyping",
    prizePool: "৳50,000+ (grants & awards)",
    expectedTeams: "25–30 projects",
    difficulty: "Open — Research / Product",
    image: "https://ik.imagekit.io/mekt2pafz/Innovatorsarena.png",
    tagline:
      "Your stage to present bold ideas, research prototypes and real-world solutions.",
    shortDescription:
      "Showcase original robotics and automation projects — from research prototypes to near-product demos — in front of judges, sponsors and university leaders.",
    detailedDescription:
      "Innovators' Arena is a curated exhibition for robotics, IoT and automation projects that solve meaningful problems. Participants communicate problem statements, design choices, and impact. It’s a strong touchpoint for sponsors to directly scout talent, explore collaboration ideas and associate their brand with innovation and research-driven outcomes.",
    highlights: [
      "Poster + live demo format with structured judging rubric.",
      "Great for CV/portfolio building and research exposure.",
      "Sponsors can directly interact with teams and short-list talent."
    ]
  },
  {
    id: 4,
    name: "Circuit Wizardry",
    badge: "EEE Showdown",
    category: "Electronics · Circuit Design",
    prizePool: "৳25,000+",
    expectedTeams: "30+ teams",
    difficulty: "Intermediate",
    image: "https://ik.imagekit.io/mekt2pafz/CIRCUITWizardy.png",
    tagline:
      "Prove your circuit intuition under pressure — from analysis to debugging.",
    shortDescription:
      "Solve real-world inspired circuit challenges under time pressure. Perfect for those who love electronics, design thinking and troubleshooting.",
    detailedDescription:
      "Circuit Wizardry is a timed challenge where teams analyze schematics, identify faults, design sub-circuits and justify their choices. Problems are tuned around analog, digital and mixed-signal scenarios. This segment emphasizes fundamental EEE knowledge and practical reasoning, offering sponsors close association with deep technical skill and problem-solving ability.",
    highlights: [
      "Combination of paper-based and hands-on circuit tasks.",
      "Focus on clean reasoning, not just formula memorization.",
      "Ideal for EEE-focused sponsors and technical partners."
    ]
  },
  {
    id: 5,
    name: "Cadyssey",
    badge: "Design Studio",
    category: "CAD · Product Design",
    prizePool: "৳20,000+",
    expectedTeams: "20–25 designers",
    difficulty: "Intermediate – Advanced",
    image: "https://ik.imagekit.io/mekt2pafz/Cadyssey.png",
    tagline:
      "Turn engineering imagination into precise, manufacturable digital models.",
    shortDescription:
      "Showcase your 2D/3D CAD skills by modeling functional mechanical or electro-mechanical systems with clarity and detail.",
    detailedDescription:
      "Cadyssey challenges participants to interpret design briefs and transform them into structured CAD models — focusing on constraints, assemblies, motion and real-world manufacturability. Whether it’s a robotic arm, gearbox or fixture, the segment highlights design thinking and attention to engineering detail. Sponsors can connect with future design engineers and CAD-ready talent.",
    highlights: [
      "Timed modeling based on real engineering problem statements.",
      "Judging based on accuracy, constraints, clarity and documentation.",
      "Valuable for companies looking for design-oriented recruits."
    ]
  },
  {
    id: 6,
    name: "RoboProject Hackathon",
    badge: "24-Hour Build Sprint",
    category: "Hackathon · Rapid Prototyping",
    prizePool: "৳40,000+",
    expectedTeams: "20–25 teams",
    difficulty: "Intermediate – Advanced",
    image: "https://ik.imagekit.io/mekt2pafz/RoboProjectHackathon(2).png",
    tagline:
      "Build, break, fix and ship a working mini-robotic solution in record time.",
    shortDescription:
      "A fast-paced mini robotics hackathon where teams build functional robots or automation demos within tight time and resource limits.",
    detailedDescription:
      "In RoboProject Hackathon, teams brainstorm, prototype and iterate at high speed to solve a themed challenge — from assistive robots to industrial helpers. Limited components and time test not just technical skill, but teamwork, planning and execution. Sponsors align with high-energy innovation, resilience and practical engineering.",
    highlights: [
      "Theme-based challenge revealed at the start of the hackathon.",
      "On-ground mentorship and late-night build atmosphere.",
      "Perfect for brands supporting startup-style problem solving."
    ]
  },
  {
    id: 7,
    name: "ADCanvas",
    badge: "Creative Tech + Marketing",
    category: "Branding · Storytelling",
    prizePool: "৳15,000+",
    expectedTeams: "15–20 teams",
    difficulty: "Open Creative",
    image: "https://ik.imagekit.io/mekt2pafz/ADCanvas.png",
    tagline:
      "Blend robotics with storytelling to design campaigns that truly stand out.",
    shortDescription:
      "Design ad concepts and experiences that use robotics or automation as a hero element to tell a strong brand or social story.",
    detailedDescription:
      "ADCanvas is a cross-disciplinary segment where participants merge engineering with creative communication. Teams propose ad campaigns, installations or stunts where robots become part of the story. This segment shows how technology can emotionally connect with people — attractive for sponsors who want fresh, tech-led marketing ideas.",
    highlights: [
      "Focus on storyline, experience design and robotic integration.",
      "Suited for participants from both technical and creative backgrounds.",
      "Sponsors can directly see how their brand or cause could be positioned."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const SegmentCard = ({ segment, index, onLearnMore }) => {
  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      layout
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="
        relative group cursor-pointer overflow-hidden
        rounded-3xl border border-[#D1BA83]/60
        bg-black/30 backdrop-blur-xl
        shadow-[0_18px_45px_rgba(0,0,0,0.75)]
        transition-all duration-300
        hover:shadow-[0_0_40px_rgba(245,203,122,0.35)]
      "
    >
      {/* glassy bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050506]/75 via-[#120b05]/80 to-[#1a0f00]/70" />

      {/* hover glow overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#F5CB7A]/18 via-transparent to-transparent"
        whileHover={{ opacity: 1 }}
      />

      {/* subtle inner shine */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl border border-[#F5CB7A]/10 group-hover:border-[#F5CB7A]/40 transition-colors duration-300" />

      {/* Content */}
      <div className="relative p-5 sm:p-6 h-full flex flex-col">
        {/* Image section */}
        <motion.div
          className="
            mb-4 w-full h-56 sm:h-64
            rounded-2xl overflow-hidden
            bg-black/40 border border-[#D1BA83]/40
            flex items-center justify-center
            group-hover:border-[#F5CB7A]/70
            transition-colors duration-300
          "
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          <motion.img
            src={segment.image}
            alt={segment.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-lg sm:text-xl font-bold mb-2.5 leading-tight"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.15 }}
        >
          <span className="bg-gradient-to-r from-[#F5CB7A] via-[#FFE4A3] to-[#FACC6B] bg-clip-text text-transparent">
            {segment.name}
          </span>
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-sm text-neutral-200/90 leading-relaxed mb-3 line-clamp-3"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
        >
          {segment.shortDescription}
        </motion.p>

        {/* push button to bottom */}
        <div className="flex-grow" />

        {/* Learn more button – real curved pill */}
        <div className="mt-2">
          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onLearnMore(segment)}
            className="
              inline-flex items-center gap-2
              rounded-full px-4 py-2.5
              text-sm font-semibold
              bg-gradient-to-r from-[#3b2a12] via-[#6b4a1c] to-[#3b2a12]
              text-[#FDF6DF]
              border border-[#F5CB7A]/70
              shadow-[0_8px_25px_rgba(0,0,0,0.7)]
              hover:shadow-[0_0_25px_rgba(245,203,122,0.5)]
              transition-all duration-300
            "
          >
            <span>Learn More</span>
            <motion.span
              animate={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex items-center justify-center h-5 w-5 rounded-full bg-black/30"
            >
              <ChevronDown className="h-3.5 w-3.5 rotate-[-90deg]" />
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* outer gradient glow on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ opacity: 1 }}
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-[#F5CB7A]/18 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

const SegmentDetailModal = ({ segment, isOpen, onClose }) => {
  if (!isOpen || !segment) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center px-3 sm:px-4 py-6 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      {/* soft glow behind card */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-72 w-72 rounded-full bg-[#F5CB7A]/18 blur-3xl mt-10" />
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 10 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="relative w-full max-w-3xl max-h-[82vh] sm:max-h-[86vh] overflow-hidden 
                   rounded-3xl border border-[#D1BA83]/60 
                   bg-gradient-to-br from-[#050506]/95 via-[#0d0902]/95 to-[#1a0f00]/80 
                   shadow-[0_0_70px_rgba(245,203,122,0.28)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* top accent line */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5CB7A] to-transparent opacity-80" />

        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.08, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-[#F5CB7A]/60 hover:bg-[#1AB7AA]/30 transition-colors duration-200"
        >
          <X className="h-4 w-4 text-[#F5CB7A]" />
        </motion.button>

        {/* Scrollable content */}
        <div className="relative flex flex-col max-h-[82vh] sm:max-h-[86vh] overflow-y-auto">
          <div className="px-5 sm:px-8 pt-5 pb-6 sm:pb-8">
            {/* top row: badge + category */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.3 }}
              className="mb-4 flex flex-wrap items-center justify-between gap-3"
            >
              {segment.badge && (
                <div className="inline-flex items-center gap-2 rounded-full bg-black/70 border border-[#D1BA83]/70 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-[#F5CB7A]" />
                  <span className="text-[11px] font-semibold tracking-wide text-[#F5CB7A] uppercase">
                    {segment.badge}
                  </span>
                </div>
              )}

              {segment.category && (
                <div className="rounded-full bg-black/60 border border-[#1AB7AA]/70 px-3 py-1">
                  <span className="text-[11px] font-medium text-[#CCF5EE]">
                    {segment.category}
                  </span>
                </div>
              )}
            </motion.div>

            {/* image + basic details side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-5 md:gap-7 items-start">
              {/* Image card */}
              <motion.div
                initial={{ opacity: 0, x: -10, y: 4 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.1, duration: 0.35 }}
                className="relative rounded-3xl border border-[#D1BA83]/60 
                           bg-gradient-to-br from-[#18100a]/95 via-[#0b0804]/95 to-[#140b02]/95 
                           p-3 shadow-[0_18px_45px_rgba(0,0,0,0.75)]"
              >
                {/* outer glow */}
                <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#F5CB7A]/30 via-transparent to-[#1AB7AA]/30 opacity-40 blur-xl" />

                <div className="relative rounded-2xl bg-black/60 border border-[#D1BA83]/70 aspect-[4/3] overflow-hidden flex items-center justify-center">
                  <img
                    src={segment.image}
                    alt={segment.name}
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                {/* small caption under image */}
                <p className="relative mt-3 text-[11px] text-neutral-300/80 leading-snug">
                  Designed visual for <span className="text-[#F5CB7A] font-semibold">{segment.name}</span> —
                  as seen in Robomania 2.0 branding.
                </p>
              </motion.div>

              {/* Text + metrics */}
              <div className="space-y-4">
                {/* Title + tagline */}
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.14, duration: 0.35 }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-[#F5CB7A] via-[#1AB7AA] to-[#F5CB7A] bg-clip-text text-transparent">
                      {segment.name}
                    </span>
                  </h2>
                  {segment.tagline && (
                    <p className="mt-2 text-xs sm:text-sm text-neutral-200/85">
                      {segment.tagline}
                    </p>
                  )}
                </motion.div>

                {/* Metrics row */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.35 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                >
                  {segment.prizePool && (
                    <div className="rounded-2xl border border-[#F5CB7A]/40 bg-black/45 px-3 py-2.5 flex items-start gap-2">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-[#F5CB7A]/10">
                        <Trophy className="h-4 w-4 text-[#F5CB7A]" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] uppercase tracking-wide text-neutral-300/70">
                          Prize Pool
                        </p>
                        <p className="text-sm font-semibold text-[#F5CB7A]">
                          {segment.prizePool}
                        </p>
                      </div>
                    </div>
                  )}

                  {segment.expectedTeams && (
                    <div className="rounded-2xl border border-[#1AB7AA]/40 bg-black/45 px-3 py-2.5 flex items-start gap-2">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-[#1AB7AA]/10">
                        <Users className="h-4 w-4 text-[#1AB7AA]" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] uppercase tracking-wide text-neutral-300/70">
                          Expected Teams
                        </p>
                        <p className="text-sm font-semibold text-[#CCF5EE]">
                          {segment.expectedTeams}
                        </p>
                      </div>
                    </div>
                  )}

                  {segment.difficulty && (
                    <div className="rounded-2xl border border-[#D1BA83]/35 bg-black/45 px-3 py-2.5 flex items-start gap-2">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-[#D1BA83]/10">
                        <Target className="h-4 w-4 text-[#D1BA83]" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] uppercase tracking-wide text-neutral-300/70">
                          Difficulty
                        </p>
                        <p className="text-sm font-semibold text-neutral-100">
                          {segment.difficulty}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Main description + highlights */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.35 }}
              className="mt-6 space-y-4"
            >
              <p className="text-neutral-100 text-sm sm:text-base leading-relaxed border-l-4 border-[#1AB7AA] pl-4 py-2 bg-white/5/5 rounded-md">
                {segment.detailedDescription}
              </p>

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                {segment.shortDescription}
              </p>

              {segment.highlights && segment.highlights.length > 0 && (
                <div className="mt-2 rounded-2xl border border-[#1AB7AA]/35 bg-black/40 px-4 py-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="h-4 w-4 text-[#1AB7AA]" />
                    <p className="text-xs font-semibold tracking-wide text-[#CCF5EE] uppercase">
                      Key Highlights
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {segment.highlights.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1AB7AA]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


const Segments = () => {
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (segment) => {
    setSelectedSegment(segment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSegment(null), 300);
  };

  return (
    <section className="px-4 py-10 text-white md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        {/* -------- PAGE HEADER -------- */}
        <header className="rounded-3xl border border-[#D1BA83]/40 bg-gradient-to-br from-[#050506]/70 to-[#1a0f00]/30 backdrop-blur-sm p-8 md:p-10 space-y-6 shadow-[0_0_30px_rgba(245,203,122,0.08)]">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D1BA83]/70 bg-gradient-to-r from-[#F5CB7A]/10 to-[#1AB7AA]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] w-fit">
            <span className="h-[6px] w-[6px] rounded-full bg-[#F5CB7A] animate-pulse" />
            Event Segments
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#F5CB7A] via-[#1AB7AA] to-[#F5CB7A] bg-clip-text text-transparent">
                Segments of the Event
              </span>
            </h1>
            <p className="text-neutral-300 text-base leading-relaxed max-w-3xl">
              Explore our diverse competition segments designed to challenge and inspire
              robotics enthusiasts at every level. Each segment offers a unique opportunity
              to showcase your skills, creativity, and problem-solving abilities.
            </p>
          </motion.div>
        </header>

        {/* -------- SEGMENTS GRID -------- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
        >
          {segmentsData.map((segment, index) => (
            <SegmentCard 
              key={segment.id} 
              segment={segment} 
              index={index}
              onLearnMore={handleLearnMore}
            />
          ))}
        </motion.div>

        {/* -------- SEGMENT DETAIL MODAL -------- */}
        <SegmentDetailModal 
          segment={selectedSegment} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default Segments;