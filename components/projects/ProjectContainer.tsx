"use client";

import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/common/Loading";
import FadeIn from "@/components/common/FadeIn";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/projects"; // 타입 정의한 파일

const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch("/api/projects");
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return response.json();
};

const ProjectContainer = () => {
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  if (isLoading) return <Loading />;

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
