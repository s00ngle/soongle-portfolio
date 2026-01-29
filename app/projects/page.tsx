"use client";

import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import ProjectContainer from "@/components/projects/ProjectContainer";
import Loading from "@/components/common/Loading";

const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const fetchProjects = async () => {
  const response = await fetch("/api/projects");
  return response.json();
};

const ProjectsPage = () => {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <div className="flex flex-col gap-12 py-12">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          지금까지 진행한 주요 프로젝트들입니다. 각 프로젝트 이미지를 클릭하면
          상세 내용을 확인하실 수 있습니다.
        </p>
      </section>

      {isLoading ? (
        <Loading />
      ) : (
        <FadeIn>
          <ProjectContainer projects={projects} />
        </FadeIn>
      )}
    </div>
  );
};

export default ProjectsPage;
