import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950/80 border-t border-white/10 pt-12 pb-8 overflow-hidden backdrop-blur-md">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent pacifico">
            Emmanuel Lot
          </Link>
          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            Full-Stack Software Developer dedicated to building intuitive, responsive, and high-performance web applications that bridge ideas and reality.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com/Emmy-A-L"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/lot-emmanuel-abiodun"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://x.com/TheOriginalLot?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-500/10 transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="mailto:emmanuellot95@gmail.com"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-500/10 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider font-outfit">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About & Experience</Link>
            </li>
            <li>
              <Link to="/projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects & Work</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact Me</Link>
            </li>
          </ul>
        </div>

        {/* Direct Contact Info */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider font-outfit">Get in Touch</h4>
          <p className="text-sm text-gray-400">Available for freelance opportunities & full-time engineering roles.</p>
          <a
            href="mailto:emmanuellot95@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:underline"
          >
            <FaEnvelope className="text-xs" /> emmanuellot95@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>© {new Date().getFullYear()} Emmanuel Lot. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed & Built with <FaHeart className="text-pink-500 text-xs inline" /> using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
