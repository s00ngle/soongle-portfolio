import ProjectInfo from "./ProjectInfo";
import { projectService } from "@/services/projectService";
import { notFound } from "next/navigation";

interface ProjectDetailContainerProps {
  id: string;
}

const ProjectDetailContainer = async ({ id }: ProjectDetailContainerProps) => {
  const project = await projectService.getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectInfo project={project} />;
};

export default ProjectDetailContainer;
