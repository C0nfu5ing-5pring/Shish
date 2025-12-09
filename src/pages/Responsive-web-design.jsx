import CertificatePage from "../components/CertificatePage";
import fccCert from "../assets/certificates/fCCCertification.png";

export default function ResponsiveWebDesign() {
  return (
    <CertificatePage
      title="Responsive Web Design Developer Certification"
      subtitle="freeCodeCamp"
      date="7 May 2024"
      description="Successfully completed the Responsive Web Design Developer Certification, mastering HTML, CSS, and modern design fundamentals."
      image={fccCert}
    />
  );
}
