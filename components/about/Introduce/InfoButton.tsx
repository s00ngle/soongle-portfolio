import React from "react";

interface InfoButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const InfoButton = ({ text, icon, onClick }: InfoButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer flex justify-center items-center gap-1 text-sm rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 "
    >
      <span className="w-5 h-5">{icon}</span>
      <span className="hidden sm:inline text-sm font-medium">{text}</span>
    </button>
  );
};

export default InfoButton;
