import { motion, useDragControls } from "motion/react";
import dot from "../images/dot.png";
import { useState } from "react";

const StatusCard = ({
  containerRef,
  onClose,
  setActiveWindow,
  activeWindow,
}) => {
  const isActive = activeWindow === "status";
  const CARD_WIDTH = 200;
  const CARD_HEIGHT = 100;
  const [initialPos] = useState(() => ({
    x: Math.random() * (window.innerWidth - CARD_WIDTH),
    y: Math.random() * (window.innerHeight - CARD_HEIGHT),
  }));

  const dragControls = useDragControls();

  return (
    <>
      <motion.div
        drag
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={containerRef}
        onMouseDown={() => setActiveWindow("status")}
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
        className={`bg-[#ffffffee] border-2 absolute top-10 left-0 w-80 overflow-auto flex flex-col cursor-pointer ${
          isActive ? "z-50" : "z-10"
        }`}
      >
        <div
          onPointerDown={(e) => dragControls.start(e)}
          className="flex justify-between border-b bg-gray-400 px-3 py-1 touch-none"
        >
          <div>
            <h1 className="font-black text-lg lg:text-xl">Status</h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="bg-red-600 border-2 font-black py-1 px-2 cursor-pointer"
          >
            <p className="text-xs lg:text-base">X</p>
          </motion.button>
        </div>

        <div className="px-3 py-3 flex flex-col gap-3">
          <div className="flex gap-1">
            <img src={dot} className="w-5" alt="dot" />
            <h1>Available for collaboration</h1>
          </div>
          <div className="flex gap-1">
            <img src={dot} className="w-5" alt="dot" />
            <h1>Working on Saral Rates</h1>
          </div>
          <div className="flex gap-1">
            <img src={dot} className="w-5" alt="dot" />
            <h1>Hackclubbing (Flavortown)</h1>
          </div>
          <div className="flex gap-1">
            <img src={dot} className="w-5" alt="dot" />
            <h1>Studying for annual exams</h1>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default StatusCard;
