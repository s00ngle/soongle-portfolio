import { Project } from "@/types/projects";
import Link from "next/link";
import Image from "next/image";
import Tag from "../common/Tag";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.id}`} aria-label={`View ${project.title}`}>
      <div className="group relative flex flex-col p-2 rounded-2xl">
        <div className="relative overflow-hidden rounded-xl mb-4 border border-(--border) aspect-video">
          <Image
            src={project.thumbnailImage}
            alt={`${project.title} Thumbnail`}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="w-fit text-xl font-bold mb-2 bg-linear-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-neutral-900 dark:text-neutral-100 transition-all duration-300 group-hover:text-transparent">
          {project.title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
