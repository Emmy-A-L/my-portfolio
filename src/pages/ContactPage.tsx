import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaLinkedin, FaGithub, FaTwitter, FaCopy, FaCheck } from "react-icons/fa";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_USER_ID;

const ContactPage: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const emailAddress = "emmanuellot95@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    if (!form.current) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      () => setStatus("success"),
      () => setStatus("error")
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-gray-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Grid & Ambient Glowing Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto space-y-12"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-outfit text-white">
            Let's Build Together
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Have a project idea, job opportunity, or tech question? Drop a message below or reach out via social channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Copy Email */}
          <motion.div variants={itemVariants} className="md:col-span-5 space-y-6">
            {/* Quick Email Box */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
              <h2 className="text-xl font-bold text-white font-outfit">Direct Email</h2>
              <p className="text-xs text-gray-400">Click below to copy email or send a direct message.</p>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-white/10 text-cyan-300 text-xs font-mono">
                <span className="truncate mr-2">{emailAddress}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                </button>
              </div>
            </div>

            {/* Social Network Cards */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
              <h2 className="text-xl font-bold text-white font-outfit">Social & Networks</h2>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/lot-emmanuel-abiodun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:border-blue-500/40 text-gray-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FaLinkedin className="text-xl text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">LinkedIn Profile</span>
                  </div>
                  <span className="text-xs text-cyan-400 font-mono">Connect →</span>
                </a>

                <a
                  href="https://github.com/Emmy-A-L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-slate-700/40 hover:border-cyan-500/40 text-gray-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FaGithub className="text-xl text-gray-300 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">GitHub Repositories</span>
                  </div>
                  <span className="text-xs text-cyan-400 font-mono">Follow →</span>
                </a>

                <a
                  href="https://x.com/TheOriginalLot?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-sky-600/20 hover:border-sky-500/40 text-gray-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FaTwitter className="text-xl text-sky-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Twitter / X</span>
                  </div>
                  <span className="text-xs text-cyan-400 font-mono">Message →</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Email Form */}
          <motion.div variants={itemVariants} className="md:col-span-7">
            <div className="p-8 rounded-2xl glass-card border border-white/10 space-y-6">
              <h2 className="text-2xl font-bold text-white font-outfit">Send a Message</h2>

              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 font-mono mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all text-sm font-outfit"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 font-mono mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all text-sm font-outfit"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 font-mono mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all text-sm font-outfit resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold font-outfit flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ${
                    status === "sending" ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  <FaPaperPlane className={status === "sending" ? "animate-pulse" : ""} />
                  <span>{status === "sending" ? "Sending Message..." : "Send Message"}</span>
                </button>

                {status === "success" && (
                  <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-center text-sm font-medium font-outfit">
                    🎉 Thank you! Your message has been sent successfully.
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-center text-sm font-medium font-outfit">
                    ⚠️ Failed to send message. Please try emailing directly at emmanuellot95@gmail.com.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
