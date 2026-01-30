import { Download } from "lucide-react";

const ResumeDownloadButton = () => {
  return (
    <a
      href="/resume_Kim_YongSoon.pdf"
      target="_blank"
      // download
      className="cursor-pointer whitespace-nowrap h-fit flex justify-center items-center gap-1 text-sm rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"
    >
      <Download size={16} />
      <span>이력서 다운로드</span>
    </a>
  );
};

export default ResumeDownloadButton;
