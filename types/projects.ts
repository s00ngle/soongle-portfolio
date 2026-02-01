export interface Project {
  id: number; // 프로젝트 번호 (정렬, key 용도)
  title: string; // 프로젝트 이름
  description: string; // 설명
  tags: string[]; // 사용 기술 스택
  link: string; // 배포 or GitHub 링크

  members: number; // 참여 인원 수
  role: string; // 맡은 역할 (ex. Frontend, Fullstack, Leader)

  thumbnailImage: string; // 썸네일 이미지 경로

  period?: string; // "2024.01 - 2024.03"
  github?: string; // 깃허브 링크
  detailPath?: string; // /projects/1 같은 상세페이지 경로
}
