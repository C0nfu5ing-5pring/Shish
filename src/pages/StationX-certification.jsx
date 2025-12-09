import CertificatePage from "../components/CertificatePage";
import cyberCert from "../assets/certificates/cyberSecurityCertificate.png";

export default function StationXCertification() {
  return (
    <CertificatePage
      title="The Complete Cyber Security Course: Hackers Exposed"
      subtitle="Udemy (StationX)"
      date="10 June 2023"
      description="Learned core cybersecurity principles, online privacy, and how hackers exploit vulnerabilities in real-world systems."
      image={cyberCert}
    />
  );
}
