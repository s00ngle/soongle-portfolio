"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Skill } from "@/types/about";
import { CheckCircle2 } from "lucide-react";
import StackIcon from "tech-stack-icons";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 w-fit">
        <div className="w-5 h-5 bg-neutral-200 dark:bg-neutral-800 rounded-sm animate-pulse" />
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 whitespace-nowrap">
          {skill.name}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors w-fit group">
      {skill.icon && (
        <div className="w-5 h-5 flex items-center justify-center transition-all">
          <StackIcon
            name={skill.icon}
            className="w-full h-full"
            variant={resolvedTheme === "dark" ? "dark" : undefined}
          />
        </div>
      )}
      <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 whitespace-nowrap">
        {skill.name}
      </span>
      {/* 숙련도 뱃지 */}
      {/* {skill.level === "Advanced" && (
        <CheckCircle2 size={14} className="text-blue-500 ml-0.5 opacity-80" />
      )} */}
    </div>
  );
};

export default SkillCard;
