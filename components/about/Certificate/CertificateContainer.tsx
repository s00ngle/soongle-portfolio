"use client";

import { Certificate } from "@/types/about";
import CertificateCard from "./CertificateCard";
import FadeIn from "@/components/common/FadeIn";
import Loading from "@/components/common/Loading";
import { useQuery } from "@tanstack/react-query";

const fetchCertificates = async () => {
  const res = await fetch("/api/about/certificates");
  return res.json();
};

const CertificateContainer = () => {
  const { data: certificates = [], isLoading: loadingCertificates } = useQuery<
    Certificate[]
  >({
    queryKey: ["certificates"],
    queryFn: fetchCertificates,
  });

  return loadingCertificates ? (
    <Loading />
  ) : (
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
