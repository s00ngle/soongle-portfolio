"use client";

import { SkillCategorySection } from "./SkillCategorySection";
import { Skill, SKILL_CATEGORIES } from "@/types/about";
import FadeIn from "@/components/common/FadeIn";

interface SkillContainerProps {
  skills: Skill[];
}

const SkillContainer = ({ skills }: SkillContainerProps) => {
  return (
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
