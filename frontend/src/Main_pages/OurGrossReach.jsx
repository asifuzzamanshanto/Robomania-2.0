import React from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import { Users, MessageCircle, Share2, Eye, TrendingUp, Activity } from "lucide-react";

// ----- MOCK DATA FOR CHARTS -----
const engagementData = [
  { label: "Jul", value: 1200, trend: 1100 },
  { label: "Aug", value: 3400, trend: 3200 },
  { label: "Sep", value: 2100, trend: 2000 },
  { label: "Oct", value: 1800, trend: 1900 },
];

const interactionData = [
  { label: "Jul", value: 6000, trend: 5800 },
  { label: "Aug", value: 9000, trend: 8700 },
  { label: "Sep", value: 7200, trend: 7000 },
  { label: "Oct", value: 6400, trend: 6200 },
];

const viewBreakdownData = [
  { label: "Followers", value: 83140 },
  { label: "Non-followers", value: 27107 },
];

const conversationsData = [
  { label: "Jul", value: 6, trend: 5 },
  { label: "Aug", value: 18, trend: 17 },
  { label: "Sep", value: 10, trend: 9 },
  { label: "Oct", value: 5, trend: 4 },
];

const ageGenderData = [
  { name: "18–24", value: 61.9 },
  { name: "25–34", value: 33.5 },
  { name: "35–44", value: 2.7 },
  { name: "Other", value: 1.9 },
];

const COLORS = ["#F5CB7A", "#D1BA83", "#8B6A2E", "#3E2A11"];

const metricCardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.25 },
  }),
};

const OurGrossReach = () => {
  return (
    <section className="px-4 py-10 text-white md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        {/* -------- PAGE HEADER -------- */}
        <header className="space-y-5">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D1BA83]/70 bg-gradient-to-r from-[#F5CB7A]/10 to-[#1AB7AA]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#F5CB7A] animate-pulse" />
            Our Gross Reach
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-[#D1BA83]/40 bg-gradient-to-br from-[#050506]/70 to-[#1a0f00]/30 backdrop-blur-sm p-6 shadow-[0_0_30px_rgba(245,203,122,0.08)] space-y-3 text-[15px] leading-relaxed text-neutral-200"
            >
              <p>
                <span className="font-semibold text-[#F5CB7A]">AUSTRC's influence</span> reaches
                well beyond the boundaries of AUST. Through our events, training
                programs and collaborations, we've engaged students from over{" "}
                <span className="font-semibold text-[#1AB7AA]">31 universities nationwide</span>.
              </p>
              <p>
                Our events bring together{" "}
                <span className="font-semibold text-[#1AB7AA]">
                  500+ competitors, multiple sponsors
                </span>{" "}
                and thousands of online and offline audiences — turning every
                edition into a national celebration of robotics, creativity and
                teamwork.
              </p>
              <p>
                By hosting large-scale national events such as{" "}
                <span className="font-semibold text-[#F5CB7A]">
                  AUST Rover Challenge (ARC) and Robomania
                </span>
                , AUSTRC has become a platform where engineering students share
                ideas, showcase innovation and collaborate across institutions.
              </p>
              <p>
                Through <span className="font-semibold text-[#1AB7AA]">Facebook, LinkedIn</span>{" "}
                and <span className="font-semibold text-[#1AB7AA]">Instagram</span>, we connect
                with robotics enthusiasts, mentors and partners nationwide —
                amplifying every on-ground initiative with powerful digital reach.
              </p>
            </motion.div>

            {/* Summary stats card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="backdrop-blur-sm rounded-3xl border border-[#D1BA83]/60 bg-gradient-to-br from-[#050506]/90 to-[#1a0f00]/60 p-6 shadow-[0_0_40px_rgba(245,203,122,0.1)] h-fit"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#D1BA83]">
                    AUST Robotics Club
                  </p>
                  <p className="mt-1 text-xl font-semibold">Digital Footprint</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-r from-[#F5CB7A]/20 to-[#1AB7AA]/20 px-3 py-2 text-right text-[11px] text-[#F5CB7A]">
                  Last 90 days
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1 rounded-2xl bg-gradient-to-br from-black/40 to-[#F5CB7A]/5 p-3 border border-[#F5CB7A]/20">
                  <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    <Users className="h-3.5 w-3.5 text-[#F5CB7A]" />
                    Followers
                  </p>
                  <p className="text-lg font-semibold">8.7k</p>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +11.1% vs previous 90 days
                  </p>
                </div>

                <div className="space-y-1 rounded-2xl bg-gradient-to-br from-black/40 to-[#1AB7AA]/5 p-3 border border-[#1AB7AA]/20">
                  <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    <Eye className="h-3.5 w-3.5 text-[#1AB7AA]" />
                    Total Engagement
                  </p>
                  <p className="text-lg font-semibold">67,756</p>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +114% vs previous 90 days
                  </p>
                </div>

                <div className="space-y-1 rounded-2xl bg-gradient-to-br from-black/40 to-[#F5CB7A]/5 p-3 border border-[#F5CB7A]/20">
                  <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    <MessageCircle className="h-3.5 w-3.5 text-[#F5CB7A]" />
                    Interactions
                  </p>
                  <p className="text-lg font-semibold">26,600</p>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +67.5% vs previous 90 days
                  </p>
                </div>

                <div className="space-y-1 rounded-2xl bg-gradient-to-br from-black/40 to-[#1AB7AA]/5 p-3 border border-[#1AB7AA]/20">
                  <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    <Share2 className="h-3.5 w-3.5 text-[#1AB7AA]" />
                    Total Reach
                  </p>
                  <p className="text-lg font-semibold">100% Organic</p>
                  <p className="text-[11px] text-neutral-400">
                    Across FB · IG · LinkedIn
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* -------- MAIN ANALYTICS GRID -------- */}
        <div className="grid gap-6 lg:grid-cols-3 backdrop-blur-sm">
          {/* Left column (2/3 width on desktop) */}
          <div className="space-y-6 lg:col-span-2">
            {/* Engagement & Interactions */}
            <div className="grid gap-6 md:grid-cols-2">
              <MetricCard title="Engagement Trend" badge="Last 90 days" index={0}>
                <ChartArea data={engagementData} />
              </MetricCard>

              <MetricCard title="Interaction Overview" badge="Last 90 days" index={1}>
                <ChartArea data={interactionData} />
              </MetricCard>
            </div>

            {/* Views & Conversations */}
            <div className="grid gap-6 md:grid-cols-2 backdrop-blur-sm">
              <MetricCard
                title="Views Breakdown"
                badge="Followers vs Non-followers"
                index={2}
              >
                <ChartBar data={viewBreakdownData} />
              </MetricCard>

              <MetricCard
                title="Messaging Conversations Started"
                badge="New threads"
                index={3}
              >
                <ChartArea data={conversationsData} />
              </MetricCard>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6 flex flex-col">
            {/* Age & Gender Pie - Aligned with Interaction Overview */}
            <MetricCard title="Age & Gender Split" badge="Audience snapshot" index={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-52 flex items-center justify-center"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ageGenderData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={75}
                      innerRadius={42}
                      paddingAngle={3}
                      isAnimationActive={true}
                      animationDuration={800}
                      animationEasing="ease-in-out"
                    >
                      {ageGenderData.map((entry, index) => (
                        <Cell
                          key={`slice-${entry.name}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#050509",
                        border: "2px solid #D1BA83",
                        borderRadius: 12,
                        padding: "8px 12px",
                        fontSize: 12,
                      }}
                      formatter={(value) => [`${value}%`, "Share"]}
                    />
                    <Legend
                      verticalAlign="bottom"
                      height={48}
                      wrapperStyle={{ fontSize: 11 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-2 text-[11px] text-neutral-400"
              >
                Audience: <span className="font-semibold text-[#F5CB7A]">23% women</span> ·{" "}
                <span className="font-semibold text-[#F5CB7A]">77% men</span>.
              </motion.p>
            </MetricCard>

            {/* Message Contacts - Aligned with Messaging Conversations Started */}
            <MetricCard title="Message Contacts" badge="Organic outreach" index={5}>
              <dl className="grid grid-cols-2 gap-3 text-[13px] mb-2">
                <div className="rounded-2xl bg-gradient-to-br from-black/40 to-[#1AB7AA]/5 p-3 border border-[#1AB7AA]/20">
                  <dt className="text-neutral-400 flex items-center gap-1">
                    <Activity className="h-3.5 w-3.5 text-[#1AB7AA]" />
                    New contacts
                  </dt>
                  <dd className="mt-1 text-lg font-semibold">66</dd>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-black/40 to-[#F5CB7A]/5 p-3 border border-[#F5CB7A]/20">
                  <dt className="text-neutral-400 flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-[#F5CB7A]" />
                    Returning contacts
                  </dt>
                  <dd className="mt-1 text-lg font-semibold">33</dd>
                </div>
              </dl>

              <p className="text-[11px] text-neutral-400">
                All contacts acquired through{" "}
                <span className="font-semibold text-[#F5CB7A]">100% organic</span>{" "}
                campaigns — no paid media.
              </p>
            </MetricCard>
          </div>
        </div>
      </div>
    </section>
  );
};

// ----- REUSABLE COMPONENTS -----
const MetricCard = ({ title, badge, children, index = 0 }) => {
  return (
    <motion.article
      custom={index}
      variants={metricCardVariants}
      initial="hidden"
      animate="visible"
      className="flex h-full flex-col rounded-3xl border border-[#D1BA83]/50 bg-gradient-to-br from-[#050506]/80 to-[#1a0f00]/40 p-5 shadow-[0_0_30px_rgba(245,203,122,0.08)] hover:shadow-[0_0_40px_rgba(26,183,170,0.12)] transition-all duration-300"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-neutral-50">{title}</h3>
        {badge && (
          <span className="rounded-full bg-gradient-to-r from-[#F5CB7A]/20 to-[#1AB7AA]/20 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#F5CB7A] border border-[#F5CB7A]/30">
            {badge}
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-center">{children}</div>
    </motion.article>
  );
};

const ChartArea = ({ data }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="h-48 w-full"
  >
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F5CB7A" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#F5CB7A" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2214" vertical={false} />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 11, fill: "#b3a48a" }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 11, fill: "#b3a48a" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#050509cc",
            border: "2px solid #F5CB7A",
            borderRadius: 12,
            padding: "8px 12px",
            fontSize: 12,
          }}
          labelStyle={{ color: "#F5CB7A" }}
          cursor={{ stroke: "#F5CB7A", strokeWidth: 2 }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#F5CB7A"
          fillOpacity={1}
          fill="url(#colorValue)"
          strokeWidth={2.5}
          dot={{ r: 4, fill: "#F5CB7A", strokeWidth: 2, stroke: "#050506" }}
          activeDot={{ r: 7, fill: "#F5CB7A" }}
          isAnimationActive={true}
          animationDuration={1200}
          animationEasing="ease-in-out"
        />
      </AreaChart>
    </ResponsiveContainer>
  </motion.div>
);

const ChartBar = ({ data }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="h-48 w-full"
  >
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5CB7A" stopOpacity={1} />
            <stop offset="100%" stopColor="#D1BA83" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2214" vertical={false} />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 11, fill: "#b3a48a" }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 11, fill: "#b3a48a" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#050509cc",
            border: "2px solid #D1BA83",
            borderRadius: 12,
            padding: "8px 12px",
            fontSize: 12,
          }}
          labelStyle={{ color: "#D1BA83" }}
          cursor={{ fill: "#F5CB7A", fillOpacity: 0.1 }}
        />
        <Bar
          dataKey="value"
          radius={[8, 8, 0, 0]}
          fill="url(#colorBar)"
          isAnimationActive={true}
          animationDuration={1000}
          animationEasing="ease-in-out"
        />
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
);

export default OurGrossReach;
