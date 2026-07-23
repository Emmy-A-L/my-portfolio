import { useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/ui/Card";
import { FaPython, FaTruck, FaNewspaper } from "react-icons/fa";
import { MdDashboard, MdOutlineLiveTv, MdTravelExplore } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Restaurant Management System",
      category: "API & Backend",
      filterCategory: "API & Backend",
      description: "Comprehensive REST API designed for restaurant management. Features inventory tracking, automated order processing, sales analytics, and customer data management.",
      icon: FaPython,
      githubUrl: "https://github.com/Emmy-A-L/RMS-v-1.0.0.git",
      tags: ["Python", "Django", "REST API", "PostgreSQL"],
    },
    {
      title: "Dream Trust Shipping",
      category: "Full Stack",
      filterCategory: "Full-Stack",
      description: "Full-stack shipping & logistics web application providing shipment tracking, service estimation, customer accounts, and payment workflows.",
      icon: FaTruck,
      liveUrl: "https://shipping-co-three.vercel.app",
      tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    },
    {
      title: "Certain News",
      category: "Frontend & RSS",
      filterCategory: "Frontend",
      description: "Real-time news aggregation platform utilizing RSS feeds to parse, organize, and deliver live headlines across diverse news categories.",
      icon: FaNewspaper,
      liveUrl: "https://appcertain-news.vercel.app",
      tags: ["React", "RSS Parser", "Tailwind CSS", "Vite"],
    },
    {
      title: "Faith Streams",
      category: "Streaming Web App",
      filterCategory: "Full-Stack",
      description: "Modern live broadcast streaming service integrating Firebase authentication, real-time backend state, and YouTube Live API integration.",
      icon: MdOutlineLiveTv,
      liveUrl: "https://faith-stream-ruddy.vercel.app",
      tags: ["React", "Firebase", "YouTube API", "Tailwind CSS"],
    },
    {
      title: "FT-Service Location",
      category: "Location Service",
      filterCategory: "Frontend",
      description: "Location-based loading bay & service provider application with intuitive UI/UX, responsive interactive map views, and optimized user journeys.",
      icon: FaLocationCrosshairs,
      liveUrl: "https://ft-service-and-loading-bays.vercel.app/",
      tags: ["React", "Geolocation", "Tailwind CSS", "UI/UX"],
    },
    {
      title: "Lamtad Travels",
      category: "Travel Platform",
      filterCategory: "Frontend",
      description: "Sleek travel discovery & booking web platform giving users personalized itineraries, destination insights, and booking management.",
      icon: MdTravelExplore,
      liveUrl: "https://lamtad-travel-agency.vercel.app",
      tags: ["React", "TypeScript", "Tailwind CSS", "UI Design"],
    },
    {
      title: "Mini Time Tracking Dashboard",
      category: "Analytics Dashboard",
      filterCategory: "Full-Stack",
      description: "Interactive time tracking & productivity dashboard featuring real-time data sync, categorized activity logs, and analytical insights.",
      icon: MdDashboard,
      liveUrl: "https://time-tracking-dashboard-user.vercel.app",
      tags: ["React", "Firebase", "Tailwind CSS", "Analytics"],
    },
  ];

  const filterCategories = ["All", "Full-Stack", "Frontend", "API & Backend"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.filterCategory === activeFilter);

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-gray-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Grids and Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Header Title */}
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            Portfolio Showcase
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-outfit text-white">
            Featured Projects & Applications
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore a collection of full-stack web applications, APIs, and user interfaces engineered for real-world impact.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {filterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                    : "bg-slate-900/80 text-gray-400 border border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {filteredProjects.map((project, idx) => (
            <Card
              key={idx}
              title={project.title}
              description={project.description}
              category={project.category}
              icon={project.icon}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
