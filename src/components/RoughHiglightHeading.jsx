import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";
import { useThemeColor } from "./ThemeColorContext";

const RoughHighlightHeading = ({ children }) => {
  const textRef = useRef(null);
  const svgRef = useRef(null);
  const themeColor = useThemeColor();

  useEffect(() => {
    if (!textRef.current || !svgRef.current) return;

    const svg = svgRef.current;
    const rc = rough.svg(svg);
    const rect = textRef.current.getBoundingClientRect();

    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const paddingX = 18;
    const paddingY = 10;

    const width = rect.width + paddingX * 2;
    const height = rect.height + paddingY * 2;

    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    const highlight = rc.rectangle(0, 0, width, height, {
      fill: themeColor,
      fillStyle: "hachure",
      stroke: themeColor,
      roughness: 3,
      fillWeight: 0.4,
    });

    svg.appendChild(highlight);

    svg.style.left = `-${paddingX}px`;
    svg.style.top = `-${paddingY}px`;
  }, [children, themeColor]);

  return (
    <div className="relative inline-block">
      <svg
        ref={svgRef}
        className="absolute -z-10"
        style={{ pointerEvents: "none" }}
      />
      <h2 ref={textRef} className="px-5 py-3 text-xl md:text-2xl font-semibold">
        {children}
      </h2>
    </div>
  );
};

export default RoughHighlightHeading;
