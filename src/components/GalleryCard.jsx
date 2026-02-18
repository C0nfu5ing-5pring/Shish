import { motion } from "motion/react";
import bbpsHackathon from "../images/gallery/bbpsHackathonImage.jpeg";
import bbpsHackathonImage2 from "../images/gallery/bbpsHackathonImage02.jpeg";

const GalleryCard = ({
  containerRef,
  onClose,
  activeWindow,
  setActiveWindow,
}) => {
  const isActive = activeWindow === "gallery";

  return (
    <>
      <motion.div
        drag
        onMouseDown={() => setActiveWindow("gallery")}
        dragConstraints={containerRef}
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
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
        className={`bg-[#ffffffee] border-2 absolute h-125 overflow-auto flex flex-col cursor-pointer ${
          isActive ? "z-50" : "z-10"
        }`}
      >
        <div className="flex justify-between border-b bg-gray-400 px-3 py-1">
          <div>
            <h1 className="font-black text-xl">Gallery</h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="bg-red-600 border-2 font-black py-1 px-2 cursor-pointer"
          >
            <p>X</p>
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
    </>
  );
};

export default GalleryCard;
