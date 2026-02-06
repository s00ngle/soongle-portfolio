interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  size?: "sm" | "md" | "lg";
}

const Badge = ({
  children,
  className = "",
  backgroundColor = "bg-blue-100 dark:bg-blue-900/30",
  textColor = "text-blue-800 dark:text-blue-300",
  borderColor = "border-transparent",
  size = "sm",
}: BadgeProps) => {
  return (
    <span
      className={`text-${size} font-medium px-2.5 py-0.5 rounded-full border ${backgroundColor} ${textColor} ${borderColor} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
