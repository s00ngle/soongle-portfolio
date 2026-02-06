import { aboutService } from "@/services/aboutService";
import ActivityContainer from "./ActivityContainer";

const ActivitySection = async () => {
  const activities = await aboutService.getActivities();

  return (
    <section id="activities" className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold tracking-tight">Activities</h2>
      <ActivityContainer activities={activities} />
    </section>
  );
};

export default ActivitySection;
