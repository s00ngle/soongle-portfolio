import AwardCard from "@/components/about/Award/AwardCard";
import FadeIn from "@/components/common/FadeIn";
import { Award } from "@/types/about";

interface AwardContainerProps {
  awards: Award[];
}

const AwardContainer = ({ awards }: AwardContainerProps) => {
  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {awards.map((award, i) => (
          <AwardCard key={i} award={award} />
        ))}
      </div>
    </FadeIn>
  );
};

export default AwardContainer;
