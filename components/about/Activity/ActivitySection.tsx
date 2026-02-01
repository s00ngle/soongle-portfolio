import ActivityContainer from "./ActivityContainer";

const ActivitySection = () => {
  return (
    <section id="activities" className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Activities</h2>
      <ActivityContainer />
    </section>
  );
};

export default ActivitySection;
