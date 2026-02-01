"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeButton = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  if (!mounted) return <div className="w-10 h-10" />;

  const isDark = resolvedTheme === "dark";
  const hoverClass = isDark ? "hover:bg-neutral-800" : "hover:bg-neutral-100";

  return (
    <button
      className={`p-1.5 rounded-full cursor-pointer flex items-center justify-center relative overflow-hidden ${hoverClass}`}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      <motion.div
        key={resolvedTheme}
        initial={{ y: -20, opacity: 0, rotate: -90 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: 20, opacity: 0, rotate: 90 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDark ? <Moon size={28} /> : <Sun size={28} />}
      </motion.div>
    </button>
  );
};

export default ThemeButton;
