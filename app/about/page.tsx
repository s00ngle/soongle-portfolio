"use client";

import { useQuery } from "@tanstack/react-query";

import Loading from "@/components/common/Loading";
import FadeIn from "@/components/common/FadeIn";

import InfoSection from "@/components/about/Introduce/InfoSection";
import SkillContainer from "@/components/about/Skill/SkillContainer";
import AwardContainer from "@/components/about/Award/AwardContainer";
import CertificateContainer from "@/components/about/Certificate/CertificateContainer";
import ScrollNavigator from "@/components/about/ScrollNavigator";
import { delayTime } from "@/utils/delayTime";
import ActivitySection from "@/components/about/Activity/ActivitySection";

const fetchSkills = async () => {
  await delayTime(1500);
  const res = await fetch("/api/about/skills");
  return res.json();
};

const fetchCertificates = async () => {
  await delayTime(2500);
  const res = await fetch("/api/about/certificates");
  return res.json();
};

const fetchAwards = async () => {
  await delayTime(3500);
  const res = await fetch("/api/about/awards");
  return res.json();
};

const AboutPage = () => {
  const { data: skills = [], isLoading: loadingSkills } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  const { data: awards = [], isLoading: loadingAwards } = useQuery({
    queryKey: ["awards"],
    queryFn: fetchAwards,
  });

  const { data: certificates = [], isLoading: loadingCertificates } = useQuery({
    queryKey: ["certificates"],
    queryFn: fetchCertificates,
  });

  // 모든 데이터 로딩 완료 여부 확인
  const isAllDataLoaded =
    !loadingSkills && !loadingAwards && !loadingCertificates;

  return (
    <>
      <div className="flex flex-col gap-12 py-12">
        {/* Introduce */}
        <InfoSection />

        {/* Tools & Skills */}
        <section id="skills" className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold tracking-tight">Tools & Skills</h2>
          {loadingSkills ? (
            <Loading />
          ) : (
            <FadeIn>
              <SkillContainer skills={skills} />
            </FadeIn>
          )}
        </section>

        {/* Certificates */}
        <section id="certificates" className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold tracking-tight">Certificates</h2>
          {loadingCertificates ? (
            <Loading />
          ) : (
            <FadeIn>
              <CertificateContainer certificates={certificates} />
            </FadeIn>
          )}
        </section>

        {/* Awards */}
        <section id="awards" className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold tracking-tight">Awards</h2>
          {loadingAwards ? (
            <Loading />
          ) : (
            <FadeIn>
              <AwardContainer awards={awards} />
            </FadeIn>
          )}
        </section>

        {/* Activities */}
        <ActivitySection />
      </div>
      {/* 모든 데이터 로딩 완료 후에만 네비게이터 표시 */}
      {isAllDataLoaded && <ScrollNavigator />}
    </>
  );
};

export default AboutPage;
