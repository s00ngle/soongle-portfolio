"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Skill } from "@/types/about";
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

  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors w-fit group">
      {skill.icon && (
        <div className="w-5 h-5 flex items-center justify-center transition-all">
          {!mounted ? (
            <div className="w-5 h-5 bg-neutral-200 dark:bg-neutral-800 rounded-sm animate-pulse" />
          ) : (
            <StackIcon
              name={skill.icon}
              className="w-full h-full"
              variant={resolvedTheme === "dark" ? "dark" : undefined}
            />
          )}
        </div>
      )}
      <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
};

export default SkillCard;
