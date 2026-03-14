import { motion, useDragControls } from "motion/react";
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
        className={`bg-[var(--card)]/90 border-2 border-[var(--border)] shadow-[var[--card-shadow]] shadow-xl absolute top-10 left-0 w-60 lg:w-80 overflow-auto flex flex-col ${
          isActive ? "z-50" : "z-10"
        }`}
      >
        <div
          onPointerDown={(e) => dragControls.start(e)}
          className="flex justify-between border-b border-[var(--border)] bg-[var(--header-bg-dark)] px-3 py-1 touch-none"
        >
          <div>
            <h1 className="font-black text-lg lg:text-xl">Status</h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="bg-red-600 border-2 border-black font-black py-1 px-2"
            data-cursor="pointer"
          >
            <p className="text-xs lg:text-base text-black">X</p>
          </motion.button>
        </div>

        <div className="px-3 py-3 flex flex-col gap-3">
          <h1 className="text-xs lg:text-base w-fit">
            Available for collaboration
          </h1>
          <h1 className="text-xs lg:text-base w-fit">Working on Saral Rates</h1>
          <h1 className="text-xs lg:text-base w-fit">
            Hackclubbing (Flavortown)
          </h1>
        </div>
      </motion.div>
    </>
  );
};

export default StatusCard;
