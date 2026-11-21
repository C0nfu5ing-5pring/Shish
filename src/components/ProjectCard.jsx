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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const isActive = activeWindow === "project";
  const cardRef = useRef(null);
  const [pos] = useState({ x: 0, y: 0 });
  const dragControls = useDragControls();

  useEffect(() => {
    axios
      .get("/api/github")
      .then((res) => {
        setRepos(res.data.data.user.pinnedItems.nodes);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
      className={`absolute window top-30 left-30 w-[360px] min-h-[280px] max-h-[70vh]  border-2 flex flex-col overflow-hidden ${
        isActive ? "z-50" : "z-10"
      }`}
    >
      <div
        className="title-bar shrink-0 touch-none select-none"
        onPointerDown={(e) => dragControls.start(e)}
      >
        <button
          className="close"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        />

        <h1 className="title">Projects</h1>
      </div>

      <div className="m-5 grid grid-cols-2 gap-5 flex-1 min-h-[180px]">
        {loading ? (
          <p className="col-span-2 text-center">
            Loading my "awesome" projects ;)
          </p>
        ) : error ? (
          <p className="col-span-2 text-center">
            Failed to load projects! Someone ate them ig
          </p>
        ) : repos.length === 0 ? (
          <p className="col-span-2 text-center">
            No projects found. Someone ate them ig
          </p>
        ) : (
          repos.map((repo) => (
            <IndividualProjectCard
              key={repo.id || repo.name}
              url={repo.homepageUrl || repo.url}
              title={repo.name}
            />
          ))
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
