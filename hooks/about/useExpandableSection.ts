import { useState, useRef, useEffect } from "react";

interface UseExpandableSectionProps {
  maxHeightFor3Rows: number;
}

export const useExpandableSection = ({
  maxHeightFor3Rows,
}: UseExpandableSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkHeight = () => {
      if (contentRef.current) {
        const fullHeight = contentRef.current.scrollHeight;
        setShowMoreButton(fullHeight > maxHeightFor3Rows);
      }
    };

    checkHeight();

    const resizeObserver = new ResizeObserver(() => {
      checkHeight();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [maxHeightFor3Rows]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollHeight;
    }
  }, [isExpanded]);

  const getMaxHeight = () => {
    if (isExpanded) {
      return contentRef.current?.scrollHeight
        ? `${contentRef.current.scrollHeight}px`
        : "none";
    }
    if (showMoreButton) {
      return "9rem";
    }
    return contentRef.current?.scrollHeight
      ? `${contentRef.current.scrollHeight}px`
      : "none";
  };

  return {
    isExpanded,
    setIsExpanded,
    showMoreButton,
    contentRef,
    containerRef,
    getMaxHeight,
  };
};
