import { Button } from "@/components/common/Button";
import { Github, Mail, Smartphone } from "lucide-react";

interface InfoButtonProps {
  onAlert: (message: string) => void;
}

const InfoButton = ({ onAlert }: InfoButtonProps) => {
  const copyToClipboard = async (text: string, message: string) => {
    try {
      await navigator.clipboard.writeText(text);
      onAlert(message);
    } catch {
      onAlert("복사에 실패했습니다.");
    }
  };

  const infoData = [
    {
      text: "010-3580-1547",
      icon: <Smartphone size={18} />,
      onClick: () =>
        copyToClipboard("010-3580-1547", "전화번호가 복사되었습니다!"),
    },
    {
      text: "dydtns9815@gmail.com",
      icon: <Mail size={18} />,
      onClick: () =>
        copyToClipboard("dydtns9815@gmail.com", "이메일이 복사되었습니다!"),
    },
    {
      text: "@s00ngle",
      icon: <Github size={18} />,
      onClick: () => window.open("https://github.com/s00ngle", "_blank"),
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {infoData.map((info) => (
        <Button onClick={info.onClick} key={info.text}>
          <div className="flex gap-1">
            <span className="w-5 h-5">{info.icon}</span>
            <span className="hidden sm:inline text-sm font-medium">
              {info.text}
            </span>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default InfoButton;
