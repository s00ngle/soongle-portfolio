import Image from "next/image";

interface ImageTextBlockProps {
  src: string;
  content: string;
  direction: "left" | "right";
}

const ImageTextBlock = ({ src, content, direction }: ImageTextBlockProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-4 items-center ${
        direction === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>

      <p className="w-full md:w-1/2 text-lg leading-8 text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
        {content}
      </p>
    </div>
  );
};

export default ImageTextBlock;
