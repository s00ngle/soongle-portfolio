import ProjectContainer from "@/components/projects/ProjectContainer";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col py-12">
      <section className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>

        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          지금까지 진행한 주요 프로젝트들입니다. 각 프로젝트 이미지를 클릭하면
          상세 내용을 확인하실 수 있습니다.
        </p>

        {/* 프로젝트 내용 */}
        <ProjectContainer />
      </section>
    </div>
  );
};

export default ProjectsPage;
