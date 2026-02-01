"use client";
import { useQuery } from "@tanstack/react-query";
import { Activity } from "@/types/about";
import ActivityCard from "./ActivityCard";
import Loading from "@/components/common/Loading";
import FadeIn from "@/components/common/FadeIn";

const fetchActivities = async () => {
  const res = await fetch("/api/about/activities");
  return res.json();
};

const ActivityContainer = () => {
  const { data: activities = [], isLoading: loadingActivities } = useQuery<
    Activity[]
  >({
    queryKey: ["activities"],
    queryFn: fetchActivities,
  });

  return loadingActivities ? (
    <Loading />
  ) : (
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
