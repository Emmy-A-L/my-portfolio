import { motion } from "framer-motion";
import { FaCode, FaReact, FaRocket } from "react-icons/fa";

const NameLogo = () => {
  return (
    <div className="relative mb-8 flex justify-center">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl relative z-10 pacifico"
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 40px rgba(147, 51, 234, 0.5)",
              "0 0 20px rgba(59, 130, 246, 0.5)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          EL
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
          animate={{
            y: [-10, 0, -10],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          }}
        >
          <FaReact className="text-white text-sm" />
        </motion.div>

        <motion.div
          className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
          animate={{
            y: [0, -10, 0],
            rotate: [0, -360],
          }}
          transition={{
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          }}
        >
          <FaCode className="text-white text-sm" />
        </motion.div>

        <motion.div
          className="absolute top-6 -left-6 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center"
          animate={{
            x: [-5, 5, -5],
            y: [-5, 5, -5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaRocket className="text-white text-xs" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NameLogo;
