import SkillCard from "@/components/about/SkillCard";
import { Skill, SkillCategory } from "@/types/about";

interface SkillContainerProps {
  skills: Skill[];
}

const SkillContainer = ({ skills }: SkillContainerProps) => {
  const categories: { id: SkillCategory; label: string }[] = [
    { id: "Language", label: "Languages" },
    { id: "Frontend", label: "Frontend" },
    { id: "Backend", label: "Backend" },
    { id: "Tool", label: "Tools" },
  ];

  return (
    <div className="flex flex-col gap-8">
      {categories.map((category) => {
        const filteredSkills = skills.filter((s) => s.category === category.id);
        if (filteredSkills.length === 0) return null;

        return (
          <div key={category.id} className="flex flex-col gap-2">
            <h3 className="font-medium text-neutral-500 dark:text-neutral-400">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-3">
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillContainer;
