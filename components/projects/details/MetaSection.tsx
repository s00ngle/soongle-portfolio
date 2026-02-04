import MetaItem from "./MetaItem";

interface MetaSectionProps {
  items: {
    label: string;
    value?: React.ReactNode | null;
  }[];
}

const MetaSection = ({ items }: MetaSectionProps) => {
  const visibleItems = items.filter(
    (item) =>
      item.value !== undefined && item.value !== null && item.value !== "",
  );

  if (visibleItems.length === 0) return null;

  return (
    <div className="flex flex-col gap-2 mt-4">
      {visibleItems.map((item) => (
        <MetaItem key={item.label} label={item.label} value={item.value} />
      ))}
    </div>
  );
};

export default MetaSection;
