import { Activity } from "@/types/about";
import ActivityCard from "./ActivityCard";
import FadeIn from "@/components/common/FadeIn";

interface ActivityContainerProps {
  activities: Activity[];
}

const ActivityContainer = ({ activities }: ActivityContainerProps) => {
  return (
    <FadeIn>
      <div className="border-l-2 border-(--border) ml-2 pl-6 flex flex-col gap-8">
        {activities.map((activity: Activity) => (
          <ActivityCard key={activity.title} activity={activity} />
        ))}
      </div>
    </FadeIn>
  );
};

export default ActivityContainer;
