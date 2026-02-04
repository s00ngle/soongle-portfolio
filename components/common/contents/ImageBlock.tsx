import Image from "next/image";

interface ImageBlockProps {
  src: string;
  caption?: string;
}

const ImageBlock = ({ src, caption }: ImageBlockProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
        <Image
          src={src}
          alt={caption || ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>
      {caption && <p className="text-center text-neutral-500">{caption}</p>}
    </div>
  );
};

export default ImageBlock;
