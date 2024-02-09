"use client";
import { motion } from "framer-motion";

export default function SectionSeparator() {
  return (
    <motion.div
      className="border-t my-[2.5rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    ></motion.div>
  );
}
