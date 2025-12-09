import CertificatePage from "../components/CertificatePage";
import cssCert from "../assets/certificates/cssCertificate.png";

export default function HackerRankCSS() {
  return (
    <CertificatePage
      title="CSS (Basic) Certification"
      subtitle="HackerRank"
      date="29 May 2025"
      description="Earned the CSS (Basic) Certificate from HackerRank, showcasing practical understanding of CSS fundamentals."
      image={cssCert}
    />
  );
}
