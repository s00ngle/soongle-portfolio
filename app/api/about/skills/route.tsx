import { NextResponse } from "next/server";
import { skills } from "@/data/about/skills";

export async function GET() {
  return NextResponse.json(skills);
}
