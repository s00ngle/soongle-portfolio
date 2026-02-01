import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`
        px-2 py-1 rounded-md
        bg-white dark:bg-neutral-800
        text-[10px] sm:text-xs font-medium
        border border-(--border)
        text-neutral-600 dark:text-neutral-400
        ${className}
      `}
    >
      {children}
    </span>
  );
}
