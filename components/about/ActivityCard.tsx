"use client";

import { Activity } from "@/types/about";

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  return (
    <div className="relative">
      <div className="absolute w-3 h-3 bg-neutral-900 dark:bg-neutral-100 rounded-full -left-[31px] top-1.5" />
      <div className="text-sm text-neutral-500 mb-1">{activity.period}</div>
      <h3 className="text-lg font-bold">{activity.title}</h3>
      <div className="text-neutral-600 dark:text-neutral-400 mb-2">
        {activity.organization}
      </div>
      <p className="text-neutral-500 text-sm">{activity.desc}</p>
    </div>
  );
};

export default ActivityCard;
