import { motion, useDragControls } from "motion/react";
import { useState, useRef } from "react";
import fileIcon from "../images/icons/fileIcon.png";

const DOCK_HEIGHT = 50;

const ContactCard = ({
  containerRef,
  onClose,
  setActiveWindow,
  activeWindow,
}) => {
  const isActive = activeWindow === "contact";
  const cardRef = useRef(null);
  const dragControls = useDragControls();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const folders = [
    { name: "Github", url: "https://github.com/C0nfu5ing-5pring" },
    { name: "Music", url: "https://music.apple.com/profile/c0nfu5ing" },
    { name: "Mail", url: "mailto:shishfruitwala@icloud.com" },
  ];

  return (
    <motion.div
      ref={cardRef}
      drag={!isFullscreen}
      dragListener={false}
      dragControls={dragControls}
      dragConstraints={containerRef}
      dragMomentum={false}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.5, y: 10 }}
      whileDrag={{ scale: 0.98 }}
      onPointerDown={() => setActiveWindow("contact")}
      className={`window absolute flex flex-col overflow-hidden ${
        isFullscreen
          ? "fixed inset-x-0 top-0 !w-screen !max-w-none"
          : "w-[90vw] md:w-[420px] left-1/2 top-14 -translate-x-1/2"
      } ${isFullscreen ? "z-[9999]" : isActive ? "z-50" : "z-10"}`}
      style={isFullscreen ? { height: `calc(100dvh - ${DOCK_HEIGHT}px)` } : {}}
    >
      <div
        className="title-bar shrink-0 touch-none select-none"
        onPointerDown={(e) => {
          if (!isFullscreen) dragControls.start(e);
        }}
        style={{
          cursor: isFullscreen ? "default" : "grab",
        }}
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

        <h1 className="title">Socials</h1>
      </div>

      <div className="details-bar shrink-0">
        <span>3 Folders</span>
      </div>

      <div
        className={`window-pane min-h-0 overflow-auto flex items-center justify-center ${
          isFullscreen ? "flex-1" : ""
        }`}
      >
        <div className="flex items-center justify-center gap-10 w-full p-6 box-border">
          {folders.map((folder) => (
            <a
              key={folder.name}
              href={folder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-sm"
            >
              <img src={fileIcon} alt="" draggable="false" />
              {folder.name}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
