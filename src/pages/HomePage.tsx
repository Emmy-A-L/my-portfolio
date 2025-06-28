import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import NameLogo from "../components/ui/NameLogo";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100
      }
    }
  };

  const skills = ["React", "TypeScript", "Node.js", "Next.js", "GraphQL", "AWS", "Python", "Django", "MongoDB", "Git"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            left: "10%",
            top: "20%"
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 120, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            right: "10%",
            bottom: "20%"
          }}
        />
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute w-4 h-4 bg-cyan-400 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: "15%",
            top: "60%"
          }}
        />
        <motion.div
          className="absolute w-6 h-6 border-2 border-pink-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            right: "20%",
            top: "40%"
          }}
        />
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-cyan-400/30 rounded-full blur-sm pointer-events-none z-10"
        animate={{
          x: (mousePosition.x / 100) * window.innerWidth - 12,
          y: (mousePosition.y / 100) * window.innerHeight - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Hero Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {/* Avatar with Floating Tech Icons */}
          <NameLogo />

          {/* Name with Typing Effect */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Emmanuel Lot
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            className="text-xl md:text-2xl text-gray-300 mb-8 h-16 flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.span
              key={isLoaded}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Creative Full-Stack Developer
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Passionate about building beautiful, performant, and accessible web experiences 
            that push the boundaries of what's possible on the web.
          </motion.p>

          {/* Skills Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={itemVariants}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  borderColor: "rgba(59, 130, 246, 0.5)"
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            
            <motion.button
              className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(255, 255, 255, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={()=>{}}
            >
              Let's Connect
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mt-12"
            variants={itemVariants}
          >
            {[
              { Icon: FaGithub, href: "https://github.com/Emmy-A-L", color: "hover:text-gray-400" },
              { Icon: FaLinkedin, href: "https://linkedin.com/in/lot-emmanuel-abiodun", color: "hover:text-blue-400" },
              { Icon: FaEnvelope, href: "mailto:emmanuellot95@gmail.com", color: "hover:text-green-400" }
            ].map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 ${color} transition-colors duration-300`}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
              >
                <Icon className="text-xl" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ borderColor: ["rgba(255,255,255,0.3)", "rgba(59,130,246,0.8)", "rgba(255,255,255,0.3)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;