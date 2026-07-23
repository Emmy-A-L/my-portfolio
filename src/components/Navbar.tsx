import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/about", id: "about" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  // Helper to determine active link
  const getActiveTab = () => {
    const current = navItems.find(item => item.href === location.pathname);
    return current ? current.id : "home";
  };

  const activeLink = getActiveTab();

  // Close mobile menu on route change or click outside
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  const navbarVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1,
      },
    },
  };

  const logoVariants: Variants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.08,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.4 },
    },
  };

  const linkVariants: Variants = {
    initial: { y: -20, opacity: 0 },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + index * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const mobileItemVariants: Variants = {
    closed: { x: -30, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  interface HamburgerProps {
    isOpen: boolean;
  }

  const HamburgerIcon = ({ isOpen }: HamburgerProps) => (
    <div className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer">
      <motion.span
        className="w-6 h-0.5 bg-cyan-400 block rounded-full"
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="w-6 h-0.5 bg-cyan-400 block rounded-full mt-1.5"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="w-6 h-0.5 bg-cyan-400 block rounded-full mt-1.5"
        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] max-w-6xl rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        <div className="relative px-5 py-3 md:px-6">
          {/* Subtle animated border gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 pointer-events-none" />

          <div className="relative flex items-center justify-between">
            {/* Animated Logo */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <Link
                to="/"
                className="flex items-center gap-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white font-bold text-lg pacifico">
                  EL
                </div>
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-base font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent leading-tight font-outfit">
                    Emmanuel Lot
                  </span>
                  <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
                    Software Engineer
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeLink === item.id;
                return (
                  <motion.div
                    key={item.id}
                    variants={linkVariants}
                    initial="initial"
                    animate="animate"
                    custom={index}
                    className="relative"
                  >
                    <Link
                      to={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl block ${
                        isActive
                          ? "text-cyan-400 font-semibold"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-xl border border-cyan-400/30"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Download CV Button */}
              <motion.div
                variants={linkVariants}
                initial="initial"
                animate="animate"
                custom={navItems.length}
                className="ml-4"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.open("/files/Emmanuel-Lot-Resume.pdf", "_blank");
                  }}
                  className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-lg transition-all duration-300"
                >
                  <FaDownload className="text-xs" />
                  <span>Resume</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <HamburgerIcon isOpen={mobileMenuOpen} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-full left-0 right-0 mt-3 bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden md:hidden z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 space-y-2">
                {navItems.map((item) => {
                  const isActive = activeLink === item.id;
                  return (
                    <motion.div key={item.id} variants={mobileItemVariants}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile Download CV Button */}
                <motion.div variants={mobileItemVariants} className="pt-2">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.open("/files/Emmanuel-Lot-Resume.pdf", "_blank");
                    }}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-xl text-sm font-semibold shadow-lg"
                  >
                    <FaDownload className="text-sm" />
                    Download Resume
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
