import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaRocket, FaServer, FaMobileAlt, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import NameLogo from "../components/ui/NameLogo";
import { useNavigate, Link } from "react-router-dom";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 24,
        stiffness: 120
      }
    }
  };

  const skills = [
    "React", "TypeScript", "Node.js", "Python", "Django", "Next.js", "Tailwind CSS", "Firebase", "MongoDB", "AWS"
  ];

  const featuredProjects = [
    {
      title: "Dream Trust Shipping",
      category: "Full Stack Web App",
      description: "Comprehensive shipping and logistics platform featuring shipment tracking, service insights, and secure payment workflows.",
      tags: ["React", "TypeScript", "Tailwind", "REST API"],
      link: "https://shipping-co-three.vercel.app",
    },
    {
      title: "Certain News",
      category: "News Aggregator",
      description: "Real-time news platform using RSS technology to curate live feeds across multiple topics with instant content discovery.",
      tags: ["React", "RSS Parser", "Tailwind", "Vite"],
      link: "https://appcertain-news.vercel.app",
    },
    {
      title: "Faith Streams",
      category: "Streaming Application",
      description: "Live broadcast and video streaming service integrating Firebase & YouTube API with custom chat and schedule interaction.",
      tags: ["React", "Firebase", "YouTube API", "Tailwind"],
      link: "https://faith-stream-ruddy.vercel.app",
    }
  ];

  const services = [
    {
      icon: FaCode,
      title: "Frontend Engineering",
      description: "Building responsive, modern, and accessible user interfaces using React, TypeScript, and Tailwind CSS with smooth micro-interactions."
    },
    {
      icon: FaServer,
      title: "Backend & API Design",
      description: "Developing robust backend systems, RESTful APIs, and database schemas with Node.js, Express, Python, Django, and MongoDB."
    },
    {
      icon: FaRocket,
      title: "Full-Stack Web Apps",
      description: "Crafting end-to-end web applications from architectural design to deployment, focusing on speed, security, and scalability."
    },
    {
      icon: FaMobileAlt,
      title: "Cloud & Integration",
      description: "Integrating real-time services like Firebase, RSS parsers, payment gateways, and cloud deployment pipelines on Vercel and AWS."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-gray-100 overflow-hidden pt-24 pb-16">
      {/* Background Glows and Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Ambient Orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ left: "5%", top: "10%" }}
      />
      <motion.div
        className="absolute w-[30rem] h-[30rem] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"
        animate={{
          x: [0, -70, 0],
          y: [0, 80, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{ right: "5%", top: "35%" }}
      />

      {/* Subtle Mouse Glow Follower */}
      <motion.div
        className="fixed w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none z-0"
        animate={{
          x: (mousePosition.x / 100) * window.innerWidth - 144,
          y: (mousePosition.y / 100) * window.innerHeight - 144,
        }}
        transition={{ type: "spring", damping: 35, stiffness: 150 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* HERO SECTION */}
        <motion.div
          className="flex flex-col items-center text-center pt-6 pb-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for New Opportunities
            </span>
          </motion.div>

          {/* Name Logo Avatar */}
          <motion.div variants={itemVariants}>
            <NameLogo />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 font-outfit"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Emmanuel Lot
            </span>
          </motion.h1>

          {/* Role Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl font-medium text-cyan-200/90 mb-6 max-w-2xl font-outfit"
            variants={itemVariants}
          >
            Full-Stack Developer & Software Craftsman
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
          >
            I build modern, scalable, and user-centric web applications. Specializing in React, TypeScript, Node.js, and Python to transform ambitious ideas into high-performance digital products.
          </motion.p>

          {/* Skills Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-2.5 max-w-3xl mb-10"
            variants={itemVariants}
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 bg-slate-900/80 backdrop-blur-md rounded-lg text-xs font-medium text-gray-300 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-cyan-950/30 transition-all duration-300 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mb-10"
            variants={itemVariants}
          >
            <button
              onClick={() => navigate("/projects")}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore My Work</span>
              <FaArrowRight className="text-sm" />
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-gray-200 hover:text-white rounded-xl font-semibold border border-white/15 hover:border-white/30 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Let's Connect
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4"
            variants={itemVariants}
          >
            {[
              { Icon: FaGithub, href: "https://github.com/Emmy-A-L", label: "GitHub", hover: "hover:border-cyan-400 hover:text-cyan-400" },
              { Icon: FaLinkedin, href: "https://linkedin.com/in/lot-emmanuel-abiodun", label: "LinkedIn", hover: "hover:border-blue-400 hover:text-blue-400" },
              { Icon: FaTwitter, href: "https://x.com/TheOriginalLot?s=09", label: "Twitter", hover: "hover:border-sky-400 hover:text-sky-400" },
              { Icon: FaEnvelope, href: "mailto:emmanuellot95@gmail.com", label: "Email", hover: "hover:border-emerald-400 hover:text-emerald-400" }
            ].map(({ Icon, href, label, hover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-11 h-11 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-gray-400 ${hover} transition-all duration-300 hover:scale-110 shadow-lg`}
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* METRICS & STATS SECTION */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { metric: "1+", label: "Years Experience", detail: "Hands-on Development" },
            { metric: "7+", label: "Featured Projects", detail: "Shipped & Deployed" },
            { metric: "10+", label: "Tech Stack Tools", detail: "Modern Web Ecosystem" },
            { metric: "100%", label: "Code Quality", detail: "Clean & Maintainable" }
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl glass-card border border-white/10 text-center hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-outfit mb-1 group-hover:scale-105 transition-transform">
                {stat.metric}
              </div>
              <div className="text-sm font-semibold text-gray-200 font-outfit">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.detail}</div>
            </div>
          ))}
        </motion.div>

        {/* SERVICES & CAPABILITIES */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center space-y-3">
            <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest font-mono">Expertise & Services</h2>
            <h3 className="text-3xl sm:text-4xl font-bold font-outfit text-white">What I Bring To The Table</h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              From crafting elegant frontends to architecting robust backends, here is how I help turn concepts into real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl glass-card glass-card-hover border border-white/10 flex items-start gap-5 group"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                  <service.icon className="text-xl" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-100 font-outfit group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FEATURED PROJECTS HIGHLIGHT */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest font-mono">Portfolio Highlights</h2>
              <h3 className="text-3xl sm:text-4xl font-bold font-outfit text-white">Featured Work</h3>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group"
            >
              <span>View All Projects</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <div
                key={i}
                className="rounded-2xl glass-card border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white font-outfit group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-gray-400 font-mono">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 text-xs font-semibold text-gray-300 transition-all duration-300"
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA BANNER */}
        <motion.div
          className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-cyan-950/60 via-purple-950/60 to-slate-950/80 border border-cyan-500/30 text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
              Ready to build something extraordinary together?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Whether you need a web app, a clean frontend interface, or API backend integration, I'm excited to collaborate.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold rounded-xl shadow-lg hover:shadow-cyan-400/30 hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>Get In Touch Now</span>
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HomePage;