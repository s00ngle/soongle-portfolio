"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "@/components/common/Logo";
import ThemeButton from "@/components/common/ThemeButton";
import Nav from "@/components/layout/Nav";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xs border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/70">
      <div className="flex justify-between items-center p-3 sm:px-6 max-w-4xl mx-auto w-full">
        <Logo />
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Nav />
          </div>
          <ThemeButton />
          <button
            ref={buttonRef}
            className="p-2 sm:hidden hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="sm:hidden absolute top-[calc(100%+8px)] right-4 w-48 border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden"
          >
            <div className="p-2 flex flex-col">
              <Nav mobile onClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
