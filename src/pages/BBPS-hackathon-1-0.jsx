import CertificatePage from "../components/CertificatePage";
import hackathonImg from "../assets/certificates/hackathon.jpg";

export default function BBPSHackathon() {
  return (
    <CertificatePage
      title="Bal Bharati Hackathon 1.0"
      subtitle="Bal Bharati Public School, Jhanor"
      date="24-25 October 2024"
      description="Participated in the first-ever BBPS Hackathon, building creative and problem-solving skills through teamwork and coding challenges."
      image={hackathonImg}
    />
  );
}
