export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  thumbnailImage?: string; // 썸네일 이미지 경로
}

export interface ProjectDetail extends Project {
  link?: string; // 배포 or GitHub 링크

  members?: number; // 참여 인원 수
  role?: string; // 맡은 역할 (ex. Frontend, Fullstack, Leader)

  period?: string; // "2024.01 - 2024.03"
  github?: string; // 깃허브 링크

  contents?: ContentBlock[];
}

type ContentBlock =
  | {
      type: "text";
      content: string;
    }
  | {
      type: "image";
      src: string;
      caption?: string;
    }
  | {
      type: "imageText";
      src: string;
      content: string;
      direction: "left" | "right";
    }
  | {
      type: "code";
      code: string;
      language: string;
    }
  | {
      type: "list";
      items: string[];
    };
