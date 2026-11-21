import { motion, useDragControls } from "motion/react";
import IndividualProjectCard from "./IndividualProjectCard";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const ProjectCard = ({
  containerRef,
  onClose,
  setActiveWindow,
  activeWindow,
}) => {
  const [repos, setRepos] = useState([]);
  const isActive = activeWindow === "project";
  const cardRef = useRef(null);
  const [pos] = useState({ x: 0, y: 0 });

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
      className={`bg-[var(--card)]/90 title-bar border-2 border-[var(--border)] absolute top-30 left-30 overflow-auto flex flex-col ${
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

        <h1 className="title">Projects</h1>
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
