interface TextBlockProps {
  content: string;
}

const TextBlock = ({ content }: TextBlockProps) => {
  return (
    <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
      {content}
    </p>
  );
};

export default TextBlock;
