"use client";

import { Skill } from "@/types/about";
import { SkillCategorySection } from "./SkillCategorySection";
import { SKILL_CATEGORIES } from "@/types/about";

interface SkillContainerProps {
  skills: Skill[];
}

const SkillContainer = ({ skills }: SkillContainerProps) => {
  return (
    <div className="flex flex-col gap-8">
      {SKILL_CATEGORIES.map((category) => {
        const filteredSkills = skills.filter((s) => s.category === category.id);
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
  );
};

export default SkillContainer;
