import { motion, useDragControls, useMotionValue } from "motion/react";
import { createPortal } from "react-dom";
import { useState, useRef, useLayoutEffect } from "react";

import email from "../images/socials/email.png";
import apple_music from "../images/socials/applemusic.png";
import github from "../images/tech/github.png";

const DOCK_HEIGHT = 50;

const getRandomPosition = (container, card) => {
  const c = container.getBoundingClientRect();
  const b = card.getBoundingClientRect();

  return {
    x: Math.random() * Math.max(0, c.width - b.width),
    y: Math.random() * Math.max(0, c.height - b.height),
  };
};

const ContactCard = ({
  containerRef,
  onClose,
  setActiveWindow,
  activeWindow,
}) => {
  const isActive = activeWindow === "contact";

  const cardRef = useRef(null);
  const dragControls = useDragControls();
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  useLayoutEffect(() => {
    if (!containerRef.current || !cardRef.current) return;

    setPos(getRandomPosition(containerRef.current, cardRef.current));
  }, [containerRef]);

  useLayoutEffect(() => {
    dragX.set(0);
    dragY.set(0);
  }, [isFullscreen, dragX, dragY]);

  const handleFocus = () => {
    setActiveWindow("contact");
  };

  const handleDragStart = (e) => {
    if (isFullscreen) return;

    handleFocus();
    dragControls.start(e);
  };

  const handleDragEnd = (_, info) => {
    setPos((previous) => ({
      x: previous.x + info.offset.x,
      y: previous.y + info.offset.y,
    }));

    dragX.set(0);
    dragY.set(0);
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    handleFocus();
    setIsFullscreen((previous) => !previous);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return createPortal(
    <motion.div
      ref={cardRef}
      className={`window ${isActive ? "active" : ""}`}
      drag={!isFullscreen}
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={!isFullscreen ? containerRef : undefined}
      dragMomentum={false}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      onPointerDown={handleFocus}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        left: isFullscreen ? 0 : pos.x,
        top: isFullscreen ? 0 : pos.y,
        width: isFullscreen ? "100vw" : "320px",
        height: isFullscreen ? `calc(100dvh - ${DOCK_HEIGHT}px)` : "auto",
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
      }}
      transition={{ duration: 0.2 }}
      style={{
        position: isFullscreen ? "fixed" : "absolute",
        left: 0,
        top: 0,
        x: dragX,
        y: dragY,
        zIndex: isFullscreen ? 9999 : isActive ? 50 : 10,
        boxSizing: "border-box",
        maxWidth: "none",
        margin: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="title-bar"
        onPointerDown={handleDragStart}
        style={{
          cursor: isFullscreen ? "default" : "grab",
          touchAction: "none",
          flexShrink: 0,
        }}
      >
        <button
          type="button"
          aria-label="Close window"
          title="Close"
          className="close window-control close-control"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={handleClose}
        />

        <h1 className="title">Contact</h1>

        <button
          type="button"
          aria-label={isFullscreen ? "Restore window" : "Fullscreen"}
          title={isFullscreen ? "Restore" : "Fullscreen"}
          className="resize window-control fullscreen-control"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={toggleFullscreen}
        />
      </div>

      <div className="details-bar" style={{ flexShrink: 0 }}>
        <span>Socials</span>
      </div>

      <div
        className={`window-pane min-h-0 overflow-auto flex items-center justify-center ${
          isFullscreen ? "flex-1" : ""
        }`}
      >
        <div className="flex items-center justify-center gap-10 w-full p-6 box-border">
          <a
            href="mailto:shishfruitwala29@gmail.com"
            aria-label="Send an email"
            className="flex items-center justify-center"
          >
            <img
              src={email}
              alt="Email"
              className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20 object-contain cursor-pointer transition-transform duration-200 ease-in-out hover:rotate-[12deg] hover:scale-110"
            />
          </a>

          <a
            href="https://music.apple.com/profile/c0nfu5ing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apple Music profile"
            className="flex items-center justify-center"
          >
            <img
              src={apple_music}
              alt="Apple Music"
              className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20 object-contain cursor-pointer transition-transform duration-200 ease-in-out hover:rotate-[12deg] hover:scale-110"
            />
          </a>

          <a
            href="https://github.com/C0nfu5ing-5pring"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex items-center justify-center"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20 object-contain cursor-pointer transition-transform duration-200 ease-in-out hover:rotate-[12deg] hover:scale-110"
            />
          </a>
        </div>
      </div>
    </motion.div>,
    document.body,
  );
};

export default ContactCard;
