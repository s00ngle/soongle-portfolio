import { NextResponse } from "next/server";
import { projects } from "@/data/projects/projects";
import { Project } from "@/types/projects";

export async function GET() {
  const projectList: Project[] = projects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    tags: project.tags,
    thumbnailImage: project.thumbnailImage,
  }));

  return NextResponse.json(projectList);
}
