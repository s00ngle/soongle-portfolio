"use client";

import { useEffect, useState } from "react";
import { Skill, Activity, Award, Certificate } from "@/types/about";

import SkillContainer from "@/components/about/SkillContainer";
import ActivityContainer from "@/components/about/ActivityContainer";
import AwardContainer from "@/components/about/AwardContainer";
import CertificateContainer from "@/components/about/CertificateContainer";

const AboutPage = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [awards, setAwards] = useState<Award[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [skillsRes, activitiesRes, awardsRes, certificatesRes] =
          await Promise.all([
            fetch("/api/about/skills"),
            fetch("/api/about/activities"),
            fetch("/api/about/awards"),
            fetch("/api/about/certificates"),
          ]);
        const [skillsData, activitiesData, awardsData, certificatesData] =
          await Promise.all([
            skillsRes.json(),
            activitiesRes.json(),
            awardsRes.json(),
            certificatesRes.json(),
          ]);
        setSkills(skillsData);
        setActivities(activitiesData);
        setAwards(awardsData);
        setCertificates(certificatesData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-12 py-12">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Introduce</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          안녕하세요! 저는 복잡한 문제를 단순하고 직관적인 코드로 해결하는 것을
          즐기는 프론트엔드 개발자입니다. 최신 웹 기술을 탐구하고 실제
          프로젝트에 적용하여 더 나은 사용자 경험을 만드는 데 열정을 가지고
          있습니다.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight">Tools & Skills</h2>
        <SkillContainer skills={skills} />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Activities</h2>
        <ActivityContainer activities={activities} />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight">Awards</h2>
        <AwardContainer awards={awards} />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight">Certificates</h2>
        <CertificateContainer certificates={certificates} />
      </section>
    </div>
  );
};

export default AboutPage;
