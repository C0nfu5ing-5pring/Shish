import { motion, useDragControls, AnimatePresence } from "motion/react";
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
import fileIcon from "../images/icons/fileIcon.png";
import { useState, useRef } from "react";

const Skills = ({ containerRef, onClose, activeWindow, setActiveWindow }) => {
  const isActive = activeWindow === "skills";
  const cardRef = useRef(null);
  const [activeFolder, setActiveFolder] = useState(null);
  const [activeTech, setActiveTech] = useState(null);
  const dragControls = useDragControls();

  const folders = [{ name: "Interests" }, { name: "Tech Stack" }];

  const techs = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "TailwindCSS", img: tailwindcss },
    { name: "SASS", img: sass },
    { name: "Motion", img: framermotion },
    { name: "GSAP", img: gsap },
    { name: "JS", img: js },
    { name: "React", img: react },
    { name: "Python", img: python },
    { name: "Github", img: github },
    { name: "GraphQL", img: graphQL },
    { name: "Visual Studio Code", img: vscode },
  ];

  const interests = [
    {
      name: "listen high quality to music",
    },
    {
      name: "code",
    },
    {
      name: "make 3d models for household use",
    },
    {
      name: "3d print stuff",
    },
    {
      name: "workout",
    },
  ];
  return (
    <motion.div
      ref={cardRef}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={containerRef}
      dragMomentum={false}
      onPointerDown={() => setActiveWindow("skills")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.5, y: 10 }}
      whileDrag={{ scale: 0.9 }}
      className={`bg-[var(--card)]/90 window border-2 border-[var(--border)] shadow-[var(--card-shadow)] shadow-xl absolute top-20 left-4 lg:left-[35%] overflow-hidden flex flex-col ${
        isActive ? "z-50" : "z-10"
      }`}
    >
      <div
        className="title-bar shrink-0 touch-none select-none"
        onPointerDown={(e) => dragControls.start(e)}
      >
        <button
          className="close"
          aria-label="Close window"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        />

        <h1 className="title">{activeFolder || "About Me"}</h1>
      </div>

      <div className="details-bar shrink-0 flex items-center gap-2">
        {activeFolder && (
          <button
            onClick={() => {
              setActiveFolder(null);
              setActiveTech(null);
            }}
            className="cursor-pointer"
          >
            ← Back
          </button>
        )}
        <span>{activeFolder || "Folders"}</span>
      </div>

      <div className="window-pane flex-1 min-h-0 overflow-y-auto">
        <AnimatePresence mode="wait">
          {!activeFolder ? (
            <motion.div
              key="folders"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="m-5 grid grid-cols-2 gap-5"
            >
              {folders.map((folder) => (
                <button
                  key={folder.name}
                  onClick={() => setActiveFolder(folder.name)}
                  className="flex flex-col items-center gap-1 text-xs font-bold cursor-pointer"
                >
                  <img
                    src={fileIcon}
                    alt=""
                    className="w-14 h-14 md:w-16 md:h-16 object-contain transition-transform duration-200 hover:scale-110"
                  />
                  {folder.name}
                </button>
              ))}
            </motion.div>
          ) : activeFolder === "Tech Stack" ? (
            <motion.div
              key="tech-stack"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="m-5 grid grid-cols-3 gap-5"
            >
              {techs.map((tech) => {
                const isTechActive = activeTech === tech.name;

                return (
                  <div
                    key={tech.name}
                    className="relative w-15 lg:w-20 h-15 lg:h-20 perspective cursor-pointer"
                    onClick={() =>
                      setActiveTech((prev) =>
                        prev === tech.name ? null : tech.name,
                      )
                    }
                  >
                    <motion.div
                      animate={{ rotateY: isTechActive ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <img
                          src={tech.img}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div
                        className="absolute inset-0 flex items-center justify-center text-[var(--text-muted)] text-xs px-1 text-center"
                        style={{
                          transform: "rotateY(180deg)",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        {tech.name}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="interests"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="m-5"
            >
              <p className="text-sm">I like to:</p>

              <div className="mt-2">
                {interests.map((interest, index) => {
                  return (
                    <>
                      <ul key={index}>
                        <li className="text-xs font-bold">- {interest.name}</li>
                      </ul>
                    </>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Skills;
