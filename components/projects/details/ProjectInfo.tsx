"use client";

import Image from "next/image";
import MetaSection from "./MetaSection";
import Tag from "@/components/common/Tag";
import { ProjectDetail } from "@/types/projects";
import FadeIn from "@/components/common/FadeIn";
import TextBlock from "../../common/contents/TextBlock";
import ImageBlock from "../../common/contents/ImageBlock";
import ImageTextBlock from "../../common/contents/ImageTextBlock";
import CodeBlock from "../../common/contents/CodeBlock";
import ListBlock from "../../common/contents/ListBlock";

interface ProjectInfoProps {
  project: ProjectDetail;
}

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  return (
    <FadeIn>
      <div className="flex flex-col gap-8">
        {/* 제목 */}
        <h1 className="text-4xl font-bold">{project.title}</h1>

        <div className="flex flex-col">
          {/* 썸네일 */}
          {project.thumbnailImage && (
            <div className="relative mb-6 aspect-video md:aspect-[2.5/1] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
              <Image
                src={project.thumbnailImage}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          {/* 설명 */}
          <p className="text-2xl font-bold mb-2">{project.description}</p>

          {/* 태그 */}
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag: string) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          {/* 메타 정보 */}
          <MetaSection
            items={[
              { label: "역할", value: project.role },
              { label: "기간", value: project.period },
              { label: "인원", value: `${project.members}인` },
            ]}
          />
        </div>

        {project.contents && (
          <>
            <hr className="border-neutral-200 dark:border-neutral-700" />

            <div className="flex flex-col gap-4">
              {project.contents?.map((block, idx) => {
                switch (block.type) {
                  case "text":
                    return <TextBlock key={idx} content={block.content} />;

                  case "image":
                    return (
                      <ImageBlock
                        key={idx}
                        src={block.src}
                        caption={block.caption}
                      />
                    );

                  case "imageText":
                    return (
                      <ImageTextBlock
                        key={idx}
                        src={block.src}
                        content={block.content}
                        direction={block.direction}
                      />
                    );

                  case "code":
                    return <CodeBlock key={idx} code={block.code} />;

                  case "list":
                    return <ListBlock key={idx} items={block.items} />;
                }
              })}
            </div>
          </>
        )}
      </div>
    </FadeIn>
  );
};

export default ProjectInfo;
