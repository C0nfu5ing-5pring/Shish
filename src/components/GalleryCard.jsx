import { motion, useDragControls } from "motion/react";

import bbpsHackathonImage2 from "../images/gallery/bbpsHackathonImage02.jpeg";
import me from "../images/gallery/me.jpg";
import me2 from "../images/gallery/me2.jpg";
import mum from "../images/gallery/mum.jpg";
import nani_nana from "../images/gallery/nani_nana.jpg";
import mum2 from "../images/gallery/mum2.jpg";
import havenAhm from "../images/gallery/havenAhm.png";
import fileIcon from "../images/icons/fileIcon.png";
import family from "../images/gallery/family.jpg";

import { useState, useRef } from "react";

const folders = [
  { name: "Me" },
  { name: "Family" },
  { name: "Friends" },
  { name: "Random" },
];

const images = [
  { src: me, alt: "It's me!", category: "Me" },
  { src: me2, alt: "It's me! (again)", category: "Me" },
  { src: mum, alt: "Mum", category: "Family" },
  { src: mum2, alt: "Mum", category: "Family" },
  {
    src: nani_nana,
    alt: "My Maternal Grandparents",
    category: "Family",
  },
  {
    src: havenAhm,
    alt: "Me at Haven Ahmedabad - 2026",
    category: "Me",
  },
  {
    src: bbpsHackathonImage2,
    alt: "BBPS Hackathon 2024 - Felicitation",
    category: "Me",
  },
  {
    src: family,
    alt: "My family!",
    category: "Family",
  },
];

const GalleryCard = ({
  containerRef,
  onClose,
  activeWindow,
  setActiveWindow,
}) => {
  const isActive = activeWindow === "gallery";

  const cardRef = useRef(null);
  const dragControls = useDragControls();

  const [selectedFolder, setSelectedFolder] = useState(null);

  const filteredImages = images.filter(
    (image) => image.category === selectedFolder,
  );

  return (
    <motion.div
      ref={cardRef}
      drag
      dragElastic={0}
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={containerRef}
      onMouseDown={() => setActiveWindow("gallery")}
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        y: 10,
      }}
      whileDrag={{
        scale: 0.98,
      }}
      className={`window absolute top-14 left-1/2 -translate-x-1/2 w-[90vw] md:w-[420px] max-h-[calc(100%-68px)] flex flex-col ${
        isActive ? "z-50" : "z-10"
      }`}
    >
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="title-bar flex items-center justify-between touch-none cursor-grab active:cursor-grabbing"
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

        <h1 className="title">{selectedFolder || "Polaroid Now"}</h1>
      </div>

      <div className="details-bar flex justify-between">
        <span>
          {selectedFolder
            ? `${filteredImages.length} items`
            : `${folders.length} folders`}
        </span>
      </div>

      <div className="window-pane min-h-0 overflow-y-auto">
        {selectedFolder ? (
          <div className="p-3">
            <button
              onClick={() => setSelectedFolder(null)}
              className="text-xs font-bold mb-3 hover:underline"
            >
              ← Back to folders
            </button>

            <div className="grid grid-cols-2 gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="border-2 border-black p-1 h-fit transition-transform hover:rotate-2 hover:scale-[1.02]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-auto block"
                    data-cursor="pointer"
                  />
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <p className="text-xs text-center py-8">No pictures here yet!</p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 p-3">
            {folders.map((folder, index) => (
              <div
                key={index}
                onClick={() => setSelectedFolder(folder.name)}
                className="flex flex-col items-center justify-center gap-1 group cursor-pointer"
              >
                <img
                  src={fileIcon}
                  alt=""
                  draggable="false"
                  className="w-14 h-14 object-contain transition-transform duration-200 group-hover:scale-110"
                />

                <p className="text-xs font-bold text-center group-hover:underline">
                  {folder.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default GalleryCard;
