interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer flex justify-center items-center text-sm rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 "
    >
      {children}
    </button>
  );
};
