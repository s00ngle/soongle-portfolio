"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = resolvedTheme === "dark";
  const hoverClass = isDark ? "hover:bg-neutral-800" : "hover:bg-neutral-100";

  return (
    <button
      className={`p-1.5 rounded-full cursor-pointer flex items-center justify-center relative overflow-hidden ${hoverClass}`}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={resolvedTheme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {isDark ? <Moon size={28} /> : <Sun size={28} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeButton;
