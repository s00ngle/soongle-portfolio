import ContactSection from "./ContactSection";
import ProfileInfo from "./ProfileInfo";

const InfoSection = () => {
  return (
    <section id="introduce" className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Introduce</h1>
      <div className="flex flex-col gap-2 rounded-xl p-2 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50">
        {/*  Profile Information */}
        <ProfileInfo />

        {/* 전화번호, 이메일, 깃허브 버튼 + Alert */}
        <ContactSection />
      </div>

      <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
        안녕하세요! 저는 복잡한 문제를 단순하고 직관적인 코드로 해결하는 것을
        즐기는 프론트엔드 개발자입니다. 최신 웹 기술을 탐구하고 실제 프로젝트에
        적용하여 더 나은 사용자 경험을 만드는 데 열정을 가지고 있습니다.
      </p>
    </section>
  );
};

export default InfoSection;
