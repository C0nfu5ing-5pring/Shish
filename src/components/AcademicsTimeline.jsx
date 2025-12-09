import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useThemeColor } from "./ThemeColorContext";
import RoughCircleHeading from "./RoughCircleHeading";
import RoughTagHeading from "./RoughTagHeading";

export default function AcademicsTimeline() {
  const themeColor = useThemeColor();
  const timelineData = [
    {
      date: "2013-2014",
      title: "Montessori 1",
      subtitle: "Bal Bharati Public School, Jhanor",
      description:
        "The very beginning of my academic journey where I learned my ABCs, made my first friends, and discovered that school could actually be fun.",
      icon: "https://img.icons8.com/color/48/000000/school.png",
    },
    {
      date: "2023-2024",
      title: "Class 10 (CBSE)",
      subtitle: "Bal Bharati Public School, Jhanor",
      description:
        "Completed Class 10 with 82% in CBSE Board Exams. This year shaped my academic discipline and curiosity for science, which later led me to choose the PCB stream.",
      icon: "https://img.icons8.com/color/48/000000/graduation-cap.png",
    },
  ];

  return (
    <div className="w-full py-16">
      <section className="pb-20 p-15 lg:px-25 flex justify-center">
        <RoughCircleHeading children={"Academics"} />
      </section>
      <section className="flex justify-center mb-15">
        <RoughTagHeading children="My Academic Journey" />
      </section>

      <VerticalTimeline lineColor={`${themeColor}`}>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            iconStyle={{
              background: "white",
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
              background: "rgba(0,0,0,0.05)",
              border: `1px solid ${themeColor}`,
              backdropFilter: "blur(8px)",
              color: `${themeColor}`,
              borderRadius: "1rem",
              boxShadow: "0 0 25px rgba(0,0,0,0.05)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(0,0,0)",
            }}
          >
            <h3 className="font-bold text-xl mb-1">{item.title}</h3>
            <h4 className="text-sm text-gray-900 mb-3">{item.subtitle}</h4>
            <p className="text-gray-800 leading-relaxed text-sm">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
