"use client";
import { motion } from "framer-motion";

export default function Title({ text }: { text: string }) {
  return (
    <motion.h2
      className="text-3xl text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {text}
    </motion.h2>
  );
}
