"use client";

import { Activity } from "@/types/about";

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  return (
    <div className="relative">
      <div className="absolute w-3 h-3 bg-neutral-900 dark:bg-neutral-100 rounded-full -left-7.75 top-1.5" />
      <h3 className="text-lg font-bold">{activity.title}</h3>
      <div className="text-neutral-600 dark:text-neutral-400">
        {activity.organization}
      </div>
      <div className="text-sm mb-2 text-neutral-600 dark:text-neutral-400">
        {activity.period}
      </div>
      <ul className="list-disc list-inside text-base space-y-1 text-neutral-700 dark:text-neutral-300">
        {activity.desc.map((item, index) => (
          <li key={index} className="">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityCard;
