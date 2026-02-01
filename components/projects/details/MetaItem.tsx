interface MetaItemProps {
  label: string;
  value: React.ReactNode;
}

const MetaItem = ({ label, value }: MetaItemProps) => {
  return (
    <div className="flex gap-4">
      <span className="font-bold text-neutral-700 dark:text-neutral-300">
        {label}
      </span>
      <span className="text-neutral-600 dark:text-neutral-400">{value}</span>
    </div>
  );
};

export default MetaItem;
