import { motion } from "motion/react";

const AcitivitesCard = ({ containerRef, onClose }) => {
  return (
    <>
      <motion.div
        drag
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
        className="bg-[#ffffffee] border-2 absolute h-125 overflow-auto flex flex-col cursor-pointer"
      >
        <div className="flex justify-between border-b bg-gray-400 px-3 py-1">
          <div>
            <h1 className="font-black text-xl">Recent Activites</h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="bg-red-600 border-2 font-black py-1 px-2 cursor-pointer"
          >
            <p>X</p>
          </motion.button>
        </div>

        <div className="m-5 grid grid-cols-2 gap-5">Coming soon</div>
      </motion.div>
    </>
  );
};

export default AcitivitesCard;
