import AwardContainer from "./AwardContainer";

const AwardSection = () => {
  return (
    <section id="awards" className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold tracking-tight">Awards</h2>
      <AwardContainer />
    </section>
  );
};

export default AwardSection;
