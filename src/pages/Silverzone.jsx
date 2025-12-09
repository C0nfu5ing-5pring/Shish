import CertificatePage from "../components/CertificatePage";
import silverzoneCert from "../assets/certificates/silverzone.jpeg";

export default function Silverzone() {
  return (
    <CertificatePage
      title="Silver in iiO, Gold in SKGKO, and Gold in IOEL"
      subtitle="SilverZone Olympiads"
      date="17 October 2025"
      description="Achieved top ranks in three national-level Olympiads organized by SilverZone Foundation — Silver Medal in iiO, Gold in SKGKO, and Gold in IOEL."
      image={silverzoneCert}
    />
  );
}
