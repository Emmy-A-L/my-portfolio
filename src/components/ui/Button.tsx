import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const baseStyles =
  "px-6 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => (
  <motion.button
    whileTap={{ scale: 0.97 }}
    className={`${baseStyles} ${variants[variant]}`}
    {...props}
  >
    {children}
  </motion.button>
);

export default Button;
