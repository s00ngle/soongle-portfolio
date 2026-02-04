interface ListBlockProps {
  items: string[];
}

const ListBlock = ({ items }: ListBlockProps) => {
  return (
    <ul className="list-disc pl-6 space-y-3 text-lg leading-8 text-neutral-700 dark:text-neutral-300">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

export default ListBlock;
