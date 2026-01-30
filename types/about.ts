export type SkillCategory = "Language" | "Frontend" | "Backend" | "Tool";

export type SkillLevel = "Advanced" | "Intermediate" | "Beginner";

export interface Skill {
  name: string;
  category: SkillCategory;
  level?: SkillLevel;
  icon?: string;
}

export interface Activity {
  title: string;
  organization: string;
  period: string;
  desc: string[];
}

export interface Award {
  title: string;
  rank: string;
  organization: string;
  date: string;
  desc: string;
}

export interface Certificate {
  title: string;
  date: string;
  grade: string;
}

export const SKILL_CATEGORIES: { id: SkillCategory; label: string }[] = [
  { id: "Language", label: "Languages" },
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
  { id: "Tool", label: "Tools" },
];

export const MAX_HEIGHT_FOR_3_ROWS = 3 * 44 + 2 * 12; // 44px per row + 12px gap
