import React from "react";
import { LampContainer } from "@/components/lamp";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Facebook,
  Linkedin,
  Instagram,
  User,
  Briefcase,
  Newspaper,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <LampContainer
        className="min-h-[65vh] pt-32 md:pt-36 pb-16"
        contentClassName="-translate-y-30 md:-translate-y-44"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center px-4"
        >
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-4xl md:text-6xl font-bold tracking-tight text-transparent">
            Contact Us
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto pt-4">
            We are always happy to assist you with any questions, partnership
            discussions, or clarifications related to Robomania 2.0 or the
            AUST Robotics Club (AUSTRC).
          </p>
        </motion.div>
      </LampContainer>

      {/* Main Content */}
      <div className="relative mt-12 px-4 pb-20 md:px-8 z-10">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-10 border border-white/10 max-w-4xl mx-auto"
          >
            <p className="text-slate-300 text-center text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              For any confusion, sponsorship inquiry, event-related assistance, or official communication — feel free to reach out through the following channels:
            </p>
          </motion.section>

          {/* Official Address */}
          <Section
            icon={<MapPin className="w-8 h-8 text-emerald-400" />}
            title="Official Address"
          >
            <div className="space-y-3 text-slate-300">
              <p className="text-xl font-semibold text-white">
                Ahsanullah University of Science and Technology Robotics Club (AUSTRC)
              </p>

              <a
                href="https://www.google.com/maps?q=141+Love+Road+Tejgaon+Dhaka+1208"
                target="_blank"
                className="flex items-start gap-2 hover:text-emerald-400 transition-colors"
              >
                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                <span>
                  141 & 142, Love Road, Tejgaon Industrial Area, <br />
                  Dhaka – 1208, Bangladesh
                </span>
              </a>

              <div className="pt-4 space-y-2">
                <ContactRow
                  icon={<Mail className="w-5 h-5 text-emerald-400" />}
                  text="austrc@aust.edu"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=austrc@aust.edu"
                />
                <ContactRow
                  icon={<Globe className="w-5 h-5 text-emerald-400" />}
                  text="www.austrc.com"
                  href="https://www.austrc.com"
                />
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <SocialLink icon={<Facebook />} text="Facebook" href="https://www.facebook.com/AustRoboticsClub" />
                <SocialLink icon={<Linkedin />} text="LinkedIn" href="https://www.linkedin.com/company/aust-robotics-club/posts/?feedView=all" />
                
              </div>
            </div>
          </Section>

          {/* Core Contacts */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <Users className="w-12 h-12 text-emerald-500" />
              Core Contacts
            </h2>

            <p className="text-slate-400 text-base md:text-lg">
              For direct communication with our organizing or management team, contact:
            </p>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <ContactCard
                icon={<User />}
                title="General Inquiries & Coordination"
                name="Khalid Hasan Drobo"
                position="President, AUSTRC"
                phone="+880 1316-345727"
                email="president@austrc.com"
                image="https://ik.imagekit.io/mekt2pafz/MSM%20PIC/11.jpg"
              />
              <ContactCard
                icon={<Briefcase />}
                title="Club Administration & Documentation"
                name="Md. Nazmul Islam Sayem"
                position="General Secretary, AUSTRC"
                phone="+880 1521-788690"
                email="gs@austrc.com"
                image="https://ik.imagekit.io/mekt2pafz/MSM%20PIC/2.jpg"
              />
              <ContactCard
                icon={<Briefcase />}
                title="Sponsorship & Partnership"
                name="Safayet Al Asif"
                position="Vice President, AUSTRC / Asst. Director, MSM"
                phone="+880 1880-864777"
                email="vp@austrc.com"
                image="https://ik.imagekit.io/mekt2pafz/MSM%20PIC/3.jpg"
              />
              <ContactCard
                icon={<Newspaper />}
                title="Media & Public Relations"
                name="Md. Meheraj"
                position="Director, MSM Team"
                phone="+880 1609-417195"
                email="director.pr@austrc.com"
                image="https://ik.imagekit.io/mekt2pafz/MSM%20PIC/4.jpg"
              />
            </div>

            {/* Assistant Directors */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Users className="w-6 h-6 text-emerald-400" />
                Assistant Directors (PR & Sponsorship Management)
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <ContactCard
                  icon={<Users />}
                  name="Tahmid Khan"
                  phone="+880 1516-500860"
                  email="ad.pr@austrc.com"
                  image="https://ik.imagekit.io/mekt2pafz/MSM%20PIC/5.jpg"
                  compact
                />
                <ContactCard
                  icon={<Users />}
                  name="Zamiur Rahman Nabid"
                  phone="+880 1919-877740"
                  email="ad.pr@austrc.com"
                  image="https://ik.imagekit.io/mekt2pafz/MSM%20PIC/6.jpg"
                  compact
                />
              </div>

              
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

/* Section Layout Wrapper */
const Section = ({ icon, title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="space-y-6"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
      {icon}
      {title}
    </h2>
    <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-emerald-500/20">
      {children}
    </div>
  </motion.section>
);

const ContactRow = ({ icon, text, href }) => (
  <a
    href={href}
    target="_blank"
    className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
  >
    {icon}
    <span className="text-sm break-all">{text}</span>
  </a>
);

/* Social Link */
const SocialLink = ({ icon, text, href }) => (
  <a
    href={href}
    target="_blank"
    className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </a>
);
const ContactCard = ({
  icon,
  title,
  name,
  position,
  phone,
  email,
  image,
  compact = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        // ⬇️ here: bg + border + backdrop-blur-md
        "bg-[#55411011] border border-[#554110] backdrop-blur-md rounded-2xl p-5 md:p-6 hover:border-[#554110] transition-all",
        !compact && "hover:shadow-xl hover:shadow-[0_0_32px_rgba(85,65,16,0.35)]"
      )}
    >
      <div className="flex flex-row items-stretch gap-5">
        <div className="space-y-4 flex-1">
          {!compact && title && (
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-500/15 rounded-md text-emerald-300">
                {icon}
              </div>
              <h4 className="text-emerald-300 font-semibold text-sm uppercase tracking-wide mt-1">
                {title}
              </h4>
            </div>
          )}

          <div className={cn("space-y-3", compact && "pl-0")}>
            {compact && (
              <div className="flex items-center gap-2 text-emerald-300">
                {icon}
              </div>
            )}

            <div>
              <p className="text-white font-semibold text-lg">{name}</p>
              {position && (
                <p className="text-emerald-100/70 text-sm mt-1">{position}</p>
              )}
            </div>

            <div className="space-y-2 text-emerald-50/90">
              <ContactRow
                icon={<Phone className="w-4 h-4 text-emerald-400" />}
                text={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
              />
              <ContactRow
                icon={<Mail className="w-4 h-4 text-emerald-400" />}
                text={email}
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center shrink-0">
          <img
            src={image}
            alt={`${name} contact visual`}
            className={cn(
              "rounded-xl object-cover border border-[#554110] shadow-lg shadow-[0_0_32px_rgba(85,65,16,0.35)]",
              compact ? "w-20 h-20" : "w-28 h-28 md:w-32 md:h-32"
            )}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
