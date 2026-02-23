import { motion, useDragControls } from "motion/react";
import bbpsHackathon from "../images/gallery/bbpsHackathonImage.jpeg";
import bbpsHackathonImage2 from "../images/gallery/bbpsHackathonImage02.jpeg";
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

const GalleryCard = ({
  containerRef,
  onClose,
  activeWindow,
  setActiveWindow,
}) => {
  const isActive = activeWindow === "gallery";
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    if (!containerRef.current || !cardRef.current) return;
    setPos(getRandomPosition(containerRef.current, cardRef.current));
  }, []);

  const dragControls = useDragControls();

  return (
    <motion.div
      ref={cardRef}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={containerRef}
      onMouseDown={() => setActiveWindow("gallery")}
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        x: pos.x,
        y: pos.y,
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        y: 10,
      }}
      whileDrag={{
        scale: 0.9,
      }}
      className={`bg-[#ffffffee] border-2 absolute top-30 right-30 w-[75%] md:w-[35%] lg:w-[25%] overflow-auto flex flex-col cursor-pointer ${
        isActive ? "z-50" : "z-10"
      }`}
    >
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="flex justify-between items-center border-b bg-gray-400 px-3 py-1 touch-none"
      >
        <h1 className="font-black text-lg lg:text-xl">Gallery</h1>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="bg-red-600 border-2 font-black py-1 px-2 cursor-pointer"
        >
          <p className="text-xs lg:text-base">X</p>
        </motion.button>
      </div>

      <div className="m-5 grid grid-cols-2 gap-5">
        <div className="border-3">
          <img
            className="w-50"
            src={bbpsHackathon}
            alt="BBPS Hackathon 2024 - Most Innovative Project Award"
          />
        </div>

        <div className="border-3 h-fit">
          <img
            className="w-50"
            src={bbpsHackathonImage2}
            alt="BBPS Hackathon 2024 - Felicitation"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
