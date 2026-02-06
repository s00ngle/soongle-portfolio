import Image from "next/image";
import ResumeDownloadButton from "./ResumeDownloadButton";
import ProfileImage from "@/public/profile_image.png";

const ProfileInfo = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:px-6 py-3">
      {/* 프로필 이미지, 생년월일, 포지션 */}
      <div className="flex items-center gap-4 pl-4 sm:pl-0">
        <Image
          src={ProfileImage}
          alt="profile"
          width={120}
          height={120}
          className="rounded-lg h-auto w-auto"
          priority
        />
        <div className="flex flex-col">
          <h2 className="font-bold text-4xl whitespace-nowrap mb-4">김용순</h2>
          <p className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
            Frontend Developer
          </p>
          <p className="text-base text-neutral-500 dark:text-neutral-400">
            1999.08.15
          </p>
        </div>
      </div>
      {/* 이력서 다운로드 버튼 */}
      <ResumeDownloadButton />
    </div>
  );
};
export default ProfileInfo;
