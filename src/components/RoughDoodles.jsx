import React, { useRef, useEffect, useState } from "react";
import rough from "roughjs/bin/rough";
import { useThemeColor } from "./ThemeColorContext";

function roughStar(rc, x, y, size, options) {
  const points = [];
  const outerRadius = size / 2;
  const innerRadius = outerRadius / 2.5;
  for (let i = 0; i < 10; i++) {
    const angle = (i * Math.PI) / 5;
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    points.push([x + r * Math.sin(angle), y - r * Math.cos(angle)]);
  }
  return rc.linearPath(points, options);
}

function roughTriangle(rc, x, y, size, options) {
  const height = (size * Math.sqrt(3)) / 2;
  const points = [
    [x, y],
    [x + size / 2, y + height],
    [x - size / 2, y + height],
    [x, y],
  ];
  return rc.linearPath(points, options);
}

function roughWavyLine(rc, x, y, length, amplitude, pointsCount, options) {
  const points = [];
  for (let i = 0; i <= pointsCount; i++) {
    const px = x + (i * length) / pointsCount;
    const py = y + amplitude * Math.sin((i / pointsCount) * 4 * Math.PI);
    points.push([px, py]);
  }
  return rc.curve(points, options);
}

export default function RoughDoodles({
  count = 30,
  width: propWidth,
  height: propHeight,
}) {
  const svgRef = useRef(null);
  const themeColor = useThemeColor();
  const [dimensions, setDimensions] = useState({
    width: propWidth || window.innerWidth,
    height: propHeight || window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: propWidth || window.innerWidth,
        height: propHeight || window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [propWidth, propHeight]);

  useEffect(() => {
    if (!svgRef.current) return;
    const rc = rough.svg(svgRef.current);

    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }

    for (let i = 0; i < count; i++) {
      const x = Math.random() * dimensions.width;
      const y = Math.random() * dimensions.height;
      const size = 50 + Math.random() * 100;

      const opacity = 0.05 + Math.random() * 0.5;

      const shapeType = Math.floor(Math.random() * 8);
      const options = {
        stroke: themeColor,
        strokeWidth: 2,
        fillStyle: "hachure",
        fill: themeColor,
        opacity: opacity,
      };

      let node;
      switch (shapeType) {
        case 0:
          node = rc.rectangle(x, y, size, size / 2, options);
          break;
        case 1:
          node = rc.circle(x, y, size, options);
          break;
        case 2:
          node = rc.ellipse(x, y, size, size / 2, options);
          break;
        case 3:
          node = rc.line(x, y, x + size, y + size / 2, options);
          break;
        case 4:
          node = roughTriangle(rc, x, y, size, options);
          break;
        case 5:
          node = roughStar(rc, x, y, size, options);
          break;
        case 6:
          node = roughWavyLine(rc, x, y, size, size / 5, 10, options);
          break;
        default:
          node = rc.rectangle(x, y, size, size / 2, options);
      }

      if (node.nodeType === 1) {
        node.style.opacity = opacity;
      }

      svgRef.current.appendChild(node);
    }
  }, [count, dimensions, themeColor]);

  return (
    <svg
      ref={svgRef}
      width={dimensions.width}
      height={dimensions.height}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 90,
        overflow: "hidden",
      }}
    ></svg>
  );
}
