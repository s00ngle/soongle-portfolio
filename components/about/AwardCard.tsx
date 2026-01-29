"use client";

import Badge from "@/components/common/Badge";
import { Award } from "@/types/about";

interface AwardCardProps {
  award: Award;
}

const AwardCard = ({ award }: AwardCardProps) => {
  return (
    <div className="flex flex-col gap-1 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all hover:shadow-md">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold">{award.title}</h3>
        <Badge
          backgroundColor="bg-violet-100 dark:bg-violet-900/30"
          textColor="text-violet-800 dark:text-violet-300"
        >
          {award.rank}
        </Badge>
      </div>
      <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {award.organization}
      </div>
      <div className="text-sm text-neutral-500 mb-1">{award.date}</div>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
        {award.desc}
      </p>
    </div>
  );
};

export default AwardCard;
