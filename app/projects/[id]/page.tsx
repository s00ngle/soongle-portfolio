import Image from "next/image";
import { notFound } from "next/navigation";
import Tag from "@/components/common/Tag";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import MetaSection from "@/components/projects/details/MetaSection";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const project = await fetch(`${baseUrl}/api/projects/${id}`).then((res) => {
    if (!res.ok) notFound();
    return res.json();
  });

  return (
    <div className="relative flex flex-col gap-6 py-12">
      {/* 뒤로가기 링크 */}
      <Link
        href="/projects"
        className="absolute top-4 left-0 text-neutral-500 dark:text-neutral-400 flex items-center gap-1 cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> 목록으로
      </Link>

      {/* 제목 */}
      <h1 className="text-4xl font-bold">{project.title}</h1>

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
    </div>
  );
};

export default ProjectDetailPage;
