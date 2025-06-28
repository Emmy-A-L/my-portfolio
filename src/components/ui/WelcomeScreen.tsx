import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import NameLogo from "./NameLogo";

interface WelcomeScreenProps {
  message: string;
  onFinish: () => void;
  fadeDelay?: number;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  message,
  onFinish,
  fadeDelay = 500,
}) => {
  const typed = useTypingEffect(message, 50);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (typed === message) {
      const timer = setTimeout(() => setFadeOut(true), fadeDelay); // Use fadeDelay prop
      return () => clearTimeout(timer);
    }
  }, [typed, message, fadeDelay]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.7 }}
      onAnimationComplete={() => {
        if (fadeOut) onFinish();
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 via-purple-700 to-gray-900 text-white"
    >
      <NameLogo />
      <h1 className="text-2xl md:text-3xl font-bold font-heading text-center max-w-xl">
        {typed}
        <span className="animate-pulse">|</span>
      </h1>
    </motion.div>
  );
};

export default WelcomeScreen;
