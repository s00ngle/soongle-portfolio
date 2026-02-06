import { projects } from "@/data/projects/projects";
import { ProjectDetail } from "@/types/projects";

/**
 * 프로젝트 관련 데이터를 제공하는 서비스 레이어입니다.
 * 이 서비스는 서버 컴포넌트나 API Route에서 직접 호출할 수 있습니다.
 */
export const projectService = {
  /**
   * 모든 프로젝트 목록을 반환합니다.
   */
  getAllProjects: async (): Promise<ProjectDetail[]> => {
    // 실제 DB 연동 시 여기서 호출
    return projects;
  },

  /**
   * ID에 해당하는 프로젝트 상세 정보를 반환합니다.
   */
  getProjectById: async (id: string): Promise<ProjectDetail | null> => {
    const projectId = parseInt(id, 10);
    if (isNaN(projectId)) return null;

    const project = projects.find((p) => p.id === projectId);
    return project || null;
  },
};
