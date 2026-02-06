import { NextResponse } from "next/server";
import { projectService } from "@/services/projectService";

export const GET = async (
  req: Request,
  context: { params: Promise<{ id: string }> },
) => {
  const { id } = await context.params;
  const project = await projectService.getProjectById(id);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
};
