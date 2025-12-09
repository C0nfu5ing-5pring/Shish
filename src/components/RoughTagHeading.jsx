import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";
import { useThemeColor } from "./ThemeColorContext";

const RoughTagHeading = ({ children }) => {
  const textRef = useRef(null);
  const svgRef = useRef(null);
  const themeColor = useThemeColor();

  useEffect(() => {
    if (!textRef.current || !svgRef.current) return;

    const rc = rough.svg(svgRef.current);
    const svg = svgRef.current;

    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const rect = textRef.current.getBoundingClientRect();

    const paddingX = 18;
    const paddingY = 10;

    const width = rect.width + paddingX * 2;
    const height = rect.height + paddingY * 2;

    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    const sketchBox = rc.rectangle(0, 0, width, height, {
      stroke: themeColor,
      strokeWidth: 2,
      fill: themeColor,
      fillStyle: "hachure",
      fillWeight: 0.8,
      roughness: 1.8,
    });

    sketchBox.style.opacity = 0.9;
    svg.appendChild(sketchBox);
  }, [themeColor, children]);

  return (
    <div className="relative inline-block">
      <svg
        ref={svgRef}
        className="absolute -z-10"
        style={{
          top: "-10px",
          left: "-18px",
          pointerEvents: "none",
        }}
      />

      <h2
        ref={textRef}
        className="px-5 py-3 text-center text-2xl md:text-3xl md:text-left text-black rounded-2xl inline-block"
      >
        {children}
      </h2>
    </div>
  );
};

export default RoughTagHeading;
