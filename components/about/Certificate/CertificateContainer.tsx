import { Certificate } from "@/types/about";
import CertificateCard from "./CertificateCard";
import FadeIn from "@/components/common/FadeIn";

interface CertificateContainerProps {
  certificates: Certificate[];
}

const CertificateContainer = ({ certificates }: CertificateContainerProps) => {
  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.title} certificate={certificate} />
        ))}
      </div>
    </FadeIn>
  );
};

export default CertificateContainer;
