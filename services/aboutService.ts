import { activities } from "@/data/about/activities";
import { awards } from "@/data/about/awards";
import { certificates } from "@/data/about/certificates";
import { skills } from "@/data/about/skills";
import { Activity, Award, Certificate, Skill } from "@/types/about";

/**
 * About 관련 데이터를 제공하는 서비스 레이어입니다.
 * 이 서비스는 서버 컴포넌트나 API Route에서 직접 호출할 수 있습니다.
 */
export const aboutService = {
  /**
   * 기술 스택 목록을 반환합니다.
   */
  getSkills: async (): Promise<Skill[]> => {
    return skills;
  },

  /**
   * 자격증 목록을 반환합니다.
   */
  getCertificates: async (): Promise<Certificate[]> => {
    return certificates;
  },

  /**
   * 수상 내역 목록을 반환합니다.
   */
  getAwards: async (): Promise<Award[]> => {
    return awards;
  },

  /**
   * 활동 내역 목록을 반환합니다.
   */
  getActivities: async (): Promise<Activity[]> => {
    return activities;
  },
};
