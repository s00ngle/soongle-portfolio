"use client";

import Badge from "@/components/common/Badge";
import { motion, cubicBezier } from "framer-motion";

export default function Home() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center pt-24 pb-12"
      variants={containerVars}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVars}>
        <Badge
          backgroundColor="bg-transparent"
          textColor="text-blue-500"
          borderColor="border-blue-500"
          size="md"
        >
          Front-end Developer
        </Badge>
      </motion.div>
      <motion.h1
        variants={itemVars}
        className="text-5xl sm:text-7xl font-bold tracking-tight text-center mt-2 mb-6 leading-snug"
      >
        안녕하세요,
        <br />
        <span className="text-blue-500">프론트엔드</span> 개발자
        <br />
        <span className="text-gray-500">김용순</span>입니다.
      </motion.h1>
      <motion.p
        variants={itemVars}
        className="max-w-xl text-lg text-neutral-600 dark:text-neutral-400 text-center leading-relaxed"
      >
        사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하는
        것을 목표로 합니다. 함께 세상을 놀라게 할 프로젝트를 만들어가고
        싶습니다.
      </motion.p>
      <motion.div variants={itemVars} className="mt-10 flex gap-4">
        <button className="px-6 py-2.5 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium hover:scale-105 transition-transform cursor-pointer">
          프로젝트 보기
        </button>
        <button className="px-6 py-2.5 rounded-full border border-(--border) font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer">
          문의하기
        </button>
      </motion.div>
    </motion.div>
  );
}
