import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaAws, FaCode, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiDjango,
  SiNextdotjs,
  SiGit,
  SiPython
} from "react-icons/si";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  const skillCategories = [
    {
      title: "Frontend Engineering",
      skills: [
        { icon: SiReact, name: "React.js", color: "text-cyan-400" },
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
        { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
      ]
    },
    {
      title: "Backend & Systems",
      skills: [
        { icon: SiNodedotjs, name: "Node.js", color: "text-emerald-400" },
        { icon: SiPython, name: "Python", color: "text-amber-400" },
        { icon: SiDjango, name: "Django", color: "text-emerald-500" },
        { icon: SiGit, name: "Git & GitHub", color: "text-orange-400" },
      ]
    },
    {
      title: "Cloud & Databases",
      skills: [
        { icon: SiFirebase, name: "Firebase", color: "text-yellow-400" },
        { icon: SiMongodb, name: "MongoDB", color: "text-emerald-400" },
        { icon: FaAws, name: "AWS", color: "text-amber-500" },
        { icon: VscAzure, name: "Azure", color: "text-blue-500" },
      ]
    }
  ];

  const milestones = [
    {
      year: "2024 - Present",
      title: "Full-Stack Developer",
      description: "Building production-grade web applications with modern frontend frameworks, serverless APIs, RSS aggregators, and shipping platforms.",
      icon: FaCode
    },
    {
      year: "2023 - 2024",
      title: "Software Engineering Mastery",
      description: "Deep-dived into TypeScript, Node.js, Python, Django, database architecture, and full-stack software architecture.",
      icon: FaGraduationCap
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-gray-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto space-y-16"
      >
        {/* Newspaper Editorial Header */}
        <motion.div
          variants={itemVariants}
          className="border-b border-cyan-500/30 pb-6 text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <span>Special Editorial</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-outfit text-white">
            The Developer Chronicle
          </h1>
          <p className="text-xs sm:text-sm text-cyan-400/80 font-mono">
            VOLUME 1 • ISSUE 1 • {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }).toUpperCase()}
          </p>
        </motion.div>

        {/* Main Profile & Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Portrait & Quick Bio */}
          <motion.div variants={itemVariants} className="md:col-span-5 space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-slate-900 shadow-2xl">
                <img
                  src="/Emma.png"
                  alt="Emmanuel Lot"
                  className="w-full aspect-[3/4] object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                  <h3 className="text-xl font-bold text-white font-outfit">Emmanuel Lot</h3>
                  <p className="text-xs text-cyan-300 font-mono">Full-Stack Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Social Link Badges */}
            <div className="p-4 rounded-xl glass-card border border-white/10 flex justify-around items-center">
              {[
                { icon: FaGithub, href: "https://github.com/Emmy-A-L", label: "GitHub", hover: "hover:text-cyan-400" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/lot-emmanuel-abiodun", label: "LinkedIn", hover: "hover:text-blue-400" },
                { icon: FaTwitter, href: "https://x.com/TheOriginalLot?s=09", label: "Twitter", hover: "hover:text-sky-400" },
                { icon: FaEnvelope, href: "mailto:emmanuellot95@gmail.com", label: "Email", hover: "hover:text-emerald-400" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`text-gray-400 ${s.hover} transition-colors text-xl p-2`}
                >
                  <s.icon />
                </a>
              ))}
            </div>

            {/* Key Attributes Card */}
            <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-gray-400">Timezone</span>
                <span className="text-gray-200 font-medium">GMT+1</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-gray-400">Specialty</span>
                <span className="text-cyan-300 font-medium">Full-Stack & React UI</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Availability</span>
                <span className="text-emerald-400 font-semibold">Open for Hire</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Storytelling Bio */}
          <motion.div variants={itemVariants} className="md:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl glass-card border border-white/10 space-y-6 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold font-outfit text-white border-b border-white/10 pb-4">
                Bridging Idea & Reality Through Code
              </h2>

              <p className="text-base text-gray-300 first-letter:text-4xl first-letter:font-bold first-letter:text-cyan-400 first-letter:mr-2 first-letter:float-left">
                As a passionate Full-Stack Developer, Emmanuel Lot has built a reputation for designing robust, user-centric web applications. His development philosophy revolves around combining clean engineering principles with expressive UI design.
              </p>

              <p className="text-gray-300 text-sm sm:text-base">
                Over the course of his engineering journey, Emmanuel has developed impactful web software across diverse domains—including real-time news aggregators, live video streaming interfaces, full-stack logistics platforms, and location-based bay services.
              </p>

              <div className="p-5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 text-sm italic font-outfit">
                "My goal with every line of code is simple: to transform complex backend logic into seamless, intuitive visual interfaces that delight users and deliver measurable value."
              </div>

              <div className="pt-2">
                <h4 className="text-sm font-semibold text-gray-200 font-outfit uppercase tracking-wider mb-3">Core Focus Areas</h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-mono">
                    ⚡ High-Performance React Apps
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-mono">
                    🛡️ REST APIs & Data Schemas
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-mono">
                    🎨 Glassmorphic & Modern UI
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-mono">
                    ☁️ Cloud Integration & Firebase
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TECHNICAL EXPERTISE CATEGORIES */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest font-mono">Capabilities</h2>
            <h3 className="text-3xl font-bold font-outfit text-white">Technical Ecosystem</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-card border border-white/10 space-y-4 hover:border-cyan-500/40 transition-all duration-300">
                <h4 className="text-base font-bold text-cyan-300 font-outfit border-b border-white/10 pb-3">
                  {cat.title}
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-200 group"
                    >
                      <s.icon className={`text-2xl ${s.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                        {s.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* MILESTONE TIMELINE */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest font-mono">Timeline</h2>
            <h3 className="text-3xl font-bold font-outfit text-white">Engineering Journey</h3>
          </div>

          <div className="relative border-l-2 border-cyan-500/30 ml-4 md:ml-32 space-y-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-6 md:pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors" />
                <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-2 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono border border-cyan-500/20">
                      {m.year}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white font-outfit">{m.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* BOTTOM ACTION CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center pt-8 border-t border-white/10"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            <span>Let's Discuss Your Project</span>
            <FaEnvelope className="text-sm" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
