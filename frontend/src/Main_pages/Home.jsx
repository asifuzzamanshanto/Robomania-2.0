import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const headline = "Robomania 2.0 ";

  return (
    <section className="px-4 py-10 md:py-20 font-noto-kr">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
        {/* LEFT: text area */}
        <div className="flex-1 space-y-10">
          {/* Motion label over the title */}
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-[10px] text-[11px] tracking-[0.18em] uppercase text-teal-100/80"
          >
            AUST Robotics Club Presents
          </motion.span>

          <h1 className="relative z-10 max-w-xl text-left  font-bold text-slate-100 ">
            {headline.split(" ").map((word, index) => (
              <motion.span
                key={word + index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0.2 + index * 0.08,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block text-7xl"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="relative z-10 mt-2 max-w-md text-left text-[16px] font-normal text-teal-100/80"
          >
            Join us for a week of robots, rivalry and real innovation at AUST.
            Build with your team, compete in multiple segments, and be part of
            RoBomania 2.0.
          </motion.p>
        </div>

        {/* RIGHT: placeholder for cards / image / etc. */}
        <div className="flex-1">
          <div className="h-[260px] w-full rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md">
            {/* Your right-side content goes here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
