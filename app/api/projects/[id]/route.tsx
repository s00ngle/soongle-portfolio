import { NextResponse } from "next/server";
import { projects } from "@/data/projects/projects";
import { Project } from "@/types/projects";

export const GET = async (
  req: Request,
  context: { params: Promise<{ id: string }> },
): Promise<NextResponse<Project | { error: string }>> => {
  const { id } = await context.params;
  const projectId = parseInt(id, 10);

  if (isNaN(projectId)) {
    return NextResponse.json({ error: "Invalid project id" }, { status: 400 });
  }

  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json<Project>(project);
};
