"use client";

import ActivityCard from "@/components/about/ActivityCard";
import { Activity } from "@/types/about";

interface ActivityContainerProps {
  activities: Activity[];
}

const ActivityContainer = ({ activities }: ActivityContainerProps) => {
  return (
    <div className="border-l-2 border-(--border) ml-2 pl-6 flex flex-col gap-8">
      {activities.map((activity, i) => (
        <ActivityCard key={i} activity={activity} />
      ))}
    </div>
  );
};

export default ActivityContainer;
