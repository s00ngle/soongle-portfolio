"use client";

import Badge from "@/components/common/Badge";
import { Certificate } from "@/types/about";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <div className="flex flex-col gap-1 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all hover:shadow-md">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold">{certificate.title}</h3>
        <Badge>{certificate.grade}</Badge>
      </div>
      <div className="text-sm text-neutral-500">{certificate.date}</div>
    </div>
  );
};

export default CertificateCard;
