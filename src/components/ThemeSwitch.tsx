"use client";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      title={`Color de fondo: ${theme === "dark" ? "Oscuro" : "Encendido"}`}
      className="container fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
