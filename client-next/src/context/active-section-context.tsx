"use client";
import { links } from "@/components/nav/Nav";
import { createContext, useContext, useState } from "react";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function ActiveSectionContextProvider({ children }: Props) {
  const [activeSection, setActiveSection] = useState<SectionName>("Perfil");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null)
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );

  return context;
};
