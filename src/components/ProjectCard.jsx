import { motion, useDragControls } from "motion/react";
import IndividualProjectCard from "./IndividualProjectCard";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import axios from "axios";

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

const ProjectCard = ({
  containerRef,
  onClose,
  setActiveWindow,
  activeWindow,
}) => {
  const [repos, setRepos] = useState([]);
  const isActive = activeWindow === "project";
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    if (!containerRef.current || !cardRef.current) return;
    setPos(getRandomPosition(containerRef.current, cardRef.current));
  }, [containerRef]);

  useEffect(() => {
    axios
      .get("/api/github")
      .then((res) => {
        setRepos(res.data.data.user.pinnedItems.nodes);
      })
      .catch((err) => console.log(err));
  }, []);

  const dragControls = useDragControls();

  return (
    <motion.div
      ref={cardRef}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={containerRef}
      onMouseDown={() => setActiveWindow("project")}
      initial={{ opacity: 0 }}
      animate={{
        x: pos.x,
        y: pos.y,
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        y: 10,
      }}
      whileDrag={{ scale: 0.9 }}
      className={`bg-[var(--card)]/90 border-2 border-[var(--border)] absolute bottom-30 right-20 overflow-auto flex flex-col ${
        isActive ? "z-50" : "z-10"
      }`}
    >
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="flex justify-between items-center border-b border-(--border) bg-(--header-bg) px-2 lg:px-3 py-1 touch-none"
        data-cursor="pointer"
      >
        <h1 className="font-black text-base lg:text-xl">Projects</h1>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="bg-red-600 border-2 border-black font-black py-1 px-2"
        >
          <p className="text-xs lg:text-base text-black">X</p>
        </motion.button>
      </div>

      <div className="m-5 grid grid-cols-2 gap-5">
        {repos.map((repo, index) => (
          <IndividualProjectCard
            key={index}
            url={repo.homepageUrl || repo.url}
            title={repo.name}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
