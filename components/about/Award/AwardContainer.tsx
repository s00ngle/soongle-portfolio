"use client";

import AwardCard from "@/components/about/Award/AwardCard";
import FadeIn from "@/components/common/FadeIn";
import Loading from "@/components/common/Loading";
import { Award } from "@/types/about";
import { useQuery } from "@tanstack/react-query";

const fetchAwards = async () => {
  const res = await fetch("/api/about/awards");
  return res.json();
};

const AwardContainer = () => {
  const { data: awards = [], isLoading: loadingAwards } = useQuery<Award[]>({
    queryKey: ["awards"],
    queryFn: fetchAwards,
  });

  return loadingAwards ? (
    <Loading />
  ) : (
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
