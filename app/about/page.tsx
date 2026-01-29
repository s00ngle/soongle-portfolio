"use client";

import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import SkillContainer from "@/components/about/SkillContainer";
import ActivityContainer from "@/components/about/ActivityContainer";
import AwardContainer from "@/components/about/AwardContainer";
import CertificateContainer from "@/components/about/CertificateContainer";

import Loading from "@/components/common/Loading";

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
        {loadingSkills ? (
          <Loading />
        ) : (
          <FadeIn>
            <SkillContainer skills={skills} />
          </FadeIn>
        )}
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Activities</h2>
        {loadingActivities ? (
          <Loading />
        ) : (
          <FadeIn>
            <ActivityContainer activities={activities} />
          </FadeIn>
        )}
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight">Certificates</h2>
        {loadingCertificates ? (
          <Loading />
        ) : (
          <FadeIn>
            <CertificateContainer certificates={certificates} />
          </FadeIn>
        )}
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight">Awards</h2>
        {loadingAwards ? (
          <Loading />
        ) : (
          <FadeIn>
            <AwardContainer awards={awards} />
          </FadeIn>
        )}
      </section>
    </div>
  );
};

export default AboutPage;
