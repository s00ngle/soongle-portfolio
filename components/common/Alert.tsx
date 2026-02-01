"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert = ({ message, onClose }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 마운트 직후 애니메이션 시작
    setTimeout(() => {
      setIsVisible(true);
    }, 10);

    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onClose();
      }, 300);
    }, 1000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`fixed top-28 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isExiting
          ? "opacity-0 -translate-y-2"
          : isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
      }`}
    >
      <div className="flex items-center gap-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-4 py-3 rounded-lg shadow-lg border border-neutral-700 dark:border-neutral-300">
        <span className="text-sm font-medium whitespace-nowrap">{message}</span>
        <button
          onClick={handleClose}
          className="hover:opacity-70 transition-opacity cursor-pointer"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Alert;
