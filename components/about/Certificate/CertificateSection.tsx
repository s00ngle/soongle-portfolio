import { aboutService } from "@/services/aboutService";
import CertificateContainer from "./CertificateContainer";

const CertificateSection = async () => {
  const certificates = await aboutService.getCertificates();

  return (
    <section id="certificates" className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold tracking-tight">Certificates</h2>
      <CertificateContainer certificates={certificates} />
    </section>
  );
};

export default CertificateSection;
