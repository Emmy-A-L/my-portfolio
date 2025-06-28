import React from "react";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";

export interface CardProps {
  title: string;
  description: string;
  icon?: IconType;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  children,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start gap-3 hover:shadow-2xl transition-shadow min-h-[200px]"
  >
    {Icon && <Icon className="text-3xl text-blue-500 mb-2" />}
    <h3 className="text-xl font-semibold font-heading mb-1">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-2">{description}</p>
    {children}
  </motion.div>
);

export default Card;
