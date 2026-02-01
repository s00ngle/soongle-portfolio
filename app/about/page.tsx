import InfoSection from "@/components/about/Introduce/InfoSection";
import ScrollNavigator from "@/components/about/ScrollNavigator";
import ActivitySection from "@/components/about/Activity/ActivitySection";
import CertificateSection from "@/components/about/Certificate/CertificateSection";
import AwardSection from "@/components/about/Award/AwardSection";
import SkillSection from "@/components/about/Skill/SkillSection";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-12 py-12">
      {/* Introduce */}
      <InfoSection />

      {/* Tools & Skills */}
      <SkillSection />

      {/* Certificates */}
      <CertificateSection />

      {/* Awards */}
      <AwardSection />

      {/* Activities */}
      <ActivitySection />

      {/*  네비게이터 */}
      <ScrollNavigator />
    </div>
  );
};

export default AboutPage;
