import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

// Import segment images
import SoccerBotImg from "../assets/Images/Soccer_Bot.png";
import LineFollowingImg from "../assets/Images/Line_Following_Robot.png";
import InnovatorsImg from "../assets/Images/Innovators_arena.png";
import CircuitWizardryImg from "../assets/Images/CIRCUIT_Wizardy.png";
import CadysseyImg from "../assets/Images/Cadyssey.png";
import RoboProjectImg from "../assets/Images/RoboProject_Hackathon.png";
import ADCanvasImg from "../assets/Images/ADCanvas.png";

const segmentsData = [
  {
    id: 1,
    name: "Soccer Bot Challenge",
    image: SoccerBotImg,
    shortDescription:
      "Join us in the Soccer Bot Challenge, where robotics and soccer meet. Teams will design and program autonomous robots that can kick a ball and score goals. Test your creativity and technical skills while competing to become the ultimate soccer bot champions.",
    detailedDescription:
      "A dynamic competition where custom-built robots attempt to outplay each other on the field using autonomous movement and ball-control mechanisms. This segment highlights teamwork, robotics engineering, and AI-driven decision-making. A strong attraction for sponsors interested in innovation and high-engagement events.",
  },
  {
    id: 2,
    name: "Line Following Robot",
    image: LineFollowingImg,
    shortDescription:
      "In the Line Following Robot challenge, participants will build a robot capable of autonomously navigating a path marked with lines. Perfect for those who want to test their engineering and programming skills in a fun and competitive setting.",
    detailedDescription:
      "Participants develop robots that navigate tracks with precision using sensor-based guidance and control logic. This event demonstrates practical applications of automation and embedded intelligence. It offers sponsors strong visibility in a core robotics skill-building segment.",
  },
  {
    id: 3,
    name: "Innovators' Arena",
    image: InnovatorsImg,
    shortDescription:
      "The Project Showcase gives participants the chance to display their innovative robotics projects. Whether it's an individual or team effort, this is the platform to showcase your creativity, design skills and problem-solving abilities to a wider audience.",
    detailedDescription:
      "A curated showcase of original robotics projects that reflect creativity, research, and engineering problem-solving. This platform allows young innovators to present impactful ideas with real-world potential. Sponsors gain direct access to emerging talent and breakthrough concepts.",
  },
  {
    id: 4,
    name: "Circuit Wizardry",
    image: CircuitWizardryImg,
    shortDescription:
      "Circuit Solve is a challenge designed for those with a passion for electrical engineering. Teams will solve complex circuit problems, testing their knowledge in circuit design, troubleshooting and optimization. A great way to put your theoretical learning into practical use.",
    detailedDescription:
      "A technical challenge where teams analyze, design, and troubleshoot electrical circuits under time constraints. It emphasizes analytical thinking, practical EEE skills, and strong conceptual understanding. Sponsors can engage with participants who are passionate about core engineering fundamentals.",
  },
  {
    id: 5,
    name: "Cadyssey",
    image: CadysseyImg,
    shortDescription:
      "In the CAD Design segment, participants will create precise digital models of mechanical or electrical systems using CAD software. Ideal for those who want to showcase their 3D design skills and gain a deeper understanding of engineering designs in the virtual space.",
    detailedDescription:
      "A design-focused segment where participants craft detailed 2D and 3D models using professional CAD tools. It showcases visualization skills, design accuracy, and engineering creativity. A valuable opportunity for sponsors to associate with future designers and industry-ready talent.",
  },
  {
    id: 6,
    name: "RoboProject Hackathon",
    image: RoboProjectImg,
    shortDescription:
      "The Mini Robotics Hackathon is a fast-paced event where participants will work on building mini robots under tight deadlines. With limited resources and time, this event challenges your problem-solving and quick-thinking abilities.",
    detailedDescription:
      "An intensive build sprint where teams create compact robots from limited components within a short timeframe. The segment highlights rapid engineering, adaptability, and effective teamwork. Sponsors benefit from alignment with fast-paced innovation and practical robotics development.",
  },
  {
    id: 7,
    name: "ADCanvas",
    image: ADCanvasImg,
    shortDescription:
      "The AD Segment is a unique opportunity to explore the intersection of robotics and advertising. Participants will design creative ad campaigns utilizing robotics technology to attract attention and engage audiences.",
    detailedDescription:
      "A creative competition where participants craft advertising concepts that integrate robotics to deliver powerful messaging. It blends technology with marketing imagination, offering a fresh perspective on tech-driven communication. Sponsors gain exposure through inventive, brand-focused ideas.",
  },
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
      className="relative rounded-3xl border border-[#D1BA83]/50 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(26,183,170,0.2)]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050506]/80 to-[#1a0f00]/40" />

      {/* Hover overlay */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#1AB7AA]/20 to-transparent"
        whileHover={{ opacity: 1 }}
      />

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col">
        {/* Image section */}
        <motion.div
          className="mb-4 w-full h-64 rounded-2xl overflow-hidden bg-black/30 border border-[#D1BA83]/30 flex items-center justify-center group-hover:border-[#1AB7AA]/50 transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
          className="text-lg font-bold text-[#F5CB7A] mb-3 leading-tight"
          whileHover={{ color: "#1AB7AA" }}
          transition={{ duration: 0.2 }}
        >
          {segment.name}
        </motion.h3>

        {/* Description - Always visible */}
        <motion.p 
          className="text-sm text-neutral-300 leading-relaxed mb-3 line-clamp-3"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {segment.shortDescription}
        </motion.p>

        {/* Spacer to push button down */}
        <div className="flex-grow" />

        {/* Learn more button */}
        <motion.button
          whileHover={{ x: 4, color: "#1AB7AA" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onLearnMore(segment)}
          className="flex items-center gap-2 text-sm font-semibold text-[#1AB7AA] hover:text-[#F5CB7A] transition-colors duration-200"
        >
          Learn More
          <motion.div
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
          </motion.div>
        </motion.button>
      </div>

      {/* Border shine effect */}
      <motion.div 
        className="absolute inset-0 rounded-3xl border border-gradient-to-r from-[#F5CB7A]/0 via-[#F5CB7A]/10 to-[#F5CB7A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

// Detail Modal Component
const SegmentDetailModal = ({ segment, isOpen, onClose }) => {
  if (!isOpen || !segment) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative rounded-3xl border border-[#D1BA83]/60 bg-gradient-to-br from-[#050506]/95 to-[#1a0f00]/70 p-8 md:p-10 shadow-[0_0_60px_rgba(245,203,122,0.2)] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#D1BA83]/20 hover:bg-[#1AB7AA]/30 transition-colors duration-200"
        >
          <X className="h-5 w-5 text-[#F5CB7A]" />
        </motion.button>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-6 w-full h-80 rounded-2xl overflow-hidden bg-black/30 border border-[#D1BA83]/30 flex items-center justify-center"
        >
          <img
            src={segment.image}
            alt={segment.name}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-[#F5CB7A] via-[#1AB7AA] to-[#F5CB7A] bg-clip-text text-transparent">
            {segment.name}
          </span>
        </motion.h2>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-4"
        >
          <p className="text-neutral-200 text-base leading-relaxed border-l-4 border-[#1AB7AA] pl-4 py-2">
            {segment.detailedDescription}
          </p>

          <p className="text-neutral-300 text-sm leading-relaxed">
            {segment.shortDescription}
          </p>
        </motion.div>

        {/* Close button at bottom */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-[#F5CB7A] to-[#1AB7AA] text-black font-semibold hover:shadow-[0_0_20px_rgba(245,203,122,0.4)] transition-all duration-300"
        >
          Close
        </motion.button>
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