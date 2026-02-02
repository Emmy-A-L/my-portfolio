import { useEffect, useState } from "react";
// Note: Replace with your router Link component
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navItems = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/about", id: "about" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  // Check if user has scrolled
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Close mobile menu when clicking outside
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
        delay: 0.2,
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
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const linkVariants: Variants = {
    initial: { y: -20, opacity: 0 },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.7 + index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants: Variants = {
    closed: { x: -50, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  interface Hamburger {
    isOpen: boolean;
  }

  const HamburgerIcon = ({ isOpen }: Hamburger) => (
    <motion.div
      className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer"
      whileTap={{ scale: 0.9 }}
    >
      <motion.span
        className="w-6 h-0.5 bg-white block"
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="w-6 h-0.5 bg-white block mt-1"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="w-6 h-0.5 bg-white block mt-1"
        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out mt-4 w-[95%] max-w-6xl rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl`}
      >
        <div className="relative px-6 py-4">
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10"
            animate={{
              background: [
                "linear-gradient(90deg, rgba(147,51,234,0.1) 0%, rgba(37,99,235,0.1) 50%, rgba(6,182,212,0.1) 100%)",
                "linear-gradient(90deg, rgba(6,182,212,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(37,99,235,0.1) 100%)",
                "linear-gradient(90deg, rgba(37,99,235,0.1) 0%, rgba(6,182,212,0.1) 50%, rgba(147,51,234,0.1) 100%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative flex items-center justify-between">
            {/* Animated Logo */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="relative"
            >
              <a
                href="/"
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent relative z-10 pacifico"
              >
                EL
              </a>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-lg blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={index}
                  className="relative"
                >
                  <Link
                    to={item.href}
                    onClick={() => setActiveLink(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                      activeLink === item.id
                        ? "text-cyan-400"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {activeLink === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

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
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const fileUrl =
                      "/files/Emmanuel Lot_SWE intern.pdf";

                    // Open the file in a new browser tab/window
                    window.open(fileUrl, "_blank");
                  }}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaDownload className="text-sm" />
                  Download CV
                </motion.button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative z-50"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-full left-0 right-0 mt-2 mx-4 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden md:hidden z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-1 mb-6">
                  {navItems.map((item) => (
                    <motion.div key={item.id} variants={mobileItemVariants}>
                      <a
                        href={item.href}
                        onClick={() => {
                          setActiveLink(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                          activeLink === item.id
                            ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-cyan-400 border border-cyan-400/30"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Download CV Button */}
                <motion.div variants={mobileItemVariants}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const fileUrl =
                        "/files/Emmanuel Lot_SWE intern.pdf";

                      // Open the file in a new browser tab/window
                      window.open(fileUrl, "_blank");
                    }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg"
                  >
                    <FaDownload className="text-sm" />
                    Download CV
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
