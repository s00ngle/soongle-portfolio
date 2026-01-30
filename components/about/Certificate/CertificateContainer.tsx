"use client";

import CertificateCard from "@/components/about/Certificate/CertificateCard";
import { Certificate } from "@/types/about";

interface CertificateContainerProps {
  certificates: Certificate[];
}

const CertificateContainer = ({ certificates }: CertificateContainerProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certificates.map((certificate, i) => (
        <CertificateCard key={i} certificate={certificate} />
      ))}
    </div>
  );
};

export default CertificateContainer;
