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
