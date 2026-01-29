"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col p-6 rounded-2xl border border-(--border) bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900"
    >
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
        {project.title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-md bg-white dark:bg-neutral-800 text-[10px] sm:text-xs font-medium border border-(--border)"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title}`}
      />
    </motion.div>
  );
};

export default ProjectCard;
