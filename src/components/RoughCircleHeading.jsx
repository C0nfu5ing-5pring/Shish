import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";
import { useThemeColor } from "./ThemeColorContext";

const RoughCircleHeading = ({ children }) => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const themeColor = useThemeColor();

  useEffect(() => {
    const draw = () => {
      if (!containerRef.current || !svgRef.current) return;

      const textEl = containerRef.current;
      const svg = svgRef.current;
      const rc = rough.svg(svg);

      while (svg.firstChild) svg.removeChild(svg.firstChild);

      const rect = textEl.getBoundingClientRect();
      const vw = window.innerWidth;

      let paddingX = 40;
      let paddingY = 25;

      if (vw < 640) {
        paddingX = 20;
        paddingY = 14;
      } else if (vw < 1024) {
        paddingX = 30;
        paddingY = 20;
      }

      const width = rect.width + paddingX * 2;
      const height = rect.height + paddingY * 2;

      svg.setAttribute("width", width);
      svg.setAttribute("height", height);

      const ellipse = rc.ellipse(width / 2, height / 2, width, height, {
        stroke: themeColor,
        strokeWidth: 2,
        roughness: 2.5,
        bowing: 2,
      });

      svg.appendChild(ellipse);

      svg.style.left = `-${paddingX}px`;
      svg.style.top = `-${paddingY}px`;
    };

    draw();
    window.addEventListener("resize", draw);

    return () => window.removeEventListener("resize", draw);
  }, [themeColor, children]);

  return (
    <div className="relative inline-block">
      <svg
        ref={svgRef}
        className="absolute -z-10"
        style={{
          top: 0,
          left: 0,
          pointerEvents: "none",
          overflow: "visible",
        }}
      />

      <h1
        ref={containerRef}
        className="text-6xl md:text-7xl lg:text-7.5xl font-semibold mx-auto text-center"
      >
        {children}
      </h1>
    </div>
  );
};

export default RoughCircleHeading;
