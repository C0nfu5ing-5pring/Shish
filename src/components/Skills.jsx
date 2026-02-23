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

  const top = Math.floor(Math.random() * 30) + 1;
  const left = Math.floor(Math.random() * 3) + 1;

  const dragControls = useDragControls();

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
      className={`bg-[var(--card)]/90 border-2 border-[var(--border)] absolute top-${top} left-${left} overflow-auto flex flex-col cursor-pointer ${
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
          className="bg-red-600 border-2 border-black font-black py-1 px-2 cursor-pointer"
        >
          <p className="text-xs lg:text-base text-black">X</p>
        </motion.button>
      </div>

      <div className="m-5 grid grid-cols-3 gap-5">
        <img className="lg:h-20 lg:w-25 w-20 h-15" src={html} alt="HTML" />
        <img className="lg:h-20 lg:w-25 w-20 h-15" src={css} alt="CSS" />
        <img
          className="lg:h-20 lg:w-25 w-20 h-15"
          src={tailwindcss}
          alt="Tailwind"
        />
        <img className="lg:h-20 lg:w-25 w-20 h-15" src={sass} alt="SASS" />
        <img
          className="lg:h-20 lg:w-25 w-20 h-15"
          src={framermotion}
          alt="Framer Motion"
        />
        <img className="lg:h-20 lg:w-25 w-20 h-15" src={gsap} alt="GSAP" />
        <img className="lg:h-20 lg:w-25 w-20 h-15" src={js} alt="JS" />
        <img className="lg:h-20 lg:w-25 w-20 h-15" src={react} alt="React" />
        <img className="lg:h-20 lg:w-25 w-20 h-15" src={python} alt="Python" />
        <img className="lg:h-20 lg:w-25 w-20 h-15" src={github} alt="Github" />
        <img className="lg:h-20 lg:w-25 w-20 h-15" src={vscode} alt="VS Code" />
        <img
          className="lg:h-20 lg:w-25 w-20 h-15"
          src={graphQL}
          alt="GraphQL"
        />
      </div>
    </motion.div>
  );
};

export default Skills;
