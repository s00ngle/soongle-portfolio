import { aboutService } from "@/services/aboutService";
import SkillContainer from "./SkillContainer";

const SkillSection = async () => {
  const skills = await aboutService.getSkills();

  return (
    <section id="skills" className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold tracking-tight">Tools & Skills</h2>
      <SkillContainer skills={skills} />
    </section>
  );
};

export default SkillSection;
