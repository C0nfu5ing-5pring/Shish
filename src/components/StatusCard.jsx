import { motion } from "motion/react";
import dot from "../images/dot.png";

const StatusCard = ({
  containerRef,
  onClose,
  setActiveWindow,
  activeWindow,
}) => {
  const isActive = activeWindow === "status";

  return (
    <>
      <motion.div
        drag
        dragConstraints={containerRef}
        onMouseDown={() => setActiveWindow("status")}
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
        className={`bg-[#ffffffee] border-2 absolute w-80 overflow-auto flex flex-col cursor-pointer ${
          isActive ? "z-50" : "z-10"
        }`}
      >
        <div className="flex justify-between border-b bg-gray-400 px-3 py-1">
          <div>
            <h1 className="font-black text-xl">Status</h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="bg-red-600 border-2 font-black py-1 px-2 cursor-pointer"
          >
            <p>X</p>
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

        {/* 
        <li>
          <h1>Available for collaboration</h1>
        </li>
        <li>
          <h1>Working on SaralRates</h1>
        </li>
        <li>
          <h1>Flavortown</h1>
        </li>
        <li>
          <h1>Studying for Annual Exam</h1>
        </li> */}
      </motion.div>
    </>
  );
};

export default StatusCard;
