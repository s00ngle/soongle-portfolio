"use client";

import { SkillCategorySection } from "./SkillCategorySection";
import { Skill, SKILL_CATEGORIES } from "@/types/about";
import { useQuery } from "@tanstack/react-query";
import FadeIn from "@/components/common/FadeIn";
import Loading from "@/components/common/Loading";

const fetchSkills = async () => {
  const res = await fetch("/api/about/skills");
  return res.json();
};

const SkillContainer = () => {
  const { data: skills = [], isLoading: loadingSkills } = useQuery<Skill[]>({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  return loadingSkills ? (
    <Loading />
  ) : (
    <FadeIn>
      <div className="flex flex-col gap-8">
        {SKILL_CATEGORIES.map((category) => {
          const filteredSkills = skills.filter(
            (s) => s.category === category.id,
          );
          if (filteredSkills.length === 0) return null;

          return (
            <SkillCategorySection
              key={category.id}
              category={category}
              skills={filteredSkills}
            />
          );
        })}
      </div>
    </FadeIn>
  );
};

export default SkillContainer;
