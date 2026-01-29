"use client";

import { Loader2 } from "lucide-react";

interface LoadingProps {
  className?: string;
}

const Loading = ({ className = "" }: LoadingProps) => {
  return (
    <div
      className={`flex items-center justify-center w-full text-neutral-500 dark:text-neutral-400 ${className}`}
    >
      <Loader2 className="w-8 h-8 animate-spin" />
    </div>
  );
};

export default Loading;
