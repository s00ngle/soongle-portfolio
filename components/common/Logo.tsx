"use client";

import { CodeXml } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link href="/">
      <motion.div
        whileHover={{ scale: 1.2, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        className="text-neutral-900 dark:text-white hover:text-blue-500"
      >
        <CodeXml size={40} strokeWidth={2.5} />
      </motion.div>
    </Link>
  );
};

export default Logo;
