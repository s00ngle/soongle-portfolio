"use client";

import Image from "next/image";
import MetaSection from "./MetaSection";
import Tag from "@/components/common/Tag";
import { Project } from "@/types/projects";
import { useQuery } from "@tanstack/react-query";
import FadeIn from "@/components/common/FadeIn";
import Loading from "@/components/common/Loading";

const fetchProjectById = async (id: string): Promise<Project> => {
  const res = await fetch(`/api/projects/${id}`);
  if (!res.ok) {
    throw new Error("프로젝트를 불러오는데 실패했습니다");
  }
  return res.json();
};

interface ProjectInfoProps {
  projectId: string;
}

const ProjectInfo = ({ projectId }: ProjectInfoProps) => {
  const {
    data: project,
    isLoading,
    error,
  } = useQuery<Project>({
    queryKey: ["project", projectId],
    queryFn: () => fetchProjectById(projectId),
  });

  if (isLoading) {
    return (
      <div className="aspect-video md:aspect-[2.5/1] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">프로젝트를 불러오는데 실패했습니다.</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500">프로젝트를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <FadeIn>
      {/* 제목 */}
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <div className="flex flex-col">
        {/* 썸네일 */}
        <div className="relative mb-6 aspect-video md:aspect-[2.5/1] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* 설명 */}
        <p className="text-2xl font-bold mb-2">{project.description}</p>

        {/* 태그 */}
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag: string) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/* 메타 정보 */}
        <MetaSection
          items={[
            { label: "역할", value: project.role },
            { label: "기간", value: project.period },
            { label: "인원", value: `${project.members}인` },
          ]}
        />
      </div>
    </FadeIn>
  );
};

export default ProjectInfo;
