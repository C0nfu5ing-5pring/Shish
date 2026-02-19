import { motion } from "motion/react";
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
import { useState } from "react";

const Skills = ({ containerRef, onClose, activeWindow, setActiveWindow }) => {
  const isActive = activeWindow === "skills";

  const CARD_WIDTH = 400;
  const CARD_HEIGHT = 300;
  const [initialPos] = useState(() => ({
    x: Math.random() * (window.innerWidth - CARD_WIDTH),
    y: Math.random() * (window.innerHeight - CARD_HEIGHT),
  }));
  return (
    <>
      <motion.div
        drag
        dragConstraints={containerRef}
        onMouseDown={() => setActiveWindow("skills")}
        initial={{
          x: initialPos.x,
          y: initialPos.y,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.5,
          y: 10,
        }}
        whileDrag={{
          scale: 0.9,
        }}
        className={`bg-[#ffffffee] border-2 absolute overflow-auto flex flex-col cursor-pointer ${
          isActive ? "z-50" : "z-10"
        }`}
      >
        <div className="flex justify-between items-center border-b bg-gray-400 px-3 py-1">
          <div>
            <h1 className="font-black text-lg lg:text-xl">
              Technologies I use
            </h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="bg-red-600 border-2 font-black py-1 px-2 cursor-pointer"
          >
            <p className="text-xs lg:text-base">X</p>
          </motion.button>
        </div>

        <div className="m-5 grid grid-cols-3 gap-5">
          <img
            className="lg:h-20 lg:w-25 w-20 h-15 object-fit"
            src={html}
            alt="HTML logo"
          />
          <img
            className="lg:h-20 lg:w-25 w-20 h-15 object-fit"
            src={css}
            alt="CSS logo"
          />
          <img
            className="lg:h-20 lg:w-25 w-20 h-15 object-fit"
            src={tailwindcss}
            alt="TailiwindCSS logo"
          />
          <img
            className="lg:h-20 lg:w-25 w-20 h-15 object-fit"
            src={sass}
            alt="SASS logo"
          />
          <img
            className="lg:h-20 lg:w-25 w-20 h-15 object-fit"
            src={framermotion}
            alt="FramerMotion logo"
          />
          <img
            className="lg:h-20 lg:w-25 w-20 h-15 object-fit"
            src={gsap}
            alt="GSAP logo"
          />
          <img
            className="lg:h-20 lg:w-25 w-20 h-15 object-fit"
            src={js}
            alt="JS logo"
          />
          <img
            className="lg:h-20 lg:w-25 w-20 h-15 object-fit"
            src={react}
            alt="React logo"
          />
          <img
            className="lg:h-20 lg:w-25 w-20 h-15 object-fit"
            src={python}
            alt="Python logo"
          />
          <img
            className="lg:h-20 lg:w-25 w-20 h-15 object-fit"
            src={github}
            alt="Github logo"
          />
          <img
            className="lg:h-20 lg:w-25 w-20 h-15 object-fit"
            src={vscode}
            alt="VS code logo"
          />
          <img
            className="lg:h-20 lg:w-25 w-20 h-15 object-fit"
            src={graphQL}
            alt="GraphQL logo"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
