import { motion, useDragControls } from "motion/react";
import html from "../images/tech/html.png";
import css from "../images/tech/css.png";
import tailwindcss from "../images/tech/tailwindcss.png";
import sass from "../images/tech/sass.png";
import js from "../images/tech/js.png";
import react from "../images/tech/react.png";
import framermotion from "../images/tech/framermotion.png";
import gsap from "../images/tech/gsap.png";
import python from "../images/tech/python.png";
import github from "../images/tech/github.png";
import vscode from "../images/tech/vscode.png";
import graphQL from "../images/tech/graphQL.png";
import { useState, useRef, useLayoutEffect } from "react";

const getRandomPosition = (container, card) => {
  const c = container.getBoundingClientRect();
  const b = card.getBoundingClientRect();

  const maxX = c.width - b.width;
  const maxY = c.height - b.height;

  return {
    x: Math.random() * Math.max(0, maxX),
    y: Math.random() * Math.max(0, maxY),
  };
};

const Skills = ({ containerRef, onClose, activeWindow, setActiveWindow }) => {
  const isActive = activeWindow === "skills";
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    if (!containerRef.current || !cardRef.current) return;
    setPos(getRandomPosition(containerRef.current, cardRef.current));
  }, []);

  const dragControls = useDragControls();

  const techs = [
    {
      name: "HTML (Hyper Text Markup Language)",
      img: html,
    },
    {
      name: "CSS (Cascading Style Sheets)",
      img: css,
    },
    {
      name: "TailwindCSS",
      img: tailwindcss,
    },
    {
      name: "SASS (Syntactically Awesome Style Sheets)",
      img: sass,
    },
    {
      name: "Motion",
      img: framermotion,
    },
    {
      name: "GSAP (GreenSock Animation Platform)",
      img: gsap,
    },
    {
      name: "JS (JavaScript)",
      img: js,
    },
    {
      name: "React",
      img: react,
    },
    {
      name: "Python",
      img: python,
    },
    {
      name: "Github",
      img: github,
    },
    {
      name: "GraphQL",
      img: graphQL,
    },
    {
      name: "Visual Studio Code",
      img: vscode,
    },
  ];

  const [activeTech, setActiveTech] = useState(null);

  return (
    <motion.div
      ref={cardRef}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={containerRef}
      onMouseDown={() => setActiveWindow("skills")}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: pos.x,
        y: pos.y,
      }}
      exit={{ opacity: 0, scale: 0.5, y: 10 }}
      whileDrag={{ scale: 0.9 }}
      className={`bg-[var(--card)]/90 border-2 border-[var(--border)] absolute top-10 lg:right-138 right-19 overflow-auto flex flex-col ${
        isActive ? "z-50" : "z-10"
      }`}
    >
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="flex justify-between items-center border-b border-[var(--border)]  bg-[var(--header-bg)] px-3 py-1 touch-none"
      >
        <h1 className="font-black text-lg lg:text-xl">Technologies I use</h1>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="bg-red-600 border-2 border-black font-black py-1 px-2"
          data-cursor="pointer"
        >
          <p className="text-xs lg:text-base text-black">X</p>
        </motion.button>
      </div>

      <div className="m-5 grid grid-cols-3 gap-5">
        {techs.map((tech) => {
          return (
            <div
              key={tech.name}
              className="relative flex flex-col items-center"
              onMouseEnter={() => {
                if (!("ontouchstart" in window)) setActiveTech(tech.name);
              }}
              onMouseLeave={() => {
                if (!("ontouchstart" in window)) setActiveTech(null);
              }}
              onClick={() =>
                setActiveTech((prev) => (prev === tech.name ? null : tech.name))
              }
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-15 lg:w-20 object-fit"
              />

              {activeTech === tech.name && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute -bottom-6 bg-[var(--bg)] text-[var(--text)] text-xs px-2 py-1 border border-[var(--border)]"
                >
                  {tech.name}
                </motion.span>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
