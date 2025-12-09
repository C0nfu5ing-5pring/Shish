import { useNavigate } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ArrowUpRight } from "lucide-react";
import "react-vertical-timeline-component/style.min.css";
import { useThemeColor } from "./ThemeColorContext";
import RoughTagHeading from "./RoughTagHeading";

const AchievementsTimeline = () => {
  const navigate = useNavigate();
  const themeColor = useThemeColor();

  const achievements = [
    {
      date: "10 June 2023",
      title: "The Complete Cyber Security Course: Hackers Exposed",
      subtitle: "Udemy",
      description:
        "Learned core cybersecurity principles, online privacy, and how hackers exploit vulnerabilities.",
      icon: "https://img.icons8.com/color/48/000000/cyber-security.png",
      link: "/stationX-certification",
    },
    {
      date: "7 May 2024",
      title: "Responsive Web Design Certification",
      subtitle: "freeCodeCamp",
      description:
        "Successfully completed the Responsive Web Design Developer Certification, mastering HTML, CSS, and modern design fundamentals.",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      link: "/responsive-web-design",
    },
    {
      date: "24-25 October 2024",
      title: "Bal Bharati Hackathon 1.0",
      subtitle: "Bal Bharati Public School, Jhanor",
      description:
        "Participated in the first-ever BBPS Hackathon, building creative and problem-solving skills through teamwork and coding challenges.",
      icon: "src/assets/images/BBPS.ico",
      link: "/bbps-hackathon-1.0",
    },
    {
      date: "29 May 2025",
      title: "CSS (Basic) Certification",
      subtitle: "HackerRank",
      description:
        "Earned the CSS (Basic) Certificate from HackerRank, showcasing practical understanding of CSS fundamentals.",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
      link: "/hackerrank-css-basic",
    },
    {
      date: "17 October 2025",
      title: "Silver in iiO, Gold in SKGKO, and Gold in IOEL",
      subtitle: "SilverZone Olympiads",
      description:
        "Achieved top ranks in three national-level Olympiads organized by SilverZone Foundation — Silver Medal in iiO, Gold in SKGKO, and Gold in IOEL.",
      icon: "src/assets/images/silverzone.png",
      link: "/silverzone",
    },
  ];

  return (
    <div className="w-full py-16">
      <section className="flex justify-center mb-15">
        <RoughTagHeading children="Achievments and Certifications" />
      </section>

      <VerticalTimeline lineColor={`${themeColor}`}>
        {achievements.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            iconStyle={{
              background: "#fff",
              boxShadow: "0 0 15px rgba(0,0,0,0.3)",
              border: `3px solid ${themeColor}`,
              padding: "5px",
            }}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            }
            contentStyle={{
              background: "#fff",
              border: `1px solid ${themeColor}`,
              color: `${themeColor}`,
              borderRadius: "1rem",
              boxShadow: "0 0 20px rgba(0,0,0,0.05)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            contentArrowStyle={{
              borderRight: "7px solid black",
            }}
          >
            <div className="group relative">
              <h3 className="font-bold text-xl mb-2 flex justify-between items-center">
                {item.title}
                <button
                  onClick={() => navigate(item.link)}
                  className="ml-2 p-1 rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110"
                  title="View Details"
                >
                  <ArrowUpRight style={{ color: themeColor }} size={20} />
                </button>
              </h3>

              <h4 className="text-sm text-gray-600 mb-3">{item.subtitle}</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default AchievementsTimeline;
