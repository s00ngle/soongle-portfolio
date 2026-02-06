import ProjectContainer from "./ProjectContainer";
import { projectService } from "@/services/projectService";

const ProjectListSection = async () => {
  const projects = await projectService.getAllProjects();

  return <ProjectContainer projects={projects} />;
};

export default ProjectListSection;
