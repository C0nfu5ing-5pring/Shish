import { useState, useEffect, useMemo } from "react";

function randomPath(width, height) {
  const startX = Math.random() * width;
  const startY = Math.random() * height;

  const c1X = Math.random() * width;
  const c1Y = Math.random() * height;

  const c2X = Math.random() * width;
  const c2Y = Math.random() * height;

  const endX = Math.random() * width;
  const endY = Math.random() * height;

  return `M ${startX} ${startY} 
          C ${c1X} ${c1Y}, ${c2X} ${c2Y}, ${endX} ${endY}`;
}

export default function Scribbles({ count = 4, themeColor }) {
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });

  useEffect(() => {
    function updateDimensions() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 640) {
        // Small screens (mobile)
        setDimensions({ width: 200, height: 500 }); // narrow & tall
      } else if (screenWidth < 1024) {
        // Medium screens (tablet)
        setDimensions({ width: 300, height: 400 });
      } else {
        setDimensions({ width: 400, height: 400 }); // Default
      }
    }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const paths = useMemo(() => {
    return Array.from({ length: count }).map(() =>
      randomPath(dimensions.width, dimensions.height)
    );
  }, [count, dimensions]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
      >
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={themeColor}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.15"
            filter="blur(0.5px)"
          />
        ))}
      </svg>
    </div>
  );
}
