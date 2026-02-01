import { NextResponse } from "next/server";
import { skills } from "@/data/about/skills";
import { Skill } from "@/types/about";

export const GET: () => Promise<NextResponse<Skill[]>> = async () => {
  return NextResponse.json(skills);
};
