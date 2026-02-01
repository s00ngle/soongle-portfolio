import CertificateContainer from "./CertificateContainer";

const CertificateSection = () => {
  return (
    <section id="certificates" className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold tracking-tight">Certificates</h2>
      <CertificateContainer />
    </section>
  );
};

export default CertificateSection;
