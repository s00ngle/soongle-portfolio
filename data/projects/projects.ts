import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Next.js와 Framer Motion을 사용한 개인 포트폴리오 웹사이트.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#1",
  },
  {
    title: "E-Commerce Dashboard",
    description: "실시간 데이터 시각화와 주문 관리를 위한 관리자 대시보드.",
    tags: ["React", "Chart.js", "React Query"],
    link: "#2",
  },
  {
    title: "Social Media App",
    description: "사용자 간 메시징과 피드 공유가 가능한 소셜 네트워크 서비스.",
    tags: ["React Native", "Firebase", "TypeScript"],
    link: "#3",
  },
];
