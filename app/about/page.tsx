"use client";

import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import InfoContainer from "@/components/about/Introduce/InfoContainer";
import SkillContainer from "@/components/about/Skill/SkillContainer";
import ActivityContainer from "@/components/about/Activity/ActivityContainer";
import AwardContainer from "@/components/about/Award/AwardContainer";
import CertificateContainer from "@/components/about/Certificate/CertificateContainer";

import Loading from "@/components/common/Loading";
import ScrollNavigator from "@/components/about/ScrollNavigator";

const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const fetchSkills = async () => {
  const res = await fetch("/api/about/skills");
  return res.json();
};

const fetchActivities = async () => {
  const res = await fetch("/api/about/activities");
  return res.json();
};

const fetchAwards = async () => {
  const res = await fetch("/api/about/awards");
  return res.json();
};

const fetchCertificates = async () => {
  const res = await fetch("/api/about/certificates");
  return res.json();
};

const AboutPage = () => {
  const { data: skills = [], isLoading: loadingSkills } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  const { data: activities = [], isLoading: loadingActivities } = useQuery({
    queryKey: ["activities"],
    queryFn: fetchActivities,
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
    !loadingSkills &&
    !loadingActivities &&
    !loadingAwards &&
    !loadingCertificates;

  return (
    <>
      <div className="flex flex-col gap-12 py-12">
        {/* Introduce */}
        <section id="introduce" className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Introduce</h1>
          <InfoContainer />
        </section>

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
        <section id="activities" className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Activities</h2>
          {loadingActivities ? (
            <Loading />
          ) : (
            <FadeIn>
              <ActivityContainer activities={activities} />
            </FadeIn>
          )}
        </section>
      </div>
      {/* 모든 데이터 로딩 완료 후에만 네비게이터 표시 */}
      {isAllDataLoaded && <ScrollNavigator />}
    </>
  );
};

export default AboutPage;
