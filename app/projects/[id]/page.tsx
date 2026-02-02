import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProjectInfo from "@/components/projects/details/ProjectInfo";

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <div className="relative flex flex-col gap-6 py-12">
      {/* 뒤로가기 링크 */}
      <Link
        href="/projects"
        className="absolute top-4 left-0 text-neutral-500 dark:text-neutral-400 flex items-center gap-1 cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> 목록으로
      </Link>

      <ProjectInfo projectId={id} />
    </div>
  );
};

export default ProjectDetailPage;
