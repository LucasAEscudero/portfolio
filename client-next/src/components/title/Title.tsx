"use client";
import { motion } from "framer-motion";

export default function Title({
  text,
  marginBottom,
}: {
  text: string;
  marginBottom: number;
}) {
  return (
    <motion.h2
      className={`text-3xl text-center mb-${marginBottom}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {text}
    </motion.h2>
  );
}
