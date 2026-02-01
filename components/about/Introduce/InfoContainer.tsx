"use client";

import { useState } from "react";
import { Github, Mail, Smartphone } from "lucide-react";
import InfoButton from "./InfoButton";
import Alert from "@/components/common/Alert";
import ResumeDownloadButton from "./ResumeDownloadButton";
import Image from "next/image";
import ProfileImage from "@/public/profile_image.png";

const InfoContainer = () => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const copyToClipboard = async (text: string, message: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setAlertMessage(message);
    } catch (err) {
      console.error("복사 실패:", err);
      setAlertMessage("복사에 실패했습니다.");
    }
  };

  const infoButtons = [
    {
      text: "010-3580-1547",
      icon: <Smartphone size={18} />,
      onClick: () =>
        copyToClipboard(
          "010-3580-1547",
          "전화번호가 클립보드에 복사되었습니다!",
        ),
    },
    {
      text: "dydtns9815@gmail.com",
      icon: <Mail size={18} />,
      onClick: () =>
        copyToClipboard(
          "dydtns9815@gmail.com",
          "이메일이 클립보드에 복사되었습니다!",
        ),
    },
    {
      text: "@s00ngle",
      icon: <Github size={18} />,
      onClick: () => window.open("https://github.com/s00ngle", "_blank"),
    },
  ];

  return (
    <>
      {alertMessage && (
        <Alert message={alertMessage} onClose={() => setAlertMessage(null)} />
      )}

      <div className="flex flex-col gap-2 rounded-xl p-2 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:px-6 py-3">
          <div className="flex items-center gap-4 pl-4 sm:pl-0">
            <Image
              src={ProfileImage}
              alt="profile"
              width={120}
              height={120}
              className="rounded-lg border border-neutral-300 dark:border-neutral-700"
            />
            <div className="flex flex-col gap-2 sm:scale-100 scale-90 transition-discrete duration-300">
              <h2 className="font-bold text-4xl whitespace-nowrap">김용순</h2>
              <div>
                <p className="text-base text-neutral-500 dark:text-neutral-400">
                  1999.08.15
                </p>
                <p className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>

          <ResumeDownloadButton />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {infoButtons.map((button, index) => (
            <InfoButton
              key={index}
              text={button.text}
              icon={button.icon}
              onClick={button.onClick}
            />
          ))}
        </div>
      </div>

      <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
        안녕하세요! 저는 복잡한 문제를 단순하고 직관적인 코드로 해결하는 것을
        즐기는 프론트엔드 개발자입니다. 최신 웹 기술을 탐구하고 실제 프로젝트에
        적용하여 더 나은 사용자 경험을 만드는 데 열정을 가지고 있습니다.
      </p>
    </>
  );
};

export default InfoContainer;
