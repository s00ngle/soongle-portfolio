import { NextResponse } from "next/server";
import { projects } from "@/data/projects/projects";

export async function GET() {
  return NextResponse.json(projects);
}
