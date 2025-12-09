import Tilt from "react-parallax-tilt";
import { Github, ExternalLink } from "lucide-react";
import { useThemeColor } from "../components/ThemeColorContext";

const ProjectCard = ({ title, description, tech, github, live, image }) => {
  const themeColor = useThemeColor();

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor={themeColor}
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      scale={1.05}
      transitionSpeed={1000}
      className="w-full sm:w-[340px] h-[420px] bg-black/5 border border-black/90 rounded-2xl overflow-hidden backdrop-blur-lg flex flex-col justify-between p-5 hover:bg-white/10 transition-all duration-300"
    >
      <div className="w-auto">
        <div className="overflow-hidden border-2 border-black/30 rounded-2xl mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover opacity-90 hover:opacity-100 transition-all duration-300"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-black mb-2 whitespace-nowrap">
          {title}
        </h3>
        <p className="text-gray-800 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {tech?.map((t, i) => (
            <span
              key={i}
              className="text-xs border border-black/20 text-gray-600 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 mt-4">
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            <Github className="text-black hover:text-gray-800 transition" />
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noreferrer">
            <ExternalLink className="text-black hover:text-gray-800 transition" />
          </a>
        )}
      </div>
    </Tilt>
  );
};

export default ProjectCard;
