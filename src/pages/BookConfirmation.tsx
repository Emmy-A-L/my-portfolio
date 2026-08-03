import React from "react";
import { motion, type Variants } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaEnvelope, FaClock, FaHome, FaArrowRight, FaCalendarPlus, FaDownload } from "react-icons/fa";

const BookConfirmation: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const dateParam = searchParams.get("date") || "";
  const timeParam = searchParams.get("time") || "";
  const service = searchParams.get("service") || "Discovery Call";

  // Format the date parameter into a friendly format (e.g. Wednesday, August 15, 2026)
  let formattedDate = "";
  if (dateParam) {
    try {
      const d = new Date(dateParam + "T00:00:00");
      formattedDate = d.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (e) {
      formattedDate = dateParam;
    }
  }

  // Format the 24h time parameter into 12h format (e.g. 2:30 PM)
  let formattedTime = "";
  if (timeParam) {
    try {
      const [hours, minutes] = timeParam.split(":");
      const h = parseInt(hours, 10);
      const ampm = h >= 12 ? "PM" : "AM";
      const displayHours = h % 12 || 12;
      formattedTime = `${displayHours}:${minutes} ${ampm}`;
    } catch (e) {
      formattedTime = timeParam;
    }
  }

  // Generate dynamic Google Calendar template link
  const getGoogleCalendarUrl = () => {
    if (!dateParam || !timeParam) return "";
    const cleanDate = dateParam.replace(/-/g, "");
    const cleanTime = timeParam.replace(/:/g, "") + "00";
    const startDateStr = `${cleanDate}T${cleanTime}`;

    // Default duration is 30 mins
    const [hours, minutes] = timeParam.split(":").map(Number);
    let endHours = hours;
    let endMinutes = minutes + 30;
    if (endMinutes >= 60) {
      endMinutes -= 60;
      endHours += 1;
    }
    const endHoursStr = String(endHours).padStart(2, "0");
    const endMinutesStr = String(endMinutes).padStart(2, "0");
    const endDateStr = `${cleanDate}T${endHoursStr}${endMinutesStr}00`;

    const text = encodeURIComponent(`Sync Session: ${service} x Emmanuel Lot`);
    const details = encodeURIComponent(
      `Hi ${name || "there"},\n\nThanks for booking a session with me!\n\nHere is what we will cover:\n- Project scope & technical roadmap\n- Design & architecture preferences\n- Timelines, milestones & deliverables\n\nGoogle Meet details have been dispatched to your email.`
    );
    const location = encodeURIComponent("Google Meet (Meeting details in email)");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${startDateStr}/${endDateStr}&details=${details}&location=${location}`;
  };

  // Generate downloadable ICS file content
  const getIcsFileContent = () => {
    if (!dateParam || !timeParam) return "";
    const cleanDate = dateParam.replace(/-/g, "");
    const cleanTime = timeParam.replace(/:/g, "") + "00";

    const [hours, minutes] = timeParam.split(":").map(Number);
    let endHours = hours;
    let endMinutes = minutes + 30;
    if (endMinutes >= 60) {
      endMinutes -= 60;
      endHours += 1;
    }
    const endHoursStr = String(endHours).padStart(2, "0");
    const endMinutesStr = String(endMinutes).padStart(2, "0");
    const endDateStr = `${cleanDate}T${endHoursStr}${endMinutesStr}00`;

    const title = `Sync Session: ${service} x Emmanuel Lot`;
    const description = `Hi ${name || "there"},\n\nThanks for booking a session with me! We will discuss your project scope and timelines.`;

    const icsLines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Emmanuel Lot//Portfolio//EN",
      "BEGIN:VEVENT",
      `UID:booking-${Date.now()}@emmanuellot.com`,
      `DTSTAMP:${cleanDate}T000000`,
      `DTSTART:${cleanDate}T${cleanTime}`,
      `DTEND:${cleanDate}T${endDateStr.split("T")[1]}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      "LOCATION:Google Meet",
      "END:VEVENT",
      "END:VCALENDAR",
    ];

    return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsLines.join("\r\n"))}`;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.15 },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } },
  };

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-gray-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
      {/* Grid Pattern and Glow Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: "12s" }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-2xl w-full"
      >
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 shadow-2xl space-y-8 text-center bg-slate-900/40 backdrop-blur-xl">
          
          {/* Animated SVG Checkmark Shield */}
          <motion.div variants={childVariants} className="flex justify-center">
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 shadow-inner group">
              <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-md group-hover:bg-cyan-500/10 transition-colors" />
              <svg
                className="w-12 h-12 text-cyan-400 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  variants={pathVariants}
                  d="M20 6L9 17l-5-5"
                />
              </svg>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={childVariants} className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest">
              Booking Confirmed
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-outfit text-white">
              Thank You for Booking!
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
              Your appointment request was successful. Let's make something amazing.
            </p>
          </motion.div>

          {/* Interactive Booking Summary Card */}
          <motion.div variants={childVariants}>
            {dateParam && timeParam ? (
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 text-left space-y-4 shadow-lg">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono">
                  Session Summary
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {name && (
                    <div className="space-y-1">
                      <span className="text-[11px] text-gray-500 uppercase tracking-wide font-mono block">Attendee</span>
                      <span className="text-sm font-semibold text-white font-outfit">{name}</span>
                    </div>
                  )}

                  <div className="space-y-1">
                    <span className="text-[11px] text-gray-500 uppercase tracking-wide font-mono block">Service</span>
                    <span className="text-sm font-semibold text-white font-outfit">{service}</span>
                  </div>

                  <div className="space-y-1 flex items-start gap-2.5 sm:col-span-2 border-t border-white/5 pt-3">
                    <FaCalendarAlt className="text-cyan-400 mt-1 shrink-0" />
                    <div>
                      <span className="text-[11px] text-gray-500 uppercase tracking-wide font-mono block">Date & Time</span>
                      <span className="text-sm font-semibold text-white font-outfit block">
                        {formattedDate}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5">
                        <FaClock className="text-[10px]" />
                        {formattedTime} (GMT+1 / Local Time)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Calendar Add Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={getGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/40 text-xs font-semibold text-gray-300 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaCalendarPlus className="text-sm" />
                    <span>Add to Google Calendar</span>
                  </a>

                  <a
                    href={getIcsFileContent()}
                    download="emmanuel-lot-sync.ics"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/40 text-xs font-semibold text-gray-300 hover:text-purple-300 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaDownload className="text-sm" />
                    <span>Download iCal / ICS File</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 text-center space-y-3 shadow-lg">
                <FaEnvelope className="text-cyan-400 text-3xl mx-auto mb-2 animate-bounce" style={{ animationDuration: "3s" }} />
                <p className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
                  Your appointment details, direct video conference link (Google Meet), and instructions have been sent to your email.
                </p>
                {email && (
                  <span className="inline-block text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full font-mono font-medium">
                    {email}
                  </span>
                )}
              </div>
            )}
          </motion.div>

          {/* Next Steps Section */}
          <motion.div variants={childVariants} className="text-left space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 font-mono text-center">
              What Happens Next?
            </h3>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Check Your Inbox",
                  desc: "A confirmation email has been dispatched with direct session details, connection instructions, and calendars.",
                },
                {
                  step: "2",
                  title: "Prepare Your Discussion",
                  desc: "Review design elements, technical features, budgets, or timeline scopes so we can jump straight into action.",
                },
                {
                  step: "3",
                  title: "Join the Meeting",
                  desc: "Click the conference link inside the confirmation email at the scheduled date and time. Let's build together!",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    {item.step}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-200 font-outfit">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Buttons to navigate away */}
          <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => navigate("/")}
              className="flex-1 py-3.5 px-6 bg-slate-950 hover:bg-slate-900 text-gray-300 hover:text-white rounded-xl font-bold font-outfit border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaHome className="text-sm" />
              <span>Back to Home</span>
            </button>

            <button
              onClick={() => navigate("/projects")}
              className="flex-1 py-3.5 px-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-xl font-bold font-outfit shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Projects</span>
              <FaArrowRight className="text-xs" />
            </button>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default BookConfirmation;
