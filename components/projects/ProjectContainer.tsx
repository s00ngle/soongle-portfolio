import ProjectCard from "./ProjectCard";
import { Project } from "@/types/projects";
import FadeIn from "@/components/common/FadeIn";

interface ProjectContainerProps {
  projects: Project[];
}

const ProjectContainer = ({ projects }: ProjectContainerProps) => {
  return (
    <FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </FadeIn>
  );
};

export default ProjectContainer;
