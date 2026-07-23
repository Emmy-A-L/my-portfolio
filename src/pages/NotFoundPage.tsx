import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFoundPage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="relative min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden"
  >
    {/* Ambient Glows */}
    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
    <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

    <div className="relative z-10 max-w-md mx-auto space-y-6">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="text-8xl sm:text-9xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-outfit"
      >
        404
      </motion.div>

      <h1 className="text-3xl font-bold font-outfit text-white">Page Not Found</h1>
      
      <p className="text-gray-400 text-sm leading-relaxed">
        Oops! The page you are looking for might have been moved, renamed, or doesn't exist.
      </p>

      <div className="pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
        >
          <FaHome />
          <span>Back To Home</span>
        </Link>
      </div>
    </div>
  </motion.div>
);

export default NotFoundPage;