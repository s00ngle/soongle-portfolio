"use client";

import AwardCard from "@/components/about/AwardCard";
import { Award } from "@/types/about";

interface AwardContainerProps {
  awards: Award[];
}

const AwardContainer = ({ awards }: AwardContainerProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {awards.map((award, i) => (
        <AwardCard key={i} award={award} />
      ))}
    </div>
  );
};

export default AwardContainer;
