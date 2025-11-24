"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  Cpu,
  Rocket,
  Globe2,
  Sparkles,
  Layers,
} from "lucide-react";
import  OurGrossReach  from "./OurGrossReach.jsx";
import PrevEvents from "./PrevEvents.jsx";
const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  {
    icon: Users,
    label: "Active Members",
    value: "1000+",
    desc: "Robotics enthusiasts engaged in projects, events and learning.",
  },
  {
    icon: Layers,
    label: "Executives",
    value: "90+",
    desc: "Student leaders driving operations, events and mentorship.",
  },
  {
    icon: Cpu,
    label: "Workshops",
    value: "20+",
    desc: "Hands-on sessions covering design, hardware and AI.",
  },
  {
    icon: Rocket,
    label: "National Events",
    value: "5+",
    desc: "Flagship robotics competitions impacting thousands nationwide.",
  },
];

const workshops = [
  {
    title: "PCB Design Workshop",
    desc: "End-to-end journey from schematic to layout optimization and fabrication.",
    image: "https://aust.edu/storage/files/8d9SsRHO4Rcfmu4sGnLJNakx916tpa36G4BZqpYl.jpg",
  },
  {
    title: "Robotic Arm Workshop",
    desc: "Mechanism, kinematics and motion control with sensors and microcontrollers.",
    image: "https://aust.edu/storage/files/dyHnxxhWTC8vX8ou5uWeSjFIWDAEHzMf0WkZlTiT.jpg",
  },
  {
    title: "IoT & Automation Workshop",
    desc: "Smart systems combining sensors, actuators and cloud-connected controllers.",
    image: "https://aust.edu/storage/files/9pMxQnQCKlHFjKbAhNh6kQ4r9PpZINqik4vzzKYo.jpg",
  },
  {
    title: "Drone Technology Workshop",
    desc: "UAV design, aerodynamics, propeller choice and flight control basics.",
    image: "https://aust.edu/storage/files/OyldmWpRfajcamGP9oaM6fj3XZPHYsVHZovTTM4i.jpg",
  },
  {
    title: "Firefighting Robot Workshop",
    desc: "Autonomous hazard-detecting robots built in team-based project sprints.",
    image: "https://aust.edu/storage/files/lLhKxAVqn0oWbckJLf01XKy3MQp5nx5H2ppLPDSo.png",
  },
];

const achievements = [
  {
    title: "Champion – Soccer Bot",
    event: "BAIUST EEE Day 2024",
    image: "https://ik.imagekit.io/mekt2pafz/Achievements/Baiust.jpeg",
  },
  {
    title: "Champion – Soccer Bot",
    event: "JUSC National Science Festival 2024",
    image: "https://ik.imagekit.io/mekt2pafz/Achievements/Jusc.jpeg",
  },
  {
    title: "1st Runner-Up – RoboCup Championship",
    event: "DUET TechFest 2023",
    image: "/images/about/achievements/duet-robocup.jpg",
  },
  {
    title: "1st Runner-Up – Robotics Contest",
    event: "Orbit Engineering Expo 2.0 (Nepal 2024)",
    image: "https://ik.imagekit.io/mekt2pafz/Achievements/Orbit.jpeg",
  },
];

const previousEvents = [
  {
    title: "AUST Rover Challenge (ARC 2022)",
    subtitle: "National Robotics Competition",
    desc: "First-ever ARC with four competitive segments – Rover, Soccer Bot, Line Follower and Hardware Showcase.",
    highlight: "Multi-segment national robotics fest hosted at AUST.",
    image: "https://ik.imagekit.io/mekt2pafz/arc%201.0/banner%201.0?updatedAt=1763666844586",
  },
  {
    title: "AUST Rover Challenge 2.0 (2025)",
    subtitle: "31+ Universities · 500+ Competitors",
    desc: "A landmark national event across five segments with a BDT 1.5+ lakh prize pool.",
    highlight: "One of Bangladesh’s largest university-level rover competitions.",
    image: "https://ik.imagekit.io/mekt2pafz/1000032065%20(1).jpg?updatedAt=1763661292408",
  },
  {
    title: "Robomania 1.0 (2024)",
    subtitle: "Intra AUST Robotics Festival",
    desc: "An intra-university fest giving AUST students their first competitive robotics arena with 200+ participants.",
    highlight: "BDT 33,000 prize pool and multiple exciting segments.",
    image: "https://ik.imagekit.io/mekt2pafz/485658163_695759766349341_2156621265921599892_n.jpg?updatedAt=1763661767040",
  },
];

const About = () => {
  return (
    <div className="space-y-20 pb-20 px-4 md:px-6 lg:px-10 font-noto-kr">
      {/* HERO / ABOUT AUSTRC */}
      <section className="pt-10 md:pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-amber-500/30 bg-black/60 backdrop-blur-2xl p-6 sm:p-10 md:p-12 shadow-[0_0_70px_rgba(0,0,0,0.9)]"
        >
          {/* floating glow blobs */}
          <motion.div
            className="pointer-events-none absolute -top-32 -left-10 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, 10, -5], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -bottom-40 -right-10 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center"
          >
            <motion.div variants={item} className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-amber-200">
                <Sparkles className="h-4 w-4 text-amber-300" />
                <span>About AUSTRC</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="bg-linear-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Robotics for Building
                </span>
                <br />
                <span className="bg-linear-to-r from-amber-500 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                  a Safer Future.
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-amber-100/80 leading-relaxed">
                Ahsanullah University of Science and Technology Robotics Club
                (AUSTRC) is one of AUST&apos;s largest and most active student
                organizations, dedicated to{" "}
                <span className="text-amber-200 font-semibold">
                  innovation, creativity and collaboration
                </span>{" "}
                in robotics, automation and artificial intelligence.
              </p>

              <p className="text-sm sm:text-base text-amber-100/75 leading-relaxed">
                With our motto{" "}
                <span className="italic text-amber-200">
                  &quot;Robotics for Building a Safer Future&quot;
                </span>
                , we connect classroom theory with real-life engineering
                problems through projects, competitions, research and
                hands-on learning.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="flex-1 mt-4 md:mt-0 grid grid-cols-2 gap-4"
            >
              {stats.map((s, idx) => (
                <motion.div
                  key={s.label}
                  variants={item}
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                  }}
                  className="group rounded-2xl border border-amber-400/30 bg-amber-50/5 p-4 sm:p-5 backdrop-blur-xl text-left shadow-[0_0_35px_rgba(0,0,0,0.6)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-amber-500/15 p-2">
                      <s.icon className="h-5 w-5 text-amber-300" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-amber-200/70">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-2xl font-extrabold text-amber-100">
                      {s.value}
                    </p>
                    <p className="text-sm font-semibold text-amber-200/90">
                      {s.label}
                    </p>
                    <p className="mt-1 text-xs sm:text-[0.8rem] text-amber-100/70">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* WORKSHOPS & BOOTCAMPS */}
      <section className="mx-auto max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <motion.div variants={item} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-linear-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              Workshops &amp; Bootcamps
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-amber-100/80 leading-relaxed">
              We believe{" "}
              <span className="font-semibold text-amber-200">
                practical learning
              </span>{" "}
              is the backbone of robotics. Our 20+ workshops transform
              fundamentals into real prototypes, combining programming, design
              and hardware control.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {workshops.map((w) => (
              <motion.article
                key={w.title}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-amber-500/25 bg-black/60 backdrop-blur-xl shadow-[0_0_45px_rgba(0,0,0,0.85)]"
              >
                {/* workshop image */}
                <div className="relative h-40 sm:h-44 overflow-hidden">
                  <motion.img
                    src={w.image}
                    alt={w.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold text-amber-100">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-amber-100/75 leading-relaxed">
                    {w.desc}
                  </p>
                  <div className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-amber-300/80">
                    Bootcamp · Hands-on · Team-based
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="mx-auto max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-amber-500/30 bg-linear-to-br from-black/80 via-zinc-950 to-amber-950/40 p-6 sm:p-8 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.9)]"
        >
          <motion.div
            variants={item}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6 sm:mb-8"
          >
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                <Trophy className="h-4 w-4 text-amber-300" />
                <span>Achievements</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Championing Innovation
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-amber-100/80 leading-relaxed">
                AUSTRC teams have repeatedly proven their{" "}
                <span className="font-semibold text-amber-200">
                  engineering excellence
                </span>{" "}
                across national and international arenas – from soccer bots to
                rover challenges.
              </p>
            </div>

            <motion.div
              variants={item}
              className="mt-2 md:mt-0 rounded-2xl border border-amber-500/40 bg-amber-50/5 px-4 py-3 text-amber-100/80 text-sm sm:text-base"
            >
              <p className="font-semibold text-amber-200">
                Multiple Champion & Runner-Up titles
              </p>
              <p className="text-xs sm:text-sm">
                These victories reflect the dedication, teamwork and technical
                depth of AUSTRC members.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {achievements.map((a) => (
              <motion.div
                key={a.title + a.event}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group overflow-hidden rounded-2xl border border-amber-400/25 bg-black/60 backdrop-blur-xl"
              >
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <motion.img
                    src={a.image}
                    alt={a.event}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="pointer-events-none absolute top-2 left-2 rounded-full bg-amber-500/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-black">
                    Highlight
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-300/80">
                    {a.event}
                  </p>
                  <h3 className="mt-2 text-sm sm:text-base font-semibold text-amber-100">
                    {a.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

<section className="mx-auto max-w-6xl">

  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="space-y-6"
  >
    {/* Heading */}
    <OurGrossReach />


      <div className="mx-auto max-w-6xl  gap-10 rounded-3xl border border-[#554110] p-6 backdrop-blur-md md:flex-row md:p-10">
        <PrevEvents />
      </div>
  </motion.div>
</section>

    </div>
  );
};

export default About;
