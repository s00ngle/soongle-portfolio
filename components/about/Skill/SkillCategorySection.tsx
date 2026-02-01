import { ChevronDown } from "lucide-react";
import SkillCard from "@/components/about/Skill/SkillCard";
import { Skill, SkillCategory } from "@/types/about";
import { useExpandableSection } from "@/hooks/about/useExpandableSection";
import { MAX_HEIGHT_FOR_3_ROWS } from "@/types/about";

interface SkillCategorySectionProps {
  category: { id: SkillCategory; label: string };
  skills: Skill[];
}

export const SkillCategorySection = ({
  category,
  skills,
}: SkillCategorySectionProps) => {
  const {
    isExpanded,
    setIsExpanded,
    showMoreButton,
    contentRef,
    containerRef,
    getMaxHeight,
  } = useExpandableSection({ maxHeightFor3Rows: MAX_HEIGHT_FOR_3_ROWS });

  return (
    <div className="flex flex-col gap-2" ref={containerRef}>
      <h3 className="font-medium text-neutral-500 dark:text-neutral-400">
        {category.label}
      </h3>
      <div className="relative">
        <div
          ref={contentRef}
          className="flex flex-wrap gap-x-3 gap-y-3 transition-all duration-500 ease-in-out overflow-hidden"
          style={{
            maxHeight: getMaxHeight(),
          }}
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
      {showMoreButton && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="cursor-pointer flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors w-fit mt-1"
        >
          <span>{isExpanded ? "접기" : "더보기"}</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  );
};
