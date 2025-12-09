import { useEffect } from "react";
import gsap from "gsap";
import { useThemeColor } from "../components/ThemeColorContext";

const CustomCursor = () => {
  const themeColor = useThemeColor();
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    if (themeColor) {
      cursor.style.backgroundColor = themeColor;
      cursor.style.boxShadow = `0 0 20px ${themeColor}55`;
    }

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    const hoverElements = document.querySelectorAll(
      "a, button, .link, svg, img, h1, h2, h3, img"
    );

    const handleHover = () => {
      gsap.to(cursor, {
        scale: 2.2,
        opacity: 0.8,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    const handleHoverOut = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 0.4,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, [themeColor]);

  return (
    <div className="cursor fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[99999] transform -translate-x-1/2 -translate-y-1/2 opacity-40 mix-blend-difference" />
  );
};

export default CustomCursor;
