"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { Project } from "@/types/projects";

interface ProjectContainerProps {
  projects: Project[];
}

const ProjectContainer = ({ projects }: ProjectContainerProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectContainer;
