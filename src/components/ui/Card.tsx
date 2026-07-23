import React from "react";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export interface CardProps {
  title: string;
  description: string;
  icon?: IconType;
  category?: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  category,
  tags = [],
  liveUrl,
  githubUrl,
  children,
  onClick,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    onClick={onClick}
    className="group relative rounded-2xl glass-card border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-xl"
  >
    <div className="space-y-4">
      {/* Category Badge & Icon */}
      <div className="flex items-center justify-between">
        {Icon ? (
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
            <Icon className="text-xl" />
          </div>
        ) : <div />}

        {category && (
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs font-mono">
            {category}
          </span>
        )}
      </div>

      {/* Title & Description */}
      <div>
        <h3 className="text-xl font-bold text-white font-outfit mb-2 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Tech Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5 font-mono">
              {tag}
            </span>
          ))}
        </div>
      )}

      {children}
    </div>

    {/* Action Links */}
    {(liveUrl || githubUrl) && (
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-md hover:shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt className="text-[10px]" />
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-300"
            title="View Code on GitHub"
          >
            <FaGithub className="text-base" />
          </a>
        )}
      </div>
    )}
  </motion.div>
);

export default Card;
