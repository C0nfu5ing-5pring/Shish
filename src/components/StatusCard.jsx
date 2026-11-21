import { motion, useDragControls } from "motion/react";

const StatusCard = ({
  containerRef,
  onClose,
  setActiveWindow,
  activeWindow,
}) => {
  const isActive = activeWindow === "status";
  const dragControls = useDragControls();

  const statuses = [
    { name: "Testing limitations of my 3D Printer" },
    { name: "Obsessed with my Polaroid Now Camera" },
    { name: "Hackclubbing - participating in Phantom" },
    { name: "Preparing for Preboards" },
  ];

  return (
    <>
      <motion.div
        drag
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={containerRef}
        onMouseDown={() => setActiveWindow("status")}
        initial={{
          x: 100,
          y: 100,
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
        className={`bg-[var(--card)]/90 window border-2 border-[var(--border)] shadow-[var[--card-shadow]] shadow-xl absolute top-10 left-0 w-60 lg:w-80 overflow-auto flex flex-col ${
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

          <h1 className="title">{"Status"}</h1>
        </div>

        <div className="px-3 py-3 flex flex-col gap-3">
          {statuses.map((status) => {
            return <h1>{status.name}</h1>;
          })}
        </div>
      </motion.div>
    </>
  );
};

export default StatusCard;
