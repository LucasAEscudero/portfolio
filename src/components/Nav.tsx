"use client";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";

import NavItem from "./NavItem";
import { links } from "@/lib/links";

export default function Nav() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <header className="z-[999] relative mb-[7.5rem] sm:mb-[5rem]">
      <motion.div
        className="container fixed top-0 left-1/2 -translate-x-1/2 h-[6rem] sm:h-[2.6rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="fixed left-1/2 h-12 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:text-[#737373] text-gray-800">
            {links.map((link, i) => (
              <NavItem
                key={link.name}
                name={link.name}
                hash={link.hash}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
