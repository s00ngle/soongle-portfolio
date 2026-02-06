import { aboutService } from "@/services/aboutService";
import AwardContainer from "./AwardContainer";

const AwardSection = async () => {
  const awards = await aboutService.getAwards();

  return (
    <section id="awards" className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold tracking-tight">Awards</h2>
      <AwardContainer awards={awards} />
    </section>
  );
};

export default AwardSection;
