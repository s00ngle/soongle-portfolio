import MetaItem from "./MetaItem";

interface MetaSectionProps {
  items: {
    label: string;
    value: React.ReactNode;
  }[];
}

const MetaSection = ({ items }: MetaSectionProps) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {items.map((item) => (
        <MetaItem key={item.label} label={item.label} value={item.value} />
      ))}
    </div>
  );
};

export default MetaSection;
